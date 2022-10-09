import{S as ue,i as me,s as de,E as fr,k as b,l as h,m as y,h as g,n as $,b as nt,K as lr,F as cr,G as ur,H as mr,f as Y,t as H,L as dr,M as Hr,e as La,N as Br,A as Ma,o as Ur,v as W,a as O,q as _,w as G,c as C,r as E,I as l,x as X,y as q,J as Wr}from"../../chunks/index-a46f3da4.js";import{d as Gr,w as Xr}from"../../chunks/index-afeb62af.js";function qr(t){let e,n,a,r;const o=t[1].default,i=fr(o,t,t[0],null);return{c(){e=b("button"),i&&i.c(),this.h()},l(s){e=h(s,"BUTTON",{type:!0,class:!0});var f=y(e);i&&i.l(f),f.forEach(g),this.h()},h(){$(e,"type","button"),$(e,"class","cursor-pointer rounded-lg bg-black px-6 py-3 text-lg text-green-600 ring-2 ring-inset ring-green-600 hover:bg-green-900/40")},m(s,f){nt(s,e,f),i&&i.m(e,null),n=!0,a||(r=lr(e,"click",t[2]),a=!0)},p(s,[f]){i&&i.p&&(!n||f&1)&&cr(i,o,s,s[0],n?mr(o,s[0],f,null):ur(s[0]),null)},i(s){n||(Y(i,s),n=!0)},o(s){H(i,s),n=!1},d(s){s&&g(e),i&&i.d(s),a=!1,r()}}}function Kr(t,e,n){let{$$slots:a={},$$scope:r}=e;function o(i){dr.call(this,t,i)}return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,a,o]}class Da extends ue{constructor(e){super(),me(this,e,Kr,qr,de,{})}}function Ra(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ra(Object(n),!0).forEach(function(a){V(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ra(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function De(t){return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(t)}function Jr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function za(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Qr(t,e,n){return e&&za(t.prototype,e),n&&za(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function na(t,e){return ti(t)||ni(t,e)||vr(t,e)||ri()}function ve(t){return Zr(t)||ei(t)||vr(t)||ai()}function Zr(t){if(Array.isArray(t))return Bn(t)}function ti(t){if(Array.isArray(t))return t}function ei(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ni(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!(e&&a.length===e));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function vr(t,e){if(!!t){if(typeof t=="string")return Bn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bn(t,e)}}function Bn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ai(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ri(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fa=function(){},aa={},gr={},pr=null,br={mark:Fa,measure:Fa};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(gr=document),typeof MutationObserver<"u"&&(pr=MutationObserver),typeof performance<"u"&&(br=performance)}catch{}var ii=aa.navigator||{},Va=ii.userAgent,ja=Va===void 0?"":Va,yt=aa,T=gr,Ya=pr,Ee=br;yt.document;var lt=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",hr=~ja.indexOf("MSIE")||~ja.indexOf("Trident/"),$e,Ie,Se,Oe,Ce,ot="___FONT_AWESOME___",Un=16,yr="fa",xr="svg-inline--fa",Ct="data-fa-i2svg",Wn="data-fa-pseudo-element",oi="data-fa-pseudo-element-pending",ra="data-prefix",ia="data-icon",Ha="fontawesome-i2svg",si="async",fi=["HTML","HEAD","STYLE","SCRIPT"],wr=function(){try{return!0}catch{return!1}}(),P="classic",R="sharp",oa=[P,R];function ge(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[P]}})}var oe=ge(($e={},V($e,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),V($e,R,{fa:"solid",fass:"solid","fa-solid":"solid"}),$e)),se=ge((Ie={},V(Ie,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V(Ie,R,{solid:"fass"}),Ie)),fe=ge((Se={},V(Se,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V(Se,R,{fass:"fa-solid"}),Se)),li=ge((Oe={},V(Oe,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V(Oe,R,{"fa-solid":"fass"}),Oe)),ci=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,kr="fa-layers-text",ui=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mi=ge((Ce={},V(Ce,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V(Ce,R,{900:"fass"}),Ce)),Ar=[1,2,3,4,5,6,7,8,9,10],di=Ar.concat([11,12,13,14,15,16,17,18,19,20]),vi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],St={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},le=new Set;Object.keys(se[P]).map(le.add.bind(le));Object.keys(se[R]).map(le.add.bind(le));var gi=[].concat(oa,ve(le),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",St.GROUP,St.SWAP_OPACITY,St.PRIMARY,St.SECONDARY]).concat(Ar.map(function(t){return"".concat(t,"x")})).concat(di.map(function(t){return"w-".concat(t)})),re=yt.FontAwesomeConfig||{};function pi(t){var e=T.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bi(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(T&&typeof T.querySelector=="function"){var hi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hi.forEach(function(t){var e=na(t,2),n=e[0],a=e[1],r=bi(pi(n));r!=null&&(re[a]=r)})}var _r={styleDefault:"solid",familyDefault:"classic",cssPrefix:yr,replacementClass:xr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Bt=d(d({},_r),re);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var v={};Object.keys(_r).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){Bt[t]=n,ie.forEach(function(a){return a(v)})},get:function(){return Bt[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){Bt.cssPrefix=e,ie.forEach(function(n){return n(v)})},get:function(){return Bt.cssPrefix}});yt.FontAwesomeConfig=v;var ie=[];function yi(t){return ie.push(t),function(){ie.splice(ie.indexOf(t),1)}}var bt=Un,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xi(t){if(!(!t||!lt)){var e=T.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=T.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return T.head.insertBefore(e,a),t}}var wi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){for(var t=12,e="";t-- >0;)e+=wi[Math.random()*62|0];return e}function Ut(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sa(t){return t.classList?Ut(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Er(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ki(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Er(t[n]),'" ')},"").trim()}function Fe(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function fa(t){return t.size!==rt.size||t.x!==rt.x||t.y!==rt.y||t.rotate!==rt.rotate||t.flipX||t.flipY}function Ai(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function _i(t){var e=t.transform,n=t.width,a=n===void 0?Un:n,r=t.height,o=r===void 0?Un:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&hr?f+="translate(".concat(e.x/bt-a/2,"em, ").concat(e.y/bt-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/bt,"em), calc(-50% + ").concat(e.y/bt,"em)) "):f+="translate(".concat(e.x/bt,"em, ").concat(e.y/bt,"em) "),f+="scale(".concat(e.size/bt*(e.flipX?-1:1),", ").concat(e.size/bt*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ei=`:root, :host {
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
}`;function $r(){var t=yr,e=xr,n=v.cssPrefix,a=v.replacementClass,r=Ei;if(n!==t||a!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ba=!1;function zn(){v.autoAddCss&&!Ba&&(xi($r()),Ba=!0)}var $i={mixout:function(){return{dom:{css:$r,insertCss:zn}}},hooks:function(){return{beforeDOMElementCreation:function(){zn()},beforeI2svg:function(){zn()}}}},st=yt||{};st[ot]||(st[ot]={});st[ot].styles||(st[ot].styles={});st[ot].hooks||(st[ot].hooks={});st[ot].shims||(st[ot].shims=[]);var et=st[ot],Ir=[],Ii=function t(){T.removeEventListener("DOMContentLoaded",t),Re=1,Ir.map(function(e){return e()})},Re=!1;lt&&(Re=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Re||T.addEventListener("DOMContentLoaded",Ii));function Si(t){!lt||(Re?setTimeout(t,0):Ir.push(t))}function pe(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Er(t):"<".concat(e," ").concat(ki(a),">").concat(o.map(pe).join(""),"</").concat(e,">")}function Ua(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Oi=function(e,n){return function(a,r,o,i){return e.call(n,a,r,o,i)}},Fn=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=r!==void 0?Oi(n,r):n,f,u,c;for(a===void 0?(f=1,c=e[o[0]]):(f=0,c=a);f<i;f++)u=o[f],c=s(c,e[u],u,e);return c};function Ci(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Gn(t){var e=Ci(t);return e.length===1?e[0].toString(16):null}function Ni(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Wa(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Xn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=Wa(e);typeof et.hooks.addPack=="function"&&!r?et.hooks.addPack(t,Wa(e)):et.styles[t]=d(d({},et.styles[t]||{}),o),t==="fas"&&Xn("fa",e)}var Ne,Pe,Te,jt=et.styles,Pi=et.shims,Ti=(Ne={},V(Ne,P,Object.values(fe[P])),V(Ne,R,Object.values(fe[R])),Ne),la=null,Sr={},Or={},Cr={},Nr={},Pr={},Li=(Pe={},V(Pe,P,Object.keys(oe[P])),V(Pe,R,Object.keys(oe[R])),Pe);function Mi(t){return~gi.indexOf(t)}function Di(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Mi(r)?r:null}var Tr=function(){var e=function(o){return Fn(jt,function(i,s,f){return i[f]=Fn(s,o,{}),i},{})};Sr=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Or=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Pr=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var n="far"in jt||v.autoFetchSvg,a=Fn(Pi,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Cr=a.names,Nr=a.unicodes,la=Ve(v.styleDefault,{family:v.familyDefault})};yi(function(t){la=Ve(t.styleDefault,{family:v.familyDefault})});Tr();function ca(t,e){return(Sr[t]||{})[e]}function Ri(t,e){return(Or[t]||{})[e]}function Ot(t,e){return(Pr[t]||{})[e]}function Lr(t){return Cr[t]||{prefix:null,iconName:null}}function zi(t){var e=Nr[t],n=ca("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xt(){return la}var ua=function(){return{prefix:null,iconName:null,rest:[]}};function Ve(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?P:n,r=oe[a][t],o=se[a][t]||se[a][r],i=t in et.styles?t:null;return o||i||null}var Ga=(Te={},V(Te,P,Object.keys(fe[P])),V(Te,R,Object.keys(fe[R])),Te);function je(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(e={},V(e,P,"".concat(v.cssPrefix,"-").concat(P)),V(e,R,"".concat(v.cssPrefix,"-").concat(R)),e),i=null,s=P;(t.includes(o[P])||t.some(function(u){return Ga[P].includes(u)}))&&(s=P),(t.includes(o[R])||t.some(function(u){return Ga[R].includes(u)}))&&(s=R);var f=t.reduce(function(u,c){var m=Di(v.cssPrefix,c);if(jt[c]?(c=Ti[s].includes(c)?li[s][c]:c,i=c,u.prefix=c):Li[s].indexOf(c)>-1?(i=c,u.prefix=Ve(c,{family:s})):m?u.iconName=m:c!==v.replacementClass&&c!==o[P]&&c!==o[R]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var x=i==="fa"?Lr(u.iconName):{},w=Ot(u.prefix,u.iconName);x.prefix&&(i=null),u.iconName=x.iconName||w||u.iconName,u.prefix=x.prefix||u.prefix,u.prefix==="far"&&!jt.far&&jt.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},ua());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===R&&(jt.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=Ot(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=xt()||"fas"),f}var Fi=function(){function t(){Jr(this,t),this.definitions={}}return Qr(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),i[s]),Xn(s,i[s]);var f=fe[P][s];f&&Xn(f,i[s]),Tr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][f]=u}),n}}]),t}(),Xa=[],Yt={},Ht={},Vi=Object.keys(Ht);function ji(t,e){var n=e.mixoutsTo;return Xa=t,Yt={},Object.keys(Ht).forEach(function(a){Vi.indexOf(a)===-1&&delete Ht[a]}),Xa.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),De(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){Yt[i]||(Yt[i]=[]),Yt[i].push(o[i])})}a.provides&&a.provides(Ht)}),n}function qn(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=Yt[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function Nt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Yt[t]||[];r.forEach(function(o){o.apply(null,n)})}function ft(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ht[t]?Ht[t].apply(null,e):void 0}function Kn(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||xt();if(!!e)return e=Ot(n,e)||e,Ua(Mr.definitions,n,e)||Ua(et.styles,n,e)}var Mr=new Fi,Yi=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Nt("noAuto")},Hi={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return lt?(Nt("beforeI2svg",e),ft("pseudoElements2svg",e),ft("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Si(function(){Ui({autoReplaceSvgRoot:n}),Nt("watch",e)})}},Bi={icon:function(e){if(e===null)return null;if(De(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ot(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Ve(e[0]);return{prefix:a,iconName:Ot(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(ci))){var r=je(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||xt(),iconName:Ot(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=xt();return{prefix:o,iconName:Ot(o,e)||e}}}},K={noAuto:Yi,config:v,dom:Hi,parse:Bi,library:Mr,findIconDefinition:Kn,toHtml:pe},Ui=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?T:n;(Object.keys(et.styles).length>0||v.autoFetchSvg)&&lt&&v.autoReplaceSvg&&K.dom.i2svg({node:a})};function Ye(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return pe(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!lt){var a=T.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Wi(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(fa(i)&&n.found&&!a.found){var s=n.width,f=n.height,u={x:s/f/2,y:.5};r.style=Fe(d(d({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Gi(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:i}),children:a}]}]}function ma(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,u=t.maskId,c=t.titleId,m=t.extra,x=t.watchable,w=x===void 0?!1:x,I=a.found?a:n,z=I.width,N=I.height,A=r==="fak",p=[v.replacementClass,o?"".concat(v.cssPrefix,"-").concat(o):""].filter(function(J){return m.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(m.classes).join(" "),S={children:[],attributes:d(d({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(N)})},M=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/N*16*.0625,"em")}:{};w&&(S.attributes[Ct]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(c||ce())},children:[f]}),delete S.attributes.title);var D=d(d({},S),{},{prefix:r,iconName:o,main:n,mask:a,maskId:u,transform:i,symbol:s,styles:d(d({},M),m.styles)}),B=a.found&&n.found?ft("generateAbstractMask",D)||{children:[],attributes:{}}:ft("generateAbstractIcon",D)||{children:[],attributes:{}},L=B.children,tt=B.attributes;return D.children=L,D.attributes=tt,s?Gi(D):Wi(D)}function qa(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,u=d(d(d({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[Ct]="");var c=d({},i.styles);fa(r)&&(c.transform=_i({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Fe(c);m.length>0&&(u.style=m);var x=[];return x.push({tag:"span",attributes:u,children:[e]}),o&&x.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),x}function Xi(t){var e=t.content,n=t.title,a=t.extra,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Fe(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Vn=et.styles;function Jn(t){var e=t[0],n=t[1],a=t.slice(4),r=na(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(St.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(St.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(St.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var qi={found:!1,width:512,height:512};function Ki(t,e){!wr&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qn(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=xt()),new Promise(function(a,r){if(ft("missingIconAbstract"),n==="fa"){var o=Lr(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Vn[e]&&Vn[e][t]){var i=Vn[e][t];return a(Jn(i))}Ki(t,e),a(d(d({},qi),{},{icon:v.showMissingIcons&&t?ft("missingIconAbstract")||{}:{}}))})}var Ka=function(){},Zn=v.measurePerformance&&Ee&&Ee.mark&&Ee.measure?Ee:{mark:Ka,measure:Ka},ae='FA "6.2.0"',Ji=function(e){return Zn.mark("".concat(ae," ").concat(e," begins")),function(){return Dr(e)}},Dr=function(e){Zn.mark("".concat(ae," ").concat(e," ends")),Zn.measure("".concat(ae," ").concat(e),"".concat(ae," ").concat(e," begins"),"".concat(ae," ").concat(e," ends"))},da={begin:Ji,end:Dr},Le=function(){};function Ja(t){var e=t.getAttribute?t.getAttribute(Ct):null;return typeof e=="string"}function Qi(t){var e=t.getAttribute?t.getAttribute(ra):null,n=t.getAttribute?t.getAttribute(ia):null;return e&&n}function Zi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function to(){if(v.autoReplaceSvg===!0)return Me.replace;var t=Me[v.autoReplaceSvg];return t||Me.replace}function eo(t){return T.createElementNS("http://www.w3.org/2000/svg",t)}function no(t){return T.createElement(t)}function Rr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?eo:no:n;if(typeof t=="string")return T.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Rr(i,{ceFn:a}))}),r}function ao(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Me={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Rr(r),n)}),n.getAttribute(Ct)===null&&v.keepOriginalSource){var a=T.createComment(ao(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~sa(n).indexOf(v.replacementClass))return Me.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return pe(s)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=i}};function Qa(t){t()}function zr(t,e){var n=typeof e=="function"?e:Le;if(t.length===0)n();else{var a=Qa;v.mutateApproach===si&&(a=yt.requestAnimationFrame||Qa),a(function(){var r=to(),o=da.begin("mutate");t.map(r),o(),n()})}}var va=!1;function Fr(){va=!0}function ta(){va=!1}var ze=null;function Za(t){if(!!Ya&&!!v.observeMutations){var e=t.treeCallback,n=e===void 0?Le:e,a=t.nodeCallback,r=a===void 0?Le:a,o=t.pseudoElementsCallback,i=o===void 0?Le:o,s=t.observeMutationsRoot,f=s===void 0?T:s;ze=new Ya(function(u){if(!va){var c=xt();Ut(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ja(m.addedNodes[0])&&(v.searchPseudoElements&&i(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&Ja(m.target)&&~vi.indexOf(m.attributeName))if(m.attributeName==="class"&&Qi(m.target)){var x=je(sa(m.target)),w=x.prefix,I=x.iconName;m.target.setAttribute(ra,w||c),I&&m.target.setAttribute(ia,I)}else Zi(m.target)&&r(m.target)})}}),lt&&ze.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ro(){!ze||ze.disconnect()}function io(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function oo(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=je(sa(t));return r.prefix||(r.prefix=xt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ri(r.prefix,t.innerText)||ca(r.prefix,Gn(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function so(t){var e=Ut(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||ce()):(e["aria-hidden"]="true",e.focusable="false")),e}function fo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function tr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=oo(t),a=n.iconName,r=n.prefix,o=n.rest,i=so(t),s=qn("parseNodeAttributes",{},t),f=e.styleParser?io(t):[];return d({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var lo=et.styles;function Vr(t){var e=v.autoReplaceSvg==="nest"?tr(t,{styleParser:!1}):tr(t);return~e.extra.classes.indexOf(kr)?ft("generateLayersText",t,e):ft("generateSvgReplacementMutation",t,e)}var wt=new Set;oa.map(function(t){wt.add("fa-".concat(t))});Object.keys(oe[P]).map(wt.add.bind(wt));Object.keys(oe[R]).map(wt.add.bind(wt));wt=ve(wt);function er(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!lt)return Promise.resolve();var n=T.documentElement.classList,a=function(m){return n.add("".concat(Ha,"-").concat(m))},r=function(m){return n.remove("".concat(Ha,"-").concat(m))},o=v.autoFetchSvg?wt:oa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(lo));o.includes("fa")||o.push("fa");var i=[".".concat(kr,":not([").concat(Ct,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Ct,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Ut(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=da.begin("onTree"),u=s.reduce(function(c,m){try{var x=Vr(m);x&&c.push(x)}catch(w){wr||w.name==="MissingIcon"&&console.error(w)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(x){zr(x,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(x){f(),m(x)})})}function co(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vr(t).then(function(n){n&&zr([n],e)})}function uo(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Kn(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Kn(r||{})),t(a,d(d({},n),{},{mask:r}))}}var mo=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?rt:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,f=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,m=n.title,x=m===void 0?null:m,w=n.titleId,I=w===void 0?null:w,z=n.classes,N=z===void 0?[]:z,A=n.attributes,p=A===void 0?{}:A,S=n.styles,M=S===void 0?{}:S;if(!!e){var D=e.prefix,B=e.iconName,L=e.icon;return Ye(d({type:"icon"},e),function(){return Nt("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(x?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(I||ce()):(p["aria-hidden"]="true",p.focusable="false")),ma({icons:{main:Jn(L),mask:f?Jn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:B,transform:d(d({},rt),r),symbol:i,title:x,maskId:c,titleId:I,extra:{attributes:p,styles:M,classes:N}})})}},vo={mixout:function(){return{icon:uo(mo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=er,n.nodeCallback=co,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?T:a,o=n.callback,i=o===void 0?function(){}:o;return er(r,i)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,c=a.mask,m=a.maskId,x=a.extra;return new Promise(function(w,I){Promise.all([Qn(r,s),c.iconName?Qn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var N=na(z,2),A=N[0],p=N[1];w([n,ma({icons:{main:A,mask:p},prefix:s,iconName:r,transform:f,symbol:u,maskId:m,title:o,titleId:i,extra:x,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,f=Fe(s);f.length>0&&(r.style=f);var u;return fa(i)&&(u=ft("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},go={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Ye({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ve(o)).join(" ")},children:i}]})}}}},po={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,u=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return Ye({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:a}),Xi({content:n.toString(),title:o,extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ve(s))}})})}}}},bo={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?rt:r,i=a.title,s=i===void 0?null:i,f=a.classes,u=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,x=a.styles,w=x===void 0?{}:x;return Ye({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:a}),qa({content:n,transform:d(d({},rt),o),title:s,extra:{attributes:m,styles:w,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ve(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(hr){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,f=c.height/u}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,qa({content:n.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},ho=new RegExp('"',"ug"),nr=[1105920,1112319];function yo(t){var e=t.replace(ho,""),n=Ni(e,0),a=n>=nr[0]&&n<=nr[1],r=e.length===2?e[0]===e[1]:!1;return{value:Gn(r?e[0]:e),isSecondary:a||r}}function ar(t,e){var n="".concat(oi).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var o=Ut(t.children),i=o.filter(function(L){return L.getAttribute(Wn)===e})[0],s=yt.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(ui),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),x=~["Sharp"].indexOf(f[2])?R:P,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?se[x][f[2].toLowerCase()]:mi[x][u],I=yo(m),z=I.value,N=I.isSecondary,A=f[0].startsWith("FontAwesome"),p=ca(w,z),S=p;if(A){var M=zi(z);M.iconName&&M.prefix&&(p=M.iconName,w=M.prefix)}if(p&&!N&&(!i||i.getAttribute(ra)!==w||i.getAttribute(ia)!==S)){t.setAttribute(n,S),i&&t.removeChild(i);var D=fo(),B=D.extra;B.attributes[Wn]=e,Qn(p,w).then(function(L){var tt=ma(d(d({},D),{},{icons:{main:L,mask:ua()},prefix:w,iconName:S,extra:B,watchable:!0})),J=T.createElement("svg");e==="::before"?t.insertBefore(J,t.firstChild):t.appendChild(J),J.outerHTML=tt.map(function(ct){return pe(ct)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function xo(t){return Promise.all([ar(t,"::before"),ar(t,"::after")])}function wo(t){return t.parentNode!==document.head&&!~fi.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function rr(t){if(!!lt)return new Promise(function(e,n){var a=Ut(t.querySelectorAll("*")).filter(wo).map(xo),r=da.begin("searchPseudoElements");Fr(),Promise.all(a).then(function(){r(),ta(),e()}).catch(function(){r(),ta(),n()})})}var ko={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rr,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?T:a;v.searchPseudoElements&&rr(r)}}},ir=!1,Ao={mixout:function(){return{dom:{unwatch:function(){Fr(),ir=!0}}}},hooks:function(){return{bootstrap:function(){Za(qn("mutationObserverCallbacks",{}))},noAuto:function(){ro()},watch:function(n){var a=n.observeMutationsRoot;ir?ta():Za(qn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},or=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},_o={mixout:function(){return{parse:{transform:function(n){return or(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=or(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(u," ").concat(c)},x={transform:"translate(".concat(i/2*-1," -256)")},w={outer:s,inner:m,path:x};return{tag:"g",attributes:d({},w.outer),children:[{tag:"g",attributes:d({},w.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:d(d({},a.icon.attributes),w.path)}]}]}}}},jn={x:0,y:0,width:"100%",height:"100%"};function sr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Eo(t){return t.tag==="g"?t.children:[t]}var $o={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?je(r.split(" ").map(function(i){return i.trim()})):ua();return o.prefix||(o.prefix=xt()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,f=n.transform,u=o.width,c=o.icon,m=i.width,x=i.icon,w=Ai({transform:f,containerWidth:m,iconWidth:u}),I={tag:"rect",attributes:d(d({},jn),{},{fill:"white"})},z=c.children?{children:c.children.map(sr)}:{},N={tag:"g",attributes:d({},w.inner),children:[sr(d({tag:c.tag,attributes:d(d({},c.attributes),w.path)},z))]},A={tag:"g",attributes:d({},w.outer),children:[N]},p="mask-".concat(s||ce()),S="clip-".concat(s||ce()),M={tag:"mask",attributes:d(d({},jn),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,A]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Eo(x)},M]};return a.push(D,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(p,")")},jn)}),{children:a,attributes:r}}}},Io={provides:function(e){var n=!1;yt.matchMedia&&(n=yt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=d(d({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},So={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Oo=[$i,vo,go,po,bo,ko,Ao,_o,$o,Io,So];ji(Oo,{mixoutsTo:K});K.noAuto;var Co=K.config,No=K.library;K.dom;K.parse;K.findIconDefinition;K.toHtml;var Po=K.icon;K.layer;K.text;K.counter;function jr(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=jr(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function ea(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=jr(t))&&(a&&(a+=" "),a+=e);return a}function To(t){let e,n;return{c(){e=new Hr(!1),n=La(),this.h()},l(a){e=Br(a,!1),n=La(),this.h()},h(){e.a=n},m(a,r){e.m(t[0],a,r),nt(a,n,r)},p(a,[r]){r&1&&e.p(a[0])},i:Ma,o:Ma,d(a){a&&g(n),a&&e.d()}}}Co.autoAddCss=!1;function Lo(t,e,n){let a,{icon:r}=e,{class:o=""}=e,{fixedWidth:i=!1}=e;return t.$$set=s=>{"icon"in s&&n(1,r=s.icon),"class"in s&&n(2,o=s.class),"fixedWidth"in s&&n(3,i=s.fixedWidth)},t.$$.update=()=>{var s,f;t.$$.dirty&2&&No.add(r),t.$$.dirty&14&&n(0,a=(f=(s=Po({prefix:"fas",iconName:r.iconName},{classes:ea(o,i?"fa-fw":void 0)}))==null?void 0:s.html)!=null?f:"")},[a,r,o,i]}class ht extends ue{constructor(e){super(),me(this,e,Lo,To,de,{icon:1,class:2,fixedWidth:3})}}var Yn={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Mo={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},Yr={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"]},Do={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},Ro=Do,zo={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};const Fo=()=>{const t=Xr(0);return Ur(()=>{t.set(document.documentElement.scrollTop),document.addEventListener("scroll",()=>{t.set(document.documentElement.scrollTop)},!1)}),Gr([t],([e])=>e>50,!1)};function Vo(t){let e,n,a,r;const o=t[1].default,i=fr(o,t,t[0],null);return{c(){e=b("button"),i&&i.c(),this.h()},l(s){e=h(s,"BUTTON",{type:!0,class:!0});var f=y(e);i&&i.l(f),f.forEach(g),this.h()},h(){$(e,"type","button"),$(e,"class","cursor-pointer text-lg text-green-600 underline-offset-4 hover:text-green-500 hover:underline")},m(s,f){nt(s,e,f),i&&i.m(e,null),n=!0,a||(r=lr(e,"click",t[2]),a=!0)},p(s,[f]){i&&i.p&&(!n||f&1)&&cr(i,o,s,s[0],n?mr(o,s[0],f,null):ur(s[0]),null)},i(s){n||(Y(i,s),n=!0)},o(s){H(i,s),n=!1},d(s){s&&g(e),i&&i.d(s),a=!1,r()}}}function jo(t,e,n){let{$$slots:a={},$$scope:r}=e;function o(i){dr.call(this,t,i)}return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,a,o]}class Hn extends ue{constructor(e){super(),me(this,e,jo,Vo,de,{})}}function Yo(t){let e;return{c(){e=_("Learn More")},l(n){e=E(n,"Learn More")},m(n,a){nt(n,e,a)},d(n){n&&g(e)}}}function Ho(t){let e;return{c(){e=_("Box VS")},l(n){e=E(n,"Box VS")},m(n,a){nt(n,e,a)},d(n){n&&g(e)}}}function Bo(t){let e;return{c(){e=_("Install")},l(n){e=E(n,"Install")},m(n,a){nt(n,e,a)},d(n){n&&g(e)}}}function Uo(t){let e,n,a,r,o,i,s,f,u,c,m,x,w,I,z,N;return r=new ht({props:{icon:Yr}}),u=new Hn({props:{$$slots:{default:[Yo]},$$scope:{ctx:t}}}),m=new Hn({props:{$$slots:{default:[Ho]},$$scope:{ctx:t}}}),I=new Hn({props:{$$slots:{default:[Bo]},$$scope:{ctx:t}}}),{c(){e=b("nav"),n=b("div"),a=b("div"),W(r.$$.fragment),o=O(),i=b("div"),s=_("On the Box"),f=O(),W(u.$$.fragment),c=O(),W(m.$$.fragment),x=O(),w=b("div"),W(I.$$.fragment),this.h()},l(A){e=h(A,"NAV",{class:!0});var p=y(e);n=h(p,"DIV",{class:!0});var S=y(n);a=h(S,"DIV",{class:!0});var M=y(a);G(r.$$.fragment,M),M.forEach(g),o=C(S),i=h(S,"DIV",{class:!0});var D=y(i);s=E(D,"On the Box"),D.forEach(g),S.forEach(g),f=C(p),G(u.$$.fragment,p),c=C(p),G(m.$$.fragment,p),x=C(p),w=h(p,"DIV",{class:!0});var B=y(w);G(I.$$.fragment,B),B.forEach(g),p.forEach(g),this.h()},h(){$(a,"class","text-4xl"),$(i,"class","hidden text-2xl font-bold tracking-tighter md:block"),$(n,"class","mr-auto flex cursor-pointer items-center gap-3 hover:text-green-500"),$(w,"class","font-black"),$(e,"class",z=ea("sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7",t[0]?"bg-green-900/20":"bg-black"))},m(A,p){nt(A,e,p),l(e,n),l(n,a),X(r,a,null),l(n,o),l(n,i),l(i,s),l(e,f),X(u,e,null),l(e,c),X(m,e,null),l(e,x),l(e,w),X(I,w,null),N=!0},p(A,[p]){const S={};p&4&&(S.$$scope={dirty:p,ctx:A}),u.$set(S);const M={};p&4&&(M.$$scope={dirty:p,ctx:A}),m.$set(M);const D={};p&4&&(D.$$scope={dirty:p,ctx:A}),I.$set(D),(!N||p&1&&z!==(z=ea("sticky top-0 z-10 flex h-16 w-full items-center justify-end gap-5 px-4 text-green-600 backdrop-blur-lg transition-colors duration-500 md:gap-8 md:px-7",A[0]?"bg-green-900/20":"bg-black")))&&$(e,"class",z)},i(A){N||(Y(r.$$.fragment,A),Y(u.$$.fragment,A),Y(m.$$.fragment,A),Y(I.$$.fragment,A),N=!0)},o(A){H(r.$$.fragment,A),H(u.$$.fragment,A),H(m.$$.fragment,A),H(I.$$.fragment,A),N=!1},d(A){A&&g(e),q(r),q(u),q(m),q(I)}}}function Wo(t,e,n){let a;const r=Fo();return Wr(t,r,o=>n(0,a=o)),[a,r]}class Go extends ue{constructor(e){super(),me(this,e,Wo,Uo,de,{})}}function Xo(t){let e;return{c(){e=_("Install Now")},l(n){e=E(n,"Install Now")},m(n,a){nt(n,e,a)},d(n){n&&g(e)}}}function qo(t){let e;return{c(){e=_("See More")},l(n){e=E(n,"See More")},m(n,a){nt(n,e,a)},d(n){n&&g(e)}}}function Ko(t){let e,n,a,r,o,i,s,f,u,c,m,x,w,I,z,N,A,p,S,M,D,B,L,tt,J,ct,He,Wt,Be,Ue,kt,We,Pt,Gt,Ge,Xe,qe,At,Ke,Tt,Xt,Je,Qe,Ze,ut,Lt,tn,en,j,_t,nn,qt,an,rn,Et,on,Kt,sn,fn,$t,ln,Jt,cn,un,Mt,mt,mn,Dt,U,It,Rt,dn,vn,zt,gn,pn,dt,bn,Qt,hn,yn,xn,vt,wn,Zt,kn,An,_n,gt,En,te,$n,In,Sn,pt,On,ee,Cn,Nn,Pn,Ft,Tn,be;return e=new Go({}),i=new ht({props:{icon:Yr}}),N=new Da({props:{$$slots:{default:[Xo]},$$scope:{ctx:t}}}),tt=new ht({props:{icon:Yn,fixedWidth:!0}}),kt=new ht({props:{icon:Yn,fixedWidth:!0}}),At=new ht({props:{icon:Yn,fixedWidth:!0}}),_t=new ht({props:{icon:Mo,fixedWidth:!0}}),Et=new ht({props:{icon:zo,fixedWidth:!0}}),$t=new ht({props:{icon:Ro,fixedWidth:!0}}),mt=new Da({props:{$$slots:{default:[qo]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment),n=O(),a=b("main"),r=b("div"),o=b("div"),W(i.$$.fragment),s=O(),f=b("div"),u=_("Want to be on top? Get"),c=O(),m=b("div"),x=_("On the Box"),w=O(),I=b("div"),z=_(`Change the game
        `),W(N.$$.fragment),A=O(),p=b("div"),S=b("div"),M=b("div"),D=_("What can The Box do for you?"),B=O(),L=b("div"),W(tt.$$.fragment),J=O(),ct=b("div"),He=_("Perform your "),Wt=b("i"),Be=_("best"),Ue=O(),W(kt.$$.fragment),We=O(),Pt=b("div"),Gt=b("i"),Ge=_("Impress"),Xe=_(" your peers"),qe=O(),W(At.$$.fragment),Ke=O(),Tt=b("div"),Xt=b("i"),Je=_("Eliminate"),Qe=_(" the competition"),Ze=O(),ut=b("div"),Lt=b("div"),tn=_("The Box is unbeatable"),en=O(),j=b("div"),W(_t.$$.fragment),nn=O(),qt=b("div"),an=_("Lower RAM usage than LmaoBox"),rn=O(),W(Et.$$.fragment),on=O(),Kt=b("div"),sn=_("Undetectable by RGL, UGC, ETF2L, etc."),fn=O(),W($t.$$.fragment),ln=O(),Jt=b("div"),cn=_("VAC Immune"),un=O(),Mt=b("div"),W(mt.$$.fragment),mn=O(),Dt=b("div"),U=b("div"),It=b("div"),Rt=b("div"),dn=_("Testimonials"),vn=O(),zt=b("div"),gn=_("Identities hidden for privacy purposes"),pn=O(),dt=b("div"),bn=_('"I was nervous heading to LAN, but with '),Qt=b("strong"),hn=_("On The Box"),yn=_(', I was able to perform better than ever." - **ile'),xn=O(),vt=b("div"),wn=_('"I was nervous heading to LAN, but with '),Zt=b("strong"),kn=_("On The Box"),An=_(', I was able to perform better than ever." - **ile'),_n=O(),gt=b("div"),En=_('"I was nervous heading to LAN, but with '),te=b("strong"),$n=_("On The Box"),In=_(', I was able to perform better than ever." - **ile'),Sn=O(),pt=b("div"),On=_('"I was nervous heading to LAN, but with '),ee=b("strong"),Cn=_("On The Box"),Nn=_(', I was able to perform better than ever." - **ile'),Pn=O(),Ft=b("div"),Tn=_(`This site is a work of satire that presents itself as fictional cheating
        software. No cheats are provided by On the Box.`),this.h()},l(k){G(e.$$.fragment,k),n=C(k),a=h(k,"MAIN",{class:!0});var F=y(a);r=h(F,"DIV",{class:!0});var it=y(r);o=h(it,"DIV",{class:!0});var ne=y(o);G(i.$$.fragment,ne),ne.forEach(g),s=C(it),f=h(it,"DIV",{class:!0});var ga=y(f);u=E(ga,"Want to be on top? Get"),ga.forEach(g),c=C(it),m=h(it,"DIV",{class:!0});var pa=y(m);x=E(pa,"On the Box"),pa.forEach(g),it.forEach(g),w=C(F),I=h(F,"DIV",{class:!0});var Ln=y(I);z=E(Ln,`Change the game
        `),G(N.$$.fragment,Ln),Ln.forEach(g),A=C(F),p=h(F,"DIV",{class:!0});var Vt=y(p);S=h(Vt,"DIV",{class:!0});var he=y(S);M=h(he,"DIV",{class:!0});var ba=y(M);D=E(ba,"What can The Box do for you?"),ba.forEach(g),B=C(he),L=h(he,"DIV",{class:!0});var Q=y(L);G(tt.$$.fragment,Q),J=C(Q),ct=h(Q,"DIV",{});var Mn=y(ct);He=E(Mn,"Perform your "),Wt=h(Mn,"I",{});var ha=y(Wt);Be=E(ha,"best"),ha.forEach(g),Mn.forEach(g),Ue=C(Q),G(kt.$$.fragment,Q),We=C(Q),Pt=h(Q,"DIV",{});var Dn=y(Pt);Gt=h(Dn,"I",{});var ya=y(Gt);Ge=E(ya,"Impress"),ya.forEach(g),Xe=E(Dn," your peers"),Dn.forEach(g),qe=C(Q),G(At.$$.fragment,Q),Ke=C(Q),Tt=h(Q,"DIV",{});var Rn=y(Tt);Xt=h(Rn,"I",{});var xa=y(Xt);Je=E(xa,"Eliminate"),xa.forEach(g),Qe=E(Rn," the competition"),Rn.forEach(g),Q.forEach(g),he.forEach(g),Ze=C(Vt),ut=h(Vt,"DIV",{class:!0});var ye=y(ut);Lt=h(ye,"DIV",{class:!0});var wa=y(Lt);tn=E(wa,"The Box is unbeatable"),wa.forEach(g),en=C(ye),j=h(ye,"DIV",{class:!0});var Z=y(j);G(_t.$$.fragment,Z),nn=C(Z),qt=h(Z,"DIV",{});var ka=y(qt);an=E(ka,"Lower RAM usage than LmaoBox"),ka.forEach(g),rn=C(Z),G(Et.$$.fragment,Z),on=C(Z),Kt=h(Z,"DIV",{});var Aa=y(Kt);sn=E(Aa,"Undetectable by RGL, UGC, ETF2L, etc."),Aa.forEach(g),fn=C(Z),G($t.$$.fragment,Z),ln=C(Z),Jt=h(Z,"DIV",{});var _a=y(Jt);cn=E(_a,"VAC Immune"),_a.forEach(g),Z.forEach(g),ye.forEach(g),un=C(Vt),Mt=h(Vt,"DIV",{class:!0});var Ea=y(Mt);G(mt.$$.fragment,Ea),Ea.forEach(g),Vt.forEach(g),mn=C(F),Dt=h(F,"DIV",{class:!0});var $a=y(Dt);U=h($a,"DIV",{class:!0});var at=y(U);It=h(at,"DIV",{});var xe=y(It);Rt=h(xe,"DIV",{class:!0});var Ia=y(Rt);dn=E(Ia,"Testimonials"),Ia.forEach(g),vn=C(xe),zt=h(xe,"DIV",{class:!0});var Sa=y(zt);gn=E(Sa,"Identities hidden for privacy purposes"),Sa.forEach(g),xe.forEach(g),pn=C(at),dt=h(at,"DIV",{class:!0});var we=y(dt);bn=E(we,'"I was nervous heading to LAN, but with '),Qt=h(we,"STRONG",{});var Oa=y(Qt);hn=E(Oa,"On The Box"),Oa.forEach(g),yn=E(we,', I was able to perform better than ever." - **ile'),we.forEach(g),xn=C(at),vt=h(at,"DIV",{class:!0});var ke=y(vt);wn=E(ke,'"I was nervous heading to LAN, but with '),Zt=h(ke,"STRONG",{});var Ca=y(Zt);kn=E(Ca,"On The Box"),Ca.forEach(g),An=E(ke,', I was able to perform better than ever." - **ile'),ke.forEach(g),_n=C(at),gt=h(at,"DIV",{class:!0});var Ae=y(gt);En=E(Ae,'"I was nervous heading to LAN, but with '),te=h(Ae,"STRONG",{});var Na=y(te);$n=E(Na,"On The Box"),Na.forEach(g),In=E(Ae,', I was able to perform better than ever." - **ile'),Ae.forEach(g),Sn=C(at),pt=h(at,"DIV",{class:!0});var _e=y(pt);On=E(_e,'"I was nervous heading to LAN, but with '),ee=h(_e,"STRONG",{});var Pa=y(ee);Cn=E(Pa,"On The Box"),Pa.forEach(g),Nn=E(_e,', I was able to perform better than ever." - **ile'),_e.forEach(g),at.forEach(g),$a.forEach(g),Pn=C(F),Ft=h(F,"DIV",{class:!0});var Ta=y(Ft);Tn=E(Ta,`This site is a work of satire that presents itself as fictional cheating
        software. No cheats are provided by On the Box.`),Ta.forEach(g),F.forEach(g),this.h()},h(){$(o,"class","text-7xl"),$(f,"class","text-lg"),$(m,"class","bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black"),$(r,"class","flex flex-col items-center"),$(I,"class","mx-auto -mt-6 flex w-72 flex-col items-center md:-mt-8"),$(M,"class","mb-2 text-2xl font-bold"),$(L,"class","grid grid-cols-[auto_1fr] items-center gap-2"),$(S,"class","text-xl"),$(Lt,"class","mb-2 text-2xl font-bold"),$(j,"class","grid grid-cols-[auto_1fr] items-center gap-2"),$(ut,"class","text-xl"),$(Mt,"class","col-span-2"),$(p,"class","grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center"),$(Rt,"class","text-2xl"),$(zt,"class","text-xs"),$(dt,"class","md:col-start-2"),$(vt,"class","md:col-start-2"),$(gt,"class","md:col-start-2"),$(pt,"class","md:col-start-2"),$(U,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),$(Dt,"class","-mx-8 bg-green-900/20 py-4 px-8"),$(Ft,"class","mt-auto max-w-lg text-xs"),$(a,"class","flex min-h-[100vh] w-[100vw] flex-col gap-20 bg-black px-8 pb-6 pt-12 text-green-600 md:gap-36")},m(k,F){X(e,k,F),nt(k,n,F),nt(k,a,F),l(a,r),l(r,o),X(i,o,null),l(r,s),l(r,f),l(f,u),l(r,c),l(r,m),l(m,x),l(a,w),l(a,I),l(I,z),X(N,I,null),l(a,A),l(a,p),l(p,S),l(S,M),l(M,D),l(S,B),l(S,L),X(tt,L,null),l(L,J),l(L,ct),l(ct,He),l(ct,Wt),l(Wt,Be),l(L,Ue),X(kt,L,null),l(L,We),l(L,Pt),l(Pt,Gt),l(Gt,Ge),l(Pt,Xe),l(L,qe),X(At,L,null),l(L,Ke),l(L,Tt),l(Tt,Xt),l(Xt,Je),l(Tt,Qe),l(p,Ze),l(p,ut),l(ut,Lt),l(Lt,tn),l(ut,en),l(ut,j),X(_t,j,null),l(j,nn),l(j,qt),l(qt,an),l(j,rn),X(Et,j,null),l(j,on),l(j,Kt),l(Kt,sn),l(j,fn),X($t,j,null),l(j,ln),l(j,Jt),l(Jt,cn),l(p,un),l(p,Mt),X(mt,Mt,null),l(a,mn),l(a,Dt),l(Dt,U),l(U,It),l(It,Rt),l(Rt,dn),l(It,vn),l(It,zt),l(zt,gn),l(U,pn),l(U,dt),l(dt,bn),l(dt,Qt),l(Qt,hn),l(dt,yn),l(U,xn),l(U,vt),l(vt,wn),l(vt,Zt),l(Zt,kn),l(vt,An),l(U,_n),l(U,gt),l(gt,En),l(gt,te),l(te,$n),l(gt,In),l(U,Sn),l(U,pt),l(pt,On),l(pt,ee),l(ee,Cn),l(pt,Nn),l(a,Pn),l(a,Ft),l(Ft,Tn),be=!0},p(k,[F]){const it={};F&1&&(it.$$scope={dirty:F,ctx:k}),N.$set(it);const ne={};F&1&&(ne.$$scope={dirty:F,ctx:k}),mt.$set(ne)},i(k){be||(Y(e.$$.fragment,k),Y(i.$$.fragment,k),Y(N.$$.fragment,k),Y(tt.$$.fragment,k),Y(kt.$$.fragment,k),Y(At.$$.fragment,k),Y(_t.$$.fragment,k),Y(Et.$$.fragment,k),Y($t.$$.fragment,k),Y(mt.$$.fragment,k),be=!0)},o(k){H(e.$$.fragment,k),H(i.$$.fragment,k),H(N.$$.fragment,k),H(tt.$$.fragment,k),H(kt.$$.fragment,k),H(At.$$.fragment,k),H(_t.$$.fragment,k),H(Et.$$.fragment,k),H($t.$$.fragment,k),H(mt.$$.fragment,k),be=!1},d(k){q(e,k),k&&g(n),k&&g(a),q(i),q(N),q(tt),q(kt),q(At),q(_t),q(Et),q($t),q(mt)}}}class Zo extends ue{constructor(e){super(),me(this,e,null,Ko,de,{})}}export{Zo as default};
