/*! For license information please see 956.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[956,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},439:(e,t,o)=>{"use strict";o.r(t),o.d(t,{CalciteDropdownGroup:()=>a,defineCustomElement:()=>d});var n=o(7210),r=o(5545),i=o(3625);const s=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDropdownItemChange=(0,n.yM)(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e=>e.selectionMode=this.selectionMode))},this.mutationObserver=(0,r.c)("mutation",(()=>this.updateItems())),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const e=this.groupTitle?(0,n.h)("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,t=this.groupPosition>0?(0,n.h)("div",{class:"dropdown-separator",role:"separator"}):null;return(0,n.h)(n.AA,{"aria-label":this.groupTitle,role:"group"},(0,n.h)("div",{class:{[i.C.container]:!0,[`${i.C.container}--${this.scale}`]:!0}},t,e,(0,n.h)("slot",null)))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{selectionMode:["handlePropsChange"]}}static get style(){return":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-dropdown-group",{groupTitle:[513,"group-title"],scale:[1],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalDropdownItemSelect","updateActiveItemOnChange"]]]);function c(){"undefined"!=typeof customElements&&["calcite-dropdown-group"].forEach((e=>{"calcite-dropdown-group"===e&&(customElements.get(e)||customElements.define(e,s))}))}c();const a=s,d=c},5545:(e,t,o)=>{"use strict";o.d(t,{c:()=>r});var n=o(7210);function r(e,t,o){if(!n.Z5.isBrowser)return;const r=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new r(t,o)}},3625:(e,t,o)=>{"use strict";o.d(t,{C:()=>n});const n={container:"container",containerLink:"container--link",containerMulti:"container--multi-selection",containerSingle:"container--single-selection",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon-end",iconStart:"dropdown-item-icon-start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);