webpackJsonp([74],{"7xdU":function(t,i){},aiZS:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("woOf"),o=a.n(s),n=a("Cz8s"),e=a("deIj"),l={data:function(){return{showPreLoading:!0,id:0,waimaiOrHaodian:"waimai",store:{is_haodian:0,is_waimai:0}}},components:{publicHeader:n.a},methods:{onLoad:function(){var t=this;Object(e.a)({vue:this,url:"manage/shop/index/index",success:function(i){t.store=o()(t.store,i.store),console.log(t.store),t.manager=i.manager,t.stat=i.stat,t.notice=i.notice}})},onToggleTab:function(t){t!=this.waimaiOrHaodian&&(this.waimaiOrHaodian=t)}},created:function(){},mounted:function(){this.onLoad()}},c={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"store-manage"}},[a("public-header",{attrs:{title:"店铺管理"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search bg-default"},[a("div",{staticClass:"tab-group"},[a("div",{class:{"tab-item":1,active:"waimai"==t.waimaiOrHaodian},on:{click:function(i){t.onToggleTab("waimai")}}},[t._v("外卖")]),t._v(" "),a("div",{class:{"tab-item":1,active:"haodian"==t.waimaiOrHaodian},on:{click:function(i){t.onToggleTab("haodian")}}},[t._v("好店")])])]),t._v(" "),"waimai"==t.waimaiOrHaodian?[1==t.store.is_waimai?[a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/basic",query:{from:"waimai"}})}},[a("i",{staticClass:"icon icon-form c-primary",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("基本信息")])]),t._v(" "),a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/qualification",query:{id:t.id}})}},[a("i",{staticClass:"icon icon-shop c-info",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("营业资质")])]),t._v(" "),a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/update",query:{type:"notice",id:t.id}})}},[a("i",{staticClass:"icon icon-newshot c-primary",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("商户公告")])]),t._v(" "),a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/update",query:{type:"tips",id:t.id}})}},[a("i",{staticClass:"icon icon-information c-info",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("商品列表页提示")])])],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/account",query:{id:t.id}})}},[a("i",{staticClass:"icon icon-waimai font-20 c-primary",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("账户设置")])]),t._v(" "),a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/pill",query:{id:t.id}})}},[a("i",{staticClass:"icon icon-pay c-info",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("支付设置")])])],1)]:[t._m(0)]]:"haodian"==t.waimaiOrHaodian?[1==t.store.is_haodian?[a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/basic",query:{from:"haodian"}})}},[a("i",{staticClass:"icon icon-store c-primary",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[t._v("门店信息")])])],1)]:[t._m(1)]]:t._e()],2),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/tips/message.png",alt:""}}),this._v(" "),i("p",[this._v("暂无外卖权限，如需开通请联系平台管理员")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/tips/message.png",alt:""}}),this._v(" "),i("p",[this._v("暂无好店权限，如需开通请联系平台管理员")])])}]};var r=a("VU/8")(l,c,!1,function(t){a("7xdU")},null,null);i.default=r.exports}});
//# sourceMappingURL=74.1e5a72fe547f37530d83.js.map