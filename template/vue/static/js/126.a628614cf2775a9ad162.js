webpackJsonp([126],{VX2j:function(t,a){},wIgR:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=r("Cz8s"),i=r("deIj"),e=r("MJLE"),o=r.n(e),d={components:{PublicHeader:s.a},data:function(){return{id:0,order:{goods:{},store:{}},showPreLoading:!0}},methods:{onLoad:function(){var t=this;Object(i.a)({vue:t,url:"gohome/order/detail",data:{id:t.id},autoAssign:!0,variable:"order",success:function(a){t.newQrcode(a.qrcode)}})},newQrcode:function(t){new o.a("qrcode",{width:150,height:150,text:t,image:""})}},mounted:function(){this.$route.query&&this.$route.query.id&&(this.id=this.$route.query.id),this.onLoad()}},n={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"kanjia-order-detail"}},[r("public-header",{attrs:{title:"订单详情"}}),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"content-scroll"},[r("div",{staticClass:"margin-15 font-14 flex-lr"},[r("div",{staticClass:"c-gray"},[t._v("到店核销")]),t._v(" "),r("div",{staticClass:"c-danger"},[t._v(t._s(t.order.status_cn))])]),t._v(" "),r("div",{staticClass:"goods-info margin-15 padding-15 bg-default radius-3"},[r("div",{staticClass:"flex"},[r("i",{staticClass:"icon icon-store font-18"}),t._v(" "),r("span",{staticClass:"font-14 margin-10-l font-500"},[t._v(t._s(t.order.store.title))])]),t._v(" "),r("router-link",{staticClass:"padding-15-t flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/"+t.order.order_type+"/detail",query:{id:t.order.goods.id}})}},[r("div",{staticClass:"thumb"},[r("img",{staticClass:"img-100",attrs:{src:t.order.goods.thumb,alt:""}})]),t._v(" "),r("div",{staticClass:"info"},[r("p",[t._v(t._s(t.order.goods.name))]),t._v(" "),r("div",{staticClass:"flex-lr w-100"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"c-danger font-16 font-500"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.final_fee))]),t._v(" "),r("div",{staticClass:"c-gray font-12 line-through margin-10-l"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.goods.oldprice))])]),t._v(" "),r("span",{staticClass:"c-gray"},[t._v("x"+t._s(t.order.num))])])])])],1),t._v(" "),r("div",{staticClass:"margin-15 padding-15 bg-default radius-3 "},[r("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[t._v("费用信息")]),t._v(" "),r("div",{staticClass:"padding-15-b van-hairline--bottom font-13"},[r("div",{staticClass:"margin-15-t flex-lr"},[r("div",{staticClass:"c-gray"},[t._v("商品费用")]),t._v(" "),r("div",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.final_fee))])]),t._v(" "),t._e()],2),t._v(" "),r("div",{staticClass:"padding-15-t flex-lr font-14"},[r("div",{staticClass:"c-gray"},[t._v("实付款")]),t._v(" "),r("div",{staticClass:"c-danger"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.final_fee))])])]),t._v(" "),r("div",{staticClass:"margin-15 padding-15 bg-default radius-3 font-13"},[r("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[t._v("核销使用")]),t._v(" "),t._e(),t._v(" "),r("div",{staticClass:"margin-10-t flex-lr"},[r("div",{staticClass:"c-gray"},[t._v("核销数量")]),t._v(" "),r("div",[t._v(t._s(t.order.num))])]),t._v(" "),t._m(0),t._v(" "),"pintuan"!=t.order.order_type||"pintuan"==t.order.order_type&&t.order.status>=3?[r("div",{staticClass:"margin-10-t"},[r("div",{staticClass:"qrcode",attrs:{id:"qrcode"}}),t._v(" "),r("p",{staticClass:"text-center font-12 margin-10-t"},[t._v("核销码: "+t._s(t.order.code))])]),t._v(" "),r("p",{staticClass:"margin-10-t c-gray text-center"},[t._v("请商家扫描二维码或者填写核销码即可消费")])]:t._e()],2),t._v(" "),r("div",{staticClass:"margin-15 padding-15 bg-default radius-3 font-13"},[r("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[t._v("订单信息")]),t._v(" "),r("van-row",{staticClass:"c-gray margin-10-t"},[r("van-col",{attrs:{span:"6"}},[t._v("订单编号")]),t._v(" "),r("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.ordersn))])],1),t._v(" "),1==t.order.is_pay?r("van-row",{staticClass:"c-gray margin-10-t"},[r("van-col",{attrs:{span:"6"}},[t._v("支付方式")]),t._v(" "),r("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.pay_type_cn))])],1):t._e(),t._v(" "),r("van-row",{staticClass:"c-gray margin-10-t"},[r("van-col",{attrs:{span:"6"}},[t._v("下单时间")]),t._v(" "),r("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.addtime_cn))])],1),t._v(" "),1==t.order.is_pay?r("van-row",{staticClass:"c-gray margin-10-t"},[r("van-col",{attrs:{span:"6"}},[t._v("支付时间")]),t._v(" "),r("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.paytime_cn))])],1):t._e(),t._v(" "),r("van-row",{staticClass:"c-gray margin-10-t"},[r("van-col",{attrs:{span:"6"}},[t._v("买家备注")]),t._v(" "),r("van-col",{staticClass:"line-12",attrs:{span:"18"}},[t._v(t._s(t.order.buyremark?t.order.buyremark:"无"))])],1)],1)]),t._v(" "),r("ul",{staticClass:"fix-bottom van-hairline--top"},[t.order.order_type_all?r("router-link",{attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/"+t.order.order_type+"/index"})}},[t._v("查看更多"+t._s(t.order.order_type_all.text)+"活动")]):t._e(),t._v(" "),"pintuan"==t.order.order_type&&t.order.team_id>0?r("router-link",{attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/pintuan/share",query:{id:t.order.goods_id,team_id:t.order.team_id}})}},[t._v("拼团详情")]):t._e(),t._v(" "),0==t.order.is_pay?[1==t.order.status?r("li",{on:{click:function(a){return t.util.jspost({url:"gohome/order/cancel",data:{id:t.order.id}})}}},[t._v("取消订单")]):t._e(),t._v(" "),1==t.order.status?r("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:t.order.id,order_type:"gohome"}})}},[t._v("立即支付")]):t._e()]:1==t.order.is_pay?[5==t.order.status?r("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/comment/comment",query:{order_id:t.order.id}})}},[t._v("立即评价")]):t._e()]:t._e()],2)]),t._v(" "),t.showPreLoading?r("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"margin-10-t flex-lr hide"},[a("div",{staticClass:"c-gray"},[this._v("核销密码")]),this._v(" "),a("input",{staticClass:"text-right",attrs:{type:"text",placeholder:"请输入核销密码"}})])}]};var l=r("VU/8")(d,n,!1,function(t){r("VX2j")},null,null);a.default=l.exports}});
//# sourceMappingURL=126.a628614cf2775a9ad162.js.map