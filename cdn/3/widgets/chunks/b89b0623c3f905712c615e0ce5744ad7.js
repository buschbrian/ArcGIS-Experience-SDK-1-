/*! For license information please see b89b0623c3f905712c615e0ce5744ad7.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1976],{1976:(t,e,n)=>{n.r(e),n.d(e,{calcite_shell_center_row:()=>c});var r=n(30396),i=n(39591),o=n(9615);const a="action-bar",c=class{constructor(t){(0,r.r)(this,t),this.detached=!1,this.heightScale="s",this.position="end"}connectedCallback(){(0,i.c)(this)}disconnectedCallback(){(0,i.d)(this)}render(){const{el:t}=this,e=(0,r.h)("div",{class:"content"},(0,r.h)("slot",null)),n=(0,o.g)(t,a),i=[n?(0,r.h)("div",{class:"action-bar-container",key:"action-bar"},(0,r.h)("slot",{name:a})):null,e];return"end"===n?.position&&i.reverse(),(0,r.h)(r.F,null,i)}get el(){return(0,r.g)(this)}};c.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;flex:1 1 auto;overflow:hidden;background-color:transparent}.content{margin:0px;display:flex;block-size:100%;inline-size:100%;overflow:hidden;flex:1 0 0}.action-bar-container{display:flex}:host([detached]){margin-inline:0.5rem;margin-block:0.5rem 1.5rem}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}:host([detached]){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;border-width:0px;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([position=end]){align-self:flex-end}:host([position=start]){align-self:flex-start}:host([height-scale=s]){block-size:33.333333%}:host([height-scale=m]){block-size:70%}:host([height-scale=l]){block-size:100%}:host([height-scale=l][detached]){block-size:calc(100% - 2rem)}::slotted(calcite-panel){block-size:100%;inline-size:100%}::slotted(calcite-action-bar),::slotted(calcite-action-bar[position=end]){border-inline-end:1px solid;border-color:var(--calcite-ui-border-3)}"},39591:(t,e,n)=>{n.d(e,{c:()=>s,d:()=>l});var r=n(30396),i=n(77041);const o=new Set;let a;const c={childList:!0};function s(t){a||(a=(0,i.c)("mutation",u)),a.observe(t.el,c)}function l(t){o.delete(t.el),u(a.takeRecords()),a.disconnect();for(const[t]of o.entries())a.observe(t,c)}function u(t){t.forEach((({target:t})=>{(0,r.f)(t)}))}},9615:(t,e,n)=>{n.d(e,{a:()=>y,b:()=>u,c:()=>p,d:()=>S,e:()=>l,f:()=>d,g:()=>k,h:()=>v,i:()=>$,j:()=>w,k:()=>c,l:()=>a,m:()=>C,n:()=>s,o:()=>_,p:()=>q,q:()=>m,r:()=>z,s:()=>D,t:()=>E,u:()=>f});var r=n(96440),i=n(31964),o=n(90770);const a={getShadowRoot:!0};function c(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,i.g)()}`:""}function s(t){return Array.isArray(t)?t:Array.from(t)}function l(t){const e=p(t,`.${o.C.darkMode}, .${o.C.lightMode}`);return e?.classList.contains("calcite-mode-dark")?"dark":"light"}function u(t){const e=p(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function d(t,e,n){const r=`[${e}]`,i=t.closest(r);return i?i.getAttribute(e):n}function f(t){return t.getRootNode()}function h(t){return t.host||null}function m(t,{selector:e,id:n}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const i=f(r),o=n?"getElementById"in i?i.getElementById(n):null:e?i.querySelector(e):null,a=h(i);return o||(a?t(a):null)}(t)}function p(t,e){return function t(n){return n?n.closest(e)||t(h(f(n))):null}(t)}function g(t,e){return b(t,e)}function b(t,e){if(!t)return;const n=e(t);if(void 0!==n)return n;const{parentNode:r}=t;return b(r instanceof ShadowRoot?r.host:r,e)}function y(t,e){return!!g(e,(e=>e===t||void 0))}async function v(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function w(t){((0,r.t)(t,a)[0]||t).focus()}const x=":not([slot])";function k(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);const r=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:x;return n?.all?function(t,e,n){let r=e===x?A(t,x):Array.from(t.querySelectorAll(e));r=n&&!1===n.direct?r:r.filter((e=>e.parentElement===t)),r=n?.matches?r.filter((t=>t?.matches(n.matches))):r;const i=n?.selector;return i?r.map((t=>Array.from(t.querySelectorAll(i)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):r}(t,r,n):function(t,e,n){let r=e===x?A(t,x)[0]||null:t.querySelector(e);r=n&&!1===n.direct||r?.parentElement===t?r:null,r=n?.matches?r?.matches(n.matches)?r:null:r;const i=n?.selector;return i?r?.querySelector(i):r}(t,r,n)}function A(t,e){return t?Array.from(t.children||[]).filter((t=>t?.matches(e))):[]}function z(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function S(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function _(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function E(t){return Boolean(t).toString()}function D(t){return!!C(t).length}function C(t){return t.target.assignedElements({flatten:!0})}function $(t){return!(!t.isPrimary||0!==t.button)}const q=(t,e,n)=>{const r=t.indexOf(e),i=0===r,o=r===t.length-1;let a;switch(n="previous"===n&&i?"last":"next"===n&&o?"first":n){case"first":a=t[0];break;case"last":a=t[t.length-1];break;case"next":a=t[r+1]||t[0];break;case"previous":a=t[r-1]||t[t.length-1]}return v(a),a}},31964:(t,e,n)=>{n.d(e,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let e="";for(let n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")},77041:(t,e,n)=>{function r(t,e,n){const r=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new r(e,n)}n.d(e,{c:()=>r})}}]);