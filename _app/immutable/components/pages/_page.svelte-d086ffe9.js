import{S as Ao,i as $o,s as Co,K as ns,e as Qi,L as as,b as vt,A as Ji,h as c,v as F,a as x,k as d,q as k,w as H,c as w,l as v,m as g,r as _,n as E,M as rs,x as j,I as o,t as D,d as is,f as L,y as Y,o as os,g as ss}from"../../chunks/index-f05389bd.js";import{c as ls,H as fs,B as Dn,l as cs,i as us}from"../../chunks/Header-1aabd597.js";function to(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?to(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ln(t){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ln(t)}function ms(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function eo(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ds(t,e,n){return e&&eo(t.prototype,e),n&&eo(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qr(t,e){return gs(t)||hs(t,e)||So(t,e)||ys()}function fn(t){return vs(t)||ps(t)||So(t)||bs()}function vs(t){if(Array.isArray(t))return Rr(t)}function gs(t){if(Array.isArray(t))return t}function ps(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hs(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,s,l;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,l=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function So(t,e){if(!!t){if(typeof t=="string")return Rr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(t,e)}}function Rr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function bs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ys(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Kr={},Oo={},No=null,To={mark:no,measure:no};try{typeof window<"u"&&(Kr=window),typeof document<"u"&&(Oo=document),typeof MutationObserver<"u"&&(No=MutationObserver),typeof performance<"u"&&(To=performance)}catch{}var xs=Kr.navigator||{},ao=xs.userAgent,ro=ao===void 0?"":ao,Tt=Kr,O=Oo,io=No,_n=To;Tt.document;var bt=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Po=~ro.indexOf("MSIE")||~ro.indexOf("Trident/"),En,In,An,$n,Cn,gt="___FONT_AWESOME___",zr=16,Do="fa",Lo="svg-inline--fa",ne="data-fa-i2svg",Fr="data-fa-pseudo-element",ws="data-fa-pseudo-element-pending",Zr="data-prefix",Qr="data-icon",oo="fontawesome-i2svg",ks="async",_s=["HTML","HEAD","STYLE","SCRIPT"],Mo=function(){try{return!0}catch{return!1}}(),S="classic",R="sharp",Jr=[S,R];function cn(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[S]}})}var an=cn((En={},X(En,S,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),X(En,R,{fa:"solid",fass:"solid","fa-solid":"solid"}),En)),rn=cn((In={},X(In,S,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(In,R,{solid:"fass"}),In)),on=cn((An={},X(An,S,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(An,R,{fass:"fa-solid"}),An)),Es=cn(($n={},X($n,S,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X($n,R,{"fa-solid":"fass"}),$n)),Is=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Vo="fa-layers-text",As=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$s=cn((Cn={},X(Cn,S,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(Cn,R,{900:"fass"}),Cn)),Ro=[1,2,3,4,5,6,7,8,9,10],Cs=Ro.concat([11,12,13,14,15,16,17,18,19,20]),Ss=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(rn[S]).map(sn.add.bind(sn));Object.keys(rn[R]).map(sn.add.bind(sn));var Os=[].concat(Jr,fn(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",te.GROUP,te.SWAP_OPACITY,te.PRIMARY,te.SECONDARY]).concat(Ro.map(function(t){return"".concat(t,"x")})).concat(Cs.map(function(t){return"w-".concat(t)})),en=Tt.FontAwesomeConfig||{};function Ns(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ts(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O&&typeof O.querySelector=="function"){var Ps=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ps.forEach(function(t){var e=qr(t,2),n=e[0],a=e[1],r=Ts(Ns(n));r!=null&&(en[a]=r)})}var zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Do,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Se=p(p({},zo),en);Se.autoReplaceSvg||(Se.observeMutations=!1);var b={};Object.keys(zo).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(n){Se[t]=n,nn.forEach(function(a){return a(b)})},get:function(){return Se[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){Se.cssPrefix=e,nn.forEach(function(n){return n(b)})},get:function(){return Se.cssPrefix}});Tt.FontAwesomeConfig=b;var nn=[];function Ds(t){return nn.push(t),function(){nn.splice(nn.indexOf(t),1)}}var Nt=zr,ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ls(t){if(!(!t||!bt)){var e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=O.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return O.head.insertBefore(e,a),t}}var Ms="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ln(){for(var t=12,e="";t-- >0;)e+=Ms[Math.random()*62|0];return e}function Oe(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ti(t){return t.classList?Oe(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Fo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vs(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Fo(t[n]),'" ')},"").trim()}function Rn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ei(t){return t.size!==ut.size||t.x!==ut.x||t.y!==ut.y||t.rotate!==ut.rotate||t.flipX||t.flipY}function Rs(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:m}}function zs(t){var e=t.transform,n=t.width,a=n===void 0?zr:n,r=t.height,i=r===void 0?zr:r,s=t.startCentered,l=s===void 0?!1:s,f="";return l&&Po?f+="translate(".concat(e.x/Nt-a/2,"em, ").concat(e.y/Nt-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(e.x/Nt,"em), calc(-50% + ").concat(e.y/Nt,"em)) "):f+="translate(".concat(e.x/Nt,"em, ").concat(e.y/Nt,"em) "),f+="scale(".concat(e.size/Nt*(e.flipX?-1:1),", ").concat(e.size/Nt*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Fs=`:root, :host {
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
}`;function Ho(){var t=Do,e=Lo,n=b.cssPrefix,a=b.replacementClass,r=Fs;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var so=!1;function Pr(){b.autoAddCss&&!so&&(Ls(Ho()),so=!0)}var Hs={mixout:function(){return{dom:{css:Ho,insertCss:Pr}}},hooks:function(){return{beforeDOMElementCreation:function(){Pr()},beforeI2svg:function(){Pr()}}}},pt=Tt||{};pt[gt]||(pt[gt]={});pt[gt].styles||(pt[gt].styles={});pt[gt].hooks||(pt[gt].hooks={});pt[gt].shims||(pt[gt].shims=[]);var ft=pt[gt],jo=[],js=function t(){O.removeEventListener("DOMContentLoaded",t),Mn=1,jo.map(function(e){return e()})},Mn=!1;bt&&(Mn=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Mn||O.addEventListener("DOMContentLoaded",js));function Ys(t){!bt||(Mn?setTimeout(t,0):jo.push(t))}function un(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Fo(t):"<".concat(e," ").concat(Vs(a),">").concat(i.map(un).join(""),"</").concat(e,">")}function lo(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ws=function(e,n){return function(a,r,i,s){return e.call(n,a,r,i,s)}},Dr=function(e,n,a,r){var i=Object.keys(e),s=i.length,l=r!==void 0?Ws(n,r):n,f,m,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<s;f++)m=i[f],u=l(u,e[m],m,e);return u};function Us(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Hr(t){var e=Us(t);return e.length===1?e[0].toString(16):null}function Gs(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fo(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function jr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=fo(e);typeof ft.hooks.addPack=="function"&&!r?ft.hooks.addPack(t,fo(e)):ft.styles[t]=p(p({},ft.styles[t]||{}),i),t==="fas"&&jr("fa",e)}var Sn,On,Nn,Ae=ft.styles,Bs=ft.shims,Xs=(Sn={},X(Sn,S,Object.values(on[S])),X(Sn,R,Object.values(on[R])),Sn),ni=null,Yo={},Wo={},Uo={},Go={},Bo={},qs=(On={},X(On,S,Object.keys(an[S])),X(On,R,Object.keys(an[R])),On);function Ks(t){return~Os.indexOf(t)}function Zs(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ks(r)?r:null}var Xo=function(){var e=function(i){return Dr(Ae,function(s,l,f){return s[f]=Dr(l,i,{}),s},{})};Yo=e(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=s})}return r}),Wo=e(function(r,i,s){if(r[s]=s,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=s})}return r}),Bo=e(function(r,i,s){var l=i[2];return r[s]=s,l.forEach(function(f){r[f]=s}),r});var n="far"in Ae||b.autoFetchSvg,a=Dr(Bs,function(r,i){var s=i[0],l=i[1],f=i[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(r.names[s]={prefix:l,iconName:f}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});Uo=a.names,Go=a.unicodes,ni=zn(b.styleDefault,{family:b.familyDefault})};Ds(function(t){ni=zn(t.styleDefault,{family:b.familyDefault})});Xo();function ai(t,e){return(Yo[t]||{})[e]}function Qs(t,e){return(Wo[t]||{})[e]}function ee(t,e){return(Bo[t]||{})[e]}function qo(t){return Uo[t]||{prefix:null,iconName:null}}function Js(t){var e=Go[t],n=ai("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pt(){return ni}var ri=function(){return{prefix:null,iconName:null,rest:[]}};function zn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?S:n,r=an[a][t],i=rn[a][t]||rn[a][r],s=t in ft.styles?t:null;return i||s||null}var co=(Nn={},X(Nn,S,Object.keys(on[S])),X(Nn,R,Object.keys(on[R])),Nn);function Fn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},X(e,S,"".concat(b.cssPrefix,"-").concat(S)),X(e,R,"".concat(b.cssPrefix,"-").concat(R)),e),s=null,l=S;(t.includes(i[S])||t.some(function(m){return co[S].includes(m)}))&&(l=S),(t.includes(i[R])||t.some(function(m){return co[R].includes(m)}))&&(l=R);var f=t.reduce(function(m,u){var h=Zs(b.cssPrefix,u);if(Ae[u]?(u=Xs[l].includes(u)?Es[l][u]:u,s=u,m.prefix=u):qs[l].indexOf(u)>-1?(s=u,m.prefix=zn(u,{family:l})):h?m.iconName=h:u!==b.replacementClass&&u!==i[S]&&u!==i[R]&&m.rest.push(u),!r&&m.prefix&&m.iconName){var I=s==="fa"?qo(m.iconName):{},A=ee(m.prefix,m.iconName);I.prefix&&(s=null),m.iconName=I.iconName||A||m.iconName,m.prefix=I.prefix||m.prefix,m.prefix==="far"&&!Ae.far&&Ae.fas&&!b.autoFetchSvg&&(m.prefix="fas")}return m},ri());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===R&&(Ae.fass||b.autoFetchSvg)&&(f.prefix="fass",f.iconName=ee(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||s==="fa")&&(f.prefix=Pt()||"fas"),f}var tl=function(){function t(){ms(this,t),this.definitions={}}return ds(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=p(p({},n.definitions[l]||{}),s[l]),jr(l,s[l]);var f=on[S][l];f&&jr(f,s[l]),Xo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var s=r[i],l=s.prefix,f=s.iconName,m=s.icon,u=m[2];n[l]||(n[l]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[l][h]=m)}),n[l][f]=m}),n}}]),t}(),uo=[],$e={},Ce={},el=Object.keys(Ce);function nl(t,e){var n=e.mixoutsTo;return uo=t,$e={},Object.keys(Ce).forEach(function(a){el.indexOf(a)===-1&&delete Ce[a]}),uo.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),Ln(r[s])==="object"&&Object.keys(r[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=r[s][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(s){$e[s]||($e[s]=[]),$e[s].push(i[s])})}a.provides&&a.provides(Ce)}),n}function Yr(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=$e[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function ae(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=$e[t]||[];r.forEach(function(i){i.apply(null,n)})}function ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ce[t]?Ce[t].apply(null,e):void 0}function Wr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pt();if(!!e)return e=ee(n,e)||e,lo(Ko.definitions,n,e)||lo(ft.styles,n,e)}var Ko=new tl,al=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,ae("noAuto")},rl={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(ae("beforeI2svg",e),ht("pseudoElements2svg",e),ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Ys(function(){ol({autoReplaceSvgRoot:n}),ae("watch",e)})}},il={icon:function(e){if(e===null)return null;if(Ln(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ee(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=zn(e[0]);return{prefix:a,iconName:ee(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(Is))){var r=Fn(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Pt(),iconName:ee(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Pt();return{prefix:i,iconName:ee(i,e)||e}}}},et={noAuto:al,config:b,dom:rl,parse:il,library:Ko,findIconDefinition:Wr,toHtml:un},ol=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?O:n;(Object.keys(ft.styles).length>0||b.autoFetchSvg)&&bt&&b.autoReplaceSvg&&et.dom.i2svg({node:a})};function Hn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return un(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!bt){var a=O.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function sl(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,s=t.transform;if(ei(s)&&n.found&&!a.found){var l=n.width,f=n.height,m={x:l/f/2,y:.5};r.style=Rn(p(p({},i),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ll(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},r),{},{id:s}),children:a}]}]}function ii(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,s=t.transform,l=t.symbol,f=t.title,m=t.maskId,u=t.titleId,h=t.extra,I=t.watchable,A=I===void 0?!1:I,G=a.found?a:n,z=G.width,J=G.height,M=r==="fak",$=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(C){return h.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(h.classes).join(" "),B={children:[],attributes:p(p({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:$,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(J)})},P=M&&!~h.classes.indexOf("fa-fw")?{width:"".concat(z/J*16*.0625,"em")}:{};A&&(B.attributes[ne]=""),f&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(u||ln())},children:[f]}),delete B.attributes.title);var V=p(p({},B),{},{prefix:r,iconName:i,main:n,mask:a,maskId:m,transform:s,symbol:l,styles:p(p({},P),h.styles)}),tt=a.found&&n.found?ht("generateAbstractMask",V)||{children:[],attributes:{}}:ht("generateAbstractIcon",V)||{children:[],attributes:{}},ot=tt.children,Lt=tt.attributes;return V.children=ot,V.attributes=Lt,l?ll(V):sl(V)}function mo(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,s=t.extra,l=t.watchable,f=l===void 0?!1:l,m=p(p(p({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});f&&(m[ne]="");var u=p({},s.styles);ei(r)&&(u.transform=zs({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var h=Rn(u);h.length>0&&(m.style=h);var I=[];return I.push({tag:"span",attributes:m,children:[e]}),i&&I.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),I}function fl(t){var e=t.content,n=t.title,a=t.extra,r=p(p(p({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Rn(a.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Lr=ft.styles;function Ur(t){var e=t[0],n=t[1],a=t.slice(4),r=qr(a,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(te.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(te.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var cl={found:!1,width:512,height:512};function ul(t,e){!Mo&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gr(t,e){var n=e;return e==="fa"&&b.styleDefault!==null&&(e=Pt()),new Promise(function(a,r){if(ht("missingIconAbstract"),n==="fa"){var i=qo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Lr[e]&&Lr[e][t]){var s=Lr[e][t];return a(Ur(s))}ul(t,e),a(p(p({},cl),{},{icon:b.showMissingIcons&&t?ht("missingIconAbstract")||{}:{}}))})}var vo=function(){},Br=b.measurePerformance&&_n&&_n.mark&&_n.measure?_n:{mark:vo,measure:vo},tn='FA "6.2.0"',ml=function(e){return Br.mark("".concat(tn," ").concat(e," begins")),function(){return Zo(e)}},Zo=function(e){Br.mark("".concat(tn," ").concat(e," ends")),Br.measure("".concat(tn," ").concat(e),"".concat(tn," ").concat(e," begins"),"".concat(tn," ").concat(e," ends"))},oi={begin:ml,end:Zo},Tn=function(){};function go(t){var e=t.getAttribute?t.getAttribute(ne):null;return typeof e=="string"}function dl(t){var e=t.getAttribute?t.getAttribute(Zr):null,n=t.getAttribute?t.getAttribute(Qr):null;return e&&n}function vl(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function gl(){if(b.autoReplaceSvg===!0)return Pn.replace;var t=Pn[b.autoReplaceSvg];return t||Pn.replace}function pl(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function hl(t){return O.createElement(t)}function Qo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?pl:hl:n;if(typeof t=="string")return O.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){r.appendChild(Qo(s,{ceFn:a}))}),r}function bl(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Qo(r),n)}),n.getAttribute(ne)===null&&b.keepOriginalSource){var a=O.createComment(bl(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ti(n).indexOf(b.replacementClass))return Pn.replace(e);var r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,f){return f===b.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=a.map(function(l){return un(l)}).join(`
`);n.setAttribute(ne,""),n.innerHTML=s}};function po(t){t()}function Jo(t,e){var n=typeof e=="function"?e:Tn;if(t.length===0)n();else{var a=po;b.mutateApproach===ks&&(a=Tt.requestAnimationFrame||po),a(function(){var r=gl(),i=oi.begin("mutate");t.map(r),i(),n()})}}var si=!1;function ts(){si=!0}function Xr(){si=!1}var Vn=null;function ho(t){if(!!io&&!!b.observeMutations){var e=t.treeCallback,n=e===void 0?Tn:e,a=t.nodeCallback,r=a===void 0?Tn:a,i=t.pseudoElementsCallback,s=i===void 0?Tn:i,l=t.observeMutationsRoot,f=l===void 0?O:l;Vn=new io(function(m){if(!si){var u=Pt();Oe(m).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!go(h.addedNodes[0])&&(b.searchPseudoElements&&s(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&b.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&go(h.target)&&~Ss.indexOf(h.attributeName))if(h.attributeName==="class"&&dl(h.target)){var I=Fn(ti(h.target)),A=I.prefix,G=I.iconName;h.target.setAttribute(Zr,A||u),G&&h.target.setAttribute(Qr,G)}else vl(h.target)&&r(h.target)})}}),bt&&Vn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yl(){!Vn||Vn.disconnect()}function xl(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function wl(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Fn(ti(t));return r.prefix||(r.prefix=Pt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Qs(r.prefix,t.innerText)||ai(r.prefix,Hr(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function kl(t){var e=Oe(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||ln()):(e["aria-hidden"]="true",e.focusable="false")),e}function _l(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wl(t),a=n.iconName,r=n.prefix,i=n.rest,s=kl(t),l=Yr("parseNodeAttributes",{},t),f=e.styleParser?xl(t):[];return p({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:s}},l)}var El=ft.styles;function es(t){var e=b.autoReplaceSvg==="nest"?bo(t,{styleParser:!1}):bo(t);return~e.extra.classes.indexOf(Vo)?ht("generateLayersText",t,e):ht("generateSvgReplacementMutation",t,e)}var Dt=new Set;Jr.map(function(t){Dt.add("fa-".concat(t))});Object.keys(an[S]).map(Dt.add.bind(Dt));Object.keys(an[R]).map(Dt.add.bind(Dt));Dt=fn(Dt);function yo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();var n=O.documentElement.classList,a=function(h){return n.add("".concat(oo,"-").concat(h))},r=function(h){return n.remove("".concat(oo,"-").concat(h))},i=b.autoFetchSvg?Dt:Jr.map(function(u){return"fa-".concat(u)}).concat(Object.keys(El));i.includes("fa")||i.push("fa");var s=[".".concat(Vo,":not([").concat(ne,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(ne,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=Oe(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var f=oi.begin("onTree"),m=l.reduce(function(u,h){try{var I=es(h);I&&u.push(I)}catch(A){Mo||A.name==="MissingIcon"&&console.error(A)}return u},[]);return new Promise(function(u,h){Promise.all(m).then(function(I){Jo(I,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(function(I){f(),h(I)})})}function Il(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;es(t).then(function(n){n&&Jo([n],e)})}function Al(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Wr(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Wr(r||{})),t(a,p(p({},n),{},{mask:r}))}}var $l=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ut:a,i=n.symbol,s=i===void 0?!1:i,l=n.mask,f=l===void 0?null:l,m=n.maskId,u=m===void 0?null:m,h=n.title,I=h===void 0?null:h,A=n.titleId,G=A===void 0?null:A,z=n.classes,J=z===void 0?[]:z,M=n.attributes,$=M===void 0?{}:M,B=n.styles,P=B===void 0?{}:B;if(!!e){var V=e.prefix,tt=e.iconName,ot=e.icon;return Hn(p({type:"icon"},e),function(){return ae("beforeDOMElementCreation",{iconDefinition:e,params:n}),b.autoA11y&&(I?$["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(G||ln()):($["aria-hidden"]="true",$.focusable="false")),ii({icons:{main:Ur(ot),mask:f?Ur(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:tt,transform:p(p({},ut),r),symbol:s,title:I,maskId:u,titleId:G,extra:{attributes:$,styles:P,classes:J}})})}},Cl={mixout:function(){return{icon:Al($l)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=Il,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?O:a,i=n.callback,s=i===void 0?function(){}:i;return yo(r,s)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,s=a.titleId,l=a.prefix,f=a.transform,m=a.symbol,u=a.mask,h=a.maskId,I=a.extra;return new Promise(function(A,G){Promise.all([Gr(r,l),u.iconName?Gr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var J=qr(z,2),M=J[0],$=J[1];A([n,ii({icons:{main:M,mask:$},prefix:l,iconName:r,transform:f,symbol:m,maskId:h,title:i,titleId:s,extra:I,watchable:!0})])}).catch(G)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.transform,l=n.styles,f=Rn(l);f.length>0&&(r.style=f);var m;return ei(s)&&(m=ht("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),a.push(m||i.icon),{children:a,attributes:r}}}},Sl={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Hn({type:"layer"},function(){ae("beforeDOMElementCreation",{assembler:n,params:a});var s=[];return n(function(l){Array.isArray(l)?l.map(function(f){s=s.concat(f.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(fn(i)).join(" ")},children:s}]})}}}},Ol={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,s=a.classes,l=s===void 0?[]:s,f=a.attributes,m=f===void 0?{}:f,u=a.styles,h=u===void 0?{}:u;return Hn({type:"counter",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),fl({content:n.toString(),title:i,extra:{attributes:m,styles:h,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(fn(l))}})})}}}},Nl={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ut:r,s=a.title,l=s===void 0?null:s,f=a.classes,m=f===void 0?[]:f,u=a.attributes,h=u===void 0?{}:u,I=a.styles,A=I===void 0?{}:I;return Hn({type:"text",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),mo({content:n,transform:p(p({},ut),i),title:l,extra:{attributes:h,styles:A,classes:["".concat(b.cssPrefix,"-layers-text")].concat(fn(m))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,s=a.extra,l=null,f=null;if(Po){var m=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();l=u.width/m,f=u.height/m}return b.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:l,height:f,transform:i,title:r,extra:s,watchable:!0})])}}},Tl=new RegExp('"',"ug"),xo=[1105920,1112319];function Pl(t){var e=t.replace(Tl,""),n=Gs(e,0),a=n>=xo[0]&&n<=xo[1],r=e.length===2?e[0]===e[1]:!1;return{value:Hr(r?e[0]:e),isSecondary:a||r}}function wo(t,e){var n="".concat(ws).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=Oe(t.children),s=i.filter(function(ot){return ot.getAttribute(Fr)===e})[0],l=Tt.getComputedStyle(t,e),f=l.getPropertyValue("font-family").match(As),m=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&u!=="none"&&u!==""){var h=l.getPropertyValue("content"),I=~["Sharp"].indexOf(f[2])?R:S,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rn[I][f[2].toLowerCase()]:$s[I][m],G=Pl(h),z=G.value,J=G.isSecondary,M=f[0].startsWith("FontAwesome"),$=ai(A,z),B=$;if(M){var P=Js(z);P.iconName&&P.prefix&&($=P.iconName,A=P.prefix)}if($&&!J&&(!s||s.getAttribute(Zr)!==A||s.getAttribute(Qr)!==B)){t.setAttribute(n,B),s&&t.removeChild(s);var V=_l(),tt=V.extra;tt.attributes[Fr]=e,Gr($,A).then(function(ot){var Lt=ii(p(p({},V),{},{icons:{main:ot,mask:ri()},prefix:A,iconName:B,extra:tt,watchable:!0})),C=O.createElement("svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=Lt.map(function(mt){return un(mt)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Dl(t){return Promise.all([wo(t,"::before"),wo(t,"::after")])}function Ll(t){return t.parentNode!==document.head&&!~_s.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Fr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ko(t){if(!!bt)return new Promise(function(e,n){var a=Oe(t.querySelectorAll("*")).filter(Ll).map(Dl),r=oi.begin("searchPseudoElements");ts(),Promise.all(a).then(function(){r(),Xr(),e()}).catch(function(){r(),Xr(),n()})})}var Ml={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ko,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?O:a;b.searchPseudoElements&&ko(r)}}},_o=!1,Vl={mixout:function(){return{dom:{unwatch:function(){ts(),_o=!0}}}},hooks:function(){return{bootstrap:function(){ho(Yr("mutationObserverCallbacks",{}))},noAuto:function(){yl()},watch:function(n){var a=n.observeMutationsRoot;_o?Xr():ho(Yr("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Eo=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),s=i[0],l=i.slice(1).join("-");if(s&&l==="h")return a.flipX=!0,a;if(s&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(s){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},Rl={mixout:function(){return{parse:{transform:function(n){return Eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Eo(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(f," ").concat(m," ").concat(u)},I={transform:"translate(".concat(s/2*-1," -256)")},A={outer:l,inner:h,path:I};return{tag:"g",attributes:p({},A.outer),children:[{tag:"g",attributes:p({},A.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:p(p({},a.icon.attributes),A.path)}]}]}}}},Mr={x:0,y:0,width:"100%",height:"100%"};function Io(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zl(t){return t.tag==="g"?t.children:[t]}var Fl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Fn(r.split(" ").map(function(s){return s.trim()})):ri();return i.prefix||(i.prefix=Pt()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.mask,l=n.maskId,f=n.transform,m=i.width,u=i.icon,h=s.width,I=s.icon,A=Rs({transform:f,containerWidth:h,iconWidth:m}),G={tag:"rect",attributes:p(p({},Mr),{},{fill:"white"})},z=u.children?{children:u.children.map(Io)}:{},J={tag:"g",attributes:p({},A.inner),children:[Io(p({tag:u.tag,attributes:p(p({},u.attributes),A.path)},z))]},M={tag:"g",attributes:p({},A.outer),children:[J]},$="mask-".concat(l||ln()),B="clip-".concat(l||ln()),P={tag:"mask",attributes:p(p({},Mr),{},{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,M]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:zl(I)},P]};return a.push(V,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat($,")")},Mr)}),{children:a,attributes:r}}}},Hl={provides:function(e){var n=!1;Tt.matchMedia&&(n=Tt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=p(p({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:p(p({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},jl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Yl=[Hs,Cl,Sl,Ol,Nl,Ml,Vl,Rl,Fl,Hl,jl];nl(Yl,{mixoutsTo:et});et.noAuto;var Wl=et.config,Ul=et.library;et.dom;et.parse;et.findIconDefinition;et.toHtml;var Gl=et.icon;et.layer;et.text;et.counter;function Bl(t){let e,n;return{c(){e=new ns(!1),n=Qi(),this.h()},l(a){e=as(a,!1),n=Qi(),this.h()},h(){e.a=n},m(a,r){e.m(t[0],a,r),vt(a,n,r)},p(a,[r]){r&1&&e.p(a[0])},i:Ji,o:Ji,d(a){a&&c(n),a&&e.d()}}}Wl.autoAddCss=!1;function Xl(t,e,n){let a,{icon:r}=e,{class:i=""}=e,{fixedWidth:s=!1}=e;return t.$$set=l=>{"icon"in l&&n(1,r=l.icon),"class"in l&&n(2,i=l.class),"fixedWidth"in l&&n(3,s=l.fixedWidth)},t.$$.update=()=>{var l,f;t.$$.dirty&2&&Ul.add(r),t.$$.dirty&14&&n(0,a=(f=(l=Gl({prefix:"fas",iconName:r.iconName},{classes:ls(i,s?"fa-fw":void 0)}))==null?void 0:l.html)!=null?f:"")},[a,r,i,s]}class Q extends Ao{constructor(e){super(),$o(this,e,Xl,Bl,Co,{icon:1,class:2,fixedWidth:3})}}var Vr={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},ql={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"]},Kl={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"]},Zl=Kl,Ql={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"]},Jl={prefix:"fas",iconName:"chalkboard",icon:[576,512,["blackboard"],"f51b","M96 32C60.7 32 32 60.7 32 96V384H96V96l384 0V384h64V96c0-35.3-28.7-64-64-64H96zM224 384v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H416V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32z"]},tf={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"]},ef=tf,nf={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Je={prefix:"fas",iconName:"crosshairs",icon:[512,512,[],"f05b","M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},af={prefix:"fas",iconName:"arrows-turn-to-dots",icon:[512,512,[],"e4c1","M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96 416 96c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7-14.3-32-32-32l-146.7 0 25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3l80-80zm13.3 256l80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 416 96 416c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448c0-53 43-96 96-96l146.7 0-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0zM512 384c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM64 64c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64S28.7 64 64 64z"]},rf={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function of(t){let e,n,a;return n=new Dn({props:{$$slots:{default:[lf]},$$scope:{ctx:t}}}),{c(){e=d("a"),F(n.$$.fragment),this.h()},l(r){e=v(r,"A",{href:!0});var i=g(e);H(n.$$.fragment,i),i.forEach(c),this.h()},h(){E(e,"href","steam://connect/dm1.sappho.io:27315")},m(r,i){vt(r,e,i),j(n,e,null),a=!0},i(r){a||(L(n.$$.fragment,r),a=!0)},o(r){D(n.$$.fragment,r),a=!1},d(r){r&&c(e),Y(n)}}}function sf(t){let e,n,a;return n=new Dn({props:{$$slots:{default:[ff]},$$scope:{ctx:t}}}),{c(){e=d("a"),F(n.$$.fragment),this.h()},l(r){e=v(r,"A",{href:!0});var i=g(e);H(n.$$.fragment,i),i.forEach(c),this.h()},h(){E(e,"href","/app")},m(r,i){vt(r,e,i),j(n,e,null),a=!0},i(r){a||(L(n.$$.fragment,r),a=!0)},o(r){D(n.$$.fragment,r),a=!1},d(r){r&&c(e),Y(n)}}}function lf(t){let e;return{c(){e=k("Launch")},l(n){e=_(n,"Launch")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function ff(t){let e;return{c(){e=k("Install Now")},l(n){e=_(n,"Install Now")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function cf(t){let e;return{c(){e=k("See More")},l(n){e=_(n,"See More")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function uf(t){let e;return{c(){e=k("Get it")},l(n){e=_(n,"Get it")},m(n,a){vt(n,e,a)},d(n){n&&c(e)}}}function mf(t){let e,n,a,r,i,s,l,f,m,u,h,I,A,G,z,J,M,$,B,P,V,tt,ot,Lt,C,mt,jn,re,Yn,Ne,Wn,Un,Mt,Gn,ie,Te,Bn,Xn,qn,Vt,Kn,oe,Pe,Zn,Qn,Jn,yt,se,ta,ea,q,Rt,na,De,aa,ra,zt,ia,Le,oa,sa,Ft,la,Me,fa,ca,le,ua,ma,fe,xt,da,ce,K,Ht,ue,va,ga,me,pa,ha,wt,ba,Ve,ya,xa,wa,kt,ka,Re,_a,Ea,Ia,_t,Aa,ze,$a,Ca,Sa,de,Oa,Na,Et,Ta,Fe,Pa,Da,La,nt,dt,ve,Ma,Va,ge,Ra,za,N,jt,Fa,He,Ha,ja,Yt,Ya,je,Wa,Ua,Wt,Ga,Ye,Ba,Xa,Ut,qa,We,Ka,Za,Gt,Qa,Ue,Ja,tr,st,pe,er,nr,he,ar,rr,W,Bt,ir,Ge,or,sr,Xt,lr,Be,fr,cr,qt,ur,Xe,mr,dr,Kt,vr,qe,gr,pr,It,hr,Ke,br,yr,xr,be,Zt,wr,ye,At,kr,xe,$t,Qt,we,_r,Er,ke,Ir,Ar,_e,lt,li,$r,Ee,Cr,mn;e=new fs({});const fi=[sf,of],Jt=[];function ci(y,T){return y[0]?0:1}return M=ci(t),$=Jt[M]=fi[M](t),mt=new Q({props:{icon:Vr,fixedWidth:!0}}),Mt=new Q({props:{icon:Vr,fixedWidth:!0}}),Vt=new Q({props:{icon:Vr,fixedWidth:!0}}),Rt=new Q({props:{icon:ql,fixedWidth:!0}}),zt=new Q({props:{icon:nf,fixedWidth:!0}}),Ft=new Q({props:{icon:ef,fixedWidth:!0}}),xt=new Dn({props:{$$slots:{default:[cf]},$$scope:{ctx:t}}}),jt=new Q({props:{icon:Je,fixedWidth:!0}}),Yt=new Q({props:{icon:Je,fixedWidth:!0}}),Wt=new Q({props:{icon:Je,fixedWidth:!0}}),Ut=new Q({props:{icon:Je,fixedWidth:!0}}),Gt=new Q({props:{icon:Je,fixedWidth:!0}}),Bt=new Q({props:{icon:rf,fixedWidth:!0}}),Xt=new Q({props:{icon:af,fixedWidth:!0}}),qt=new Q({props:{icon:Jl,fixedWidth:!0}}),Kt=new Q({props:{icon:Zl,fixedWidth:!0}}),Zt=new Q({props:{icon:Ql}}),At=new Dn({props:{$$slots:{default:[uf]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment),n=x(),a=d("main"),r=d("div"),i=d("div"),s=k("Want to be on top? Get"),l=x(),f=d("div"),m=d("div"),u=k("On the Box"),h=x(),I=d("div"),A=k("A gateway to wild skill in TF2."),G=x(),z=d("div"),J=k(`Change the game
        `),$.c(),B=x(),P=d("div"),V=d("div"),tt=d("div"),ot=k("What can The Box do for you?"),Lt=x(),C=d("div"),F(mt.$$.fragment),jn=x(),re=d("div"),Yn=k("Perform your "),Ne=d("i"),Wn=k("best"),Un=x(),F(Mt.$$.fragment),Gn=x(),ie=d("div"),Te=d("i"),Bn=k("Impress"),Xn=k(" your peers"),qn=x(),F(Vt.$$.fragment),Kn=x(),oe=d("div"),Pe=d("i"),Zn=k("Eliminate"),Qn=k(" the competition"),Jn=x(),yt=d("div"),se=d("div"),ta=k("The Box is unbeatable"),ea=x(),q=d("div"),F(Rt.$$.fragment),na=x(),De=d("div"),aa=k("Lower RAM usage than LmaoBox"),ra=x(),F(zt.$$.fragment),ia=x(),Le=d("div"),oa=k("Undetectable by RGL, UGC, ETF2L, etc."),sa=x(),F(Ft.$$.fragment),la=x(),Me=d("div"),fa=k("VAC Immune"),ca=x(),le=d("div"),ua=k("100% free forever"),ma=x(),fe=d("div"),F(xt.$$.fragment),da=x(),ce=d("div"),K=d("div"),Ht=d("div"),ue=d("div"),va=k("Testimonials"),ga=x(),me=d("div"),pa=k("Identities hidden for privacy"),ha=x(),wt=d("div"),ba=k('"I was nervous heading to LAN, but with '),Ve=d("strong"),ya=k("On The Box"),xa=k(', I was able to perform better than ever." - **ile'),wa=x(),kt=d("div"),ka=k(`"I'm new to competitive and `),Re=d("strong"),_a=k("On The Box"),Ea=k(` has allowed
                me to jump straight in with the best." - ***endlynoodles`),Ia=x(),_t=d("div"),Aa=k(`"I only play casual, but I've been having a lot more fun since I
                picked up `),ze=d("strong"),$a=k("On The Box"),Ca=k(`. Now I always make it fat
                like my favorite streamer and I always end on a W." -
                ***ditforlife`),Sa=x(),de=d("div"),Oa=k(`"I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox." - ***ketball.barry.99`),Na=x(),Et=d("div"),Ta=k(`"I don't really have as much time to play anymore, but `),Fe=d("strong"),Pa=k("On The Box"),Da=k(` helps me stay on top when I get the chance
                to game." - ***liblegoobular`),La=x(),nt=d("div"),dt=d("div"),ve=d("div"),Ma=k("Compatilibity?"),Va=x(),ge=d("div"),Ra=k("We do it all."),za=x(),N=d("div"),F(jt.$$.fragment),Fa=x(),He=d("div"),Ha=k("Casual"),ja=x(),F(Yt.$$.fragment),Ya=x(),je=d("div"),Wa=k("Competitive"),Ua=x(),F(Wt.$$.fragment),Ga=x(),Ye=d("div"),Ba=k("MGE"),Xa=x(),F(Ut.$$.fragment),qa=x(),We=d("div"),Ka=k("DM"),Za=x(),F(Gt.$$.fragment),Qa=x(),Ue=d("div"),Ja=k("The list goes on..."),tr=x(),st=d("div"),pe=d("div"),er=k("Level up your brain"),nr=x(),he=d("div"),ar=k("It's not all about mechies. Get our"),rr=x(),W=d("div"),F(Bt.$$.fragment),ir=x(),Ge=d("div"),or=k("Training courses"),sr=x(),F(Xt.$$.fragment),lr=x(),Be=d("div"),fr=k("Strats"),cr=x(),F(qt.$$.fragment),ur=x(),Xe=d("div"),mr=k("Tips and tricks"),dr=x(),F(Kt.$$.fragment),vr=x(),qe=d("div"),gr=k("Groundbreaking theorycrafting"),pr=x(),It=d("div"),hr=k("From "),Ke=d("strong"),br=k("real"),yr=k(" pros. All 100% free."),xr=x(),be=d("div"),F(Zt.$$.fragment),wr=x(),ye=d("div"),F(At.$$.fragment),kr=x(),xe=d("div"),$t=d("div"),Qt=d("div"),we=d("div"),_r=k("Results"),Er=x(),ke=d("div"),Ir=k("The proof is in the pudding"),Ar=x(),_e=d("div"),lt=d("iframe"),$r=x(),Ee=d("div"),Cr=k("This site is a work of satire. No cheats are provided by On the Box."),this.h()},l(y){H(e.$$.fragment,y),n=w(y),a=v(y,"MAIN",{class:!0});var T=g(a);r=v(T,"DIV",{class:!0});var ct=g(r);i=v(ct,"DIV",{class:!0});var Ze=g(i);s=_(Ze,"Want to be on top? Get"),Ze.forEach(c),l=w(ct),f=v(ct,"DIV",{class:!0});var Qe=g(f);m=v(Qe,"DIV",{class:!0});var ui=g(m);u=_(ui,"On the Box"),ui.forEach(c),Qe.forEach(c),h=w(ct),I=v(ct,"DIV",{class:!0});var mi=g(I);A=_(mi,"A gateway to wild skill in TF2."),mi.forEach(c),ct.forEach(c),G=w(T),z=v(T,"DIV",{class:!0});var Sr=g(z);J=_(Sr,`Change the game
        `),$.l(Sr),Sr.forEach(c),B=w(T),P=v(T,"DIV",{class:!0});var Ct=g(P);V=v(Ct,"DIV",{class:!0});var dn=g(V);tt=v(dn,"DIV",{class:!0});var di=g(tt);ot=_(di,"What can The Box do for you?"),di.forEach(c),Lt=w(dn),C=v(dn,"DIV",{class:!0});var at=g(C);H(mt.$$.fragment,at),jn=w(at),re=v(at,"DIV",{});var Or=g(re);Yn=_(Or,"Perform your "),Ne=v(Or,"I",{});var vi=g(Ne);Wn=_(vi,"best"),vi.forEach(c),Or.forEach(c),Un=w(at),H(Mt.$$.fragment,at),Gn=w(at),ie=v(at,"DIV",{});var Nr=g(ie);Te=v(Nr,"I",{});var gi=g(Te);Bn=_(gi,"Impress"),gi.forEach(c),Xn=_(Nr," your peers"),Nr.forEach(c),qn=w(at),H(Vt.$$.fragment,at),Kn=w(at),oe=v(at,"DIV",{});var Tr=g(oe);Pe=v(Tr,"I",{});var pi=g(Pe);Zn=_(pi,"Eliminate"),pi.forEach(c),Qn=_(Tr," the competition"),Tr.forEach(c),at.forEach(c),dn.forEach(c),Jn=w(Ct),yt=v(Ct,"DIV",{class:!0});var vn=g(yt);se=v(vn,"DIV",{class:!0});var hi=g(se);ta=_(hi,"The Box is unbeatable"),hi.forEach(c),ea=w(vn),q=v(vn,"DIV",{class:!0});var rt=g(q);H(Rt.$$.fragment,rt),na=w(rt),De=v(rt,"DIV",{});var bi=g(De);aa=_(bi,"Lower RAM usage than LmaoBox"),bi.forEach(c),ra=w(rt),H(zt.$$.fragment,rt),ia=w(rt),Le=v(rt,"DIV",{});var yi=g(Le);oa=_(yi,"Undetectable by RGL, UGC, ETF2L, etc."),yi.forEach(c),sa=w(rt),H(Ft.$$.fragment,rt),la=w(rt),Me=v(rt,"DIV",{});var xi=g(Me);fa=_(xi,"VAC Immune"),xi.forEach(c),rt.forEach(c),vn.forEach(c),ca=w(Ct),le=v(Ct,"DIV",{class:!0});var wi=g(le);ua=_(wi,"100% free forever"),wi.forEach(c),ma=w(Ct),fe=v(Ct,"DIV",{class:!0});var ki=g(fe);H(xt.$$.fragment,ki),ki.forEach(c),Ct.forEach(c),da=w(T),ce=v(T,"DIV",{class:!0});var _i=g(ce);K=v(_i,"DIV",{class:!0});var it=g(K);Ht=v(it,"DIV",{});var gn=g(Ht);ue=v(gn,"DIV",{class:!0});var Ei=g(ue);va=_(Ei,"Testimonials"),Ei.forEach(c),ga=w(gn),me=v(gn,"DIV",{class:!0});var Ii=g(me);pa=_(Ii,"Identities hidden for privacy"),Ii.forEach(c),gn.forEach(c),ha=w(it),wt=v(it,"DIV",{class:!0});var pn=g(wt);ba=_(pn,'"I was nervous heading to LAN, but with '),Ve=v(pn,"STRONG",{});var Ai=g(Ve);ya=_(Ai,"On The Box"),Ai.forEach(c),xa=_(pn,', I was able to perform better than ever." - **ile'),pn.forEach(c),wa=w(it),kt=v(it,"DIV",{class:!0});var hn=g(kt);ka=_(hn,`"I'm new to competitive and `),Re=v(hn,"STRONG",{});var $i=g(Re);_a=_($i,"On The Box"),$i.forEach(c),Ea=_(hn,` has allowed
                me to jump straight in with the best." - ***endlynoodles`),hn.forEach(c),Ia=w(it),_t=v(it,"DIV",{class:!0});var bn=g(_t);Aa=_(bn,`"I only play casual, but I've been having a lot more fun since I
                picked up `),ze=v(bn,"STRONG",{});var Ci=g(ze);$a=_(Ci,"On The Box"),Ci.forEach(c),Ca=_(bn,`. Now I always make it fat
                like my favorite streamer and I always end on a W." -
                ***ditforlife`),bn.forEach(c),Sa=w(it),de=v(it,"DIV",{class:!0});var Si=g(de);Oa=_(Si,`"I only play bball these days and I gotta tell ya my rockets are
                CRISP when I'm #onthebox." - ***ketball.barry.99`),Si.forEach(c),Na=w(it),Et=v(it,"DIV",{class:!0});var yn=g(Et);Ta=_(yn,`"I don't really have as much time to play anymore, but `),Fe=v(yn,"STRONG",{});var Oi=g(Fe);Pa=_(Oi,"On The Box"),Oi.forEach(c),Da=_(yn,` helps me stay on top when I get the chance
                to game." - ***liblegoobular`),yn.forEach(c),it.forEach(c),_i.forEach(c),La=w(T),nt=v(T,"DIV",{class:!0});var St=g(nt);dt=v(St,"DIV",{});var Ie=g(dt);ve=v(Ie,"DIV",{class:!0});var Ni=g(ve);Ma=_(Ni,"Compatilibity?"),Ni.forEach(c),Va=w(Ie),ge=v(Ie,"DIV",{class:!0});var Ti=g(ge);Ra=_(Ti,"We do it all."),Ti.forEach(c),za=w(Ie),N=v(Ie,"DIV",{class:!0});var U=g(N);H(jt.$$.fragment,U),Fa=w(U),He=v(U,"DIV",{});var Pi=g(He);Ha=_(Pi,"Casual"),Pi.forEach(c),ja=w(U),H(Yt.$$.fragment,U),Ya=w(U),je=v(U,"DIV",{});var Di=g(je);Wa=_(Di,"Competitive"),Di.forEach(c),Ua=w(U),H(Wt.$$.fragment,U),Ga=w(U),Ye=v(U,"DIV",{});var Li=g(Ye);Ba=_(Li,"MGE"),Li.forEach(c),Xa=w(U),H(Ut.$$.fragment,U),qa=w(U),We=v(U,"DIV",{});var Mi=g(We);Ka=_(Mi,"DM"),Mi.forEach(c),Za=w(U),H(Gt.$$.fragment,U),Qa=w(U),Ue=v(U,"DIV",{});var Vi=g(Ue);Ja=_(Vi,"The list goes on..."),Vi.forEach(c),U.forEach(c),Ie.forEach(c),tr=w(St),st=v(St,"DIV",{});var Ot=g(st);pe=v(Ot,"DIV",{class:!0});var Ri=g(pe);er=_(Ri,"Level up your brain"),Ri.forEach(c),nr=w(Ot),he=v(Ot,"DIV",{class:!0});var zi=g(he);ar=_(zi,"It's not all about mechies. Get our"),zi.forEach(c),rr=w(Ot),W=v(Ot,"DIV",{class:!0});var Z=g(W);H(Bt.$$.fragment,Z),ir=w(Z),Ge=v(Z,"DIV",{});var Fi=g(Ge);or=_(Fi,"Training courses"),Fi.forEach(c),sr=w(Z),H(Xt.$$.fragment,Z),lr=w(Z),Be=v(Z,"DIV",{});var Hi=g(Be);fr=_(Hi,"Strats"),Hi.forEach(c),cr=w(Z),H(qt.$$.fragment,Z),ur=w(Z),Xe=v(Z,"DIV",{});var ji=g(Xe);mr=_(ji,"Tips and tricks"),ji.forEach(c),dr=w(Z),H(Kt.$$.fragment,Z),vr=w(Z),qe=v(Z,"DIV",{});var Yi=g(qe);gr=_(Yi,"Groundbreaking theorycrafting"),Yi.forEach(c),Z.forEach(c),pr=w(Ot),It=v(Ot,"DIV",{class:!0});var xn=g(It);hr=_(xn,"From "),Ke=v(xn,"STRONG",{});var Wi=g(Ke);br=_(Wi,"real"),Wi.forEach(c),yr=_(xn," pros. All 100% free."),xn.forEach(c),Ot.forEach(c),xr=w(St),be=v(St,"DIV",{class:!0});var Ui=g(be);H(Zt.$$.fragment,Ui),Ui.forEach(c),wr=w(St),ye=v(St,"DIV",{class:!0});var Gi=g(ye);H(At.$$.fragment,Gi),Gi.forEach(c),St.forEach(c),kr=w(T),xe=v(T,"DIV",{class:!0});var Bi=g(xe);$t=v(Bi,"DIV",{class:!0});var wn=g($t);Qt=v(wn,"DIV",{});var kn=g(Qt);we=v(kn,"DIV",{class:!0});var Xi=g(we);_r=_(Xi,"Results"),Xi.forEach(c),Er=w(kn),ke=v(kn,"DIV",{class:!0});var qi=g(ke);Ir=_(qi,"The proof is in the pudding"),qi.forEach(c),kn.forEach(c),Ar=w(wn),_e=v(wn,"DIV",{class:!0});var Ki=g(_e);lt=v(Ki,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),g(lt).forEach(c),Ki.forEach(c),wn.forEach(c),Bi.forEach(c),$r=w(T),Ee=v(T,"DIV",{class:!0});var Zi=g(Ee);Cr=_(Zi,"This site is a work of satire. No cheats are provided by On the Box."),Zi.forEach(c),T.forEach(c),this.h()},h(){E(i,"class","text-lg"),E(m,"class","mt-px -mb-px"),E(f,"class","bg-green-600 px-4 text-[2.75rem] font-bold tracking-tighter text-black"),E(I,"class","mt-4 text-base"),E(r,"class","mt-32 flex flex-col items-center"),E(z,"class","mx-auto -mt-6 flex w-72 flex-col items-center md:-mt-8"),E(tt,"class","mb-2 text-2xl font-bold"),E(C,"class","grid grid-cols-[auto_1fr] items-center gap-2"),E(V,"class","text-xl"),E(se,"class","mb-2 text-2xl font-bold"),E(q,"class","grid grid-cols-[auto_1fr] items-center gap-2"),E(yt,"class","text-xl"),E(le,"class","mx-auto mt-4 mb-2 text-3xl font-bold md:col-span-2"),E(fe,"class","mx-auto md:col-span-2"),E(P,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(ue,"class","text-2xl"),E(me,"class","text-xs"),E(wt,"class","md:col-start-2"),E(kt,"class","md:col-start-2"),E(_t,"class","md:col-start-2"),E(de,"class","md:col-start-2"),E(Et,"class","md:col-start-2"),E(K,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(ce,"class","-mx-8 bg-green-900/20 py-16 px-8"),E(ve,"class","text-2xl font-bold"),E(ge,"class","mb-2 text-sm"),E(N,"class","grid grid-cols-[auto_1fr] items-center gap-2 text-xl"),E(pe,"class","text-2xl font-bold"),E(he,"class","mb-2 text-sm"),E(W,"class","grid grid-cols-[auto_1fr] items-center gap-2 text-xl"),E(It,"class","mt-2 text-xl"),E(be,"class","mx-auto mt-6 -mb-4 text-5xl md:col-span-2"),E(ye,"class","mx-auto md:col-span-2"),E(nt,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(we,"class","text-2xl"),E(ke,"class","text-sm"),rs(lt.src,li="https://www.youtube.com/embed/9NZDwZbyD23us")||E(lt,"src",li),E(lt,"title","The Pudding"),E(lt,"frameborder","0"),E(lt,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),E(lt,"class","aspect-[2.34] h-60 max-w-full"),lt.allowFullscreen=!0,E(_e,"class","md:col-start-2"),E($t,"class","grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:place-items-center"),E(xe,"class","-mx-8 bg-green-900/20 py-16 px-8"),E(Ee,"class","mt-auto max-w-lg text-xs"),E(a,"class","flex min-h-[calc(100vh-4rem)] w-[100vw] flex-col gap-20 bg-black px-8 pb-6 pt-12 text-green-600 md:gap-36")},m(y,T){j(e,y,T),vt(y,n,T),vt(y,a,T),o(a,r),o(r,i),o(i,s),o(r,l),o(r,f),o(f,m),o(m,u),o(r,h),o(r,I),o(I,A),o(a,G),o(a,z),o(z,J),Jt[M].m(z,null),o(a,B),o(a,P),o(P,V),o(V,tt),o(tt,ot),o(V,Lt),o(V,C),j(mt,C,null),o(C,jn),o(C,re),o(re,Yn),o(re,Ne),o(Ne,Wn),o(C,Un),j(Mt,C,null),o(C,Gn),o(C,ie),o(ie,Te),o(Te,Bn),o(ie,Xn),o(C,qn),j(Vt,C,null),o(C,Kn),o(C,oe),o(oe,Pe),o(Pe,Zn),o(oe,Qn),o(P,Jn),o(P,yt),o(yt,se),o(se,ta),o(yt,ea),o(yt,q),j(Rt,q,null),o(q,na),o(q,De),o(De,aa),o(q,ra),j(zt,q,null),o(q,ia),o(q,Le),o(Le,oa),o(q,sa),j(Ft,q,null),o(q,la),o(q,Me),o(Me,fa),o(P,ca),o(P,le),o(le,ua),o(P,ma),o(P,fe),j(xt,fe,null),o(a,da),o(a,ce),o(ce,K),o(K,Ht),o(Ht,ue),o(ue,va),o(Ht,ga),o(Ht,me),o(me,pa),o(K,ha),o(K,wt),o(wt,ba),o(wt,Ve),o(Ve,ya),o(wt,xa),o(K,wa),o(K,kt),o(kt,ka),o(kt,Re),o(Re,_a),o(kt,Ea),o(K,Ia),o(K,_t),o(_t,Aa),o(_t,ze),o(ze,$a),o(_t,Ca),o(K,Sa),o(K,de),o(de,Oa),o(K,Na),o(K,Et),o(Et,Ta),o(Et,Fe),o(Fe,Pa),o(Et,Da),o(a,La),o(a,nt),o(nt,dt),o(dt,ve),o(ve,Ma),o(dt,Va),o(dt,ge),o(ge,Ra),o(dt,za),o(dt,N),j(jt,N,null),o(N,Fa),o(N,He),o(He,Ha),o(N,ja),j(Yt,N,null),o(N,Ya),o(N,je),o(je,Wa),o(N,Ua),j(Wt,N,null),o(N,Ga),o(N,Ye),o(Ye,Ba),o(N,Xa),j(Ut,N,null),o(N,qa),o(N,We),o(We,Ka),o(N,Za),j(Gt,N,null),o(N,Qa),o(N,Ue),o(Ue,Ja),o(nt,tr),o(nt,st),o(st,pe),o(pe,er),o(st,nr),o(st,he),o(he,ar),o(st,rr),o(st,W),j(Bt,W,null),o(W,ir),o(W,Ge),o(Ge,or),o(W,sr),j(Xt,W,null),o(W,lr),o(W,Be),o(Be,fr),o(W,cr),j(qt,W,null),o(W,ur),o(W,Xe),o(Xe,mr),o(W,dr),j(Kt,W,null),o(W,vr),o(W,qe),o(qe,gr),o(st,pr),o(st,It),o(It,hr),o(It,Ke),o(Ke,br),o(It,yr),o(nt,xr),o(nt,be),j(Zt,be,null),o(nt,wr),o(nt,ye),j(At,ye,null),o(a,kr),o(a,xe),o(xe,$t),o($t,Qt),o(Qt,we),o(we,_r),o(Qt,Er),o(Qt,ke),o(ke,Ir),o($t,Ar),o($t,_e),o(_e,lt),o(a,$r),o(a,Ee),o(Ee,Cr),mn=!0},p(y,[T]){let ct=M;M=ci(y),M!==ct&&(ss(),D(Jt[ct],1,1,()=>{Jt[ct]=null}),is(),$=Jt[M],$||($=Jt[M]=fi[M](y),$.c()),L($,1),$.m(z,null));const Ze={};T&2&&(Ze.$$scope={dirty:T,ctx:y}),xt.$set(Ze);const Qe={};T&2&&(Qe.$$scope={dirty:T,ctx:y}),At.$set(Qe)},i(y){mn||(L(e.$$.fragment,y),L($),L(mt.$$.fragment,y),L(Mt.$$.fragment,y),L(Vt.$$.fragment,y),L(Rt.$$.fragment,y),L(zt.$$.fragment,y),L(Ft.$$.fragment,y),L(xt.$$.fragment,y),L(jt.$$.fragment,y),L(Yt.$$.fragment,y),L(Wt.$$.fragment,y),L(Ut.$$.fragment,y),L(Gt.$$.fragment,y),L(Bt.$$.fragment,y),L(Xt.$$.fragment,y),L(qt.$$.fragment,y),L(Kt.$$.fragment,y),L(Zt.$$.fragment,y),L(At.$$.fragment,y),mn=!0)},o(y){D(e.$$.fragment,y),D($),D(mt.$$.fragment,y),D(Mt.$$.fragment,y),D(Vt.$$.fragment,y),D(Rt.$$.fragment,y),D(zt.$$.fragment,y),D(Ft.$$.fragment,y),D(xt.$$.fragment,y),D(jt.$$.fragment,y),D(Yt.$$.fragment,y),D(Wt.$$.fragment,y),D(Ut.$$.fragment,y),D(Gt.$$.fragment,y),D(Bt.$$.fragment,y),D(Xt.$$.fragment,y),D(qt.$$.fragment,y),D(Kt.$$.fragment,y),D(Zt.$$.fragment,y),D(At.$$.fragment,y),mn=!1},d(y){Y(e,y),y&&c(n),y&&c(a),Jt[M].d(),Y(mt),Y(Mt),Y(Vt),Y(Rt),Y(zt),Y(Ft),Y(xt),Y(jt),Y(Yt),Y(Wt),Y(Ut),Y(Gt),Y(Bt),Y(Xt),Y(qt),Y(Kt),Y(Zt),Y(At)}}}function df(t,e,n){let a=!0;return os(()=>cs(us,"installed").subscribe(i=>{i&&n(0,a=!1)})),[a]}class pf extends Ao{constructor(e){super(),$o(this,e,df,mf,Co,{})}}export{pf as default};
