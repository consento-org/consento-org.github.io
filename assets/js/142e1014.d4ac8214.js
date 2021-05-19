(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[8082],{4747:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return o},default:function(){return c}});var i=a(2122),s=a(9756),n=(a(7294),a(3905)),r={title:"Federated Email Verifcation",section:"blocks",author:"martin",license:"CC-BY",year:2021},l={unversionedId:"email",id:"email",isDocsHomePage:!1,title:"Federated Email Verifcation",description:"[State: early-phase]",source:"@site/docs/email.md",sourceDirName:".",slug:"/email",permalink:"/docs/email",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/docs/email.md",version:"current",lastUpdatedBy:"marcchataigner",lastUpdatedAt:1621408631,formattedLastUpdatedAt:"5/19/2021",frontMatter:{title:"Federated Email Verifcation",section:"blocks",author:"martin",license:"CC-BY",year:2021},sidebar:"docs",previous:{title:"Decentralized Resource Interface",permalink:"/docs/dcurl"},next:{title:"Decentralized Groups",permalink:"/docs/group"}},o=[{value:"SaaS, emails and problems",id:"saas-emails-and-problems",children:[]},{value:"Verified Emails",id:"verified-emails",children:[]},{value:"Tool Suite",id:"tool-suite",children:[]},{value:"Benefits",id:"benefits",children:[]},{value:"Technical Details",id:"technical-details",children:[]}],d={toc:o};function c(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"[State: early-phase]"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"TLDR;")," Setup the technical foundation for a federated, decentralized email verification system.")),(0,n.kt)("h2",{id:"saas-emails-and-problems"},"SaaS, emails and problems"),(0,n.kt)("p",null,"SaaS providers that want to offer services and use decentralized ID's may still require email addresses\nfor their system to function. Either because of policy reasons ",(0,n.kt)("em",{parentName:"p"},"(required by law)")," or technical reasons\n",(0,n.kt)("em",{parentName:"p"},"(required by database schemas)"),'. Long story short: setting up an account at a SaaS may require the field\n"email".'),(0,n.kt)("p",null,'As anyone with an email address knows: Spam is an issue and individuals use "spam mail accounts" to log\ninto online services, undermining part of the purpose which may have consequences (eg. announcements of service\noutage).'),(0,n.kt)("h2",{id:"verified-emails"},"Verified Emails"),(0,n.kt)("img",{src:"/img/consento/cc-by-nc-sa/verified_email.png",alt:"Email address 'jane@consento.org' with a 'quality'-mark on the left",style:{border:"1px solid black",height:"2em"}}),(0,n.kt)("p",null,'Usually, email addresses are simply exchanged between parties A (User) & B (SaaS). We propose to add an\nindependent server inbetween that is trusted by both parties and allows a user to signup a SaaS without\ndisclosing the email address and without needing to click that "Verify email address"-button.'),(0,n.kt)("p",null,"For this to work:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user has to send their email address, together with a verification key of a certificate\nto a trusted service."),(0,n.kt)("li",{parentName:"ol"},"That service will send the regular email verification links to the email address."),(0,n.kt)("li",{parentName:"ol"},"The user clicks the verification links and then passes a signature with the service's certificate that\nthe email address is owned by the user."),(0,n.kt)("li",{parentName:"ol"},"Instead of the email address, the user uses a verification email address and signs the requst with\ntheir certificate to sign up to the Saas."),(0,n.kt)("li",{parentName:"ol"},"The SaaS uses the given verification, loads the certificate by the trusted service and accepts the\nemail address without sending an email to it."),(0,n.kt)("li",{parentName:"ol"},"When the SaaS has important announcements to send to the user it uses the trusted-service\nas bridge with a effective rate-limiting in place."),(0,n.kt)("li",{parentName:"ol"},"The user can block a specific service from sending email addresses again using their certifcate at\nthe trusted-service.")),(0,n.kt)("h2",{id:"tool-suite"},"Tool Suite"),(0,n.kt)("p",null,"For this to work we provide:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the specification for the service"),(0,n.kt)("li",{parentName:"ul"},"a GDPR compliant reference implementation to host a trusted service"),(0,n.kt)("li",{parentName:"ul"},"an examplary SaaS that uses the service"),(0,n.kt)("li",{parentName:"ul"},"frontend libraries to highlight the verification.")),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A new SaaS doesn't need to setup a mail service."),(0,n.kt)("li",{parentName:"ul"},"SaaS providers don't need to worry about storing privacy sensitive data."),(0,n.kt)("li",{parentName:"ul"},"Less emails are sent to users. ")),(0,n.kt)("h2",{id:"technical-details"},"Technical Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The API is specified using REST and DID's."),(0,n.kt)("li",{parentName:"ul"},"The servers shall be provided as docker containers."),(0,n.kt)("li",{parentName:"ul"},"All software provided as OSS under the MIT license.")))}c.isMDXComponent=!0}}]);