webpackJsonp([43],{Qfjh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),a=s("deIj"),l={components:{publicHeader:i.a},data:function(){return{showPreLoading:!0,advertise:{}}},methods:{onLoad:function(){var t=this;Object(a.a)({vue:t,url:"manage/advertise/index",success:function(e){t.advertise=e.advertise}})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"advertise-index"}},[s("public-header",{attrs:{title:"店铺活动"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"wrap-search"},[s("div",{staticClass:"tab-group"},[s("div",{staticClass:"tab-item active"},[t._v("新建推广")]),t._v(" "),s("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/list"})}},[t._v("已推广的活动")])],1)]),t._v(" "),t.advertise&&t.advertise.type?s("van-list",{staticClass:"list"},[s("div",{staticClass:"list-item"},[s("div",{staticClass:"flex-lr margin-15-b"},[s("div",{staticClass:"title"},[t._v("为您优选")]),t._v(" "),t.advertise.type.recommend&&1==t.advertise.type.recommend.status?s("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/recommend"})}},[t._v("立即推广")]):s("div",{staticClass:"create"},[t._v("广告未开售,敬请关注")])],1),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("div",[t._v("购买商户为您优选推广,吸引更多用户下单")])])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"flex-lr margin-15-b"},[s("div",{staticClass:"title"},[t._v("商户置顶")]),t._v(" "),t.advertise.type.stick&&1==t.advertise.type.stick.status?s("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/stick",query:{type:"stick"}})}},[t._v("立即推广")]):s("div",{staticClass:"create"},[t._v("广告未开售,敬请关注")])],1),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("div",[t._v("购买商户置顶推广,吸引更多用户下单")])])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"flex-lr margin-15-b"},[s("div",{staticClass:"title"},[t._v("首页顶部")]),t._v(" "),t.advertise.type.slideHomeTop&&1==t.advertise.type.slideHomeTop.status?s("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/stick",query:{type:"slideHomeTop"}})}},[t._v("立即推广")]):s("div",{staticClass:"create"},[t._v("广告未开售,敬请关注")])],1),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("div",[t._v("购买首页顶部幻灯片推广,吸引更多用户下单")])])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"flex-lr margin-15-b"},[s("div",{staticClass:"title"},[t._v("会员中心")]),t._v(" "),t.advertise.type.slideMember&&1==t.advertise.type.slideMember.status?s("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/stick",query:{type:"slideMember"}})}},[t._v("立即推广")]):s("div",{staticClass:"create"},[t._v("广告未开售,敬请关注")])],1),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("div",[t._v("购买会员中心幻灯片推广,吸引更多用户下单")])])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"flex-lr margin-15-b"},[s("div",{staticClass:"title"},[t._v("顾客支付页")]),t._v(" "),t.advertise.type.slidePaycenter&&1==t.advertise.type.slidePaycenter.status?s("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/stick",query:{type:"slidePaycenter"}})}},[t._v("立即推广")]):s("div",{staticClass:"create"},[t._v("广告未开售,敬请关注")])],1),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("div",[t._v("购支付页幻灯片推广,吸引更多用户下单")])])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"flex-lr margin-15-b"},[s("div",{staticClass:"title"},[t._v("订单详情页")]),t._v(" "),t.advertise.type.slideOrderDetail&&1==t.advertise.type.slideOrderDetail.status?s("router-link",{staticClass:"create",attrs:{tag:"div",to:t.util.getUrl({path:"pages/advertise/stick",query:{type:"slideOrderDetail"}})}},[t._v("立即推广")]):s("div",{staticClass:"create"},[t._v("广告未开售,敬请关注")])],1),t._v(" "),s("div",{staticClass:"flex-lr font-12"},[s("div",[t._v("购买订单详情页幻灯片推广,吸引更多用户下单")])])])]):t._e()],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var v=s("VU/8")(l,r,!1,function(t){s("cYzF")},null,null);e.default=v.exports},cYzF:function(t,e){}});
//# sourceMappingURL=43.0291da031ddc87904733.js.map