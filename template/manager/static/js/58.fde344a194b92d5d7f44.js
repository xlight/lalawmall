webpackJsonp([58],{E2b8:function(t,s){},IeHp:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=a("Cz8s"),e=a("deIj"),i=a("nZVv"),o={components:{publicHeader:r.a},data:function(){return{showPreLoading:!0,isRefresh:!1,popupStatus:!1,id:0,order:{},config:{}}},methods:{onTogglePopup:function(){this.popupStatus=!this.popupStatus},onLoad:function(){var t=this;Object(e.a)({vue:t,url:"manage/order/takeout/detail",data:{id:t.id},success:function(s){t.order=s.order,t.config=s.config,t.isRefresh=!1;var a=0;if(t.order.logs)for(var r in t.order.logs)a++;t.order.logs_length=a}})},onUpdateOrderStatus:function(t){Object(i.a)({vue:this,type:t,order:this.order,from:"detail"})},onUpdateTanshiOrderStatus:function(t){Object(i.b)({vue:this,type:t,order:this.order,from:"detail"})},onPushUU:function(t){if(!t)return!1;var s=this;Object(e.c)({vue:s,url:"manage/order/takeout/push_uupaotui",data:{id:t},success:function(t){Object(e.c)({vue:s,url:"manage/order/takeout/push_uupaotui",confirm:t.tips,data:{id:t.id,push:1}})}})},onCopy:function(t){this.util.$toast("复制成功")}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&this.query.id&&(this.id=this.query.id)}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"order-detail"}},[a("public-header",{attrs:{title:"订单详情"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"order-status bg-default margin-10 padding-15-t text-center"},[a("div",[a("span",{staticClass:"font-18 font-bold",on:{click:t.onTogglePopup}},[t._v("订单"+t._s(t.order.status_cn))]),a("i",{staticClass:"icon icon-right c-gray"})]),t._v(" "),t.order.log&&7!=t.order.delivery_status?a("div",{staticClass:"c-gray margin-15-tb font-14"},[t._v(t._s(t.order.log.note))]):t._e(),t._v(" "),t.order.status>=2&&t.order.status<5&&1==t.order.order_type?a("div",{staticClass:"font-15 margin-15-t margin-10-b"},[a("i",{staticClass:"icon icon-timefill fobt-16"}),t._v(" "),a("span",{staticClass:"c-gray"},[t._v("配送时间:")]),t._v(" "),a("span",{staticClass:"c-info"},[t._v(t._s(t.order.delivery_time))])]):t._e(),t._v(" "),t.order.status<5?a("div",{staticClass:"order-btn margin-10-b margin-15-t"},[1==t.order.status?[a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("handle")}}},[t._v("确认")])]:2==t.order.status||3==t.order.status?[1==t.order.order_type?[a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("notify_deliveryer_collect")}}},[t._v("通知配送")]),t._v(" "),t.order.store&&1==t.order.store.delivery_mode?[a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("direct_deliveryer")}}},[t._v("指定配送")]),t._v(" "),a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("delivery_ing")}}},[t._v("设为配送中")]),t._v(" "),1==t.order.store.data.dada.status?a("div",{staticClass:"btn bg-info",on:{click:function(s){t.util.jspost({url:"manage/order/takeout/push_dada",data:{id:t.id},confirm:"确定推送到达达配送吗?"})}}},[t._v("达达配送")]):t._e()]:t._e(),t._v(" "),1==t.order.store.data.uupaotui.status?a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onPushUU(t.order.id)}}},[t._v("UU配送")]):t._e()]:2==t.order.order_type?[a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("end")}}},[t._v("已自提")])]:t.order.order_type>=3?[a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateTanshiOrderStatus("end")}}},[t._v("完成")])]:t._e()]:4==t.order.status?[1!=t.item.order_type?a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("end")}}},[t._v("完成")]):t._e()]:1==t.order.delivery_type&&t.order.status>1&&t.order.status<5&&1==t.order.order_type?[a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("end")}}},[t._v("完成")])]:t._e(),t._v(" "),1==t.order.is_remind?a("div",{staticClass:"btn bg-info",on:{click:function(s){t.onUpdateOrderStatus("reply")}}},[t._v("回复")]):t._e(),t._v(" "),t.order.order_type>2?[1==t.order.is_pay&&"delivery"!=t.order.pay_type?a("div",{staticClass:"btn bg-danger",on:{click:function(s){t.onUpdateTanshiOrderStatus("cancel_refund")}}},[t._v("取消并退款")]):a("div",{staticClass:"btn bg-danger",on:{click:function(s){t.onUpdateTanshiOrderStatus("cancel")}}},[t._v("取消")])]:[1==t.order.status||t.order.status>1&&1==t.config.cancel_after_handle?a("div",{staticClass:"btn bg-danger",on:{click:function(s){t.onUpdateOrderStatus("cancel")}}},[t._v("取消")]):t._e()]],2):t._e(),t._v(" "),t.order.deliveryer_id>0?[t._m(0),t._v(" "),a("div",{staticClass:"padding-15-lr padding-10-tb flex-lr"},[a("div",{staticClass:"flex "},[a("div",{staticClass:"deliveryer-avatar"},[a("img",{staticClass:"wh-100",attrs:{src:t.order.deliveryer.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"font-14"},[a("div",{staticClass:"flex"},[a("span",{staticClass:"margin-5-r"},[t._v(t._s(t.order.deliveryer.title))]),t._v(" "),a("div",{staticClass:"allocation-icon"},[t._v(t._s(t.order.delivery_title))])]),t._v(" "),a("div",{staticClass:"c-gray margin-10-t"},[t._v(t._s(t.order.deliveryer.mobile))])])]),t._v(" "),a("div",{staticClass:"flex"},[a("div",{staticClass:"icon icon-telephone icon-telephone1",on:{click:function(s){t.util.jsTel(t.order.deliveryer.mobile)}}}),t._v(" "),t.order.deliveryer.location_x&&t.order.deliveryer.location_y?a("div",{staticClass:"icon icon-zuobiao font-16 margin-10-l",on:{click:function(s){t.util.jsLocation({lat:t.order.deliveryer.location_x,lng:t.order.deliveryer.location_y})}}}):t._e()])])]:t._e()],2),t._v(" "),a("div",{staticClass:"shop-content margin-10 bg-default"},[a("div",{staticClass:"padding-15-lr padding-10-tb flex-lr"},[t.order.store?a("div",{staticClass:"flex"},[a("div",{staticClass:"store-logo"},[a("img",{staticClass:"wh-100",attrs:{src:t.order.store.logo,alt:""}})]),t._v(" "),a("span",{staticClass:"c-gray font-14 margin-5-l"},[t._v(t._s(t.order.store.title))])]):t._e()]),t._v(" "),t.order.goods&&t.order.goods.length>0?a("div",{staticClass:"goods-list"},t._l(t.order.goods,function(s){return a("div",{staticClass:"goods-item bg-gray padding-15-lr padding-10-tb flex-lr"},[a("div",{staticClass:"goods-thumb"},[a("img",{staticClass:"wh-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),a("div",{staticClass:"goods-info font-14"},[a("div",{staticClass:"flex-lr margin-10-b"},[a("div",[t._v(t._s(s.goods_title))]),t._v(" "),a("div",[t._v("¥"+t._s(s.goods_price))])]),t._v(" "),a("div",{staticClass:"flex-lr c-gray font-12"},[a("div",[t._v("x"+t._s(s.goods_price))]),t._v(" "),a("div",{staticClass:"line-through"},[t._v("¥"+t._s(s.goods_original_price))])])])])})):t._e(),t._v(" "),a("div",{staticClass:"other-info padding-15-lr font-14"},[a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("配送费")]),t._v(" "),a("span",[t._v("¥"+t._s(t.order.delivery_fee))])]),t._v(" "),a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("餐盒费")]),t._v(" "),a("span",[t._v("¥"+t._s(t.order.box_price))])]),t._v(" "),a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("包装费")]),t._v(" "),a("span",[t._v("¥"+t._s(t.order.pack_fee))])]),t._v(" "),a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("平台抽取佣金")]),t._v(" "),a("span",[t._v("-¥"+t._s(t.order.plateform_serve_fee))])]),t._v(" "),a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("平台配送费")]),t._v(" "),a("span",[t._v("-¥"+t._s(t.order.plateform_delivery_fee))])]),t._v(" "),a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("商户优惠活动")]),t._v(" "),a("span",[t._v("-¥"+t._s(t.order.store_discount_fee))])]),t._v(" "),a("div",{staticClass:"flex-lr margin-10-tb"},[a("span",[t._v("平台补贴")]),t._v(" "),a("span",[t._v("+¥"+t._s(t.order.plateform_discount_fee))])])]),t._v(" "),t.order.activityed&&t.order.activityed.length>0?[t._m(1),t._v(" "),t._l(t.order.activityed,function(s){return a("div",{staticClass:"discount-box padding-15-lr"},[a("div",{staticClass:"discount-item flex-lr"},[a("div",{staticClass:"flex font-14"},[a("div",{staticClass:"discount-img"},[a("img",{staticClass:"wh-100",attrs:{src:"static/img/"+s.type+"_b.png",alt:""}})]),t._v(" "),a("div",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"c-danger"},[t._v(t._s(s.note))])])])})]:t._e(),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"padding-15-lr padding-10-tb text-right font-14"},[a("span",{staticClass:"c-gray"},[a("span",[t._v("已优惠¥"+t._s(t.order.discount_fee))]),t._v(" "),a("span",{staticClass:"padding-10-lr"},[t._v("顾客支付¥"+t._s(t.order.final_fee))]),t._v(" "),a("span",{staticClass:"c-default"},[t._v("预计收入")]),t._v(" "),a("span",{staticClass:"c-danger font-bold"},[t._v("¥"+t._s(t.order.store_final_fee))])])]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"padding-15-lr padding-10-t padding-15-b text-center",on:{click:function(s){t.util.jsTel(t.order.mobile)}}},[a("i",{staticClass:"icon icon-telephone"}),t._v(" "),a("span",[t._v("联系顾客")])])],2),t._v(" "),2==t.order.order_type||1==t.order.order_type?a("div",{staticClass:"bg-default margin-10 padding-15 font-14"},[a("van-row",[1==t.order.order_type?a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("配送时间")]):2==t.order.order_type?a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("自提时间")]):t._e(),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.delivery_day)+" "+t._s(t.order.delivery_time))])],1),t._v(" "),a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v(t._s(1==t.order.order_type?"配送":"自提")+"地址")]),t._v(" "),1==t.order.order_type?a("van-col",{attrs:{span:"17"}},[a("div",{staticClass:"margin-10-b"},[t._v(t._s(t.order.username)+"("+t._s(t.order.sex)+")"+t._s(t.order.mobile))]),t._v(" "),a("div",{staticClass:"line-12"},[t._v(t._s(t.order.address))])]):a("van-col",{attrs:{span:"17"}},[a("div",{staticClass:"margin-10-b"},[t._v(t._s(t.order.store.title))]),t._v(" "),a("div",{staticClass:"line-12"},[t._v(t._s(t.order.store.address))])])],1),t._v(" "),1==t.order.order_type?a("van-row",[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("配送服务")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[2==t.order.delivery_type?a("div",{staticClass:"allocation-icon"},[t._v(t._s(t.order.delivery_title))]):t._e(),t._v(" "),a("span",[t._v(t._s(1==t.order.delivery_type?"由 商家":"")+"提供高品质配送服务")])])],1):t._e()],1):t._e(),t._v(" "),a("div",{staticClass:"bg-default margin-10 padding-15 font-14"},[t.order.order_type<=2?[a("van-row",{staticClass:"flex-lr"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("商户订单号")]),t._v(" "),a("van-col",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.order.serial_sn,expression:"order.serial_sn",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"flex-lr",attrs:{span:"17"}},[a("span",[t._v("#"+t._s(t.order.serial_sn))]),t._v(" "),a("span",{staticClass:"copy"},[t._v("复制")])])],1),t._v(" "),a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("平台订单号")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.ordersn))])],1),t._v(" "),a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("收货码")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.code))])],1)]:t._e(),t._v(" "),3==t.order.order_type?a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("桌台号")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.table.title)+"号桌")])],1):t._e(),t._v(" "),4==t.order.order_type?[a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("预定人")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[a("span",[t._v(t._s(t.order.username))])])],1),t._v(" "),a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("预定时间")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.reserve_time))])],1),t._v(" "),a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("预定桌台")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.table_category.title))])],1),t._v(" "),a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("预定类型")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.reserve_type_cn))])],1)]:t._e(),t._v(" "),1==t.order.order_type?a("van-row",{staticClass:"margin-10-tb"},[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("配送时间")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v("\n\t\t\t\t\t"+t._s(t.order.delivery_day)+" "+t._s(t.order.delivery_time)+"\n\t\t\t\t")])],1):t._e(),t._v(" "),a("van-row",[a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("支付方式")]),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.pay_type_cn))])],1),t._v(" "),t.order.invoice?[a("van-row",[t.order.invoice.title?a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("发票抬头")]):t._e(),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.invoice.title))])],1),t._v(" "),a("van-row",[t.order.invoice.recognition?a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("纳税人识别号")]):t._e(),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.invoice.recognition))])],1)]:t._e(),t._v(" "),a("van-row",[t.order.note?a("van-col",{staticClass:"c-gray",attrs:{span:"7"}},[t._v("纳税人识别号")]):t._e(),t._v(" "),a("van-col",{attrs:{span:"17"}},[t._v(t._s(t.order.note))])],1)],2)]),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.popupStatus,callback:function(s){t.popupStatus=s},expression:"popupStatus"}},[a("div",{staticClass:"popup-title"},[a("span",{staticClass:"opacity-0 font-14"},[t._v("取消")]),t._v(" "),a("span",[t._v("订单跟踪")]),t._v(" "),a("span",{staticClass:"c-info font-14",on:{click:t.onTogglePopup}},[t._v("关闭")])]),t._v(" "),a("div",{staticClass:"popup-content"},[a("van-steps",{attrs:{direction:"vertical",active:t.order.logs_length-1,"active-color":"#44BB00"}},t._l(t.order.logs,function(s,r){return a("van-step",{key:r,staticClass:"border-0px"},[a("div",{staticClass:"flex-lr"},[a("span",[t._v(t._s(s.title))]),t._v(" "),a("span",[t._v(t._s(s.addtime_cn))])]),t._v(" "),a("div",{staticClass:"margin-5-t"},[t._v(t._s(s.note))])])}))],1)]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"divide"},[s("div",{staticClass:"divide-line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"divide"},[s("div",{staticClass:"divide-line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"divide"},[s("div",{staticClass:"divide-line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"divide"},[s("div",{staticClass:"divide-line"})])}]};var d=a("VU/8")(o,n,!1,function(t){a("E2b8")},null,null);s.default=d.exports}});
//# sourceMappingURL=58.fde344a194b92d5d7f44.js.map