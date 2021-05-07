(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[2155],{4352:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(8988),s={title:"Consento Vocabulary"},l={unversionedId:"vocabulary",id:"vocabulary",isDocsHomePage:!1,title:"Consento Vocabulary",description:"This repository's purpose is to define, explain and discussion the terminology used throughout Consento.",source:"@site/docs/vocabulary.md",sourceDirName:".",slug:"/vocabulary",permalink:"/docs/vocabulary",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/docs/vocabulary.md",version:"current",lastUpdatedBy:"Martin Heidegger",lastUpdatedAt:1620385883,formattedLastUpdatedAt:"5/7/2021",frontMatter:{title:"Consento Vocabulary"},sidebar:"docs",previous:{title:"Decentralized Notification System",permalink:"/docs/notification"},next:{title:"FAQ",permalink:"/docs/faq"}},p=[{value:"Channel",id:"channel",children:[]},{value:"Device",id:"device",children:[]},{value:"Pairing",id:"pairing",children:[]},{value:"Relation",id:"relation",children:[]},{value:"Space",id:"space",children:[]},{value:"User ID",id:"user-id",children:[]},{value:"Unlock / run an operation",id:"unlock--run-an-operation",children:[]},{value:"Lock / run an operation",id:"lock--run-an-operation",children:[]},{value:"Revoke",id:"revoke",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Key holders",id:"key-holders",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This repository's purpose is to define, explain and discussion the terminology used throughout ",(0,o.kt)("em",{parentName:"p"},"Consento"),"."),(0,o.kt)("p",null,"Consistency of the vocabulary is important for mutal understanding. Some terms may be used in other applications and contexts with different meaning, which can cause confusion for users and developers. This document should be the reference of what vocabulary is used by ",(0,o.kt)("em",{parentName:"p"},"Consento"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Additions and updates should be submitted as pull requests. "),(0,o.kt)("li",{parentName:"ul"},"A headline starts with the currently used ",(0,o.kt)("em",{parentName:"li"},"name")," of the term: ",(0,o.kt)("inlineCode",{parentName:"li"},"## term"))),(0,o.kt)("p",null,"Each term should be described answering the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What does this term mean in ",(0,o.kt)("em",{parentName:"li"},"Consento"),"? What are the main characteristics?"),(0,o.kt)("li",{parentName:"ul"},"What does the term ",(0,o.kt)("strong",{parentName:"li"},"not")," mean in ",(0,o.kt)("em",{parentName:"li"},"Consento"),"?"),(0,o.kt)("li",{parentName:"ul"},"What alternative terms exist (in other contexts/projects/use cases)?")),(0,o.kt)("p",null,"And just add anything else that is important to describe a term in the context of Consento. "),(0,o.kt)("p",null,"Terms are listed in alphabetical order."),(0,o.kt)("h2",{id:"channel"},"Channel"),(0,o.kt)("p",null,"[TBD]"," main characteristics\nproposal - A channel is an end-to-end communication network, between 1 or more users and each of their associated unique devices. The channel is a secure and private network which exists only in-between the set of these unique devices.\nThe channel is initiated with the set up of an operation (accessing an onilne account, decrypting an archive, ...) and gather all actions related to that operation (request to unlock, unlocked by, edited, ...) "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"connection, "),(0,o.kt)("h2",{id:"device"},"Device"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"device")," is a physical hardware like a smartphone, a compputer, an IoT device, a server, a notebook, etc.. It has a ",(0,o.kt)("strong",{parentName:"p"},"unique")," identifier, which is important to revoke access to a device, if it has been lost for example."),(0,o.kt)("p",null,"The first time ",(0,o.kt)("em",{parentName:"p"},"Consento")," is run on a device, there will be a ",(0,o.kt)("a",{parentName:"p",href:"#device"},"Device Setup")," to perform actons like applying access protection (i.e. password, PIN, biometric sensors, etc.) and assigning a device name. The setup will also create a unique identifier internally."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"Setting up a ",(0,o.kt)("em",{parentName:"p"},"device")," is not creating a ",(0,o.kt)("a",{parentName:"p",href:"#space"},"space"),'. It only configures a specific device and ensures that its unique configuration is not going to be "copied" to other devices. The device integrity is ensured.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"none")),(0,o.kt)("h2",{id:"pairing"},"Pairing"),(0,o.kt)("p",null,"Pairing is the process to connect two devices for the first time and exchange a set of unique information between these 2 devices, probably similar to how we used to pair Bluetooth devices. The pairing process accounts for a handshake; devices exhange a unique set of private-public keys. The device-to-device communication is end-to-end encrypted. The pairing can be done via analogic connection (unique QR code scanning) or via distance connection (unique identifier)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"proposal - The pairing process ensures that each device knows other devices as unique devices. It ensures that device-to-device connections (that are the communication vectors on which channels are built) are secure and not open."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"Handshake"),(0,o.kt)("h2",{id:"relation"},"Relation"),(0,o.kt)("p",null,"proposal - A relation is a responsible actor as end-point of the channel. A relation can be a human person (a legal individual), a legal person (an organization, a corporation, a NGO, a governement, a brand, a service provider, ...), a registered device (IoT, server, ...). A relation sets up one USER ID on 1 or more devices. Via its devices, the relation is connected to other users."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"It means that a realtion is a unique and identifiable end-point. That relation bears forms of responsibility in the private and closed networks it is part of.\n","[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("h2",{id:"space"},"Space"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"space")," is created after the setup of a ",(0,o.kt)("a",{parentName:"p",href:"#device"},"device"),". The purpose of a ",(0,o.kt)("em",{parentName:"p"},"space"),' is to provide separation for different purposes, for example a "private" and a "business" space. '),(0,o.kt)("p",null,"There can be more spaces registered on a device, but there must be at least one to use ",(0,o.kt)("em",{parentName:"p"},"Consento"),". Spaces can be cloned from other devices for example via ",(0,o.kt)("a",{parentName:"p",href:"#pairing"},"pairing"),", and they can be kept in sync."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"There is no central instance to manage spaces. Spaces only exist on devices. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"account, user, workspace, realm, group, organization, wallet, repository, identity, profile, setup"),(0,o.kt)("h2",{id:"user-id"},"User ID"),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("h2",{id:"unlock--run-an-operation"},"Unlock / run an operation"),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("h2",{id:"lock--run-an-operation"},"Lock / run an operation"),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("h2",{id:"revoke"},"Revoke"),(0,o.kt)("p",null,"Proposal -- Revoke a device from a user key chain / circle of devices."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("h2",{id:"delete"},"Delete"),(0,o.kt)("p",null,'Proposal -- Delete a user iD from a device, ie. reset the device to "new device".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"[TBD]"," description"),(0,o.kt)("h2",{id:"key-holders"},"Key holders"),(0,o.kt)("p",null,"Proposal -- A Key holder is a relation who have been asked and who accepted to hold part of a secret. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What it doesn't mean:")),(0,o.kt)("p",null,"Proposal -- It means that the relation holds on his/her device(s) part of the secret and is needed to unlock the operation. It means that the key holder shares part of the responsibility for in the access management of this operation. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternative terms:")),(0,o.kt)("p",null,"Lockee"),(0,o.kt)(r.Cz,{author:"Consento",license:"CC-BY",mdxType:"License"}))}d.isMDXComponent=!0}}]);