const Ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Ee();function k(){}function $e(t,e){for(const n in e)t[n]=e[n];return t}function _e(t){return t()}function Z(){return Object.create(null)}function N(t){t.forEach(_e)}function ke(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function x(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function we(t){return Object.keys(t).length===0}function Me(t,e,n,l){if(t){const r=me(t,e,n,l);return t[0](r)}}function me(t,e,n,l){return t[1]&&l?$e(n.ctx.slice(),t[1](l(e))):n.ctx}function Ae(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Ie(t,e,n,l,r,i){if(r){const o=me(e,n,l,i);t.p(o,r)}}function Ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function p(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function I(){return H(" ")}function L(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t){return Array.from(t.childNodes)}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e){l.selected=!0;return}}t.selectedIndex=-1}function Se(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ne(t,e,n){t.classList[n?"add":"remove"](e)}function Ne(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,l,e),r}let j;function P(t){j=t}function he(){if(!j)throw new Error("Function called outside component initialization");return j}function Re(t){he().$$.on_destroy.push(t)}function U(){const t=he();return(e,n,{cancelable:l=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Ne(e,n,{cancelable:l});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Fe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const O=[],X=[],z=[],le=[],Ve=Promise.resolve();let G=!1;function Le(){G||(G=!0,Ve.then(pe))}function J(t){z.push(t)}const Y=new Set;let K=0;function pe(){const t=j;do{for(;K<O.length;){const e=O[K];K++,P(e),Be(e.$$)}for(P(null),O.length=0,K=0;X.length;)X.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];Y.has(n)||(Y.add(n),n())}z.length=0}while(O.length);for(;le.length;)le.pop()();G=!1,Y.clear(),P(t)}function Be(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const W=new Set;let C;function re(){C={r:0,c:[],p:C}}function ie(){C.r||N(C.c),C=C.p}function E(t,e){t&&t.i&&(W.delete(t),t.i(e))}function M(t,e,n,l){if(t&&t.o){if(W.has(t))return;W.add(t),C.c.push(()=>{W.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function B(t){t&&t.c()}function D(t,e,n,l){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),l||J(()=>{const u=i.map(_e).filter(ke);o?o.push(...u):N(u),t.$$.on_mount=[]}),a.forEach(J)}function S(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(t,e){t.$$.dirty[0]===-1&&(O.push(t),Le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,l,r,i,o,a=[-1]){const u=j;P(t);const s=t.$$={fragment:null,ctx:null,props:i,update:k,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Z(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};o&&o(s.root);let m=!1;if(s.ctx=n?n(t,e.props||{},(c,y,...h)=>{const g=h.length?h[0]:y;return s.ctx&&r(s.ctx[c],s.ctx[c]=g)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](g),m&&Oe(t,c)),y}):[],s.update(),m=!0,N(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const c=De(e.target);s.fragment&&s.fragment.l(c),c.forEach($)}else s.fragment&&s.fragment.c();e.intro&&E(t.$$.fragment),D(t,e.target,e.anchor,e.customElement),pe()}P(u)}class V{$destroy(){S(this,1),this.$destroy=k}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Pe(t){let e;const n=t[1].default,l=Me(n,t,t[0],null);return{c(){l&&l.c()},m(r,i){l&&l.m(r,i),e=!0},p(r,[i]){l&&l.p&&(!e||i&1)&&Ie(l,n,r,r[0],e?Ae(n,r[0],i,null):Ce(r[0]),null)},i(r){e||(E(l,r),e=!0)},o(r){M(l,r),e=!1},d(r){l&&l.d(r)}}}function je(t,e,n){let{$$slots:l={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,l]}class qe extends V{constructor(e){super(),F(this,e,je,Pe,R,{})}}function Ke(t){let e;return{c(){e=b("h1"),e.textContent="DICES PWA 2",v(e,"class","svelte-hwear2")},m(n,l){w(n,e,l)},p:k,i:k,o:k,d(n){n&&$(e)}}}class ze extends V{constructor(e){super(),F(this,e,null,Ke,R,{})}}const se={getFields:He,saveFields:Je},We="dices-pwa",ve="stored-fields";function He(){return Te(ve)||[{dices:[6]}]}function Je(t){Ye(ve,t)}function Te(t){const e=localStorage.getItem(be(t));if(!e)return null;try{return JSON.parse(e)}catch{return null}}function Ye(t,e){const n=JSON.stringify(e);localStorage.setItem(be(t),n)}function be(t){return`${We}:${t}`}var Xe="/dices-pwa/assets/edit-btn.34a84f98.svg",Ge="/dices-pwa/assets/launch-btn.12fb09f0.svg";function Q(t,e=-1){const n=t.filter(i=>i!==e),l=Math.trunc(Math.random()*n.length);return n[l]}function oe(t,e,n){const l=t.slice();return l[5]=e[n],l}function ce(t){let e,n=t[5]+"",l;return{c(){e=b("option"),l=H(n),e.__value=t[5],e.value=e.__value},m(r,i){w(r,e,i),p(e,l)},p:k,d(r){r&&$(e)}}}function Qe(t){let e,n,l,r,i,o,a,u,s,m,c,y=t[1],h=[];for(let g=0;g<y.length;g+=1)h[g]=ce(oe(t,y,g));return{c(){e=b("fieldset"),n=b("legend"),n.textContent="New dice",l=I(),r=b("div"),i=b("div"),i.textContent="MAX",o=I(),a=b("select");for(let g=0;g<h.length;g+=1)h[g].c();u=I(),s=b("div"),s.textContent="+",v(n,"class","svelte-1hsxz0d"),t[0]===void 0&&J(()=>t[3].call(a)),v(s,"role","button"),v(s,"class","cmd-btn add-btn"),v(e,"class","svelte-1hsxz0d")},m(g,f){w(g,e,f),p(e,n),p(e,l),p(e,r),p(r,i),p(r,o),p(r,a);for(let _=0;_<h.length;_+=1)h[_].m(a,null);te(a,t[0]),p(e,u),p(e,s),m||(c=[L(a,"change",t[3]),L(s,"click",t[2])],m=!0)},p(g,[f]){if(f&2){y=g[1];let _;for(_=0;_<y.length;_+=1){const d=oe(g,y,_);h[_]?h[_].p(d,f):(h[_]=ce(d),h[_].c(),h[_].m(a,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=y.length}f&3&&te(a,g[0])},i:k,o:k,d(g){g&&$(e),ge(h,g),m=!1,N(c)}}}function Ue(t,e,n){const l=U(),r=Array.from({length:69}).map((u,s)=>s+2);let i=6;function o(){l("createVaule",i)}function a(){i=Se(this),n(0,i),n(1,r)}return[i,r,o,a]}class Ze extends V{constructor(e){super(),F(this,e,Ue,Qe,R,{})}}function ue(t){let e,n,l;return{c(){e=b("div"),e.textContent="+",v(e,"class","cmd-btn delete-btn svelte-1l9t4i4")},m(r,i){w(r,e,i),n||(l=L(e,"click",t[5]),n=!0)},p:k,d(r){r&&$(e),n=!1,l()}}}function xe(t){let e,n,l,r,i,o,a,u=t[1]&&t[2]&&ue(t);return{c(){e=b("div"),u&&u.c(),n=I(),l=b("strong"),r=H(t[0]),i=I(),o=b("div"),a=H(t[4]),v(l,"class","dice-max svelte-1l9t4i4"),v(o,"class","dice-value svelte-1l9t4i4"),ne(o,"running",t[3]),v(e,"class","single-dice svelte-1l9t4i4")},m(s,m){w(s,e,m),u&&u.m(e,null),p(e,n),p(e,l),p(l,r),p(e,i),p(e,o),p(o,a)},p(s,[m]){s[1]&&s[2]?u?u.p(s,m):(u=ue(s),u.c(),u.m(e,n)):u&&(u.d(1),u=null),m&1&&ee(r,s[0]),m&16&&ee(a,s[4]),m&8&&ne(o,"running",s[3])},i:k,o:k,d(s){s&&$(e),u&&u.d()}}}function et(t,e,n){let l,{max:r}=e,{attempt:i}=e,{isEditMode:o}=e,{isDeleteBtnAvailable:a}=e,u,s=null,m=!1;const c=U();function y(){s&&clearInterval(s),n(3,m=!0);const f=h(i,l,u);let _=0;s=setInterval(()=>{n(4,u=f[_++]),_===f.length&&(clearInterval(s),s=null,n(3,m=!1))},80)}Re(()=>{s!==null&&clearInterval(s)});function h(f,_,d=-1){let A=d;return Array.from({length:f}).reduce(T=>(A=Q(_,A),[...T,A]),[])}function g(){c("delete")}return t.$$set=f=>{"max"in f&&n(0,r=f.max),"attempt"in f&&n(6,i=f.attempt),"isEditMode"in f&&n(1,o=f.isEditMode),"isDeleteBtnAvailable"in f&&n(2,a=f.isDeleteBtnAvailable)},t.$$.update=()=>{t.$$.dirty&1&&n(8,l=Array.from({length:r}).map((f,_)=>_+1)),t.$$.dirty&256&&n(4,u=Q(l)),t.$$.dirty&8&&c("isRuningChange",m)},[r,o,a,m,u,g,i,y,l]}class tt extends V{constructor(e){super(),F(this,e,et,xe,R,{max:0,attempt:6,isEditMode:1,isDeleteBtnAvailable:2,run:7})}get run(){return this.$$.ctx[7]}}function fe(t,e,n){const l=t.slice();return l[14]=e[n],l[15]=e,l[16]=n,l}function ae(t){let e,n=t[16],l;const r=()=>t[10](e,n),i=()=>t[10](null,n);function o(...s){return t[11](t[14],t[15],t[16],...s)}function a(){return t[12](t[16])}let u={attempt:t[5],max:t[14].maxValue,isEditMode:t[1],isDeleteBtnAvailable:t[0].length>1};return e=new tt({props:u}),r(),e.$on("isRuningChange",o),e.$on("delete",a),{c(){B(e.$$.fragment)},m(s,m){D(e,s,m),l=!0},p(s,m){t=s,n!==t[16]&&(i(),n=t[16],r());const c={};m&32&&(c.attempt=t[5]),m&8&&(c.max=t[14].maxValue),m&2&&(c.isEditMode=t[1]),m&1&&(c.isDeleteBtnAvailable=t[0].length>1),e.$set(c)},i(s){l||(E(e.$$.fragment,s),l=!0)},o(s){M(e.$$.fragment,s),l=!1},d(s){i(),S(e,s)}}}function de(t){let e,n;return e=new Ze({}),e.$on("createVaule",t[13]),{c(){B(e.$$.fragment)},m(l,r){D(e,l,r),n=!0},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){S(e,l)}}}function nt(t){let e,n,l,r,i,o,a,u,s;return{c(){e=b("button"),n=b("img"),r=I(),i=b("button"),o=b("img"),x(n.src,l=Xe)||v(n,"src",l),v(n,"alt","edit"),v(n,"class","svelte-17lfnr3"),v(e,"class","cmd-btn svelte-17lfnr3"),x(o.src,a=Ge)||v(o,"src",a),v(o,"alt","Run"),v(o,"class","svelte-17lfnr3"),i.disabled=t[2],v(i,"class","cmd-btn svelte-17lfnr3")},m(m,c){w(m,e,c),p(e,n),w(m,r,c),w(m,i,c),p(i,o),u||(s=[L(e,"click",t[8]),L(i,"click",t[7])],u=!0)},p(m,c){c&4&&(i.disabled=m[2])},d(m){m&&$(e),m&&$(r),m&&$(i),u=!1,N(s)}}}function lt(t){let e,n,l;return{c(){e=b("button"),e.textContent="SAVE",v(e,"class","cmd-btn cmd-save svelte-17lfnr3")},m(r,i){w(r,e,i),n||(l=L(e,"click",t[9]),n=!0)},p:k,d(r){r&&$(e),n=!1,l()}}}function rt(t){let e,n,l,r,i,o,a,u=t[3],s=[];for(let f=0;f<u.length;f+=1)s[f]=ae(fe(t,u,f));const m=f=>M(s[f],1,1,()=>{s[f]=null});let c=t[1]&&de(t);function y(f,_){return f[1]?lt:nt}let h=y(t),g=h(t);return{c(){e=b("div"),n=b("div"),l=b("div");for(let f=0;f<s.length;f+=1)s[f].c();r=I(),c&&c.c(),i=I(),o=b("section"),g.c(),v(l,"class","field-dices svelte-17lfnr3"),v(o,"class","cmd-section svelte-17lfnr3"),v(e,"class","field svelte-17lfnr3")},m(f,_){w(f,e,_),p(e,n),p(n,l);for(let d=0;d<s.length;d+=1)s[d].m(l,null);p(n,r),c&&c.m(n,null),p(e,i),p(e,o),g.m(o,null),a=!0},p(f,[_]){if(_&123){u=f[3];let d;for(d=0;d<u.length;d+=1){const A=fe(f,u,d);s[d]?(s[d].p(A,_),E(s[d],1)):(s[d]=ae(A),s[d].c(),E(s[d],1),s[d].m(l,null))}for(re(),d=u.length;d<s.length;d+=1)m(d);ie()}f[1]?c?_&2&&E(c,1):(c=de(f),c.c(),E(c,1),c.m(n,null)):c&&(re(),M(c,1,1,()=>{c=null}),ie()),h===(h=y(f))&&g?g.p(f,_):(g.d(1),g=h(f),g&&(g.c(),g.m(o,null)))},i(f){if(!a){for(let _=0;_<u.length;_+=1)E(s[_]);E(c),a=!0}},o(f){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)M(s[_]);M(c),a=!1},d(f){f&&$(e),ge(s,f),c&&c.d(),g.d()}}}function it(t,e,n){let l,r,{dices:i}=e,{isEditMode:o}=e,a=[];const u=U();let s=20;function m(){a.forEach(d=>d==null?void 0:d.run())}function c(){u("edit")}function y(){u("save")}function h(d,A){X[d?"unshift":"push"](()=>{a[A]=d,n(4,a)})}const g=(d,A,T,{detail:ye})=>n(3,A[T].isRunning=ye,l),f=d=>u("deleteDice",d);function _(d){Fe.call(this,t,d)}return t.$$set=d=>{"dices"in d&&n(0,i=d.dices),"isEditMode"in d&&n(1,o=d.isEditMode)},t.$$.update=()=>{t.$$.dirty&1&&n(3,l=i.map(d=>({maxValue:d,isRunning:!1}))),t.$$.dirty&8&&n(2,r=l.some(({isRunning:d})=>d)),t.$$.dirty&4&&(r||n(5,s=Q([18,19,20,21,22,23])))},[i,o,r,l,a,s,u,m,c,y,h,g,f,_]}class st extends V{constructor(e){super(),F(this,e,it,rt,R,{dices:0,isEditMode:1})}}function ot(t){let e,n,l;return n=new st({props:{dices:t[0][0].dices,isEditMode:t[1]}}),n.$on("edit",t[2]),n.$on("save",t[3]),n.$on("deleteDice",t[6]),n.$on("createVaule",t[7]),{c(){e=b("main"),B(n.$$.fragment),v(e,"class","svelte-1y6mx4k")},m(r,i){w(r,e,i),D(n,e,null),l=!0},p(r,[i]){const o={};i&1&&(o.dices=r[0][0].dices),i&2&&(o.isEditMode=r[1]),n.$set(o)},i(r){l||(E(n.$$.fragment,r),l=!0)},o(r){M(n.$$.fragment,r),l=!1},d(r){r&&$(e),S(n)}}}function ct(t,e,n){let l=se.getFields(),r=!1;function i(){n(1,r=!0)}function o(){n(1,r=!1),se.saveFields(l)}function a(c){n(0,l=[{dices:l[0].dices.filter((y,h)=>h!==c)}])}function u(c){console.log("prova",c),n(0,l=[{dices:[...l[0].dices,c]}])}return[l,r,i,o,a,u,({detail:c})=>a(c),c=>u(c.detail)]}class ut extends V{constructor(e){super(),F(this,e,ct,ot,R,{})}}function ft(t){let e,n,l,r;return e=new ze({}),l=new ut({}),{c(){B(e.$$.fragment),n=I(),B(l.$$.fragment)},m(i,o){D(e,i,o),w(i,n,o),D(l,i,o),r=!0},i(i){r||(E(e.$$.fragment,i),E(l.$$.fragment,i),r=!0)},o(i){M(e.$$.fragment,i),M(l.$$.fragment,i),r=!1},d(i){S(e,i),i&&$(n),S(l,i)}}}function at(t){let e,n;return e=new qe({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(l,r){D(e,l,r),n=!0},p(l,[r]){const i={};r&1&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){n||(E(e.$$.fragment,l),n=!0)},o(l){M(e.$$.fragment,l),n=!1},d(l){S(e,l)}}}class dt extends V{constructor(e){super(),F(this,e,null,at,R,{})}}new dt({target:document.getElementById("app")});
