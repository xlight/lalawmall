webpackJsonp([4],{I89g:function(t,e){},OT1X:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("Dd8w"),i=r.n(s),a=r("NYxO"),n=r("Cz8s"),d=r("mzkE"),o=r("snFw"),l=r("nZVv"),c={components:{publicHeader:n.a,publicFooter:d.a,orderItem:o.a},data:function(){return{showPreLoading:!0,isRefresh:!1,orders:{page:1,psize:15,finished:!1,loading:!1,data:[]},menufooter:{}}},methods:i()({},Object(a.b)(["setSearch"]),{onLoad:function(t){Object(l.b)({vue:this,force:t,data:{filter:this.filter?this.filter.items:{},menufooter:1}})},onPullDownRefresh:function(){this.onLoad(!0)},onChangeOrderStatus:function(t){t.vue=this,t.from="search",Object(l.a)(t)},onSetSearch:function(){this.setSearch({title:"订单搜索",type:"filter",key:"takeout",url:"plateform/order/takeout/search",redirctUrl:"pages/order/searchResult"}),this.$router.push(this.util.getUrl({path:"/pages/common/search"}))}}),computed:i()({},Object(a.c)(["filter"])),mounted:function(){this.onLoad(!1)},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.status=this.query.status)}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"search-result"}},[r("public-header",{attrs:{title:"搜索结果"}},[r("div",{staticClass:"search-btn",attrs:{slot:"right"},on:{click:function(e){t.onSetSearch()}},slot:"right"},[r("span",{staticClass:"icon icon-search"})])]),t._v(" "),r("public-footer",{attrs:{menufooter:t.menufooter,showPreLoading:t.showPreLoading}}),t._v(" "),r("div",{staticClass:"content"},[r("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.orders.empty?r("div",{staticClass:"no-data"},[r("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),r("p",[t._v("暂无符合条件订单!")])]):r("van-list",{staticClass:"order-list",attrs:{finished:t.orders.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.orders.loading,callback:function(e){t.$set(t.orders,"loading",e)},expression:"orders.loading"}},[t._l(t.orders.data,function(e,s){return[r("order-item",{attrs:{order:e,order_index:s},on:{onChangeOrderStatus:t.onChangeOrderStatus}})]})],2)],1)],1)],1)},staticRenderFns:[]};var u=r("VU/8")(c,_,!1,function(t){r("I89g")},null,null);e.default=u.exports},V0zl:function(t,e){},snFw:function(t,e,r){"use strict";var s={props:{order:Object,order_index:Number},data:function(){return{isRefresh:!1}},components:{},methods:{onChangeOrderStatus:function(t,e,r){var s={order:t,type:e,index:r};this.$emit("onChangeOrderStatus",s)},onPushUUorShansong:function(t,e){this.$emit("onPushUUorShansong",{orderId:t,type:e})}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"order-item"}},[r("div",{staticClass:"order-item"},[r("div",{staticClass:"number-price flex-lr border-1px-b"},[r("div",{staticClass:"number"},[t._v("#"+t._s(t.order.serial_sn))]),t._v(" "),r("div",{staticClass:"price"},[t._v("¥"+t._s(t.order.final_fee))])]),t._v(" "),r("router-link",{staticClass:"order-detail",attrs:{tag:"div",to:t.util.getUrl({path:"pages/order/detail",query:{id:t.order.id}})}},[r("div",{staticClass:"detail-item buy-address flex-lr"},[r("div",{staticClass:"left c-info"},[t._v("取货")]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"store-title ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.store.title)+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"store-address ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.store.address)+"\n\t\t\t\t\t")])])]),t._v(" "),r("div",{staticClass:"detail-item accept-address flex-lr"},[r("div",{staticClass:"left c-primary"},[t._v("送货")]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"store-title"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.address)+"\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.username)+" "+t._s(t.order.mobile)+"\n\t\t\t\t\t")])])]),t._v(" "),t.order.deliveryer_id>0&&t.order.deliveryer?r("div",{staticClass:"detail-item flex-lr"},[r("div",{staticClass:"left c-danger"},[t._v("配送:")]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"store-title"},[t._v("\n\t\t\t\t\t\t"+t._s(t.order.deliveryer.title)+" "+t._s(t.order.deliveryer.mobile)+"\n\t\t\t\t\t")]),t._v(" "),7==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已接单 (接单时间："+t._s(t.order.delivery_assign_time_cn)+")\n\t\t\t\t\t")]):8==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已到店 (到店时间："+t._s(t.order.delivery_instore_time_cn)+")\n\t\t\t\t\t")]):4==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已取货 (取货时间："+t._s(t.order.delivery_takegoods_time_cn)+")\n\t\t\t\t\t")]):5==t.order.delivery_status?r("div",{staticClass:"store-address"},[t._v("\n\t\t\t\t\t\t已送达 (送达时间："+t._s(t.order.delivery_success_time_cn)+")\n\t\t\t\t\t")]):t._e()])]):t._e(),t._v(" "),r("div",{staticClass:"detail-item note flex-lr"},[r("div",{staticClass:"left"},[t._v("备注")]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(t.order.note?t.order.note:"无"))])]),t._v(" "),r("div",{staticClass:"detail-item flex-lr"},[r("div",{staticClass:"left"},[t._v("下单")]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(t.order.addtime_cn))])]),t._v(" "),r("div",{staticClass:"detail-item flex-lr"},[r("div",{staticClass:"left"},[t._v("配送")]),t._v(" "),r("div",{staticClass:"right"},[t._v(t._s(t.order.delivery_day)+" "+t._s(t.order.delivery_time))])])]),t._v(" "),t.order.status<5||1==t.order.refund_status||2==t.order.refund_status?r("ul",{staticClass:"btn-group border-1px-t"},[t.order.status<5?[1==t.order.status?[r("li",{staticClass:"btn-item",on:{click:function(e){t.onChangeOrderStatus(t.order,"notify_clerk_handle",t.order_index)}}},[t._v("通知商户")]),t._v(" "),r("li",{staticClass:"btn-item btn-primary",on:{click:function(e){t.onChangeOrderStatus(t.order,"handle",t.order_index)}}},[t._v("接单")])]:t._e(),t._v(" "),1==t.order.order_type?[2==t.order.status||3==t.order.status?[r("li",{staticClass:"btn-item",on:{click:function(e){t.onChangeOrderStatus(t.order,"notify_deliveryer_collect",t.order_index)}}},[t._v("通知抢单")]),t._v(" "),2==t.order.delivery_type?r("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"pages/order/dispatch",query:{id:t.order.id}})}},[t._v("调度")]):t._e(),t._v(" "),t.order.uupaotui_status&&2==t.order.delivery_type?r("li",{staticClass:"btn-item",on:{click:function(e){t.onPushUUorShansong(t.order.id)}}},[t._v("UU配送")]):t._e(),t._v(" "),t.order.shansong_status?r("li",{staticClass:"btn-item",on:{click:function(e){t.onPushUUorShansong(t.order.id,"shansong")}}},[t._v("闪送")]):t._e()]:t._e(),t._v(" "),4==t.order.status?[r("li",{staticClass:"btn-item",on:{click:function(e){t.onChangeOrderStatus(t.order,"re_notify_deliveryer_collect",t.order_index)}}},[t._v("重新待抢")]),t._v(" "),r("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"pages/order/dispatch",query:{id:t.order.id}})}},[t._v("重新调度")])]:t._e(),t._v(" "),t.order.status>1?[r("li",{staticClass:"btn-item",on:{click:function(e){t.onChangeOrderStatus(t.order,"end",t.order_index)}}},[t._v("完成")])]:t._e()]:2==t.order.order_type?[1==t.order.is_pay?r("li",{staticClass:"btn-item",on:{click:function(e){t.onChangeOrderStatus(t.order,"end",t.order_index)}}},[t._v("完成")]):t._e()]:[r("li",{staticClass:"btn-item",on:{click:function(e){t.onChangeOrderStatus(t.order,"end",t.order_index)}}},[t._v("完成")])],t._v(" "),1==t.order.is_pay&&"delivery"!=t.order.pay_type?[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"cancel_refund",t.order_index)}}},[t._v("取消")])]:[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"cancel",t.order_index)}}},[t._v("取消")])]]:t._e(),t._v(" "),1==t.order.refund_status?[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_handle",t.order_index)}}},[t._v("发起退款")]),t._v(" "),r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_status",t.order_index)}}},[t._v("已退款")])]:2==t.order.refund_status?[r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_query",t.order_index)}}},[t._v("查询退款")]),t._v(" "),r("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(t.order,"refund_status",t.order_index)}}},[t._v("已退款")])]:t._e()],2):t._e()],1)])},staticRenderFns:[]};var a=r("VU/8")(s,i,!1,function(t){r("V0zl")},null,null);e.a=a.exports}});