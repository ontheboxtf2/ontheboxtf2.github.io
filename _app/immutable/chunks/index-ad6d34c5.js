function E(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function H(){return Object.create(null)}function y(t){t.forEach(P)}function X(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function yt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function Y(t){return Object.keys(t).length===0}function z(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t){let e;return z(t,n=>e=n)(),e}function xt(t,e,n){t.$$.on_destroy.push(z(e,n))}function bt(t,e,n,i){if(t){const r=D(t,e,n,i);return t[0](r)}}function D(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,u){if(r){const s=D(e,n,i,u);t.p(s,r)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t,e,n){return t.set(n),e}const O=typeof window<"u";let Nt=O?()=>window.performance.now():()=>Date.now(),F=O?t=>requestAnimationFrame(t):E;const d=new Set;function G(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),d.size!==0&&F(G)}function Tt(t){let e;return d.size===0&&F(G),{promise:new Promise(n=>{d.add(e={c:t,f:n})}),abort(){d.delete(e)}}}let N=!1;function Z(){N=!0}function tt(){N=!1}function et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:et(1,r,g=>e[n[g]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[l],f)}}function it(t,e){if(N){for(nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function rt(t,e,n){t.insertBefore(e,n||null)}function st(t,e,n){N&&!n?it(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function lt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function At(){return M(" ")}function St(){return M("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ct(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,e,n,i,r=!1){R(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ot(t,e,n,i){return J(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function kt(t,e,n){return ot(t,e,n,I)}function ut(t,e){return J(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function Ht(t){return ut(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function Ct(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n);if(n===i)return new L(void 0,e);R(t);const r=t.splice(n,i-n+1);v(r[0]),v(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(u,e)}function Lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class at{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=lt(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)rt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class L extends at{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)st(this.t,this.n[n],e)}}let p;function m(t){p=t}function K(){if(!p)throw new Error("Function called outside component initialization");return p}function Bt(t){K().$$.on_mount.push(t)}function Pt(t){K().$$.after_update.push(t)}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],q=[],w=[],B=[],Q=Promise.resolve();let A=!1;function W(){A||(A=!0,Q.then(U))}function Dt(){return W(),Q}function S(t){w.push(t)}const T=new Set;let b=0;function U(){const t=p;do{for(;b<h.length;){const e=h[b];b++,m(e),ft(e.$$)}for(m(null),h.length=0,b=0;q.length;)q.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];T.has(n)||(T.add(n),n())}w.length=0}while(h.length);for(;B.length;)B.pop()();A=!1,T.clear(),m(t)}function ft(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const $=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Ft(){_.r||y(_.c),_=_.p}function _t(t,e){t&&t.i&&($.delete(t),t.i(e))}function Gt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function It(t){t&&t.c()}function Rt(t,e){t&&t.l(e)}function dt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||S(()=>{const l=u.map(P).filter(X);s?s.push(...l):y(l),t.$$.on_mount=[]}),o.forEach(S)}function ht(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,i,r,u,s,o=[-1]){const l=p;m(t);const c=t.$$={fragment:null,ctx:null,props:u,update:E,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,g,...j)=>{const k=j.length?j[0]:g;return c.ctx&&r(c.ctx[a],c.ctx[a]=k)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](k),f&&mt(t,a)),g}):[],c.update(),f=!0,y(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Z();const a=ct(e.target);c.fragment&&c.fragment.l(a),a.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&_t(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),tt(),U()}m(l)}class Kt{$destroy(){ht(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{E as A,z as B,y as C,X as D,bt as E,$t as F,vt as G,wt as H,it as I,xt as J,yt as K,Mt as L,zt as M,gt as N,L as O,Ct as P,Nt as Q,Tt as R,Kt as S,Et as T,At as a,st as b,Ht as c,Ft as d,St as e,_t as f,Ot as g,v as h,Jt as i,Pt as j,I as k,kt as l,ct as m,jt as n,Bt as o,qt as p,M as q,ut as r,pt as s,Gt as t,Lt as u,It as v,Rt as w,dt as x,ht as y,Dt as z};
