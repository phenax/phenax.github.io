(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(e,t,n){"use strict";n.r(t);n(57),n(179);var r=n(8),i=n.n(r),o=n(0),a=n.n(o),s=n(176),c=(n(213),n(175)),u=n.n(c),l=n(214),h=(n(39),n(169)),d=function(){},f=function(e,t){var n=(void 0===t?{isInView:!0}:t).isInView,r=Object(h.b)(e),i=r.base64,a=r.src,s=Object(o.useState)(!1),c=s[0],u=s[1],l=Object(o.useState)(null),f=l[0],m=l[1];return Object(o.useEffect)(function(){if(!c&&n){var e=function(e){var t=new Image;return t.src=e,{promise:new Promise(function(e,n){t.onload=e,t.onerror=n}),cancel:function(){t.onload=d,t.onerror=d}}}(a);return e.promise.then(function(){return u(!0)}).catch(m),function(){return e.cancel()}}},[a,n]),{error:f,src:c?a:i}},m=(n(217),function(e,t){void 0===t&&(t={offset:0});var n=Object(o.useState)(!1),r=n[0],i=n[1];return Object(o.useEffect)(function(){var n=new IntersectionObserver(function(e){var n=(t.filter?e.filter(t.filter):e)[0];i(n.isIntersecting)},{rootMargin:t.offset+"px",threshold:t.threshold});return e.current&&n.observe(e.current),function(){e.current&&n.unobserve(e.current)}},[e.current]),r}),p=n(218),b=n.n(p),v=n(177),g=n.n(v),E=function(e){var t=e.id,n=e.image,r=e.title,i=e.links,s=e.description,c=e.tags,h=Object(o.useRef)(null),d=m(h,{offset:300}),p=f(n,{isInView:d}).src,v=Object(l.useDebounce)(p,500);return a.a.createElement("div",{className:b.a.project,"data-id":t,key:t,ref:h},a.a.createElement("div",{className:u()("wrap",g.a.row)},a.a.createElement("div",{className:u()(g.a.col,b.a.block,b.a.block_bg),style:{backgroundImage:p&&"url("+p+")"}},a.a.createElement("div",{className:b.a.blockFakeBackground,style:{backgroundImage:v&&"url("+v+")",opacity:v!==p?0:1,transitionDuration:"500ms"}})),a.a.createElement("div",{className:u()(g.a.col,b.a.block,b.a.block_sm)},a.a.createElement("div",{className:b.a.blockTitle},r),a.a.createElement("div",{className:b.a.blockTags},(c||[]).map(function(e){return a.a.createElement("span",{key:e,className:b.a.blockTagsTag},e)})),a.a.createElement("div",{className:b.a.blockContent},s),a.a.createElement("div",{className:b.a.blockLinks},i.map(function(e){return a.a.createElement("a",{key:e.link,target:"_blank _parent",rel:"noopener",href:e.link},a.a.createElement("i",{className:u()(b.a.blockLinkIcon,(t=e,t.gh?"icon-github-circled":"icon-link"))}),e.gh?"Github":e.text);var t})))))};n.d(t,"pageQeury",function(){return y});t.default=function(e){var t=e.data,n=t.allProjectsJson,r=t.allFile.edges.map(function(e){return e.node.childImageSharp}).reduce(function(e,t){var n;return i()({},e,((n={})[t.fixed.originalName]=t.fixed,n))},{}),o=n.edges.map(function(e){return e.node}).map(function(e){return i()({},e,{image:r[e.image]?r[e.image]:{src:e.image}})});return a.a.createElement(s.a,{headerProps:{subtitle:"Full Stack Web Developer"}},o.map(function(e){return a.a.createElement(E,Object.assign({key:e.id},e))}))};var y="1751051111"},165:function(e,t,n){var r;e.exports=(r=n(167))&&r.default||r},166:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),s=n(37),c=n.n(s);n.d(t,"a",function(){return c.a});n(165),i.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func},167:function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r),o=n(0),a=n.n(o),s=n(4),c=n.n(s),u=n(58),l=n(2),h=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,i()({location:t,pageResources:n},n.json))};h.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=h},169:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var r=n(8),i=n.n(r),o=!1;!function(){try{var e=new Image;e.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",e.onload=e.onerror=function(){o=2===e.height}}catch(t){o=!1}}();var a=function(e){var t=e.src,n=e.srcWebp;return o&&n?n:t},s=function(e){return i()({},e,{src:a(e)})}},170:function(e,t,n){(function(e){e.window=e,e.document={body:null,documentElement:null}}).call(this,n(81))},171:function(e,t,n){"use strict";n(179);var r=n(172),i=n(0),o=n.n(i),a=n(175),s=n.n(a),c=n(166),u=n(181),l=n.n(u),h=n(177),d=n.n(h),f=n(169),m=[{url:"/",title:"Projects",descr:"Fun stuff"},{url:"/about",title:"About Me",descr:"Know more about this metal-head"},{url:"/blog",title:"My blog",descr:"I post about FP, react, etc"},{url:"/skills",title:"Skills",descr:"I haz m@d 5ki11z br0"},{url:"/contact",title:"Contact",descr:"Get in touch"}];t.a=function(){var e,t=Object(i.useState)(!1),n=t[0],a=t[1],u=r.data.file,h=(u=void 0===u?{}:u).childImageSharp,p=(h=void 0===h?{}:h).fixed,b=void 0===p?{src:""}:p,v=function(e){return function(t){t.preventDefault(),a(e)}};return o.a.createElement("div",null,o.a.createElement("div",{className:l.a.topbar},o.a.createElement("div",{className:l.a.topbarMenubtn},o.a.createElement("a",{href:"#menu",className:"icon-menu",onClick:v(!0)}))),o.a.createElement("div",{className:s()(l.a.menu,d.a.row,(e={},e[l.a.menu_visible]=n,e)),id:"menu"},o.a.createElement("div",{className:s()(l.a.menuSection,l.a.menuSide,d.a.hideOnSm,d.a.col)},o.a.createElement("div",{className:l.a.logo},o.a.createElement("img",{className:l.a.logoImg,draggable:!1,src:Object(f.a)(b)}),o.a.createElement("div",{className:l.a.logoText},"Hey There"))),o.a.createElement("ul",{className:s()(l.a.menuSection,l.a.menuList,d.a.col)},o.a.createElement("a",{href:"#",className:s()(l.a.menuClosebtn,"icon-cancel"),onClick:v(!1)}),m.map(function(e){return o.a.createElement("li",{className:s()(l.a.menuListLi),key:e.url},o.a.createElement(c.a,{to:e.url,className:s()(l.a.menuListLink)},o.a.createElement("div",{className:l.a.title},e.title),o.a.createElement("div",{className:l.a.descr},e.descr)))}))))}},172:function(e){e.exports={data:{file:{childImageSharp:{fixed:{src:"/static/154949b1fe0e5bde989bad025624cc67/c29cf/logo.png",srcWebp:"/static/154949b1fe0e5bde989bad025624cc67/9ca63/logo.webp",srcSet:"/static/154949b1fe0e5bde989bad025624cc67/c29cf/logo.png 1x",srcSetWebp:"/static/154949b1fe0e5bde989bad025624cc67/9ca63/logo.webp 1x"}}}}}},173:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(0),a=n.n(o),s=n(182),c=n.n(s),u={type:"mini",subtitle:""};t.a=function(e){var t=i()({},u,e),n=t.title,r=t.subtitle;return a.a.createElement("div",{className:c.a.wrapper},a.a.createElement("div",{className:c.a.content},a.a.createElement("div",{className:c.a.title},n),a.a.createElement("div",{className:c.a.subtitle},r)))}},176:function(e,t,n){"use strict";n(57);var r=n(8),i=n.n(r),o=n(38),a=n.n(o),s=n(0),c=n.n(s),u=n(180),l=(n(170),n(171)),h=n(173),d=n(183),f=n.n(d),m={title:"Akshay Nair",description:"Akshay Nair is a full stack web developer with a passion for writing performant, maintainable code.",keywords:"akshay, nair, functional, programming, performant, javascript, react, developer, code, github",headerProps:{}};t.a=function(e){var t=i()({},m,e),n=t.children,r=t.title,o=t.description,s=t.keywords,d=t.headerProps,p=a()(t,["children","title","description","keywords","headerProps"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.Helmet,null,c.a.createElement("title",null,r),c.a.createElement("meta",{name:"description",content:o}),c.a.createElement("meta",{name:"keywords",content:s})),c.a.createElement("div",p,c.a.createElement(l.a,null),c.a.createElement(h.a,Object.assign({title:r,subtitle:o},d)),c.a.createElement("main",{className:f.a.content},n)))}},213:function(e,t,n){"use strict";n(192)("link",function(e){return function(t){return e(this,"a","href",t)}})},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDebouncedCallback=t.useDebounce=void 0;var r=o(n(215)),i=o(n(216));function o(e){return e&&e.__esModule?e:{default:e}}t.useDebounce=r.default,t.useDebouncedCallback=i.default},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e,t){var n=(0,i.useState)(e),o=r(n,2),a=o[0],s=o[1];return(0,i.useEffect)(function(){var n=setTimeout(function(){s(e)},t);return function(){clearTimeout(n)}},[e,t]),a};var i=n(0)},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=(0,r.useRef)(null),o=(0,r.useCallback)(e,n);return(0,r.useEffect)(function(){return function(){clearTimeout(i.current)}},[]),function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];clearTimeout(i.current),i.current=setTimeout(function(){o.apply(void 0,n)},t)}};var r=n(0)},217:function(e,t){!function(e,t){"use strict";if("IntersectionObserver"in e&&"IntersectionObserverEntry"in e&&"intersectionRatio"in e.IntersectionObserverEntry.prototype)"isIntersecting"in e.IntersectionObserverEntry.prototype||Object.defineProperty(e.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},i.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]})},i.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map(function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(e,"resize",this._checkForIntersections,!0),o(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in e&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,a(e,"resize",this._checkForIntersections,!0),a(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),n=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var o=i.element,a=s(o),c=this._rootContainsTarget(o),u=i.entry,l=t&&c&&this._computeTargetAndRootIntersection(o,n),h=i.entry=new r({time:e.performance&&performance.now&&performance.now(),target:o,boundingClientRect:a,rootBounds:n,intersectionRect:l});u?t&&c?this._hasCrossedThreshold(u,h)&&this._queuedEntries.push(h):u&&u.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=e.getComputedStyle(n).display){for(var i,o,a,c,l,h,d,f,m=s(n),p=u(n),b=!1;!b;){var v=null,g=1==p.nodeType?e.getComputedStyle(p):{};if("none"==g.display)return;if(p==this.root||p==t?(b=!0,v=r):p!=t.body&&p!=t.documentElement&&"visible"!=g.overflow&&(v=s(p)),v&&(i=v,o=m,a=void 0,c=void 0,l=void 0,h=void 0,d=void 0,f=void 0,a=Math.max(i.top,o.top),c=Math.min(i.bottom,o.bottom),l=Math.max(i.left,o.left),h=Math.min(i.right,o.right),f=c-a,!(m=(d=h-l)>=0&&f>=0&&{top:a,bottom:c,left:l,right:h,width:d,height:f})))break;p=u(p)}return m}},i.prototype._getRootRect=function(){var e;if(this.root)e=s(this.root);else{var n=t.documentElement,r=t.body;e={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},i.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map(function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100}),n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,r=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==r)for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i];if(o==n||o==r||o<n!=o<r)return!0}},i.prototype._rootIsInDom=function(){return!this.root||c(t,this.root)},i.prototype._rootContainsTarget=function(e){return c(this.root||t,e)},i.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},i.prototype._unregisterInstance=function(){var e=n.indexOf(this);-1!=e&&n.splice(e,1)},e.IntersectionObserver=i,e.IntersectionObserverEntry=r}function r(e){this.time=e.time,this.target=e.target,this.rootBounds=e.rootBounds,this.boundingClientRect=e.boundingClientRect,this.intersectionRect=e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,r=this.intersectionRect,i=r.width*r.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function i(e,t){var n,r,i,o=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){n(),i=null},r))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(" ")}function o(e,t,n,r){"function"==typeof e.addEventListener?e.addEventListener(t,n,r||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,n)}function a(e,t,n,r){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,r||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on"+t,n)}function s(e){var t;try{t=e.getBoundingClientRect()}catch(n){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(e,t){for(var n=t;n;){if(n==e)return!0;n=u(n)}return!1}function u(e){var t=e.parentNode;return t&&11==t.nodeType&&t.host?t.host:t}}(window,document)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9c0d4d5934e404332029.js.map