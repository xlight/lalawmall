webpackJsonp([112],{ZQ5h:function(t,s){},c0dS:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={components:{PublicHeader:i("Cz8s").a},data:function(){return{tabActive:"coupon"}},methods:{onLoad:function(){},onToggleTab:function(t){this.tabActive!=t&&(this.tabActive=t)}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"yikatong-index"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"vip-card bg-default"},[i("div",{staticClass:"card-bg"}),t._v(" "),i("div",{staticClass:"card-wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"card-content"},[i("div",{staticClass:"card-tip"},[t._v("\n\t\t\t\t\t\t开通有鱼生活圈一卡通预计将为您节省\n\t\t\t\t\t\t"),i("span",{staticClass:"margin-5-l font-16 font-500"},[t._v(t._s(t.Lang.dollarSign)+"123.45")])]),t._v(" "),i("div",{staticClass:"btn-buy"},[t._v("立即开通")])])])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"margin-10-t "},[i("div",{staticClass:"tab-group van-hairline--bottom"},[i("div",{staticClass:"tab-item",class:{active:"privilege"==t.tabActive},on:{click:function(s){return t.onToggleTab("privilege")}}},[t._v("会员特权")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:"seckill"==t.tabActive},on:{click:function(s){return t.onToggleTab("seckill")}}},[t._v("专享抢购")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:"gift"==t.tabActive},on:{click:function(s){return t.onToggleTab("gift")}}},[t._v("会员礼包")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:"coupon"==t.tabActive},on:{click:function(s){return t.onToggleTab("coupon")}}},[t._v("专属卡券")])]),t._v(" "),"privilege"==t.tabActive?i("div",{staticClass:"privilege bg-default"},[i("ul",{staticClass:"date"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(7,function(s,a){return i("li",{key:a,staticClass:"date-item"},[i("div",[t._v("周"+t._s(s))]),t._v(" "),i("div",[t._v("12-"+t._s(s+16))])])})],2),t._v(" "),i("ul",{staticClass:"goods-list"},[t._m(5),t._v(" "),t._l(5,function(s,a){return i("li",{key:a,staticClass:"goods-item"},[t._m(6,!0),t._v(" "),i("div",{staticClass:"w-100 ellipsis font-14 padding-10-tb"},[t._v("葱肉馅饺子")]),t._v(" "),t._m(7,!0)])})],2)]):"seckill"==t.tabActive?i("div",{staticClass:"seckill"},[i("ul",{staticClass:"category bg-default"},[i("li",{staticClass:"cate-item active"},[t._v("全部")]),t._v(" "),t._l(8,function(s,a){return i("li",{key:a,staticClass:"cate-item "},[t._v("抢购分类"+t._s(s))])})],2),t._v(" "),i("div",{staticClass:"goods-list margin-10-t bg-default"},t._l(6,function(s,a){return i("div",{key:a,staticClass:"goods-item van-hairline--bottom"},[t._m(8,!0),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"store-title font-15 font-500 ellipsis"},[t._v("茶不思")]),t._v(" "),i("div",{staticClass:"goods-title font-13 w-100 ellipsis"},[t._v("葱肉馅饺子")]),t._v(" "),i("div",{staticClass:"c-gray font-13"},[t._v("结束时间: 2018-12-23 23:59")]),t._v(" "),i("div",[i("span",{staticClass:"c-danger font-15 font-500"},[t._v(t._s(t.Lang.dollarSign)+"10.00")]),t._v(" "),i("span",{staticClass:"c-gray margin-5-l line-through font-12"},[t._v(t._s(t.Lang.dollarSign)+"20.00")])]),t._v(" "),i("div",{staticClass:"distance"},[t._v("3.4km")]),t._v(" "),i("div",{staticClass:"btn-buy"},[t._v("立即抢购")])])])}),0)]):"gift"==t.tabActive?i("div",{staticClass:"gift"},[i("ul",{staticClass:"category bg-default"},[i("li",{staticClass:"cate-item active"},[t._v("全部")]),t._v(" "),t._l(8,function(s,a){return i("li",{key:a,staticClass:"cate-item "},[t._v("分类"+t._s(s))])})],2),t._v(" "),i("div",{staticClass:"store-list bg-default margin-10-t"},t._l(6,function(s,a){return i("div",{key:a,staticClass:"store-item van-hairline--bottom"},[t._m(9,!0),t._v(" "),t._m(10,!0),t._v(" "),i("div",{staticClass:"c-danger"},[t._v("价值120"+t._s(t.Lang.dollarSignCn))]),t._v(" "),i("div",{staticClass:"distance"},[t._v("3.4km")]),t._v(" "),i("div",{staticClass:"btn-buy"},[t._v("立即抢购")])])}),0)]):"coupon"==t.tabActive?i("div",{staticClass:"coupon"},[i("ul",{staticClass:"category bg-default"},[i("li",{staticClass:"cate-item active"},[t._v("全部")]),t._v(" "),t._l(8,function(s,a){return i("li",{key:a,staticClass:"cate-item "},[t._v("分类"+t._s(s))])})],2),t._v(" "),i("div",{staticClass:"coupon-list"},t._l(8,function(s,a){return i("div",{staticClass:"coupon-item flex-lr"},[i("div",{staticClass:"left"},[t._m(11,!0),t._v(" "),i("div",{staticClass:"c-white margin-10-t font-12"},[t._v("满100"+t._s(t.Lang.dollarSignCn)+"可用")]),t._v(" "),i("div",{staticClass:"c-white margin-10-t font-12"},[t._v("限 2018-12-31 前使用")])]),t._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"font-18 font-bold c-white"},[t._v(t._s(t.Lang.dollarSign)+"5")]),t._v(" "),i("div",{staticClass:"btn-take"},[t._v("立即领取")])])])}),0)]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img-100",attrs:{src:"static/img/vip_bg.png",alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"vip-boon bg-default"},[i("div",{staticClass:"boon-header"},[i("div",{staticClass:"boom-title"},[t._v("尊享权益")]),t._v(" "),i("div",{staticClass:"bg-line"})]),t._v(" "),i("ul",{staticClass:"flex-lr"},[i("li",{staticClass:"boon-item"},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"img-100",attrs:{src:"static/img/vip_privilege.png",alt:""}})]),t._v(" "),i("span",{staticClass:"font-13 margin-10-t"},[t._v("专属特权")])]),t._v(" "),i("li",{staticClass:"boon-item"},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"img-100",attrs:{src:"static/img/vip_gift.png",alt:""}})]),t._v(" "),i("span",{staticClass:"font-13 margin-10-t"},[t._v("会员礼包")])]),t._v(" "),i("li",{staticClass:"boon-item"},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"img-100",attrs:{src:"static/img/vip_discount.png",alt:""}})]),t._v(" "),i("span",{staticClass:"font-13 margin-10-t"},[t._v("专属折扣")])]),t._v(" "),i("li",{staticClass:"boon-item"},[i("div",{staticClass:"img-wrap"},[i("img",{staticClass:"img-100",attrs:{src:"static/img/vip_coupon.png",alt:""}})]),t._v(" "),i("span",{staticClass:"font-13 margin-10-t"},[t._v("专属卡券")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"date-item active"},[s("div",[this._v("今天")]),this._v(" "),s("div",[this._v("12-14")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"date-item"},[s("div",[this._v("明天")]),this._v(" "),s("div",[this._v("12-15")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"date-item"},[s("div",[this._v("后天")]),this._v(" "),s("div",[this._v("12-16")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"goods-item"},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img-100",attrs:{src:"https://fuss10.elemecdn.com/e/46/02b0c5d2fdfca3e11a13ad3fa4094jpeg.jpeg",alt:""}})]),this._v(" "),s("div",{staticClass:"w-100 ellipsis font-14 padding-10-tb"},[this._v("葱肉馅饺子葱肉馅饺子葱肉馅饺子葱肉馅饺子")]),this._v(" "),s("ul",{staticClass:"flex-lr"},[s("li",{staticClass:"goods-discount"},[this._v("会员专享1.1折")]),this._v(" "),s("li",{staticClass:"to-use"},[this._v("立即使用")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img-100",attrs:{src:"https://fuss10.elemecdn.com/e/46/02b0c5d2fdfca3e11a13ad3fa4094jpeg.jpeg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"flex-lr"},[s("li",{staticClass:"goods-discount"},[this._v("会员专享1.1折")]),this._v(" "),s("li",{staticClass:"to-use"},[this._v("立即使用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img-100",attrs:{src:"https://fuss10.elemecdn.com/e/46/02b0c5d2fdfca3e11a13ad3fa4094jpeg.jpeg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex w-100"},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img-100",attrs:{src:"http://1.xinzuowl.com/attachment/images/1/2016/08/D6uWzXWwXTGU59w97t73QG399953Tx.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"store-title ellipsis font-500"},[this._v("茶不思")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"margin-10-tb flex w-100"},[s("span",{staticClass:"coupon-title ellipsis"},[this._v("芒柚水果茶免费券")]),this._v(" "),s("span",{staticClass:"c-gray margin-5-l"},[this._v("x3")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"c-white font-500 w-100 flex"},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"img-100",attrs:{src:"http://1.xinzuowl.com/attachment/images/1/2016/08/D6uWzXWwXTGU59w97t73QG399953Tx.jpg",alt:""}})]),this._v(" "),s("div",{staticClass:"coupon-title ellipsis"},[this._v("茶不思港式烧腊馆茶不思港式烧腊馆茶不思港式烧腊馆茶不思港式烧腊馆")])])}]};var c=i("VU/8")(a,l,!1,function(t){i("ZQ5h")},null,null);s.default=c.exports}});
//# sourceMappingURL=112.495c13d191159a8de13d.js.map