/*! For license information please see 58e5f52b1ce7d082cab10310a0bcd932.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[99358],{99358:(e,t,n)=>{n.r(t),n.d(t,{calcite_switch:()=>d});var i=n(30396),r=n(9615),o=n(56214),a=n(32544),c=n(56758),l=n(37145),s=n(29340);const d=class{constructor(e){(0,i.r)(this,e),this.calciteSwitchChange=(0,i.c)(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&(0,c.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await(0,s.c)(this),(0,r.h)(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){(0,l.c)(this),(0,o.c)(this)}componentWillLoad(){(0,s.a)(this)}componentDidLoad(){(0,s.s)(this)}disconnectedCallback(){(0,l.d)(this),(0,o.d)(this)}componentDidRender(){(0,a.u)(this)}render(){return(0,i.h)(i.H,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,i.h)("div",{"aria-checked":(0,r.t)(this.checked),"aria-label":(0,l.g)(this),class:"container",ref:this.setSwitchEl,role:"switch",tabIndex:0},(0,i.h)("div",{class:"track"},(0,i.h)("div",{class:"handle"})),(0,i.h)(o.H,{component:this})))}get el(){return(0,i.g)(this)}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{inline-size:auto;outline-color:transparent}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},9615:(e,t,n)=>{n.d(t,{a:()=>k,b:()=>d,c:()=>b,d:()=>L,e:()=>s,f:()=>u,g:()=>w,h:()=>g,i:()=>I,j:()=>y,k:()=>c,l:()=>a,m:()=>D,n:()=>l,o:()=>A,p:()=>q,q:()=>f,r:()=>C,s:()=>S,t:()=>z,u:()=>h});var i=n(96440),r=n(31964),o=n(90770);const a={getShadowRoot:!0};function c(e){return e?e.id=e.id||`${e.tagName.toLowerCase()}-${(0,r.g)()}`:""}function l(e){return Array.isArray(e)?e:Array.from(e)}function s(e){const t=b(e,`.${o.C.darkMode}, .${o.C.lightMode}`);return t?.classList.contains("calcite-mode-dark")?"dark":"light"}function d(e){const t=b(e,"[dir]");return t?t.getAttribute("dir"):"ltr"}function u(e,t,n){const i=`[${t}]`,r=e.closest(i);return r?r.getAttribute(t):n}function h(e){return e.getRootNode()}function m(e){return e.host||null}function f(e,{selector:t,id:n}){return function e(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const r=h(i),o=n?"getElementById"in r?r.getElementById(n):null:t?r.querySelector(t):null,a=m(r);return o||(a?e(a):null)}(e)}function b(e,t){return function e(n){return n?n.closest(t)||e(m(h(n))):null}(e)}function p(e,t){return v(e,t)}function v(e,t){if(!e)return;const n=t(e);if(void 0!==n)return n;const{parentNode:i}=e;return v(i instanceof ShadowRoot?i.host:i,t)}function k(e,t){return!!p(t,(t=>t===e||void 0))}async function g(e){if(e)return function(e){return"function"==typeof e?.setFocus}(e)?e.setFocus():e.focus()}function y(e){((0,i.t)(e,a)[0]||e).focus()}const E=":not([slot])";function w(e,t,n){t&&!Array.isArray(t)&&"string"!=typeof t&&(n=t,t=null);const i=t?Array.isArray(t)?t.map((e=>`[slot="${e}"]`)).join(","):`[slot="${t}"]`:E;return n?.all?function(e,t,n){let i=t===E?x(e,E):Array.from(e.querySelectorAll(t));i=n&&!1===n.direct?i:i.filter((t=>t.parentElement===e)),i=n?.matches?i.filter((e=>e?.matches(n.matches))):i;const r=n?.selector;return r?i.map((e=>Array.from(e.querySelectorAll(r)))).reduce(((e,t)=>[...e,...t]),[]).filter((e=>!!e)):i}(e,i,n):function(e,t,n){let i=t===E?x(e,E)[0]||null:e.querySelector(t);i=n&&!1===n.direct||i?.parentElement===e?i:null,i=n?.matches?i?.matches(n.matches)?i:null:i;const r=n?.selector;return r?i?.querySelector(r):i}(e,i,n)}function x(e,t){return e?Array.from(e.children||[]).filter((e=>e?.matches(t))):[]}function C(e,t){return Array.from(e.children).filter((e=>e.matches(t)))}function L(e,t,n){return"string"==typeof t&&""!==t?t:""===t?e[n]:void 0}function A(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function z(e){return Boolean(e).toString()}function S(e){return!!D(e).length}function D(e){return e.target.assignedElements({flatten:!0})}function I(e){return!(!e.isPrimary||0!==e.button)}const q=(e,t,n)=>{const i=e.indexOf(t),r=0===i,o=i===e.length-1;let a;switch(n="previous"===n&&r?"last":"next"===n&&o?"first":n){case"first":a=e[0];break;case"last":a=e[e.length-1];break;case"next":a=e[i+1]||e[0];break;case"previous":a=e[i-1]||e[e.length-1]}return g(a),a}},56214:(e,t,n)=>{n.d(t,{H:()=>k,a:()=>f,c:()=>u,d:()=>m,r:()=>d,s:()=>s});var i=n(9615),r=n(30396);const o="hidden-form-input";function a(e){return"checked"in e}const c=new WeakMap,l=new WeakSet;function s(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function d(e){e.formEl?.reset()}function u(e){const{el:t,value:n}=e,r=(0,i.c)(t,"form");if(!r||function(e,t){const n="calciteInternalFormComponentRegister";let i=!1;return e.addEventListener(n,(e=>{i=e.composedPath().some((e=>l.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(r,t))return;e.formEl=r,e.defaultValue=n,a(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||h).bind(e);r.addEventListener("reset",o),c.set(e.el,o),l.add(t)}function h(){a(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:n}=e;if(!n)return;const i=c.get(t);n.removeEventListener("reset",i),c.delete(t),e.formEl=null,l.delete(t)}function f(e,t){e.defaultValue=t}const b=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},p=e=>e.removeEventListener("change",b);function v(e,t,n){const{defaultValue:i,disabled:r,name:o,required:c}=e;t.defaultValue=i,t.disabled=r,t.name=o,t.required=c,t.tabIndex=-1,a(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const k=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:r}=e,{ownerDocument:a}=t,c=t.querySelectorAll(`input[slot="${o}"]`);if(!n||!i)return void c.forEach((e=>{p(e),e.remove()}));const l=Array.isArray(r)?r:[r],s=[],d=new Set;let u;c.forEach((t=>{const n=l.find((e=>e==t.value));null!=n?(d.add(n),v(e,t,n)):s.push(t)})),l.forEach((t=>{if(d.has(t))return;let n=s.pop();n||(n=a.createElement("input"),n.slot=o),u||(u=a.createDocumentFragment()),u.append(n),n.addEventListener("change",b),v(e,n,t)})),u&&t.append(u),s.forEach((e=>{p(e),e.remove()}))}(e),(0,r.h)("slot",{name:o}))},31964:(e,t,n)=>{n.d(t,{g:()=>i});const i=()=>[2,1,1,1,3].map((e=>{let t="";for(let n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")},32544:(e,t,n)=>{function i(){}function r(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=i);e.el.click=HTMLElement.prototype.click,"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}n.d(t,{u:()=>r})},56758:(e,t,n)=>{function i(e){return"Enter"===e||" "===e}n.d(t,{i:()=>i,n:()=>r});const r=["0","1","2","3","4","5","6","7","8","9"]},37145:(e,t,n)=>{n.d(t,{a:()=>a,c:()=>m,d:()=>f,g:()=>b,l:()=>o});var i=n(9615);const r="calciteInternalLabelClick",o="calciteInternalLabelConnected",a="calciteInternaLabelDisconnected",c="calcite-label",l=new WeakMap,s=new WeakMap,d=new WeakMap,u=new Set,h=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${c}[for="${t}"]`});if(n)return n;const r=(0,i.c)(e,c);return!r||function(e,t){let n;const i="custom-element-ancestor-check",r=i=>{i.stopImmediatePropagation();const r=i.composedPath();n=r.slice(r.indexOf(t),r.indexOf(e))};e.addEventListener(i,r,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,r);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(r,e)?null:r};function m(e){const t=h(e.el);if(l.has(t)||!t&&u.has(e))return;const n=k.bind(e);if(t){e.labelEl=t;const i=p.bind(e);l.set(e.labelEl,i),e.labelEl.addEventListener(r,i),u.delete(e),document.removeEventListener(o,s.get(e)),d.set(e,n),document.addEventListener(a,n)}else u.has(e)||(n(),document.removeEventListener(a,d.get(e)))}function f(e){if(u.delete(e),document.removeEventListener(o,s.get(e)),document.removeEventListener(a,d.get(e)),s.delete(e),d.delete(e),!e.labelEl)return;const t=l.get(e.labelEl);e.labelEl.removeEventListener(r,t),l.delete(e.labelEl)}function b(e){return e.label||e.labelEl?.textContent?.trim()||""}function p(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function v(){u.has(this)&&m(this)}function k(){u.add(this);const e=s.get(this)||v.bind(this);s.set(this,e),document.addEventListener(o,e)}},29340:(e,t,n)=>{n.d(t,{a:()=>o,c:()=>c,s:()=>a});const i=new WeakMap,r=new WeakMap;function o(e){r.set(e,new Promise((t=>i.set(e,t))))}function a(e){i.get(e)()}function c(e){return r.get(e)}}}]);