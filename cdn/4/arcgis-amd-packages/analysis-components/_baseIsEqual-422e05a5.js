define(["exports","./_Uint8Array-190b1a5d","./_MapCache-84d65af1","./isObject-072a0200"],(function(e,t,r,n){"use strict";function a(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r.MapCache;++t<n;)this.add(e[t])}function i(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},a.prototype.has=function(e){return this.__data__.has(e)};var o=1,c=2;function f(e,t,r,n,f,u){var s=r&o,l=e.length,b=t.length;if(l!=b&&!(s&&b>l))return!1;var v=u.get(e),y=u.get(t);if(v&&y)return v==t&&y==e;var h=-1,p=!0,_=r&c?new a:void 0;for(u.set(e,t),u.set(t,e);++h<l;){var d=e[h],g=t[h];if(n)var j=s?n(g,d,h,t,e,u):n(d,g,h,e,t,u);if(void 0!==j){if(j)continue;p=!1;break}if(_){if(!i(t,(function(e,t){if(a=t,!_.has(a)&&(d===e||f(d,e,r,n,u)))return _.push(t);var a}))){p=!1;break}}else if(d!==g&&!f(d,g,r,n,u)){p=!1;break}}return u.delete(e),u.delete(t),p}function u(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function s(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var l=n.Symbol?n.Symbol.prototype:void 0,b=l?l.valueOf:void 0,v=Object.prototype.hasOwnProperty,y="[object Arguments]",h="[object Array]",p="[object Object]",_=Object.prototype.hasOwnProperty;e.baseIsEqual=function e(a,i,o,c,l){return a===i||(null==a||null==i||!n.isObjectLike(a)&&!n.isObjectLike(i)?a!=a&&i!=i:function(e,n,a,i,o,c){var l=r.isArray(e),d=r.isArray(n),g=l?h:t.getTag$1(e),j=d?h:t.getTag$1(n),w=(g=g==y?p:g)==p,A=(j=j==y?p:j)==p,O=g==j;if(O&&t.isBuffer(e)){if(!t.isBuffer(n))return!1;l=!0,w=!1}if(O&&!w)return c||(c=new t.Stack),l||t.isTypedArray(e)?f(e,n,a,i,o,c):function(e,n,a,i,o,c,l){switch(a){case"[object DataView]":if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=n.byteLength||!c(new t.Uint8Array(e),new t.Uint8Array(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return r.eq(+e,+n);case"[object Error]":return e.name==n.name&&e.message==n.message;case"[object RegExp]":case"[object String]":return e==n+"";case"[object Map]":var v=u;case"[object Set]":var y=1&i;if(v||(v=s),e.size!=n.size&&!y)return!1;var h=l.get(e);if(h)return h==n;i|=2,l.set(e,n);var p=f(v(e),v(n),i,o,c,l);return l.delete(e),p;case"[object Symbol]":if(b)return b.call(e)==b.call(n)}return!1}(e,n,g,a,i,o,c);if(!(1&a)){var k=w&&_.call(e,"__wrapped__"),m=A&&_.call(n,"__wrapped__");if(k||m){var S=k?e.value():e,L=m?n.value():n;return c||(c=new t.Stack),o(S,L,a,i,c)}}return!!O&&(c||(c=new t.Stack),function(e,r,n,a,i,o){var c=1&n,f=t.getAllKeys(e),u=f.length;if(u!=t.getAllKeys(r).length&&!c)return!1;for(var s=u;s--;){var l=f[s];if(!(c?l in r:v.call(r,l)))return!1}var b=o.get(e),y=o.get(r);if(b&&y)return b==r&&y==e;var h=!0;o.set(e,r),o.set(r,e);for(var p=c;++s<u;){var _=e[l=f[s]],d=r[l];if(a)var g=c?a(d,_,l,r,e,o):a(_,d,l,e,r,o);if(!(void 0===g?_===d||i(_,d,n,a,o):g)){h=!1;break}p||(p="constructor"==l)}if(h&&!p){var j=e.constructor,w=r.constructor;j==w||!("constructor"in e)||!("constructor"in r)||"function"==typeof j&&j instanceof j&&"function"==typeof w&&w instanceof w||(h=!1)}return o.delete(e),o.delete(r),h}(e,n,a,i,o,c))}(a,i,o,c,e,l))}}));