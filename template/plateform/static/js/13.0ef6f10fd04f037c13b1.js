webpackJsonp([13],{OjOR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Cz8s"),i=e("deIj"),r={components:{publicHeader:a.a},data:function(){return{id:0,code:"",order:{goods_info:{}},showPreLoading:!0,islegal:!1}},methods:{onLoad:function(){var t=this;Object(i.a)({vue:t,url:"plateform/creditshop/order/detail",data:{id:t.id},autoAssign:!0,variable:"order",success:function(s){t.islegal=!0}})},onCodeConfirm:function(){var t=this;t.islegal&&(t.islegal=!1,Object(i.c)({vue:t,url:"plateform/creditshop/order/confirm",data:{code:t.code},redirect:"refresh",message:"核销成功",confirm:"确定核销该订单吗?",fail:function(s){t.util.$toast(s),t.islegal=!0}}))}},mounted:function(){var t=this.util.parseQuery(this.$route.query);this.id=t.id,this.code=t.code,this.onLoad()}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"creditshop-detail"}},[e("public-header",{attrs:{title:"订单详情"}}),t._v(" "),e("div",{staticClass:"content font-14"},[e("div",{staticClass:"margin-10 bg-default padding-15"},[e("div",{staticClass:"padding-15-b van-hairline--bottom flex-lr"},[e("div",{staticClass:"flex"},[e("span",{staticClass:"margin-10-r"},[t._v("兑换物品信息")]),t._v(" "),"redpacket"==t.order.goods_type?e("van-tag",{attrs:{type:"danger"}},[t._v("红包")]):"credit2"==t.order.goods_type?e("van-tag",{attrs:{type:"primary"}},[t._v("余额")]):"goods"==t.order.goods_type?e("van-tag",{attrs:{type:"success"}},[t._v("商品")]):t._e()],1),t._v(" "),1==t.order.status?e("tempalte",[e("span",{staticClass:"c-danger"},[t._v("未处理")])]):2==t.order.status?[e("span",{staticClass:"c-primary"},[t._v("已处理")])]:t._e()],2),t._v(" "),e("div",{staticClass:"flex-lr goods-info margin-15-t"},[e("div",{staticClass:"thumb"},[e("img",{staticClass:"img-100",attrs:{src:t.order.goods_info.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"flex-lr w-100"},[e("span",[t._v(t._s(t.order.goods_info.title))]),t._v(" "),e("span",[t._v("x1")])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",[e("span",{staticClass:"c-danger font-bold"},[t._v(t._s(t.order.goods_info.use_credit1)+"积分")]),t._v(" "),t.order.goods_info.use_credit2>0?[t._v("\n\t\t\t\t\t\t\t\t+ "),e("span",{staticClass:"c-danger font-bold"},[t._v("¥"+t._s(t.order.goods_info.use_credit2))])]:t._e()],2),t._v(" "),e("span",{staticClass:"c-gray line-through font-12 margin-10-l"},[t._v(t._s(t.order.goods_info.old_price))])])])])]),t._v(" "),"goods"==t.order.goods_type?e("div",{staticClass:"padding-15 bg-default margin-10"},[e("ul",{staticClass:"flex-lr padding-15-b van-hairline--bottom"},[e("li",[t._v("收件人姓名")]),t._v(" "),e("li",[t._v(t._s(t.order.username))])]),t._v(" "),e("ul",{staticClass:"flex-lr padding-15-t"},[e("li",[t._v("联系方式")]),t._v(" "),e("li",[t._v(t._s(t.order.mobile))])])]):t._e(),t._v(" "),e("div",{staticClass:"padding-15 bg-default margin-10"},[e("ul",{staticClass:"flex-lr padding-15-b van-hairline--bottom"},[e("li",[t._v("订单号")]),t._v(" "),e("li",[t._v(t._s(t.order.order_sn))])]),t._v(" "),e("ul",{staticClass:"flex-lr padding-15-tb van-hairline--bottom"},[e("li",[t._v("\n\t\t\t\t\t消耗积分"),t.order.use_credit2>0?[t._v("+消耗余额")]:t._e()],2),t._v(" "),e("li",[t._v("\n\t\t\t\t\t"+t._s(t.order.use_credit1)+"积分\n\t\t\t\t\t"),t.order.use_credit2>0?[t._v("+ ¥"+t._s(t.order.use_credit2))]:t._e()],2)]),t._v(" "),e("ul",{staticClass:"flex-lr padding-15-t"},[e("li",[t._v("兑换时间")]),t._v(" "),e("li",[t._v(t._s(t.order.addtime))])])]),t._v(" "),1==t.order.status&&t.code?e("div",{staticClass:"margin-10"},[e("van-button",{staticClass:"font-15",class:{"bg-primary":t.islegal},attrs:{size:"normal",block:"",disabled:!t.islegal},on:{click:t.onCodeConfirm}},[t._v("确认核销 (核销码："+t._s(t.code)+")")])],1):t._e()]),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var d=e("VU/8")(r,o,!1,function(t){e("tR+i")},null,null);s.default=d.exports},"tR+i":function(t,s){}});