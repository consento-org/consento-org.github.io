(self.webpackChunkconsento_org_github_io=self.webpackChunkconsento_org_github_io||[]).push([[8610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),n=a(6010),l=a(3905),s=a(4973),o=a(6742),i=a(3009),m=a(1217),c="blogPostTitle_GeHD",u="blogPostDate_fNvV",g=a(6700);var d=function(e){var t,a,d=(t=(0,g.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),f=e.children,h=e.frontMatter,p=e.metadata,v=e.truncated,E=e.isBlogPostPage,_=void 0!==E&&E,b=p.date,N=p.formattedDate,k=p.permalink,Z=p.tags,w=p.readingTime,T=h.author,y=h.title,L=h.image,I=h.keywords,P=h.author_url||h.authorURL,x=h.author_title||h.authorTitle,C=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:I,image:L}),r.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",r.createElement("header",null,r.createElement(a,{className:(0,n.Z)("margin-bottom--sm",c)},_?y:r.createElement(o.Z,{to:k},y)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:b,className:u},N,w&&r.createElement(r.Fragment,null," \xb7 ",d(w)))),r.createElement("div",{className:"avatar margin-vert--md"},C&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:P},r.createElement("img",{src:C,alt:T})),r.createElement("div",{className:"avatar__intro"},T&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(o.Z,{href:P},T)),r.createElement("small",{className:"avatar__subtitle"},x)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:i.Z},f)),(Z.length>0||v)&&r.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:p.permalink,"aria-label":"Read more about "+y},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(6742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",m="sidebarItem_2UVv",c="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,n.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:o},t.title),r.createElement("ul",{className:i},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:u},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(4765),l=a(3146),s=a(6742),o=a(5601),i=a(4973),m=a(6700);function c(e){var t,a=e.tagName,n=e.count,l=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(i.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:l(n),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,u=e.sidebar,g=t.allTagsPath,d=t.name,f=t.count;return r.createElement(n.Z,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(o.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(c,{count:f,tagName:d})),r.createElement(s.Z,{href:g},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}},7999:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(2122),n=a(9756),l=a(7294),s=a(6010),o=a(6742),i=a(6700),m=a(4996),c="footerLogoLink_qW4Z";function u(e){var t=e.to,a=e.href,s=e.label,i=e.prependBaseUrlToHref,c=(0,n.Z)(e,["to","href","label","prependBaseUrlToHref"]),u=(0,m.Z)(t),g=(0,m.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,r.Z)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:i?g:a}:{to:u},c),s)}var g=function(e){var t=e.url,a=e.alt;return l.createElement("img",{className:"footer__logo",alt:a,src:t})};var d=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,r=t.links,n=void 0===r?[]:r,o=t.logo,d=void 0===o?{}:o,f=(0,m.Z)(d.src);return e?l.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(u,e))}))):null)}))),l.createElement("div",{className:"footer__eu-funding"},l.createElement("div",null,l.createElement("a",{href:"https://ledgerproject.eu/",target:"_blank"},l.createElement("img",{src:"/img/external/fair-use/ngi-white@2x.png",alt:"NGI Ledger"}))),l.createElement("p",null,"This project has received funding from the European Union\u2019s ",l.createElement("a",{href:"https://ec.europa.eu/programmes/horizon2020/",target:"_blank"},"Horizon 2020")," research and innovation programme within the framework of the ",l.createElement("a",{href:"https://www.ngi.eu/about/ledger/",target:"_blank"},"LEDGER Project")," funded under grant agreement ",l.createElement("a",{href:"https://cordis.europa.eu/project/id/825268",target:"_blank"},"No825268"),"."),l.createElement("div",null,l.createElement("a",{href:"https://ec.europa.eu/info/",target:"_blank"},l.createElement("img",{src:"/img/external/fair-use/eu-flag-low.png",alt:"EU"})))),(d||a)&&l.createElement("div",{className:"footer__bottom text--center"},d&&d.src&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:c},l.createElement(g,{alt:d.alt,url:f})):l.createElement(g,{alt:d.alt,url:f})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},2491:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(2122),n=a(7294),l=a(6010),s=a(1875),o=a(6700),i=(a(5662),a(1839)),m=a(3783),c=a(4322),u=a(8030),g=a(4478),d="hideLogoText_1p4s",f="right";function h(e,t,a){return(t=t.split(/ |,/g).filter(Boolean)).forEach((function(t){return e.addEventListener(t,a)})),function(){return t.forEach((function(t){return e.removeEventListener(t,a)}))}}function p(){return function(e){if("undefined"==typeof window)return e(0,0);var t=(0,n.useState)(e(window.pageYOffset,window.pageXOffset)),a=t[0],r=t[1];return(0,n.useEffect)((function(){function t(){var t=e(window.pageYOffset,window.pageXOffset);t!==a&&(a=t,r(t))}var n=h(window,"scroll, resize",t),l=h(document,"scroll, ready",t);return t(),function(){n(),l()}}),[]),a}((function(e){return e<40}))}var v=function(){var e,t=(0,o.LU)().navbar.items,a=(0,n.useState)(!1),h=a[0],v=a[1],E=(0,n.useState)(!1),_=E[0],b=E[1],N=p();(0,i.Z)(h);var k=(0,n.useCallback)((function(){v(!0)}),[v]),Z=(0,n.useCallback)((function(){v(!1)}),[v]),w=(0,m.Z)();(0,n.useEffect)((function(){w===m.D.desktop&&v(!1)}),[w]);var T=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:f)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:f)}))}}(t),y=T.leftItems,L=T.rightItems;return n.createElement("nav",{className:(0,l.Z)("navbar","navbar--fixed-top",{"navbar-sidebar--show":h,"navbar-top":N})},n.createElement("div",{className:"navbar__inner"},n.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&n.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:k,onKeyDown:k},n.createElement(g.Z,null)),n.createElement(u.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,l.Z)("navbar__title",(e={},e[d]=_,e))}),y.map((function(e,t){return n.createElement(c.Z,(0,r.Z)({},e,{key:t}))}))),n.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return n.createElement(c.Z,(0,r.Z)({},e,{key:t}))})),n.createElement(s.Z,{handleSearchBarToggle:b,isSearchBarExpanded:_}))),n.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Z}),n.createElement("div",{className:"navbar-sidebar"},n.createElement("div",{className:"navbar-sidebar__brand"},n.createElement(u.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:Z})),n.createElement("div",{className:"navbar-sidebar__items"},n.createElement("div",{className:"menu"},n.createElement("ul",{className:"menu__list"},t.map((function(e,t){return n.createElement(c.Z,(0,r.Z)({mobile:!0},e,{onClick:Z,key:t}))})))))))}}}]);