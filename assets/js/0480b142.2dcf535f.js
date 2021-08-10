(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[836],{5392:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return l},default:function(){return h}});var a=o(2122),s=o(9756),n=(o(7294),o(3905)),i={title:"FAQ"},r={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"What if I have only 1 device?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/docs/faq.md",version:"current",lastUpdatedBy:"Tanya",lastUpdatedAt:1628581939,formattedLastUpdatedAt:"8/10/2021",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Consento Vocabulary",permalink:"/docs/vocabulary"}},l=[{value:"What if I have only 1 device?",id:"what-if-i-have-only-1-device",children:[]},{value:"How fast can I get consent?",id:"how-fast-can-i-get-consent",children:[]},{value:"Is it all logged?",id:"is-it-all-logged",children:[]},{value:"Is it backed up?",id:"is-it-backed-up",children:[]},{value:"How many people should I involve in the consent mechanism?",id:"how-many-people-should-i-involve-in-the-consent-mechanism",children:[]},{value:"How do I choose the pool of key holders to include?",id:"how-do-i-choose-the-pool-of-key-holders-to-include",children:[]},{value:"Can consent be customised?",id:"can-consent-be-customised",children:[]},{value:"Is Consento HIPAA or GDPR compliant?",id:"is-consento-hipaa-or-gdpr-compliant",children:[]}],c={toc:l};function h(e){var t=e.components,o=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-if-i-have-only-1-device"},"What if I have only 1 device?"),(0,n.kt)("p",null,"Although this is a common situation, this means that your Consento app is poorly secured. If you lose your device, break it or erase the app, your user ID and all related auth will be lost. "),(0,n.kt)("p",null,"Note that this is a situation a user may 'return to' temporarily, if they were to have 2 devices associated with their user ID and remove 1 of the device (to add a new one for instance)."),(0,n.kt)("p",null,"For this reason, for user ID with only 1 device,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"relations will be notified that this user has a poor set up of devices"),(0,n.kt)("li",{parentName:"ul"},"some features will be activated only if 2 devices are associated to a user ID ; ex. becoming a new key holder of a relation's lock"),(0,n.kt)("li",{parentName:"ul"},"prompts and guidance will encourage user to add other devices or services, to ensure secure back up and safe recovery process")),(0,n.kt)("h2",{id:"how-fast-can-i-get-consent"},"How fast can I get consent?"),(0,n.kt)("p",null,"To access a file or a particular app, we all look for velocity. With Consento, you may consider 3 use cases: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"if you are accessing files or apps secured using your own paired devices, then the time to authenticate yourself with Consento is the same as a MFA. One device will trigger the other paired one(s) and from the other devices you may authenticate yourself.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'if you are accessing files or apps secured by splitting the access management between several key holders, then the time to receive the consent depends on the time the other key holders take to consent. This situation may sound awkward for general digital uses, but it is valuable in other contexts. In cases when handling highly confidential material, this solution is "slow by design". The consent mechanism may be associated with human protocols, like granting request only during office hours, requiring X consents out of Y key holders, etc.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"if you are accessing files or apps secured by splitting the access management between several key holders (like the previous case) but for which the level of security is less critical, Consento allows to work reversely. When you require access, the access is granted automatically after 1 min (for instance) unless any other key holders deny access within that minute. Similarly, the parameters can be customised."))),(0,n.kt)("h2",{id:"is-it-all-logged"},"Is it all logged?"),(0,n.kt)("p",null,"Yes. Requests, requests granted, requests denied, data added, edited, by who, at what time, or potentially at which location, from which device, all is logged into the Hypercore. You can think of it as an Audit Trail feature."),(0,n.kt)("p",null,"If you think of particular use cases where a specific type of log would be valuable, just ",(0,n.kt)("a",{parentName:"p",href:"mailto:keepsafe@consento.org"},"get in touch with us"),"."),(0,n.kt)("h2",{id:"is-it-backed-up"},"Is it backed up?"),(0,n.kt)("p",null,"Yes, as soon as different devices are paired, the content of your Consento app on one device is/can be synchronised on other devices. "),(0,n.kt)("p",null,"Manually, Consento will allow to add other backup devices. For instance, you will be able to chose which device of yours or of your relations, should keep en encrypted back up of your device. Consento is designed to help you monitor how many encrypted backups there are."),(0,n.kt)("h2",{id:"how-many-people-should-i-involve-in-the-consent-mechanism"},"How many people should I involve in the consent mechanism?"),(0,n.kt)("p",null,"That is a great question, one that has no simple answer because use cases are so diverse."),(0,n.kt)("p",null,"Let's say it is a professional use case, securing access to a confidential dataset (e.g. PII) within a particular team. In this case, Consento will encourage you to add each team member's device, and recommend you to add 2 other key holders as recovery access outside the team, who will ensure that the access will never be compromised."),(0,n.kt)("h2",{id:"how-do-i-choose-the-pool-of-key-holders-to-include"},"How do I choose the pool of key holders to include?"),(0,n.kt)("p",null,"Similarly to the previous question, it is a question with no simple answer because use cases are so diverse."),(0,n.kt)("p",null,'One important note thought, is that the question should rather be "how do I choose ',(0,n.kt)("em",{parentName:"p"},"and maintain"),' the pool of key holders?". Indeed, the choice you make at first requires to monitor the trust in each of these key holders over time and the level of security they maintain over time. '),(0,n.kt)("p",null,"Consento will display an indicator of the level of security given the setup of each user. This indicator does not disclose critical information, but notify you when one of your key holder security level lowers (when s/he changes phone, asks recovery, etc.). "),(0,n.kt)("p",null,"Over time, Consento enable you to manage the key holders and the privacy rules associated to each lock. You can add/revoke key holders or devices, edit the parameters to consent, etc."),(0,n.kt)("h2",{id:"can-consent-be-customised"},"Can consent be customised?"),(0,n.kt)("p",null,"Yes. Humans are creative and this creativity is one way to add layers of security to your data accesses."),(0,n.kt)("p",null,"At the moment, Consento will allow to parameter to max time to respond, the min nb of key holder required to grant access. "),(0,n.kt)("p",null,"We already think of adding other parameters, like time restriction (e.g. outside working hours), location (e.g. in a particular space, or not outside a geographic space), or messages (e.g. associated with the request, a message could be added to feel like James Bond authenticating himself to his local informant)."),(0,n.kt)("p",null,"Outside Consento apps, you could also consider enacting that this consent can be sent/granted only when people are in a video meeting together."),(0,n.kt)("p",null,"If you think of particular use cases where a specific type of customisation would be valuable, ",(0,n.kt)("a",{parentName:"p",href:"mailto:keepsafe@consento.org"},"drop us a line"),"."),(0,n.kt)("h2",{id:"is-consento-hipaa-or-gdpr-compliant"},"Is Consento HIPAA or GDPR compliant?"),(0,n.kt)("p",null,"Use cases are very diverse and each infrastructure setting should be examine case by case. But to mention aa few elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GDPR requires the consent for share data and the right to forget. For both of these aspects, Consento technology enables the consent mechanism at the core, and the right to forget is just a delete of the master key. Encrypted data become inert then.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"HIPAA is location relevant. With the geo-fencing principle described in the previous Question, Consento allows to be HIPAA compliant."))))}h.isMDXComponent=!0}}]);