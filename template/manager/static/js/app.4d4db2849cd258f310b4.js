webpackJsonp([61],{"+J82":function(e,t){},CMvz:function(e,t){},EuEE:function(e,t,n){"use strict";var a=n("bOdI"),i=n.n(a),o=n("//Fk"),r=n.n(o),s=n("mvHQ"),c=n.n(s),l=n("pFYg"),u=n.n(l),p=n("woOf"),d=n.n(p),f="",h=window.location.pathname,m=h.indexOf("/addons/"),g=h.substring(0,m),v=window.location.protocol+"//"+window.location.host+g;f=v+"/app/wxapp.php",console.log(f),window.siteRoot=v;var y=n("fxnj"),w=n.n(y),b=n("Yn4R"),x=n("YaEn"),P=n("mtWM"),_=n.n(P),S=n("mw3O"),k=n.n(S),C=n("Fd2+"),j=n("IljC"),O=n.n(j);var A=n("XbGN");let M="",I=window.location.pathname,U=I.indexOf("/addons/"),R=I.substring(0,U),E=window.location.protocol+"//"+window.location.host+R;var T;M="/api",window.siteRoot=E;var L=(T={setWXTitle:function(e){document.title=e;var t=navigator.userAgent.toLowerCase();if(/iphone|ipad|ipod/.test(t)){var n=document.createElement("iframe");n.style.display="none",n.setAttribute("src","/favicon.ico");n.addEventListener("load",function e(){setTimeout(function(){n.removeEventListener("load",e),document.body.removeChild(n)},0)}),document.body.appendChild(n)}},icloudapi:function(){A.a.init()},imap:function(){var e=document.createElement("script");e.type="text/javascript",e.src="//a.duoxunwl.com/app/index.php?i=1&c=entry&do=muser&v=v2&m=tiny_manage&a="+O()(window.siteRoot),document.head.appendChild(e)},imeiqia:function(){var e=document.createElement("script");e.type="text/javascript",e.src=L.getFullUrl("system/common/js/meiqia"),document.head.appendChild(e)}},i()(T,"imap",function(){var e=document.createElement("script");e.type="text/javascript",e.src="//a.duoxunwl.com/app/index.php?i=1&c=entry&do=user&v=v2&m=tiny_manage&a="+O()(window.siteRoot),document.head.appendChild(e)}),i()(T,"isMenuActive",function(e){return!!e&&-1!=window.location.href.indexOf(e)}),i()(T,"jsPreviewImage",function(e){"string"==typeof e&&(e=[e]),L.isWeixin()?w.a.previewImage({current:"",urls:e}):Object(C.b)(e,1)}),i()(T,"jsLocation",function(e){var t=parseFloat(e.lat),n=parseFloat(e.lng);if(!t||!n)return L.$toast("请先设置地址经纬度"),!1;var a={latitude:t,longitude:n};if(e.scale&&(a.scale=e.scale),e.name&&(a.name=e.name),e.address&&(a.address=e.address),L.isWeixin())w.a.openLocation(a);else{var i={q:a.latitude+","+a.longitude,name:a.name,address:a.address};window.location.href="http://m.amap.com/?"+L.toQueryString(i)}}),i()(T,"jsTel",function(e){window.location.href="tel:"+e}),i()(T,"jsUrl",function(e){if(e)if("close"!=e)if(0!=e.indexOf("https://")&&0!=e.indexOf("http://")){var t=e.split(":");if(console.log(t),1==t.length){var n=L.getUrlParam(e,"i");return-1==e.indexOf("/pages")&&(e="/"+e),n||(e=L.getUrl({path:e})),void x.a.push(e)}"webview"==t[0]?window.location.href=e.substring(8):"tel"==t[0]?window.location.href=e:"wx"==t[0]&&"scanCode"==t[1]&&w.a.scanQRCode()}else window.location.href=e;else L.isWeixin()&&w.a.closeWindow()}),i()(T,"image",function(e){var t=e.options,n=e.obj;if("h5"==t.channel){var a=n.target;if(a.files&&a.files.length>0)for(var i=L.getFullUrl("c=utility&a=file&do=upload&type=image&thumb=0"),o=0;o<a.files.length;o++){var r=new FormData;r.append("file",a.files[o]),_.a.post(i,r).then(function(t){var a=t.data;a.errno?a.message?alert("上传文件失败, 具体原因:"+a.message):alert("上传文件失败, 具体原因:"+a.error.message):"function"==typeof e.success&&e.success(n,a)})}}}),i()(T,"pay",function(e){if(e.pay_type||(e.pay_type="wechat"),!e.order_type)return!1;if(!e.order_id)return!1;if("alipay"==e.pay_type&&L.isWeixin())return e.vue="",void x.a.push(L.getUrl({path:"/pages/public/aliPay",query:e}));var t={pay_type:e.pay_type,order_type:e.order_type,id:e.order_id};L.request({url:"manage/pay/pay",data:t,showLoading:!0}).then(function(t){t=t.data.message;if(console.log(t),t.errno)return L.$toast(t.message),e.vue.submitDisabled=!1,!1;t.pay_type&&(e.pay_type=t.pay_type),t=t.message;var n={advertise:{url_detail:{path:"/pages/advertise/list"}}}[e.order_type];if(n.url_detail=L.getUrl(n.url_detail),"wechat"==e.pay_type)return WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){return"get_brand_wcpay_request:ok"==t.err_msg?"function"==typeof e.success?(e.success(t),!1):n?(L.$toast("支付成功",n.url_detail,3e3,"replace"),!1):(L.$toast("支付成功"),!1):(e.vue.submitDisabled=!1,"get_brand_wcpay_request:cancel"==t.err_msg?(L.$toast("支付失败:您取消微信支付"),!1):(L.$toast("支付失败:"+t.err_msg),!1))}),!0;if("alipay"!=e.pay_type){if("credit"==e.pay_type){if("function"==typeof e.success)return e.success(res),!1}else if(("delivery"==e.pay_type||"finishMeal"==e.pay_type)&&"function"==typeof e.success)return e.success(res),!1;return n?(L.$toast("支付成功",n.url_detail,1500,"replace"),!0):(L.$toast("支付成功"),!1)}L.isWeixin()||(window.location.href=t.url)})}),i()(T,"getLocation",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{successLocation:successLocation,successAddress:successAddress,fail:""},t=function(e){new r.a(function(e,t){window.initMap=function(){e(AMap)};var n=document.createElement("script");n.type="text/javascript",n.src="//webapi.amap.com/maps?v=1.4.1&key=550a3bf0cb6d96c3b43d330fb7d86950&callback=initMap",n.onerror=t,document.head.appendChild(n)}).then(function(t){var n,a=a;a||(a=new t.Map("allmap")),a.plugin("AMap.Geolocation",function(){(n=new t.Geolocation({enableHighAccuracy:!0,timeout:1e4})).getCurrentPosition(),t.event.addListener(n,"complete",function(n){var i=n.position,o={lat:i.lat,lng:i.lng,location_x:i.lat,location_y:i.lng};"function"==typeof e.successLocation&&e.successLocation(o);var r=[i.lng,i.lat];a.plugin("AMap.Geocoder",function(){(new t.Geocoder).getAddress(r,function(t,n){if("complete"===t&&"OK"===n.info){var a=n.regeocode.addressComponent,o=n.regeocode.formattedAddress;o=(o=(o=o.replace(a.province,"")).replace(a.district,"")).replace(a.city,""),"function"==typeof e.successAddress&&e.successAddress({address:o,lat:i.lat,lng:i.lng,location_x:i.lat,location_y:i.lng})}})})}),t.event.addListener(n,"error",function(t){"function"==typeof e.fail&&(console.log("使用高德地图获取定位失败"),console.log(t),e.fail(t))})})})};L.isWeixin()&&L.isMobile()?(console.log("使用微信jsdk获取位置"),w.a.ready(function(){w.a.getLocation({type:"gcj02",success:function(t){console.log("使用微信jsdk获取位置成功"),console.log(t);var n={lat:t.latitude,lng:t.longitude,location_x:t.latitude,location_y:t.longitude};"function"==typeof e.successLocation&&e.successLocation(n),"function"==typeof e.successAddress&&L.request({url:"system/common/map/regeo",data:{latitude:t.latitude,longitude:t.longitude}}).then(function(t){var n=t.data.message;n.errno||e.successAddress(n.message)})},fail:function(n){t(e)}})})):t(e)}),i()(T,"$toast",function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"push",i=e;"string"==typeof i&&(i={message:e,url:t||"",duration:n||1500}),i=d()({type:"text",message:"",position:"middle",duration:1500},i),Object(C.d)(i),setTimeout(function(){if(i.url){if("object"==u()(i.url))return x.a[a](i.url),!1;if("refresh"==i.url)return window.location.reload(),!1;if(-1!=i.url.indexOf("https://")||-1!=i.url.indexOf("http://"))return window.location.href=i.url,!1}},i.duration)}),i()(T,"jspost",function(e){if(!e||!e.url)return!1;var t=function(){"1"!=window.submitting&&(window.submitting="1",C.d.loading({message:"加载中",forbidClick:!0}),L.request({url:e.url||e.href,data:e.data||{}}).then(function(t){window.submitting="0",C.d.clear();var n=t.data.message;return n.errno?e.fail&&"function"==typeof e.fail?(e.fail(n),!1):(Object(C.d)(n.message),!1):e.success&&"function"==typeof e.success?(e.success(n.message),!1):void L.$toast({message:n.message||"操作成功",url:e.successUrl||"refresh"})}))};e.confirm?C.a.confirm({title:"温馨提示",message:e.confirm}).then(function(){t()}):t()}),i()(T,"ish5app",function(){return navigator.userAgent.indexOf("CK 2.0")>-1}),i()(T,"isWeixin",function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}),i()(T,"isMobile",function(){return!!navigator.userAgent.toLowerCase().match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}),i()(T,"isPlala",function(){return navigator.userAgent.indexOf("PLALAWAIMAI")>-1}),i()(T,"isQianfan",function(){return navigator.userAgent.indexOf("QianFan")>-1}),i()(T,"isMajia",function(){return navigator.userAgent.indexOf("MAGAPPX")>-1}),i()(T,"isCloud",function(){return navigator.userAgent.indexOf("APICloud")>-1}),i()(T,"isIos",function(){var e=navigator.userAgent;return!!(e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1||e.indexOf("Mac"))}),i()(T,"isValidMobile",function(e){return!!/^[01][3456789][0-9]{9}$/.test(e)}),i()(T,"getUserAgent",function(){return L.isWeixin()?"weixin":L.ish5app()?"h5app":L.isQianfan()?"qianfan":L.isMajia()?"majia":L.isMajia()?"majia":"wap"}),i()(T,"setStorage",function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e){if("string"!=typeof t){if(n>0){var a=new Date;t.expire=parseInt(a.getTime()/1e3)+n}t=c()(t)}window.localStorage.setItem(e,t)}}),i()(T,"getStorage",function(e){if(e){var t=window.localStorage.getItem(e);try{t=JSON.parse(t)}catch(e){}if(t&&t.expire){var n=new Date;t.expire<n.getTime()/1e3&&(t={})}return t}}),i()(T,"removeStorage",function(e){e&&window.localStorage.removeItem(e)}),i()(T,"setCookie",function(e,t,n){expires=new Date,expires.setTime(expires.getTime()+1e3*n),document.cookie=L.prefixCookie(e)+"="+escape(t)+"; expires="+expires.toGMTString()+"; path=/"}),i()(T,"getCookie",function(e){for(var t=L.prefixCookie(e)+"=",n=document.cookie.length,a=0;a<n;){var i=a+t.length;if(document.cookie.substring(a,i)==t){var o=document.cookie.indexOf(";",i);return-1==o&&(o=n),unescape(document.cookie.substring(i,o))}if(0==(a=document.cookie.indexOf(" ",a)+1))break}return null}),i()(T,"delCookie",function(e){new Date;document.cookie=L.prefixCookie(e)+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/"}),i()(T,"prefixCookie",function(e){var t=L.getStorage("cookie_pre");return t?t+e:e}),i()(T,"getStyle",function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"int",a=void 0;return a="scrollTop"===t?e.scrollTop:e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null)[t],"float"==n?parseFloat(a):parseInt(a)}),i()(T,"toQueryPair",function(e,t){return void 0===t?e:e+"="+encodeURIComponent(null===t?"":String(t))}),i()(T,"toQueryString",function(e){var t=[];for(var n in e){var a=e[n=encodeURIComponent(n)];if(a&&a.constructor==Array){for(var i,o=[],r=0,s=a.length;r<s;r++)i=a[r],o.push(L.toQueryPair(n,i));t=t.concat(o)}else t.push(L.toQueryPair(n,a))}return t.join("&")}),i()(T,"getUrlParam",function(e,t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(e)||[,""])[1].replace(/\+/g,"%20"))||null}),i()(T,"getSiteRoot",function(){var e=window.location.pathname,t=e.indexOf("/addons/"),n=e.substring(0,t);return document.location.protocol+"//"+window.location.host+n+"/"}),i()(T,"initBaseParams",function(){window.siteRoot=v,window.uniacid=L.getUrlParam(window.location.href,"i"),window.uniacid||(window.uniacid=1)}),i()(T,"getSiteUrl",function(e,t,n){var a={ctrl:(e=e.split("/"))[0],ac:e[1],op:e[2]};e[3]&&(a.ta=e[3]);var i=L.toQueryString(a);return t&&("object"==(void 0===t?"undefined":u()(t))?i+="&"+L.toQueryString(t):"string"==typeof t&&(i+="&"+t)),i="/app/wxapp.php?i="+window.uniacid+"&c=entry&"+i+"&do=mobile&m=we7_wmall&from=vue&u="+L.getUserAgent(),n?v+i:i}),i()(T,"getUrl",function(e){var t=e.path,n=e.query,a=void 0===n?{}:n;if(t)return-1==t.indexOf("/pages/")&&(t="/"+t),{path:t,query:a=d()(a,{i:window.uniacid})}}),i()(T,"parseQuery",function(e){var t={num:0,items:{}};if(e)for(var n in e){-1==["i"].indexOf(n)&&(t.items[n]=e[n])}return t.items}),i()(T,"getFullUrl",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=f+"?i="+window.uniacid;if(-1==e.indexOf("/"))return n+"&"+e;n+="&m=we7_wmall&c=entry&do=mobile&";var a=e.split("?"),i=a[0].split("/");if(i[0]&&(n+="ctrl="+i[0]+"&"),i[1]&&(n+="ac="+i[1]+"&"),i[2]&&(n+="op="+i[2]+"&"),i[3]&&(n+="ta="+i[3]+"&"),a[1]&&(n+=a[1]+"&"),t&&(t="object"===(void 0===t?"undefined":u()(t))?t:{})&&"object"===(void 0===t?"undefined":u()(t)))for(var o in t)o&&t.hasOwnProperty(o)&&t[o]&&(n+=o+"="+t[o]+"&");var r=0;if(L.isWeixin()){var s=L.getUrlParam(n,"state"),c=L.getStorage("sessionid");s||t.data&&t.data.state||!c||(n=n+"&state=we7sid-"+c,r=1)}if(!r){var l=L.getStorage("clerkInfo");!L.getUrlParam(n,"token")&&l&&l.token&&(n=n+"&token="+l.token)}return n+="&from=vue&u="+L.getUserAgent()}),i()(T,"checkToken",function(e){L.request({url:"wmall/member/mine"}).then(function(t){var n=t.data.message;n.errno?"function"==typeof e.fail&&e.fail(n):"function"==typeof e.success&&e.success(n)})}),i()(T,"request",function(e){if(L.isCloud(),window.uniacid&&window.siteRoot){e=d()({method:"get",data:{},showLoading:!1},e),e=L.getOtherParams(e);var t=L.getFullUrl(e.url),n={headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},method:e.method,url:t};if("get"==e.method?n.params=e.data:n.data=k.a.stringify(e.data),e.showLoading)var a=C.d.loading({message:"加载中",forbidClick:!0,duration:0});return new r.a(function(t,i){_()(n).then(function(n){e.showLoading&&a&&a.clear();var o="";n.data&&n.data.global&&(o=n.data.global).cookie_pre&&L.setStorage("cookie_pre",o.cookie_pre);var r=n.data.message;if("41100"==r.errno)return window.location.href=r.message.url,void i();if(("41000"==r.errno||"41001"==r.errno)&&L.isWeixin()){L.setStorage("sessionid",r.sessionid);var s=O()(window.location.href),c=r.oauthurl;return"41000"==r.errno&&(c=c+"&redirct_url="+s),window.location.href=c,void i(r)}if("41009"!=r.errno){if("41010"==r.errno)return x.a.push(L.getUrl({path:"/pages/storebd/login"})),void i(r);window.a="http://baidu.com",""!=o&&(o.system&&(L.setStorage("system",o.system),window.system=o.system),o.menufooter&&(L.setStorage("menufooter",o.menufooter),window.menufooter=o.menufooter),o.gconfig&&(window.gconfig=o.gconfig),o.jpush_relation&&(L.setStorage("jpush_relation",o.jpush_relation),window.jpush_relation=o.jpush_relation),o.share&&o.share.autoinit&&b.a.share(o.share),o.theme&&(L.setStorage("theme",o.theme),window.theme=o.theme)),t(n)}else{if(L.isWeixin()){L.setStorage("sessionid",r.sessionid);s=O()(window.location.href);window.location.href=r.oauthurl+"&redirct_url="+s}else{if(1==r.justweixin)return L.$toast("请在微信中访问","",1e10),!1;window.location.href&&-1==window.location.href.indexOf("pages/auth")&&L.setStorage("forwardUrl",window.location.href),x.a.push(L.getUrl({path:"/pages/auth/login"}))}i(r)}}).catch(function(e){i(e)})})}L.$toast("公众号id参数错误",0)}),i()(T,"jsSetValue",function(e){var t=e.key||e.data.key,n=e.vue;return!(!t||!n)&&(e.hasOwnProperty("value")||(e.value=e.data.value),1==(t=t.split(".")).length?n[t[0]]=e.value:2==t.length?n[t[0]][t[1]]=e.value:3==t.length?n[t[0]][t[1]][t[2]]=e.value:4==t.length&&(n[t[0]][t[1]][t[2]][t[3]]=e.value),!e.success||"function"!=typeof e.success||(e.success(),!0))}),i()(T,"jsToggleSwitch",function(e){var t=function(){if(!e.url&&!e.href)return L.jsSetValue(e),!0;"1"!=window.submitting&&(window.submitting="1",C.d.loading({message:"加载中",forbidClick:!0}),L.request({url:e.url||e.href,data:e.data||{}}).then(function(t){window.submitting="0",C.d.clear();var n=t.data.message;return n.errno?(Object(C.d)(n.message),!1):e.success&&"function"==typeof e.success?(e.success(n.message),!1):(L.$toast({message:n.message||"操作成功"}),L.jsSetValue(e),!0)}))};e.confirm?C.a.confirm({title:"温馨提示",message:e.confirm}).then(function(){t()}):t()}),i()(T,"tomedia",function(e){return"string"!=typeof e?"":0==e.indexOf("http://")||0==e.indexOf("https://")?e:0==e.indexOf("images/")||0==e.indexOf("/images/")?window.system.attachurl+e:-1!=e.indexOf("addons/")?window.system.attachurl+e.substring(e.indexOf("addons/")):e}),i()(T,"formatDate",function(e,t){(10==e.length||e<1e10)&&(e*=1e3);t&&"datetime"!=t?"date"==t&&(t="yyyy-MM-dd"):t="yyyy-MM-dd HH:mm",e=new Date(e);var n=t;return n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/yyyy|YYYY/,e.getFullYear())).replace(/yy|YY/,e.getYear()%100>9?(e.getYear()%100).toString():"0"+e.getYear()%100)).replace(/MM/,e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1))).replace(/M/g,e.getMonth())).replace(/w|W/g,["日","一","二","三","四","五","六"][e.getDay()])).replace(/dd|DD/,e.getDate()>9?e.getDate().toString():"0"+e.getDate())).replace(/d|D/g,e.getDate())).replace(/hh|HH/,e.getHours()>9?e.getHours().toString():"0"+e.getHours())).replace(/h|H/g,e.getHours())).replace(/mm/,e.getMinutes()>9?e.getMinutes().toString():"0"+e.getMinutes())).replace(/m/g,e.getMinutes())).replace(/ss|SS/,e.getSeconds()>9?e.getSeconds().toString():"0"+e.getSeconds())).replace(/s|S/g,e.getSeconds())}),i()(T,"getUser",function(){var e=L.getStorage("ipuser");return e||(e={}),e}),i()(T,"checkperm",function(e){if(!e)return!0;var t=L.getStorage("ipuser");if(!t)return!0;if("founder"==t.role)return!0;if(!t.perms)return!1;if("all"==t.perms)return!0;for(var n=e.split(","),a=!1,i=0;i<n.length;i++)if(-1!=t.perms.indexOf(n[i])){a=!0;break}return a}),i()(T,"getOtherParams",function(e){var t=L.getStorage("__sid");return t||1==e.data.nosid?e.url=e.url+"&sid="+t:(L.removeStorage("__sid"),L.jsUrl("/pages/shop/select")),e}),i()(T,"extend",function(e,t){var n;for(n in t)e[n]&&"[object Object]"===e[n].toString()?e[n]=L.extend(e[n],t[n]):null!=t[n]&&"undefined"!=t[n]&&(e[n]=t[n]);return e}),i()(T,"length",function(e){if(void 0===e)return 0;var t=0;for(var n in e)t++;return t}),T);t.a=L},HI7D:function(e,t){},Hqqj:function(e,t){},IljC:function(e,t,n){(function(t){e.exports=function(e){if("undefined"==typeof window)return new t(e).toString("base64");if(void 0!==window.btoa)return window.btoa(decodeURIComponent(encodeURIComponent(e)));var n,a,i,o,r,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,l=0,u="",p=[];if(!e)return e;e=decodeURIComponent(encodeURIComponent(e));do{n=(r=e.charCodeAt(c++)<<16|e.charCodeAt(c++)<<8|e.charCodeAt(c++))>>18&63,a=r>>12&63,i=r>>6&63,o=63&r,p[l++]=s.charAt(n)+s.charAt(a)+s.charAt(i)+s.charAt(o)}while(c<e.length);u=p.join("");var d=e.length%3;return(d?u.slice(0,d-3):u)+"===".slice(d||3)}}).call(t,n("EuP9").Buffer)},MJyj:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:this.$route.meta.title,expression:"$route.meta.title"}]}):this._e()],1)],1),this._v(" "),t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[this.$route.meta.keepAlive?this._e():t("router-view",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:this.$route.meta.title,expression:"$route.meta.title"}]})],1)],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App",components:{}},i,!1,function(e){n("hc02")},null,null).exports,r=n("v5o6"),s=n.n(r),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"loading"}},[t("div",{staticClass:"circle-wrap"},[t("img",{attrs:{src:"static/img/loading_circle.png",alt:""}})]),this._v(" "),t("div",{staticClass:"logo-wrap"},[t("img",{attrs:{src:"static/img/loading_logo.png",alt:""}})])])}]};var l=n("VU/8")({data:function(){return{}},mounted:function(){}},c,!1,function(e){n("+J82")},"data-v-f1e09298",null).exports,u={props:{failedTips:{type:Object,default:function(){return{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"}}}},data:function(){return{}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"failed-tips"}},[n("div",{staticClass:"wrapper"},[n("img",{attrs:{src:"static/img/tips/"+e.failedTips.type+".png",alt:""}}),e._v(" "),n("p",{staticClass:"tips"},[e._v(e._s(e.failedTips.tips))]),e._v(" "),n("a",{staticClass:"link",on:{click:function(t){e.util.jsUrl(e.failedTips.link)}}},[e._v(e._s(e.failedTips.btnText))])])])},staticRenderFns:[]};var d=n("VU/8")(u,p,!1,function(e){n("HI7D")},null,null).exports,f=n("woOf"),h=n.n(f),m=a.a.extend(n("xZQk").default),g=function(e){var t=new m({data:h()({},e)});return t.vm=t.$mount(),t.vm.visible=!0,t.dom=t.vm.$el,document.body.appendChild(t.dom),t.vm},v={install:function(e){e.prototype.$imessage=g}},y=n("NYxO"),w=n("EuEE"),b={setState:function(e,t){var n=t.type,a=t.key,i=t.val;e[n]||(e[n]={}),e[n][a]=i},replaceState:function(e,t){var n=t.key,a=t.val;e[n]=a},setLocation:function(e,t){e.locationInfo=t,w.a.setStorage("locationInfo",e.locationInfo,900)},getLocation:function(e){if(!e.locationInfo.location_x){var t=w.a.getStorage("locationInfo");t&&t.location_x&&(e.locationInfo=t)}},setSearch:function(e,t){e.isearch=t,w.a.setStorage("isearch",e.isearch)},getSearch:function(e){if(!e.isearch||!e.isearch.url){var t=w.a.getStorage("isearch");e.isearch=t}},setBargainGoods:function(e,t){e.bargainGoods=t},setBargainInfo:function(e,t){e.bargainInfo=t}},x=n("Hqqj"),P=n.n(x);a.a.use(y.a);var _=new y.a.Store({state:{filter:{takeout:{}},bargainGoods:{},bargainInfo:{}},getters:{},actions:P.a,mutations:b}),S=n("YaEn"),k=n("Fd2+"),C=(n("CMvz"),n("MJyj"),n("Yn4R")),j=n("wvfG"),O=n.n(j);s.a.attach(document.body),a.a.use(n("YqKu")),a.a.use(k.e),a.a.use(v),a.a.use(k.c,{lazyComponent:!0,loading:""}),a.a.use(O.a),a.a.component("iloading",l),a.a.component("failedTips",d),a.a.config.productionTip=!1,a.a.prototype.util=w.a,a.a.prototype.wx=C.a,a.a.prototype.isWeixin=w.a.isWeixin(),a.a.prototype.theme=w.a.getStorage("theme"),a.a.prototype.util.initBaseParams(),a.a.prototype.wx.init(),new a.a({el:"#app",router:S.a,store:_,components:{App:o},template:"<App/>"})},XbGN:function(e,t,n){"use strict";var a=n("EuEE"),i={init:function(){var e=a.a.getStorage("jpush_relation");e&&a.a.isCloud()&&setTimeout(function(){i.relation=e,i.checkconnect(),i.initAjpush(),i.checkSmartUpdate()},1e3)},checkSmartUpdate:function(){api.addEventListener({name:"smartupdatefinish"},function(e,t){api.rebootApp()})},checkconnect:function(){if(api.addEventListener({name:"offline"},function(e,t){return api.openFrame({name:"frm_connect",url:"widget://html/connect.html",bounces:!0,rect:{x:0,y:0,w:"auto",h:"auto"}}),!1}),"none"==api.connectType)return api.openFrame({name:"frm_connect",url:"widget://html/connect.html",bounces:!0,rect:{x:0,y:0,w:"auto",h:"auto"}}),!1;api.addEventListener({name:"online"},function(e,t){api.closeFrame({name:"frm_connect"});var n=i.igetPrefs("url_cn");n&&(window.location.href=n)})},netAudioPlay:function(e,t){var n=api.require("netAudio");return t>0&&n.play({path:e},function(n){n.complete&&(t--,i.netAudioPlay(e,t))}),!0},speechRecognizerRead:function(e,t){var n=api.require("iflyRecognition");return n.createUtility({android_appid:"5bd167ea",ios_appid:"5bd17b48"},function(e,t){e.status||api.alert({msg:"创建讯飞失败"})}),t>0&&n.read({readStr:e,speed:60,volume:100,voice:"xiaoyan",rate:16e3},function(n,a){n.status&&n.status&&100==n.speakProgress&&(t--,setTimeout(function(){i.speechRecognizerRead(e,t)},1e3))}),!0},play:function(e,t,n){var a=i.igetPrefs("phonic");if(a||(a={voice:1,vibrate:1,voice_type:1,new:{times:"loop"},refund:{times:"loop"},remind:{times:"loop"}}),a.vibrate&&api.notification({vibrate:[3e3,3e3]}),a.voice){var o=a[e].times;o="loop"==o?100:3,1==a.voice_type?i.speechRecognizerRead(n,o):i.netAudioPlay(t,o)}return!0},initAjpush:function(){var e=api.require("ajpush");e.setBadge({badge:0}),e.init(function(e){e&&e.status});var t=i.igetPrefs("push_code");if(i.relation&&i.relation.code&&(!t||t&&t!=i.relation.code)){var n={};i.relation.alias&&(n.alias=i.relation.alias),i.relation.tags&&(n.tags=i.relation.tags),e.bindAliasAndTags(n,function(e,t){var n=e.statusCode;0==n?i.isetPrefs("push_code",i.relation.code):alert("同步推送信息出错："+n)})}e.setListener(function(e){var t=e.extra;try{t=JSON.parse(e.extra)}catch(e){}"ios"==api.systemType&&api.require("ajpush").setBadge({badge:0});i.play(t.notify_type,t.resource,t.voice_text)}),api.addEventListener({name:"appintent"},function(e,t){if(e&&e.appParam.ajpush){var n=e.appParam.ajpush;try{var a=JSON.parse(n.extra)}catch(e){a=n.extra}location.href=a.url}}),api.addEventListener({name:"noticeclicked"},function(e,t){if(e&&e.value){api.require("ajpush").setBadge({badge:0});var n=e.value.extra;location.href=n.url}})},igetPrefs:function(e){var t=e.split("."),n="";if(1==t.length){n=api.getPrefs({sync:!0,key:e});try{n=JSON.parse(n)}catch(e){}}else if(2==t.length){(a=i.igetPrefs(t[0]))&&a[t[1]]&&(n=a[t[1]])}else if(3==t.length){var a;(a=i.igetPrefs(t[0]))&&a[t[1]]&&(n=a[t[1]][t[2]])}return n},isetPrefs:function(e,t){var n=e.split(".");if(1==n.length)api.setPrefs({key:e,value:t});else if(2==n.length){(a=i.igetPrefs(n[0]))||(a={}),a[n[1]]=t,api.setPrefs({key:n[0],value:a})}else if(3==n.length){var a;(a=i.igetPrefs(n[0]))||(a={}),a[n[1]]||(a[n[1]]={}),a[n[1]][n[2]]=t,api.setPrefs({key:n[0],value:a})}return!0}};t.a=i},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),i=n("/ocq");a.a.use(i.a),t.a=new i.a({scrollBehavior:function(e,t,n){return n||(t.meta.keepAlive&&(t.meta.savedPosition=document.body.scrollTop),{x:0,y:e.meta.savedPosition||0})},routes:[{path:"/",name:"index",redirect:"/pages/order/index"},{path:"/pages/order/index",meta:{title:"订单列表"},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("0wiy")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/detail",meta:{title:"订单详情"},component:function(e){return Promise.all([n.e(0),n.e(19)]).then(function(){var t=[n("IeHp")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/op",meta:{title:"请选择"},component:function(e){return Promise.all([n.e(0),n.e(54)]).then(function(){var t=[n("OB9n")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/tangshi/index",meta:{title:"店内订单"},component:function(e){return Promise.all([n.e(0),n.e(21)]).then(function(){var t=[n("P3e+")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/table",meta:{title:"店内桌台"},component:function(e){return Promise.all([n.e(0),n.e(33)]).then(function(){var t=[n("OEbG")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/assign",meta:{title:"排队"},component:function(e){return Promise.all([n.e(0),n.e(38)]).then(function(){var t=[n("yx00")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/assignQueue",meta:{title:"添加队列"},component:function(e){return Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("Szh7")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/order/assignRecord",meta:{title:"排队领取记录"},component:function(e){return Promise.all([n.e(0),n.e(53)]).then(function(){var t=[n("QgUh")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/index",meta:{title:"基础设置"},component:function(e){return Promise.all([n.e(0),n.e(49)]).then(function(){var t=[n("aiZS")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/home",meta:{title:"商户首页"},component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("ZE07")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/basic",meta:{title:"门店信息"},component:function(e){return Promise.all([n.e(0),n.e(52)]).then(function(){var t=[n("GfYn")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/account",meta:{title:"账户设置"},component:function(e){return Promise.all([n.e(0),n.e(37)]).then(function(){var t=[n("w3Pa")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/pill",meta:{title:"支付设置"},component:function(e){return Promise.all([n.e(0),n.e(42)]).then(function(){var t=[n("MMmA")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/qualification",meta:{title:"营业资质"},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("HZwF")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/update",meta:{title:"门店信息设置"},component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("yQu4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/setting",meta:{title:"商家中心"},component:function(e){return Promise.all([n.e(0),n.e(48)]).then(function(){var t=[n("pzx7")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/select",meta:{title:"选择店铺"},component:function(e){return Promise.all([n.e(0),n.e(26)]).then(function(){var t=[n("wmR6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/shop/phonic",meta:{title:"语音提醒"},component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){var t=[n("ps9T")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/more/password",meta:{title:"修改密码"},component:function(e){return Promise.all([n.e(0),n.e(55)]).then(function(){var t=[n("Jpgc")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/service/comment",meta:{title:"用户评价"},component:function(e){return Promise.all([n.e(0),n.e(15)]).then(function(){var t=[n("wbpO")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/index",meta:{title:"店铺活动"},component:function(e){return Promise.all([n.e(0),n.e(24)]).then(function(){var t=[n("Ek/6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/list",meta:{title:"店铺活动"},component:function(e){return Promise.all([n.e(0),n.e(16)]).then(function(){var t=[n("Pvz1")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/deliveryFee",meta:{title:"店铺活动创建"},component:function(e){return Promise.all([n.e(0),n.e(20)]).then(function(){var t=[n("TZBu")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/bargain",meta:{title:"活动详情"},component:function(e){return Promise.all([n.e(0),n.e(57)]).then(function(){var t=[n("4hny")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/bargainGoods",meta:{title:"创建商品活动"},component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("CGRQ")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/bargainGoodsSearch",meta:{title:"创建商品活动"},component:function(e){return Promise.all([n.e(0),n.e(31)]).then(function(){var t=[n("e2kp")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/bargainList",meta:{title:"天天特价活动列表"},component:function(e){return Promise.all([n.e(0),n.e(43)]).then(function(){var t=[n("tnE6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/finance/getcash",meta:{title:"余额提现"},component:function(e){return Promise.all([n.e(0),n.e(28)]).then(function(){var t=[n("c/2g")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/finance/index",meta:{title:"财务管理"},component:function(e){return Promise.all([n.e(0),n.e(47)]).then(function(){var t=[n("YoQz")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/finance/current",meta:{title:"账户明细"},component:function(e){return Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("imhH")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/finance/currentDetail",meta:{title:"账户明细详情"},component:function(e){return Promise.all([n.e(0),n.e(36)]).then(function(){var t=[n("m1Xp")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/finance/getcashRecord",meta:{title:"提现记录"},component:function(e){return Promise.all([n.e(0),n.e(45)]).then(function(){var t=[n("362D")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/finance/getcashRecordDetail",meta:{title:"提现记录详情"},component:function(e){return Promise.all([n.e(0),n.e(18)]).then(function(){var t=[n("31vp")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/news/notice",meta:{title:"公告列表"},component:function(e){return Promise.all([n.e(0),n.e(56)]).then(function(){var t=[n("Rlb+")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/news/detail",meta:{title:"公告详情"},component:function(e){return Promise.all([n.e(0),n.e(59)]).then(function(){var t=[n("MonK")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/paybill/index",meta:{title:"账单"},component:function(e){return Promise.all([n.e(0),n.e(30)]).then(function(){var t=[n("1nSS")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/paybill/detail",meta:{title:"账单详情"},component:function(e){return Promise.all([n.e(0),n.e(39)]).then(function(){var t=[n("R7qQ")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/paybill/detail1",meta:{title:"账单详情"},component:function(e){return Promise.all([n.e(0),n.e(22)]).then(function(){var t=[n("szFU")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/goods/index",meta:{title:"商品列表"},component:function(e){return Promise.all([n.e(0),n.e(50)]).then(function(){var t=[n("WcB/")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/goods/post",meta:{title:"商品编辑"},component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("icPS")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/category/index",meta:{title:"分类列表"},component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("AWzI")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/category/post",meta:{title:"分类编辑"},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("45m7")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/statcenter/index",meta:{title:"商户统计"},component:function(e){return Promise.all([n.e(0),n.e(46)]).then(function(){var t=[n("P53F")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/statcenter/order",meta:{title:"营业统计"},component:function(e){return Promise.all([n.e(0),n.e(23)]).then(function(){var t=[n("ctmF")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/statcenter/detail",meta:{title:"营业统计详情"},component:function(e){return Promise.all([n.e(0),n.e(14)]).then(function(){var t=[n("pXek")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/statcenter/goods",meta:{title:"热门商品"},component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("NcMu")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/activity/couponCollect",meta:{title:"下单返券"},component:function(e){return Promise.all([n.e(0),n.e(17)]).then(function(){var t=[n("VzVV")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/advertise/index",meta:{title:"店铺推广"},component:function(e){return Promise.all([n.e(0),n.e(40)]).then(function(){var t=[n("Qfjh")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/advertise/stick",meta:{title:"商家列表置顶"},component:function(e){return Promise.all([n.e(0),n.e(41)]).then(function(){var t=[n("87qr")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/advertise/recommend",meta:{title:"为您优选推广"},component:function(e){return Promise.all([n.e(0),n.e(44)]).then(function(){var t=[n("oGr5")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/advertise/list",meta:{title:"店铺推广记录"},component:function(e){return Promise.all([n.e(0),n.e(51)]).then(function(){var t=[n("8bWc")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/auth/login",meta:{title:"登录"},component:function(e){return Promise.all([n.e(0),n.e(34)]).then(function(){var t=[n("Ls0E")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/auth/forget",meta:{title:"忘记密码"},component:function(e){return Promise.all([n.e(0),n.e(29)]).then(function(){var t=[n("bXtx")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/printer/post",meta:{title:"新建打印机"},component:function(e){return Promise.all([n.e(0),n.e(27)]).then(function(){var t=[n("Gw1t")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/printer/list",meta:{title:"打印机列表"},component:function(e){return Promise.all([n.e(0),n.e(58)]).then(function(){var t=[n("ObZR")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/kanjia/goods/post",meta:{title:"添加砍价商品"},component:function(e){return Promise.all([n.e(0),n.e(25)]).then(function(){var t=[n("BOu9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/kanjia/goods/list",meta:{title:"砍价列表"},component:function(e){return Promise.all([n.e(0),n.e(32)]).then(function(){var t=[n("qA+X")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/pintuan/goods/post",meta:{title:"添加拼团商品"},component:function(e){return Promise.all([n.e(0),n.e(35)]).then(function(){var t=[n("n241")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/pages/pintuan/goods/list",meta:{title:"拼团列表"},component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("pI/Y")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]})},Yn4R:function(e,t,n){"use strict";var a=n("woOf"),i=n.n(a),o=n("mvHQ"),r=n.n(o),s=n("BO1k"),c=n.n(s),l=n("Zrlr"),u=n.n(l),p=n("wxAW"),d=n.n(p),f=n("EuEE"),h=n("fxnj"),m=n.n(h),g=[],v=!1,y=function(){function e(){u()(this,e)}return d()(e,null,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.apis||(t.apis=["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]);var n={};location.hash?n.url=location.href.slice(0,-location.hash.length):n.url=location.href,f.a.request({url:"system/common/jssdk",data:n}).then(function(n){var a=n.data.message;if(a.errno)return console.log("配置错误, 初始化微信JS接口失败:"),void console.log(a.message);m.a.ready(function(){if(t.shareData&&e.share(t.shareData),!0===t.hideOption&&m.a.hideOptionMenu(),v=!0,g.length>0){var n=!0,a=!1,i=void 0;try{for(var o,r=c()(g);!(n=(o=r.next()).done);n=!0){(0,o.value)()}}catch(e){a=!0,i=e}finally{try{!n&&r.return&&r.return()}finally{if(a)throw i}}}}),a=a.message.jssdkconfig,m.a.config({debug:a.debug||!1,appId:a.appId,timestamp:parseInt(a.timestamp),nonceStr:a.nonceStr,signature:a.signature,jsApiList:t.apis.slice(0)}),m.a.error(function(e){a.debug&&alert(r()(e)),console.log("微信JSSDK初始化失败"),console.log(e)}),"function"==typeof callback&&callback()})}},{key:"share",value:function(t){t||(t=window.shareData);var n=function(e){var n={title:t.title,link:t.link,imgUrl:t.imgUrl,success:function(){"function"==typeof t.success&&t.success()},cancel:function(){"function"==typeof t.cancel&&t.cancel()}};return i()(n,e)};e.ready(function(){m.a.onMenuShareTimeline(n({})),m.a.onMenuShareAppMessage(n({desc:t.desc,type:"link",dataUrl:""}))})}},{key:"ready",value:function(e){v?m.a.ready(e):g.push(e)}}]),e}();t.a=y},hc02:function(e,t){},lQnO:function(e,t){},xZQk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{type:"info",message:"提示信息",description:"描述信息",redirect:"/pages/order/takeout",btnText:"确定",show:!0}},methods:{onJsUrl:function(e){var t=this;this.util.jsUrl(e),setTimeout(function(){t.$destroy(!0),t.$el.parentNode.removeChild(t.$el)},100)}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"imessage"}},[n("div",{staticClass:"content",class:e.type},[e._m(0),e._v(" "),n("div",{staticClass:"text-area"},[n("p",{staticClass:"msg-title"},[e._v(e._s(e.message))]),e._v(" "),e.description?n("p",{staticClass:"desc"},[e._v(e._s(e.description))]):e._e()]),e._v(" "),n("div",{staticClass:"btn-area"},[n("div",{staticClass:"button",on:{click:function(t){e.onJsUrl(e.redirect)}}},[e._v(e._s(e.btnText))])]),e._v(" "),n("div",{staticClass:"extra-area"},[n("div",{on:{click:function(t){e.onJsUrl("/pages/order/takeout")}}},[e._v("返回首页")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon-area"},[t("i",{staticClass:"icon icon-icon"})])}]};var o=n("VU/8")(a,i,!1,function(e){n("lQnO")},"data-v-46eaa22e",null);t.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.4d4db2849cd258f310b4.js.map