import{S as Wt,i as Bt,s as Gt,E as re,k as z,l as $,m as R,h as E,n as N,b as j,L as ie,F as oe,G as se,H as fe,f as X,t as q,M as le,o as ce,N as Nn,q as ft,a as Et,v as Ft,r as lt,c as St,w as Dt,I as M,x as Ht,g as je,d as Ye,y as jt,J as Ve,O as Ue,e as Pn,P as We,A as In}from"./index-ad6d34c5.js";import{d as Be,w as ue}from"./index-2658db0b.js";function me(t){var n,e,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=me(t[n]))&&(a&&(a+=" "),a+=e);else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function Z(){for(var t,n,e=0,a="";e<arguments.length;)(t=arguments[e++])&&(n=me(t))&&(a&&(a+=" "),a+=n);return a}function Ge(t){let n,e,a,r,o;const i=t[3].default,s=re(i,t,t[2],null);return{c(){n=z("button"),s&&s.c(),this.h()},l(f){n=$(f,"BUTTON",{type:!0,class:!0});var c=R(n);s&&s.l(c),c.forEach(E),this.h()},h(){N(n,"type","button"),N(n,"class",e=Z("flex cursor-pointer items-center gap-4 text-lg text-green-600 ring-2 ring-inset ring-green-600 hover:bg-green-900/40",{lg:"px-6 py-3",sm:"px-5 py-1"}[t[0]],t[1]?"bg-green-900/40":"bg-transparent"))},m(f,c){j(f,n,c),s&&s.m(n,null),a=!0,r||(o=ie(n,"click",t[4]),r=!0)},p(f,[c]){s&&s.p&&(!a||c&4)&&oe(s,i,f,f[2],a?fe(i,f[2],c,null):se(f[2]),null),(!a||c&3&&e!==(e=Z("flex cursor-pointer items-center gap-4 text-lg text-green-600 ring-2 ring-inset ring-green-600 hover:bg-green-900/40",{lg:"px-6 py-3",sm:"px-5 py-1"}[f[0]],f[1]?"bg-green-900/40":"bg-transparent")))&&N(n,"class",e)},i(f){a||(X(s,f),a=!0)},o(f){q(s,f),a=!1},d(f){f&&E(n),s&&s.d(f),r=!1,o()}}}function Xe(t,n,e){let{$$slots:a={},$$scope:r}=n,{size:o="lg"}=n,{highlight:i=!1}=n;function s(f){le.call(this,t,f)}return t.$$set=f=>{"size"in f&&e(0,o=f.size),"highlight"in f&&e(1,i=f.highlight),"$$scope"in f&&e(2,r=f.$$scope)},[o,i,r,a,s]}class de extends Wt{constructor(n){super(),Bt(this,n,Xe,Ge,Gt,{size:0,highlight:1})}}const qe=()=>{const t=ue(0);return ce(()=>{t.set(document.documentElement.scrollTop),document.addEventListener("scroll",()=>{t.set(document.documentElement.scrollTop)},!1)}),Be([t],([n])=>n>50,!1)};function Ke(t){let n,e,a,r;const o=t[1].default,i=re(o,t,t[0],null);return{c(){n=z("button"),i&&i.c(),this.h()},l(s){n=$(s,"BUTTON",{type:!0,class:!0});var f=R(n);i&&i.l(f),f.forEach(E),this.h()},h(){N(n,"type","button"),N(n,"class","cursor-pointer text-lg text-green-600 underline-offset-4 hover:text-green-500 hover:underline")},m(s,f){j(s,n,f),i&&i.m(n,null),e=!0,a||(r=ie(n,"click",t[2]),a=!0)},p(s,[f]){i&&i.p&&(!e||f&1)&&oe(i,o,s,s[0],e?fe(o,s[0],f,null):se(s[0]),null)},i(s){e||(X(i,s),e=!0)},o(s){q(i,s),e=!1},d(s){s&&E(n),i&&i.d(s),a=!1,r()}}}function Je(t,n,e){let{$$slots:a={},$$scope:r}=n;function o(i){le.call(this,t,i)}return t.$$set=i=>{"$$scope"in i&&e(0,r=i.$$scope)},[r,a,o]}class Tn extends Wt{constructor(n){super(),Bt(this,n,Je,Ke,Gt,{})}}const Qe=t=>t instanceof Error?t:new Error(t),Ze=t=>{let n;try{n=t()}catch(e){n=Qe(e)}return n},ta=(t,n,e)=>{var o;const a=()=>localStorage.setItem(n,JSON.stringify(Nn(t))),r=localStorage.getItem(n);if(r==null)a();else{const i=Ze(()=>JSON.parse(r));!(i instanceof Error)&&((o=e==null?void 0:e(i))!=null?o:!0)?t.set(i):(a(),console.warn(`Local storage key "${n}" reset to default value of ${JSON.stringify(Nn(t))}.`,...i instanceof Error?[i]:[i,"failed verify call."]))}return t.subscribe(i=>{localStorage.setItem(n,JSON.stringify(i))}),t},na=ue(!1);function ea(t){let n;return{c(){n=ft("Testimonials")},l(e){n=lt(e,"Testimonials")},m(e,a){j(e,n,a)},d(e){e&&E(n)}}}function aa(t){let n;return{c(){n=ft("Features")},l(e){n=lt(e,"Features")},m(e,a){j(e,n,a)},d(e){e&&E(n)}}}function ra(t){let n,e,a;return e=new de({props:{size:"sm",$$slots:{default:[oa]},$$scope:{ctx:t}}}),{c(){n=z("a"),Ft(e.$$.fragment),this.h()},l(r){n=$(r,"A",{href:!0});var o=R(n);Dt(e.$$.fragment,o),o.forEach(E),this.h()},h(){N(n,"href","/app")},m(r,o){j(r,n,o),Ht(e,n,null),a=!0},i(r){a||(X(e.$$.fragment,r),a=!0)},o(r){q(e.$$.fragment,r),a=!1},d(r){r&&E(n),jt(e)}}}function ia(t){let n,e,a;return e=new de({props:{size:"sm",$$slots:{default:[sa]},$$scope:{ctx:t}}}),{c(){n=z("a"),Ft(e.$$.fragment),this.h()},l(r){n=$(r,"A",{href:!0});var o=R(n);Dt(e.$$.fragment,o),o.forEach(E),this.h()},h(){N(n,"href","/app")},m(r,o){j(r,n,o),Ht(e,n,null),a=!0},i(r){a||(X(e.$$.fragment,r),a=!0)},o(r){q(e.$$.fragment,r),a=!1},d(r){r&&E(n),jt(e)}}}function oa(t){let n;return{c(){n=ft("Boot")},l(e){n=lt(e,"Boot")},m(e,a){j(e,n,a)},d(e){e&&E(n)}}}function sa(t){let n;return{c(){n=ft("Install")},l(e){n=lt(e,"Install")},m(e,a){j(e,n,a)},d(e){e&&E(n)}}}function fa(t){let n,e,a,r,o,i,s,f,c,l,m,v,g,x,_,I,w,p,S,O;v=new Tn({props:{$$slots:{default:[ea]},$$scope:{ctx:t}}}),_=new Tn({props:{$$slots:{default:[aa]},$$scope:{ctx:t}}});const P=[ia,ra],T=[];function D(k,b){return k[0]?0:1}return w=D(t),p=T[w]=P[w](t),{c(){n=z("nav"),e=z("a"),a=z("div"),r=ft("On the Box"),o=Et(),i=z("div"),s=ft("BETA"),c=Et(),l=z("div"),m=z("a"),Ft(v.$$.fragment),g=Et(),x=z("a"),Ft(_.$$.fragment),I=Et(),p.c(),this.h()},l(k){n=$(k,"NAV",{class:!0});var b=R(n);e=$(b,"A",{href:!0,class:!0});var Y=R(e);a=$(Y,"DIV",{class:!0});var mt=R(a);r=lt(mt,"On the Box"),mt.forEach(E),o=St(Y),i=$(Y,"DIV",{class:!0});var rt=R(i);s=lt(rt,"BETA"),rt.forEach(E),Y.forEach(E),c=St(b),l=$(b,"DIV",{class:!0});var _t=R(l);m=$(_t,"A",{href:!0});var Cn=R(m);Dt(v.$$.fragment,Cn),Cn.forEach(E),g=St(_t),x=$(_t,"A",{href:!0});var On=R(x);Dt(_.$$.fragment,On),On.forEach(E),_t.forEach(E),I=St(b),p.l(b),b.forEach(E),this.h()},h(){N(a,"class","mt-px -mb-px text-2xl font-bold tracking-tighter"),N(i,"class","absolute -right-12 top-0 mb-auto bg-green-600 px-1.5 text-xs font-bold tracking-tight"),N(e,"href","/"),N(e,"class",f=Z("relative mr-auto flex cursor-pointer items-center gap-3 bg-green-600 px-3 py-0.5 transition-colors duration-500 hover:bg-green-500",t[1]?"text-[rgb(6,46,21)]":"text-black")),N(m,"href","/#testimonials"),N(x,"href","/#features"),N(l,"class","hidden md:contents"),N(n,"class",S=Z("sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7",t[1]?"bg-green-900/20":"bg-black"))},m(k,b){j(k,n,b),M(n,e),M(e,a),M(a,r),M(e,o),M(e,i),M(i,s),M(n,c),M(n,l),M(l,m),Ht(v,m,null),M(l,g),M(l,x),Ht(_,x,null),M(n,I),T[w].m(n,null),O=!0},p(k,[b]){(!O||b&2&&f!==(f=Z("relative mr-auto flex cursor-pointer items-center gap-3 bg-green-600 px-3 py-0.5 transition-colors duration-500 hover:bg-green-500",k[1]?"text-[rgb(6,46,21)]":"text-black")))&&N(e,"class",f);const Y={};b&8&&(Y.$$scope={dirty:b,ctx:k}),v.$set(Y);const mt={};b&8&&(mt.$$scope={dirty:b,ctx:k}),_.$set(mt);let rt=w;w=D(k),w!==rt&&(je(),q(T[rt],1,1,()=>{T[rt]=null}),Ye(),p=T[w],p||(p=T[w]=P[w](k),p.c()),X(p,1),p.m(n,null)),(!O||b&2&&S!==(S=Z("sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7",k[1]?"bg-green-900/20":"bg-black")))&&N(n,"class",S)},i(k){O||(X(v.$$.fragment,k),X(_.$$.fragment,k),X(p),O=!0)},o(k){q(v.$$.fragment,k),q(_.$$.fragment,k),q(p),O=!1},d(k){k&&E(n),jt(v),jt(_),T[w].d()}}}function la(t,n,e){let a;const r=qe();Ve(t,r,i=>e(1,a=i));let o=!0;return ce(()=>ta(na,"installed").subscribe(s=>{s&&e(0,o=!1)})),[o,a,r]}class Jr extends Wt{constructor(n){super(),Bt(this,n,la,fa,Gt,{})}}function Ln(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ln(Object(e),!0).forEach(function(a){C(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Ln(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Yt(t){return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yt(t)}function ca(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Mn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ua(t,n,e){return n&&Mn(t.prototype,n),e&&Mn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function vn(t,n){return da(t)||ga(t,n)||ve(t,n)||ba()}function xt(t){return ma(t)||va(t)||ve(t)||pa()}function ma(t){if(Array.isArray(t))return en(t)}function da(t){if(Array.isArray(t))return t}function va(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ga(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function ve(t,n){if(!!t){if(typeof t=="string")return en(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return en(t,n)}}function en(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zn=function(){},gn={},ge={},pe=null,be={mark:zn,measure:zn};try{typeof window<"u"&&(gn=window),typeof document<"u"&&(ge=document),typeof MutationObserver<"u"&&(pe=MutationObserver),typeof performance<"u"&&(be=performance)}catch{}var ha=gn.navigator||{},$n=ha.userAgent,Rn=$n===void 0?"":$n,K=gn,y=ge,Fn=pe,Ct=be;K.document;var B=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",he=~Rn.indexOf("MSIE")||~Rn.indexOf("Trident/"),Ot,Nt,Pt,It,Tt,V="___FONT_AWESOME___",an=16,ye="fa",ke="svg-inline--fa",et="data-fa-i2svg",rn="data-fa-pseudo-element",ya="data-fa-pseudo-element-pending",pn="data-prefix",bn="data-icon",Dn="fontawesome-i2svg",ka="async",xa=["HTML","HEAD","STYLE","SCRIPT"],xe=function(){try{return!0}catch{return!1}}(),h="classic",A="sharp",hn=[h,A];function wt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var pt=wt((Ot={},C(Ot,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),C(Ot,A,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ot)),bt=wt((Nt={},C(Nt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(Nt,A,{solid:"fass"}),Nt)),ht=wt((Pt={},C(Pt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(Pt,A,{fass:"fa-solid"}),Pt)),wa=wt((It={},C(It,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(It,A,{"fa-solid":"fass"}),It)),Aa=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,we="fa-layers-text",_a=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ea=wt((Tt={},C(Tt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(Tt,A,{900:"fass"}),Tt)),Ae=[1,2,3,4,5,6,7,8,9,10],Sa=Ae.concat([11,12,13,14,15,16,17,18,19,20]),Ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yt=new Set;Object.keys(bt[h]).map(yt.add.bind(yt));Object.keys(bt[A]).map(yt.add.bind(yt));var Oa=[].concat(hn,xt(yt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY]).concat(Ae.map(function(t){return"".concat(t,"x")})).concat(Sa.map(function(t){return"w-".concat(t)})),vt=K.FontAwesomeConfig||{};function Na(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Pa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Ia=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ia.forEach(function(t){var n=vn(t,2),e=n[0],a=n[1],r=Pa(Na(e));r!=null&&(vt[a]=r)})}var _e={styleDefault:"solid",familyDefault:"classic",cssPrefix:ye,replacementClass:ke,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vt.familyPrefix&&(vt.cssPrefix=vt.familyPrefix);var ct=u(u({},_e),vt);ct.autoReplaceSvg||(ct.observeMutations=!1);var d={};Object.keys(_e).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){ct[t]=e,gt.forEach(function(a){return a(d)})},get:function(){return ct[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){ct.cssPrefix=n,gt.forEach(function(e){return e(d)})},get:function(){return ct.cssPrefix}});K.FontAwesomeConfig=d;var gt=[];function Ta(t){return gt.push(t),function(){gt.splice(gt.indexOf(t),1)}}var G=an,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function La(t){if(!(!t||!B)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return y.head.insertBefore(n,a),t}}var Ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var t=12,n="";t-- >0;)n+=Ma[Math.random()*62|0];return n}function ut(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function yn(t){return t.classList?ut(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ee(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function za(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Ee(t[e]),'" ')},"").trim()}function Xt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function kn(t){return t.size!==H.size||t.x!==H.x||t.y!==H.y||t.rotate!==H.rotate||t.flipX||t.flipY}function $a(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ra(t){var n=t.transform,e=t.width,a=e===void 0?an:e,r=t.height,o=r===void 0?an:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&he?f+="translate(".concat(n.x/G-a/2,"em, ").concat(n.y/G-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/G,"em), calc(-50% + ").concat(n.y/G,"em)) "):f+="translate(".concat(n.x/G,"em, ").concat(n.y/G,"em) "),f+="scale(".concat(n.size/G*(n.flipX?-1:1),", ").concat(n.size/G*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Se(){var t=ye,n=ke,e=d.cssPrefix,a=d.replacementClass,r=Fa;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Hn=!1;function Qt(){d.autoAddCss&&!Hn&&(La(Se()),Hn=!0)}var Da={mixout:function(){return{dom:{css:Se,insertCss:Qt}}},hooks:function(){return{beforeDOMElementCreation:function(){Qt()},beforeI2svg:function(){Qt()}}}},U=K||{};U[V]||(U[V]={});U[V].styles||(U[V].styles={});U[V].hooks||(U[V].hooks={});U[V].shims||(U[V].shims=[]);var F=U[V],Ce=[],Ha=function t(){y.removeEventListener("DOMContentLoaded",t),Vt=1,Ce.map(function(n){return n()})},Vt=!1;B&&(Vt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Vt||y.addEventListener("DOMContentLoaded",Ha));function ja(t){!B||(Vt?setTimeout(t,0):Ce.push(t))}function At(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Ee(t):"<".concat(n," ").concat(za(a),">").concat(o.map(At).join(""),"</").concat(n,">")}function jn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Ya=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},Zt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Ya(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[o[0]]):(f=0,l=a);f<i;f++)c=o[f],l=s(l,n[c],c,n);return l};function Va(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function on(t){var n=Va(t);return n.length===1?n[0].toString(16):null}function Ua(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Yn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function sn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Yn(n);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(t,Yn(n)):F.styles[t]=u(u({},F.styles[t]||{}),o),t==="fas"&&sn("fa",n)}var Lt,Mt,zt,it=F.styles,Wa=F.shims,Ba=(Lt={},C(Lt,h,Object.values(ht[h])),C(Lt,A,Object.values(ht[A])),Lt),xn=null,Oe={},Ne={},Pe={},Ie={},Te={},Ga=(Mt={},C(Mt,h,Object.keys(pt[h])),C(Mt,A,Object.keys(pt[A])),Mt);function Xa(t){return~Oa.indexOf(t)}function qa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Xa(r)?r:null}var Le=function(){var n=function(o){return Zt(it,function(i,s,f){return i[f]=Zt(s,o,{}),i},{})};Oe=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Ne=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Te=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in it||d.autoFetchSvg,a=Zt(Wa,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Pe=a.names,Ie=a.unicodes,xn=qt(d.styleDefault,{family:d.familyDefault})};Ta(function(t){xn=qt(t.styleDefault,{family:d.familyDefault})});Le();function wn(t,n){return(Oe[t]||{})[n]}function Ka(t,n){return(Ne[t]||{})[n]}function nt(t,n){return(Te[t]||{})[n]}function Me(t){return Pe[t]||{prefix:null,iconName:null}}function Ja(t){var n=Ie[t],e=wn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function J(){return xn}var An=function(){return{prefix:null,iconName:null,rest:[]}};function qt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=pt[a][t],o=bt[a][t]||bt[a][r],i=t in F.styles?t:null;return o||i||null}var Vn=(zt={},C(zt,h,Object.keys(ht[h])),C(zt,A,Object.keys(ht[A])),zt);function Kt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,o=(n={},C(n,h,"".concat(d.cssPrefix,"-").concat(h)),C(n,A,"".concat(d.cssPrefix,"-").concat(A)),n),i=null,s=h;(t.includes(o[h])||t.some(function(c){return Vn[h].includes(c)}))&&(s=h),(t.includes(o[A])||t.some(function(c){return Vn[A].includes(c)}))&&(s=A);var f=t.reduce(function(c,l){var m=qa(d.cssPrefix,l);if(it[l]?(l=Ba[s].includes(l)?wa[s][l]:l,i=l,c.prefix=l):Ga[s].indexOf(l)>-1?(i=l,c.prefix=qt(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==o[h]&&l!==o[A]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=i==="fa"?Me(c.iconName):{},g=nt(c.prefix,c.iconName);v.prefix&&(i=null),c.iconName=v.iconName||g||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!it.far&&it.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},An());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===A&&(it.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=nt(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=J()||"fas"),f}var Qa=function(){function t(){ca(this,t),this.definitions={}}return ua(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),i[s]),sn(s,i[s]);var f=ht[h][s];f&&sn(f,i[s]),Le()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[s][m]=c)}),e[s][f]=c}),e}}]),t}(),Un=[],ot={},st={},Za=Object.keys(st);function tr(t,n){var e=n.mixoutsTo;return Un=t,ot={},Object.keys(st).forEach(function(a){Za.indexOf(a)===-1&&delete st[a]}),Un.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),Yt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){ot[i]||(ot[i]=[]),ot[i].push(o[i])})}a.provides&&a.provides(st)}),e}function fn(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=ot[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function at(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=ot[t]||[];r.forEach(function(o){o.apply(null,e)})}function W(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return st[t]?st[t].apply(null,n):void 0}function ln(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||J();if(!!n)return n=nt(e,n)||n,jn(ze.definitions,e,n)||jn(F.styles,e,n)}var ze=new Qa,nr=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,at("noAuto")},er={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(at("beforeI2svg",n),W("pseudoElements2svg",n),W("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ja(function(){rr({autoReplaceSvgRoot:e}),at("watch",n)})}},ar={icon:function(n){if(n===null)return null;if(Yt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:nt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=qt(n[0]);return{prefix:a,iconName:nt(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Aa))){var r=Kt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:nt(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=J();return{prefix:o,iconName:nt(o,n)||n}}}},L={noAuto:nr,config:d,dom:er,parse:ar,library:ze,findIconDefinition:ln,toHtml:At},rr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(F.styles).length>0||d.autoFetchSvg)&&B&&d.autoReplaceSvg&&L.dom.i2svg({node:a})};function Jt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return At(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!B){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ir(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(kn(i)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Xt(u(u({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function or(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function _n(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,v=t.watchable,g=v===void 0?!1:v,x=a.found?a:e,_=x.width,I=x.height,w=r==="fak",p=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(b){return m.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(m.classes).join(" "),S={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(I)})},O=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/I*16*.0625,"em")}:{};g&&(S.attributes[et]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(l||kt())},children:[f]}),delete S.attributes.title);var P=u(u({},S),{},{prefix:r,iconName:o,main:e,mask:a,maskId:c,transform:i,symbol:s,styles:u(u({},O),m.styles)}),T=a.found&&e.found?W("generateAbstractMask",P)||{children:[],attributes:{}}:W("generateAbstractIcon",P)||{children:[],attributes:{}},D=T.children,k=T.attributes;return P.children=D,P.attributes=k,s?or(P):ir(P)}function Wn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[et]="");var l=u({},i.styles);kn(r)&&(l.transform=Ra({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=Xt(l);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[n]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function sr(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=Xt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var tn=F.styles;function cn(t){var n=t[0],e=t[1],a=t.slice(4),r=vn(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(tt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(tt.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var fr={found:!1,width:512,height:512};function lr(t,n){!xe&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function un(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=J()),new Promise(function(a,r){if(W("missingIconAbstract"),e==="fa"){var o=Me(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&tn[n]&&tn[n][t]){var i=tn[n][t];return a(cn(i))}lr(t,n),a(u(u({},fr),{},{icon:d.showMissingIcons&&t?W("missingIconAbstract")||{}:{}}))})}var Bn=function(){},mn=d.measurePerformance&&Ct&&Ct.mark&&Ct.measure?Ct:{mark:Bn,measure:Bn},dt='FA "6.2.0"',cr=function(n){return mn.mark("".concat(dt," ").concat(n," begins")),function(){return $e(n)}},$e=function(n){mn.mark("".concat(dt," ").concat(n," ends")),mn.measure("".concat(dt," ").concat(n),"".concat(dt," ").concat(n," begins"),"".concat(dt," ").concat(n," ends"))},En={begin:cr,end:$e},$t=function(){};function Gn(t){var n=t.getAttribute?t.getAttribute(et):null;return typeof n=="string"}function ur(t){var n=t.getAttribute?t.getAttribute(pn):null,e=t.getAttribute?t.getAttribute(bn):null;return n&&e}function mr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function dr(){if(d.autoReplaceSvg===!0)return Rt.replace;var t=Rt[d.autoReplaceSvg];return t||Rt.replace}function vr(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function gr(t){return y.createElement(t)}function Re(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?vr:gr:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Re(i,{ceFn:a}))}),r}function pr(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Rt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Re(r),e)}),e.getAttribute(et)===null&&d.keepOriginalSource){var a=y.createComment(pr(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~yn(e).indexOf(d.replacementClass))return Rt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return At(s)}).join(`
`);e.setAttribute(et,""),e.innerHTML=i}};function Xn(t){t()}function Fe(t,n){var e=typeof n=="function"?n:$t;if(t.length===0)e();else{var a=Xn;d.mutateApproach===ka&&(a=K.requestAnimationFrame||Xn),a(function(){var r=dr(),o=En.begin("mutate");t.map(r),o(),e()})}}var Sn=!1;function De(){Sn=!0}function dn(){Sn=!1}var Ut=null;function qn(t){if(!!Fn&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?$t:n,a=t.nodeCallback,r=a===void 0?$t:a,o=t.pseudoElementsCallback,i=o===void 0?$t:o,s=t.observeMutationsRoot,f=s===void 0?y:s;Ut=new Fn(function(c){if(!Sn){var l=J();ut(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Gn(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&Gn(m.target)&&~Ca.indexOf(m.attributeName))if(m.attributeName==="class"&&ur(m.target)){var v=Kt(yn(m.target)),g=v.prefix,x=v.iconName;m.target.setAttribute(pn,g||l),x&&m.target.setAttribute(bn,x)}else mr(m.target)&&r(m.target)})}}),B&&Ut.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function br(){!Ut||Ut.disconnect()}function hr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function yr(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Kt(yn(t));return r.prefix||(r.prefix=J()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ka(r.prefix,t.innerText)||wn(r.prefix,on(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function kr(t){var n=ut(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||kt()):(n["aria-hidden"]="true",n.focusable="false")),n}function xr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=yr(t),a=e.iconName,r=e.prefix,o=e.rest,i=kr(t),s=fn("parseNodeAttributes",{},t),f=n.styleParser?hr(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var wr=F.styles;function He(t){var n=d.autoReplaceSvg==="nest"?Kn(t,{styleParser:!1}):Kn(t);return~n.extra.classes.indexOf(we)?W("generateLayersText",t,n):W("generateSvgReplacementMutation",t,n)}var Q=new Set;hn.map(function(t){Q.add("fa-".concat(t))});Object.keys(pt[h]).map(Q.add.bind(Q));Object.keys(pt[A]).map(Q.add.bind(Q));Q=xt(Q);function Jn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=y.documentElement.classList,a=function(m){return e.add("".concat(Dn,"-").concat(m))},r=function(m){return e.remove("".concat(Dn,"-").concat(m))},o=d.autoFetchSvg?Q:hn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(wr));o.includes("fa")||o.push("fa");var i=[".".concat(we,":not([").concat(et,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(et,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=ut(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=En.begin("onTree"),c=s.reduce(function(l,m){try{var v=He(m);v&&l.push(v)}catch(g){xe||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(v){Fe(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),m(v)})})}function Ar(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;He(t).then(function(e){e&&Fe([e],n)})}function _r(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:ln(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:ln(r||{})),t(a,u(u({},e),{},{mask:r}))}}var Er=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?H:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,m=e.title,v=m===void 0?null:m,g=e.titleId,x=g===void 0?null:g,_=e.classes,I=_===void 0?[]:_,w=e.attributes,p=w===void 0?{}:w,S=e.styles,O=S===void 0?{}:S;if(!!n){var P=n.prefix,T=n.iconName,D=n.icon;return Jt(u({type:"icon"},n),function(){return at("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?p["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||kt()):(p["aria-hidden"]="true",p.focusable="false")),_n({icons:{main:cn(D),mask:f?cn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:T,transform:u(u({},H),r),symbol:i,title:v,maskId:l,titleId:x,extra:{attributes:p,styles:O,classes:I}})})}},Sr={mixout:function(){return{icon:_r(Er)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Jn,e.nodeCallback=Ar,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,o=e.callback,i=o===void 0?function(){}:o;return Jn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,m=a.maskId,v=a.extra;return new Promise(function(g,x){Promise.all([un(r,s),l.iconName?un(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var I=vn(_,2),w=I[0],p=I[1];g([e,_n({icons:{main:w,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:o,titleId:i,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=Xt(s);f.length>0&&(r.style=f);var c;return kn(i)&&(c=W("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},Cr={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Jt({type:"layer"},function(){at("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(xt(o)).join(" ")},children:i}]})}}}},Or={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,c=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return Jt({type:"counter",content:e},function(){return at("beforeDOMElementCreation",{content:e,params:a}),sr({content:e.toString(),title:o,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(xt(s))}})})}}}},Nr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?H:r,i=a.title,s=i===void 0?null:i,f=a.classes,c=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,v=a.styles,g=v===void 0?{}:v;return Jt({type:"text",content:e},function(){return at("beforeDOMElementCreation",{content:e,params:a}),Wn({content:e,transform:u(u({},H),o),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(xt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(he){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Wn({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Pr=new RegExp('"',"ug"),Qn=[1105920,1112319];function Ir(t){var n=t.replace(Pr,""),e=Ua(n,0),a=e>=Qn[0]&&e<=Qn[1],r=n.length===2?n[0]===n[1]:!1;return{value:on(r?n[0]:n),isSecondary:a||r}}function Zn(t,n){var e="".concat(ya).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=ut(t.children),i=o.filter(function(D){return D.getAttribute(rn)===n})[0],s=K.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(_a),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?A:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?bt[v][f[2].toLowerCase()]:Ea[v][c],x=Ir(m),_=x.value,I=x.isSecondary,w=f[0].startsWith("FontAwesome"),p=wn(g,_),S=p;if(w){var O=Ja(_);O.iconName&&O.prefix&&(p=O.iconName,g=O.prefix)}if(p&&!I&&(!i||i.getAttribute(pn)!==g||i.getAttribute(bn)!==S)){t.setAttribute(e,S),i&&t.removeChild(i);var P=xr(),T=P.extra;T.attributes[rn]=n,un(p,g).then(function(D){var k=_n(u(u({},P),{},{icons:{main:D,mask:An()},prefix:g,iconName:S,extra:T,watchable:!0})),b=y.createElement("svg");n==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=k.map(function(Y){return At(Y)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Tr(t){return Promise.all([Zn(t,"::before"),Zn(t,"::after")])}function Lr(t){return t.parentNode!==document.head&&!~xa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(rn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function te(t){if(!!B)return new Promise(function(n,e){var a=ut(t.querySelectorAll("*")).filter(Lr).map(Tr),r=En.begin("searchPseudoElements");De(),Promise.all(a).then(function(){r(),dn(),n()}).catch(function(){r(),dn(),e()})})}var Mr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=te,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;d.searchPseudoElements&&te(r)}}},ne=!1,zr={mixout:function(){return{dom:{unwatch:function(){De(),ne=!0}}}},hooks:function(){return{bootstrap:function(){qn(fn("mutationObserverCallbacks",{}))},noAuto:function(){br()},watch:function(e){var a=e.observeMutationsRoot;ne?dn():qn(fn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ee=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},$r={mixout:function(){return{parse:{transform:function(e){return ee(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=ee(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},nn={x:0,y:0,width:"100%",height:"100%"};function ae(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Rr(t){return t.tag==="g"?t.children:[t]}var Fr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?Kt(r.split(" ").map(function(i){return i.trim()})):An();return o.prefix||(o.prefix=J()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,c=o.width,l=o.icon,m=i.width,v=i.icon,g=$a({transform:f,containerWidth:m,iconWidth:c}),x={tag:"rect",attributes:u(u({},nn),{},{fill:"white"})},_=l.children?{children:l.children.map(ae)}:{},I={tag:"g",attributes:u({},g.inner),children:[ae(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},_))]},w={tag:"g",attributes:u({},g.outer),children:[I]},p="mask-".concat(s||kt()),S="clip-".concat(s||kt()),O={tag:"mask",attributes:u(u({},nn),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,w]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Rr(v)},O]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(p,")")},nn)}),{children:a,attributes:r}}}},Dr={provides:function(n){var e=!1;K.matchMedia&&(e=K.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Hr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},jr=[Da,Sr,Cr,Or,Nr,Mr,zr,$r,Fr,Dr,Hr];tr(jr,{mixoutsTo:L});L.noAuto;var Yr=L.config,Vr=L.library;L.dom;L.parse;L.findIconDefinition;L.toHtml;var Ur=L.icon;L.layer;L.text;L.counter;function Wr(t){let n,e;return{c(){n=new Ue(!1),e=Pn(),this.h()},l(a){n=We(a,!1),e=Pn(),this.h()},h(){n.a=e},m(a,r){n.m(t[0],a,r),j(a,e,r)},p(a,[r]){r&1&&n.p(a[0])},i:In,o:In,d(a){a&&E(e),a&&n.d()}}}Yr.autoAddCss=!1;function Br(t,n,e){let a,{icon:r}=n,{class:o=""}=n,{fixedWidth:i=!1}=n;return t.$$set=s=>{"icon"in s&&e(1,r=s.icon),"class"in s&&e(2,o=s.class),"fixedWidth"in s&&e(3,i=s.fixedWidth)},t.$$.update=()=>{var s,f;t.$$.dirty&2&&Vr.add(r),t.$$.dirty&14&&e(0,a=(f=(s=Ur({prefix:"fas",iconName:r.iconName},{classes:Z(o,i?"fa-fw":void 0)}))==null?void 0:s.html)!=null?f:"")},[a,r,o,i]}class Qr extends Wt{constructor(n){super(),Bt(this,n,Br,Wr,Gt,{icon:1,class:2,fixedWidth:3})}}var Zr={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},ti={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},Gr={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"]},ni=Gr,ei={prefix:"fas",iconName:"chalkboard",icon:[576,512,["blackboard"],"f51b","M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z"]},Xr={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},ai=Xr,ri={prefix:"fas",iconName:"plane-departure",icon:[640,512,[128747],"f5b0","M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"]},ii={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},oi={prefix:"fas",iconName:"crosshairs",icon:[512,512,[],"f05b","M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},si={prefix:"fas",iconName:"arrows-turn-to-dots",icon:[512,512,[],"e4c1","M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96 416 96c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7-14.3-32-32-32l-146.7 0 25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3l80-80zm13.3 256l80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 416 96 416c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448c0-53 43-96 96-96l146.7 0-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0zM512 384c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM64 64c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64S28.7 64 64 64z"]},fi={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};export{de as B,Qr as F,Jr as H,ti as a,ii as b,ai as c,oi as d,fi as e,Zr as f,si as g,ei as h,ni as i,na as j,ri as k,ta as l};
