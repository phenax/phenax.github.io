!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(4),s=function(e){return e&&e.__esModule?e:{default:e}}(a);Array.from=Array.from||function(e){return[].slice.call(e)};var l=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.routes=new Map,e._routeChangeHandler=e._routeChangeHandler.bind(e),e.triggerUpdate=e.triggerUpdate.bind(e),e}return o(t,e),u(t,null,[{key:"ROUTE_CHANGE",get:function(){return"ROUTE_CHANGE"}}]),u(t,[{key:"init",value:function(e){return this.baseUrl=e.baseUrl||"/",this.otherwise=e.otherwise||"/",this.mounts=e.mounts||[],this.mounts.forEach(function(e){return e.onMount()}),this.$views=document.querySelectorAll("[data-view]"),this._attachEventHandlers(),this.triggerUpdate(),this}},{key:"_attachEventHandlers",value:function(){this.onRouteChange(this._routeChangeHandler),window.addEventListener("popstate",this._routeChangeHandler)}},{key:"_routeChangeHandler",value:function(){var e=this,t=this.routes.get(function(t){return(e.baseUrl+"/"+t).replace(/[\/]+/gi,"/")}(window.location.pathname.replace(/\/$/,"")));if(t){if(t.controller&&t.controller())return;this.showView(t)}else this.trigger(this.otherwise)}},{key:"getView",value:function(e){return Array.from(this.$views).filter(function(t){return t.dataset.view===e})}},{key:"showView",value:function(e){var t=this.getView(e.url);if(t.length){if(t.filter(function(e){return"true"===e.dataset.active}).length)return;Array.from(this.$views).filter(function(e){return e!==t[0]}).forEach(function(e){return e.removeAttribute("data-active")}),t.forEach(function(e){e.dataset.active="true"})}}},{key:"add",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.url&&this.routes.set(e.url,e),this}},{key:"trigger",value:function(e){history.pushState({},null,e),this.triggerUpdate()}},{key:"triggerUpdate",value:function(){this.emit(t.ROUTE_CHANGE)}},{key:"onRouteChange",value:function(e){this.on(t.ROUTE_CHANGE,e)}},{key:"removeListener",value:function(e){this.off(t.ROUTE_CHANGE,e)}}]),t}(s.default);t.default=new l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e)}return i(e,[{key:"onMount",value:function(){}},{key:"onUnmount",value:function(){}},{key:"addListeners",value:function(e,t,n){var r=this;Array.from(e).forEach(function(e){return r.addListener(e,t,n)})}},{key:"addListener",value:function(e,t,n){t.split(" ").forEach(function(t){return e.addEventListener(t,n)})}},{key:"removeListeners",value:function(e,t,n){var r=this;Array.from(e).forEach(function(e){return r.removeListener(e,t,n)})}},{key:"removeListener",value:function(e,t,n){t.split(" ").forEach(function(t){return e.removeEventListener(t,n)})}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(0),f=r(c),h=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"onMount",value:function(){this.$allLinks=document.querySelectorAll("[data-route]"),this.initializeLister()}},{key:"initializeLister",value:function(){"history"in window&&"pushState"in window.history&&(this._linkClickHandler=this._linkClickHandler.bind(this),this.addListeners(this.$allLinks,"click",this._linkClickHandler))}},{key:"_linkClickHandler",value:function(e){e.preventDefault(),f.default.trigger(e.currentTarget.getAttribute("href"))}}]),t}(l.default);t.default=new h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"onMount",value:function(){this.$menu=document.querySelector("."+this.classNames.menu),this.$openMenuBtns=document.querySelectorAll("."+this.classNames.openMenu),this.$closeMenuBtns=document.querySelectorAll("."+this.classNames.closeMenu),this._initListeners()}},{key:"_initListeners",value:function(){this._openMenuClickHandler=this._openMenuClickHandler.bind(this),this._closeMenuClickHandler=this._closeMenuClickHandler.bind(this),this.addListeners(this.$openMenuBtns,"click",this._openMenuClickHandler),this.addListeners(this.$closeMenuBtns,"click",this._closeMenuClickHandler)}},{key:"_openMenuClickHandler",value:function(e){e.preventDefault(),this.show()}},{key:"_closeMenuClickHandler",value:function(e){e.preventDefault(),this.hide()}},{key:"show",value:function(){this.$menu.classList.contains(this.classNames.menuVisible)||this.$menu.classList.add(this.classNames.menuVisible)}},{key:"hide",value:function(){this.$menu.classList.contains(this.classNames.menuVisible)&&this.$menu.classList.remove(this.classNames.menuVisible)}},{key:"classNames",get:function(){return{menu:"js-menu",openMenu:"js-open-menu",closeMenu:"js-close-menu",menuVisible:"menu--visible"}}}]),t}(s.default);t.default=new l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this._eventStack={}}return i(e,[{key:"on",value:function(e,t){this._eventStack[e]=this._eventStack[e]||[],this._eventStack[e].push(t)}},{key:"off",value:function(e,t){var n=this._eventStack[e].indexOf(t);-1!==n&&this._eventStack[e].splice(n,1)}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(this._eventStack[e]||[]).forEach(function(e){return e.apply(void 0,n)})}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(0),o=r(i),u=n(3),a=r(u),s=n(2),l=r(s),c=[a.default,l.default];"history"in window&&"pushState"in window.history?(o.default.onRouteChange(function(){window.location.hash.length&&(window.location.hash=""),a.default.hide()}),o.default.add({url:"/"}).add({url:"/about"}).add({url:"/skills"}).add({url:"/contact"}).init({otherwise:"/",mounts:c})):c.forEach(function(e){return e.onMount()})}]);