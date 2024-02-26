/*! For license information please see c81f5ad98350c0710947ef6a975ff19a.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[68553],{58892:(e,t,n)=>{n.d(t,{a:()=>o,b:()=>r,c:()=>i,d:()=>s});const s=(0,n(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),o=s.state,i=s.state,r=s.state},68553:(e,t,n)=>{n.r(t),n.d(t,{arcgis_new_item_pages_tile_layer_from_url:()=>a});var s=n(28384),o=n(58892),i=n(54871),r=n(30063);n(27010);const a=class{constructor(e){(0,s.r)(this,e),this.workflowComplete=(0,s.c)(this,"workflowComplete",7),this.showSubdomains=!1,this.handleChange=e=>{const t=e.target.checked;o.a.storeAuth=t},this.handleLoaderUpdate=e=>{this.loading=e.detail},this.getPlaceholder=e=>{const{i18n:t}=this;switch(e){case"title":return t.titlePlaceholder;case"attribution":return t.attribution;case"subdomain":return"https://{subDomain}.domain.com/<path>/{level}/{col}/{row}.png"}},this.assignRef=(e,t)=>{"title"===t?this.titleInputRef=e:this.attributionInputRef=e},this.handleKeydown=e=>{var t;if(","===e.key){const n=e.target,s=null===(t=null==n?void 0:n.shadowRoot)||void 0===t?void 0:t.querySelector("input");if(null==s?void 0:s.value){e.preventDefault();const t=n.querySelector(`calcite-combobox-item[value="${s.value}"]`);if(t)t.selected=!0;else{const e=document.createElement("calcite-combobox-item");e.value=s.value,e.textLabel=s.value,e.selected=!0,null==n||n.appendChild(e)}s.value=""}}},this.i18n=void 0,this.errorMessage=void 0,this.loading=!1,this.title="",this.attribution=null,this.subdomains=[],this.useCurrentExtent=!1}async handleNext(){const{i18n:e,title:t,attribution:n,subdomains:s=null,useCurrentExtent:i}=this,{url:r,customParameters:a,addAsBasemap:l}=o.a;return this.errorMessage=null,t?n?(this.loading=!0,void(this.isAddToMapTerminalPage()&&this.workflowComplete.emit({title:t,attribution:n,subdomain:s.join(","),useCurrentExtent:i,url:r,customParameters:a,type:"Tile Layer",addAsBasemap:l}))):(this.errorMessage=e.error.attribution,void this.attributionInputRef.setFocus()):(this.errorMessage=e.error.title,void this.titleInputRef.setFocus())}async componentWillLoad(){const e=i.u.i18n;this.i18n=e.tileLayerFromUrl,this.isAddToMapTerminalPage()&&(i.u.nextText="addToMap"),this.showSubdomains=o.a.url.toLowerCase().includes("{subdomain}")}isAddToMapTerminalPage(){return!0}render(){const{loading:e,errorMessage:t,i18n:n,getPlaceholder:o,assignRef:i,handleKeydown:a,showSubdomains:l}=this;return(0,s.h)(s.H,null,(0,s.h)("arcgis-new-item-loader",{active:e}),(0,s.h)("arcgis-new-item-alert",{active:!!t,description:t,onAlertDismiss:()=>this.errorMessage=""}),["title","attribution"].map((e=>(0,s.h)("calcite-label",null,(0,s.h)("p",{class:"label"},n[e]),(0,s.h)("calcite-input",{class:"input-container",placeholder:o(e),ref:t=>i(t,e),value:this[e],required:!0,onCalciteInputInput:t=>this[e]=t.target.value})))),l&&(0,s.h)("div",{class:"subdomain-container"},(0,s.h)("calcite-label",null,(0,s.h)("p",{class:"label"},n.subdomain),(0,s.h)("calcite-combobox",{label:n.subdomain,allowCustomValues:!0,placeholder:n.subDomainPlaceholder,onKeyDown:a,onCalciteComboboxChange:e=>{e.stopPropagation();const t=e.target;this.subdomains=(0,r.f)(t.selectedItems.map((e=>e.value)))}}))),(0,s.h)("arcgis-new-item-switch-card",{header:n.setTileExtent,onSwitchChange:e=>{this.useCurrentExtent=e.detail}}))}get element(){return(0,s.d)(this)}};a.style=".input-container{margin-bottom:1.5rem}.label{color:var(--calcite-ui-text-1);display:block;font-size:0.875rem;font-weight:500;margin-top:0;margin-bottom:0;line-height:18px}calcite-label{--calcite-label-margin-bottom:0}.subdomain-container{margin-bottom:1.5rem}"},30063:(e,t,n)=>{n.d(t,{a:()=>o,f:()=>i,s:()=>a});var s=n(26426);const o=e=>(null==e?void 0:e.replace(/(\s+|:)/g,"_"))||"",i=e=>{const t=e=>e.split(",").map((e=>e.trim())).filter((e=>e));return e?"string"==typeof e?(0,s.b)(t(e)):(0,s.b)(e.flatMap((e=>[...t(e)]))):[]},r=async e=>new Promise(((t,n)=>{for(let s=0;s<e.length;s++)e[s].then((n=>{const o=[...e];o.splice(s,1),t({remainingPromises:o,result:n})})).catch(n)}));async function a(e,t){var n,s;const o=[],{getBatchSize:i,onPromiseCompleted:a,onPromiseThrow:l,shouldContinue:c}=null!=t?t:{};let u=[];for(let t=0;t<(null!==(n=null==i?void 0:i())&&void 0!==n?n:1);t++)try{const t=e();t&&u.push(t)}catch(e){null==l||l(e)}let d=null;for(;u.length>0&&(!c||c(d));)try{const{remainingPromises:t,result:n}=await r(u);u=t,d=n,n&&o.push(n),null==a||a(n);const l=null!==(s=null==i?void 0:i())&&void 0!==s?s:1;for(;u.length<l;){const t=e();if(t&&u.push(t),null==t)break}}catch(e){null==l||l(e)}return o}},26426:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>h,c:()=>o,d:()=>s,e:()=>i,f:()=>u,g:()=>m,i:()=>r,m:()=>a,t:()=>l,u:()=>d});const s=(e,t)=>{let n,s="idle";const o=(...o)=>new Promise((i=>{switch(s){case"flushed":s="idle",n?(clearTimeout(n),i(e(...o))):i(null);break;case"invoked":clearTimeout(n),s="idle",i(e(...o));break;case"cancelled":clearTimeout(n),s="idle",i(null);break;default:n&&clearTimeout(n),s="pending",n=setTimeout((()=>(s="idle",i(e(...o)))),t)}}));return o.flush=function(...e){return s="flushed",o(...e)},o.invoke=function(...e){return s="invoked",o(...e)},o.cancel=function(...e){return s="cancelled",o(...e)},o.getStatus=function(){return s},o},o=(e,t)=>{let n;return(...s)=>new Promise((o=>{n||(n=setTimeout((()=>{clearTimeout(n),n=void 0,o(e(...s))}),t))}))};function i(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r(e){return null!=e}async function a(e,t){return await Promise.all([e,l(t)]),e}function l(e){return new Promise((t=>setTimeout(t,e)))}const c=(e,t)=>Object.fromEntries((e||[]).map((e=>{const{key:n,data:s}=t(e);return[n,s]}))),u=(e,t)=>e.length===t.length&&e.reduce(((e,n)=>e&&t.indexOf(n)>-1),!0);function d(e,t){const n=[],s={};return e.forEach((e=>{const o=t(e);null==s[o]&&(s[o]=e,n.push(e))})),n}function h(e){const t={boolean:{},number:{},string:{}},n=[];return e.filter((e=>{let s=typeof e;return s in t?!t[s].hasOwnProperty(e)&&(t[s][e]=!0):!(n.indexOf(e)>=0)&&n.push(e)}))}const m=(e,t)=>[...Array(Math.ceil(e.length/t))].map(((n,s)=>e.slice(t*s,t+t*s)))},27010:(e,t,n)=>{n.d(t,{c:()=>a});var s=n(28384);const o=e=>!("isConnected"in e)||e.isConnected,i=((e,t)=>{let n;return(...e)=>{n&&clearTimeout(n),n=setTimeout((()=>{n=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))})(...e)}),2e3)}})(),r=e=>"function"==typeof e?e():e,a=(e,t)=>{const n=((e,t=((e,t)=>e!==t))=>{const n=r(e);let s=new Map(Object.entries(null!=n?n:{}));const o={dispose:[],get:[],set:[],reset:[]},i=()=>{var t;s=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},a=e=>(o.get.forEach((t=>t(e))),s.get(e)),l=(e,n)=>{const i=s.get(e);t(n,i,e)&&(s.set(e,n),o.set.forEach((t=>t(e,n,i))))},c="undefined"==typeof Proxy?{}:new Proxy(n,{get:(e,t)=>a(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,n)=>(l(t,n),!0)}),u=(e,t)=>(o[e].push(t),()=>{((e,t)=>{const n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)})(o[e],t)});return{state:c,get:a,set:l,on:u,onChange:(t,n)=>{const s=u("set",((e,s)=>{e===t&&n(s)})),o=u("reset",(()=>n(r(e)[t])));return()=>{s(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),i()},reset:i,forceUpdate:e=>{const t=s.get(e);o.set.forEach((n=>n(e,t,t)))}}})(e,t);return n.use((()=>{if("function"!=typeof s.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const n=(0,s.g)();n&&((e,t,n)=>{const s=e.get(t);s?s.includes(n)||s.push(n):e.set(t,[n])})(e,t,n)},set:t=>{const n=e.get(t);n&&e.set(t,n.filter(s.f)),i(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),i(e)}}})()),n}},54871:(e,t,n)=>{n.d(t,{a:()=>s,u:()=>o});const s=(0,n(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),o=s.state}}]);