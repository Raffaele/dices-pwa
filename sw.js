if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const l=e=>i(e,t),o={module:{uri:t},exports:c,require:l};s[t]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/edit-btn.34a84f98.svg",revision:null},{url:"assets/index.2cc1938e.css",revision:null},{url:"assets/index.3e8ab439.js",revision:null},{url:"assets/launch-btn.12fb09f0.svg",revision:null},{url:"index.html",revision:"88e1c80b4b91bc09b1be34fa0fab9652"},{url:"pwa-192x192.png",revision:"ab5ab9af776bb39559724093f28f824c"},{url:"pwa-512x512.png",revision:"ce8ec67ea0c4e97c8625a59d4cdf3800"},{url:"registerSW.js",revision:"88443c73499d288a8497ec6411d3f3b1"},{url:"pwa-192x192.png",revision:"ab5ab9af776bb39559724093f28f824c"},{url:"pwa-512x512.png",revision:"ce8ec67ea0c4e97c8625a59d4cdf3800"},{url:"manifest.webmanifest",revision:"0c8c0f66f8ebf5015a28899e515f89d0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
