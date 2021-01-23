const { writeFileSync, readFileSync, writeFile: writeFileCb } = require('fs')
const { unlink, writeFile } = require('fs').promises
const { src, dest, series } = require('gulp')
const changedInPlace = require('gulp-changed-in-place')
const { exiftool } = require('exiftool-vendored')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const livereload = require('gulp-livereload')
const through = require('through2')
const pump = require('pump')
const beeper = require('beeper')
const markdownIt = require('markdown-it')()
const minimatch = require('minimatch')
const path = require('path')
const changeCache = (() => {
  let cache = {}
  try {
    cache = require('./.change-cache.json')
  } catch (e) {}
  const absoluteCache = {}
  for (const name in cache) {
    absoluteCache[path.resolve(__dirname, name)] = cache[name]
  }
  return absoluteCache
})()
const imagePattern = 'static/img/**/*.{svg,png,gif,jpg}'
const authorLookups = [
  { link: 'https://pixabay.com/service/license', prefix: 'https://pixabay.com/users/' },
  { link: 'https://unsplash.com/license', prefix: 'https://unsplash.com/@' }
]

const handleError = done => (err, data) => {
  if (err) beeper()
  return done(err, data)
}

function getBlock (type, tokens, offset = 0) {
  const start = tokens.findIndex((item, index) => index >= offset && item.type === `${type}_open`)
  if (start === -1) {
    return
  }
  const startItem = tokens[start]
  const end = tokens.findIndex((item, index) => index > start && item.type === `${type}_close` && item.level === startItem.level)
  if (end === -1) {
    return
  }
  return { start, end, tokens: tokens.slice(start, end) }
}

function getLink (tokens, offset = 0) {
  const found = getBlock('link', tokens, offset)
  if (found === undefined) {
    return
  }
  let name = found.tokens[1].content
  let short = undefined
  const parts = /^"([^"]+)"\s+(.*)/.exec(name)
  if (parts) {
    short = parts[1]
    name = parts[2]
  }
  return {
    link: found.tokens[0].attrs.find(attr => attr[0] === 'href')[1],
    short,
    name
  }
}

function nBlocks (type, tokens, n = -1, op = block => block, offset = 0) {
  const result = []
  let block
  while (block = getBlock(type, tokens, offset)) {
    const part = op(block)
    if (part !== undefined) {
      result.push(part)
      if (n > 1 && result.length === n) {
        break
      }
    }
    offset = block.end + 1
  }
  return result
}

function allBlocks (type, tokens, op, offset = 0) {
  return nBlocks(type, tokens, -1, op, offset)
}

const noMatchGlob = { match: () => false }

function getLicenseDeclaration (mainCb) {
  const tokens = markdownIt.parse(readFileSync(`${__dirname}/LICENSE`, 'utf8'))
  const blocks = nBlocks('bullet_list', tokens, 2)
  if (blocks.length < 2) {
    return []
  }
  let [authors, licenses] = blocks.map(block =>
    allBlocks('list_item', block.tokens)
      .map(item => item.tokens.find(item => item.type === 'inline'))
      .filter(Boolean)
      .map(({ children: liNodes }) => {
        const link = getLink(liNodes)
        const code = liNodes.find(item => item.type == 'code_inline')
        if (!link || !code) {
          return
        }
        return {
          link,
          glob: new minimatch.Minimatch(`${__dirname}/${code.content}`)
        }
      })
      .filter(Boolean)
  )
  const files = []
  const getPathAuthor = (filePath, prefix) => {
    const user = path.basename(filePath).split('_')[0]
    const link = `${prefix}${user}`
    let author = authors.find(author => author.link.link === link)
    if (!author) {
      author = {
        link: { link, name: `@${user}` },
        glob: noMatchGlob
      }
      authors.push(author)
    }
    return author
  }
  pump([
    src(imagePattern),
    through.obj((file, _, cb) => {
      const findMatch = entry => entry.glob.match(file.path)
      const license = licenses.find(findMatch)
      if (!license) return cb()
      let author = authors.find(findMatch)
      if (!author) {
        for (const authorLookup of authorLookups) {
          if (license.link.link === authorLookup.link) {
            author = getPathAuthor(file.path, authorLookup.prefix)
            break
          }
        }
        if (!author) {
          console.warn(`Warning: "${file.path}" has license "${license.link.name}" but no author specified!`)
          return cb()
        }
      }
      const relativePath = path.relative(`${__dirname}/static/`, file.path)
      const fileList = files.find(other => other.author === author && other.license === license)
      if (!fileList) {
        files.push({
          author,
          license,
          list: [relativePath]
        })
      } else {
        fileList.list.push(relativePath)
      }
      cb()
    })
  ], () => {
    authors = authors.map(author => author.link).sort(sortByLink)
    licenses = licenses.map(license => license.link).sort(sortByLink).reduce((map, license) => {
      map[license.name] = license.link
      return map
    }, {})
    for (const file of files) {
      const { author: { link: author }, license } = file
      if (!author.files) {
        author.files = []
      }
      let list = file.list.sort()
      const prefix = findPrefix(list)
      if (prefix) {
        list = file.list.map(entry => entry.substr(prefix.length))
      }
      author.files.push({
        license: license.link.name,
        prefix,
        list
      })
    }
    for (const author of authors) {
      if (author.files) {
        author.files = author.files.sort(sortByLicense)
      }
    }
    mainCb(null, { authors, licenses })
  })
}

function sortByLicense (a, b) {
  if (a.license > b.license) return 1
  if (a.license < b.license) return -1
  return 0
}

function sortByLink (a, b) {
  if (a.link > b.link) return 1
  if (a.link < b.link) return -1
  return 0
}

function findPrefix (list) {
  if (list.length < 2) {
    return undefined
  }
  let prefix = list[0]
  for (const entry of list.slice(1)) {
    let lastMatch = 0
    for (; lastMatch < prefix.length; lastMatch++) {
      if (entry[lastMatch] !== prefix[lastMatch] ){
        break
      }
    }
    if (lastMatch < prefix.length) {
      prefix = prefix.substr(0, lastMatch)
    }
  }
  if (prefix.length === 0) {
    return undefined
  }
  return prefix
}

function getLicenseLookup () {
  const { authors, licenses } = JSON.parse(readFileSync('src/theme/license.json', 'utf-8'))
  const licenseLookup = {}
  for (const [name, link] of Object.entries(licenses)) {
    licenseLookup[name] = {
      name,
      link,
      text: ` - license: ${name} (see: ${link})`
    }
  }
  const lookup = {}
  for (const author of authors) {
    if (!author.files) continue
    for (const { license: licenseId, prefix, list } of author.files) {
      const license = licenseLookup[licenseId]
      for (const file of list) {
        lookup[path.resolve(__dirname, `static/${prefix || ''}${file}`)] = {
          name: `${license.name} by ${author.name}`,
          licenseText: `by ${author.name} (${author.link})${license.text}`
        }
      }
    }
  }
  return lookup
}
  
  
function toRelative (cache) {
  const relativeCache = {}
  for (const name in cache) {
    relativeCache[path.relative(__dirname, name)] = cache[name]
  }
  return relativeCache
}

function imgFiles () {
  return src(imagePattern, { base: '.' })
}

function imgCompress(done) {
  pump([
    imgFiles(),
    changedInPlace({ cache: changeCache, firstPass: true }),
    imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imageminPngquant({ speed: 5, strip: true, quality: [0.3, 1] }),
      imagemin.svgo()
    ], { verbose: true }),
    dest('.'),
    livereload()
  ], handleError(done))
}

function imgLicense(done) {
  const imageLicenses = getLicenseLookup()
  pump([
    imgFiles(),
    through.obj((file, _, cb) => {
      if (file.isNull()) return cb(null, file);
      if (file.isStream()) return cb(new Error('Streaming not supported'));
      ;(async () => {
        const newLicense = imageLicenses[file.path];
        let changed = false;
        if (/\.svg$/i.test(file.path)) {
          const oldSvg = file.contents.toString('utf8');
          let xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n'
          let svg = oldSvg
            .replace(/(<\?xml.+\?>)\n/m, found => {
              xmlHeader = found
              return ''
            })
            .replace(/<!--(.*)-->\n/m, '')
          if (newLicense !== undefined) {
            svg = `<!-- ${newLicense.licenseText} -->\n${svg}`;
          }
          svg = `${xmlHeader}${svg}`
          if (svg !== oldSvg) {
            await writeFile(file.path, svg);
            changed = true;
          }
        } else {
          const tags = await exiftool.read(file.path);
          const Copyright = newLicense && newLicense.licenseText;
          if (Copyright !== tags.Copyright) {
            await exiftool.write(file.path, { Copyright: Copyright || '' });
            await unlink(`${file.path}_original`);
            changed = true;
          }
        }
        if (changed) {
          console.log(`License: ${newLicense ? newLicense.name : 'UNLICENSED'} → ${path.relative(__dirname, file.path)}`);
        }
      })().then(() => cb(null, file), cb)
    }, cb => {
      exiftool.end(true)
      cb()
    }),
    livereload()
  ], handleError(done))
}

function imgPersist(done) {
  pump([
    imgFiles(),
    changedInPlace({ cache: changeCache }), // calling to update the cache
    livereload()
  ], handleError(() => {
    writeFileSync(`${__dirname}/.change-cache.json`, JSON.stringify(toRelative(changeCache), null, 2))
    done()
  }))
}

function license (done) {
  getLicenseDeclaration(handleError((err, data) => {
    if (err) return done(err)
    writeFileCb('./src/theme/license.json', JSON.stringify(data, null, 2), handleError(done))
  }))
}

const img = series(license, imgCompress, imgLicense, imgPersist)

module.exports = {
  license,
  img,
  watch: () => watch([imagePattern, './LICENSE'], img)
}
