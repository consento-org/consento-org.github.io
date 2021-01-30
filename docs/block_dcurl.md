---
title: Decentralized Resource Interface
---
import { Image, License } from '../src/theme/consento'

[State: early-phase]

> **TLDR;** A command line tool and library to load entities from decentralized addresses.
> Similar to libcurl/curl on the command line.

## Background

Over the past years there have been several protocols implemented to share data using decentralized systems.
[IPFS][ipfs] and the [Hypercore-protocol][hyp] have become popular but probably more prominently the W3C's
[Decentralized Identity Document][did] specification a variety of protocols like [sidetree][sidetree] (using
ethereum and IPFS) or [lorena][lorena].

However there is no unify util to interact with the did resource files, like there are tools to interact with
web content such as [curl][curl] or [fetch][fetch]. The [Agregore][A] browser works on providing a web interface
for this and has been working on providing a fetch-compatible API for [hyper][hyfe] and [ipfs][ipfsfe] but it
hasn't come to the point where it offers the functionality for a general audience.

[ipfs]: https://ipfs.io/#why
[hyp]: https://hypercore-protocol.org
[did]: https://w3c.github.io/did-core/
[sidetree]: https://github.com/transmute-industries/sidetree.js
[lorena]: https://www.npmjs.com/package/@lorena-ssi/did-resolver
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[curl]: https://curl.se/
[A]: https://github.com/AgregoreWeb/agregore-browser
[hyfe]: https://github.com/RangerMauve/hypercore-fetch
[ipfsfe]: https://github.com/RangerMauve/js-ipfs-fetch

## A library and a command line tool

What we propose to build is a JavaScript library similar to fetch that accepts these new lookups:

```javascript
const fetch = require('decentralized-fetch')
const data = await Promise.all([
  fetch('did:key:zQ3shU9mxTYfMTLceuppoNM5siowHvw3xBk21r855kwgNHNAX'),
  fetch('hyper://515bbbc1db2139ef27b6c45dfa418c8be6a1dec16823ea7cb9e61af8d060049e/file.txt')
])
```

Which will load the relevant underlying protocols automatically. Parallel there should also be 
a command line tool works much like `curl` to download and upload files to decentralized systems:

```sh
$ decentralized-fetch did:key:zQ3shU9mxTYfMTLceuppoNM5siowHvw3xBk21r855kwgNHNAX
```

## Relevancy & Beneficiaries

Having unified tools both highlight the power of various projects in the decentralized space and
make it easier to build new applications and platforms on top of them.

## Why JavaScript

Many decentralized projects provide `go-lang` or `c` implementations of their work but **all** provide
JavaScript implementations which makes JavaScript the best and probably only choice for the beginning.


<License author="martin" license="CC-BY" year="2021"  />
