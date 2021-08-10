(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[4295],{5028:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i={title:"Decentralized Resource Interface",section:"blocks",author:"martin",license:"CC-BY",year:2021},c={unversionedId:"dcurl",id:"dcurl",isDocsHomePage:!1,title:"Decentralized Resource Interface",description:"[State: concept]",source:"@site/docs/dcurl.md",sourceDirName:".",slug:"/dcurl",permalink:"/docs/dcurl",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/docs/dcurl.md",version:"current",lastUpdatedBy:"Tanya",lastUpdatedAt:1628583664,formattedLastUpdatedAt:"8/10/2021",frontMatter:{title:"Decentralized Resource Interface",section:"blocks",author:"martin",license:"CC-BY",year:2021},sidebar:"docs",previous:{title:"Address Books",permalink:"/docs/book"},next:{title:"Federated Email Verifcation",permalink:"/docs/email"}},l=[{value:"Background",id:"background",children:[]},{value:"A library and a command line tool",id:"a-library-and-a-command-line-tool",children:[]},{value:"Relevancy &amp; Beneficiaries",id:"relevancy--beneficiaries",children:[]},{value:"Why JavaScript",id:"why-javascript",children:[]}],s={toc:l};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[State: concept]"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TLDR;")," A command line tool and library to load entities from decentralized addresses.\nSimilar to libcurl/curl on the command line.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Over the past years there have been several protocols implemented to share data using decentralized systems.\n",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/#why"},"IPFS")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://hypercore-protocol.org"},"Hypercore-protocol")," have become popular but probably more prominently the W3C's\n",(0,o.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-core/"},"Decentralized Identity Document")," specification a variety of protocols like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transmute-industries/sidetree.js"},"sidetree")," (using\nethereum and IPFS) or ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lorena-ssi/did-resolver"},"lorena"),"."),(0,o.kt)("p",null,"However there is no unify util to interact with the did resource files, like there are tools to interact with\nweb content such as ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl")," or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AgregoreWeb/agregore-browser"},"Agregore")," browser works on providing a web interface\nfor this and has been working on providing a fetch-compatible API for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RangerMauve/hypercore-fetch"},"hyper")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RangerMauve/js-ipfs-fetch"},"ipfs")," but it\nhasn't come to the point where it offers the functionality for a general audience."),(0,o.kt)("h2",{id:"a-library-and-a-command-line-tool"},"A library and a command line tool"),(0,o.kt)("p",null,"What we propose to build is a JavaScript library similar to fetch that accepts these new lookups:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const fetch = require('decentralized-fetch')\nconst data = await Promise.all([\n  fetch('did:key:zQ3shU9mxTYfMTLceuppoNM5siowHvw3xBk21r855kwgNHNAX'),\n  fetch('hyper://515bbbc1db2139ef27b6c45dfa418c8be6a1dec16823ea7cb9e61af8d060049e/file.txt')\n])\n")),(0,o.kt)("p",null,"Which will load the relevant underlying protocols automatically. Parallel there should also be\na command line tool works much like ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," to download and upload files to decentralized systems:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ decentralized-fetch did:key:zQ3shU9mxTYfMTLceuppoNM5siowHvw3xBk21r855kwgNHNAX\n")),(0,o.kt)("h2",{id:"relevancy--beneficiaries"},"Relevancy & Beneficiaries"),(0,o.kt)("p",null,"Having unified tools both highlight the power of various projects in the decentralized space and\nmake it easier to build new applications and platforms on top of them."),(0,o.kt)("h2",{id:"why-javascript"},"Why JavaScript"),(0,o.kt)("p",null,"Many decentralized projects provide ",(0,o.kt)("inlineCode",{parentName:"p"},"go-lang")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," implementations of their work but ",(0,o.kt)("strong",{parentName:"p"},"all")," provide\nJavaScript implementations which makes JavaScript the best and probably only choice for the beginning."))}d.isMDXComponent=!0}}]);