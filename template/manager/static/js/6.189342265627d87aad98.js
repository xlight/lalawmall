webpackJsonp([6],{wmR6:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Gu7T"),n=s.n(e),o=s("Cz8s"),a=s("deIj"),r={components:{publicHeader:o.a},data:function(){return{stores:[],showPreLoading:!0}},methods:{onLoad:function(){var t=this,i=t.util.parseQuery().from;Object(a.a)({vue:t,url:"manage/home/index",data:{nosid:1},success:function(s){var e=s.stores;if(!i&&e&&1==e.length)return t.util.setStorage("__sid",e[0].id),void(t.util.isWeixin()?t.util.jsUrl("wx:scanCode"):t.util.jsUrl("/pages/order/index"));e&&e.length>1&&(t.stores=[].concat(n()(t.stores),n()(e)))}})},onSelectShop:function(t){this.util.setStorage("__sid",t),this.util.isWeixin()?this.util.jsUrl("wx:scanCode"):this.util.jsUrl("/pages/order/index")}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"shop-select"}},[s("public-header",{attrs:{title:"选择店铺"}}),t._v(" "),s("div",{staticClass:"content"},t._l(t.stores,function(i){return s("div",{key:i.id,staticClass:"shop-item flex-lr",on:{click:function(s){t.onSelectShop(i.id)}}},[s("div",{staticClass:"info flex"},[s("div",{staticClass:"logo-wrap"},[s("img",{staticClass:"wh-100",attrs:{src:i.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"title ellipsis"},[t._v(t._s(i.title))])]),t._v(" "),s("i",{staticClass:"icon icon-right font-16 c-gray"})])})),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(t){s("zaJ2")},null,null);i.default=c.exports},zaJ2:function(t,i){}});
//# sourceMappingURL=6.189342265627d87aad98.js.map