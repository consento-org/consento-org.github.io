(window.webpackJsonp=window.webpackJsonp||[]).push([[10,51],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(121),c=t(22),i=t(25),o=t(129),s=t(3),m=t(7),u=t(120),b=t(122),d=t(149),f=t(126),v=t(127),h=t(151),p=t(123),E=t(143),g=t(130),_=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=t(128),O=t(77),j=t.n(O);var N=function e(a,t){return"link"===a.type?Object(b.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function C(e){var a,t,l,c=e.item,i=e.onItemClick,o=e.collapsible,b=e.activePath,d=Object(m.a)(e,["item","onItemClick","collapsible","activePath"]),f=c.items,v=c.label,h=N(c,b),p=(t=h,l=Object(n.useRef)(t),Object(n.useEffect)((function(){l.current=t}),[t]),l.current),E=Object(n.useState)((function(){return!!o&&(!h&&c.collapsed)})),g=E[0],_=E[1],k=Object(n.useRef)(null),O=Object(n.useState)(void 0),C=O[0],w=O[1],I=function(e){var a;void 0===e&&(e=!0),w(e?(null===(a=k.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){h&&!p&&g&&_(!1)}),[h,p,g]);var S=Object(n.useCallback)((function(e){e.preventDefault(),C||I(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[C]);return 0===f.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":g}),key:v},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&h},a[j.a.menuLinkText]=!o,a)),onClick:o?S:void 0,href:o?"#!":void 0},d),v),r.a.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){g||I(!1)}},f.map((function(e){return r.a.createElement(y,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:b})}))))}function w(e){var a=e.item,t=e.onItemClick,n=e.activePath,l=(e.collapsible,Object(m.a)(e,["item","onItemClick","activePath","collapsible"])),c=a.href,i=a.label,o=N(a,n);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(p.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":o}),to:c},Object(E.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),i))}function y(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(w,e)}}var I=function(e){var a,t,l=e.path,c=e.sidebar,i=e.sidebarCollapsible,o=void 0===i||i,s=e.onCollapse,m=e.isHidden,p=Object(n.useState)(!1),E=p[0],O=p[1],N=Object(b.useThemeConfig)(),C=N.navbar.hideOnScroll,w=N.hideableSidebar,I=Object(d.a)().isAnnouncementBarClosed,S=Object(h.a)().scrollY;Object(f.a)(E);var x=Object(v.a)();return Object(n.useEffect)((function(){x===v.b.desktop&&O(!1)}),[x]),r.a.createElement("div",{className:Object(u.a)(j.a.sidebar,(a={},a[j.a.sidebarWithHideableNavbar]=C,a[j.a.sidebarHidden]=m,a))},C&&r.a.createElement(g.a,{tabIndex:-1,className:j.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(t={"menu--show":E},t[j.a.menuWithAnnouncementBar]=!I&&0===S,t))},r.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!E)}},E?r.a.createElement("span",{className:Object(u.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(k.a,{className:j.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(y,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:o,activePath:l})})))),w&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:s},r.a.createElement(_,{className:j.a.collapseSidebarButtonIcon})))},S=t(139),x=t(145),T=t(138),L=t(78),M=t.n(L);function P(e){var a,t,i,s,m=e.currentDocRoute,d=e.versionMetadata,f=e.children,v=Object(c.default)(),h=v.siteConfig,p=v.isClient,E=d.pluginId,g=d.permalinkToSidebar,k=d.docsSidebars,O=d.version,j=g[m.path],N=k[j],C=Object(n.useState)(!1),w=C[0],y=C[1],x=Object(n.useState)(!1),T=x[0],L=x[1],P=Object(n.useCallback)((function(){T&&L(!1),y(!w)}),[T]);return r.a.createElement(o.a,{key:p,searchMetadatas:{version:O,tag:Object(b.docVersionSearchTag)(E,O)}},r.a.createElement("div",{className:M.a.docPage},N&&r.a.createElement("div",{className:Object(u.a)(M.a.docSidebarContainer,(a={},a[M.a.docSidebarContainerHidden]=w,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(M.a.docSidebarContainer)&&w&&L(!0)},role:"complementary"},r.a.createElement(I,{key:j,sidebar:N,path:m.path,sidebarCollapsible:null===(t=null===(i=h.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===t||t,onCollapse:P,isHidden:T}),T&&r.a.createElement("div",{className:M.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:P,onClick:P},r.a.createElement(_,null))),r.a.createElement("main",{className:M.a.docMainContainer},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",M.a.docItemWrapper,(s={},s[M.a.docItemWrapperEnhanced]=w,s))},r.a.createElement(l.a,{components:S.a},f)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,l=a.find((function(e){return Object(T.matchPath)(n.pathname,e)}));return l?r.a.createElement(P,{currentDocRoute:l,versionMetadata:t},Object(i.a)(a)):r.a.createElement(x.default,e)}},132:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r),c=t(120),i=t(135),o=t(122),s=(t(133),t(126)),m=t(127),u=t(136),b=t(130),d=t(128),f=t(55),v=t.n(f),h="right";function p(e,a,t){return(a=a.split(/ |,/g).filter(Boolean)).forEach((function(a){return e.addEventListener(a,t)})),function(){return a.forEach((function(a){return e.removeEventListener(a,t)}))}}function E(){return function(e){if("undefined"==typeof window)return e(0,0);var a=Object(r.useState)(e(window.pageYOffset,window.pageXOffset)),t=a[0],n=a[1];return Object(r.useEffect)((function(){function a(){var a=e(window.pageYOffset,window.pageXOffset);a!==t&&(t=a,n(a))}var r=p(window,"scroll, resize",a),l=p(document,"scroll, ready",a);return a(),function(){r(),l()}}),[]),t}((function(e){return e<40}))}a.a=function(){var e,a=Object(o.useThemeConfig)().navbar.items,t=Object(r.useState)(!1),f=t[0],p=t[1],g=Object(r.useState)(!1),_=g[0],k=g[1],O=E();Object(s.a)(f);var j=Object(r.useCallback)((function(){p(!0)}),[p]),N=Object(r.useCallback)((function(){p(!1)}),[p]),C=Object(m.a)();Object(r.useEffect)((function(){C===m.b.desktop&&p(!1)}),[C]);var w=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:h)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:h)}))}}(a),y=w.leftItems,I=w.rightItems;return l.a.createElement("nav",{className:Object(c.a)("navbar","navbar--fixed-top",{"navbar-sidebar--show":f,"navbar-top":O})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:j,onKeyDown:j},l.a.createElement(d.a,null)),l.a.createElement(b.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(e={},e[v.a.hideLogoText]=_,e))}),y.map((function(e,a){return l.a.createElement(u.a,Object(n.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},I.map((function(e,a){return l.a.createElement(u.a,Object(n.a)({},e,{key:a}))})),l.a.createElement(i.a,{handleSearchBarToggle:k,isSearchBarExpanded:_}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(b.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return l.a.createElement(u.a,Object(n.a)({mobile:!0},e,{onClick:N,key:a}))})))))))}},134:function(e,a,t){"use strict";var n=t(3),r=t(7),l=t(0),c=t.n(l),i=t(120),o=t(123),s=t(122),m=t(124),u=t(56),b=t.n(u);function d(e){var a=e.to,t=e.href,l=e.label,i=e.prependBaseUrlToHref,s=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(a),b=Object(m.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:i?b:t}:{to:u},s),l)}var f=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(s.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,r=void 0===n?[]:n,l=a.logo,o=void 0===l?{}:l,u=Object(m.a)(o.src);return e?c.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},r&&r.length>0&&c.a.createElement("div",{className:"row footer__links"},r.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(d,e))}))):null)}))),c.a.createElement("div",{className:"footer__eu-funding"},c.a.createElement("div",null,c.a.createElement("a",{href:"https://ledgerproject.eu/",target:"_blank"},c.a.createElement("img",{src:"/img/external/fair-use/ngi-white@2x.png",alt:"NGI Ledger"}))),c.a.createElement("p",null,"This project has received funding from the European Union\u2019s ",c.a.createElement("a",{href:"https://ec.europa.eu/programmes/horizon2020/",target:"_blank"},"Horizon 2020")," research and innovation programme within the framework of the ",c.a.createElement("a",{href:"https://www.ngi.eu/about/ledger/",target:"_blank"},"LEDGER Project")," funded under grant agreement ",c.a.createElement("a",{href:"https://cordis.europa.eu/project/id/825268",target:"_blank"},"No825268"),"."),c.a.createElement("div",null,c.a.createElement("a",{href:"https://ec.europa.eu/info/",target:"_blank"},c.a.createElement("img",{src:"/img/external/fair-use/eu-flag-low.png",alt:"EU"})))),(o||t)&&c.a.createElement("div",{className:"footer__bottom text--center"},o&&o.src&&c.a.createElement("div",{className:"margin-bottom--sm"},o.href?c.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:b.a.footerLogoLink},c.a.createElement(f,{alt:o.alt,url:u})):c.a.createElement(f,{alt:o.alt,url:u})),t?c.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(129);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);