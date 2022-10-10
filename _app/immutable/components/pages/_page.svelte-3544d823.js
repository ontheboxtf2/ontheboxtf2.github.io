import{S as bo,i as yo,s as xo,K as Xo,e as Wi,L as qo,b as vt,A as Ui,h as c,v as F,a as x,k as d,q as k,w as H,c as w,l as v,m as g,r as _,n as E,M as Ko,x as j,I as o,t as D,d as Zo,f as L,y as Y,o as Qo,g as Jo}from"../../chunks/index-f05389bd.js";import{c as ts,H as es,B as Nn,l as ns,i as as}from"../../chunks/Header-1aabd597.js";function Gi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gi(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gi(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Pn(t){return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pn(t)}function rs(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bi(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function is(t,e,n){return e&&Bi(t.prototype,e),n&&Bi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jr(t,e){return ss(t)||fs(t,e)||wo(t,e)||us()}function sn(t){return os(t)||ls(t)||wo(t)||cs()}function os(t){if(Array.isArray(t))return Nr(t)}function ss(t){if(Array.isArray(t))return t}function ls(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fs(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,s,l;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,l=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function wo(t,e){if(!!t){if(typeof t=="string")return Nr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(t,e)}}function Nr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function cs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function us(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xi=function(){},Yr={},ko={},_o=null,Eo={mark:Xi,measure:Xi};try{typeof window<"u"&&(Yr=window),typeof document<"u"&&(ko=document),typeof MutationObserver<"u"&&(_o=MutationObserver),typeof performance<"u"&&(Eo=performance)}catch{}var ms=Yr.navigator||{},qi=ms.userAgent,Ki=qi===void 0?"":qi,Nt=Yr,O=ko,Zi=_o,xn=Eo;Nt.document;var bt=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Io=~Ki.indexOf("MSIE")||~Ki.indexOf("Trident/"),wn,kn,_n,En,In,gt="___FONT_AWESOME___",Pr=16,Ao="fa",$o="svg-inline--fa",ee="data-fa-i2svg",Tr="data-fa-pseudo-element",ds="data-fa-pseudo-element-pending",Wr="data-prefix",Ur="data-icon",Qi="fontawesome-i2svg",vs="async",gs=["HTML","HEAD","STYLE","SCRIPT"],Co=function(){try{return!0}catch{return!1}}(),S="classic",R="sharp",Gr=[S,R];function ln(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[S]}})}var en=ln((wn={},X(wn,S,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),X(wn,R,{fa:"solid",fass:"solid","fa-solid":"solid"}),wn)),nn=ln((kn={},X(kn,S,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(kn,R,{solid:"fass"}),kn)),an=ln((_n={},X(_n,S,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(_n,R,{fass:"fa-solid"}),_n)),ps=ln((En={},X(En,S,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(En,R,{"fa-solid":"fass"}),En)),hs=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,So="fa-layers-text",bs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ys=ln((In={},X(In,S,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(In,R,{900:"fass"}),In)),Oo=[1,2,3,4,5,6,7,8,9,10],xs=Oo.concat([11,12,13,14,15,16,17,18,19,20]),ws=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(nn[S]).map(rn.add.bind(rn));Object.keys(nn[R]).map(rn.add.bind(rn));var ks=[].concat(Gr,sn(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jt.GROUP,Jt.SWAP_OPACITY,Jt.PRIMARY,Jt.SECONDARY]).concat(Oo.map(function(t){return"".concat(t,"x")})).concat(xs.map(function(t){return"w-".concat(t)})),Je=Nt.FontAwesomeConfig||{};function _s(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Es(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O&&typeof O.querySelector=="function"){var Is=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Is.forEach(function(t){var e=jr(t,2),n=e[0],a=e[1],r=Es(_s(n));r!=null&&(Je[a]=r)})}var No={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ao,replacementClass:$o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Je.familyPrefix&&(Je.cssPrefix=Je.familyPrefix);var Ce=p(p({},No),Je);Ce.autoReplaceSvg||(Ce.observeMutations=!1);var b={};Object.keys(No).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(n){Ce[t]=n,tn.forEach(function(a){return a(b)})},get:function(){return Ce[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){Ce.cssPrefix=e,tn.forEach(function(n){return n(b)})},get:function(){return Ce.cssPrefix}});Nt.FontAwesomeConfig=b;var tn=[];function As(t){return tn.push(t),function(){tn.splice(tn.indexOf(t),1)}}var Ot=Pr,ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $s(t){if(!(!t||!bt)){var e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=O.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return O.head.insertBefore(e,a),t}}var Cs="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var t=12,e="";t-- >0;)e+=Cs[Math.random()*62|0];return e}function Se(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Br(t){return t.classList?Se(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Po(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ss(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Po(t[n]),'" ')},"").trim()}function Ln(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Xr(t){return t.size!==ut.size||t.x!==ut.x||t.y!==ut.y||t.rotate!==ut.rotate||t.flipX||t.flipY}function Os(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:m}}function Ns(t){var e=t.transform,n=t.width,a=n===void 0?Pr:n,r=t.height,i=r===void 0?Pr:r,s=t.startCentered,l=s===void 0?!1:s,f="";return l&&Io?f+="translate(".concat(e.x/Ot-a/2,"em, ").concat(e.y/Ot-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(e.x/Ot,"em), calc(-50% + ").concat(e.y/Ot,"em)) "):f+="translate(".concat(e.x/Ot,"em, ").concat(e.y/Ot,"em) "),f+="scale(".concat(e.size/Ot*(e.flipX?-1:1),", ").concat(e.size/Ot*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ps=`:root, :host {
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
}`;function To(){var t=Ao,e=$o,n=b.cssPrefix,a=b.replacementClass,r=Ps;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var Ji=!1;function Ar(){b.autoAddCss&&!Ji&&($s(To()),Ji=!0)}var Ts={mixout:function(){return{dom:{css:To,insertCss:Ar}}},hooks:function(){return{beforeDOMElementCreation:function(){Ar()},beforeI2svg:function(){Ar()}}}},pt=Nt||{};pt[gt]||(pt[gt]={});pt[gt].styles||(pt[gt].styles={});pt[gt].hooks||(pt[gt].hooks={});pt[gt].shims||(pt[gt].shims=[]);var lt=pt[gt],Do=[],Ds=function t(){O.removeEventListener("DOMContentLoaded",t),Tn=1,Do.map(function(e){return e()})},Tn=!1;bt&&(Tn=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Tn||O.addEventListener("DOMContentLoaded",Ds));function Ls(t){!bt||(Tn?setTimeout(t,0):Do.push(t))}function fn(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Po(t):"<".concat(e," ").concat(Ss(a),">").concat(i.map(fn).join(""),"</").concat(e,">")}function to(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ms=function(e,n){return function(a,r,i,s){return e.call(n,a,r,i,s)}},$r=function(e,n,a,r){var i=Object.keys(e),s=i.length,l=r!==void 0?Ms(n,r):n,f,m,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<s;f++)m=i[f],u=l(u,e[m],m,e);return u};function Vs(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Dr(t){var e=Vs(t);return e.length===1?e[0].toString(16):null}function Rs(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function eo(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Lr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=eo(e);typeof lt.hooks.addPack=="function"&&!r?lt.hooks.addPack(t,eo(e)):lt.styles[t]=p(p({},lt.styles[t]||{}),i),t==="fas"&&Lr("fa",e)}var An,$n,Cn,Ie=lt.styles,zs=lt.shims,Fs=(An={},X(An,S,Object.values(an[S])),X(An,R,Object.values(an[R])),An),qr=null,Lo={},Mo={},Vo={},Ro={},zo={},Hs=($n={},X($n,S,Object.keys(en[S])),X($n,R,Object.keys(en[R])),$n);function js(t){return~ks.indexOf(t)}function Ys(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!js(r)?r:null}var Fo=function(){var e=function(i){return $r(Ie,function(s,l,f){return s[f]=$r(l,i,{}),s},{})};Lo=e(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=s})}return r}),Mo=e(function(r,i,s){if(r[s]=s,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=s})}return r}),zo=e(function(r,i,s){var l=i[2];return r[s]=s,l.forEach(function(f){r[f]=s}),r});var n="far"in Ie||b.autoFetchSvg,a=$r(zs,function(r,i){var s=i[0],l=i[1],f=i[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(r.names[s]={prefix:l,iconName:f}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});Vo=a.names,Ro=a.unicodes,qr=Mn(b.styleDefault,{family:b.familyDefault})};As(function(t){qr=Mn(t.styleDefault,{family:b.familyDefault})});Fo();function Kr(t,e){return(Lo[t]||{})[e]}function Ws(t,e){return(Mo[t]||{})[e]}function te(t,e){return(zo[t]||{})[e]}function Ho(t){return Vo[t]||{prefix:null,iconName:null}}function Us(t){var e=Ro[t],n=Kr("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pt(){return qr}var Zr=function(){return{prefix:null,iconName:null,rest:[]}};function Mn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?S:n,r=en[a][t],i=nn[a][t]||nn[a][r],s=t in lt.styles?t:null;return i||s||null}var no=(Cn={},X(Cn,S,Object.keys(an[S])),X(Cn,R,Object.keys(an[R])),Cn);function Vn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},X(e,S,"".concat(b.cssPrefix,"-").concat(S)),X(e,R,"".concat(b.cssPrefix,"-").concat(R)),e),s=null,l=S;(t.includes(i[S])||t.some(function(m){return no[S].includes(m)}))&&(l=S),(t.includes(i[R])||t.some(function(m){return no[R].includes(m)}))&&(l=R);var f=t.reduce(function(m,u){var h=Ys(b.cssPrefix,u);if(Ie[u]?(u=Fs[l].includes(u)?ps[l][u]:u,s=u,m.prefix=u):Hs[l].indexOf(u)>-1?(s=u,m.prefix=Mn(u,{family:l})):h?m.iconName=h:u!==b.replacementClass&&u!==i[S]&&u!==i[R]&&m.rest.push(u),!r&&m.prefix&&m.iconName){var I=s==="fa"?Ho(m.iconName):{},A=te(m.prefix,m.iconName);I.prefix&&(s=null),m.iconName=I.iconName||A||m.iconName,m.prefix=I.prefix||m.prefix,m.prefix==="far"&&!Ie.far&&Ie.fas&&!b.autoFetchSvg&&(m.prefix="fas")}return m},Zr());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===R&&(Ie.fass||b.autoFetchSvg)&&(f.prefix="fass",f.iconName=te(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||s==="fa")&&(f.prefix=Pt()||"fas"),f}var Gs=function(){function t(){rs(this,t),this.definitions={}}return is(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=p(p({},n.definitions[l]||{}),s[l]),Lr(l,s[l]);var f=an[S][l];f&&Lr(f,s[l]),Fo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var s=r[i],l=s.prefix,f=s.iconName,m=s.icon,u=m[2];n[l]||(n[l]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[l][h]=m)}),n[l][f]=m}),n}}]),t}(),ao=[],Ae={},$e={},Bs=Object.keys($e);function Xs(t,e){var n=e.mixoutsTo;return ao=t,Ae={},Object.keys($e).forEach(function(a){Bs.indexOf(a)===-1&&delete $e[a]}),ao.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),Pn(r[s])==="object"&&Object.keys(r[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=r[s][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(s){Ae[s]||(Ae[s]=[]),Ae[s].push(i[s])})}a.provides&&a.provides($e)}),n}function Mr(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Ae[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function ne(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Ae[t]||[];r.forEach(function(i){i.apply(null,n)})}function ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $e[t]?$e[t].apply(null,e):void 0}function Vr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pt();if(!!e)return e=te(n,e)||e,to(jo.definitions,n,e)||to(lt.styles,n,e)}var jo=new Gs,qs=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,ne("noAuto")},Ks={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(ne("beforeI2svg",e),ht("pseudoElements2svg",e),ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Ls(function(){Qs({autoReplaceSvgRoot:n}),ne("watch",e)})}},Zs={icon:function(e){if(e===null)return null;if(Pn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:te(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Mn(e[0]);return{prefix:a,iconName:te(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(hs))){var r=Vn(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Pt(),iconName:te(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Pt();return{prefix:i,iconName:te(i,e)||e}}}},et={noAuto:qs,config:b,dom:Ks,parse:Zs,library:jo,findIconDefinition:Vr,toHtml:fn},Qs=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?O:n;(Object.keys(lt.styles).length>0||b.autoFetchSvg)&&bt&&b.autoReplaceSvg&&et.dom.i2svg({node:a})};function Rn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return fn(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!bt){var a=O.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Js(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,s=t.transform;if(Xr(s)&&n.found&&!a.found){var l=n.width,f=n.height,m={x:l/f/2,y:.5};r.style=Ln(p(p({},i),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function tl(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},r),{},{id:s}),children:a}]}]}function Qr(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,s=t.transform,l=t.symbol,f=t.title,m=t.maskId,u=t.titleId,h=t.extra,I=t.watchable,A=I===void 0?!1:I,G=a.found?a:n,z=G.width,Q=G.height,M=r==="fak",$=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(C){return h.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(h.classes).join(" "),B={children:[],attributes:p(p({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:$,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(Q)})},T=M&&!~h.classes.indexOf("fa-fw")?{width:"".concat(z/Q*16*.0625,"em")}:{};A&&(B.attributes[ee]=""),f&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(u||on())},children:[f]}),delete B.attributes.title);var V=p(p({},B),{},{prefix:r,iconName:i,main:n,mask:a,maskId:m,transform:s,symbol:l,styles:p(p({},T),h.styles)}),J=a.found&&n.found?ht("generateAbstractMask",V)||{children:[],attributes:{}}:ht("generateAbstractIcon",V)||{children:[],attributes:{}},it=J.children,Dt=J.attributes;return V.children=it,V.attributes=Dt,l?tl(V):Js(V)}function ro(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,s=t.extra,l=t.watchable,f=l===void 0?!1:l,m=p(p(p({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});f&&(m[ee]="");var u=p({},s.styles);Xr(r)&&(u.transform=Ns({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var h=Ln(u);h.length>0&&(m.style=h);var I=[];return I.push({tag:"span",attributes:m,children:[e]}),i&&I.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),I}function el(t){var e=t.content,n=t.title,a=t.extra,r=p(p(p({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ln(a.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Cr=lt.styles;function Rr(t){var e=t[0],n=t[1],a=t.slice(4),r=jr(a,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var nl={found:!1,width:512,height:512};function al(t,e){!Co&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zr(t,e){var n=e;return e==="fa"&&b.styleDefault!==null&&(e=Pt()),new Promise(function(a,r){if(ht("missingIconAbstract"),n==="fa"){var i=Ho(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Cr[e]&&Cr[e][t]){var s=Cr[e][t];return a(Rr(s))}al(t,e),a(p(p({},nl),{},{icon:b.showMissingIcons&&t?ht("missingIconAbstract")||{}:{}}))})}var io=function(){},Fr=b.measurePerformance&&xn&&xn.mark&&xn.measure?xn:{mark:io,measure:io},Qe='FA "6.2.0"',rl=function(e){return Fr.mark("".concat(Qe," ").concat(e," begins")),function(){return Yo(e)}},Yo=function(e){Fr.mark("".concat(Qe," ").concat(e," ends")),Fr.measure("".concat(Qe," ").concat(e),"".concat(Qe," ").concat(e," begins"),"".concat(Qe," ").concat(e," ends"))},Jr={begin:rl,end:Yo},Sn=function(){};function oo(t){var e=t.getAttribute?t.getAttribute(ee):null;return typeof e=="string"}function il(t){var e=t.getAttribute?t.getAttribute(Wr):null,n=t.getAttribute?t.getAttribute(Ur):null;return e&&n}function ol(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function sl(){if(b.autoReplaceSvg===!0)return On.replace;var t=On[b.autoReplaceSvg];return t||On.replace}function ll(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function fl(t){return O.createElement(t)}function Wo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ll:fl:n;if(typeof t=="string")return O.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){r.appendChild(Wo(s,{ceFn:a}))}),r}function cl(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var On={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Wo(r),n)}),n.getAttribute(ee)===null&&b.keepOriginalSource){var a=O.createComment(cl(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Br(n).indexOf(b.replacementClass))return On.replace(e);var r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,f){return f===b.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=a.map(function(l){return fn(l)}).join(`
`);n.setAttribute(ee,""),n.innerHTML=s}};function so(t){t()}function Uo(t,e){var n=typeof e=="function"?e:Sn;if(t.length===0)n();else{var a=so;b.mutateApproach===vs&&(a=Nt.requestAnimationFrame||so),a(function(){var r=sl(),i=Jr.begin("mutate");t.map(r),i(),n()})}}var ti=!1;function Go(){ti=!0}function Hr(){ti=!1}var Dn=null;function lo(t){if(!!Zi&&!!b.observeMutations){var e=t.treeCallback,n=e===void 0?Sn:e,a=t.nodeCallback,r=a===void 0?Sn:a,i=t.pseudoElementsCallback,s=i===void 0?Sn:i,l=t.observeMutationsRoot,f=l===void 0?O:l;Dn=new Zi(function(m){if(!ti){var u=Pt();Se(m).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!oo(h.addedNodes[0])&&(b.searchPseudoElements&&s(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&b.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&oo(h.target)&&~ws.indexOf(h.attributeName))if(h.attributeName==="class"&&il(h.target)){var I=Vn(Br(h.target)),A=I.prefix,G=I.iconName;h.target.setAttribute(Wr,A||u),G&&h.target.setAttribute(Ur,G)}else ol(h.target)&&r(h.target)})}}),bt&&Dn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ul(){!Dn||Dn.disconnect()}function ml(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function dl(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Vn(Br(t));return r.prefix||(r.prefix=Pt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ws(r.prefix,t.innerText)||Kr(r.prefix,Dr(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function vl(t){var e=Se(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||on()):(e["aria-hidden"]="true",e.focusable="false")),e}function gl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dl(t),a=n.iconName,r=n.prefix,i=n.rest,s=vl(t),l=Mr("parseNodeAttributes",{},t),f=e.styleParser?ml(t):[];return p({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:s}},l)}var pl=lt.styles;function Bo(t){var e=b.autoReplaceSvg==="nest"?fo(t,{styleParser:!1}):fo(t);return~e.extra.classes.indexOf(So)?ht("generateLayersText",t,e):ht("generateSvgReplacementMutation",t,e)}var Tt=new Set;Gr.map(function(t){Tt.add("fa-".concat(t))});Object.keys(en[S]).map(Tt.add.bind(Tt));Object.keys(en[R]).map(Tt.add.bind(Tt));Tt=sn(Tt);function co(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();var n=O.documentElement.classList,a=function(h){return n.add("".concat(Qi,"-").concat(h))},r=function(h){return n.remove("".concat(Qi,"-").concat(h))},i=b.autoFetchSvg?Tt:Gr.map(function(u){return"fa-".concat(u)}).concat(Object.keys(pl));i.includes("fa")||i.push("fa");var s=[".".concat(So,":not([").concat(ee,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(ee,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=Se(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Jr.begin("onTree"),m=l.reduce(function(u,h){try{var I=Bo(h);I&&u.push(I)}catch(A){Co||A.name==="MissingIcon"&&console.error(A)}return u},[]);return new Promise(function(u,h){Promise.all(m).then(function(I){Uo(I,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(function(I){f(),h(I)})})}function hl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bo(t).then(function(n){n&&Uo([n],e)})}function bl(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Vr(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Vr(r||{})),t(a,p(p({},n),{},{mask:r}))}}var yl=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ut:a,i=n.symbol,s=i===void 0?!1:i,l=n.mask,f=l===void 0?null:l,m=n.maskId,u=m===void 0?null:m,h=n.title,I=h===void 0?null:h,A=n.titleId,G=A===void 0?null:A,z=n.classes,Q=z===void 0?[]:z,M=n.attributes,$=M===void 0?{}:M,B=n.styles,T=B===void 0?{}:B;if(!!e){var V=e.prefix,J=e.iconName,it=e.icon;return Rn(p({type:"icon"},e),function(){return ne("beforeDOMElementCreation",{iconDefinition:e,params:n}),b.autoA11y&&(I?$["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(G||on()):($["aria-hidden"]="true",$.focusable="false")),Qr({icons:{main:Rr(it),mask:f?Rr(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:J,transform:p(p({},ut),r),symbol:s,title:I,maskId:u,titleId:G,extra:{attributes:$,styles:T,classes:Q}})})}},xl={mixout:function(){return{icon:bl(yl)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=co,n.nodeCallback=hl,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?O:a,i=n.callback,s=i===void 0?function(){}:i;return co(r,s)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,s=a.titleId,l=a.prefix,f=a.transform,m=a.symbol,u=a.mask,h=a.maskId,I=a.extra;return new Promise(function(A,G){Promise.all([zr(r,l),u.iconName?zr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var Q=jr(z,2),M=Q[0],$=Q[1];A([n,Qr({icons:{main:M,mask:$},prefix:l,iconName:r,transform:f,symbol:m,maskId:h,title:i,titleId:s,extra:I,watchable:!0})])}).catch(G)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.transform,l=n.styles,f=Ln(l);f.length>0&&(r.style=f);var m;return Xr(s)&&(m=ht("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),a.push(m||i.icon),{children:a,attributes:r}}}},wl={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Rn({type:"layer"},function(){ne("beforeDOMElementCreation",{assembler:n,params:a});var s=[];return n(function(l){Array.isArray(l)?l.map(function(f){s=s.concat(f.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(sn(i)).join(" ")},children:s}]})}}}},kl={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,s=a.classes,l=s===void 0?[]:s,f=a.attributes,m=f===void 0?{}:f,u=a.styles,h=u===void 0?{}:u;return Rn({type:"counter",content:n},function(){return ne("beforeDOMElementCreation",{content:n,params:a}),el({content:n.toString(),title:i,extra:{attributes:m,styles:h,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(sn(l))}})})}}}},_l={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ut:r,s=a.title,l=s===void 0?null:s,f=a.classes,m=f===void 0?[]:f,u=a.attributes,h=u===void 0?{}:u,I=a.styles,A=I===void 0?{}:I;return Rn({type:"text",content:n},function(){return ne("beforeDOMElementCreation",{content:n,params:a}),ro({content:n,transform:p(p({},ut),i),title:l,extra:{attributes:h,styles:A,classes:["".concat(b.cssPrefix,"-layers-text")].concat(sn(m))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,s=a.extra,l=null,f=null;if(Io){var m=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();l=u.width/m,f=u.height/m}return b.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,ro({content:n.innerHTML,width:l,height:f,transform:i,title:r,extra:s,watchable:!0})])}}},El=new RegExp('"',"ug"),uo=[1105920,1112319];function Il(t){var e=t.replace(El,""),n=Rs(e,0),a=n>=uo[0]&&n<=uo[1],r=e.length===2?e[0]===e[1]:!1;return{value:Dr(r?e[0]:e),isSecondary:a||r}}function mo(t,e){var n="".concat(ds).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=Se(t.children),s=i.filter(function(it){return it.getAttribute(Tr)===e})[0],l=Nt.getComputedStyle(t,e),f=l.getPropertyValue("font-family").match(bs),m=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&u!=="none"&&u!==""){var h=l.getPropertyValue("content"),I=~["Sharp"].indexOf(f[2])?R:S,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?nn[I][f[2].toLowerCase()]:ys[I][m],G=Il(h),z=G.value,Q=G.isSecondary,M=f[0].startsWith("FontAwesome"),$=Kr(A,z),B=$;if(M){var T=Us(z);T.iconName&&T.prefix&&($=T.iconName,A=T.prefix)}if($&&!Q&&(!s||s.getAttribute(Wr)!==A||s.getAttribute(Ur)!==B)){t.setAttribute(n,B),s&&t.removeChild(s);var V=gl(),J=V.extra;J.attributes[Tr]=e,zr($,A).then(function(it){var Dt=Qr(p(p({},V),{},{icons:{main:it,mask:Zr()},prefix:A,iconName:B,extra:J,watchable:!0})),C=O.createElement("svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=Dt.map(function(mt){return fn(mt)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Al(t){return Promise.all([mo(t,"::before"),mo(t,"::after")])}function $l(t){return t.parentNode!==document.head&&!~gs.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function vo(t){if(!!bt)return new Promise(function(e,n){var a=Se(t.querySelectorAll("*")).filter($l).map(Al),r=Jr.begin("searchPseudoElements");Go(),Promise.all(a).then(function(){r(),Hr(),e()}).catch(function(){r(),Hr(),n()})})}var Cl={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vo,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?O:a;b.searchPseudoElements&&vo(r)}}},go=!1,Sl={mixout:function(){return{dom:{unwatch:function(){Go(),go=!0}}}},hooks:function(){return{bootstrap:function(){lo(Mr("mutationObserverCallbacks",{}))},noAuto:function(){ul()},watch:function(n){var a=n.observeMutationsRoot;go?Hr():lo(Mr("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},po=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),s=i[0],l=i.slice(1).join("-");if(s&&l==="h")return a.flipX=!0,a;if(s&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(s){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},Ol={mixout:function(){return{parse:{transform:function(n){return po(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=po(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(f," ").concat(m," ").concat(u)},I={transform:"translate(".concat(s/2*-1," -256)")},A={outer:l,inner:h,path:I};return{tag:"g",attributes:p({},A.outer),children:[{tag:"g",attributes:p({},A.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:p(p({},a.icon.attributes),A.path)}]}]}}}},Sr={x:0,y:0,width:"100%",height:"100%"};function ho(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Nl(t){return t.tag==="g"?t.children:[t]}var Pl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Vn(r.split(" ").map(function(s){return s.trim()})):Zr();return i.prefix||(i.prefix=Pt()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.mask,l=n.maskId,f=n.transform,m=i.width,u=i.icon,h=s.width,I=s.icon,A=Os({transform:f,containerWidth:h,iconWidth:m}),G={tag:"rect",attributes:p(p({},Sr),{},{fill:"white"})},z=u.children?{children:u.children.map(ho)}:{},Q={tag:"g",attributes:p({},A.inner),children:[ho(p({tag:u.tag,attributes:p(p({},u.attributes),A.path)},z))]},M={tag:"g",attributes:p({},A.outer),children:[Q]},$="mask-".concat(l||on()),B="clip-".concat(l||on()),T={tag:"mask",attributes:p(p({},Sr),{},{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,M]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:Nl(I)},T]};return a.push(V,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat($,")")},Sr)}),{children:a,attributes:r}}}},Tl={provides:function(e){var n=!1;Nt.matchMedia&&(n=Nt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=p(p({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:p(p({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Dl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ll=[Ts,xl,wl,kl,_l,Cl,Sl,Ol,Pl,Tl,Dl];Xs(Ll,{mixoutsTo:et});et.noAuto;var Ml=et.config,Vl=et.library;et.dom;et.parse;et.findIconDefinition;et.toHtml;var Rl=et.icon;et.layer;et.text;et.counter;function zl(t){let e,n;return{c(){e=new Xo(!1),n=Wi(),this.h()},l(a){e=qo(a,!1),n=Wi(),this.h()},h(){e.a=n},m(a,r){e.m(t[0],a,r),vt(a,n,r)},p(a,[r]){r&1&&e.p(a[0])},i:Ui,o:Ui,d(a){a&&c(n),a&&e.d()}}}Ml.autoAddCss=!1;function Fl(t,e,n){let a,{icon:r}=e,{class:i=""}=e,{fixedWidth:s=!1}=e;return t.$$set=l=>{"icon"in l&&n(1,r=l.icon),"class"in l&&n(2,i=l.class),"fixedWidth"in l&&n(3,s=l.fixedWidth)},t.$$.update=()=>{var l,f;t.$$.dirty&2&&Vl.add(r),t.$$.dirty&14&&n(0,a=(f=(l=Rl({prefix:"fas",iconName:r.iconName},{classes:ts(i,s?"fa-fw":void 0)}))==null?void 0:l.html)!=null?f:"")},[a,r,i,s]}class Z extends bo{constructor(e){super(),yo(this,e,Fl,zl,xo,{icon:1,class:2,fixedWidth:3})}}var Or={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Hl={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},jl={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"]},Yl=jl,Wl={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"]},Ul={prefix:"fas",iconName:"chalkboard",icon:[576,512,["blackboard"],"f51b","M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z"]},Gl={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},Bl=Gl,Xl={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Ze={prefix:"fas",iconName:"crosshairs",icon:[512,512,[],"f05b","M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},ql={prefix:"fas",iconName:"arrows-turn-to-dots",icon:[512,512,[],"e4c1","M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96 416 96c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7-14.3-32-32-32l-146.7 0 25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3l80-80zm13.3 256l80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 416 96 416c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448c0-53 43-96 96-96l146.7 0-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0zM512 384c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM64 64c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64S28.7 64 64 64z"]},Kl={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function Zl(t){let e,n,a;return n=new Nn({props:{$$slots:{default:[Jl]},$$scope:{ctx:t}}}),{c(){e=d("a"),F(n.$$.fragment),this.h()},l(r){e=v(r,"A",{href:!0});var i=g(e);H(n.$$.fragment,i),i.forEach(c),this.h()},h(){E(e,"href","steam://connect/dm1.sappho.io:27315")},m(r,i){vt(r,e,i),j(n,e,null),a=!0},i(r){a||(L(n.$$.fragment,r),a=!0)},o(r){D(n.$$.fragment,r),a=!1},d(r){r&&c(e),Y(n)}}}function Ql(t){let e,n,a;return n=new Nn({props:{$$slots:{default:[tf]},$$scope:{ctx:t}}}),{c(){e=d("a"),F(n.$$.fragment),this.h()},l(r){e=v(r,"A",{href:!0});var i=g(e);H(n.$$.fragment,i),i.forEach(c),this.h()},h(){E(e,"href","/app")},m(r,i){vt(r,e,i),j(n,e,null),a=!0},i(r){a||(L(n.$$.fragment,r),a=!0)},o(r){D(n.$$.fragment,r),a=!1},d(r){r&&c(e),Y(n)}}}function Jl(t){let e;return{c(){e=k("Launch")},l(n){e=_(n,"Launch")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function tf(t){let e;return{c(){e=k("Install Now")},l(n){e=_(n,"Install Now")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function ef(t){let e;return{c(){e=k("See More")},l(n){e=_(n,"See More")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function nf(t){let e;return{c(){e=k("Get it")},l(n){e=_(n,"Get it")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function af(t){let e,n,a,r,i,s,l,f,m,u,h,I,A,G,z,Q,M,$,B,T,V,J,it,Dt,C,mt,zn,ae,Fn,Oe,Hn,jn,Lt,Yn,re,Ne,Wn,Un,Gn,Mt,Bn,ie,Pe,Xn,qn,Kn,yt,oe,Zn,Qn,q,Vt,Jn,Te,ta,ea,Rt,na,De,aa,ra,zt,ia,Le,oa,sa,se,la,fa,le,xt,ca,fe,tt,Ft,ce,ua,ma,ue,da,va,wt,ga,Me,pa,ha,ba,kt,ya,Ve,xa,wa,ka,_t,_a,Re,Ea,Ia,Aa,me,$a,Ca,nt,dt,de,Sa,Oa,ve,Na,Pa,N,Ht,Ta,ze,Da,La,jt,Ma,Fe,Va,Ra,Yt,za,He,Fa,Ha,Wt,ja,je,Ya,Wa,Ut,Ua,Ye,Ga,Ba,ot,ge,Xa,qa,pe,Ka,Za,W,Gt,Qa,We,Ja,tr,Bt,er,Ue,nr,ar,Xt,rr,Ge,ir,or,qt,sr,Be,lr,fr,Et,cr,Xe,ur,mr,dr,he,Kt,vr,be,It,gr,ye,At,Zt,xe,pr,hr,we,br,yr,ke,st,ei,xr,_e,wr,cn;e=new es({});const ni=[Ql,Zl],Qt=[];function ai(y,P){return y[0]?0:1}return M=ai(t),$=Qt[M]=ni[M](t),mt=new Z({props:{icon:Or,fixedWidth:!0}}),Lt=new Z({props:{icon:Or,fixedWidth:!0}}),Mt=new Z({props:{icon:Or,fixedWidth:!0}}),Vt=new Z({props:{icon:Hl,fixedWidth:!0}}),Rt=new Z({props:{icon:Xl,fixedWidth:!0}}),zt=new Z({props:{icon:Bl,fixedWidth:!0}}),xt=new Nn({props:{$$slots:{default:[ef]},$$scope:{ctx:t}}}),Ht=new Z({props:{icon:Ze,fixedWidth:!0}}),jt=new Z({props:{icon:Ze,fixedWidth:!0}}),Yt=new Z({props:{icon:Ze,fixedWidth:!0}}),Wt=new Z({props:{icon:Ze,fixedWidth:!0}}),Ut=new Z({props:{icon:Ze,fixedWidth:!0}}),Gt=new Z({props:{icon:Kl,fixedWidth:!0}}),Bt=new Z({props:{icon:ql,fixedWidth:!0}}),Xt=new Z({props:{icon:Ul,fixedWidth:!0}}),qt=new Z({props:{icon:Yl,fixedWidth:!0}}),Kt=new Z({props:{icon:Wl}}),It=new Nn({props:{$$slots:{default:[nf]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=x(),a=d("main"),r=d("div"),i=d("div"),s=k("Want to be on top? Get"),l=x(),f=d("div"),m=d("div"),u=k("On the Box"),h=x(),I=d("div"),A=k("A gateway to wild skill in TF2."),G=x(),z=d("div"),Q=k(`Change the game
        `),$.c(),B=x(),T=d("div"),V=d("div"),J=d("div"),it=k("What can The Box do for you?"),Dt=x(),C=d("div"),F(mt.$$.fragment),zn=x(),ae=d("div"),Fn=k("Perform your "),Oe=d("i"),Hn=k("best"),jn=x(),F(Lt.$$.fragment),Yn=x(),re=d("div"),Ne=d("i"),Wn=k("Impress"),Un=k(" your peers"),Gn=x(),F(Mt.$$.fragment),Bn=x(),ie=d("div"),Pe=d("i"),Xn=k("Eliminate"),qn=k(" the competition"),Kn=x(),yt=d("div"),oe=d("div"),Zn=k("The Box is unbeatable"),Qn=x(),q=d("div"),F(Vt.$$.fragment),Jn=x(),Te=d("div"),ta=k("Lower RAM usage than LmaoBox"),ea=x(),F(Rt.$$.fragment),na=x(),De=d("div"),aa=k("Undetectable by RGL, UGC, ETF2L, etc."),ra=x(),F(zt.$$.fragment),ia=x(),Le=d("div"),oa=k("VAC Immune"),sa=x(),se=d("div"),la=k("100% free forever"),fa=x(),le=d("div"),F(xt.$$.fragment),ca=x(),fe=d("div"),tt=d("div"),Ft=d("div"),ce=d("div"),ua=k("Testimonials"),ma=x(),ue=d("div"),da=k("Identities hidden for privacy"),va=x(),wt=d("div"),ga=k('"I was nervous heading to LAN, but with '),Me=d("strong"),pa=k("On The Box"),ha=k(', I was able to perform better than ever." - **ile'),ba=x(),kt=d("div"),ya=k(`"I'm new to competitive and `),Ve=d("strong"),xa=k("On The Box"),wa=k(` has allowed
                me to jump straight in with the best" - ***endlynoodles`),ka=x(),_t=d("div"),_a=k(`"I only play casual, but I've been having a lot more fun since I
                picked up `),Re=d("strong"),Ea=k("On The Box"),Ia=k(`. Now I always make it fat
                like my favorite streamer and I always end on a W." -
                ***ditforlife`),Aa=x(),me=d("div"),$a=k(`"I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox." - ***ketball.barry.99`),Ca=x(),nt=d("div"),dt=d("div"),de=d("div"),Sa=k("Compatilibity?"),Oa=x(),ve=d("div"),Na=k("We do it all."),Pa=x(),N=d("div"),F(Ht.$$.fragment),Ta=x(),ze=d("div"),Da=k("Casual"),La=x(),F(jt.$$.fragment),Ma=x(),Fe=d("div"),Va=k("Competitive"),Ra=x(),F(Yt.$$.fragment),za=x(),He=d("div"),Fa=k("MGE"),Ha=x(),F(Wt.$$.fragment),ja=x(),je=d("div"),Ya=k("DM"),Wa=x(),F(Ut.$$.fragment),Ua=x(),Ye=d("div"),Ga=k("The list goes on..."),Ba=x(),ot=d("div"),ge=d("div"),Xa=k("Level up your brain"),qa=x(),pe=d("div"),Ka=k("It's not all about mechies. Get our"),Za=x(),W=d("div"),F(Gt.$$.fragment),Qa=x(),We=d("div"),Ja=k("Training courses"),tr=x(),F(Bt.$$.fragment),er=x(),Ue=d("div"),nr=k("Strats"),ar=x(),F(Xt.$$.fragment),rr=x(),Ge=d("div"),ir=k("Tips and tricks"),or=x(),F(qt.$$.fragment),sr=x(),Be=d("div"),lr=k("Groundbreaking theorycrafting"),fr=x(),Et=d("div"),cr=k("From "),Xe=d("strong"),ur=k("real"),mr=k(" pros. All 100% free."),dr=x(),he=d("div"),F(Kt.$$.fragment),vr=x(),be=d("div"),F(It.$$.fragment),gr=x(),ye=d("div"),At=d("div"),Zt=d("div"),xe=d("div"),pr=k("Results"),hr=x(),we=d("div"),br=k("The proof is in the pudding"),yr=x(),ke=d("div"),st=d("iframe"),xr=x(),_e=d("div"),wr=k("This site is a work of satire. No cheats are provided by On the Box."),this.h()},l(y){H(e.$$.fragment,y),n=w(y),a=v(y,"MAIN",{class:!0});var P=g(a);r=v(P,"DIV",{class:!0});var ft=g(r);i=v(ft,"DIV",{class:!0});var qe=g(i);s=_(qe,"Want to be on top? Get"),qe.forEach(c),l=w(ft),f=v(ft,"DIV",{class:!0});var Ke=g(f);m=v(Ke,"DIV",{class:!0});var ri=g(m);u=_(ri,"On the Box"),ri.forEach(c),Ke.forEach(c),h=w(ft),I=v(ft,"DIV",{class:!0});var ii=g(I);A=_(ii,"A gateway to wild skill in TF2."),ii.forEach(c),ft.forEach(c),G=w(P),z=v(P,"DIV",{class:!0});var kr=g(z);Q=_(kr,`Change the game
        `),$.l(kr),kr.forEach(c),B=w(P),T=v(P,"DIV",{class:!0});var $t=g(T);V=v($t,"DIV",{class:!0});var un=g(V);J=v(un,"DIV",{class:!0});var oi=g(J);it=_(oi,"What can The Box do for you?"),oi.forEach(c),Dt=w(un),C=v(un,"DIV",{class:!0});var at=g(C);H(mt.$$.fragment,at),zn=w(at),ae=v(at,"DIV",{});var _r=g(ae);Fn=_(_r,"Perform your "),Oe=v(_r,"I",{});var si=g(Oe);Hn=_(si,"best"),si.forEach(c),_r.forEach(c),jn=w(at),H(Lt.$$.fragment,at),Yn=w(at),re=v(at,"DIV",{});var Er=g(re);Ne=v(Er,"I",{});var li=g(Ne);Wn=_(li,"Impress"),li.forEach(c),Un=_(Er," your peers"),Er.forEach(c),Gn=w(at),H(Mt.$$.fragment,at),Bn=w(at),ie=v(at,"DIV",{});var Ir=g(ie);Pe=v(Ir,"I",{});var fi=g(Pe);Xn=_(fi,"Eliminate"),fi.forEach(c),qn=_(Ir," the competition"),Ir.forEach(c),at.forEach(c),un.forEach(c),Kn=w($t),yt=v($t,"DIV",{class:!0});var mn=g(yt);oe=v(mn,"DIV",{class:!0});var ci=g(oe);Zn=_(ci,"The Box is unbeatable"),ci.forEach(c),Qn=w(mn),q=v(mn,"DIV",{class:!0});var rt=g(q);H(Vt.$$.fragment,rt),Jn=w(rt),Te=v(rt,"DIV",{});var ui=g(Te);ta=_(ui,"Lower RAM usage than LmaoBox"),ui.forEach(c),ea=w(rt),H(Rt.$$.fragment,rt),na=w(rt),De=v(rt,"DIV",{});var mi=g(De);aa=_(mi,"Undetectable by RGL, UGC, ETF2L, etc."),mi.forEach(c),ra=w(rt),H(zt.$$.fragment,rt),ia=w(rt),Le=v(rt,"DIV",{});var di=g(Le);oa=_(di,"VAC Immune"),di.forEach(c),rt.forEach(c),mn.forEach(c),sa=w($t),se=v($t,"DIV",{class:!0});var vi=g(se);la=_(vi,"100% free forever"),vi.forEach(c),fa=w($t),le=v($t,"DIV",{class:!0});var gi=g(le);H(xt.$$.fragment,gi),gi.forEach(c),$t.forEach(c),ca=w(P),fe=v(P,"DIV",{class:!0});var pi=g(fe);tt=v(pi,"DIV",{class:!0});var ct=g(tt);Ft=v(ct,"DIV",{});var dn=g(Ft);ce=v(dn,"DIV",{class:!0});var hi=g(ce);ua=_(hi,"Testimonials"),hi.forEach(c),ma=w(dn),ue=v(dn,"DIV",{class:!0});var bi=g(ue);da=_(bi,"Identities hidden for privacy"),bi.forEach(c),dn.forEach(c),va=w(ct),wt=v(ct,"DIV",{class:!0});var vn=g(wt);ga=_(vn,'"I was nervous heading to LAN, but with '),Me=v(vn,"STRONG",{});var yi=g(Me);pa=_(yi,"On The Box"),yi.forEach(c),ha=_(vn,', I was able to perform better than ever." - **ile'),vn.forEach(c),ba=w(ct),kt=v(ct,"DIV",{class:!0});var gn=g(kt);ya=_(gn,`"I'm new to competitive and `),Ve=v(gn,"STRONG",{});var xi=g(Ve);xa=_(xi,"On The Box"),xi.forEach(c),wa=_(gn,` has allowed
                me to jump straight in with the best" - ***endlynoodles`),gn.forEach(c),ka=w(ct),_t=v(ct,"DIV",{class:!0});var pn=g(_t);_a=_(pn,`"I only play casual, but I've been having a lot more fun since I
                picked up `),Re=v(pn,"STRONG",{});var wi=g(Re);Ea=_(wi,"On The Box"),wi.forEach(c),Ia=_(pn,`. Now I always make it fat
                like my favorite streamer and I always end on a W." -
                ***ditforlife`),pn.forEach(c),Aa=w(ct),me=v(ct,"DIV",{class:!0});var ki=g(me);$a=_(ki,`"I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox." - ***ketball.barry.99`),ki.forEach(c),ct.forEach(c),pi.forEach(c),Ca=w(P),nt=v(P,"DIV",{class:!0});var Ct=g(nt);dt=v(Ct,"DIV",{});var Ee=g(dt);de=v(Ee,"DIV",{class:!0});var _i=g(de);Sa=_(_i,"Compatilibity?"),_i.forEach(c),Oa=w(Ee),ve=v(Ee,"DIV",{class:!0});var Ei=g(ve);Na=_(Ei,"We do it all."),Ei.forEach(c),Pa=w(Ee),N=v(Ee,"DIV",{class:!0});var U=g(N);H(Ht.$$.fragment,U),Ta=w(U),ze=v(U,"DIV",{});var Ii=g(ze);Da=_(Ii,"Casual"),Ii.forEach(c),La=w(U),H(jt.$$.fragment,U),Ma=w(U),Fe=v(U,"DIV",{});var Ai=g(Fe);Va=_(Ai,"Competitive"),Ai.forEach(c),Ra=w(U),H(Yt.$$.fragment,U),za=w(U),He=v(U,"DIV",{});var $i=g(He);Fa=_($i,"MGE"),$i.forEach(c),Ha=w(U),H(Wt.$$.fragment,U),ja=w(U),je=v(U,"DIV",{});var Ci=g(je);Ya=_(Ci,"DM"),Ci.forEach(c),Wa=w(U),H(Ut.$$.fragment,U),Ua=w(U),Ye=v(U,"DIV",{});var Si=g(Ye);Ga=_(Si,"The list goes on..."),Si.forEach(c),U.forEach(c),Ee.forEach(c),Ba=w(Ct),ot=v(Ct,"DIV",{});var St=g(ot);ge=v(St,"DIV",{class:!0});var Oi=g(ge);Xa=_(Oi,"Level up your brain"),Oi.forEach(c),qa=w(St),pe=v(St,"DIV",{class:!0});var Ni=g(pe);Ka=_(Ni,"It's not all about mechies. Get our"),Ni.forEach(c),Za=w(St),W=v(St,"DIV",{class:!0});var K=g(W);H(Gt.$$.fragment,K),Qa=w(K),We=v(K,"DIV",{});var Pi=g(We);Ja=_(Pi,"Training courses"),Pi.forEach(c),tr=w(K),H(Bt.$$.fragment,K),er=w(K),Ue=v(K,"DIV",{});var Ti=g(Ue);nr=_(Ti,"Strats"),Ti.forEach(c),ar=w(K),H(Xt.$$.fragment,K),rr=w(K),Ge=v(K,"DIV",{});var Di=g(Ge);ir=_(Di,"Tips and tricks"),Di.forEach(c),or=w(K),H(qt.$$.fragment,K),sr=w(K),Be=v(K,"DIV",{});var Li=g(Be);lr=_(Li,"Groundbreaking theorycrafting"),Li.forEach(c),K.forEach(c),fr=w(St),Et=v(St,"DIV",{class:!0});var hn=g(Et);cr=_(hn,"From "),Xe=v(hn,"STRONG",{});var Mi=g(Xe);ur=_(Mi,"real"),Mi.forEach(c),mr=_(hn," pros. All 100% free."),hn.forEach(c),St.forEach(c),dr=w(Ct),he=v(Ct,"DIV",{class:!0});var Vi=g(he);H(Kt.$$.fragment,Vi),Vi.forEach(c),vr=w(Ct),be=v(Ct,"DIV",{class:!0});var Ri=g(be);H(It.$$.fragment,Ri),Ri.forEach(c),Ct.forEach(c),gr=w(P),ye=v(P,"DIV",{class:!0});var zi=g(ye);At=v(zi,"DIV",{class:!0});var bn=g(At);Zt=v(bn,"DIV",{});var yn=g(Zt);xe=v(yn,"DIV",{class:!0});var Fi=g(xe);pr=_(Fi,"Results"),Fi.forEach(c),hr=w(yn),we=v(yn,"DIV",{class:!0});var Hi=g(we);br=_(Hi,"The proof is in the pudding"),Hi.forEach(c),yn.forEach(c),yr=w(bn),ke=v(bn,"DIV",{class:!0});var ji=g(ke);st=v(ji,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),g(st).forEach(c),ji.forEach(c),bn.forEach(c),zi.forEach(c),xr=w(P),_e=v(P,"DIV",{class:!0});var Yi=g(_e);wr=_(Yi,"This site is a work of satire. No cheats are provided by On the Box."),Yi.forEach(c),P.forEach(c),this.h()},h(){E(i,"class","text-lg"),E(m,"class","mt-px -mb-px"),E(f,"class","bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black"),E(I,"class","mt-4 text-base"),E(r,"class","flex flex-col items-center"),E(z,"class","mx-auto -mt-6 flex w-72 flex-col items-center md:-mt-8"),E(J,"class","mb-2 text-2xl font-bold"),E(C,"class","grid grid-cols-[auto_1fr] items-center gap-2"),E(V,"class","text-xl"),E(oe,"class","mb-2 text-2xl font-bold"),E(q,"class","grid grid-cols-[auto_1fr] items-center gap-2"),E(yt,"class","text-xl"),E(se,"class","mx-auto mt-4 mb-2 text-3xl font-bold md:col-span-2"),E(le,"class","mx-auto md:col-span-2"),E(T,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(ce,"class","text-2xl"),E(ue,"class","text-xs"),E(wt,"class","md:col-start-2"),E(kt,"class","md:col-start-2"),E(_t,"class","md:col-start-2"),E(me,"class","md:col-start-2"),E(tt,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(fe,"class","-mx-8 bg-green-900/20 py-16 px-8"),E(de,"class","text-2xl font-bold"),E(ve,"class","mb-2 text-sm"),E(N,"class","grid grid-cols-[auto_1fr] items-center gap-2 text-xl"),E(ge,"class","text-2xl font-bold"),E(pe,"class","mb-2 text-sm"),E(W,"class","grid grid-cols-[auto_1fr] items-center gap-2 text-xl"),E(Et,"class","mt-2 text-xl"),E(he,"class","mx-auto mt-6 -mb-4 text-5xl md:col-span-2"),E(be,"class","mx-auto md:col-span-2"),E(nt,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(xe,"class","text-2xl"),E(we,"class","text-sm"),Ko(st.src,ei="https://www.youtube.com/embed/9NZDwZbyD23us")||E(st,"src",ei),E(st,"title","The Pudding"),E(st,"frameborder","0"),E(st,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),E(st,"class","aspect-[2.34] h-60 max-w-full"),st.allowFullscreen=!0,E(ke,"class","md:col-start-2"),E(At,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(ye,"class","-mx-8 bg-green-900/20 py-16 px-8"),E(_e,"class","mt-auto max-w-lg text-xs"),E(a,"class","flex min-h-[calc(100vh-4rem)] w-[100vw] flex-col gap-20 bg-black px-8 pb-6 pt-12 text-green-600 md:gap-36")},m(y,P){j(e,y,P),vt(y,n,P),vt(y,a,P),o(a,r),o(r,i),o(i,s),o(r,l),o(r,f),o(f,m),o(m,u),o(r,h),o(r,I),o(I,A),o(a,G),o(a,z),o(z,Q),Qt[M].m(z,null),o(a,B),o(a,T),o(T,V),o(V,J),o(J,it),o(V,Dt),o(V,C),j(mt,C,null),o(C,zn),o(C,ae),o(ae,Fn),o(ae,Oe),o(Oe,Hn),o(C,jn),j(Lt,C,null),o(C,Yn),o(C,re),o(re,Ne),o(Ne,Wn),o(re,Un),o(C,Gn),j(Mt,C,null),o(C,Bn),o(C,ie),o(ie,Pe),o(Pe,Xn),o(ie,qn),o(T,Kn),o(T,yt),o(yt,oe),o(oe,Zn),o(yt,Qn),o(yt,q),j(Vt,q,null),o(q,Jn),o(q,Te),o(Te,ta),o(q,ea),j(Rt,q,null),o(q,na),o(q,De),o(De,aa),o(q,ra),j(zt,q,null),o(q,ia),o(q,Le),o(Le,oa),o(T,sa),o(T,se),o(se,la),o(T,fa),o(T,le),j(xt,le,null),o(a,ca),o(a,fe),o(fe,tt),o(tt,Ft),o(Ft,ce),o(ce,ua),o(Ft,ma),o(Ft,ue),o(ue,da),o(tt,va),o(tt,wt),o(wt,ga),o(wt,Me),o(Me,pa),o(wt,ha),o(tt,ba),o(tt,kt),o(kt,ya),o(kt,Ve),o(Ve,xa),o(kt,wa),o(tt,ka),o(tt,_t),o(_t,_a),o(_t,Re),o(Re,Ea),o(_t,Ia),o(tt,Aa),o(tt,me),o(me,$a),o(a,Ca),o(a,nt),o(nt,dt),o(dt,de),o(de,Sa),o(dt,Oa),o(dt,ve),o(ve,Na),o(dt,Pa),o(dt,N),j(Ht,N,null),o(N,Ta),o(N,ze),o(ze,Da),o(N,La),j(jt,N,null),o(N,Ma),o(N,Fe),o(Fe,Va),o(N,Ra),j(Yt,N,null),o(N,za),o(N,He),o(He,Fa),o(N,Ha),j(Wt,N,null),o(N,ja),o(N,je),o(je,Ya),o(N,Wa),j(Ut,N,null),o(N,Ua),o(N,Ye),o(Ye,Ga),o(nt,Ba),o(nt,ot),o(ot,ge),o(ge,Xa),o(ot,qa),o(ot,pe),o(pe,Ka),o(ot,Za),o(ot,W),j(Gt,W,null),o(W,Qa),o(W,We),o(We,Ja),o(W,tr),j(Bt,W,null),o(W,er),o(W,Ue),o(Ue,nr),o(W,ar),j(Xt,W,null),o(W,rr),o(W,Ge),o(Ge,ir),o(W,or),j(qt,W,null),o(W,sr),o(W,Be),o(Be,lr),o(ot,fr),o(ot,Et),o(Et,cr),o(Et,Xe),o(Xe,ur),o(Et,mr),o(nt,dr),o(nt,he),j(Kt,he,null),o(nt,vr),o(nt,be),j(It,be,null),o(a,gr),o(a,ye),o(ye,At),o(At,Zt),o(Zt,xe),o(xe,pr),o(Zt,hr),o(Zt,we),o(we,br),o(At,yr),o(At,ke),o(ke,st),o(a,xr),o(a,_e),o(_e,wr),cn=!0},p(y,[P]){let ft=M;M=ai(y),M!==ft&&(Jo(),D(Qt[ft],1,1,()=>{Qt[ft]=null}),Zo(),$=Qt[M],$||($=Qt[M]=ni[M](y),$.c()),L($,1),$.m(z,null));const qe={};P&2&&(qe.$$scope={dirty:P,ctx:y}),xt.$set(qe);const Ke={};P&2&&(Ke.$$scope={dirty:P,ctx:y}),It.$set(Ke)},i(y){cn||(L(e.$$.fragment,y),L($),L(mt.$$.fragment,y),L(Lt.$$.fragment,y),L(Mt.$$.fragment,y),L(Vt.$$.fragment,y),L(Rt.$$.fragment,y),L(zt.$$.fragment,y),L(xt.$$.fragment,y),L(Ht.$$.fragment,y),L(jt.$$.fragment,y),L(Yt.$$.fragment,y),L(Wt.$$.fragment,y),L(Ut.$$.fragment,y),L(Gt.$$.fragment,y),L(Bt.$$.fragment,y),L(Xt.$$.fragment,y),L(qt.$$.fragment,y),L(Kt.$$.fragment,y),L(It.$$.fragment,y),cn=!0)},o(y){D(e.$$.fragment,y),D($),D(mt.$$.fragment,y),D(Lt.$$.fragment,y),D(Mt.$$.fragment,y),D(Vt.$$.fragment,y),D(Rt.$$.fragment,y),D(zt.$$.fragment,y),D(xt.$$.fragment,y),D(Ht.$$.fragment,y),D(jt.$$.fragment,y),D(Yt.$$.fragment,y),D(Wt.$$.fragment,y),D(Ut.$$.fragment,y),D(Gt.$$.fragment,y),D(Bt.$$.fragment,y),D(Xt.$$.fragment,y),D(qt.$$.fragment,y),D(Kt.$$.fragment,y),D(It.$$.fragment,y),cn=!1},d(y){Y(e,y),y&&c(n),y&&c(a),Qt[M].d(),Y(mt),Y(Lt),Y(Mt),Y(Vt),Y(Rt),Y(zt),Y(xt),Y(Ht),Y(jt),Y(Yt),Y(Wt),Y(Ut),Y(Gt),Y(Bt),Y(Xt),Y(qt),Y(Kt),Y(It)}}}function rf(t,e,n){let a=!0;return Qo(()=>ns(as,"installed").subscribe(i=>{i&&n(0,a=!1)})),[a]}class lf extends bo{constructor(e){super(),yo(this,e,rf,af,xo,{})}}export{lf as default};
