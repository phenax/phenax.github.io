(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(178),i=(t(197),t(170)),l=t.n(i),s=t(179),o=t.n(s),m=t(231),u=t.n(m),d=[{icon:"github",name:"Github",url:"https://github.com/phenax"},{icon:"codepen",name:"Codepen",url:"https://codepen.io/phenax/"},{icon:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/akshay-nair5"},{icon:"twitter",name:"Twitter",url:"https://twitter.com/phenax5"}],f=function(){return c.a.createElement("div",{className:u.a.contact},c.a.createElement("div",{className:"page-wrapper__text"},c.a.createElement("div",{className:u.a.email},c.a.createElement("a",{href:"mailto:akshaynair1597@gmail.com"},"akshaynair1597@gmail.com")),c.a.createElement("div",{className:l()(u.a.social,o.a.row,"no-collapse")},d.map(function(e){var a=e.url,t=e.icon,n=e.name;return c.a.createElement("a",{key:a,target:"_blank _parent",rel:"noopener",href:a,className:o.a.col,"data-name":n},c.a.createElement("i",{className:"fab fa-"+t}))}))))};a.default=function(){return c.a.createElement(r.a,{title:"Contact Me",headerProps:{title:"Contact Me",subtitle:"Wanna get in touch?"}},c.a.createElement(f,null))}},167:function(e,a,t){var n;e.exports=(n=t(169))&&n.default||n},168:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(4),i=t.n(r),l=t(37),s=t.n(l);t.d(a,"a",function(){return s.a});t(167),c.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},169:function(e,a,t){"use strict";t.r(a);var n=t(8),c=t.n(n),r=t(0),i=t.n(r),l=t(4),s=t.n(l),o=t(58),m=t(2),u=function(e){var a=e.location,t=m.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(o.a,c()({location:a,pageResources:t},t.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=u},171:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"b",function(){return l});var n=t(8),c=t.n(n),r=!1;!function(){try{var e=new Image;e.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",e.onload=e.onerror=function(){r=2===e.height}}catch(a){r=!1}}();var i=function(e){var a=e.src,t=e.srcWebp;return r&&t?t:a},l=function(e){return c()({},e,{src:i(e)})}},172:function(e,a,t){(function(e){e.window=e,e.document=e.document||{body:null,documentElement:null}}).call(this,t(81))},173:function(e,a,t){"use strict";t(181);var n=t(174),c=t(0),r=t.n(c),i=t(170),l=t.n(i),s=t(168),o=t(183),m=t.n(o),u=t(179),d=t.n(u),f=t(171),p=[{url:"/",title:"Projects",descr:"Fun stuff"},{url:"/about",title:"About Me",descr:"Know more about this metal-head"},{url:"/blog",title:"Blog",descr:"I post about FP, react, etc"},{url:"/skills",title:"Skills",descr:"I haz m@d 5ki11z br0"},{url:"/contact",title:"Contact",descr:"Get in touch"}];a.a=function(){var e,a=Object(c.useState)(!1),t=a[0],i=a[1],o=n.data.file,u=(o=void 0===o?{}:o).childImageSharp,b=(u=void 0===u?{}:u).fixed,h=void 0===b?{src:""}:b,v=function(e){return function(a){a.preventDefault(),i(e)}};return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.topbar},r.a.createElement("div",{className:m.a.topbarMenubtn},r.a.createElement("a",{href:"#menu",className:"fas fa-bars",onClick:v(!0)}))),r.a.createElement("div",{className:l()(m.a.menu,d.a.row,(e={},e[m.a.menu_visible]=t,e)),id:"menu"},r.a.createElement("div",{className:l()(m.a.menuSection,m.a.menuSide,d.a.hideOnSm,d.a.col)},r.a.createElement("div",{className:m.a.logo},r.a.createElement("img",{className:m.a.logoImg,draggable:!1,src:Object(f.a)(h)}),r.a.createElement("div",{className:m.a.logoText},"Hey There"))),r.a.createElement("ul",{className:l()(m.a.menuSection,m.a.menuList,d.a.col)},r.a.createElement("a",{href:"#",className:l()(m.a.menuClosebtn,"fas fa-times"),onClick:v(!1)}),p.map(function(e){return r.a.createElement("li",{className:l()(m.a.menuListLi),key:e.url},r.a.createElement(s.a,{to:e.url,className:l()(m.a.menuListLink)},r.a.createElement("div",{className:m.a.title},e.title),r.a.createElement("div",{className:m.a.descr},e.descr)))}))))}},174:function(e){e.exports={data:{file:{childImageSharp:{fixed:{src:"/static/154949b1fe0e5bde989bad025624cc67/c29cf/logo.png",srcWebp:"/static/154949b1fe0e5bde989bad025624cc67/9ca63/logo.webp",srcSet:"/static/154949b1fe0e5bde989bad025624cc67/c29cf/logo.png 1x",srcSetWebp:"/static/154949b1fe0e5bde989bad025624cc67/9ca63/logo.webp 1x"}}}}}},175:function(e,a,t){"use strict";var n=t(8),c=t.n(n),r=t(0),i=t.n(r),l=t(184),s=t.n(l),o={subtitle:"",preTitle:""};a.a=function(e){var a=c()({},o,e),t=a.title,n=a.subtitle,r=a.preTitle;return i.a.createElement("div",{className:s.a.wrapper},i.a.createElement("div",{className:s.a.content},r,i.a.createElement("div",{className:s.a.title},t),i.a.createElement("div",{className:s.a.subtitle},n)))}},178:function(e,a,t){"use strict";t(57);var n=t(8),c=t.n(n),r=t(38),i=t.n(r),l=t(0),s=t.n(l),o=t(182),m=(t(172),t(173)),u=t(175),d=t(186),f=t.n(d),p={title:"Akshay Nair",description:"Akshay Nair is a full stack web developer with a passion for writing performant, maintainable code.",keywords:"akshay, nair, functional, programming, performant, javascript, react, developer, code, github",headerProps:{}};a.a=function(e){var a=c()({},p,e),t=a.children,n=a.title,r=a.description,l=a.keywords,d=a.headerProps,b=i()(a,["children","title","description","keywords","headerProps"]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.Helmet,null,s.a.createElement("title",null,n),s.a.createElement("meta",{name:"description",content:r}),s.a.createElement("meta",{name:"keywords",content:l})),s.a.createElement("div",b,s.a.createElement(m.a,null),s.a.createElement(u.a,Object.assign({title:n,subtitle:r},d)),s.a.createElement("main",{className:f.a.content},t)))}},197:function(e,a,t){var n=t(26).f,c=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in c||t(19)&&n(c,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-0eb1fe15d1657aba4b67.js.map