import{S as Ja,i as Za,s as te,H as Ce,e as _a,I as Ne,b as ne,A as jn,h as p,k as h,v as Te,a as F,q as _,l as y,m as x,w as Le,c as z,r as S,n as D,F as d,x as Me,f as De,t as Re,y as Fe}from"../../chunks/index-68a7704b.js";function Sa(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function u(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?Sa(Object(a),!0).forEach(function(e){P(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Sa(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function rn(t){return rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rn(t)}function ze(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Oa(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function je(t,n,a){return n&&Oa(t.prototype,n),a&&Oa(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Qn(t,n){return $e(t)||We(t,n)||ae(t,n)||Be()}function Ft(t){return Ye(t)||Ue(t)||ae(t)||Ve()}function Ye(t){if(Array.isArray(t))return Yn(t)}function $e(t){if(Array.isArray(t))return t}function Ue(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function We(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,o=!1,i,s;try{for(a=a.call(t);!(r=(i=a.next()).done)&&(e.push(i.value),!(n&&e.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw s}}return e}}function ae(t,n){if(!!t){if(typeof t=="string")return Yn(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Yn(t,n)}}function Yn(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function Ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pa=function(){},Jn={},ee={},re=null,ie={mark:Pa,measure:Pa};try{typeof window<"u"&&(Jn=window),typeof document<"u"&&(ee=document),typeof MutationObserver<"u"&&(re=MutationObserver),typeof performance<"u"&&(ie=performance)}catch{}var He=Jn.navigator||{},Ca=He.userAgent,Na=Ca===void 0?"":Ca,at=Jn,w=ee,Ta=re,Gt=ie;at.document;var Q=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",oe=~Na.indexOf("MSIE")||~Na.indexOf("Trident/"),Xt,qt,Kt,Qt,Jt,X="___FONT_AWESOME___",$n=16,se="fa",fe="svg-inline--fa",ct="data-fa-i2svg",Un="data-fa-pseudo-element",Ge="data-fa-pseudo-element-pending",Zn="data-prefix",ta="data-icon",La="fontawesome-i2svg",Xe="async",qe=["HTML","HEAD","STYLE","SCRIPT"],le=function(){try{return!0}catch{return!1}}(),k="classic",E="sharp",na=[k,E];function zt(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[k]}})}var Tt=zt((Xt={},P(Xt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),P(Xt,E,{fa:"solid",fass:"solid","fa-solid":"solid"}),Xt)),Lt=zt((qt={},P(qt,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(qt,E,{solid:"fass"}),qt)),Mt=zt((Kt={},P(Kt,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(Kt,E,{fass:"fa-solid"}),Kt)),Ke=zt((Qt={},P(Qt,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(Qt,E,{"fa-solid":"fass"}),Qt)),Qe=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ce="fa-layers-text",Je=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ze=zt((Jt={},P(Jt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Jt,E,{900:"fass"}),Jt)),ue=[1,2,3,4,5,6,7,8,9,10],tr=ue.concat([11,12,13,14,15,16,17,18,19,20]),nr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dt=new Set;Object.keys(Lt[k]).map(Dt.add.bind(Dt));Object.keys(Lt[E]).map(Dt.add.bind(Dt));var ar=[].concat(na,Ft(Dt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(ue.map(function(t){return"".concat(t,"x")})).concat(tr.map(function(t){return"w-".concat(t)})),Ct=at.FontAwesomeConfig||{};function er(t){var n=w.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function rr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var ir=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ir.forEach(function(t){var n=Qn(t,2),a=n[0],e=n[1],r=rr(er(a));r!=null&&(Ct[e]=r)})}var me={styleDefault:"solid",familyDefault:"classic",cssPrefix:se,replacementClass:fe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ct.familyPrefix&&(Ct.cssPrefix=Ct.familyPrefix);var kt=u(u({},me),Ct);kt.autoReplaceSvg||(kt.observeMutations=!1);var v={};Object.keys(me).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(a){kt[t]=a,Nt.forEach(function(e){return e(v)})},get:function(){return kt[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){kt.cssPrefix=n,Nt.forEach(function(a){return a(v)})},get:function(){return kt.cssPrefix}});at.FontAwesomeConfig=v;var Nt=[];function or(t){return Nt.push(t),function(){Nt.splice(Nt.indexOf(t),1)}}var nt=$n,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sr(t){if(!(!t||!Q)){var n=w.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=w.head.childNodes,e=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}return w.head.insertBefore(n,e),t}}var fr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rt(){for(var t=12,n="";t-- >0;)n+=fr[Math.random()*62|0];return n}function wt(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function aa(t){return t.classList?wt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function de(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lr(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(de(t[a]),'" ')},"").trim()}function fn(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function ea(t){return t.size!==B.size||t.x!==B.x||t.y!==B.y||t.rotate!==B.rotate||t.flipX||t.flipY}function cr(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ur(t){var n=t.transform,a=t.width,e=a===void 0?$n:a,r=t.height,o=r===void 0?$n:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&oe?f+="translate(".concat(n.x/nt-e/2,"em, ").concat(n.y/nt-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/nt,"em), calc(-50% + ").concat(n.y/nt,"em)) "):f+="translate(".concat(n.x/nt,"em, ").concat(n.y/nt,"em) "),f+="scale(".concat(n.size/nt*(n.flipX?-1:1),", ").concat(n.size/nt*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var mr=`:root, :host {
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
}`;function ve(){var t=se,n=fe,a=v.cssPrefix,e=v.replacementClass,r=mr;if(a!==t||e!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var Ma=!1;function Dn(){v.autoAddCss&&!Ma&&(sr(ve()),Ma=!0)}var dr={mixout:function(){return{dom:{css:ve,insertCss:Dn}}},hooks:function(){return{beforeDOMElementCreation:function(){Dn()},beforeI2svg:function(){Dn()}}}},q=at||{};q[X]||(q[X]={});q[X].styles||(q[X].styles={});q[X].hooks||(q[X].hooks={});q[X].shims||(q[X].shims=[]);var W=q[X],ge=[],vr=function t(){w.removeEventListener("DOMContentLoaded",t),on=1,ge.map(function(n){return n()})},on=!1;Q&&(on=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),on||w.addEventListener("DOMContentLoaded",vr));function gr(t){!Q||(on?setTimeout(t,0):ge.push(t))}function jt(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?de(t):"<".concat(n," ").concat(lr(e),">").concat(o.map(jt).join(""),"</").concat(n,">")}function Da(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var br=function(n,a){return function(e,r,o,i){return n.call(a,e,r,o,i)}},Rn=function(n,a,e,r){var o=Object.keys(n),i=o.length,s=r!==void 0?br(a,r):a,f,c,l;for(e===void 0?(f=1,l=n[o[0]]):(f=0,l=e);f<i;f++)c=o[f],l=s(l,n[c],c,n);return l};function pr(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var o=t.charCodeAt(a++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function Wn(t){var n=pr(t);return n.length===1?n[0].toString(16):null}function hr(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function Ra(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Vn(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,o=Ra(n);typeof W.hooks.addPack=="function"&&!r?W.hooks.addPack(t,Ra(n)):W.styles[t]=u(u({},W.styles[t]||{}),o),t==="fas"&&Vn("fa",n)}var Zt,tn,nn,ht=W.styles,yr=W.shims,xr=(Zt={},P(Zt,k,Object.values(Mt[k])),P(Zt,E,Object.values(Mt[E])),Zt),ra=null,be={},pe={},he={},ye={},xe={},kr=(tn={},P(tn,k,Object.keys(Tt[k])),P(tn,E,Object.keys(Tt[E])),tn);function wr(t){return~ar.indexOf(t)}function Ar(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!wr(r)?r:null}var ke=function(){var n=function(o){return Rn(ht,function(i,s,f){return i[f]=Rn(s,o,{}),i},{})};be=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),pe=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),xe=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var a="far"in ht||v.autoFetchSvg,e=Rn(yr,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});he=e.names,ye=e.unicodes,ra=ln(v.styleDefault,{family:v.familyDefault})};or(function(t){ra=ln(t.styleDefault,{family:v.familyDefault})});ke();function ia(t,n){return(be[t]||{})[n]}function Er(t,n){return(pe[t]||{})[n]}function lt(t,n){return(xe[t]||{})[n]}function we(t){return he[t]||{prefix:null,iconName:null}}function Ir(t){var n=ye[t],a=ia("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function et(){return ra}var oa=function(){return{prefix:null,iconName:null,rest:[]}};function ln(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?k:a,r=Tt[e][t],o=Lt[e][t]||Lt[e][r],i=t in W.styles?t:null;return o||i||null}var Fa=(nn={},P(nn,k,Object.keys(Mt[k])),P(nn,E,Object.keys(Mt[E])),nn);function cn(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,o=(n={},P(n,k,"".concat(v.cssPrefix,"-").concat(k)),P(n,E,"".concat(v.cssPrefix,"-").concat(E)),n),i=null,s=k;(t.includes(o[k])||t.some(function(c){return Fa[k].includes(c)}))&&(s=k),(t.includes(o[E])||t.some(function(c){return Fa[E].includes(c)}))&&(s=E);var f=t.reduce(function(c,l){var m=Ar(v.cssPrefix,l);if(ht[l]?(l=xr[s].includes(l)?Ke[s][l]:l,i=l,c.prefix=l):kr[s].indexOf(l)>-1?(i=l,c.prefix=ln(l,{family:s})):m?c.iconName=m:l!==v.replacementClass&&l!==o[k]&&l!==o[E]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=i==="fa"?we(c.iconName):{},b=lt(c.prefix,c.iconName);g.prefix&&(i=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ht.far&&ht.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},oa());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===E&&(ht.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=lt(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=et()||"fas"),f}var _r=function(){function t(){ze(this,t),this.definitions={}}return je(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),i[s]),Vn(s,i[s]);var f=Mt[k][s];f&&Vn(f,i[s]),ke()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(a[s][m]=c)}),a[s][f]=c}),a}}]),t}(),za=[],yt={},xt={},Sr=Object.keys(xt);function Or(t,n){var a=n.mixoutsTo;return za=t,yt={},Object.keys(xt).forEach(function(e){Sr.indexOf(e)===-1&&delete xt[e]}),za.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),rn(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(i){yt[i]||(yt[i]=[]),yt[i].push(o[i])})}e.provides&&e.provides(xt)}),a}function Bn(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var o=yt[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(e))}),n}function ut(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=yt[t]||[];r.forEach(function(o){o.apply(null,a)})}function K(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return xt[t]?xt[t].apply(null,n):void 0}function Hn(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||et();if(!!n)return n=lt(a,n)||n,Da(Ae.definitions,a,n)||Da(W.styles,a,n)}var Ae=new _r,Pr=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,ut("noAuto")},Cr={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(ut("beforeI2svg",n),K("pseudoElements2svg",n),K("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,gr(function(){Tr({autoReplaceSvgRoot:a}),ut("watch",n)})}},Nr={icon:function(n){if(n===null)return null;if(rn(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:lt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=ln(n[0]);return{prefix:e,iconName:lt(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(Qe))){var r=cn(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||et(),iconName:lt(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=et();return{prefix:o,iconName:lt(o,n)||n}}}},j={noAuto:Pr,config:v,dom:Cr,parse:Nr,library:Ae,findIconDefinition:Hn,toHtml:jt},Tr=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?w:a;(Object.keys(W.styles).length>0||v.autoFetchSvg)&&Q&&v.autoReplaceSvg&&j.dom.i2svg({node:e})};function un(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return jt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Q){var e=w.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Lr(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(ea(i)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=fn(u(u({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Mr(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:e}]}]}function sa(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,g=t.watchable,b=g===void 0?!1:g,A=e.found?e:a,T=A.width,L=A.height,C=r==="fak",O=[v.replacementClass,o?"".concat(v.cssPrefix,"-").concat(o):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),I={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(L)})},R=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/L*16*.0625,"em")}:{};b&&(I.attributes[ct]=""),f&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(l||Rt())},children:[f]}),delete I.attributes.title);var N=u(u({},I),{},{prefix:r,iconName:o,main:a,mask:e,maskId:c,transform:i,symbol:s,styles:u(u({},R),m.styles)}),M=e.found&&a.found?K("generateAbstractMask",N)||{children:[],attributes:{}}:K("generateAbstractIcon",N)||{children:[],attributes:{}},U=M.children,H=M.attributes;return N.children=U,N.attributes=H,s?Mr(N):Lr(N)}function ja(t){var n=t.content,a=t.width,e=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[ct]="");var l=u({},i.styles);ea(r)&&(l.transform=ur({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var m=fn(l);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Dr(t){var n=t.content,a=t.title,e=t.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),o=fn(e.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var Fn=W.styles;function Gn(t){var n=t[0],a=t[1],e=t.slice(4),r=Qn(e,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:a,icon:i}}var Rr={found:!1,width:512,height:512};function Fr(t,n){!le&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Xn(t,n){var a=n;return n==="fa"&&v.styleDefault!==null&&(n=et()),new Promise(function(e,r){if(K("missingIconAbstract"),a==="fa"){var o=we(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Fn[n]&&Fn[n][t]){var i=Fn[n][t];return e(Gn(i))}Fr(t,n),e(u(u({},Rr),{},{icon:v.showMissingIcons&&t?K("missingIconAbstract")||{}:{}}))})}var Ya=function(){},qn=v.measurePerformance&&Gt&&Gt.mark&&Gt.measure?Gt:{mark:Ya,measure:Ya},Pt='FA "6.2.0"',zr=function(n){return qn.mark("".concat(Pt," ").concat(n," begins")),function(){return Ee(n)}},Ee=function(n){qn.mark("".concat(Pt," ").concat(n," ends")),qn.measure("".concat(Pt," ").concat(n),"".concat(Pt," ").concat(n," begins"),"".concat(Pt," ").concat(n," ends"))},fa={begin:zr,end:Ee},an=function(){};function $a(t){var n=t.getAttribute?t.getAttribute(ct):null;return typeof n=="string"}function jr(t){var n=t.getAttribute?t.getAttribute(Zn):null,a=t.getAttribute?t.getAttribute(ta):null;return n&&a}function Yr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function $r(){if(v.autoReplaceSvg===!0)return en.replace;var t=en[v.autoReplaceSvg];return t||en.replace}function Ur(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Wr(t){return w.createElement(t)}function Ie(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?Ur:Wr:a;if(typeof t=="string")return w.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Ie(i,{ceFn:e}))}),r}function Vr(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var en={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(Ie(r),a)}),a.getAttribute(ct)===null&&v.keepOriginalSource){var e=w.createComment(Vr(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~aa(a).indexOf(v.replacementClass))return en.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=e.map(function(s){return jt(s)}).join(`
`);a.setAttribute(ct,""),a.innerHTML=i}};function Ua(t){t()}function _e(t,n){var a=typeof n=="function"?n:an;if(t.length===0)a();else{var e=Ua;v.mutateApproach===Xe&&(e=at.requestAnimationFrame||Ua),e(function(){var r=$r(),o=fa.begin("mutate");t.map(r),o(),a()})}}var la=!1;function Se(){la=!0}function Kn(){la=!1}var sn=null;function Wa(t){if(!!Ta&&!!v.observeMutations){var n=t.treeCallback,a=n===void 0?an:n,e=t.nodeCallback,r=e===void 0?an:e,o=t.pseudoElementsCallback,i=o===void 0?an:o,s=t.observeMutationsRoot,f=s===void 0?w:s;sn=new Ta(function(c){if(!la){var l=et();wt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$a(m.addedNodes[0])&&(v.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&$a(m.target)&&~nr.indexOf(m.attributeName))if(m.attributeName==="class"&&jr(m.target)){var g=cn(aa(m.target)),b=g.prefix,A=g.iconName;m.target.setAttribute(Zn,b||l),A&&m.target.setAttribute(ta,A)}else Yr(m.target)&&r(m.target)})}}),Q&&sn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Br(){!sn||sn.disconnect()}function Hr(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),a}function Gr(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=cn(aa(t));return r.prefix||(r.prefix=et()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Er(r.prefix,t.innerText)||ia(r.prefix,Wn(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Xr(t){var n=wt(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return v.autoA11y&&(a?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||Rt()):(n["aria-hidden"]="true",n.focusable="false")),n}function qr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Va(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Gr(t),e=a.iconName,r=a.prefix,o=a.rest,i=Xr(t),s=Bn("parseNodeAttributes",{},t),f=n.styleParser?Hr(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Kr=W.styles;function Oe(t){var n=v.autoReplaceSvg==="nest"?Va(t,{styleParser:!1}):Va(t);return~n.extra.classes.indexOf(ce)?K("generateLayersText",t,n):K("generateSvgReplacementMutation",t,n)}var rt=new Set;na.map(function(t){rt.add("fa-".concat(t))});Object.keys(Tt[k]).map(rt.add.bind(rt));Object.keys(Tt[E]).map(rt.add.bind(rt));rt=Ft(rt);function Ba(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var a=w.documentElement.classList,e=function(m){return a.add("".concat(La,"-").concat(m))},r=function(m){return a.remove("".concat(La,"-").concat(m))},o=v.autoFetchSvg?rt:na.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Kr));o.includes("fa")||o.push("fa");var i=[".".concat(ce,":not([").concat(ct,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(ct,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=wt(t.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=fa.begin("onTree"),c=s.reduce(function(l,m){try{var g=Oe(m);g&&l.push(g)}catch(b){le||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(g){_e(g,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(g){f(),m(g)})})}function Qr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Oe(t).then(function(a){a&&_e([a],n)})}function Jr(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Hn(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Hn(r||{})),t(e,u(u({},a),{},{mask:r}))}}var Zr=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?B:e,o=a.symbol,i=o===void 0?!1:o,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,m=a.title,g=m===void 0?null:m,b=a.titleId,A=b===void 0?null:b,T=a.classes,L=T===void 0?[]:T,C=a.attributes,O=C===void 0?{}:C,I=a.styles,R=I===void 0?{}:I;if(!!n){var N=n.prefix,M=n.iconName,U=n.icon;return un(u({type:"icon"},n),function(){return ut("beforeDOMElementCreation",{iconDefinition:n,params:a}),v.autoA11y&&(g?O["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(A||Rt()):(O["aria-hidden"]="true",O.focusable="false")),sa({icons:{main:Gn(U),mask:f?Gn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:M,transform:u(u({},B),r),symbol:i,title:g,maskId:l,titleId:A,extra:{attributes:O,styles:R,classes:L}})})}},ti={mixout:function(){return{icon:Jr(Zr)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ba,a.nodeCallback=Qr,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?w:e,o=a.callback,i=o===void 0?function(){}:o;return Ba(r,i)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,o=e.title,i=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,m=e.maskId,g=e.extra;return new Promise(function(b,A){Promise.all([Xn(r,s),l.iconName?Xn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var L=Qn(T,2),C=L[0],O=L[1];b([a,sa({icons:{main:C,mask:O},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:o,titleId:i,extra:g,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,f=fn(s);f.length>0&&(r.style=f);var c;return ea(i)&&(c=K("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),e.push(c||o.icon),{children:e,attributes:r}}}},ni={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,o=r===void 0?[]:r;return un({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(Ft(o)).join(" ")},children:i}]})}}}},ai={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,o=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,f=e.attributes,c=f===void 0?{}:f,l=e.styles,m=l===void 0?{}:l;return un({type:"counter",content:a},function(){return ut("beforeDOMElementCreation",{content:a,params:e}),Dr({content:a.toString(),title:o,extra:{attributes:c,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(Ft(s))}})})}}}},ei={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?B:r,i=e.title,s=i===void 0?null:i,f=e.classes,c=f===void 0?[]:f,l=e.attributes,m=l===void 0?{}:l,g=e.styles,b=g===void 0?{}:g;return un({type:"text",content:a},function(){return ut("beforeDOMElementCreation",{content:a,params:e}),ja({content:a,transform:u(u({},B),o),title:s,extra:{attributes:m,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(Ft(c))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,o=e.transform,i=e.extra,s=null,f=null;if(oe){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,ja({content:a.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},ri=new RegExp('"',"ug"),Ha=[1105920,1112319];function ii(t){var n=t.replace(ri,""),a=hr(n,0),e=a>=Ha[0]&&a<=Ha[1],r=n.length===2?n[0]===n[1]:!1;return{value:Wn(r?n[0]:n),isSecondary:e||r}}function Ga(t,n){var a="".concat(Ge).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var o=wt(t.children),i=o.filter(function(U){return U.getAttribute(Un)===n})[0],s=at.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Je),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),e();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?E:k,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Lt[g][f[2].toLowerCase()]:Ze[g][c],A=ii(m),T=A.value,L=A.isSecondary,C=f[0].startsWith("FontAwesome"),O=ia(b,T),I=O;if(C){var R=Ir(T);R.iconName&&R.prefix&&(O=R.iconName,b=R.prefix)}if(O&&!L&&(!i||i.getAttribute(Zn)!==b||i.getAttribute(ta)!==I)){t.setAttribute(a,I),i&&t.removeChild(i);var N=qr(),M=N.extra;M.attributes[Un]=n,Xn(O,b).then(function(U){var H=sa(u(u({},N),{},{icons:{main:U,mask:oa()},prefix:b,iconName:I,extra:M,watchable:!0})),Y=w.createElement("svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=H.map(function(At){return jt(At)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function oi(t){return Promise.all([Ga(t,"::before"),Ga(t,"::after")])}function si(t){return t.parentNode!==document.head&&!~qe.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Un)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Xa(t){if(!!Q)return new Promise(function(n,a){var e=wt(t.querySelectorAll("*")).filter(si).map(oi),r=fa.begin("searchPseudoElements");Se(),Promise.all(e).then(function(){r(),Kn(),n()}).catch(function(){r(),Kn(),a()})})}var fi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Xa,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?w:e;v.searchPseudoElements&&Xa(r)}}},qa=!1,li={mixout:function(){return{dom:{unwatch:function(){Se(),qa=!0}}}},hooks:function(){return{bootstrap:function(){Wa(Bn("mutationObserverCallbacks",{}))},noAuto:function(){Br()},watch:function(a){var e=a.observeMutationsRoot;qa?Kn():Wa(Bn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ka=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},ci={mixout:function(){return{parse:{transform:function(a){return Ka(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=Ka(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(i/2*-1," -256)")},b={outer:s,inner:m,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),b.path)}]}]}}}},zn={x:0,y:0,width:"100%",height:"100%"};function Qa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function ui(t){return t.tag==="g"?t.children:[t]}var mi={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),o=r?cn(r.split(" ").map(function(i){return i.trim()})):oa();return o.prefix||(o.prefix=et()),a.mask=o,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,f=a.transform,c=o.width,l=o.icon,m=i.width,g=i.icon,b=cr({transform:f,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:u(u({},zn),{},{fill:"white"})},T=l.children?{children:l.children.map(Qa)}:{},L={tag:"g",attributes:u({},b.inner),children:[Qa(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},T))]},C={tag:"g",attributes:u({},b.outer),children:[L]},O="mask-".concat(s||Rt()),I="clip-".concat(s||Rt()),R={tag:"mask",attributes:u(u({},zn),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,C]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:ui(g)},R]};return e.push(N,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(O,")")},zn)}),{children:e,attributes:r}}}},di={provides:function(n){var a=!1;at.matchMedia&&(a=at.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},vi={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},gi=[dr,ti,ni,ai,ei,fi,li,ci,mi,di,vi];Or(gi,{mixoutsTo:j});j.noAuto;var bi=j.config,pi=j.library;j.dom;j.parse;j.findIconDefinition;j.toHtml;var hi=j.icon;j.layer;j.text;j.counter;function Pe(t){var n,a,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(a=Pe(t[n]))&&(e&&(e+=" "),e+=a);else for(n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function yi(){for(var t,n,a=0,e="";a<arguments.length;)(t=arguments[a++])&&(n=Pe(t))&&(e&&(e+=" "),e+=n);return e}function xi(t){let n,a;return{c(){n=new Ce(!1),a=_a(),this.h()},l(e){n=Ne(e,!1),a=_a(),this.h()},h(){n.a=a},m(e,r){n.m(t[0],e,r),ne(e,a,r)},p(e,[r]){r&1&&n.p(e[0])},i:jn,o:jn,d(e){e&&p(a),e&&n.d()}}}bi.autoAddCss=!1;function ki(t,n,a){let e,{icon:r}=n,{class:o=""}=n,{fixedWidth:i=!1}=n;return t.$$set=s=>{"icon"in s&&a(1,r=s.icon),"class"in s&&a(2,o=s.class),"fixedWidth"in s&&a(3,i=s.fixedWidth)},t.$$.update=()=>{var s,f;t.$$.dirty&2&&pi.add(r),t.$$.dirty&14&&a(0,e=(f=(s=hi({prefix:"fas",iconName:r.iconName},{classes:yi(o,i?"fa-fw":void 0)}))==null?void 0:s.html)!=null?f:"")},[e,r,o,i]}class wi extends Ja{constructor(n){super(),Za(this,n,ki,xi,te,{icon:1,class:2,fixedWidth:3})}}var Ai={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"]};function Ei(t){let n,a,e,r,o,i,s,f,c,l,m,g,b,A,T,L,C,O,I,R,N,M,U,H,Y,At,mn,it,dn,Et,vn,gn,bn,$,mt,pn,hn,It,yn,xn,_t,kn,wn,St,An,En,dt,J,ot,vt,In,_n,gt,Sn,On,st,Pn,Ot,Cn,Nn,Tn,bt,Ln,Yt;return r=new wi({props:{icon:Ai}}),{c(){n=h("main"),a=h("div"),e=h("div"),Te(r.$$.fragment),o=F(),i=h("div"),s=_("Want to be on top? Get"),f=F(),c=h("div"),l=_("On the Box"),m=F(),g=h("div"),b=h("div"),A=h("div"),T=_("What can The Box do for you?"),L=F(),C=h("div"),O=_("> Perform your "),I=h("i"),R=_("best"),N=F(),M=h("div"),U=_("> "),H=h("i"),Y=_("Impress"),At=_(" your peers"),mn=F(),it=h("div"),dn=_("> "),Et=h("i"),vn=_("Eliminate"),gn=_(" the competition"),bn=F(),$=h("div"),mt=h("div"),pn=_("The Box is unbeatable"),hn=F(),It=h("div"),yn=_("> Lower RAM usage than LmaoBox"),xn=F(),_t=h("div"),kn=_("> Better accuracy than Cathook"),wn=F(),St=h("div"),An=_("> Undetectable by VAC"),En=F(),dt=h("div"),J=h("div"),ot=h("div"),vt=h("div"),In=_("Testimonials"),_n=F(),gt=h("div"),Sn=_("Identities hidden for privacy purposes"),On=F(),st=h("div"),Pn=_('"I was nervous heading to LAN, but with '),Ot=h("strong"),Cn=_("On The Box"),Nn=_(', I was able to perform better than ever." - **ile'),Tn=F(),bt=h("div"),Ln=_(`This site is a work of satire that presents presonal training as if it
        were cheating software. No cheats are provided by On the Box.`),this.h()},l(G){n=y(G,"MAIN",{class:!0});var V=x(n);a=y(V,"DIV",{class:!0});var pt=x(a);e=y(pt,"DIV",{class:!0});var ca=x(e);Le(r.$$.fragment,ca),ca.forEach(p),o=z(pt),i=y(pt,"DIV",{class:!0});var ua=x(i);s=S(ua,"Want to be on top? Get"),ua.forEach(p),f=z(pt),c=y(pt,"DIV",{class:!0});var ma=x(c);l=S(ma,"On the Box"),ma.forEach(p),pt.forEach(p),m=z(V),g=y(V,"DIV",{class:!0});var $t=x(g);b=y($t,"DIV",{class:!0});var Z=x(b);A=y(Z,"DIV",{class:!0});var da=x(A);T=S(da,"What can The Box do for you?"),da.forEach(p),L=z(Z),C=y(Z,"DIV",{});var Mn=x(C);O=S(Mn,"> Perform your "),I=y(Mn,"I",{});var va=x(I);R=S(va,"best"),va.forEach(p),Mn.forEach(p),N=z(Z),M=y(Z,"DIV",{});var Ut=x(M);U=S(Ut,"> "),H=y(Ut,"I",{});var ga=x(H);Y=S(ga,"Impress"),ga.forEach(p),At=S(Ut," your peers"),Ut.forEach(p),mn=z(Z),it=y(Z,"DIV",{});var Wt=x(it);dn=S(Wt,"> "),Et=y(Wt,"I",{});var ba=x(Et);vn=S(ba,"Eliminate"),ba.forEach(p),gn=S(Wt," the competition"),Wt.forEach(p),Z.forEach(p),bn=z($t),$=y($t,"DIV",{class:!0});var tt=x($);mt=y(tt,"DIV",{class:!0});var pa=x(mt);pn=S(pa,"The Box is unbeatable"),pa.forEach(p),hn=z(tt),It=y(tt,"DIV",{});var ha=x(It);yn=S(ha,"> Lower RAM usage than LmaoBox"),ha.forEach(p),xn=z(tt),_t=y(tt,"DIV",{});var ya=x(_t);kn=S(ya,"> Better accuracy than Cathook"),ya.forEach(p),wn=z(tt),St=y(tt,"DIV",{});var xa=x(St);An=S(xa,"> Undetectable by VAC"),xa.forEach(p),tt.forEach(p),$t.forEach(p),En=z(V),dt=y(V,"DIV",{class:!0});var ka=x(dt);J=y(ka,"DIV",{class:!0});var Vt=x(J);ot=y(Vt,"DIV",{});var Bt=x(ot);vt=y(Bt,"DIV",{class:!0});var wa=x(vt);In=S(wa,"Testimonials"),wa.forEach(p),_n=z(Bt),gt=y(Bt,"DIV",{class:!0});var Aa=x(gt);Sn=S(Aa,"Identities hidden for privacy purposes"),Aa.forEach(p),Bt.forEach(p),On=z(Vt),st=y(Vt,"DIV",{});var Ht=x(st);Pn=S(Ht,'"I was nervous heading to LAN, but with '),Ot=y(Ht,"STRONG",{});var Ea=x(Ot);Cn=S(Ea,"On The Box"),Ea.forEach(p),Nn=S(Ht,', I was able to perform better than ever." - **ile'),Ht.forEach(p),Vt.forEach(p),ka.forEach(p),Tn=z(V),bt=y(V,"DIV",{class:!0});var Ia=x(bt);Ln=S(Ia,`This site is a work of satire that presents presonal training as if it
        were cheating software. No cheats are provided by On the Box.`),Ia.forEach(p),V.forEach(p),this.h()},h(){D(e,"class","text-6xl"),D(i,"class","text-gl"),D(c,"class","text-4xl font-bold"),D(a,"class","flex flex-col items-center"),D(A,"class","text-2xl font-bold"),D(b,"class","text-xl"),D(mt,"class","text-2xl font-bold"),D($,"class","text-xl"),D(g,"class","grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center"),D(vt,"class","text-2xl"),D(gt,"class","text-xs"),D(J,"class","grid items-center gap-8 sm:grid-cols-1 md:grid-cols-2 md:place-items-center"),D(dt,"class","-mx-8 bg-green-900/20 py-4 px-8"),D(bt,"class","mt-auto max-w-lg text-sm"),D(n,"class","flex min-h-[100vh] w-[100vw] flex-col gap-8 bg-black px-8 py-12 text-green-600")},m(G,V){ne(G,n,V),d(n,a),d(a,e),Me(r,e,null),d(a,o),d(a,i),d(i,s),d(a,f),d(a,c),d(c,l),d(n,m),d(n,g),d(g,b),d(b,A),d(A,T),d(b,L),d(b,C),d(C,O),d(C,I),d(I,R),d(b,N),d(b,M),d(M,U),d(M,H),d(H,Y),d(M,At),d(b,mn),d(b,it),d(it,dn),d(it,Et),d(Et,vn),d(it,gn),d(g,bn),d(g,$),d($,mt),d(mt,pn),d($,hn),d($,It),d(It,yn),d($,xn),d($,_t),d(_t,kn),d($,wn),d($,St),d(St,An),d(n,En),d(n,dt),d(dt,J),d(J,ot),d(ot,vt),d(vt,In),d(ot,_n),d(ot,gt),d(gt,Sn),d(J,On),d(J,st),d(st,Pn),d(st,Ot),d(Ot,Cn),d(st,Nn),d(n,Tn),d(n,bt),d(bt,Ln),Yt=!0},p:jn,i(G){Yt||(De(r.$$.fragment,G),Yt=!0)},o(G){Re(r.$$.fragment,G),Yt=!1},d(G){G&&p(n),Fe(r)}}}class _i extends Ja{constructor(n){super(),Za(this,n,null,Ei,te,{})}}export{_i as default};
