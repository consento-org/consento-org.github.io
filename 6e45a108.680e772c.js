(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var o=a(3),n=a(7),i=(a(0),a(121)),r=a(125),s={slug:"mobile-first",title:"Choosing the hard road: Mobile-first!",image:"images/2020/03/design-2.png",author:"Martin Heidegger",author_url:"/team/martin",author_image_url:"/img/tanja/cc-by-nc-nd/team/Martin.svg"},c={permalink:"/blog/mobile-first",editUrl:"https://github.com/consento-org/consento-org.github.io/edit/main/blog/2020-04-02-mobile-first.md",source:"@site/blog/2020-04-02-mobile-first.md",description:"About why we chose a mobile app as a start for Consento, what challenges we encountered and what we learned on our way\u2212so you don't need to.",date:"2020-04-02T00:00:00.000Z",tags:[],title:"Choosing the hard road: Mobile-first!",readingTime:5.555,truncated:!1,prevItem:{title:"In consent we trust",permalink:"/blog/in-consent-we-trust"},nextItem:{title:"Consento receives funding by NGI!",permalink:"/blog/funding-ngi-2019"}},p=[{value:"Design Process",id:"design-process",children:[]},{value:"Hello, expo-export!",id:"hello-expo-export",children:[]},{value:"Security &amp; Performance",id:"security--performance",children:[]}],l={toc:p};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"About why we chose a mobile app as a start for Consento, what challenges we encountered and what we learned on our way\u2212so you don't need to.")),Object(i.b)("p",null,"Around June of 2019, we were discussing and thinking hard about an initial version of Consento would look like\u2212",Object(i.b)("em",{parentName:"p"},"a ",Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://en.wikipedia.org/wiki/Minimum_viable_product"}),"MVP")),". We had a few long and hard discussions, trying to tie down what is necessary for us to figure out. Our priority No. 1 eventually landed on ",Object(i.b)("em",{parentName:"p"},"daily usability"),". We wanted to make sure that whatever product we are building will be useful in everyday life. Ultimately, it means that this has to be on a mobile device; a mobile app."),Object(i.b)("p",null,"This was a problem for us. ",Object(i.b)("em",{parentName:"p"},"Yes"),", we are developers and\u2212",Object(i.b)("em",{parentName:"p"},"yes"),"\u2212we have experience with desktop and server software, but ",Object(i.b)("em",{parentName:"p"},"no"),": our strength is not in mobile apps. We had to learn quickly and make choices. To make this an informed choice we looked at our requirements:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"We need it to be JavaScript based to stay compatible with the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://datproject.org"}),"dat")," ecosystem."),Object(i.b)("li",{parentName:"ol"},"We do not want for the user interface to stutter. This means our code needs to run separately from the UI ",Object(i.b)("em",{parentName:"li"},"(in a different thread)"),".")),Object(i.b)("p",null,"Of the two popular choices we found, we went with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/"}),"React Native")," over ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nativescript.org/"}),"NativeScript"),". It seems easier to find people with React Native experience. It has a pretty good reputation and we wanted to use React for the user interface. Choosing it seemed the straight-forward choice."),Object(i.b)("p",null,"React Native can be used as-is, but for quicker development we learned that ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://expo.io/"}),"Expo.io")," is really comfortable. Expo limits React Native to a pre-defined set of extensions. This restriction allows the immediate installation on any device, quickly. No need to wait for slow build or publishing processes. \u2212 ",Object(i.b)("em",{parentName:"p"},"Cool, we definitely want that!")),Object(i.b)("h3",{id:"design-process"},"Design Process"),Object(i.b)("p",null,"We want to use Open-Source software for as many tasks as possible, as it allows contributors to join freely and quickly. Sadly, we have not found a free design software that works for us. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sketch.com/get/"}),"Sketch")," is reasonably cheap for a design software, can be used offline, allows some hacking with the format and is overall the only choice we could see\u2212even though it runs only on MacOS. ",Object(i.b)("em",{parentName:"p"},"(though .sketch files can be edited using ",Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://icons8.com/lunacy"}),"Lunacy")," on Windows)")),Object(i.b)(r.a,{src:"img/consento/cc-by-nc-sa/design.png",alt:"Consento, In sketch, as mock and on the device.",caption:"From sketch to mockup to prototype. Marc made some nice designs for us.",mdxType:"Image"}),Object(i.b)("p",null,"With the design ready we need to turn it into code. We wanted to automate that so we also informed ourselves here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://builderx.io/pricing"}),"BuilderX")," looked professional but has a steep price tag of 15$/month/person and the output wasn't good to use in our opinion. Repeat output would clash with expo and typescript and we had to improve the output by hand."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://zeplin.io/"}),"Zeplin.io")," is useful for communication and is okay for a copy ","&"," paste process but in the long run was going to be painful for updates: What did we already update? Where is the difference between design and code? How do we add the non-trivial features?"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/nanohop/sketch-to-react-native"}),"Sketch-to-react-native")," does sound promising but it exports to JavaScript ",Object(i.b)("em",{parentName:"li"},"(and we work with TypeScript)")," and the output is not suitable for repeat exports. This would allow us to export once and any future update would be problematic.")),Object(i.b)("p",null,"After testing a few alternatives we knew what we needed."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"It needs to be able to change the Sketch file repeatedly without breaking the rest of the code."),Object(i.b)("li",{parentName:"ol"},"It needs to output all the things we need: images, fonts, elements."),Object(i.b)("li",{parentName:"ol"},"It needs to be free or cheap.")),Object(i.b)("p",null,"Since we couldn't find any tool to do that, we wrote it ourselves. \ud83e\udd13 \u2193"),Object(i.b)("h3",{id:"hello-expo-export"},"Hello, expo-export!"),Object(i.b)("p",null,"To get the workflow right we built in parallel to our first app ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/consento-org/expo-export"}),"expo-export"),"! It is a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Free_and_open-source_software"}),"free and opensource software"),", that you can add as a plugin to Sketch. It will add a menu button that with one click exports the assets, fonts and components of the layers in that sketch file to relative folders."),Object(i.b)("p",null,"In its current version expo-export is rough around many edges but the development has been mostly a breeze and we learned a lot about the capabilities of Sketch. Now, when we create changes in Sketch we can see the updates immediately",Object(i.b)("em",{parentName:"p"},"(-ish)")," in the mobile app."),Object(i.b)(r.a,{src:"img/consento/cc-by-nc-sa/screen-recording-live-update.gif",alt:"screen capture showing an iphone simulator updated as the export process in sketch is executed.",caption:"Simulator (or device) is updated quickly after sketch export is triggered.",mdxType:"Image"}),Object(i.b)("h3",{id:"security--performance"},"Security ","&"," Performance"),Object(i.b)("p",null,"The last topic for this post is about performance. If you try to use Consento right now on a slower device, Consento will be slow! Particularly when adding a new Relation or adding a new file to a vault. The reason for this performance issue is tied to our initial choices ",Object(i.b)("em",{parentName:"p"},"(back in the first section)"),". In order to work with dat, we need to rely on a specific encryption system ",Object(i.b)("em",{parentName:"p"},"(libsodium)")," that is not working fast on react-native."),Object(i.b)("p",null,"We thought initially that this should be the smaller issue and will be easily improved later-on but it turns out that encryption on mobile devices is a pretty big deal. The current version works more-or-less but because of time constraints the current solution is not compatible with dat. \ud83d\ude31"),Object(i.b)("p",null,"Maybe we should have gone with NativeScript as a platform? NativeScript has a synchronous ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://market.nativescript.org/plugins/nativescript-libsodium"}),"libsodium plugin")," after all, though ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://market.nativescript.org/plugins/nativescript-libsodium#ios-support"}),"without iOS support"),". A more straight-forward choice might have even been ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.janeasystems.com/nodejs-mobile"}),"nodejs-mobile"),", a recommendation we received quickly from the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.digital-democracy.org/mapeo/"}),"mapeo")," team, after asking for it far too late."),Object(i.b)("p",null,"When we started we also were not aware of publication ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.apple.com/app-store-connect/#/dev88f5c7bf9"}),"difficulties in the AppStore")," (",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ssi.gouv.fr/en/regulation/cryptology/how-to-submit-an-application/"}),"specifically france"),") due to long-standing rules on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States#Current_status"}),"cryptographic exports")," or limitations on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Restrictions_on_the_import_of_cryptography"}),"importing cryptographic in parts of the world"),". China also put out new ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.insideprivacy.com/data-security/china-enacts-encryption-law/"}),"crypto laws"),"."),Object(i.b)("p",null,"In short, we need to rethink our strategy for getting dat-compatible and fast cryptography to work on a mobile phone. ",Object(i.b)("img",{src:"/img/external/fair-use/screenshot-subscribe-button.png",alt:"Subscribe",className:"inline__image"})," to our ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/consento-org/mobile/issues/90"}),"github issue #90")," to follow our progress."),Object(i.b)("hr",null),Object(i.b)("p",null,"You can have a look at the Consento mobile app right now \u2192 ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/consento-org/mobile/releases"}),"Releases"),"."),Object(i.b)("p",null,"The version v1.0.2 is still a very early preview, but it may inspire you."),Object(i.b)("p",null,"In the meanwhile, we will be working on several improvements. You can follow our progress on this blog, using RSS, or in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://keybase.io/team/consento"}),"keybase chat"),"."),Object(i.b)(r.b,{author:"martin",year:"2021",license:"CC-BY-NC-SA",mdxType:"License"}))}b.isMDXComponent=!0}}]);