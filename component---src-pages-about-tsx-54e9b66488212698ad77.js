(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,a,t){"use strict";t.r(a);t(194);var n=t(0),r=t.n(n),i=t(179),c=t(186),l=t.n(c),o=function(e){var a=e.to,t=e.children;return r.a.createElement("a",{href:a,className:l.a.link,style:{fontWeight:"bold"}},t)},s=function(e){return r.a.createElement(o,{to:"https://github.com/phenax/"+e},e)};a.default=function(){return r.a.createElement(i.a,{title:"About me",headerProps:{title:"About Me",subtitle:"type Akshay = Developer | Metalhead | Geek | Nerd;"}},r.a.createElement("h2",{className:l.a.title},"putStrLn ",'"',"Hello world",'"',";"),r.a.createElement("p",{className:l.a.para},"I am Akshay, a full-stack web developer with an obsession for writing functional, maintainable, performant code. I live in Mumbai, India. I am passionate about JavaScript, Linux, writing open source software and all things tech.",r.a.createElement("br",null),"Functional programmer to the core, I like working with and building software that are written as small building blocks that compose together to form a usable application."),r.a.createElement("p",{className:l.a.para},"I absolutely love working on open source projects in my free time. I","'","ve authored a few js libraries like ",s("algebraic-effects"),", ",s("enum-fp"),", ",s("pipey"),", ",s("pattern-lock-js"),". If linux is your thing, you can check out, ",s("shotkey"),","," ",s("bsp-layout"),". If you like what I make, you can ",r.a.createElement(o,{to:"https://www.buymeacoffee.com/phenax"},"buying me a coffee"),"."),r.a.createElement("p",{className:l.a.para},"Also, I love music. A lot! Some of my favorite artists at the time of writing this are Amon Amarth, Tool, Polyphia, Gojira, Chon, Killswitch Engage, August Burns Red, Foo Fighters, etc."," "))}},167:function(e,a,t){var n;e.exports=(n=t(169))&&n.default||n},168:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(4),c=t.n(i),l=t(37),o=t.n(l);t.d(a,"a",function(){return o.a});t(167),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},169:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),i=t(0),c=t.n(i),l=t(4),o=t.n(l),s=t(58),u=t(2),m=function(e){var a=e.location,t=u.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(s.a,r()({location:a,pageResources:t},t.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=m},170:function(e,a,t){"use strict";t.d(a,"a",function(){return c}),t.d(a,"b",function(){return l});var n=t(8),r=t.n(n),i=!1;!function(){try{var e=new Image;e.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",e.onload=e.onerror=function(){i=2===e.height}}catch(a){i=!1}}();var c=function(e){var a=e.src,t=e.srcWebp;return i&&t?t:a},l=function(e){return r()({},e,{src:c(e)})}},171:function(e,a,t){(function(e){e.window=e,e.document=e.document||{body:null,documentElement:null}}).call(this,t(81))},172:function(e,a,t){"use strict";t(180);var n=t(173),r=t(0),i=t.n(r),c=t(175),l=t.n(c),o=t(168),s=t(183),u=t.n(s),m=t(178),d=t.n(m),f=t(170),p=[{url:"/",title:"Projects",descr:"The shit I make and break"},{url:"/about",title:"About Me",descr:"Know more about this metal-head"},{url:"/blog",title:"Blog",descr:"I post about FP, react, etc"},{url:"/skills",title:"Skills",descr:"I haz m@d 5ki11z br0"},{url:"/contact",title:"Contact",descr:"Get in touch"}];a.a=function(){var e,a=Object(r.useState)(!1),t=a[0],c=a[1],s=(window.location||{pathname:"/"}).pathname,m=n.data.file,h=(m=void 0===m?{}:m).childImageSharp,b=(h=void 0===h?{}:h).fixed,g=void 0===b?{src:""}:b,v=function(e){return function(a){a.preventDefault(),c(e)}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u.a.topbar},i.a.createElement("div",{className:u.a.topbarMenubtn},i.a.createElement("a",{href:"#menu",className:"fas fa-bars",onClick:v(!0)}))),i.a.createElement("div",{className:l()(u.a.menu,d.a.row,(e={},e[u.a.menu_visible]=t,e)),id:"menu"},i.a.createElement("div",{className:l()(u.a.menuSection,u.a.menuSide,d.a.hideOnSm,d.a.col)},i.a.createElement("div",{className:u.a.logo},i.a.createElement("img",{className:u.a.logoImg,draggable:!1,src:Object(f.a)(g),alt:"Akshay Nair"}),i.a.createElement("div",{className:u.a.logoText},"Hey There"))),i.a.createElement("ul",{className:l()(u.a.menuSection,u.a.menuList,d.a.col)},i.a.createElement("a",{href:"#",className:l()(u.a.menuClosebtn,"fas fa-times"),onClick:v(!1)}),p.map(function(e){var a;return i.a.createElement("li",{className:l()(u.a.menuListLi,(a={},a[u.a.menuListLi_selected]=s===e.url,a)),key:e.url},i.a.createElement(o.a,{to:e.url,className:l()(u.a.menuListLink)},i.a.createElement("div",{className:u.a.title},e.title),i.a.createElement("div",{className:u.a.descr},e.descr)))}))))}},173:function(e){e.exports={data:{file:{childImageSharp:{fixed:{src:"/static/154949b1fe0e5bde989bad025624cc67/c29cf/logo.png",srcWebp:"/static/154949b1fe0e5bde989bad025624cc67/9ca63/logo.webp",srcSet:"/static/154949b1fe0e5bde989bad025624cc67/c29cf/logo.png 1x",srcSetWebp:"/static/154949b1fe0e5bde989bad025624cc67/9ca63/logo.webp 1x"}}}}}},174:function(e,a,t){"use strict";var n=t(8),r=t.n(n),i=t(0),c=t.n(i),l=t(184),o=t.n(l),s={subtitle:"",preTitle:""};a.a=function(e){var a=r()({},s,e),t=a.title,n=a.subtitle,i=a.preTitle;return c.a.createElement("div",{className:o.a.wrapper},c.a.createElement("div",{className:o.a.content},i,c.a.createElement("div",{className:o.a.title},t),c.a.createElement("div",{className:o.a.subtitle},n)))}},179:function(e,a,t){"use strict";t(57);var n=t(8),r=t.n(n),i=t(38),c=t.n(i),l=t(0),o=t.n(l),s=t(182),u=(t(171),t(172)),m=t(174),d=t(186),f=t.n(d),p={title:"Akshay Nair",description:"Akshay Nair aka phenax is a full stack web developer with a passion for writing performant, maintainable code.",keywords:"akshay, phenax, nair, functional, programming, performant, javascript, react, developer, code, github",headerProps:{}};a.a=function(e){var a=r()({},p,e),t=a.children,n=a.title,i=a.description,l=a.keywords,d=a.headerProps,h=c()(a,["children","title","description","keywords","headerProps"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Helmet,null,o.a.createElement("title",null,n),o.a.createElement("meta",{name:"description",content:i}),o.a.createElement("meta",{name:"keywords",content:l})),o.a.createElement("div",h,o.a.createElement(u.a,null),o.a.createElement(m.a,Object.assign({title:n,subtitle:i},d)),o.a.createElement("main",{className:f.a.content},t)))}},194:function(e,a,t){"use strict";t(195)("link",function(e){return function(a){return e(this,"a","href",a)}})}}]);
//# sourceMappingURL=component---src-pages-about-tsx-54e9b66488212698ad77.js.map