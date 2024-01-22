System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var a={},n={},i={};return{setters:[function(e){a.React=e.React},function(e){n.Slider=e.Slider,n.Switch=e.Switch,n.TextArea=e.TextArea},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=n},756:e=>{"use strict";e.exports=i}},t={};function c(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,c),i.exports}c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var r={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(r),c.d(r,{__set_webpack_public_path__:()=>i,default:()=>n});var e=c(891),t=c(726),a=c(756);const n=n=>{const i=(e,t)=>{n.onSettingChange({id:n.id,config:Object.assign(Object.assign({},n.config),{[e]:t})})};return e.React.createElement("div",null,e.React.createElement(a.SettingSection,{title:"Select Map"},e.React.createElement(a.SettingRow,null,e.React.createElement(a.MapWidgetSelector,{onSelect:e=>{n.onSettingChange({id:n.id,useMapWidgetIds:e})},useMapWidgetIds:n.useMapWidgetIds}))),e.React.createElement(a.SettingSection,{title:"Nearmap API Key"},e.React.createElement(a.SettingRow,null,e.React.createElement(t.TextArea,{className:"mb-3",defaultValue:n.config.nApiKey,height:100,onBlur:e=>i("nApiKey",e.target.value)}))),e.React.createElement(a.SettingSection,{title:"Nearmap Map Opacity"},e.React.createElement(a.SettingRow,null,e.React.createElement(t.Slider,{"aria-label":"Nearmap Map Opacity",defaultValue:n.config.opacity,max:1,min:0,onChange:e=>i("opacity",e.target.value),step:.1}))),e.React.createElement(a.SettingSection,null,e.React.createElement(a.SettingRow,null,e.React.createElement("label",{className:"w-100 justify-content-start"},"Nearmap active on load",e.React.createElement(t.Switch,{className:"ml-auto mr-0",checked:n.config.initialNmapActive,onChange:e=>i("initialNmapActive",e.target.checked)})))))};function i(e){c.p=e}})(),r})())}}}));