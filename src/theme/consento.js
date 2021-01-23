import React from 'react'
import imageLicenses from './license.json'

const { licenses: licenseLinks } = imageLicenses

const imageLookup = (() => {
  const lookup = {}
  for (const author of imageLicenses.authors) {
    if (!author.files) continue
    for (const { license, prefix, list } of author.files) {
      for (const file of list) {
        lookup[`${prefix || ''}${file}`] = { author, license }
      }
    }
  }
  return lookup
})()

const authorLookup = (() => {
  const lookup = {}
  for (const author of imageLicenses.authors) {
    lookup[author.name] = author
    if (author.short) {
      lookup[author.short] = author
    }
  }
  return lookup
})()

export function Author ({ author }) {
  author = authorLookup[author] || author || authorLookup.Consento
  if (typeof author === 'string') {
    return <span className="license__author">{author}</span>
  }
  return <a rel="author" href={author.link}>{author.name}</a>
}

export function Authors ({ author }) {
  const authors = Array.isArray(author) ? author : [author]
  return authors.map((author, index) => {
      if (index !== 0) {
        return <>
          {index === authors.length - 1 ? ' and ' : ', '}
          <Author key={index} author={author} />
        </>
      }
      return <Author key={index} author={author} />
    })
}

/**
 * Usage:
 * 
 *  <License /> ................................................... will give the copyright to he consento team
 *  <License author="martin" /> ................................... will lookup from the user list
 *  <License author={{ name: 'Steve' }} /> ........................ you can set a own name
 *  <License author={{ name: 'Ana', link: 'https://g.co' }} />  ... And you can give the author a link
 *  <License author={["martin", { name: 'Steve' }]} /> ............ You can also specify multiple authors!
 *  <License year='2021' /> ....................................... You can also optionally set a year (recommended if known)
 *  <License license="CC-BY-SA" /> ................................ The creative-commons licenses have shortcuts: CC-BY, CC-BY-SA, CC-BY-NC, CC-BY-NC-SA, CC-BY-NC-ND, CC0
 *  <License text="Custom license" /> ............................. Custom licenses you can specify via text
 *  <License link='https://user.com' /> ........................... For custom licenses you can/should provide a link
 */
export function License ({ author, year, license, text, link } = {}) {
  link = link || (license ? licenseLinks[license] : null)
  text = text || license || '©️'
  let licenseNode = link
    ? <a rel="license" href={link}>{text}</a>
    : <span className="license__text">{text}</span>
  return <footer><small>{text === '©️' ? null : 'License:'} {licenseNode} by <Authors author={author} />{year ? <>, <span className="license__year">{year}</span></> : null}</small></footer>
}

export function Image ({ src, alt, caption, license }) {
  src = src.replace(/^\//g, '')
  license = license || imageLookup[src]
  return <figure className="kg-card kg-image-card kg-card-hascaption">
    <img src={`/${src}`} className="kg-image" alt={alt || ''} />
    {
      license ? <License {...license} /> : null
    }
    <figcaption>{caption}</figcaption>
  </figure>
}
