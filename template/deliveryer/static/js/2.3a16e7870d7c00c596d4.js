webpackJsonp([2],{"2NjV":function(t,e,r){"use strict";r.d(e,"a",function(){return d});var a=r("Gu7T"),i=r.n(a),s=r("woOf"),o=r.n(s),n=r("YaEn");function d(t){var e=t.type;if("delivery_transfer"!=e&&"direct_transfer"!=e&&"cancel"!=e){var r=function(t){return{delivery_assign:{tip:"确定抢单吗",success_status:2},direct_transfer_refuse:{tip:"确定拒绝转单吗",success_status:3,reply:"refuse"},direct_transfer_agree:{tip:"确定接受转单吗",success_status:2,reply:"agree"},delivery_instore:{tip:"确定已取货吗",success_status:3},delivery_success:{tip:"确认已送达吗",success_status:4},wx_notice:{tip:"确定通知下单人你已到达送餐地址吗",success_status:0}}[t]}(e),a=r.success_status;"direct_transfer_refuse"!=e&&"direct_transfer_agree"!=e||(e="direct_transfer_reply");var s="delivery/order/errander/status";"wx_notice"==e&&(s="delivery/order/errander/notice");var d={url:s,data:{id:t.order.id,type:e,reply:r.reply||"",code:t.code,_deliveryerOrderTabType:"errander"},confirm:t.code?"":r.tip,success:function(s){if(t.vue.util.$toast(s),"wx_notice"!=e){if("detail"==t.from)"direct_transfer_reply"==e?(t.vue.order.transfer_delivery_status=a,"agree"==r.reply&&(t.vue.order.deliveryer_id=t.vue.order.transfer_deliveryer_id)):t.vue.order.delivery_status=a,t.vue.order=o()({},t.vue.order);else{if("agree"==r.reply)t.vue.records.data[t.index].transfer_delivery_status=a;else if("refuse"==r.reply)t.vue.records.data.splice(t.index,1);else{-1!=["delivery_assign","delivery_instore","delivery_success"].indexOf(e)&&t.vue.records.data.splice(t.index,1)}var n=t.vue.util.getStorage("orderTabs");n&&n.length>0&&(t.vue.tabs=[].concat(i()(n)))}t.code&&(t.vue.code=o()({},{codeShow:!1,value:"",orderIndex:-1}))}},fail:function(e){t.vue.util.$toast(e.message),t.code&&(t.vue.code=o()({},{codeShow:!1,value:"",orderIndex:-1}))}};t.vue.util.jspost(d)}else n.a.push(t.vue.util.getUrl({path:"/pages/paotui/op",query:{order_id:t.order.id,type:e,order_status:t.order.status}}))}},LN1q:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Cz8s"),i=r("75NE"),s=r("deIj"),o=r("2NjV"),n=r("Yo4o"),d={components:{publicHeader:a.a,countDown:i.a},data:function(){return{showPreLoading:!0,order:{data:{order:{partData:[]}}},deliveryer:{},verification_code:0,code:{codeShow:!1,value:""},config:{map:{location_x:"",location_y:""}},yinsihao:{status:!1,secret_mobile:"",extension:""}}},methods:{onLoad:function(){var t=this;Object(s.a)({vue:t,url:"delivery/order/errander/detail",data:{id:t.id},success:function(e){t.order=t.util.extend(t.order,e.order),t.deliveryer=e.deliveryer,t.config=e.config,t.verification_code=e.verification_code,t.onLoadMap()}})},onChangeOrderStatus:function(t){("delivery_success"!=t||1!=this.verification_code||(this.code.codeShow=!0,this.code.value))&&Object(o.a)({vue:this,type:t,from:"detail",order:this.order,code:this.code.value})},onLoadMap:function(){var t=this;Object(n.a)().then(function(e){t.map=new e.Map("map-container",{resizeEnable:!0,center:[t.config.map.location_y,t.config.map.location_x],zoom:13}),e.plugin("AMap.Driving",function(){var r=new e.Driving({policy:e.DrivingPolicy.LEAST_TIME,map:t.map,hideMarkers:!0}),a={},i=[],s=[t.deliveryer.location_y,t.deliveryer.location_x],o=[t.order.accept_location_y,t.order.accept_location_x];if(a=new e.Marker({position:s,offset:new e.Pixel(-13,-31),content:'<div class="marker-start-route"></div>'}),i.push(a),a=new e.Marker({position:o,offset:new e.Pixel(-13,-31),content:'<div class="marker-end-route"></div>'}),i.push(a),t.order.buy_location_y&&t.order.buy_location_x){var n=[t.order.buy_location_y,t.order.buy_location_x];a=new e.Marker({position:n,offset:new e.Pixel(-13,-31),content:'<div class="marker-pass-route"></div>'}),i.push(a)}r.search(s,o,{waypoints:[n]},function(t,e){"complete"===t?console.log("绘制驾车路线完成"):console.log("获取驾车数据失败："+e)}),t.map.add(i),t.map.setFitView()})})},onSetMapZoom:function(){var t=this.map.getZoom();t++,this.map.setZoomAndCenter(t)},onCallCustomer:function(t){var e=this;t=t||"accept",Object(s.a)({vue:e,url:"yinsihao/yinsihao",data:{order_id:e.order.id,type:"errander",ordersn:e.order.order_sn,orderType:"errander",memberType:t},success:function(t){e.yinsihao.secret_mobile=t.data.secret_mobile,e.yinsihao.extension=t.data.extension,e.yinsihao.status=!0}})}},created:function(){this.query=this.$route.query,this.query&&this.query.id&&(this.id=this.query.id)},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"paotui-detail"}},[r("public-header",{attrs:{title:"跑腿订单详情"}}),t._v(" "),r("div",{staticClass:"content font-14"},[r("div",{attrs:{id:"map-container"}}),t._v(" "),r("div",{staticClass:"tip"},[t._v("跑腿订单配送")]),t._v(" "),r("div",{staticClass:"bg-default"},[r("div",{staticClass:"flex-lr padding-10-lr padding-15-tb van-hairline--bottom"},[r("div",{staticClass:"c-primary font-500"},[t._v("#"+t._s(t.order.id))]),t._v(" "),2==t.order.status?r("div",{staticClass:"c-danger flex"},[t.order.delivery_overtime>0?[t._v("\n\t\t\t\t\t\t距超时"),r("count-down",{staticClass:"c-danger",attrs:{endTime:t.order.delivery_overtime}})]:t.order.delivery_overtime_start>0?[t._v("\n\t\t\t\t\t\t已超时"),r("count-down",{staticClass:"c-danger",attrs:{startTime:t.order.delivery_overtime_start}})]:t._e()],2):t._e()]),t._v(" "),r("div",{staticClass:"flex padding-10-lr padding-15-tb van-hairline--bottom"},[r("span",{staticClass:"handle-type"},[t._v(t._s(t.order.delivery_collect_type_cn))]),t._v(" "),r("span",{staticClass:"delivery-time"},[t._v("配送 "+t._s(t.order.delivery_time))])]),t._v(" "),r("ul",{staticClass:"address padding-10-lr",attrs:{"margin-15-t":""}},[r("li",{staticClass:"flex-lr margin-15-t"},[r("ul",{staticClass:"address-text buy-text"},[r("li",{staticClass:"font-15 font-500"},[t._v(t._s(t.order.buy_address))]),t._v(" "),t.order.buy_username?r("li",{staticClass:"c-gray margin-5-t font-13"},[t._v(t._s(t.order.buy_username)+" "+t._s(t.order.buy_mobile))]):t._e()]),t._v(" "),t.order.buy_location_x&&t.order.buy_location_y?r("i",{staticClass:"icon icon-locationfill",on:{click:function(e){t.util.jsLocation({lat:t.order.buy_location_x,lng:t.order.buy_location_y,address:t.order.buy_address,type:"app"})}}}):t._e()]),t._v(" "),r("li",{staticClass:"flex-lr margin-15-t"},[r("ul",{staticClass:"address-text accept-text"},[r("li",{staticClass:"font-15 font-500 "},[t._v(t._s(t.order.accept_address))]),t._v(" "),r("li",{staticClass:"c-gray margin-5-t font-13"},[t._v(t._s(t.order.accept_username)+" "+t._s(t.order.accept_mobile))])]),t._v(" "),t.order.accept_location_x&&t.order.accept_location_y?r("i",{staticClass:"icon icon-locationfill",on:{click:function(e){t.util.jsLocation({lat:t.order.accept_location_x,lng:t.order.accept_location_y,address:t.order.accept_address,type:"app"})}}}):t._e()])]),t._v(" "),r("div",{staticClass:"tel-group padding-10-lr padding-15-tb van-hairline--top margin-15-t flex-lr"},[t.order.buy_mobile?[t.order.data&&1==t.order.data.yinsihao_status?r("div",{staticClass:"tel-item flex van-hairline--right",on:{click:function(e){t.onCallCustomer("buy")}}},[t._m(0),t._v(" "),r("span",[t._v(t._s(t.order.buy_mobile))])]):r("div",{staticClass:"tel-item flex van-hairline--right",on:{click:function(e){t.util.jsTel(t.order.buy_mobile)}}},[t._m(1),t._v(" "),r("span",[t._v(t._s(t.order.buy_mobile))])])]:t._e(),t._v(" "),t.order.data&&1==t.order.data.yinsihao_status?r("div",{staticClass:"tel-item flex",on:{click:function(e){t.onCallCustomer("accept")}}},[t._m(2),t._v(" "),r("span",[t._v(t._s(t.order.accept_mobile))])]):r("div",{staticClass:"tel-item flex",on:{click:function(e){t.util.jsTel(t.order.accept_mobile)}}},[t._m(3),t._v(" "),r("span",[t._v(t._s(t.order.accept_mobile))])])],2)]),t._v(" "),r("div",{staticClass:"tip"},[t._v("货品信息")]),t._v(" "),r("div",{staticClass:"goods-info bg-default"},[t.order.note?r("div",{staticClass:"note"},[r("div",{staticClass:"note-title"},[t._v("备注:")]),t._v(" "),r("div",{staticClass:"note-text"},[t._v(t._s(t.order.note))])]):t._e(),t._v(" "),r("div",{staticClass:"padding-15-b padding-5-t padding-10-lr van-hairline--bottom"},[r("ul",{staticClass:"margin-10-t c-gray flex-lr"},[r("li",[t._v("物品名称")]),t._v(" "),r("li",[t._v(t._s(t.order.goods_name))])]),t._v(" "),t.order.box_price>0?r("ul",{staticClass:"margin-10-t c-gray flex-lr"},[r("li",[t._v("物品预期价格")]),t._v(" "),r("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.goods_price))])]):t._e(),t._v(" "),t.order.goods_weight>0?r("ul",{staticClass:"margin-10-t c-gray flex-lr"},[r("li",[t._v("物品重量")]),t._v(" "),r("li",[t._v(t._s(t.order.goods_weight)+"公斤")])]):t._e(),t._v(" "),t.order.data&&t.order.data.order&&t.order.data.order.partData&&t.order.data.order.partData.length>0?t._l(t.order.data.order.partData,function(e,a){return r("ul",{staticClass:"margin-10-t c-gray flex-lr"},["multipleChoices"!=e.type?[r("li",[t._v(t._s(e.title))]),t._v(" "),r("li",[t._v(t._s(e.value))])]:[r("li",[t._v(t._s(e.title))]),t._v(" "),r("li",[t._l(e.value,function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(" "+e)+"\n\t\t\t\t\t\t\t\t")]})],2)]],2)}):t._e()],2),t._v(" "),1==t.order.is_pay?r("div",["delivery"!=t.order.pay_type?r("div",{staticClass:"have-pay"}):"delivery"==t.order.pay_type?r("div",{staticClass:"delivery-pay"}):t._e()]):t._e()]),t._v(" "),t.order.thumbs&&t.order.thumbs.length>0?[r("div",{staticClass:"tip"},[t._v("顾客上传的图片")]),t._v(" "),r("div",{staticClass:"goods-imgs padding-10-lr padding-15-t padding-5-b bg-default"},[r("van-row",{attrs:{gutter:"10"}},t._l(t.order.thumbs,function(e,a){return r("van-col",{key:a,attrs:{span:"6"}},[r("div",{staticClass:"img-wrap",on:{click:function(e){t.util.jsPreviewImage(t.order.thumbs,a)}}},[r("img",{staticClass:"wh-100",attrs:{src:e,alt:""}})])])}))],1)]:t._e(),t._v(" "),t.order.data&&t.order.data.order&&t.order.data.order.thumbs&&t.order.data.order.thumbs.length>0?[t._l(t.order.data.order.thumbs,function(e){return[r("div",{staticClass:"tip"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"goods-imgs padding-10-lr padding-15-t padding-5-b bg-default"},[r("van-row",{attrs:{gutter:"10"}},t._l(e.value,function(a,i){return r("van-col",{key:i,attrs:{span:"6"}},[r("div",{staticClass:"img-wrap",on:{click:function(r){t.util.jsPreviewImage(e.value,i)}}},[r("img",{staticClass:"wh-100",attrs:{src:a,alt:""}})])])}))],1)]})]:t._e(),t._v(" "),t.order.data&&t.order.data.order&&t.order.data.order.extra_fee&&t.order.data.order.extra_fee.length>0?[r("div",{staticClass:"tip"},[t._v("附加服务")]),t._v(" "),r("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},t._l(t.order.data.order.extra_fee,function(e,a){return r("ul",{key:a,staticClass:"margin-10-t flex-lr"},[r("li",[t._v(t._s(e.title))]),t._v(" "),r("li",[t._l(e.value,function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(" "+e.name)+"\n\t\t\t\t\t\t")]})],2)])}))]:t._e(),t._v(" "),r("div",{staticClass:"tip"},[t._v("订单信息")]),t._v(" "),r("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},[r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[t._v("订单编号")]),t._v(" "),r("li",[t._v(t._s(t.order.order_sn))])]),t._v(" "),r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[t._v("下单时间")]),t._v(" "),r("li",[t._v(t._s(t.order.addtime_cn))])]),t._v(" "),r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[t._v("付款方式")]),t._v(" "),r("li",[t._v(t._s(t.order.pay_type_cn))])])]),t._v(" "),r("div",{staticClass:"tip"},[t._v("订单收入")]),t._v(" "),r("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},[r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[t._v("配送费")]),t._v(" "),r("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.deliveryer_fee))])]),t._v(" "),t.order.delivery_tips>0?r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[t._v("小费")]),t._v(" "),r("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.delivery_tips))])]):t._e(),t._v(" "),r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[t._v("本单收入")]),t._v(" "),r("li",[t._v(t._s(t.Lang.dollarSign)+t._s(t.order.deliveryer_total_fee))])])]),t._v(" "),r("div",{staticClass:"btn-group padding-10-lr padding-15-t padding-5-b"},[r("van-row",{attrs:{gutter:"10"}},[t.order.transfer_deliveryer_id==t.deliveryer.id&&1==t.order.transfer_delivery_status?[r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus("direct_transfer_refuse")}}},[t._v("拒绝转单")])]),t._v(" "),r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("direct_transfer_agree")}}},[t._v("接受转单")])])]:t.deliveryer.id==t.order.deliveryer_id?[3==t.order.delivery_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_success")}}},[t._v("确认送达")])]):t._e(),t._v(" "),2==t.order.delivery_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_instore")}}},[t._v("确认取货")])]):t._e(),t._v(" "),1==t.order.deliveryer_transfer_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(e){t.onChangeOrderStatus("delivery_transfer")}}},[t._v("申请转单")])]):t._e(),t._v(" "),1==t.order.deliveryer_transfer_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus("direct_transfer")}}},[t._v("定向转单")])]):t._e(),t._v(" "),1==t.order.deliveryer_cancel_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeOrderStatus("cancel")}}},[t._v("取消订单")])]):t._e()]:t._e()],2)],1)],2),t._v(" "),t.showPreLoading?r("iloading"):t._e(),t._v(" "),r("van-dialog",{attrs:{"show-cancel-button":"",confirmButtonText:"确认送达"},on:{confirm:function(e){t.onChangeOrderStatus("delivery_success")},cancel:function(e){t.code.codeShow=!1}},model:{value:t.code.codeShow,callback:function(e){t.$set(t.code,"codeShow",e)},expression:"code.codeShow"}},[r("van-field",{attrs:{placeholder:"输入收货码","input-align":"center",readonly:""}}),t._v(" "),r("van-field",{attrs:{placeholder:"请输入收货码"},model:{value:t.code.value,callback:function(e){t.$set(t.code,"value",e)},expression:"code.value"}})],1),t._v(" "),r("van-dialog",{attrs:{"show-cancel-button":"",title:"顾客号码保护中","confirm-button-text":"立即联系"},on:{confirm:function(e){t.util.jsTel(t.yinsihao.secret_mobile)}},model:{value:t.yinsihao.status,callback:function(e){t.$set(t.yinsihao,"status",e)},expression:"yinsihao.status"}},[r("div",{staticClass:"padding-15-tb text-center font-16"},[r("span",{staticClass:"font-bold c-default"},[t._v(t._s(t.yinsihao.secret_mobile))]),t._v(" "),r("span",{staticClass:"padding-10-lr"},[t._v("转")]),t._v(" "),r("span",{staticClass:"font-bold c-danger"},[t._v(t._s(t.yinsihao.extension))])]),t._v(" "),r("div",{staticClass:"padding-15-b font-14 c-gray text-center"},[t._v("播打"+t._s(t.yinsihao.secret_mobile)+"接通后，输入"+t._s(t.yinsihao.extension)+"#即可")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/store.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/store.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/customer.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"w-100",attrs:{src:"static/img/customer.png",alt:""}})])}]};var c=r("VU/8")(d,l,!1,function(t){r("fZNb")},null,null);e.default=c.exports},fZNb:function(t,e){}});