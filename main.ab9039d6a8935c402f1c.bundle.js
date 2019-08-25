!function(S){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],c=0,i=[];c<r.length;c++)n=r[c],Object.prototype.hasOwnProperty.call(C,n)&&C[n]&&i.push(C[n][0]),C[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(S[t]=o[t]);for(O&&O(e);i.length;)i.shift()();return b.push.apply(b,a||[]),l()}function l(){for(var e,t=0;t<b.length;t++){for(var n=b[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==C[a]&&(r=!1)}r&&(b.splice(t--,1),e=L(L.s=n[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!R[e]||!f[e])return;for(var n in f[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(q[n]=t[n]);0==--u&&0===s&&m()}(e,t),n&&n(e,t)};var a,r=!0,k="ab9039d6a8935c402f1c",t=1e4,N={},H=[],o=[];var c=[],A="idle";function M(e){A=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var i,q,T,u=0,s=0,d={},f={},R={};function U(e){return+e+""===e?+e:e}function p(e){if("idle"!==A)throw new Error("check() is only allowed in idle status");return r=e,M("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=L.p+""+k+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(t).then(function(e){if(!e)return M("idle"),null;f={},d={},R=e.c,T=e.h,M("prepare");var t=new Promise(function(e,t){i={resolve:e,reject:t}});for(var n in q={},C)h(n);return"prepare"===A&&0===s&&0===u&&m(),t})}function h(e){R[e]?(f[e]=!0,u++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+k+".hot-update.js",document.head.appendChild(t)}(e)):d[e]=!0}function m(){M("ready");var t=i;if(i=null,t)if(r)Promise.resolve().then(function(){return y(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in q)Object.prototype.hasOwnProperty.call(q,n)&&e.push(U(n));t.resolve(e)}}function y(n){if("ready"!==A)throw new Error("apply() is only allowed in ready status");var e,t,r,s,o;function a(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),a=o.id,c=o.chain;if((s=J[a])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var i=0;i<s.parents.length;i++){var l=s.parents[i],u=J[l];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),d(n[l],[a])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}n=n||{};function c(){console.warn("[HMR] unexpected require("+p.moduleId+") to disposed module")}var i={},l=[],u={};for(var f in q)if(Object.prototype.hasOwnProperty.call(q,f)){var p;o=U(f);var h=!1,m=!1,y=!1,b="";switch((p=q[f]?a(o):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+p.moduleId+b));break;case"declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+b));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(p),n.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+b));break;case"accepted":n.onAccepted&&n.onAccepted(p),m=!0;break;case"disposed":n.onDisposed&&n.onDisposed(p),y=!0;break;default:throw new Error("Unexception type "+p.type)}if(h)return M("abort"),Promise.reject(h);if(m)for(o in u[o]=q[o],d(l,p.outdatedModules),p.outdatedDependencies)Object.prototype.hasOwnProperty.call(p.outdatedDependencies,o)&&(i[o]||(i[o]=[]),d(i[o],p.outdatedDependencies[o]));y&&(d(l,[p.moduleId]),u[o]=c)}var v,g=[];for(t=0;t<l.length;t++)o=l[t],J[o]&&J[o].hot._selfAccepted&&u[o]!==c&&g.push({module:o,errorHandler:J[o].hot._selfAccepted});M("dispose"),Object.keys(R).forEach(function(e){!1===R[e]&&function(e){delete C[e]}(e)});for(var w,O,E=l.slice();0<E.length;)if(o=E.pop(),s=J[o]){var _={},j=s.hot._disposeHandlers;for(r=0;r<j.length;r++)(e=j[r])(_);for(N[o]=_,s.hot.active=!1,delete J[o],delete i[o],r=0;r<s.children.length;r++){var P=J[s.children[r]];P&&0<=(v=P.parents.indexOf(o))&&P.parents.splice(v,1)}}for(o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&(s=J[o]))for(O=i[o],r=0;r<O.length;r++)w=O[r],0<=(v=s.children.indexOf(w))&&s.children.splice(v,1);for(o in M("apply"),k=T,u)Object.prototype.hasOwnProperty.call(u,o)&&(S[o]=u[o]);var x=null;for(o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&(s=J[o])){O=i[o];var D=[];for(t=0;t<O.length;t++)if(w=O[t],e=s.hot._acceptedDependencies[w]){if(-1!==D.indexOf(e))continue;D.push(e)}for(t=0;t<D.length;t++){e=D[t];try{e(O)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:o,dependencyId:O[t],error:e}),n.ignoreErrored||(x=x||e)}}}for(t=0;t<g.length;t++){var I=g[t];o=I.module,H=[o];try{L(o)}catch(t){if("function"==typeof I.errorHandler)try{I.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:t}),n.ignoreErrored||(x=x||e),x=x||t}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:o,error:t}),n.ignoreErrored||(x=x||t)}}return x?(M("fail"),Promise.reject(x)):(M("idle"),new Promise(function(e){e(l)}))}var J={},C={0:0},b=[];function L(e){if(J[e])return J[e].exports;var t=J[e]={i:e,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},check:p,apply:y,status:function(e){if(!e)return A;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);0<=t&&c.splice(t,1)},data:N[e]};return a=void 0,r}(e),parents:(o=H,H=[],o),children:[]};return S[e].call(t.exports,t,t.exports,function(t){var n=J[t];if(!n)return L;function r(e){return n.hot.active?(J[e]?-1===J[e].parents.indexOf(t)&&J[e].parents.push(t):(H=[t],a=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),H=[]),L(e)}function e(t){return{configurable:!0,enumerable:!0,get:function(){return L[t]},set:function(e){L[t]=e}}}for(var o in L)Object.prototype.hasOwnProperty.call(L,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===A&&M("prepare"),s++,L.e(e).then(t,function(e){throw t(),e});function t(){s--,"prepare"===A&&(d[e]||h(e),0===s&&0===u&&m())}},r.t=function(e,t){return 1&t&&(e=r(e)),L.t(e,-2&t)},r}(e)),t.l=!0,t.exports}L.m=S,L.c=J,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(t,e){if(1&e&&(t=L(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)L.d(n,r,function(e){return t[e]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="",L.h=function(){return k};var v=window.webpackJsonp=window.webpackJsonp||[],g=v.push.bind(v);v.push=e,v=v.slice();for(var w=0;w<v.length;w++)e(v[w]);var O=g;b.push([72,1]),l()}({30:function(e,t){var o="ApplicationName_",a=o+"version_01",n=["/pwa/","/pwa/index.html"];self.addEventListener("fetch",function(t){console.log("fetch request : "+t.request.url),t.respondWith(caches.match(t.request).then(function(e){return e?(console.log("responding with cache : "+t.request.url),e):(console.log("file is not cached, fetching : "+t.request.url),fetch(t.request))}))}),self.addEventListener("install",function(e){e.waitUntil(caches.open(a).then(function(e){return console.log("installing cache : "+a),e.addAll(n)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(n){var r=n.filter(function(e){return e.indexOf(o)});return r.push(a),Promise.all(n.map(function(e,t){if(-1===r.indexOf(e))return console.log("deleting cache : "+n[t]),caches.delete(n[t])}))}))})},60:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(12),c=n.n(a),i=n(30),l=(n(40),n(10)),u=n(11),s=n(79),d=n(80),f=n(83),p=n(81),h=n(82),m=n(73),y=n(74),b=n(75),v=n(76),g=n(77),w=n(78);n(41),n(60);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=_(this,j(n).call(this,e))).state={categories:[{catId:"angular_7",catName:"Angular 7",count:3},{catId:"reactjs 1",catName:"ReactJS",count:1},{catId:"angular_8",catName:"Angular 8",count:3},{catId:"reactjs 2",catName:"ReactJS",count:1},{catId:"angular_9",catName:"Angular 9",count:3},{catId:"reactjs 3",catName:"ReactJS",count:1},{catId:"angular_2",catName:"Angular 1",count:3},{catId:"reactjs 4",catName:"ReactJS",count:1}]},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(n,o.a.Component),function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.categories.map(function(e){return o.a.createElement(m.a,{xs:"11",lg:"2",md:"5",sm:"5",className:"card-margin",key:e.catId},o.a.createElement(y.a,null,o.a.createElement(b.a,null,o.a.createElement(v.a,null,e.catName),o.a.createElement(l.b,{to:{pathname:"/",search:"?id=".concat(e.catId,"&name=").concat(e.catName)}},"more"))))});return o.a.createElement("span",{className:"landing-page"},o.a.createElement("div",{className:"landing-page__container"},o.a.createElement(g.a,null,o.a.createElement(w.a,null,o.a.createElement(m.a,null,o.a.createElement(w.a,null,o.a.createElement(m.a,{xs:"12"},o.a.createElement("div",{className:"welcome-text"},"Welcome to WebTutor"),o.a.createElement("p",{className:"lead"},"Learn web-technology the right way. We have blog articles for the following technologies")),e))))))}}]),n}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?k(e):t}(this,S(n).call(this,e))).state={isOpen:!1},t.toggle=t.toggle.bind(k(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(n,r["Component"]),function(e,t,n){t&&I(e.prototype,t),n&&I(e,n)}(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return o.a.createElement(l.a,null,o.a.createElement("span",{className:"root"},o.a.createElement(s.a,{className:"desktop-nav",color:"light",light:!0,expand:"md"},o.a.createElement(l.b,{className:"navbar-brand",to:{pathname:"/"}},"WebTutor"),o.a.createElement(d.a,{onClick:this.toggle}),o.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(p.a,{className:"ml-auto",navbar:!0},o.a.createElement(h.a,null,o.a.createElement(l.b,{className:"nav-link",to:{pathname:"/"}},"Topics")),o.a.createElement(h.a,null,o.a.createElement(l.b,{className:"nav-link",to:{pathname:"/"}},"About me"))))),o.a.createElement("div",{className:"cover-image"}),o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:x}))))}}]),n}(),A=document.getElementById("root");A&&c.a.render(o.a.createElement(H,null),A),i.register()}});