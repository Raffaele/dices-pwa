if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>s(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/edit-btn.34a84f98.svg",revision:null},{url:"assets/index.127c5e26.css",revision:null},{url:"assets/index.e5eeacbb.js",revision:null},{url:"assets/launch-btn.12fb09f0.svg",revision:null},{url:"dice-icon.png",revision:"31cab0901ba24c53741a6002ef9432e3"},{url:"favicon.ico",revision:"ba44f340afba5bb1a07f14decc15dd04"},{url:"index.html",revision:"3a0bdc4b27d1ae2551cd05637955ac13"},{url:"registerSW.js",revision:"88443c73499d288a8497ec6411d3f3b1"},{url:"favicon.ico",revision:"ba44f340afba5bb1a07f14decc15dd04"},{url:"manifest.webmanifest",revision:"bd6bcabcd1f52ae04c55c75b095dabcb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
