webpackJsonp([5],{"/NCM":function(t,e){},IeHp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Cz8s"),s=a("75NE"),r=a("deIj"),n=a("nZVv"),o=a("Yo4o"),l=a("nIsk"),d={components:{publicHeader:i.a,countDown:s.a},data:function(){return{showPreLoading:!0,order:{},deliveryer:{},config:{map:{location_x:"",location_y:""}},yinsihao:{status:!1,secret_mobile:"",extension:""},MapType:this.util.getStorage("MapType")||"gaode"}},methods:{onLoad:function(){var t=this;Object(r.a)({vue:t,url:"delivery/order/takeout/detail",data:{id:t.id},success:function(e){t.order=e.order,t.deliveryer=e.deliveryer,t.config=e.config,t.onLoadMap()}})},onChangeOrderStatus:function(t){Object(n.a)({vue:this,type:t,from:"detail",order:this.order})},onCallCustomer:function(){var t=this;Object(r.a)({vue:t,url:"yinsihao/yinsihao",data:{order_id:t.order.id,type:"member",ordersn:t.order.ordersn},success:function(e){t.yinsihao.secret_mobile=e.data.secret_mobile,t.yinsihao.extension=e.data.extension,t.yinsihao.status=!0}})},onLoadMap:function(){var t=this;if("gaode"==t.MapType)Object(o.a)().then(function(e){t.map=new e.Map("map-container",{resizeEnable:!0,center:[t.config.map.location_y,t.config.map.location_x],zoom:13}),e.plugin("AMap.Driving",function(){var a=new e.Driving({policy:e.DrivingPolicy.LEAST_TIME,map:t.map,hideMarkers:!0}),i={},s=[],r=[t.deliveryer.location_y,t.deliveryer.location_x],n=[t.order.store.location_y,t.order.store.location_x],o=[t.order.location_y,t.order.location_x];i=new e.Marker({position:r,offset:new e.Pixel(-13,-31),content:'<div class="marker-start-route"></div>'}),s.push(i),i=new e.Marker({position:o,offset:new e.Pixel(-13,-31),content:'<div class="marker-end-route"></div>'}),s.push(i),i=new e.Marker({position:n,offset:new e.Pixel(-13,-31),content:'<div class="marker-pass-route"></div>'}),s.push(i),a.search(r,o,{waypoints:[n]},function(t,e){"complete"===t?console.log("绘制驾车路线完成"):console.log("获取驾车数据失败："+e)}),t.map.add(s),t.map.setFitView()})});else if("google"==t.MapType){var e=parseFloat(t.config.map.location_x),a=parseFloat(t.config.map.location_y);Object(l.a)().then(function(i){window.map=t.map=new i.maps.Map(document.getElementById("map-container"),{center:{lat:e,lng:a},zoom:13,disableDefaultUI:!0});var s={lat:parseFloat(t.deliveryer.location_x),lng:parseFloat(t.deliveryer.location_y)},r={lat:parseFloat(t.order.store.location_x),lng:parseFloat(t.order.store.location_y)},n={lat:parseFloat(t.order.location_x),lng:parseFloat(t.order.location_y)},o=new i.maps.DirectionsService,l=new i.maps.DirectionsRenderer({suppressMarkers:!0});o.route({origin:s,destination:n,travelMode:"DRIVING",waypoints:[{location:r,stopover:!0}],avoidFerries:!0,avoidHighways:!0,avoidTolls:!0,optimizeWaypoints:!0},function(t,e){"OK"==e&&(l.setDirections(t),l.setMap(map))}),new i.maps.Marker({position:s,map:map,icon:{url:"../../../static/img/start.png",scaledSize:new i.maps.Size(26,31)}}).setMap(map),new i.maps.Marker({position:r,map:map,icon:{url:"../../../static/img/ds.png",scaledSize:new i.maps.Size(26,31)}}).setMap(map),new i.maps.Marker({position:n,map:map,icon:{url:"../../../static/img/end.png",scaledSize:new i.maps.Size(26,31)}}).setMap(map)})}},onSetMapZoom:function(){var t=this.map.getZoom();t++,this.map.setZoomAndCenter(t)}},created:function(){this.query=this.$route.query,this.query&&this.query.id&&(this.id=this.query.id)},mounted:function(){this.onLoad()}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"takeout-detail"}},[a("public-header",{attrs:{title:"订单详情"}}),t._v(" "),a("div",{staticClass:"content font-14"},[a("div",{attrs:{id:"map-container"}}),t._v(" "),a("div",{staticClass:"tip"},[t._v("订单配送")]),t._v(" "),a("div",{staticClass:"bg-default"},[a("div",{staticClass:"flex-lr padding-10-lr padding-15-tb van-hairline--bottom"},[a("div",{staticClass:"c-primary font-500"},[t._v("#"+t._s(t.order.serial_sn))]),t._v(" "),4==t.order.status?a("div",{staticClass:"c-danger flex"},[t.order.delivery_overtime>0?[t._v("\n\t\t\t\t\t\t距超时"),a("count-down",{staticClass:"c-danger",attrs:{endTime:t.order.delivery_overtime}})]:t.order.delivery_overtime_start>0?[t._v("\n\t\t\t\t\t\t已超时"),a("count-down",{staticClass:"c-danger",attrs:{startTime:t.order.delivery_overtime_start}})]:t._e()],2):t._e()]),t._v(" "),a("div",{staticClass:"padding-10-lr margin-15-t flex"},[a("span",{staticClass:"handle-type"},[t._v(t._s(t.order.delivery_collect_type_cn))]),t._v(" "),a("span",{staticClass:"delivery-time"},[t._v("配送 "+t._s(t.order.delivery_day)+" "+t._s(t.order.delivery_time))])]),t._v(" "),a("ul",{staticClass:"address padding-10-lr",attrs:{"margin-15-t":""}},[t.order.store?a("li",{staticClass:"flex-lr margin-15-t"},[a("span",{staticClass:"c-info font-15"},[t._v("取:")]),t._v(" "),a("ul",{staticClass:"address-text"},[a("li",{staticClass:"font-15 font-500"},[t._v(t._s(t.order.store.title))]),t._v(" "),a("li",{staticClass:"c-gray margin-5-t font-13"},[t._v(t._s(t.order.store.address))])]),t._v(" "),t.order.store.location_x&&t.order.store.location_y?a("i",{staticClass:"icon icon-locationfill",on:{click:function(e){t.util.jsLocation({lat:t.order.store.location_x,lng:t.order.store.location_y,name:t.order.store.title,address:t.order.store.address,type:t.MapType})}}}):t._e()]):t._e(),t._v(" "),a("li",{staticClass:"flex-lr margin-15-t"},[a("span",{staticClass:"c-primary font-15"},[t._v("送:")]),t._v(" "),a("ul",{staticClass:"address-text"},[a("li",{staticClass:"font-15 font-500 "},[t._v(t._s(t.order.address))]),t._v(" "),a("li",{staticClass:"c-gray margin-5-t font-13"},[t._v(t._s(t.order.username)+" "+t._s(t.order.mobile_protect))])]),t._v(" "),t.order.location_x&&t.order.location_y?a("i",{staticClass:"icon icon-locationfill",on:{click:function(e){t.util.jsLocation({lat:t.order.location_x,lng:t.order.location_y,address:t.order.address,type:t.MapType})}}}):t._e()])]),t._v(" "),a("div",{staticClass:"tel-group padding-10-lr padding-15-tb van-hairline--top margin-15-t flex-lr"},[t.order.store?a("div",{staticClass:"tel-item flex van-hairline--right",on:{click:function(e){t.util.jsTel(t.order.store.telephone)}}},[t._m(0),t._v(" "),a("span",[t._v(t._s(t.order.store.telephone))])]):t._e(),t._v(" "),t.order.data&&1==t.order.data.yinsihao_status?a("div",{staticClass:"tel-item flex",on:{click:t.onCallCustomer}},[t._m(1),t._v(" "),a("span",[t._v(t._s(t.order.mobile_protect))])]):a("div",{staticClass:"tel-item flex",on:{click:function(e){t.util.jsTel(t.order.mobile)}}},[t._m(2),t._v(" "),a("span",[t._v(t._s(t.order.mobile))])])])]),t._v(" "),a("div",{staticClass:"tip"},[t._v("货品信息")]),t._v(" "),a("div",{staticClass:"goods-info bg-default"},[t.order.note?a("div",{staticClass:"note"},[a("div",{staticClass:"note-title"},[t._v("备注:")]),t._v(" "),a("div",{staticClass:"note-text"},[t._v(t._s(t.order.note))])]):t._e(),t._v(" "),a("div",{staticClass:"padding-15-b padding-5-t padding-10-lr van-hairline--bottom"},t._l(t.order.goods,function(e){return a("van-row",{key:e.goods_id,staticClass:"margin-10-t"},[a("van-col",{attrs:{span:"12"}},[t._v(t._s(e.goods_title))]),t._v(" "),a("van-col",{staticClass:"text-right",attrs:{span:"3"}},[t._v("x"+t._s(e.goods_num))]),t._v(" "),a("van-col",{staticClass:"text-right",attrs:{span:"9"}},[t._v(t._s(t.Lang.dollarSign)+t._s(e.goods_price))])],1)})),t._v(" "),a("div",{staticClass:"padding-15-b padding-5-t padding-10-lr van-hairline--bottom"},[a("ul",{staticClass:"margin-10-t c-gray flex-lr"},[a("li",[t._v("配送费")]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.delivery_fee))])]),t._v(" "),t.order.box_price>0?a("ul",{staticClass:"margin-10-t c-gray flex-lr"},[a("li",[t._v("餐盒费")]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.box_price))])]):t._e(),t._v(" "),a("ul",{staticClass:"margin-10-t c-gray flex-lr"},[a("li",[t._v("包装费")]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.pack_fee))])]),t._v(" "),2==t.order.delivery_type&&"delivery"==t.order.pay_type?a("ul",{staticClass:"margin-10-t c-gray flex-lr"},[a("li",[t._v("本单需收取顾客")]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.final_fee))])]):t._e(),t._v(" "),t.order.data&&t.order.data.extra_fee?t._l(t.order.data.extra_fee,function(e,i){return a("ul",{key:i,staticClass:"margin-10-t c-gray flex-lr"},[a("li",[t._v(t._s(e.name))]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(e.fee))])])}):t._e(),t._v(" "),t.order.data&&t.order.data.member_choice?t._l(t.order.data.member_choice,function(e,i){return a("ul",{key:i,staticClass:"margin-10-t c-gray flex-lr"},[a("li",[t._v(t._s(e.name))]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(e.fee))])])}):t._e()],2),t._v(" "),a("div",{staticClass:"padding-15-tb padding-10-lr text-right"},[a("span",{staticClass:"c-gray font-13 margin-10-r"},[t._v("优惠"+t._s(t.Lang.dollarSign)+t._s(t.order.discount_fee))]),t._v(" "),a("span",{staticClass:"c-gray font-13 margin-10-r"},[t._v("共计"+t._s(t.Lang.dollarSign)+t._s(t.order.total_fee))]),t._v(" "),a("span",{staticClass:"font-15"},[a("span",[t._v("顾客实际支付")]),t._v(" "),a("span",{staticClass:"c-danger font-500"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.final_fee))])])]),t._v(" "),1==t.order.is_pay?a("div",["delivery"!=t.order.pay_type?a("div",{staticClass:"have-pay"}):"delivery"==t.order.pay_type?a("div",{staticClass:"delivery-pay"}):t._e()]):t._e()]),t._v(" "),a("div",{staticClass:"tip"},[t._v("订单信息")]),t._v(" "),a("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},[a("ul",{staticClass:"margin-10-t flex-lr"},[a("li",[t._v("订单号")]),t._v(" "),a("li",[t._v(t._s(t.order.ordersn))])]),t._v(" "),a("ul",{staticClass:"margin-10-t flex-lr"},[a("li",[t._v("下单时间")]),t._v(" "),a("li",[t._v(t._s(t.order.addtime_cn))])]),t._v(" "),a("ul",{staticClass:"margin-10-t flex-lr"},[a("li",[t._v("付款方式")]),t._v(" "),a("li",[t._v(t._s(t.order.paytype_cn))])]),t._v(" "),a("ul",{staticClass:"margin-10-t flex-lr"},[a("li",[t._v("收入")]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.plateform_deliveryer_fee))])]),t._v(" "),t.order.invoice?[t.order.invoice.title?a("ul",{staticClass:"margin-10-t flex-lr"},[a("li",[t._v("发票抬头")]),t._v(" "),a("li",[t._v(t._s(t.order.invoice.title))])]):t._e(),t._v(" "),t.order.invoice.recognition?a("ul",{staticClass:"margin-10-t flex-lr"},[a("li",[t._v("纳税人识别号")]),t._v(" "),a("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.invoice.recognition))])]):t._e()]:t._e()],2),t._v(" "),a("div",{staticClass:"times van-hairline--bottom bg-default margin-10-t padding-15 flex-lr font-14 text-center"},[t.order.delivery_assign_time_cn?a("div",{staticClass:"time-item"},[a("div",{staticClass:"time-title margin-10-b"},[t._v("接单")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(t.order.delivery_assign_time_cn.day))]),t._v(" "),a("div",{staticClass:"time margin-5-t"},[t._v(t._s(t.order.delivery_assign_time_cn.time))])]):t._e(),t._v(" "),t.order.delivery_instore_time_cn?a("div",{staticClass:"time-item"},[a("div",{staticClass:"time-title margin-10-b"},[t._v("到店")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(t.order.delivery_instore_time_cn.day))]),t._v(" "),a("div",{staticClass:"time margin-5-t"},[t._v(t._s(t.order.delivery_instore_time_cn.time))])]):t._e(),t._v(" "),t.order.delivery_takegoods_time_cn?a("div",{staticClass:"time-item"},[a("div",{staticClass:"time-title margin-10-b"},[t._v("取货")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(t.order.delivery_takegoods_time_cn.day))]),t._v(" "),a("div",{staticClass:"time margin-5-t"},[t._v(t._s(t.order.delivery_takegoods_time_cn.time))])]):t._e(),t._v(" "),t.order.delivery_success_time_cn?a("div",{staticClass:"time-item"},[a("div",{staticClass:"time-title margin-10-b"},[t._v("送达")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(t.order.delivery_success_time_cn.day))]),t._v(" "),a("div",{staticClass:"time margin-5-t"},[t._v(t._s(t.order.delivery_success_time_cn.time))])]):t._e()]),t._v(" "),a("div",{staticClass:"btn-group padding-10-lr padding-15-t padding-5-b bg-default"},[a("van-row",{attrs:{gutter:"10"}},[t.order.transfer_deliveryer_id==t.deliveryer.id&&1==t.order.transfer_delivery_status?[a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus("direct_transfer_refuse")}}},[t._v("拒绝转单")])]),t._v(" "),a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("direct_transfer_agree")}}},[t._v("接受转单")])])]:t.deliveryer.id==t.order.deliveryer_id?[4==t.order.delivery_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("wx_notice")}}},[t._v("微信通知")])]):t._e(),t._v(" "),4==t.order.delivery_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_success")}}},[t._v("确认送达")])]):t._e(),t._v(" "),7==t.order.delivery_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_instore")}}},[t._v("上报到店")])]):t._e(),t._v(" "),8==t.order.delivery_status||7==t.order.delivery_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_takegoods")}}},[t._v("确认取货")])]):t._e(),t._v(" "),1==t.order.deliveryer_transfer_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_transfer")}}},[t._v("申请转单")])]):t._e(),t._v(" "),1==t.order.deliveryer_transfer_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus("direct_transfer")}}},[t._v("定向转单")])]):t._e(),t._v(" "),1==t.order.deliveryer_cancel_status?a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus("delivery_cancel")}}},[t._v("取消订单")])]):t._e()]:t._e()],2)],1),t._v(" "),a("van-dialog",{attrs:{"show-cancel-button":"",title:"顾客号码保护中","confirm-button-text":"立即联系"},on:{confirm:function(e){t.util.jsTel(t.yinsihao.secret_mobile)}},model:{value:t.yinsihao.status,callback:function(e){t.$set(t.yinsihao,"status",e)},expression:"yinsihao.status"}},[a("div",{staticClass:"padding-15-tb text-center font-16"},[a("span",{staticClass:"font-bold c-default"},[t._v(t._s(t.yinsihao.secret_mobile))]),t._v(" "),a("span",{staticClass:"padding-10-lr"},[t._v("转")]),t._v(" "),a("span",{staticClass:"font-bold c-danger"},[t._v(t._s(t.yinsihao.extension))])]),t._v(" "),a("div",{staticClass:"padding-15-b font-14 c-gray text-center"},[t._v("播打"+t._s(t.yinsihao.secret_mobile)+"接通后，输入"+t._s(t.yinsihao.extension)+"#即可")])])],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/store.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/customer.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/customer.png",alt:""}})])}]};var c=a("VU/8")(d,_,!1,function(t){a("/NCM")},null,null);e.default=c.exports},nIsk:function(t,e,a){"use strict";e.a=function(){return new s.a(function(t,e){window.initMap=function(){t(google)};var a=document.createElement("script");a.type="text/javascript",a.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABxMCzgtzJxCbJu8Cxwv7BszayIAWN1xw&callback=initMap",a.async=!0,a.defer=!0,a.onerror=e,document.head.appendChild(a)})};var i=a("//Fk"),s=a.n(i)}});