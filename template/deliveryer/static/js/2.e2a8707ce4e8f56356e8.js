webpackJsonp([2],{"8W4b":function(t,e){},UVee:function(t,e){},jPG2:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),a=s("mzkE"),n=s("75NE"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user-agreement"}},[s("van-popup",{model:{value:t.popupStatus,callback:function(e){t.popupStatus=e},expression:"popupStatus"}},[s("div",{staticClass:"popup-title van-hairline--bottom"},[s("span",{staticClass:"font-bold"},[t._v("用户服务协议和隐私政策概要")]),t._v(" "),t._e()]),t._v(" "),s("div",{staticClass:"popup-content",domProps:{innerHTML:t._s(t.agreement)}}),t._v(" "),s("ul",{staticClass:"popup-footer flex-lr font-15 van-hairline--top"},[s("li",{staticClass:"c-gray van-hairline--right",on:{click:t.onCancel}},[t._v("暂不使用")]),t._v(" "),s("li",{staticClass:"c-primary",on:{click:t.onConfirm}},[t._v("同意")])])])],1)},staticRenderFns:[]};var o=s("VU/8")({props:{agreement:""},data:function(){return{popupStatus:!0}},methods:{onTogglePopupStatus:function(){this.popupStatus=!this.popupStatus},onCancel:function(){this.util.closeApp(),this.onTogglePopupStatus()},onConfirm:function(){this.util.setStorage("deliveryerAgreement",1),this.onTogglePopupStatus()}}},r,!1,function(t){s("8W4b")},null,null).exports,l=s("deIj"),c=s("nZVv"),d={components:{publicHeader:i.a,publicFooter:a.a,countDown:n.a,userAgreement:o},data:function(){return{tabActive:0,tabs:[{status:3,status_cn:"待抢",num:0},{status:7,status_cn:"待取货",num:0},{status:4,status_cn:"配送中",num:0},{status:5,status_cn:"已完成",num:0}],filter:{items:{status:3}},isRefresh:!1,showPreLoading:!0,records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},deliveryer:{},can_collect_order:!1,config:{},yinsihao:{status:!1,secret_mobile:"",extension:""},userAgreement:"",failedTips:{show:!1,type:"message",tips:"您没有外卖单的配送权限，请联系平台管理员",btnText:"",link:"",position:"absolute"},menufooter:{}}},methods:{onChangeStatus:function(t,e){this.filter.items.status=this.tabs[t].status,this.onLoad(!0)},onLoad:function(t){var e=this;Object(l.b)({vue:e,force:t,url:"delivery/order/takeout/list",recordsName:"orders",data:{menufooter:1,_deliveryerOrderTabType:"takeout"},success:function(t){e.deliveryer=t.deliveryer,e.can_collect_order=t.can_collect_order,e.config=t.config,e.userAgreement=t.userAgreement},fail:function(){e.failedTips.show=!0}})},onCallCustomer:function(t){var e=this;t.data&&1==t.data.yinsihao_status?(console.log(t),Object(l.a)({vue:e,url:"yinsihao/yinsihao",data:{order_id:t.id,type:"member",ordersn:t.ordersn},success:function(t){e.yinsihao.secret_mobile=t.data.secret_mobile,e.yinsihao.extension=t.data.extension,e.yinsihao.status=!0}})):e.util.jsTel(t.mobile)},onChangeOrderStatus:function(t,e){Object(c.a)({vue:this,type:e,index:t,from:"list",order:this.records.data[t]})},onDetail:function(t){3!=this.filter.items.status?this.$router.push(this.util.getUrl({path:"pages/order/detail",query:{id:t}})):this.util.$toast("抢单后才能查看详情","",1e3)},onPullDownRefresh:function(){this.onLoad(!0)}},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.filter.items.status=this.query.status)},mounted:function(){var t=this;!t.util.getStorage("idtoken")&&t.util.isDlala()?window.apiready=function(){var e=api.getPrefs({sync:!0,key:"idtoken"});e&&t.util.setStorage("idtoken",e),t.util.startLocation({vue:t,MapType:"gaode"}),t.onLoad(),setInterval(function(){3==t.filter.items.status&&1==t.config.auto_refresh&&t.onLoad(!0)},15e3)}:(t.onLoad(),t.util.isDlala()&&(window.apiready=function(){t.util.startLocation({vue:t,MapType:"gaode"})}),setInterval(function(){3==t.filter.items.status&&1==t.config.auto_refresh&&t.onLoad(!0)},15e3)),this.util.imap(),this.util.icloudapi({vue:t,page:"orderTakeout"})}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"takeout-list"}},[t.util.isDlala()&&!t.util.getStorage("deliveryerAgreement")&&t.userAgreement?s("user-agreement",{attrs:{agreement:t.userAgreement}}):t._e(),t._v(" "),s("public-header",{attrs:{title:"订单列表"}}),t._v(" "),s("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("van-tabs",{attrs:{color:"#0EC3B3","title-active-color":"#0EC3B3","title-inactive-color":"#000","line-width":80,"line-height":2,"offset-top":46,sticky:"",swipeable:""},on:{change:t.onChangeStatus},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.tabs,function(e,i){return s("van-tab",{key:i},[s("div",{staticClass:"tab-title",attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t"+t._s(e.status_cn)+" "),e.num>0?s("span",{staticClass:"order-num"},[t._v(t._s(e.num))]):t._e()]),t._v(" "),s("van-pull-refresh",{on:{refresh:function(e){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.records.empty?s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),3==t.filter.items.status?[1==t.deliveryer.work_status?[t.deliveryer.perm_takeout>0?[t.can_collect_order?[s("p",[t._v("暂无待抢的订单")])]:[s("p",[t._v("当前调度模式不允许抢单,请等待管理员或系统派单")])]]:[s("p",[t._v("您没有外卖配送权限，请联系管理员")])]]:[s("p",[t._v("您当前处于收工状态,不能抢单")])]]:[s("p",[t._v("暂无符合条件的订单")])]],2):s("van-list",{attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},t._l(t.records.data,function(e,i){return s("div",{key:e.id,staticClass:"order-item",class:{reserve:1==e.is_reserve}},[s("div",{staticClass:"van-hairline--bottom flex-lr padding-15-tb padding-10-lr",on:{click:function(s){t.onDetail(e.id)}}},[s("div",{staticClass:"flex"},[s("span",{staticClass:"c-primary font-500 font-18 order-sn"},[t._v("#"+t._s(e.serial_sn))]),t._v(" "),s("div",{staticClass:"distance flex"},[s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"w-100",attrs:{src:"static/img/start.png",alt:""}})]),t._v(" "),s("div",{staticClass:"text"},[t._v("-"+t._s(e.store2deliveryer_distance)+"km-")]),t._v(" "),s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"w-100",attrs:{src:"static/img/ds.png",alt:""}})]),t._v(" "),s("div",{staticClass:"text"},[t._v("-"+t._s(e.store2user_distance)+"km-")]),t._v(" "),s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"w-100",attrs:{src:"static/img/end.png",alt:""}})])])]),t._v(" "),s("span",{staticClass:"c-danger font-15 font-500"},[t._v(t._s(t.Lang.dollarSign)+" "+t._s(e.plateform_deliveryer_fee))])]),t._v(" "),s("div",{staticClass:"padding-10-lr margin-15-t"},[s("div",{staticClass:"flex-lr"},[s("ul",{staticClass:"order-tags"},[3!=e.status?s("li",{staticClass:"handle-type"},[t._v(t._s(e.delivery_collect_type_cn))]):t._e(),t._v(" "),e.zhunshibao_status>0?s("li",{staticClass:"handle-type"},[t._v("准时宝")]):t._e()]),t._v(" "),4==e.status&&3!=e.delivery_status&&1!=e.is_reserve?s("div",{staticClass:"c-danger flex"},[e.delivery_overtime>0?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t距超时"),s("count-down",{staticClass:"c-danger",attrs:{endTime:e.delivery_overtime}})]:e.delivery_overtime_start>0?[t._v("\n\t\t\t\t\t\t\t\t\t\t\t已超时"),s("count-down",{staticClass:"c-danger",attrs:{startTime:e.delivery_overtime_start}})]:t._e()],2):t._e()])]),t._v(" "),s("ul",{staticClass:"address padding-10-lr",on:{click:function(s){t.onDetail(e.id)}}},[s("li",{staticClass:"flex-lr margin-15-t"},[s("span",{staticClass:"c-info font-15"},[t._v("取:")]),t._v(" "),s("ul",{staticClass:"address-text"},[s("li",{staticClass:"font-15 font-500"},[t._v(t._s(e.store.title))]),t._v(" "),s("li",{staticClass:"c-gray margin-5-t"},[t._v(t._s(e.store.address))])])]),t._v(" "),s("li",{staticClass:"flex-lr margin-15-t"},[s("span",{staticClass:"c-primary font-15"},[t._v("送:")]),t._v(" "),s("ul",{staticClass:"address-text"},[s("li",{staticClass:"font-15 font-500 "},[t._v(t._s(e.address))])])])]),t._v(" "),e.note?s("div",{staticClass:"note"},[s("div",{staticClass:"note-title"},[t._v("备注:")]),t._v(" "),s("div",{staticClass:"note-text"},[t._v(t._s(e.note))])]):t._e(),t._v(" "),s("ul",{staticClass:"time padding-10-lr margin-15-t flex-lr"},[s("li",[t._v(t._s(e.addtime_cn)+"下单")]),t._v(" "),s("li",[t._v("配送 "+t._s(e.delivery_day)+" "+t._s(e.delivery_time))])]),t._v(" "),s("ul",{staticClass:"btn-group margin-15-t padding-10-lr flex-lr"},[3==e.delivery_status?[s("li",{staticClass:"btn-item bg-warning",on:{click:function(e){t.onChangeOrderStatus(i,"delivery_assign")}}},[t._v("抢单")])]:t._e(),t._v(" "),4==e.delivery_status||7==e.delivery_status||8==e.delivery_status?[1==e.transfer_delivery_status?[s("li",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus(i,"direct_transfer_refuse")}}},[t._v("拒绝转单")]),t._v(" "),s("li",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus(i,"direct_transfer_agree")}}},[t._v("接受转单")])]:[4==e.delivery_status?[e.mobile?s("li",{staticClass:"btn-item bg-warning",on:{click:function(s){t.onCallCustomer(e)}}},[t._v("联系顾客")]):t._e(),t._v(" "),s("li",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus(i,"delivery_success")}}},[t._v("确认送达")])]:[e.store&&e.store.telephone?s("li",{staticClass:"btn-item",on:{click:function(s){t.util.jsTel(e.store.telephone)}}},[t._v("联系商家")]):t._e(),t._v(" "),s("li",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus(i,"delivery_takegoods")}}},[t._v("确认取货")])]]]:t._e()],2),t._v(" "),1==e.is_pay?s("div",["delivery"!=e.pay_type?s("div",{staticClass:"have-pay"}):"delivery"==e.pay_type?s("div",{staticClass:"delivery-pay"}):t._e()]):t._e()])}))],1)],1)})),t._v(" "),t.failedTips.show?s("failed-tips",{attrs:{failedTips:t.failedTips}}):t._e()],1),t._v(" "),t.showPreLoading?s("iloading"):t._e(),t._v(" "),s("van-dialog",{attrs:{"show-cancel-button":"",title:"顾客号码保护中","confirm-button-text":"立即联系"},on:{confirm:function(e){t.util.jsTel(t.yinsihao.secret_mobile)}},model:{value:t.yinsihao.status,callback:function(e){t.$set(t.yinsihao,"status",e)},expression:"yinsihao.status"}},[s("div",{staticClass:"padding-15-tb text-center font-16"},[s("span",{staticClass:"font-bold c-default"},[t._v(t._s(t.yinsihao.secret_mobile))]),t._v(" "),s("span",{staticClass:"padding-10-lr"},[t._v("转")]),t._v(" "),s("span",{staticClass:"font-bold c-danger"},[t._v(t._s(t.yinsihao.extension))])]),t._v(" "),s("div",{staticClass:"padding-15-b font-14 c-gray text-center"},[t._v("播打"+t._s(t.yinsihao.secret_mobile)+"接通后，输入"+t._s(t.yinsihao.extension)+"#即可")])])],1)},staticRenderFns:[]};var _=s("VU/8")(d,u,!1,function(t){s("UVee")},null,null);e.default=_.exports}});