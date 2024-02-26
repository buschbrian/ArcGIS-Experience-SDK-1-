"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[78899],{89300:(e,t,s)=>{s.d(t,{L:()=>y});var r=s(47817);const n={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.v({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.O.WebMercator}),minus180Line:new r.v({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.O.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.v({paths:[[[180,-180],[180,180]]],spatialReference:r.O.WGS84}),minus180Line:new r.v({paths:[[[-180,-180],[-180,180]]],spatialReference:r.O.WGS84})}};function i(e,t){return Math.ceil((e-t)/(2*t))}function a(e,t){const s=o(e);for(const e of s)for(const s of e)s[0]+=t;return e}function o(e){return(0,r.V)(e)?e.rings:e.paths}async function u(e,t,s){const n="string"==typeof e?(0,r.j)(e):e,i=t[0].spatialReference,a=(0,r.ar)(t[0]),o={...s,query:{...n.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(c(t))}};return function(e,t,s){const n=(0,r.as)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=s,t}))}((await(0,r.U)(n.path+"/simplify",o)).data,a,i)}function c(e){return{geometryType:(0,r.ar)(e[0]),geometries:e.map((e=>e.toJSON()))}}const l=r.S.getLogger("esri.geometry.support.normalizeUtils");function p(e){return"polygon"===e[0].type}function h(e){return"polyline"===e[0].type}function g(e,t,s){if(t){const t=function(e,t){if(!(e instanceof r.v||e instanceof r.x)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw l.error(e),new r.s(e)}const s=o(e),n=[];for(const e of s){const s=[];n.push(s),s.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const n=e[r][0],i=e[r][1],a=e[r+1][0],o=e[r+1][1],u=Math.sqrt((a-n)*(a-n)+(o-i)*(o-i)),c=(o-i)/u,l=(a-n)/u,p=u/t;if(p>1){for(let e=1;e<=p-1;e++){const r=e*t,a=l*r+n,o=c*r+i;s.push([a,o])}const e=(u+Math.floor(p-1)*t)/2,r=l*e+n,a=c*e+i;s.push([r,a])}s.push([a,o])}}return function(e){return"polygon"===e.type}(e)?new r.x({rings:n,spatialReference:e.spatialReference}):new r.v({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,r.au)(t,!0)}return s&&(e=a(e,s)),e}function f(e,t,s){if(Array.isArray(e)){const r=e[0];if(r>t){const s=i(r,t);e[0]=r+s*(-2*t)}else if(r<s){const t=i(r,s);e[0]=r+t*(-2*s)}}else{const r=e.x;if(r>t){const s=i(r,t);e=e.clone().offset(s*(-2*t),0)}else if(r<s){const t=i(r,s);e=e.clone().offset(t*(-2*s),0)}}return e}function d(e,t){let s=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],a=t.geometries[r],u=o(a);for(let e=0;e<u.length;e++){const t=u[e];t.some((s=>{if(s[0]<180)return!0;{let s=0;for(let e=0;e<t.length;e++){const r=t[e][0];s=r>s?r:s}s=Number(s.toFixed(9));const r=-360*i(s,180);for(let s=0;s<t.length;s++){const t=a.getPoint(e,s);a.setPoint(e,s,t.clone().offset(r,0))}return!0}}))}if(n===s){if(p(e))for(const t of o(a))e[n]=e[n].addRing(t);else if(h(e))for(const t of o(a))e[n]=e[n].addPath(t)}else s=n,e[n]=a}return e}async function y(e,t,s){if(!Array.isArray(e))return y([e],t);const o=t?t.url:r.aw.geometryServiceUrl;let c,l,p,h,m,_,b,k,x=0;const S=[],w=[];for(const t of e)if((0,r.t)(t))w.push(t);else if(c||(c=t.spatialReference,l=(0,r.av)(c),p=c.isWebMercator,_=p?102100:4326,h=n[_].maxX,m=n[_].minX,b=n[_].plus180Line,k=n[_].minus180Line),l)if("mesh"===t.type)w.push(t);else if("point"===t.type)w.push(f(t.clone(),h,m));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>f(e,h,m))),w.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,l);w.push(e.rings?new r.x(e):e)}else if(t.extent){const e=t.extent,s=i(e.xmin,m)*(2*h);let r=0===s?t.clone():a(t.clone(),s);e.offset(s,0),e.intersects(b)&&e.xmax!==h?(x=e.xmax>x?e.xmax:x,r=g(r,p),S.push(r),w.push("cut")):e.intersects(k)&&e.xmin!==m?(x=e.xmax*(2*h)>x?e.xmax*(2*h):x,r=g(r,p,360),S.push(r),w.push("cut")):w.push(r)}else w.push(t.clone());else w.push(t);let T=i(x,h),F=-90;const I=T,q=new r.v;for(;T>0;){const e=360*T-180;q.addPath([[e,F],[e,-1*F]]),F*=-1,T--}if(S.length>0&&I>0){const t=d(S,await async function(e,t,s,n){const i="string"==typeof e?(0,r.j)(e):e,a=t[0].spatialReference,o={...n,query:{...i.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:(0,r.ar)(t[0]),geometries:t}),cutter:JSON.stringify(s)}},u=await(0,r.U)(i.path+"/cut",o),{cutIndexes:c,geometries:l=[]}=u.data;return{cutIndexes:c,geometries:l.map((e=>{const t=(0,r.J)(e);return t.spatialReference=a,t}))}}(o,S,q,s)),n=[],i=[];for(let s=0;s<w.length;s++){const a=w[s];if("cut"!==a)i.push(a);else{const a=t.shift(),o=e[s];(0,r.H)(o)&&"polygon"===o.type&&o.rings&&o.rings.length>1&&a.rings.length>=o.rings.length?(n.push(a),i.push("simplify")):i.push(p?(0,r.at)(a):a)}}if(!n.length)return i;const a=await u(o,n,s),c=[];for(let e=0;e<i.length;e++){const t=i[e];"simplify"!==t?c.push(t):c.push(p?(0,r.at)(a.shift()):a.shift())}return c}const R=[];for(let e=0;e<w.length;e++){const t=w[e];if("cut"!==t)R.push(t);else{const e=S.shift();R.push(!0===p?(0,r.at)(e):e)}}return Promise.resolve(R)}},21205:(e,t,s)=>{s.d(t,{n:()=>u});var r=s(58574),n=s(47817);const i=4294967296,a=(0,r.t)("esri-text-decoder")?new TextDecoder("utf-8"):null,o=(0,r.t)("safari")||(0,r.t)("ios")?6:(0,r.t)("ff")?12:32;class u{constructor(e,t,s=0,r=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,s,r)}init(e,t,s,r){this._data=e,this._dataView=t,this._pos=s,this._end=r}clone(){return new u(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getUint32(t+4,!0)*i;return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getInt32(t+4,!0)*i;return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,r){const n=this.getMessage(),i=e(n,t,s,r);return n.release(),i}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=u.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){u.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,s=this._pos,r=0;if(this._end-s>=10)do{if(t=e[s++],r|=127&t,0==(128&t))break;if(t=e[s++],r|=(127&t)<<7,0==(128&t))break;if(t=e[s++],r|=(127&t)<<14,0==(128&t))break;if(t=e[s++],r|=(127&t)<<21,0==(128&t))break;if(t=e[s++],r+=268435456*(127&t),0==(128&t))break;if(t=e[s++],r+=34359738368*(127&t),0==(128&t))break;if(t=e[s++],r+=4398046511104*(127&t),0==(128&t))break;if(t=e[s++],r+=562949953421312*(127&t),0==(128&t))break;if(t=e[s++],r+=72057594037927940*(127&t),0==(128&t))break;if(t=e[s++],r+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;s!==this._end&&(t=e[s],0!=(128&t));)++s,r+=(127&t)*n,n*=128;if(s===this._end)throw new Error("Varint overrun!");++s,r+=t*n}return this._pos=s,r}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>o&&a){const r=e.subarray(t,s);return a.decode(r)}let r="",n="";for(let i=t;i<s;++i){const t=e[i];128&t?n+="%"+t.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(r+=decodeURIComponent(n)),r}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}u.pool=new n.cg(u,null,(e=>{e._data=null,e._dataView=null}))},84780:(e,t,s)=>{s.d(t,{I:()=>I,g:()=>g,n:()=>u,t:()=>E});var r=s(47817),n=s(1186),i=s(69764),a=s(21205);const o=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this.options=e,this.geometryTypes=o,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new n.e}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,r.bf)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,i.T)(this.options.sourceSpatialReference)/(0,i.T)(e.spatialReference);if(1!==t)for(const s of e.features){if(!s.geometry||!s.geometry.coords)continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new n.t}createSpatialReference(){return{wkid:0}}createGeometry(){return new n.a}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new n.a}}const c=r.S.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),l=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],p=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],h=["upperLeft","lowerLeft"];function g(e){return e>=l.length?null:l[e]}function f(e){return e>=p.length?null:p[e]}function d(e){return e>=h.length?null:h[e]}function y(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function m(e,t,s){const r=t.createPointGeometry(s);for(;e.next();)switch(e.tag()){case 3:{const s=e.getUInt32(),n=e.pos()+s;let i=0;for(;e.pos()<n;)t.addCoordinatePoint(r,e.getSInt64(),i++);break}default:e.skip()}return r}function _(e,t,s){const r=t.createGeometry(s),n=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const s=e.getUInt32(),n=e.pos()+s;let i=0;for(;e.pos()<n;)t.addLength(r,e.getUInt32(),i++);break}case 3:{const s=e.getUInt32(),i=e.pos()+s;let a=0;for(t.allocateCoordinates(r);e.pos()<i;)t.addCoordinate(r,e.getSInt64(),a),a++,a===n&&(a=0);break}default:e.skip()}return r}function b(e){const t=new n.a;let s="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const s=e.getUInt32(),r=e.pos()+s;for(;e.pos()<r;)t.lengths.push(e.getUInt32());break}case 3:{const s=e.getUInt32(),r=e.pos()+s;for(;e.pos()<r;)t.coords.push(e.getSInt64());break}case 1:s=o[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:s}}function k(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function x(e){const t={type:g(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=g(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=f(e.getEnum());break;case 5:try{t.domain=JSON.parse(e.getString())}catch(e){c.error(new r.s("query:parsing-pbf","Failed to parse domain",{error:e})),t.domain=null}break;case 6:t.defaultValue=e.getString();break;default:e.skip()}return t}function S(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function w(e,t,s,r){const n=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=r[i++].name;n.attributes[t]=e.processMessage(k);break}case 2:n.geometry=e.processMessageWithArgs(_,t,s);break;case 4:n.centroid=e.processMessageWithArgs(m,t,s);break;default:e.skip()}return n}function T(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function F(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function I(e){const t={originPosition:d(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=d(e.getEnum());break;case 2:t.scale=e.processMessage(T);break;case 3:t.translate=e.processMessage(F);break;default:e.skip()}return t}function q(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function R(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function V(e,t){const s=t.createFeatureResult();s.geometryType=y(t,0);let r=!1;for(;e.next();)switch(e.tag()){case 1:s.objectIdFieldName=e.getString();break;case 3:s.globalIdFieldName=e.getString();break;case 4:s.geohashFieldName=e.getString();break;case 5:s.geometryProperties=e.processMessage(q);break;case 7:s.geometryType=y(t,e.getEnum());break;case 8:s.spatialReference=e.processMessageWithArgs(R,t);break;case 10:s.hasZ=e.getBool();break;case 11:s.hasM=e.getBool();break;case 12:s.transform=e.processMessage(I);break;case 9:{const t=e.getBool();s.exceededTransferLimit=t;break}case 13:t.addField(s,e.processMessage(x));break;case 15:r||(t.prepareFeatures(s),r=!0),t.addFeature(s,e.processMessageWithArgs(w,t,s,s.fields));break;case 2:s.uniqueIdField=e.processMessage(S);break;default:e.skip()}return t.finishFeatureResult(s),s}function O(e,t){const s={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(b);break;case 1:s.featureResult=e.processMessageWithArgs(V,t);break;default:e.skip()}return(0,r.H)(n)&&s.featureResult&&t.addQueryGeometry(s,n),s}function E(e,t){const s=function(e,t){try{const s=2,r=new a.n(new Uint8Array(e),new DataView(e)),n={};for(;r.next();)r.tag()===s?n.queryResult=r.processMessageWithArgs(O,t):r.skip();return n}catch(e){throw new r.s("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}(e,t),n=s.queryResult.featureResult,i=s.queryResult.queryGeometry,o=s.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=o),n}},78899:(e,t,s)=>{s.r(t),s.d(t,{S:()=>d,c:()=>p,d:()=>h,f:()=>g,p:()=>f,q:()=>m,t:()=>o,y:()=>l});var r=s(47817),n=s(89300),i=s(22486),a=s(84780);function o(e){const t={};for(const s in e){if("declaredClass"===s)continue;const r=e[s];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){t[s]=[];for(let e=0;e<r.length;e++)t[s][e]=o(r[e])}else"object"==typeof r?r.toJSON&&(t[s]=JSON.stringify(r)):t[s]=r}return t}const u="Layer does not support extent calculation.";function c(e,t){const s=e.geometry,n=e.toJSON(),i=n;if((0,r.H)(s)&&(i.geometry=JSON.stringify(s),i.geometryType=(0,r.ar)(s),i.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference)),n.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(i.objectIds=n.objectIds.join(",")),n.orderByFields&&(i.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete i.outFields:-1!==n.outFields.indexOf("*")?i.outFields="*":i.outFields=n.outFields.join(","),n.outSR?i.outSR=n.outSR.wkid||JSON.stringify(n.outSR):s&&(n.returnGeometry||n.returnCentroid)&&(i.outSR=i.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(i.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(i.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(i.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(i.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(i.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(i.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:s}=e;null==t&&null==s||(i.time=t===s?t:`${null==t?"null":t},${null==s?"null":s}`),delete n.timeExtent}return i}async function l(e,t,s,n){const a=(0,r.H)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await y(e,t,"json",n);return(0,i.t)(t,s,a.data),a}async function p(e,t,s,n){if((0,r.H)(t.timeExtent)&&t.timeExtent.isEmpty)return Promise.resolve({data:s.createFeatureResult()});const i=await h(e,t,n),o=i;return o.data=(0,a.t)(i.data,s),o}function h(e,t,s){return y(e,t,"pbf",s)}function g(e,t,s){return(0,r.H)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):y(e,t,"json",s,{returnIdsOnly:!0})}function f(e,t,s){return(0,r.H)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):y(e,t,"json",s,{returnIdsOnly:!0,returnCountOnly:!0})}function d(e,t,s){return(0,r.H)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):y(e,t,"json",s,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(u);if(t.hasOwnProperty("count"))throw new Error(u);return e}))}function y(e,t,s,i={},a={}){const u="string"==typeof e?(0,r.j)(e):e,l=t.geometry?[t.geometry]:[];return i.responseType="pbf"===s?"array-buffer":"json",(0,n.L)(l,null,i).then((e=>{const n=e&&e[0];(0,r.H)(n)&&((t=t.clone()).geometry=n);const l=o({...u.query,f:s,...a,...c(t,a)});return(0,r.U)((0,r.b3)(u.path,"query"),{...i,query:{...l,...i.query}})}))}const m=Object.freeze({__proto__:null,executeQuery:l,executeQueryForCount:f,executeQueryForExtent:d,executeQueryForIds:g,executeQueryPBF:p,executeQueryPBFBuffer:h,queryToQueryStringParameters:c,runQuery:y})}}]);