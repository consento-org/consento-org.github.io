(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[6103],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(3009),c=a(1217),m="blogPostTitle_GeHD",u="blogPostDate_fNvV",d=a(6700);var g=function(e){var t,a,g=(t=(0,d.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),f=e.children,v=e.frontMatter,E=e.metadata,p=e.truncated,_=e.isBlogPostPage,h=void 0!==_&&_,b=E.date,N=E.formattedDate,k=E.permalink,Z=E.tags,w=E.readingTime,y=v.author,L=v.title,T=v.image,I=v.keywords,C=v.author_url||v.authorURL,x=v.author_title||v.authorTitle,P=v.author_image_url||v.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(c.Z,{keywords:I,image:T}),n.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",n.createElement("header",null,n.createElement(a,{className:(0,r.Z)("margin-bottom--sm",m)},h?L:n.createElement(o.Z,{to:k},L)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:b,className:u},N,w&&n.createElement(n.Fragment,null," \xb7 ",g(w)))),n.createElement("div",{className:"avatar margin-vert--md"},P&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:C},n.createElement("img",{src:P,alt:y})),n.createElement("div",{className:"avatar__intro"},y&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},n.createElement(o.Z,{href:C},y)),n.createElement("small",{className:"avatar__subtitle"},x)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},f)),(Z.length>0||p)&&n.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&n.createElement("div",{className:"col"},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),p&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:E.permalink,"aria-label":"Read more about "+L},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(6010),l=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",c="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";function d(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement("h3",{className:o},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),o=a(6010),s="iconEdit_2_ui",c=function(e){var t=e.className,a=(0,i.Z)(e,["className"]);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-label":"Edit page"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(c,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],m=c.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),c.classList.add(t),i(c),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(s,{toc:t}))}},4598:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(4765),l=a(3146),i=a(4973),o=a(6742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(5601),m=a(571),u=a(6146),d=a(6700);var g=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,o=t.metadata,g=o.title,f=o.description,v=o.nextItem,E=o.prevItem,p=o.editUrl,_=i.hide_table_of_contents;return n.createElement(r.Z,{title:g,description:f,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(c.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),n.createElement("div",null,p&&n.createElement(u.Z,{editUrl:p})),(v||E)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement(s,{nextItem:v,prevItem:E}))),!_&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:t.toc})))))};function f(e){var t=e.content;return n.createElement(n.Fragment,null,t.image?n.createElement("img",{src:t.image}):n.createElement(n.Fragment,null),n.createElement(g,e))}},7999:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(2122),r=a(9756),l=a(7294),i=a(6010),o=a(6742),s=a(6700),c=a(4996),m="footerLogoLink_qW4Z";function u(e){var t=e.to,a=e.href,i=e.label,s=e.prependBaseUrlToHref,m=(0,r.Z)(e,["to","href","label","prependBaseUrlToHref"]),u=(0,c.Z)(t),d=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,n.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:s?d:a}:{to:u},m),i)}var d=function(e){var t=e.url,a=e.alt;return l.createElement("img",{className:"footer__logo",alt:a,src:t})};var g=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,o=t.logo,g=void 0===o?{}:o,f=(0,c.Z)(g.src);return e?l.createElement("footer",{className:(0,i.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(u,e))}))):null)}))),l.createElement("div",{className:"footer__eu-funding"},l.createElement("div",null,l.createElement("a",{href:"https://ledgerproject.eu/",target:"_blank"},l.createElement("img",{src:"/img/external/fair-use/ngi-white@2x.png",alt:"NGI Ledger"}))),l.createElement("p",null,"This project has received funding from the European Union\u2019s ",l.createElement("a",{href:"https://ec.europa.eu/programmes/horizon2020/",target:"_blank"},"Horizon 2020")," research and innovation programme within the framework of the ",l.createElement("a",{href:"https://www.ngi.eu/about/ledger/",target:"_blank"},"LEDGER Project")," funded under grant agreement ",l.createElement("a",{href:"https://cordis.europa.eu/project/id/825268",target:"_blank"},"No825268"),"."),l.createElement("div",null,l.createElement("a",{href:"https://ec.europa.eu/info/",target:"_blank"},l.createElement("img",{src:"/img/external/fair-use/eu-flag-low.png",alt:"EU"})))),(g||a)&&l.createElement("div",{className:"footer__bottom text--center"},g&&g.src&&l.createElement("div",{className:"margin-bottom--sm"},g.href?l.createElement("a",{href:g.href,target:"_blank",rel:"noopener noreferrer",className:m},l.createElement(d,{alt:g.alt,url:f})):l.createElement(d,{alt:g.alt,url:f})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},2491:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(2122),r=a(7294),l=a(6010),i=a(1875),o=a(6700),s=(a(5662),a(1839)),c=a(3783),m=a(4322),u=a(8030),d=a(4478),g="hideLogoText_1p4s",f="right";function v(e,t,a){return(t=t.split(/ |,/g).filter(Boolean)).forEach((function(t){return e.addEventListener(t,a)})),function(){return t.forEach((function(t){return e.removeEventListener(t,a)}))}}function E(){return function(e){if("undefined"==typeof window)return e(0,0);var t=(0,r.useState)(e(window.pageYOffset,window.pageXOffset)),a=t[0],n=t[1];return(0,r.useEffect)((function(){function t(){var t=e(window.pageYOffset,window.pageXOffset);t!==a&&(a=t,n(t))}var r=v(window,"scroll, resize",t),l=v(document,"scroll, ready",t);return t(),function(){r(),l()}}),[]),a}((function(e){return e<40}))}var p=function(){var e,t=(0,o.LU)().navbar.items,a=(0,r.useState)(!1),v=a[0],p=a[1],_=(0,r.useState)(!1),h=_[0],b=_[1],N=E();(0,s.Z)(v);var k=(0,r.useCallback)((function(){p(!0)}),[p]),Z=(0,r.useCallback)((function(){p(!1)}),[p]),w=(0,c.Z)();(0,r.useEffect)((function(){w===c.D.desktop&&p(!1)}),[w]);var y=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:f)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:f)}))}}(t),L=y.leftItems,T=y.rightItems;return r.createElement("nav",{className:(0,l.Z)("navbar","navbar--fixed-top",{"navbar-sidebar--show":v,"navbar-top":N})},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:k,onKeyDown:k},r.createElement(d.Z,null)),r.createElement(u.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,l.Z)("navbar__title",(e={},e[g]=h,e))}),L.map((function(e,t){return r.createElement(m.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},T.map((function(e,t){return r.createElement(m.Z,(0,n.Z)({},e,{key:t}))})),r.createElement(i.Z,{handleSearchBarToggle:b,isSearchBarExpanded:h}))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Z}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(u.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:Z})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},t.map((function(e,t){return r.createElement(m.Z,(0,n.Z)({mobile:!0},e,{onClick:Z,key:t}))})))))))}}}]);