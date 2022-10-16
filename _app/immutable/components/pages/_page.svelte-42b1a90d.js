import{S as La,i as Va,s as Ra,K as Fo,e as Fi,L as jo,b as j,A as Tt,h as c,k as d,l as v,m as g,M as Or,n as _,I as s,E as Ho,q as k,a as y,v as P,r as $,c as x,w as D,x as M,F as Yo,G as Wo,H as Uo,u as Go,f as O,t as N,y as L,d as Bo,o as qo,g as Xo}from"../../chunks/index-f05389bd.js";import{c as Ko,H as Qo,B as Ta,l as Jo,i as Zo}from"../../chunks/Header-e7d33050.js";function ji(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ji(Object(a),!0).forEach(function(n){K(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ji(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Pa(t){return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pa(t)}function ts(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hi(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function es(t,e,a){return e&&Hi(t.prototype,e),a&&Hi(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function K(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Hr(t,e){return ns(t)||is(t,e)||mo(t,e)||ss()}function ma(t){return as(t)||rs(t)||mo(t)||os()}function as(t){if(Array.isArray(t))return Nr(t)}function ns(t){if(Array.isArray(t))return t}function rs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function is(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,l;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(n.push(o.value),!(e&&n.length===e));r=!0);}catch(f){i=!0,l=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw l}}return n}}function mo(t,e){if(!!t){if(typeof t=="string")return Nr(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Nr(t,e)}}function Nr(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function os(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ss(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Yi=function(){},Yr={},vo={},go=null,po={mark:Yi,measure:Yi};try{typeof window<"u"&&(Yr=window),typeof document<"u"&&(vo=document),typeof MutationObserver<"u"&&(go=MutationObserver),typeof performance<"u"&&(po=performance)}catch{}var ls=Yr.navigator||{},Wi=ls.userAgent,Ui=Wi===void 0?"":Wi,Pt=Yr,z=vo,Gi=go,wa=po;Pt.document;var xt=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",ho=~Ui.indexOf("MSIE")||~Ui.indexOf("Trident/"),ka,$a,_a,Ea,Ia,ht="___FONT_AWESOME___",Tr=16,bo="fa",yo="svg-inline--fa",re="data-fa-i2svg",Pr="data-fa-pseudo-element",fs="data-fa-pseudo-element-pending",Wr="data-prefix",Ur="data-icon",Bi="fontawesome-i2svg",cs="async",us=["HTML","HEAD","STYLE","SCRIPT"],xo=function(){try{return!0}catch{return!1}}(),R="classic",G="sharp",Gr=[R,G];function da(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[R]}})}var sa=da((ka={},K(ka,R,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),K(ka,G,{fa:"solid",fass:"solid","fa-solid":"solid"}),ka)),la=da(($a={},K($a,R,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),K($a,G,{solid:"fass"}),$a)),fa=da((_a={},K(_a,R,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),K(_a,G,{fass:"fa-solid"}),_a)),ms=da((Ea={},K(Ea,R,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),K(Ea,G,{"fa-solid":"fass"}),Ea)),ds=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,wo="fa-layers-text",vs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gs=da((Ia={},K(Ia,R,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),K(Ia,G,{900:"fass"}),Ia)),ko=[1,2,3,4,5,6,7,8,9,10],ps=ko.concat([11,12,13,14,15,16,17,18,19,20]),hs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ae={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ca=new Set;Object.keys(la[R]).map(ca.add.bind(ca));Object.keys(la[G]).map(ca.add.bind(ca));var bs=[].concat(Gr,ma(ca),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ae.GROUP,ae.SWAP_OPACITY,ae.PRIMARY,ae.SECONDARY]).concat(ko.map(function(t){return"".concat(t,"x")})).concat(ps.map(function(t){return"w-".concat(t)})),ia=Pt.FontAwesomeConfig||{};function ys(t){var e=z.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xs(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(z&&typeof z.querySelector=="function"){var ws=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ws.forEach(function(t){var e=Hr(t,2),a=e[0],n=e[1],r=xs(ys(a));r!=null&&(ia[n]=r)})}var $o={styleDefault:"solid",familyDefault:"classic",cssPrefix:bo,replacementClass:yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ia.familyPrefix&&(ia.cssPrefix=ia.familyPrefix);var De=h(h({},$o),ia);De.autoReplaceSvg||(De.observeMutations=!1);var w={};Object.keys($o).forEach(function(t){Object.defineProperty(w,t,{enumerable:!0,set:function(a){De[t]=a,oa.forEach(function(n){return n(w)})},get:function(){return De[t]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(e){De.cssPrefix=e,oa.forEach(function(a){return a(w)})},get:function(){return De.cssPrefix}});Pt.FontAwesomeConfig=w;var oa=[];function ks(t){return oa.push(t),function(){oa.splice(oa.indexOf(t),1)}}var Nt=Tr,dt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $s(t){if(!(!t||!xt)){var e=z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=z.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return z.head.insertBefore(e,n),t}}var _s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ua(){for(var t=12,e="";t-- >0;)e+=_s[Math.random()*62|0];return e}function Me(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Br(t){return t.classList?Me(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function _o(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Es(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(_o(t[a]),'" ')},"").trim()}function za(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function qr(t){return t.size!==dt.size||t.x!==dt.x||t.y!==dt.y||t.rotate!==dt.rotate||t.flipX||t.flipY}function Is(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(l)},m={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:f,path:m}}function As(t){var e=t.transform,a=t.width,n=a===void 0?Tr:a,r=t.height,i=r===void 0?Tr:r,o=t.startCentered,l=o===void 0?!1:o,f="";return l&&ho?f+="translate(".concat(e.x/Nt-n/2,"em, ").concat(e.y/Nt-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(e.x/Nt,"em), calc(-50% + ").concat(e.y/Nt,"em)) "):f+="translate(".concat(e.x/Nt,"em, ").concat(e.y/Nt,"em) "),f+="scale(".concat(e.size/Nt*(e.flipX?-1:1),", ").concat(e.size/Nt*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Cs=`:root, :host {
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
}`;function Eo(){var t=bo,e=yo,a=w.cssPrefix,n=w.replacementClass,r=Cs;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(n))}return r}var qi=!1;function Er(){w.autoAddCss&&!qi&&($s(Eo()),qi=!0)}var Ss={mixout:function(){return{dom:{css:Eo,insertCss:Er}}},hooks:function(){return{beforeDOMElementCreation:function(){Er()},beforeI2svg:function(){Er()}}}},bt=Pt||{};bt[ht]||(bt[ht]={});bt[ht].styles||(bt[ht].styles={});bt[ht].hooks||(bt[ht].hooks={});bt[ht].shims||(bt[ht].shims=[]);var ut=bt[ht],Io=[],Os=function t(){z.removeEventListener("DOMContentLoaded",t),Da=1,Io.map(function(e){return e()})},Da=!1;xt&&(Da=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Da||z.addEventListener("DOMContentLoaded",Os));function Ns(t){!xt||(Da?setTimeout(t,0):Io.push(t))}function va(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?_o(t):"<".concat(e," ").concat(Es(n),">").concat(i.map(va).join(""),"</").concat(e,">")}function Xi(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var Ts=function(e,a){return function(n,r,i,o){return e.call(a,n,r,i,o)}},Ir=function(e,a,n,r){var i=Object.keys(e),o=i.length,l=r!==void 0?Ts(a,r):a,f,m,u;for(n===void 0?(f=1,u=e[i[0]]):(f=0,u=n);f<o;f++)m=i[f],u=l(u,e[m],m,e);return u};function Ps(t){for(var e=[],a=0,n=t.length;a<n;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=t.charCodeAt(a++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function Dr(t){var e=Ps(t);return e.length===1?e[0].toString(16):null}function Ds(t,e){var a=t.length,n=t.charCodeAt(e),r;return n>=55296&&n<=56319&&a>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Ki(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Mr(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Ki(e);typeof ut.hooks.addPack=="function"&&!r?ut.hooks.addPack(t,Ki(e)):ut.styles[t]=h(h({},ut.styles[t]||{}),i),t==="fas"&&Mr("fa",e)}var Aa,Ca,Sa,Ne=ut.styles,Ms=ut.shims,Ls=(Aa={},K(Aa,R,Object.values(fa[R])),K(Aa,G,Object.values(fa[G])),Aa),Xr=null,Ao={},Co={},So={},Oo={},No={},Vs=(Ca={},K(Ca,R,Object.keys(sa[R])),K(Ca,G,Object.keys(sa[G])),Ca);function Rs(t){return~bs.indexOf(t)}function zs(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!Rs(r)?r:null}var To=function(){var e=function(i){return Ir(Ne,function(o,l,f){return o[f]=Ir(l,i,{}),o},{})};Ao=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=o})}return r}),Co=e(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=o})}return r}),No=e(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(f){r[f]=o}),r});var a="far"in Ne||w.autoFetchSvg,n=Ir(Ms,function(r,i){var o=i[0],l=i[1],f=i[2];return l==="far"&&!a&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});So=n.names,Oo=n.unicodes,Xr=Fa(w.styleDefault,{family:w.familyDefault})};ks(function(t){Xr=Fa(t.styleDefault,{family:w.familyDefault})});To();function Kr(t,e){return(Ao[t]||{})[e]}function Fs(t,e){return(Co[t]||{})[e]}function ne(t,e){return(No[t]||{})[e]}function Po(t){return So[t]||{prefix:null,iconName:null}}function js(t){var e=Oo[t],a=Kr("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Dt(){return Xr}var Qr=function(){return{prefix:null,iconName:null,rest:[]}};function Fa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?R:a,r=sa[n][t],i=la[n][t]||la[n][r],o=t in ut.styles?t:null;return i||o||null}var Qi=(Sa={},K(Sa,R,Object.keys(fa[R])),K(Sa,G,Object.keys(fa[G])),Sa);function ja(t){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(e={},K(e,R,"".concat(w.cssPrefix,"-").concat(R)),K(e,G,"".concat(w.cssPrefix,"-").concat(G)),e),o=null,l=R;(t.includes(i[R])||t.some(function(m){return Qi[R].includes(m)}))&&(l=R),(t.includes(i[G])||t.some(function(m){return Qi[G].includes(m)}))&&(l=G);var f=t.reduce(function(m,u){var b=zs(w.cssPrefix,u);if(Ne[u]?(u=Ls[l].includes(u)?ms[l][u]:u,o=u,m.prefix=u):Vs[l].indexOf(u)>-1?(o=u,m.prefix=Fa(u,{family:l})):b?m.iconName=b:u!==w.replacementClass&&u!==i[R]&&u!==i[G]&&m.rest.push(u),!r&&m.prefix&&m.iconName){var E=o==="fa"?Po(m.iconName):{},I=ne(m.prefix,m.iconName);E.prefix&&(o=null),m.iconName=E.iconName||I||m.iconName,m.prefix=E.prefix||m.prefix,m.prefix==="far"&&!Ne.far&&Ne.fas&&!w.autoFetchSvg&&(m.prefix="fas")}return m},Qr());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===G&&(Ne.fass||w.autoFetchSvg)&&(f.prefix="fass",f.iconName=ne(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Dt()||"fas"),f}var Hs=function(){function t(){ts(this,t),this.definitions={}}return es(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){a.definitions[l]=h(h({},a.definitions[l]||{}),o[l]),Mr(l,o[l]);var f=fa[R][l];f&&Mr(f,o[l]),To()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,f=o.iconName,m=o.icon,u=m[2];a[l]||(a[l]={}),u.length>0&&u.forEach(function(b){typeof b=="string"&&(a[l][b]=m)}),a[l][f]=m}),a}}]),t}(),Ji=[],Te={},Pe={},Ys=Object.keys(Pe);function Ws(t,e){var a=e.mixoutsTo;return Ji=t,Te={},Object.keys(Pe).forEach(function(n){Ys.indexOf(n)===-1&&delete Pe[n]}),Ji.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),Pa(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){a[o]||(a[o]={}),a[o][l]=r[o][l]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Te[o]||(Te[o]=[]),Te[o].push(i[o])})}n.provides&&n.provides(Pe)}),a}function Lr(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Te[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function ie(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=Te[t]||[];r.forEach(function(i){i.apply(null,a)})}function yt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Pe[t]?Pe[t].apply(null,e):void 0}function Vr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||Dt();if(!!e)return e=ne(a,e)||e,Xi(Do.definitions,a,e)||Xi(ut.styles,a,e)}var Do=new Hs,Us=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,ie("noAuto")},Gs={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xt?(ie("beforeI2svg",e),yt("pseudoElements2svg",e),yt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Ns(function(){qs({autoReplaceSvgRoot:a}),ie("watch",e)})}},Bs={icon:function(e){if(e===null)return null;if(Pa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ne(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Fa(e[0]);return{prefix:n,iconName:ne(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(w.cssPrefix,"-"))>-1||e.match(ds))){var r=ja(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Dt(),iconName:ne(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Dt();return{prefix:i,iconName:ne(i,e)||e}}}},nt={noAuto:Us,config:w,dom:Gs,parse:Bs,library:Do,findIconDefinition:Vr,toHtml:va},qs=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?z:a;(Object.keys(ut.styles).length>0||w.autoFetchSvg)&&xt&&w.autoReplaceSvg&&nt.dom.i2svg({node:n})};function Ha(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return va(n)})}}),Object.defineProperty(t,"node",{get:function(){if(!!xt){var n=z.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Xs(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(qr(o)&&a.found&&!n.found){var l=a.width,f=a.height,m={x:l/f/2,y:.5};r.style=za(h(h({},i),{},{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ks(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(w.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:o}),children:n}]}]}function Jr(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,o=t.transform,l=t.symbol,f=t.title,m=t.maskId,u=t.titleId,b=t.extra,E=t.watchable,I=E===void 0?!1:E,C=n.found?n:a,S=C.width,B=C.height,Y=r==="fak",T=[w.replacementClass,i?"".concat(w.cssPrefix,"-").concat(i):""].filter(function(V){return b.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(b.classes).join(" "),X={children:[],attributes:h(h({},b.attributes),{},{"data-prefix":r,"data-icon":i,class:T,role:b.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(B)})},H=Y&&!~b.classes.indexOf("fa-fw")?{width:"".concat(S/B*16*.0625,"em")}:{};I&&(X.attributes[re]=""),f&&(X.children.push({tag:"title",attributes:{id:X.attributes["aria-labelledby"]||"title-".concat(u||ua())},children:[f]}),delete X.attributes.title);var W=h(h({},X),{},{prefix:r,iconName:i,main:a,mask:n,maskId:m,transform:o,symbol:l,styles:h(h({},H),b.styles)}),at=n.found&&a.found?yt("generateAbstractMask",W)||{children:[],attributes:{}}:yt("generateAbstractIcon",W)||{children:[],attributes:{}},ft=at.children,Lt=at.attributes;return W.children=ft,W.attributes=Lt,l?Ks(W):Xs(W)}function Zi(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.title,o=t.extra,l=t.watchable,f=l===void 0?!1:l,m=h(h(h({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(m[re]="");var u=h({},o.styles);qr(r)&&(u.transform=As({transform:r,startCentered:!0,width:a,height:n}),u["-webkit-transform"]=u.transform);var b=za(u);b.length>0&&(m.style=b);var E=[];return E.push({tag:"span",attributes:m,children:[e]}),i&&E.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),E}function Qs(t){var e=t.content,a=t.title,n=t.extra,r=h(h(h({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=za(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Ar=ut.styles;function Rr(t){var e=t[0],a=t[1],n=t.slice(4),r=Hr(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(ae.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(ae.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:o}}var Js={found:!1,width:512,height:512};function Zs(t,e){!xo&&!w.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zr(t,e){var a=e;return e==="fa"&&w.styleDefault!==null&&(e=Dt()),new Promise(function(n,r){if(yt("missingIconAbstract"),a==="fa"){var i=Po(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ar[e]&&Ar[e][t]){var o=Ar[e][t];return n(Rr(o))}Zs(t,e),n(h(h({},Js),{},{icon:w.showMissingIcons&&t?yt("missingIconAbstract")||{}:{}}))})}var to=function(){},Fr=w.measurePerformance&&wa&&wa.mark&&wa.measure?wa:{mark:to,measure:to},ra='FA "6.2.0"',tl=function(e){return Fr.mark("".concat(ra," ").concat(e," begins")),function(){return Mo(e)}},Mo=function(e){Fr.mark("".concat(ra," ").concat(e," ends")),Fr.measure("".concat(ra," ").concat(e),"".concat(ra," ").concat(e," begins"),"".concat(ra," ").concat(e," ends"))},Zr={begin:tl,end:Mo},Oa=function(){};function eo(t){var e=t.getAttribute?t.getAttribute(re):null;return typeof e=="string"}function el(t){var e=t.getAttribute?t.getAttribute(Wr):null,a=t.getAttribute?t.getAttribute(Ur):null;return e&&a}function al(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(w.replacementClass)}function nl(){if(w.autoReplaceSvg===!0)return Na.replace;var t=Na[w.autoReplaceSvg];return t||Na.replace}function rl(t){return z.createElementNS("http://www.w3.org/2000/svg",t)}function il(t){return z.createElement(t)}function Lo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?rl:il:a;if(typeof t=="string")return z.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Lo(o,{ceFn:n}))}),r}function ol(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Na={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(Lo(r),a)}),a.getAttribute(re)===null&&w.keepOriginalSource){var n=z.createComment(ol(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Br(a).indexOf(w.replacementClass))return Na.replace(e);var r=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(l,f){return f===w.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(l){return va(l)}).join(`
`);a.setAttribute(re,""),a.innerHTML=o}};function ao(t){t()}function Vo(t,e){var a=typeof e=="function"?e:Oa;if(t.length===0)a();else{var n=ao;w.mutateApproach===cs&&(n=Pt.requestAnimationFrame||ao),n(function(){var r=nl(),i=Zr.begin("mutate");t.map(r),i(),a()})}}var ti=!1;function Ro(){ti=!0}function jr(){ti=!1}var Ma=null;function no(t){if(!!Gi&&!!w.observeMutations){var e=t.treeCallback,a=e===void 0?Oa:e,n=t.nodeCallback,r=n===void 0?Oa:n,i=t.pseudoElementsCallback,o=i===void 0?Oa:i,l=t.observeMutationsRoot,f=l===void 0?z:l;Ma=new Gi(function(m){if(!ti){var u=Dt();Me(m).forEach(function(b){if(b.type==="childList"&&b.addedNodes.length>0&&!eo(b.addedNodes[0])&&(w.searchPseudoElements&&o(b.target),a(b.target)),b.type==="attributes"&&b.target.parentNode&&w.searchPseudoElements&&o(b.target.parentNode),b.type==="attributes"&&eo(b.target)&&~hs.indexOf(b.attributeName))if(b.attributeName==="class"&&el(b.target)){var E=ja(Br(b.target)),I=E.prefix,C=E.iconName;b.target.setAttribute(Wr,I||u),C&&b.target.setAttribute(Ur,C)}else al(b.target)&&r(b.target)})}}),xt&&Ma.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sl(){!Ma||Ma.disconnect()}function ll(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(n[o]=l.join(":").trim()),n},{})),a}function fl(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=ja(Br(t));return r.prefix||(r.prefix=Dt()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Fs(r.prefix,t.innerText)||Kr(r.prefix,Dr(t.innerText))),!r.iconName&&w.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function cl(t){var e=Me(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return w.autoA11y&&(a?e["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(n||ua()):(e["aria-hidden"]="true",e.focusable="false")),e}function ul(){return{iconName:null,title:null,titleId:null,prefix:null,transform:dt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ro(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=fl(t),n=a.iconName,r=a.prefix,i=a.rest,o=cl(t),l=Lr("parseNodeAttributes",{},t),f=e.styleParser?ll(t):[];return h({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:dt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},l)}var ml=ut.styles;function zo(t){var e=w.autoReplaceSvg==="nest"?ro(t,{styleParser:!1}):ro(t);return~e.extra.classes.indexOf(wo)?yt("generateLayersText",t,e):yt("generateSvgReplacementMutation",t,e)}var Mt=new Set;Gr.map(function(t){Mt.add("fa-".concat(t))});Object.keys(sa[R]).map(Mt.add.bind(Mt));Object.keys(sa[G]).map(Mt.add.bind(Mt));Mt=ma(Mt);function io(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xt)return Promise.resolve();var a=z.documentElement.classList,n=function(b){return a.add("".concat(Bi,"-").concat(b))},r=function(b){return a.remove("".concat(Bi,"-").concat(b))},i=w.autoFetchSvg?Mt:Gr.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ml));i.includes("fa")||i.push("fa");var o=[".".concat(wo,":not([").concat(re,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(re,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Me(t.querySelectorAll(o))}catch{}if(l.length>0)n("pending"),r("complete");else return Promise.resolve();var f=Zr.begin("onTree"),m=l.reduce(function(u,b){try{var E=zo(b);E&&u.push(E)}catch(I){xo||I.name==="MissingIcon"&&console.error(I)}return u},[]);return new Promise(function(u,b){Promise.all(m).then(function(E){Vo(E,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(function(E){f(),b(E)})})}function dl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zo(t).then(function(a){a&&Vo([a],e)})}function vl(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Vr(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Vr(r||{})),t(n,h(h({},a),{},{mask:r}))}}var gl=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?dt:n,i=a.symbol,o=i===void 0?!1:i,l=a.mask,f=l===void 0?null:l,m=a.maskId,u=m===void 0?null:m,b=a.title,E=b===void 0?null:b,I=a.titleId,C=I===void 0?null:I,S=a.classes,B=S===void 0?[]:S,Y=a.attributes,T=Y===void 0?{}:Y,X=a.styles,H=X===void 0?{}:X;if(!!e){var W=e.prefix,at=e.iconName,ft=e.icon;return Ha(h({type:"icon"},e),function(){return ie("beforeDOMElementCreation",{iconDefinition:e,params:a}),w.autoA11y&&(E?T["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(C||ua()):(T["aria-hidden"]="true",T.focusable="false")),Jr({icons:{main:Rr(ft),mask:f?Rr(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:at,transform:h(h({},dt),r),symbol:o,title:E,maskId:u,titleId:C,extra:{attributes:T,styles:H,classes:B}})})}},pl={mixout:function(){return{icon:vl(gl)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=io,a.nodeCallback=dl,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?z:n,i=a.callback,o=i===void 0?function(){}:i;return io(r,o)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,o=n.titleId,l=n.prefix,f=n.transform,m=n.symbol,u=n.mask,b=n.maskId,E=n.extra;return new Promise(function(I,C){Promise.all([zr(r,l),u.iconName?zr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var B=Hr(S,2),Y=B[0],T=B[1];I([a,Jr({icons:{main:Y,mask:T},prefix:l,iconName:r,transform:f,symbol:m,maskId:b,title:i,titleId:o,extra:E,watchable:!0})])}).catch(C)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,l=a.styles,f=za(l);f.length>0&&(r.style=f);var m;return qr(o)&&(m=yt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(m||i.icon),{children:n,attributes:r}}}},hl={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Ha({type:"layer"},function(){ie("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(l){Array.isArray(l)?l.map(function(f){o=o.concat(f.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(ma(i)).join(" ")},children:o}]})}}}},bl={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,l=o===void 0?[]:o,f=n.attributes,m=f===void 0?{}:f,u=n.styles,b=u===void 0?{}:u;return Ha({type:"counter",content:a},function(){return ie("beforeDOMElementCreation",{content:a,params:n}),Qs({content:a.toString(),title:i,extra:{attributes:m,styles:b,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(ma(l))}})})}}}},yl={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?dt:r,o=n.title,l=o===void 0?null:o,f=n.classes,m=f===void 0?[]:f,u=n.attributes,b=u===void 0?{}:u,E=n.styles,I=E===void 0?{}:E;return Ha({type:"text",content:a},function(){return ie("beforeDOMElementCreation",{content:a,params:n}),Zi({content:a,transform:h(h({},dt),i),title:l,extra:{attributes:b,styles:I,classes:["".concat(w.cssPrefix,"-layers-text")].concat(ma(m))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.title,i=n.transform,o=n.extra,l=null,f=null;if(ho){var m=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();l=u.width/m,f=u.height/m}return w.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Zi({content:a.innerHTML,width:l,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},xl=new RegExp('"',"ug"),oo=[1105920,1112319];function wl(t){var e=t.replace(xl,""),a=Ds(e,0),n=a>=oo[0]&&a<=oo[1],r=e.length===2?e[0]===e[1]:!1;return{value:Dr(r?e[0]:e),isSecondary:n||r}}function so(t,e){var a="".concat(fs).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=Me(t.children),o=i.filter(function(ft){return ft.getAttribute(Pr)===e})[0],l=Pt.getComputedStyle(t,e),f=l.getPropertyValue("font-family").match(vs),m=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),n();if(f&&u!=="none"&&u!==""){var b=l.getPropertyValue("content"),E=~["Sharp"].indexOf(f[2])?G:R,I=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?la[E][f[2].toLowerCase()]:gs[E][m],C=wl(b),S=C.value,B=C.isSecondary,Y=f[0].startsWith("FontAwesome"),T=Kr(I,S),X=T;if(Y){var H=js(S);H.iconName&&H.prefix&&(T=H.iconName,I=H.prefix)}if(T&&!B&&(!o||o.getAttribute(Wr)!==I||o.getAttribute(Ur)!==X)){t.setAttribute(a,X),o&&t.removeChild(o);var W=ul(),at=W.extra;at.attributes[Pr]=e,zr(T,I).then(function(ft){var Lt=Jr(h(h({},W),{},{icons:{main:ft,mask:Qr()},prefix:I,iconName:X,extra:at,watchable:!0})),V=z.createElement("svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=Lt.map(function(vt){return va(vt)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function kl(t){return Promise.all([so(t,"::before"),so(t,"::after")])}function $l(t){return t.parentNode!==document.head&&!~us.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Pr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function lo(t){if(!!xt)return new Promise(function(e,a){var n=Me(t.querySelectorAll("*")).filter($l).map(kl),r=Zr.begin("searchPseudoElements");Ro(),Promise.all(n).then(function(){r(),jr(),e()}).catch(function(){r(),jr(),a()})})}var _l={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=lo,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?z:n;w.searchPseudoElements&&lo(r)}}},fo=!1,El={mixout:function(){return{dom:{unwatch:function(){Ro(),fo=!0}}}},hooks:function(){return{bootstrap:function(){no(Lr("mutationObserverCallbacks",{}))},noAuto:function(){sl()},watch:function(a){var n=a.observeMutationsRoot;fo?jr():no(Lr("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},co=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return n.flipX=!0,n;if(o&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(o){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},a)},Il={mixout:function(){return{parse:{transform:function(a){return co(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=co(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),b={transform:"".concat(f," ").concat(m," ").concat(u)},E={transform:"translate(".concat(o/2*-1," -256)")},I={outer:l,inner:b,path:E};return{tag:"g",attributes:h({},I.outer),children:[{tag:"g",attributes:h({},I.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:h(h({},n.icon.attributes),I.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function uo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Al(t){return t.tag==="g"?t.children:[t]}var Cl={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?ja(r.split(" ").map(function(o){return o.trim()})):Qr();return i.prefix||(i.prefix=Dt()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,l=a.maskId,f=a.transform,m=i.width,u=i.icon,b=o.width,E=o.icon,I=Is({transform:f,containerWidth:b,iconWidth:m}),C={tag:"rect",attributes:h(h({},Cr),{},{fill:"white"})},S=u.children?{children:u.children.map(uo)}:{},B={tag:"g",attributes:h({},I.inner),children:[uo(h({tag:u.tag,attributes:h(h({},u.attributes),I.path)},S))]},Y={tag:"g",attributes:h({},I.outer),children:[B]},T="mask-".concat(l||ua()),X="clip-".concat(l||ua()),H={tag:"mask",attributes:h(h({},Cr),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,Y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:X},children:Al(E)},H]};return n.push(W,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(X,")"),mask:"url(#".concat(T,")")},Cr)}),{children:n,attributes:r}}}},Sl={provides:function(e){var a=!1;Pt.matchMedia&&(a=Pt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=h(h({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||l.children.push({tag:"animate",attributes:h(h({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:h(h({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ol={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Nl=[Ss,pl,hl,bl,yl,_l,El,Il,Cl,Sl,Ol];Ws(Nl,{mixoutsTo:nt});nt.noAuto;var Tl=nt.config,Pl=nt.library;nt.dom;nt.parse;nt.findIconDefinition;nt.toHtml;var Dl=nt.icon;nt.layer;nt.text;nt.counter;function Ml(t){let e,a;return{c(){e=new Fo(!1),a=Fi(),this.h()},l(n){e=jo(n,!1),a=Fi(),this.h()},h(){e.a=a},m(n,r){e.m(t[0],n,r),j(n,a,r)},p(n,[r]){r&1&&e.p(n[0])},i:Tt,o:Tt,d(n){n&&c(a),n&&e.d()}}}Tl.autoAddCss=!1;function Ll(t,e,a){let n,{icon:r}=e,{class:i=""}=e,{fixedWidth:o=!1}=e;return t.$$set=l=>{"icon"in l&&a(1,r=l.icon),"class"in l&&a(2,i=l.class),"fixedWidth"in l&&a(3,o=l.fixedWidth)},t.$$.update=()=>{var l,f;t.$$.dirty&2&&Pl.add(r),t.$$.dirty&14&&a(0,n=(f=(l=Dl({prefix:"fas",iconName:r.iconName},{classes:Ko(i,o?"fa-fw":void 0)}))==null?void 0:l.html)!=null?f:"")},[n,r,i,o]}class et extends La{constructor(e){super(),Va(this,e,Ll,Ml,Ra,{icon:1,class:2,fixedWidth:3})}}var Sr={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Vl={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},Rl={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"]},zl=Rl,Fl={prefix:"fas",iconName:"chalkboard",icon:[576,512,["blackboard"],"f51b","M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z"]},jl={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},Hl=jl,Yl={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},aa={prefix:"fas",iconName:"crosshairs",icon:[512,512,[],"f05b","M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},Wl={prefix:"fas",iconName:"arrows-turn-to-dots",icon:[512,512,[],"e4c1","M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96 416 96c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7-14.3-32-32-32l-146.7 0 25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3l80-80zm13.3 256l80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 416 96 416c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448c0-53 43-96 96-96l146.7 0-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0zM512 384c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM64 64c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64S28.7 64 64 64z"]},Ul={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function Gl(t){let e,a,n;return{c(){e=d("div"),a=d("img"),this.h()},l(r){e=v(r,"DIV",{class:!0});var i=g(e);a=v(i,"IMG",{src:!0,class:!0,loading:!0,alt:!0}),i.forEach(c),this.h()},h(){Or(a.src,n=t[0])||_(a,"src",n),_(a,"class","aspect-square w-full blur-sm"),_(a,"loading","lazy"),_(a,"alt","Avatar"),_(e,"class","aspect-square w-20 overflow-hidden rounded-full")},m(r,i){j(r,e,i),s(e,a)},p(r,[i]){i&1&&!Or(a.src,n=r[0])&&_(a,"src",n)},i:Tt,o:Tt,d(r){r&&c(e)}}}function Bl(t,e,a){let{src:n}=e;return t.$$set=r=>{"src"in r&&a(0,n=r.src)},[n]}class ql extends La{constructor(e){super(),Va(this,e,Bl,Gl,Ra,{src:0})}}function Xl(t){let e,a,n,r,i,o,l,f,m,u;const b=t[3].default,E=Ho(b,t,t[2],null);return l=new ql({props:{src:t[1]}}),{c(){e=d("div"),a=d("div"),n=k('"'),E&&E.c(),r=k('"'),i=y(),o=d("div"),P(l.$$.fragment),f=y(),m=k(t[0]),this.h()},l(I){e=v(I,"DIV",{class:!0});var C=g(e);a=v(C,"DIV",{class:!0});var S=g(a);n=$(S,'"'),E&&E.l(S),r=$(S,'"'),S.forEach(c),i=x(C),o=v(C,"DIV",{class:!0});var B=g(o);D(l.$$.fragment,B),f=x(B),m=$(B,t[0]),B.forEach(c),C.forEach(c),this.h()},h(){_(a,"class","text-base md:text-lg"),_(o,"class","flex flex-col items-end gap-2 md:w-40 md:items-center"),_(e,"class","grid grid-rows-[1fr_auto] items-start gap-2 md:grid-cols-[1fr_auto] md:items-center md:gap-4")},m(I,C){j(I,e,C),s(e,a),s(a,n),E&&E.m(a,null),s(a,r),s(e,i),s(e,o),M(l,o,null),s(o,f),s(o,m),u=!0},p(I,[C]){E&&E.p&&(!u||C&4)&&Yo(E,b,I,I[2],u?Uo(b,I[2],C,null):Wo(I[2]),null);const S={};C&2&&(S.src=I[1]),l.$set(S),(!u||C&1)&&Go(m,I[0])},i(I){u||(O(E,I),O(l.$$.fragment,I),u=!0)},o(I){N(E,I),N(l.$$.fragment,I),u=!1},d(I){I&&c(e),E&&E.d(I),L(l)}}}function Kl(t,e,a){let{$$slots:n={},$$scope:r}=e,{name:i}=e,{avatarUrl:o}=e;return t.$$set=l=>{"name"in l&&a(0,i=l.name),"avatarUrl"in l&&a(1,o=l.avatarUrl),"$$scope"in l&&a(2,r=l.$$scope)},[i,o,r,n]}class na extends La{constructor(e){super(),Va(this,e,Kl,Xl,Ra,{name:0,avatarUrl:1})}}function Ql(t){let e,a,n;return a=new Ta({props:{$$slots:{default:[Zl]},$$scope:{ctx:t}}}),{c(){e=d("a"),P(a.$$.fragment),this.h()},l(r){e=v(r,"A",{href:!0});var i=g(e);D(a.$$.fragment,i),i.forEach(c),this.h()},h(){_(e,"href","steam://connect/dm1.sappho.io:27315")},m(r,i){j(r,e,i),M(a,e,null),n=!0},i(r){n||(O(a.$$.fragment,r),n=!0)},o(r){N(a.$$.fragment,r),n=!1},d(r){r&&c(e),L(a)}}}function Jl(t){let e,a,n;return a=new Ta({props:{$$slots:{default:[tf]},$$scope:{ctx:t}}}),{c(){e=d("a"),P(a.$$.fragment),this.h()},l(r){e=v(r,"A",{href:!0});var i=g(e);D(a.$$.fragment,i),i.forEach(c),this.h()},h(){_(e,"href","/app")},m(r,i){j(r,e,i),M(a,e,null),n=!0},i(r){n||(O(a.$$.fragment,r),n=!0)},o(r){N(a.$$.fragment,r),n=!1},d(r){r&&c(e),L(a)}}}function Zl(t){let e;return{c(){e=k("Launch")},l(a){e=$(a,"Launch")},m(a,n){j(a,e,n)},d(a){a&&c(e)}}}function tf(t){let e;return{c(){e=k("Install Now")},l(a){e=$(a,"Install Now")},m(a,n){j(a,e,n)},d(a){a&&c(e)}}}function ef(t){let e;return{c(){e=k("See More")},l(a){e=$(a,"See More")},m(a,n){j(a,e,n)},d(a){a&&c(e)}}}function af(t){let e,a,n,r;return{c(){e=k("I was nervous heading to LAN, but with "),a=d("strong"),n=k("On The Box"),r=k(", I was able to perform better than ever.")},l(i){e=$(i,"I was nervous heading to LAN, but with "),a=v(i,"STRONG",{});var o=g(a);n=$(o,"On The Box"),o.forEach(c),r=$(i,", I was able to perform better than ever.")},m(i,o){j(i,e,o),j(i,a,o),s(a,n),j(i,r,o)},p:Tt,d(i){i&&c(e),i&&c(a),i&&c(r)}}}function nf(t){let e,a,n,r;return{c(){e=k("I'm new to competitive and "),a=d("strong"),n=k("On The Box"),r=k(` has allowed
                me to jump straight in with the best.`)},l(i){e=$(i,"I'm new to competitive and "),a=v(i,"STRONG",{});var o=g(a);n=$(o,"On The Box"),o.forEach(c),r=$(i,` has allowed
                me to jump straight in with the best.`)},m(i,o){j(i,e,o),j(i,a,o),s(a,n),j(i,r,o)},p:Tt,d(i){i&&c(e),i&&c(a),i&&c(r)}}}function rf(t){let e,a,n,r;return{c(){e=k(`I only play casual, but I've been having a lot more fun since I
                picked up `),a=d("strong"),n=k("On The Box"),r=k(`. Now I always make it fat
                like my favorite streamer and I always end on a W.`)},l(i){e=$(i,`I only play casual, but I've been having a lot more fun since I
                picked up `),a=v(i,"STRONG",{});var o=g(a);n=$(o,"On The Box"),o.forEach(c),r=$(i,`. Now I always make it fat
                like my favorite streamer and I always end on a W.`)},m(i,o){j(i,e,o),j(i,a,o),s(a,n),j(i,r,o)},p:Tt,d(i){i&&c(e),i&&c(a),i&&c(r)}}}function of(t){let e;return{c(){e=k(`I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox.`)},l(a){e=$(a,`I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox.`)},m(a,n){j(a,e,n)},d(a){a&&c(e)}}}function sf(t){let e,a,n,r;return{c(){e=k("I don't really have as much time to play anymore, but "),a=d("strong"),n=k("On The Box"),r=k(` helps me stay on top when I get the chance
                to game.`)},l(i){e=$(i,"I don't really have as much time to play anymore, but "),a=v(i,"STRONG",{});var o=g(a);n=$(o,"On The Box"),o.forEach(c),r=$(i,` helps me stay on top when I get the chance
                to game.`)},m(i,o){j(i,e,o),j(i,a,o),s(a,n),j(i,r,o)},p:Tt,d(i){i&&c(e),i&&c(a),i&&c(r)}}}function lf(t){let e;return{c(){e=k("Get it")},l(a){e=$(a,"Get it")},m(a,n){j(a,e,n)},d(a){a&&c(e)}}}function ff(t){let e,a,n,r,i,o,l,f,m,u,b,E,I,C,S,B,Y,T,X,H,W,at,ft,Lt,V,vt,Ya,oe,Wa,Le,Ua,Ga,Vt,Ba,se,Ve,qa,Xa,Ka,Rt,Qa,le,Re,Ja,Za,tn,wt,fe,en,an,J,zt,nn,ze,rn,on,Ft,sn,Fe,ln,fn,jt,cn,je,un,mn,ce,dn,vn,ue,me,kt,gn,Ht,Z,Yt,de,pn,hn,ve,bn,yn,$t,xn,_t,wn,Et,kn,It,$n,At,_n,tt,ge,En,pe,In,An,gt,he,Cn,Sn,be,On,Nn,F,Wt,Tn,He,Pn,Dn,Ut,Mn,Ye,Ln,Vn,Gt,Rn,We,zn,Fn,Bt,jn,Ue,Hn,Yn,qt,Wn,Ge,Un,Gn,pt,ye,Bn,qn,xe,Xn,Kn,U,Xt,Qn,Be,Jn,Zn,Kt,tr,qe,er,ar,Qt,nr,Xe,rr,ir,Jt,or,Ke,sr,lr,Ct,fr,Qe,cr,ur,mr,we,dr,vr,ke,$e,St,gr,_e,Ot,Zt,Ee,pr,hr,Ie,br,yr,rt,ei,xr,Ae,wr,ga;e=new Qo({});const ai=[Jl,Ql],te=[];function ni(p,A){return p[0]?0:1}return Y=ni(t),T=te[Y]=ai[Y](t),vt=new et({props:{icon:Sr,fixedWidth:!0}}),Vt=new et({props:{icon:Sr,fixedWidth:!0}}),Rt=new et({props:{icon:Sr,fixedWidth:!0}}),zt=new et({props:{icon:Vl,fixedWidth:!0}}),Ft=new et({props:{icon:Yl,fixedWidth:!0}}),jt=new et({props:{icon:Hl,fixedWidth:!0}}),kt=new Ta({props:{$$slots:{default:[ef]},$$scope:{ctx:t}}}),$t=new na({props:{name:"**ile",avatarUrl:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/01/01cded8bb4c8ba9976ea0905611c6d74f4a01b49_medium.jpg",$$slots:{default:[af]},$$scope:{ctx:t}}}),_t=new na({props:{name:"***endlynoodles",avatarUrl:"https://avatars.akamai.steamstatic.com/87f0d37e3af4ef132bfcff6636c69335fddf6170_full.jpg",$$slots:{default:[nf]},$$scope:{ctx:t}}}),Et=new na({props:{name:"***ditforlife",avatarUrl:"https://avatars.akamai.steamstatic.com/cd78b56fcb7cc9f74ae30b5b2add073f87bf7fdb.jpg",$$slots:{default:[rf]},$$scope:{ctx:t}}}),It=new na({props:{name:"***ketball.barry.99",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png",$$slots:{default:[of]},$$scope:{ctx:t}}}),At=new na({props:{name:"***liblegoobular",avatarUrl:"https://avatars.akamai.steamstatic.com/152b2eeea37c59033661471b0f817c63bce545d6_full.jpg",$$slots:{default:[sf]},$$scope:{ctx:t}}}),Wt=new et({props:{icon:aa,fixedWidth:!0}}),Ut=new et({props:{icon:aa,fixedWidth:!0}}),Gt=new et({props:{icon:aa,fixedWidth:!0}}),Bt=new et({props:{icon:aa,fixedWidth:!0}}),qt=new et({props:{icon:aa,fixedWidth:!0}}),Xt=new et({props:{icon:Ul,fixedWidth:!0}}),Kt=new et({props:{icon:Wl,fixedWidth:!0}}),Qt=new et({props:{icon:Fl,fixedWidth:!0}}),Jt=new et({props:{icon:zl,fixedWidth:!0}}),St=new Ta({props:{$$slots:{default:[lf]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment),a=y(),n=d("main"),r=d("div"),i=d("div"),o=k("Want to be on top? Get"),l=y(),f=d("div"),m=d("div"),u=k("On the Box"),b=y(),E=d("div"),I=k("A gateway to wild skill in TF2."),C=y(),S=d("div"),B=k(`Change the game
        `),T.c(),X=y(),H=d("div"),W=d("div"),at=d("div"),ft=k("What can The Box do for you?"),Lt=y(),V=d("div"),P(vt.$$.fragment),Ya=y(),oe=d("div"),Wa=k("Perform your "),Le=d("i"),Ua=k("best"),Ga=y(),P(Vt.$$.fragment),Ba=y(),se=d("div"),Ve=d("i"),qa=k("Impress"),Xa=k(" your peers"),Ka=y(),P(Rt.$$.fragment),Qa=y(),le=d("div"),Re=d("i"),Ja=k("Eliminate"),Za=k(" the competition"),tn=y(),wt=d("div"),fe=d("div"),en=k("The Box is unbeatable"),an=y(),J=d("div"),P(zt.$$.fragment),nn=y(),ze=d("div"),rn=k("Lower RAM usage than LmaoBox"),on=y(),P(Ft.$$.fragment),sn=y(),Fe=d("div"),ln=k("Undetectable by RGL, UGC, ETF2L, etc."),fn=y(),P(jt.$$.fragment),cn=y(),je=d("div"),un=k("VAC Immune"),mn=y(),ce=d("div"),dn=k("100% free forever"),vn=y(),ue=d("div"),me=d("a"),P(kt.$$.fragment),gn=y(),Ht=d("div"),Z=d("div"),Yt=d("div"),de=d("div"),pn=k("Testimonials"),hn=y(),ve=d("div"),bn=k("Identities hidden for privacy"),yn=y(),P($t.$$.fragment),xn=y(),P(_t.$$.fragment),wn=y(),P(Et.$$.fragment),kn=y(),P(It.$$.fragment),$n=y(),P(At.$$.fragment),_n=y(),tt=d("div"),ge=d("div"),En=y(),pe=d("div"),In=k("Features"),An=y(),gt=d("div"),he=d("div"),Cn=k("Compatilibity?"),Sn=y(),be=d("div"),On=k("We do it all."),Nn=y(),F=d("div"),P(Wt.$$.fragment),Tn=y(),He=d("div"),Pn=k("Casual"),Dn=y(),P(Ut.$$.fragment),Mn=y(),Ye=d("div"),Ln=k("Competitive"),Vn=y(),P(Gt.$$.fragment),Rn=y(),We=d("div"),zn=k("MGE"),Fn=y(),P(Bt.$$.fragment),jn=y(),Ue=d("div"),Hn=k("DM"),Yn=y(),P(qt.$$.fragment),Wn=y(),Ge=d("div"),Un=k("The list goes on..."),Gn=y(),pt=d("div"),ye=d("div"),Bn=k("Level up your brain"),qn=y(),xe=d("div"),Xn=k("It's not all about mechies. Get our"),Kn=y(),U=d("div"),P(Xt.$$.fragment),Qn=y(),Be=d("div"),Jn=k("Training courses"),Zn=y(),P(Kt.$$.fragment),tr=y(),qe=d("div"),er=k("Strats"),ar=y(),P(Qt.$$.fragment),nr=y(),Xe=d("div"),rr=k("Tips and tricks"),ir=y(),P(Jt.$$.fragment),or=y(),Ke=d("div"),sr=k("Groundbreaking theorycrafting"),lr=y(),Ct=d("div"),fr=k("From "),Qe=d("strong"),cr=k("real"),ur=k(" pros. All 100% free."),mr=y(),we=d("div"),dr=k("Can't get it anywhere else"),vr=y(),ke=d("div"),$e=d("a"),P(St.$$.fragment),gr=y(),_e=d("div"),Ot=d("div"),Zt=d("div"),Ee=d("div"),pr=k("Results"),hr=y(),Ie=d("div"),br=k("The proof is in the pudding"),yr=y(),rt=d("iframe"),xr=y(),Ae=d("div"),wr=k("This site is a work of satire. No cheats are provided by On the Box."),this.h()},l(p){D(e.$$.fragment,p),a=x(p),n=v(p,"MAIN",{class:!0});var A=g(n);r=v(A,"DIV",{class:!0});var mt=g(r);i=v(mt,"DIV",{class:!0});var Je=g(i);o=$(Je,"Want to be on top? Get"),Je.forEach(c),l=x(mt),f=v(mt,"DIV",{class:!0});var Ze=g(f);m=v(Ze,"DIV",{class:!0});var ta=g(m);u=$(ta,"On the Box"),ta.forEach(c),Ze.forEach(c),b=x(mt),E=v(mt,"DIV",{class:!0});var ea=g(E);I=$(ea,"A gateway to wild skill in TF2."),ea.forEach(c),mt.forEach(c),C=x(A),S=v(A,"DIV",{class:!0});var Ce=g(S);B=$(Ce,`Change the game
        `),T.l(Ce),Ce.forEach(c),X=x(A),H=v(A,"DIV",{class:!0});var ct=g(H);W=v(ct,"DIV",{class:!0});var ee=g(W);at=v(ee,"DIV",{class:!0});var ri=g(at);ft=$(ri,"What can The Box do for you?"),ri.forEach(c),Lt=x(ee),V=v(ee,"DIV",{class:!0});var it=g(V);D(vt.$$.fragment,it),Ya=x(it),oe=v(it,"DIV",{});var kr=g(oe);Wa=$(kr,"Perform your "),Le=v(kr,"I",{});var ii=g(Le);Ua=$(ii,"best"),ii.forEach(c),kr.forEach(c),Ga=x(it),D(Vt.$$.fragment,it),Ba=x(it),se=v(it,"DIV",{});var $r=g(se);Ve=v($r,"I",{});var oi=g(Ve);qa=$(oi,"Impress"),oi.forEach(c),Xa=$($r," your peers"),$r.forEach(c),Ka=x(it),D(Rt.$$.fragment,it),Qa=x(it),le=v(it,"DIV",{});var _r=g(le);Re=v(_r,"I",{});var si=g(Re);Ja=$(si,"Eliminate"),si.forEach(c),Za=$(_r," the competition"),_r.forEach(c),it.forEach(c),ee.forEach(c),tn=x(ct),wt=v(ct,"DIV",{class:!0});var pa=g(wt);fe=v(pa,"DIV",{class:!0});var li=g(fe);en=$(li,"The Box is unbeatable"),li.forEach(c),an=x(pa),J=v(pa,"DIV",{class:!0});var ot=g(J);D(zt.$$.fragment,ot),nn=x(ot),ze=v(ot,"DIV",{});var fi=g(ze);rn=$(fi,"Lower RAM usage than LmaoBox"),fi.forEach(c),on=x(ot),D(Ft.$$.fragment,ot),sn=x(ot),Fe=v(ot,"DIV",{});var ci=g(Fe);ln=$(ci,"Undetectable by RGL, UGC, ETF2L, etc."),ci.forEach(c),fn=x(ot),D(jt.$$.fragment,ot),cn=x(ot),je=v(ot,"DIV",{});var ui=g(je);un=$(ui,"VAC Immune"),ui.forEach(c),ot.forEach(c),pa.forEach(c),mn=x(ct),ce=v(ct,"DIV",{class:!0});var mi=g(ce);dn=$(mi,"100% free forever"),mi.forEach(c),vn=x(ct),ue=v(ct,"DIV",{class:!0});var di=g(ue);me=v(di,"A",{href:!0});var vi=g(me);D(kt.$$.fragment,vi),vi.forEach(c),di.forEach(c),ct.forEach(c),gn=x(A),Ht=v(A,"DIV",{class:!0,id:!0});var gi=g(Ht);Z=v(gi,"DIV",{class:!0});var st=g(Z);Yt=v(st,"DIV",{});var ha=g(Yt);de=v(ha,"DIV",{class:!0});var pi=g(de);pn=$(pi,"Testimonials"),pi.forEach(c),hn=x(ha),ve=v(ha,"DIV",{class:!0});var hi=g(ve);bn=$(hi,"Identities hidden for privacy"),hi.forEach(c),ha.forEach(c),yn=x(st),D($t.$$.fragment,st),xn=x(st),D(_t.$$.fragment,st),wn=x(st),D(Et.$$.fragment,st),kn=x(st),D(It.$$.fragment,st),$n=x(st),D(At.$$.fragment,st),st.forEach(c),gi.forEach(c),_n=x(A),tt=v(A,"DIV",{class:!0});var lt=g(tt);ge=v(lt,"DIV",{class:!0,id:!0}),g(ge).forEach(c),En=x(lt),pe=v(lt,"DIV",{class:!0});var bi=g(pe);In=$(bi,"Features"),bi.forEach(c),An=x(lt),gt=v(lt,"DIV",{});var Se=g(gt);he=v(Se,"DIV",{class:!0});var yi=g(he);Cn=$(yi,"Compatilibity?"),yi.forEach(c),Sn=x(Se),be=v(Se,"DIV",{class:!0});var xi=g(be);On=$(xi,"We do it all."),xi.forEach(c),Nn=x(Se),F=v(Se,"DIV",{class:!0});var q=g(F);D(Wt.$$.fragment,q),Tn=x(q),He=v(q,"DIV",{});var wi=g(He);Pn=$(wi,"Casual"),wi.forEach(c),Dn=x(q),D(Ut.$$.fragment,q),Mn=x(q),Ye=v(q,"DIV",{});var ki=g(Ye);Ln=$(ki,"Competitive"),ki.forEach(c),Vn=x(q),D(Gt.$$.fragment,q),Rn=x(q),We=v(q,"DIV",{});var $i=g(We);zn=$($i,"MGE"),$i.forEach(c),Fn=x(q),D(Bt.$$.fragment,q),jn=x(q),Ue=v(q,"DIV",{});var _i=g(Ue);Hn=$(_i,"DM"),_i.forEach(c),Yn=x(q),D(qt.$$.fragment,q),Wn=x(q),Ge=v(q,"DIV",{});var Ei=g(Ge);Un=$(Ei,"The list goes on..."),Ei.forEach(c),q.forEach(c),Se.forEach(c),Gn=x(lt),pt=v(lt,"DIV",{});var Oe=g(pt);ye=v(Oe,"DIV",{class:!0});var Ii=g(ye);Bn=$(Ii,"Level up your brain"),Ii.forEach(c),qn=x(Oe),xe=v(Oe,"DIV",{class:!0});var Ai=g(xe);Xn=$(Ai,"It's not all about mechies. Get our"),Ai.forEach(c),Kn=x(Oe),U=v(Oe,"DIV",{class:!0});var Q=g(U);D(Xt.$$.fragment,Q),Qn=x(Q),Be=v(Q,"DIV",{});var Ci=g(Be);Jn=$(Ci,"Training courses"),Ci.forEach(c),Zn=x(Q),D(Kt.$$.fragment,Q),tr=x(Q),qe=v(Q,"DIV",{});var Si=g(qe);er=$(Si,"Strats"),Si.forEach(c),ar=x(Q),D(Qt.$$.fragment,Q),nr=x(Q),Xe=v(Q,"DIV",{});var Oi=g(Xe);rr=$(Oi,"Tips and tricks"),Oi.forEach(c),ir=x(Q),D(Jt.$$.fragment,Q),or=x(Q),Ke=v(Q,"DIV",{});var Ni=g(Ke);sr=$(Ni,"Groundbreaking theorycrafting"),Ni.forEach(c),lr=x(Q),Ct=v(Q,"DIV",{class:!0});var ba=g(Ct);fr=$(ba,"From "),Qe=v(ba,"STRONG",{});var Ti=g(Qe);cr=$(Ti,"real"),Ti.forEach(c),ur=$(ba," pros. All 100% free."),ba.forEach(c),Q.forEach(c),Oe.forEach(c),mr=x(lt),we=v(lt,"DIV",{class:!0});var Pi=g(we);dr=$(Pi,"Can't get it anywhere else"),Pi.forEach(c),vr=x(lt),ke=v(lt,"DIV",{class:!0});var Di=g(ke);$e=v(Di,"A",{href:!0});var Mi=g($e);D(St.$$.fragment,Mi),Mi.forEach(c),Di.forEach(c),lt.forEach(c),gr=x(A),_e=v(A,"DIV",{class:!0});var Li=g(_e);Ot=v(Li,"DIV",{class:!0});var ya=g(Ot);Zt=v(ya,"DIV",{});var xa=g(Zt);Ee=v(xa,"DIV",{class:!0});var Vi=g(Ee);pr=$(Vi,"Results"),Vi.forEach(c),hr=x(xa),Ie=v(xa,"DIV",{class:!0});var Ri=g(Ie);br=$(Ri,"The proof is in the pudding"),Ri.forEach(c),xa.forEach(c),yr=x(ya),rt=v(ya,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0,loading:!0}),g(rt).forEach(c),ya.forEach(c),Li.forEach(c),xr=x(A),Ae=v(A,"DIV",{class:!0});var zi=g(Ae);wr=$(zi,"This site is a work of satire. No cheats are provided by On the Box."),zi.forEach(c),A.forEach(c),this.h()},h(){_(i,"class","text-lg"),_(m,"class","mt-px -mb-px"),_(f,"class","bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black"),_(E,"class","mt-4 text-base"),_(r,"class","mt-36 flex flex-col items-center"),_(S,"class","mx-auto flex w-72 flex-col items-center"),_(at,"class","mb-4 text-2xl font-bold"),_(V,"class","grid grid-cols-[auto_1fr] items-center gap-2"),_(W,"class","text-xl"),_(fe,"class","mb-4 text-2xl font-bold"),_(J,"class","grid grid-cols-[auto_1fr] items-center gap-2"),_(wt,"class","text-xl"),_(ce,"class","mx-auto mt-16 mb-14 text-3xl font-bold md:col-span-2"),_(me,"href","#testimonials"),_(ue,"class","mx-auto md:col-span-2"),_(H,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),_(de,"class","text-3xl font-bold"),_(ve,"class","text-xs"),_(Z,"class","mx-8 flex flex-col gap-12 md:mx-16"),_(Ht,"class","-mx-8 bg-green-900/20 py-28 md:px-8"),_(Ht,"id","testimonials"),_(ge,"class","absolute -top-32"),_(ge,"id","features"),_(pe,"class","mb-4 bg-green-600 py-1 px-4 text-4xl font-bold text-black md:col-span-2 md:mb-12"),_(he,"class","text-2xl font-bold"),_(be,"class","mb-2 text-sm"),_(F,"class","my-6 grid grid-cols-[auto_1fr] items-center gap-2 text-xl"),_(ye,"class","text-2xl font-bold"),_(xe,"class","mb-2 text-sm"),_(Ct,"class","col-span-2"),_(U,"class","my-6 grid grid-cols-[auto_1fr] items-center gap-2 text-xl"),_(we,"class","mx-auto mt-16 mb-14 text-3xl font-bold md:col-span-2"),_($e,"href","/app"),_(ke,"class","mx-auto md:col-span-2"),_(tt,"class","relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-2 md:place-items-center"),_(Ee,"class","text-3xl font-bold"),_(Ie,"class","text-sm"),Or(rt.src,ei="https://www.youtube.com/embed/NOLB3jQT-Gk")||_(rt,"src",ei),_(rt,"title","Box Results"),_(rt,"frameborder","0"),_(rt,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),_(rt,"class","aspect-video max-w-full"),_(rt,"loading","lazy"),rt.allowFullscreen=!0,_(Ot,"class","flex flex-col gap-8 md:mx-16"),_(_e,"class","-mx-8 bg-green-900/20 py-28 px-8"),_(Ae,"class","mt-auto max-w-lg text-xs"),_(n,"class","flex min-h-[calc(100vh-4rem)] w-[100vw] flex-col gap-20 bg-black px-8 pb-6 pt-12 text-green-600 md:gap-36")},m(p,A){M(e,p,A),j(p,a,A),j(p,n,A),s(n,r),s(r,i),s(i,o),s(r,l),s(r,f),s(f,m),s(m,u),s(r,b),s(r,E),s(E,I),s(n,C),s(n,S),s(S,B),te[Y].m(S,null),s(n,X),s(n,H),s(H,W),s(W,at),s(at,ft),s(W,Lt),s(W,V),M(vt,V,null),s(V,Ya),s(V,oe),s(oe,Wa),s(oe,Le),s(Le,Ua),s(V,Ga),M(Vt,V,null),s(V,Ba),s(V,se),s(se,Ve),s(Ve,qa),s(se,Xa),s(V,Ka),M(Rt,V,null),s(V,Qa),s(V,le),s(le,Re),s(Re,Ja),s(le,Za),s(H,tn),s(H,wt),s(wt,fe),s(fe,en),s(wt,an),s(wt,J),M(zt,J,null),s(J,nn),s(J,ze),s(ze,rn),s(J,on),M(Ft,J,null),s(J,sn),s(J,Fe),s(Fe,ln),s(J,fn),M(jt,J,null),s(J,cn),s(J,je),s(je,un),s(H,mn),s(H,ce),s(ce,dn),s(H,vn),s(H,ue),s(ue,me),M(kt,me,null),s(n,gn),s(n,Ht),s(Ht,Z),s(Z,Yt),s(Yt,de),s(de,pn),s(Yt,hn),s(Yt,ve),s(ve,bn),s(Z,yn),M($t,Z,null),s(Z,xn),M(_t,Z,null),s(Z,wn),M(Et,Z,null),s(Z,kn),M(It,Z,null),s(Z,$n),M(At,Z,null),s(n,_n),s(n,tt),s(tt,ge),s(tt,En),s(tt,pe),s(pe,In),s(tt,An),s(tt,gt),s(gt,he),s(he,Cn),s(gt,Sn),s(gt,be),s(be,On),s(gt,Nn),s(gt,F),M(Wt,F,null),s(F,Tn),s(F,He),s(He,Pn),s(F,Dn),M(Ut,F,null),s(F,Mn),s(F,Ye),s(Ye,Ln),s(F,Vn),M(Gt,F,null),s(F,Rn),s(F,We),s(We,zn),s(F,Fn),M(Bt,F,null),s(F,jn),s(F,Ue),s(Ue,Hn),s(F,Yn),M(qt,F,null),s(F,Wn),s(F,Ge),s(Ge,Un),s(tt,Gn),s(tt,pt),s(pt,ye),s(ye,Bn),s(pt,qn),s(pt,xe),s(xe,Xn),s(pt,Kn),s(pt,U),M(Xt,U,null),s(U,Qn),s(U,Be),s(Be,Jn),s(U,Zn),M(Kt,U,null),s(U,tr),s(U,qe),s(qe,er),s(U,ar),M(Qt,U,null),s(U,nr),s(U,Xe),s(Xe,rr),s(U,ir),M(Jt,U,null),s(U,or),s(U,Ke),s(Ke,sr),s(U,lr),s(U,Ct),s(Ct,fr),s(Ct,Qe),s(Qe,cr),s(Ct,ur),s(tt,mr),s(tt,we),s(we,dr),s(tt,vr),s(tt,ke),s(ke,$e),M(St,$e,null),s(n,gr),s(n,_e),s(_e,Ot),s(Ot,Zt),s(Zt,Ee),s(Ee,pr),s(Zt,hr),s(Zt,Ie),s(Ie,br),s(Ot,yr),s(Ot,rt),s(n,xr),s(n,Ae),s(Ae,wr),ga=!0},p(p,[A]){let mt=Y;Y=ni(p),Y!==mt&&(Xo(),N(te[mt],1,1,()=>{te[mt]=null}),Bo(),T=te[Y],T||(T=te[Y]=ai[Y](p),T.c()),O(T,1),T.m(S,null));const Je={};A&2&&(Je.$$scope={dirty:A,ctx:p}),kt.$set(Je);const Ze={};A&2&&(Ze.$$scope={dirty:A,ctx:p}),$t.$set(Ze);const ta={};A&2&&(ta.$$scope={dirty:A,ctx:p}),_t.$set(ta);const ea={};A&2&&(ea.$$scope={dirty:A,ctx:p}),Et.$set(ea);const Ce={};A&2&&(Ce.$$scope={dirty:A,ctx:p}),It.$set(Ce);const ct={};A&2&&(ct.$$scope={dirty:A,ctx:p}),At.$set(ct);const ee={};A&2&&(ee.$$scope={dirty:A,ctx:p}),St.$set(ee)},i(p){ga||(O(e.$$.fragment,p),O(T),O(vt.$$.fragment,p),O(Vt.$$.fragment,p),O(Rt.$$.fragment,p),O(zt.$$.fragment,p),O(Ft.$$.fragment,p),O(jt.$$.fragment,p),O(kt.$$.fragment,p),O($t.$$.fragment,p),O(_t.$$.fragment,p),O(Et.$$.fragment,p),O(It.$$.fragment,p),O(At.$$.fragment,p),O(Wt.$$.fragment,p),O(Ut.$$.fragment,p),O(Gt.$$.fragment,p),O(Bt.$$.fragment,p),O(qt.$$.fragment,p),O(Xt.$$.fragment,p),O(Kt.$$.fragment,p),O(Qt.$$.fragment,p),O(Jt.$$.fragment,p),O(St.$$.fragment,p),ga=!0)},o(p){N(e.$$.fragment,p),N(T),N(vt.$$.fragment,p),N(Vt.$$.fragment,p),N(Rt.$$.fragment,p),N(zt.$$.fragment,p),N(Ft.$$.fragment,p),N(jt.$$.fragment,p),N(kt.$$.fragment,p),N($t.$$.fragment,p),N(_t.$$.fragment,p),N(Et.$$.fragment,p),N(It.$$.fragment,p),N(At.$$.fragment,p),N(Wt.$$.fragment,p),N(Ut.$$.fragment,p),N(Gt.$$.fragment,p),N(Bt.$$.fragment,p),N(qt.$$.fragment,p),N(Xt.$$.fragment,p),N(Kt.$$.fragment,p),N(Qt.$$.fragment,p),N(Jt.$$.fragment,p),N(St.$$.fragment,p),ga=!1},d(p){L(e,p),p&&c(a),p&&c(n),te[Y].d(),L(vt),L(Vt),L(Rt),L(zt),L(Ft),L(jt),L(kt),L($t),L(_t),L(Et),L(It),L(At),L(Wt),L(Ut),L(Gt),L(Bt),L(qt),L(Xt),L(Kt),L(Qt),L(Jt),L(St)}}}function cf(t,e,a){let n=!0;return qo(()=>Jo(Zo,"installed").subscribe(i=>{i&&a(0,n=!1)})),[n]}class df extends La{constructor(e){super(),Va(this,e,cf,ff,Ra,{})}}export{df as default};
