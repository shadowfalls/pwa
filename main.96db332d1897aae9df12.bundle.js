(()=>{"use strict";var e={5462:(e,r,t)=>{var n=t(7294);function o(){return n.createElement("div",null,n.createElement("h1",null,"A pwa!"))}t(3935).render(n.createElement(o,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))}},r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,t.x=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0},r=[[6124,32],[5462,32]],n=e=>{},o=(o,i)=>{for(var l,a,[s,c,u,f]=i,h=0,p=[];h<s.length;h++)a=s[h],t.o(e,a)&&e[a]&&p.push(e[a][0]),e[a]=0;for(l in c)t.o(c,l)&&(t.m[l]=c[l]);for(u&&u(t),o&&o(i);p.length;)p.shift()();return f&&r.push.apply(r,f),n()},i=self.webpackChunkpwa=self.webpackChunkpwa||[];function l(){for(var n,o=0;o<r.length;o++){for(var i=r[o],l=!0,a=1;a<i.length;a++){var s=i[a];0!==e[s]&&(l=!1)}l&&(r.splice(o--,1),n=t(t.s=i[0]))}return 0===r.length&&(t.x(),t.x=e=>{}),n}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var a=t.x;t.x=()=>(t.x=a||(e=>{}),(n=l)())})(),t.x()})();