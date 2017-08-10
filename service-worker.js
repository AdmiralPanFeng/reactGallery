"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","91622476592169a7a42fa0a07db36df9"],["static/css/main.6ce27047.css","cc0084784d7175f7362c5fca7251ba70"],["static/js/about/user.0a900d39.chunk.js","9883704c998d244c9164abc26c4b686c"],["static/js/abouts/user.953bb551.chunk.js","7cb6ea65075afcb7303252acbff585d0"],["static/js/main.9084cca9.js","0fc6960ed290ba2a22be35344c12ff9a"],["static/media/1.acaa8c8b.jpg","acaa8c8beaadfe494d4a524ba1d2553a"],["static/media/10.b740dc25.jpg","b740dc253725b509a6452bf71dbd1b9b"],["static/media/11.9c96faab.jpg","9c96faab3c24dc1131940fd92264a6f5"],["static/media/12.67a9c125.jpg","67a9c125bd6ea7ca709872f7c6cd8815"],["static/media/2.9c17ae43.jpg","9c17ae432440779582229ca6f7cf85bf"],["static/media/3.0e66a2a0.jpg","0e66a2a0456b563e786e63c83468f71a"],["static/media/4.da4ab925.jpg","da4ab9252d29be90d8ced67afc028232"],["static/media/5.85848fb0.jpg","85848fb08423356a28e67bc2a6df7dc2"],["static/media/6.2a166ad7.jpg","2a166ad7568c40afd2e8cca41b90d07d"],["static/media/7.8f681fd1.jpg","8f681fd1d094dfdb3be035481765fc05"],["static/media/8.9fdfea16.jpg","9fdfea165d64dbead4758c194ef3109b"],["static/media/9.e7586e32.jpg","e7586e323a21b17c63f47aebbae9968c"],["static/media/turn-arrow.43c74a49.svg","43c74a49faa494dfde80350fbf9b51f5"],["static/media/turn-arrow.583ca888.eot","583ca888b447d46759b91bbc312c8337"],["static/media/turn-arrow.860e608e.woff","860e608ed28f527db5860195ed618985"],["static/media/turn-arrow.bad2eaf2.ttf","bad2eaf2d783e1bb2ef78f6b7ac05e88"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});