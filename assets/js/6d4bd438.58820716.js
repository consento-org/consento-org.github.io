(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[2880],{6104:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r={title:"Private Information Lookup and Filter",section:"blocks",author:"martin",license:"CC-BY",year:2021},s={unversionedId:"bit",id:"bit",isDocsHomePage:!1,title:"Private Information Lookup and Filter",description:"[State: in-planning]",source:"@site/docs/bit.md",sourceDirName:".",slug:"/bit",permalink:"/docs/bit",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/docs/bit.md",version:"current",lastUpdatedBy:"neo-wsbi",lastUpdatedAt:1628602618,formattedLastUpdatedAt:"8/10/2021",frontMatter:{title:"Private Information Lookup and Filter",section:"blocks",author:"martin",license:"CC-BY",year:2021},sidebar:"docs",previous:{title:"Timestamp synchronization",permalink:"/docs/time"},next:{title:"Address Books",permalink:"/docs/book"}},l=[{value:"Background",id:"background",children:[]},{value:"Blinding Identity Taxonomy",id:"blinding-identity-taxonomy",children:[]},{value:"Functional goal",id:"functional-goal",children:[]},{value:"Possible Beneficiaries",id:"possible-beneficiaries",children:[]}],d={toc:l};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[State: in-planning]"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TLDR;")," Consento is used to exchange data. When we exchange data we want to use the BIT standard\nto be able to declare the privacy information for each field that is submitted and also want to be able\nto prevent some partners to receive a particular kind of private information.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Consento allows to exchange data between individuals and/or companies. In this process there may be some\ndata that is exchanged only after approval and other that is usually not exchanged."),(0,o.kt)("h2",{id:"blinding-identity-taxonomy"},"Blinding Identity Taxonomy"),(0,o.kt)("p",null,"Instead of trying to come up with our own standard for fields, we have been looking into preexisting defintions and\nstumbled upon the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.kantarainitiative.org/Blinding-Identity-Taxonomy-Report-Version-1.0.pdf"},'"Blinding Identity Taxonomy"'),",\npublished by the ",(0,o.kt)("a",{parentName:"p",href:"https://kantarainitiative.org/"},"Kantara Initiative"),"."),(0,o.kt)("p",null,"It specifies 49 different categories of data that may be excluded from data transfer or not."),(0,o.kt)("h2",{id:"functional-goal"},"Functional goal"),(0,o.kt)("p",null,"The system should consist of a set of primitives and crypto tools that allow to specify, highlight, encrypt or remove private fields\nof a given data sets."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},'"Schema definition"')," For a data structure, defined by the user or a developer, we need to be able to specify which fields should be considered blinding taxonomy and which should not."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let { BitSchema, Type } = require('@consento/bit')\nlet schema = new BitSchema({\n  name: Type.NAME\n})\nlet dataSet = { name: 'henry', sessionTime: 12 }\nschema.matches(dataSet) // figure out if there are fields in this data that are sensitive.\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},'"Partial cryptography"')," A tool to encrypt and decrypt the fields of the schema definition with keys derived for each type. This allows to send data to other parties and only later giving permission to access particular fields."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let { encrypt, decrypt } = require('@consento/bit')\nlet { key, partiallyEncrypted } = encrypt(dataSet, schema)\ndecrypt(partiallyEncrypted, key)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},'"Contract definition"')," Since different users may want to share different properties with different other users we need a means to specify which\nfields are supposed to be readable by the receiving party and which fields should be hidden or removed."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let { Contract } = require('@consento/bit')\n\nlet contract = new Contract({\n  ...Contract.HIDE_ALL,\n  [Type.Name]: Contract.PLAIN_TEXT,\n  [Type.PhysicalAddress]: Contract.ENCRYPT\n})\nencrypt(dataSet, schema, contract)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},'"Schema derivation"'),' When passing a given data set through he encryption process, it will transform some of the properties from "plaintext" to\n"possibly encrypted". It is stressful to update any given data structure definition to contain all those new variants. What we need is an\nautomation tool that allows us to derive new data-schemas from existing data-schemas ',(0,o.kt)("em",{parentName:"p"},"(preferably JSONSchema)")," combined with the bit-schema."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let { JSONSchema } = require('@consento/bit')\nawait JSONSchema.derive('https://schema.url', schema)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},'"Common Schema Library"')," As many people may already want to use common data sets (such as google or facebook export data) we need a repository\nthat already holds definitions for common data types."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let knownSchemas = require('@consento/bit-schemas/google')\n")))),(0,o.kt)("h2",{id:"possible-beneficiaries"},"Possible Beneficiaries"),(0,o.kt)("p",null,"This system can both be used for communication and as a internal tool to enforce data-privacy guidelines. Examples could be Survey providers that want to drop private fields after the survey results are compiled."))}c.isMDXComponent=!0}}]);