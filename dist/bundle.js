(()=>{"use strict";var e={168:(e,t,o)=>{o.d(t,{A:()=>h});var a=o(897),n=o.n(a),r=o(874),s=o.n(r),i=o(577),c=o.n(i),l=new URL(o(288),o.b),d=new URL(o(927),o.b),f=s()(n()),u=c()(l),p=c()(d);f.push([e.id,`:root{--floes-chat-button-bottom: 16px;--floes-chat-button-right: 16px;--floes-chat-button-size: 56px;--floes-chat-button-border-radius: 50%;--floes-chat-button-icon-size: 32px;--floes-overlay-max-width: 400px;--floes-overlay-max-height: 600px;--floes-overlay-bottom: 16px;--floes-overlay-right: 16px;--floes-overlay-background: #fff;--floes-overlay-border-radius: 8px;--floes-overlay-box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;--floes-overlay-close-size: 32px;--floes-open-chat-icon: url(${u});--floes-overlay-close-icon: url(${p})}.floes-chat-button{position:fixed;z-index:999;bottom:var(--floes-chat-button-bottom);right:var(--floes-chat-button-right)}.floes-chat-button__open{width:var(--floes-chat-button-size);height:var(--floes-chat-button-size);background-color:var(--floes-background-color);color:var(--floes-text-color);border-radius:var(--floes-chat-button-border-radius);border:none;position:relative;transition:opacity .16s}.floes-chat-button__open::after{content:"";display:block;width:var(--floes-chat-button-icon-size);height:var(--floes-chat-button-icon-size);top:50%;left:50%;transform:translate(-50%, -50%);position:absolute;mask-image:var(--floes-open-chat-icon);-webkit-mask-image:var(--floes-open-chat-icon);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100% 100%;-webkit-mask-position:center center;mask-repeat:no-repeat;mask-size:100% 100%;mask-position:center center;background:var(--floes-text-color)}.floes-chat-button__open:hover{cursor:pointer;opacity:.8}.floes-chat-overlay{position:fixed;z-index:999;bottom:var(--floes-overlay-bottom);right:var(--floes-overlay-right);width:100%;height:100%;display:none;max-width:var(--floes-overlay-max-width);max-height:var(--floes-overlay-max-height);background-color:var(--floes-overlay-background);overflow:hidden;border-radius:var(--floes-overlay-border-radius);box-shadow:var(--floes-overlay-box-shadow)}.floes-chat-overlay--open{display:block}.floes-chat-overlay__close{position:absolute;top:8px;right:8px;width:var(--floes-overlay-close-size);height:var(--floes-overlay-close-size);cursor:pointer;background:rgba(0,0,0,0);border:none}.floes-chat-overlay__close::after{content:"";display:block;width:100%;height:100%;mask-image:var(--floes-overlay-close-icon);-webkit-mask-image:var(--floes-overlay-close-icon);-webkit-mask-repeat:no-repeat;-webkit-mask-size:100% 100%;-webkit-mask-position:center center;mask-repeat:no-repeat;mask-size:100% 100%;mask-position:center center;background:var(--floes-text-color)}.floes-chat-overlay__chat{width:100%;height:100%}.floes-chat-overlay__iframe{width:100%;height:100%;border:none}`,""]);const h=f},874:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",a=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),a&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),a&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,a,n,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},577:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},897:e=>{e.exports=function(e){return e[1]}},415:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var a=o(556),n=o.n(a),r=o(173),s=o.n(r),i=o(559),c=o.n(i),l=o(684),d=o.n(l),f=o(872),u=o.n(f),p=o(421),h=o.n(p),v=o(168),m={};m.styleTagTransform=h(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=u(),n()(v.A,m);const b=v.A&&v.A.locals?v.A.locals:void 0},556:e=>{var t=[];function o(e){for(var o=-1,a=0;a<t.length;a++)if(t[a].identifier===e){o=a;break}return o}function a(e,a){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],l=a.base?c[0]+a.base:c[0],d=r[l]||0,f="".concat(l," ").concat(d);r[l]=d+1;var u=o(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=n(p,a);a.byIndex=i,t.splice(i,0,{identifier:f,updater:h,references:1})}s.push(f)}return s}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var r=a(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=o(r[s]);t[i].references--}for(var c=a(e,n),l=0;l<r.length;l++){var d=o(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},559:e=>{var t={};e.exports=function(e,o){var a=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},872:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},684:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},173:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,n&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},421:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},649:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Builder=void 0;const a=o(398);o(415),t.Builder=class{floesSDK;embed;iframeLoaded=!1;constructor(e,t){this.floesSDK=e,this.embed=t,this.init()}init(){this.buildStyling(),this.buildOpenChatButton(),this.buildChatOverlay(),this.bindEvents()}bindEvents(){document.querySelector("[data-floes-open-chat]")?.addEventListener("click",(e=>{e.preventDefault(),document.querySelector("[data-floes-chat-overlay]")?.classList.add("floes-chat-overlay--open"),this.buildIframe(),this.floesSDK.emit("chatOpened")})),document.querySelector("[data-floes-close-chat]")?.addEventListener("click",(e=>{e.preventDefault(),document.querySelector("[data-floes-chat-overlay]")?.classList.remove("floes-chat-overlay--open"),this.floesSDK.emit("chatClosed")}))}buildStyling(){document.body.insertAdjacentHTML("beforeend",`<style>\n        :root {\n          --floes-background-color: ${this.embed.assistant.bodyColor};\n          --floes-text-color: ${this.embed.assistant.textColor};\n        }\n      </style>`)}buildOpenChatButton(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="floes-chat-button">\n        <button class="floes-chat-button__open" type="button" aria-label="Open chat" data-floes-open-chat="">\n        </button>\n      </div>\n    ')}buildChatOverlay(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="floes-chat-overlay" data-floes-chat-overlay="">\n        <button class="floes-chat-overlay__close" type="button" aria-label="Close chat" data-floes-close-chat=""></button>\n\n        <div class="floes-chat-overlay__chat" data-floes-chat-container="">\n        </div>\n      </div>\n    ')}buildIframe(){if(this.iframeLoaded)return;const e=document.createElement("iframe");e.src=`${a.config.embedLocation}embed/?token=${this.embed.embedToken}`,e.classList.add("floes-chat-overlay__iframe"),e.addEventListener("load",(()=>{this.iframeLoaded=!0})),document.querySelector("[data-floes-chat-container]")?.appendChild(e)}}},398:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0,t.config={apiLocation:"https://app.floes.ai/api/v1/",embedLocation:"https://app.floes.ai/"}},593:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EmbedService=void 0;const a=o(398);t.EmbedService=class{async get(e){const t=await fetch(`${a.config.apiLocation}embeds/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors"});if(!t.ok)throw new Error("Failed to fetch embed");const o=await t.json();return{embedToken:o.access_token,domain:o.domain,assistant:{id:o.assistant.id,name:o.assistant.name,companyName:o.assistant.company_name,bodyColor:o.assistant.body_color,textColor:o.assistant.text_color,appearanceType:o.assistant.appearance_type}}}}},927:e=>{e.exports='data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><%21--%21Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'},288:e=>{e.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><%21--%21Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--\x3e<path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg>'}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,o),r.exports}o.m=e,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.b=document.baseURI||self.location.href,o.nc=void 0,(()=>{const e=o(649),t=o(593);window.FloesSDK=class{embedToken;embed;listeners=[];constructor(e){this.embedToken=e,this.init()}async init(){const e=await(new t.EmbedService).get(this.embedToken).catch((e=>e));if(e instanceof Error)throw e;this.embed=e,this.setupBuilder()}setupBuilder(){new e.Builder(this,this.embed)}emit(e){this.listeners.filter((t=>t.event===e)).forEach((e=>e.callback()))}addListener(e,t){this.listeners.push({event:e,callback:t})}removeListener(e,t){this.listeners=this.listeners.filter((o=>o.event!==e||o.callback!==t))}}})()})();