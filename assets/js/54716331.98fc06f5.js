(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[5102],{844:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=i(2122),n=i(9756),r=(i(7294),i(3905)),a={title:"Decentralized Notification System",section:"blocks",license:"CC-BY",author:"martin",year:2021},s={unversionedId:"notification",id:"notification",isDocsHomePage:!1,title:"Decentralized Notification System",description:"[State: concept-v2]",source:"@site/docs/notification.md",sourceDirName:".",slug:"/notification",permalink:"/docs/notification",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/docs/notification.md",version:"current",lastUpdatedBy:"Martin Heidegger",lastUpdatedAt:1623160669,formattedLastUpdatedAt:"6/8/2021",frontMatter:{title:"Decentralized Notification System",section:"blocks",license:"CC-BY",author:"martin",year:2021},sidebar:"docs",previous:{title:"Decentralized Groups",permalink:"/docs/group"},next:{title:"Consento Vocabulary",permalink:"/docs/vocabulary"}},c=[{value:"Background",id:"background",children:[]},{value:"Prior Art",id:"prior-art",children:[]},{value:"First attempt &amp; Things that need to be different",id:"first-attempt--things-that-need-to-be-different",children:[]},{value:"Future Steps",id:"future-steps",children:[]}],l={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[State: concept-v2]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TLDR;")," Decentralized applications need (mobile) notifications that arrive with certainty\nat a group of devices.")),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Notification systems for mobile devices and desktops are required to be tunneled through the services\nby ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications"},"Google")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW1"},"Apple"),". These services are deeply tied to the the Developer ID, making the\ndeveloper ID responsible for abuse. This means: any decentralized application needs a centralized server\nsetup for notifications. \ud83d\ude14"),(0,r.kt)("p",null,"The goal is to provide a zero-knowledge, efficient notification server that can pass notifications\nfrom one client to another without being able to look inside the envelope while still preventing spam to\nclients. The server is to utilize WebSockets when the application is in the foreground for quicker\nprocessing and to only use push services when necessary."),(0,r.kt)("h2",{id:"prior-art"},"Prior Art"),(0,r.kt)("p",null,"We are particularly motivated to see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/signalapp/Signal-Server/tree/master/service/src/main/java/org/whispersystems/textsecuregcm/push"},"Signal Notification System"),". It functions similar to what we have\nin mind. It is quick and proven in practice but it lacks a few details important to use. It stops a little short\nin terms of the security we need."),(0,r.kt)("p",null,"With the v2 of the Consento Notification server we would like to make it as usable for\nany kind of future Notification system."),(0,r.kt)("h2",{id:"first-attempt--things-that-need-to-be-different"},"First attempt & Things that need to be different"),(0,r.kt)("p",null,"For the first version of Consento we already developed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/consento-org/notification-server/"},"a notification-server"),"\nwhich taught us important lessons for a second version"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Devices need to be grouped in order to make sure that the notification arrives at the device needed."),(0,r.kt)("li",{parentName:"ol"},"A notification that arrived needs view-receipts in order to stop distributing the notification to unused devices."),(0,r.kt)("li",{parentName:"ol"},"Request Limiting needs to be as restrictive as possible."),(0,r.kt)("li",{parentName:"ol"},"It is a good idea to register devices tokens on every startup."),(0,r.kt)("li",{parentName:"ol"},"Notifications by Apple & Google can not be relied on.")),(0,r.kt)("h2",{id:"future-steps"},"Future Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restructure notification code to use hypercore synching and groups."),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)"},"sharding")," of the notification servers to remove possible bottle necks."),(0,r.kt)("li",{parentName:"ul"},"Investigate possibility of background notification polling using a DHT instead of signalling servers.")))}p.isMDXComponent=!0}}]);