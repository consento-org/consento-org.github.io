# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Adding content

You can add content freely to this page, though if you do: please specify the
license, author and year on the bottom of the page.

_Example_: [`/src/pages/about.md`](./src/pages/about.md).

## Adding images

There are four different kinds of images that you may add to this repository.

- **Original art**: If you created artwork for this page, you need to decide the license under which you want to publish it.
    for the list of licenses see [the `LICENSE` file](./LICENSE). Then add it to the `static/img/<yourhandle>/<license>` folder
    _(your handle is also noted in [the `LICENSE` file](./LICENSE))_.

    _(Example)_ <br/>`static/img/tanja/cc-by-nc-sa/icons/icon_diversity.svg` is published under the [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)
    license by [Tanja](./src/pages/team/tanja.md).

    ---

- **Pixabay or Unsplash**: Images that come from the [Pixabay](https://pixabay.com) or [Unsplash](https://unsplash.com) platform need
    to go in the `static/img/external/pixabay` or `static/img/external/unsplash` folder. Change the name of the file to following pattern:
    `<userhandle>_<fileid>_<variant>.jpg`.

    _(Example)_ <br/>`static/img/external/unsplash/andrewtneel_ute2XAFQU2I_cut.jpg` is a `cut` _(meaning cut in size)_ variant of the
    image at https://unsplash.com/photos/ute2XAFQU2I by https://unsplash.com/@andrewtneel.

    ---

- **Fair use**: Some work such as logos may be unclear in its license. It may fall under [Fair Use](https://en.wikipedia.org/wiki/Fair_use).
    In this case you need to be careful and maybe read [this](https://fairuse.stanford.edu/overview/fair-use/four-factors/) and 
    put it in the `static/img/external/fair-use` folder. Please state in the git-commit message where you retreived it.

**Screenshots**: Screenshots may be "fair use" or fall under an original Art license depending on the content. Please refer to
[this Wikipedia article](https://commons.wikimedia.org/wiki/Commons:Screenshots#:~:text=Screenshots%20are%20derivative%20works%20and,or%20in%20the%20public%20domain.)
for clarification.

**After** adding the image please run the `$ npm run img` script in the command line. It will compress the image and add the license
to the metadata information.

## License

See [the `LICENSE` file](./LICENSE) for detailed information.
