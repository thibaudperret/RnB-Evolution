var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(b,e,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");b!=Array.prototype&&b!=Object.prototype&&(b[e]=f.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(b){var e=0;return $jscomp.iteratorPrototype(function(){return e<b.length?{done:!1,value:b[e++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(b,e){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var f=0,a={next:function(){if(f<b.length){var c=f++;return{value:e(c,b[c]),done:!1}}a.next=function(){return{done:!0,value:void 0}};return a.next()}};a[Symbol.iterator]=function(){return a};return a};
$jscomp.polyfill=function(b,e,f,a){if(e){f=$jscomp.global;b=b.split(".");for(a=0;a<b.length-1;a++){var c=b[a];c in f||(f[c]={});f=f[c]}b=b[b.length-1];a=f[b];e=e(a);e!=a&&null!=e&&$jscomp.defineProperty(f,b,{configurable:!0,writable:!0,value:e})}};$jscomp.polyfill("Array.prototype.keys",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6-impl","es3");$jscomp.owns=function(b,e){return Object.prototype.hasOwnProperty.call(b,e)};
$jscomp.polyfill("Object.assign",function(b){return b?b:function(b,f){for(var a=1;a<arguments.length;a++){var c=arguments[a];if(c)for(var d in c)$jscomp.owns(c,d)&&(b[d]=c[d])}return b}},"es6-impl","es3");
(function(){var b;(function(a){a[a.REPORT_ERROR=0]="REPORT_ERROR";a[a.INIT_HIT=1]="INIT_HIT"})(b||(b={}));var e;(function(a){a[a.MINUTE=0]="MINUTE";a[a.HOUR=1]="HOUR";a[a.DAY=2]="DAY"})(e||(e={}));var f=function(){function a(){}a.isBootstrapLoaded=function(){return!!window.top.browsi_bootstrap_loaded};a.initialize=function(){a.tag=document.getElementById(a.TAG_ID);if(!a.tag)return!1;a.siteKey=a.tag.getAttribute("data-siteKey")||"error";a.publisherKey=a.tag.getAttribute("data-pubKey")||"error";a.pageWidth=
this.getPageWidth();a.pageViewId=a.generateToken();a.topDocument=window.top.document;a.domainSuffix=a.getDomainSuffix();a.yieldHostname="yield-manager"+a.domainSuffix;a.esReportDomain="events"+a.domainSuffix;a.startedTimestamp=+new Date;return!0};a.getPageWidth=function(){var c=Math.floor(Math.max(a.html.clientWidth,a.html.scrollWidth,a.html.offsetWidth));return c?c:window.top.screen&&window.top.screen.width};a.safeJSONStringify=function(a){var c=Object.prototype.hasOwnProperty;return JSON.stringify(function(a){function b(a){if(null===
a||"object"!==typeof a)return a;if(-1!==d.indexOf(a))return"[Circular]";d.push(a);try{if("function"===typeof a.toJSON)try{return b(a.toJSON())}catch(n){return"[Throws: "+(n?n.message:"?")+"]"}}catch(n){}return Array.isArray(a)?a.map(b):Object.keys(a).reduce(function(d,h){var g;a:{try{if(c.call(a,h))try{g=a[h];break a}catch(l){g="[Throws: "+(l?l.message:"?")+"]";break a}g=a[h];break a}catch(l){}g=void 0}d[h]=b(g);return d},{})}var d=[];return b(a)}(a))};a.send=function(c,d){var h=new XMLHttpRequest,
g;switch(c){case b.INIT_HIT:g="//"+a.esReportDomain+"/events/supply?p="+d.bootstrap_page_view_id;break;case b.REPORT_ERROR:g="//"+a.esReportDomain+"/events/engineError"}h.open("POST",g,!0);h.send(a.safeJSONStringify([d]))};a.getDebugStorage=function(){var a=null,b=sessionStorage.getItem("__brwsidbg");if(b)try{a=JSON.parse(b)}catch(h){}return a};a.getData=function(c,b){var d=a.topDocument,g=a.getDebugStorage(),e=g&&g.dataURL?g.dataURL:window.top.document.location.protocol+"//"+window.top.document.location.host+
window.top.document.location.pathname;c&&(e=encodeURIComponent(e));d={site_key:g&&g.siteKey?g.siteKey:a.siteKey,publisher_key:a.publisherKey,page_view_id:a.pageViewId,bootstrap_page_view_id:a.pageViewId,referrer:d.referrer,url:e,session_id:a.getSessionId(),user_id:a.getUserId()};b&&(d.page_width=a.pageWidth,g=JSON.parse(a.getStorage("__bus")||"{}"),0<Object.keys(g).length&&(d.ud=g));return d};a.sendInitHit=function(){var c=a.getData(!0,!1);c.now=Math.floor(Date.now()/1E3);c.event_type="initial_hit";
c.time_offset=+new Date-a.startedTimestamp;var d=a.getDebugStorage();a.send(b.INIT_HIT,c);d&&d.hasOwnProperty("debug")&&(window.browsiOutput={state:"bootstrap_loaded",bootstrap:{supplyResponse:{},initial_hit:c}})};a.getCookie=function(a){a=encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&");a=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+a+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");return decodeURIComponent(a)||""};a.setCookie=function(a,b,h,g){if(a&&!/^(?:expires|max-age|path|domain|secure)$/i.test(a)){var c=
"";if(h){c=6E4;switch(g){case e.MINUTE:break;case e.HOUR:c*=60;break;default:c*=1440}c="; expires="+(new Date(+new Date+h*c)).toUTCString()}document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+c+"; path=/"}};a.isStorageAvailable=function(){var a;try{return a=window.localStorage,a.setItem("__storage_test__","__storage_test__"),a.removeItem("__storage_test__"),!0}catch(d){return d instanceof DOMException&&(22===d.code||1014===d.code||"QuotaExceededError"===d.name||"NS_ERROR_DOM_QUOTA_REACHED"===
d.name)&&0!==a.length}};a.getStorage=function(a){return this.isStorageAvailable()?localStorage.getItem(a)||"":""};a.setStorage=function(a,b){this.isStorageAvailable()&&localStorage.setItem(a,b)};a.getSessionId=function(){return a.getCookie(a.COOKIE_BROWSI_SESSION_ID)};a.getUserId=function(){return a.getStorage(a.COOKIE_BROWSI_USER_ID)||a.getCookie(a.COOKIE_BROWSI_USER_ID)};a.generateToken=function(a){void 0===a&&(a=10);for(var b="",c=0;c<a;c++)b+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_".charAt(Math.floor(53*
Math.random()));return b};a.getUniqueRandomVariable=function(){for(var b=a.generateToken(20);window.hasOwnProperty(b);)b=a.generateToken();return b};a.getDomainSuffix=function(){var b=sessionStorage.__browsienv;return a.tag&&(b||a.tag.getAttribute("data-browsidomain")||".browsiprod.com")};a.injectScript=function(b,d){var c=a.topDocument.createElement("script");c.setAttribute("type","text/javascript");c.setAttribute("charset","UTF-8");c.setAttribute("src",b);d&&c.setAttribute("crossorigin","anonymous");
c.onerror=function(g){d&&c.getAttribute("crossorigin")&&a.injectScript(b,!1)};a.topDocument.head.appendChild(c)};a.loadMiddy=function(){var b=a.getData(!1,!0);b.bootstrapId=a.pageViewId;b.callback=a.getUniqueRandomVariable();window.top[b.callback]=function(b,c){function d(a){return a&&"object"===typeof a&&!Array.isArray(a)&&null!==a}function f(a,b){if(d(a)&&d(b))for(var c in b)d(b[c])?(a[c]||Object.assign(a,(m={},m[c]={},m)),f(a[c],b[c])):Object.assign(a,(e={},e[c]=b[c],e));return a;var m,e}function g(a){return!!(a&&
a.dt&&a.dt.p&&"DESKTOP"===a.dt.p)}function h(b){var c=b&&b.i&&b.i.s,d=b&&b.i&&b.i.u;b&&(b.i&&(b.bpvi=a.pageViewId,b.yhn=a.yieldHostname,b.to=a.startedTimestamp),b.h=b.e&&b.e.h,b.version=b.e&&b.e.v);a.setCookie(a.COOKIE_BROWSI_SESSION_ID,c,30,e.MINUTE);a.setCookie(a.COOKIE_BROWSI_USER_ID,d,365);a.setStorage(a.COOKIE_BROWSI_USER_ID,d);return b}function l(b){var c=b.spotEngineObject,d=b.initResponse,f=d.isReturningUser,g=d.isBenchmarked,m=d.trafficSource,h=d.deviceType,l=d.sessionId,k=d.userId,d=d.pageViewId;
a.setCookie(a.COOKIE_BROWSI_SESSION_ID,l,30,e.MINUTE);a.setCookie(a.COOKIE_BROWSI_USER_ID,k,365);a.setStorage(a.COOKIE_BROWSI_USER_ID,k);c.siteKey=a.siteKey;c.publisherKey=b.publisherKey;c.sessionID=l||"";c.userID=k||"";c.pageViewID=d||"error";c.esReportDomain="//"+a.esReportDomain+"/events/";c.yieldHostname=a.yieldHostname;c.country_code=c.countryCode;c.yieldOnly=!0;c.trafficSource=m;c.isReturningUser=f;c.isBenchmarked=g;c.deviceType=h;c.bootstrapPageViewId=a.pageViewId;c.timeOffset=a.startedTimestamp;
return c}if("object"===typeof b&&!b.error&&!window.top._middyo){var p=g(b)?h(b):l(b),q=sessionStorage.getItem("__brwsidbg"),k=a.getDebugStorage();k&&k.hasOwnProperty("debug")&&window.browsiOutput&&window.browsiOutput.bootstrap&&(window.browsiOutput.bootstrap.supplyResponse=b);k=function(c,d){if(d&&"object"===typeof d&&d.preEngineJS){var e=d.preEngineJS;try{"function"===typeof e&&(c.externalFlowHandler||(c.externalFlowHandler={}),c.externalFlowHandler.preEngine=e)}catch(r){}}c.protocol=window.top.location.protocol.replace(":",
"");if(q){e=void 0;try{e=JSON.parse(q)}catch(r){}if(e)if(g(b))c=f(c,e);else for(var h in e)e.hasOwnProperty(h)&&(c[h]=e[h])}window.top._middyo=c;h=a.getDebugStorage();a.injectScript(h&&h.middyHost?h.middyHost:"//"+c.h+"/sd/apps/middy/middy"+(c.version?"-":"")+c.version+".js",!0)};c&&"object"===typeof c&&c.jsURL?(window.top.__browsiLoadFunc=k,window.top.__browsiLoadObject=p,a.injectScript(c.jsURL,!0)):k(p,c)}};var d={siteKey:b.site_key,callback:b.callback,referrerUrl:b.referrer,url:b.url,bootstrapId:b.page_view_id,
pageWidth:b.page_width,sessionId:b.session_id,userId:b.user_id,isGzip:!0};b.ud&&(d.ud=b.ud);var b="//"+a.yieldHostname+"/supply?body=",f=document.createElement("script");f.src=b+encodeURIComponent(JSON.stringify(d))+"&cb="+ +new Date;a.topDocument.head.appendChild(f)};a.TAG_ID="browsi-tag";a.COOKIE_BROWSI_SESSION_ID="__browsiSessionID";a.COOKIE_BROWSI_USER_ID="__browsiUID";a.doc=window.top.document;a.body=a.doc.body;a.html=a.doc.documentElement;return a}();f.initialize()&&(f.sendInitHit(),f.isBootstrapLoaded()||
(window.top.browsi_bootstrap_loaded=!0,f.loadMiddy()))})();
