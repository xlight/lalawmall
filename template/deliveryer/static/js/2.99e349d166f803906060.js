webpackJsonp([2],{"2NjV":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r("Gu7T"),i=r.n(a),s=r("woOf"),d=r.n(s),o=r("YaEn");function n(e){var t=e.type;if("delivery_transfer"!=t&&"direct_transfer"!=t&&"cancel"!=t){var r=function(e){return{delivery_assign:{tip:"确定抢单吗",success_status:2},direct_transfer_refuse:{tip:"确定拒绝转单吗",success_status:3,reply:"refuse"},direct_transfer_agree:{tip:"确定接受转单吗",success_status:2,reply:"agree"},delivery_instore:{tip:"确定已取货吗",success_status:3},delivery_success:{tip:"确认已送达吗",success_status:4},wx_notice:{tip:"确定通知下单人你已到达送餐地址吗",success_status:0}}[e]}(t),a=r.success_status;"direct_transfer_refuse"!=t&&"direct_transfer_agree"!=t||(t="direct_transfer_reply");var s="delivery/order/errander/status";"wx_notice"==t&&(s="delivery/order/errander/notice");var n={url:s,data:{id:e.order.id,type:t,reply:r.reply||"",code:e.code,_deliveryerOrderTabType:"errander"},confirm:e.code?"":r.tip,success:function(s){if(e.vue.util.$toast(s),"wx_notice"!=t){if("detail"==e.from)"direct_transfer_reply"==t?(e.vue.order.transfer_delivery_status=a,"agree"==r.reply&&(e.vue.order.deliveryer_id=e.vue.order.transfer_deliveryer_id)):e.vue.order.delivery_status=a,e.vue.order=d()({},e.vue.order);else{if("agree"==r.reply)e.vue.records.data[e.index].transfer_delivery_status=a;else if("refuse"==r.reply)e.vue.records.data.splice(e.index,1);else{-1!=["delivery_assign","delivery_instore","delivery_success"].indexOf(t)&&e.vue.records.data.splice(e.index,1)}var o=e.vue.util.getStorage("orderTabs");o&&o.length>0&&(e.vue.tabs=[].concat(i()(o)))}e.code&&(e.vue.code=d()({},{codeShow:!1,value:"",orderIndex:-1}))}},fail:function(t){e.vue.util.$toast(t.message),e.code&&(e.vue.code=d()({},{codeShow:!1,value:"",orderIndex:-1}))}};e.vue.util.jspost(n)}else o.a.push(e.vue.util.getUrl({path:"/pages/paotui/op",query:{order_id:e.order.id,type:t,order_status:e.order.status}}))}},"9bqm":function(e,t){},LN1q:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Cz8s"),i=r("75NE"),s=r("deIj"),d=r("2NjV"),o=r("Yo4o"),n={components:{publicHeader:a.a,countDown:i.a},data:function(){return{showPreLoading:!0,order:{},deliveryer:{},verification_code:0,code:{codeShow:!1,value:""},config:{map:{location_x:"",location_y:""}}}},methods:{onLoad:function(){var e=this;Object(s.a)({vue:e,url:"delivery/order/errander/detail",data:{id:e.id},success:function(t){e.order=t.order,e.deliveryer=t.deliveryer,e.config=t.config,e.verification_code=t.verification_code,e.onLoadMap()}})},onChangeOrderStatus:function(e){("delivery_success"!=e||1!=this.verification_code||(this.code.codeShow=!0,this.code.value))&&Object(d.a)({vue:this,type:e,from:"detail",order:this.order,code:this.code.value})},onLoadMap:function(){var e=this;Object(o.a)().then(function(t){e.map=new t.Map("map-container",{resizeEnable:!0,center:[e.config.map.location_y,e.config.map.location_x],zoom:13}),t.plugin("AMap.Driving",function(){var r=new t.Driving({policy:t.DrivingPolicy.LEAST_TIME,map:e.map,hideMarkers:!0}),a={},i=[],s=[e.deliveryer.location_y,e.deliveryer.location_x],d=[e.order.buy_location_y,e.order.buy_location_x],o=[e.order.accept_location_y,e.order.accept_location_x];a=new t.Marker({position:s,offset:new t.Pixel(-13,-31),content:'<div class="marker-start-route"></div>'}),i.push(a),a=new t.Marker({position:o,offset:new t.Pixel(-13,-31),content:'<div class="marker-end-route"></div>'}),i.push(a),a=new t.Marker({position:d,offset:new t.Pixel(-13,-31),content:'<div class="marker-pass-route"></div>'}),i.push(a),r.search(s,o,{waypoints:[d]},function(e,t){"complete"===e?console.log("绘制驾车路线完成"):console.log("获取驾车数据失败："+t)}),e.map.add(i),e.map.setFitView()})})},onSetMapZoom:function(){var e=this.map.getZoom();e++,this.map.setZoomAndCenter(e)}},created:function(){this.query=this.$route.query,this.query&&this.query.id&&(this.id=this.query.id)},mounted:function(){this.onLoad()}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"paotui-detail"}},[r("public-header",{attrs:{title:"跑腿订单详情"}}),e._v(" "),r("div",{staticClass:"content font-14"},[r("div",{attrs:{id:"map-container"}}),e._v(" "),r("div",{staticClass:"tip"},[e._v("跑腿订单配送")]),e._v(" "),r("div",{staticClass:"bg-default"},[r("div",{staticClass:"flex-lr padding-10-lr padding-15-tb van-hairline--bottom"},[r("div",{staticClass:"c-primary font-500"},[e._v("#"+e._s(e.order.id))]),e._v(" "),2==e.order.status?r("div",{staticClass:"c-danger flex"},[e.order.delivery_overtime>0?[e._v("\n\t\t\t\t\t\t距超时"),r("count-down",{staticClass:"c-danger",attrs:{endTime:e.order.delivery_overtime}})]:e.order.delivery_overtime_start>0?[e._v("\n\t\t\t\t\t\t已超时"),r("count-down",{staticClass:"c-danger",attrs:{startTime:e.order.delivery_overtime_start}})]:e._e()],2):e._e()]),e._v(" "),r("div",{staticClass:"flex padding-10-lr padding-15-tb van-hairline--bottom"},[r("span",{staticClass:"handle-type"},[e._v(e._s(e.order.delivery_collect_type_cn))]),e._v(" "),r("span",{staticClass:"delivery-time"},[e._v("配送 "+e._s(e.order.delivery_time))])]),e._v(" "),r("ul",{staticClass:"address padding-10-lr",attrs:{"margin-15-t":""}},[r("li",{staticClass:"flex-lr margin-15-t"},[r("ul",{staticClass:"address-text buy-text"},[r("li",{staticClass:"font-15 font-500"},[e._v(e._s(e.order.buy_address))]),e._v(" "),e.order.buy_username?r("li",{staticClass:"c-gray margin-5-t font-13"},[e._v(e._s(e.order.buy_username)+" "+e._s(e.order.buy_mobile))]):e._e()]),e._v(" "),e.order.buy_location_x&&e.order.buy_location_y?r("i",{staticClass:"icon icon-locationfill",on:{click:function(t){e.util.jsLocation({lat:e.order.buy_location_x,lng:e.order.buy_location_y,address:e.order.buy_address,type:"app"})}}}):e._e()]),e._v(" "),r("li",{staticClass:"flex-lr margin-15-t"},[r("ul",{staticClass:"address-text accept-text"},[r("li",{staticClass:"font-15 font-500 "},[e._v(e._s(e.order.accept_address))]),e._v(" "),r("li",{staticClass:"c-gray margin-5-t font-13"},[e._v(e._s(e.order.accept_username)+" "+e._s(e.order.accept_mobile))])]),e._v(" "),e.order.accept_location_x&&e.order.accept_location_y?r("i",{staticClass:"icon icon-locationfill",on:{click:function(t){e.util.jsLocation({lat:e.order.accept_location_x,lng:e.order.accept_location_y,address:e.order.accept_address,type:"app"})}}}):e._e()])]),e._v(" "),r("div",{staticClass:"tel-group padding-10-lr padding-15-tb van-hairline--top margin-15-t flex-lr"},[e.order.buy_mobile?r("div",{staticClass:"tel-item flex van-hairline--right",on:{click:function(t){e.util.jsTel(e.order.buy_mobile)}}},[e._m(0),e._v(" "),r("span",[e._v(e._s(e.order.buy_mobile))])]):e._e(),e._v(" "),r("div",{staticClass:"tel-item flex",on:{click:function(t){e.util.jsTel(e.order.accept_mobile)}}},[e._m(1),e._v(" "),r("span",[e._v(e._s(e.order.accept_mobile))])])])]),e._v(" "),r("div",{staticClass:"tip"},[e._v("货品信息")]),e._v(" "),r("div",{staticClass:"goods-info bg-default"},[e.order.note?r("div",{staticClass:"note"},[r("div",{staticClass:"note-title"},[e._v("备注:")]),e._v(" "),r("div",{staticClass:"note-text"},[e._v(e._s(e.order.note))])]):e._e(),e._v(" "),r("div",{staticClass:"padding-15-b padding-5-t padding-10-lr van-hairline--bottom"},[r("ul",{staticClass:"margin-10-t c-gray flex-lr"},[r("li",[e._v("物品名称")]),e._v(" "),r("li",[e._v(e._s(e.order.goods_name))])]),e._v(" "),e.order.box_price>0?r("ul",{staticClass:"margin-10-t c-gray flex-lr"},[r("li",[e._v("物品预期价格")]),e._v(" "),r("li",[e._v("¥"+e._s(e.order.goods_price))])]):e._e(),e._v(" "),e.order.goods_weight>0?r("ul",{staticClass:"margin-10-t c-gray flex-lr"},[r("li",[e._v("物品重量")]),e._v(" "),r("li",[e._v(e._s(e.order.goods_weight)+"公斤")])]):e._e(),e._v(" "),e.order.data&&e.order.data.order.partData?e._l(e.order.data.order.partData,function(t,a){return r("ul",{staticClass:"margin-10-t c-gray flex-lr"},["multipleChoices"!=t.type?[r("li",[e._v(e._s(t.title))]),e._v(" "),r("li",[e._v(e._s(t.value))])]:[r("li",[e._v(e._s(t.title))]),e._v(" "),r("li",[e._l(t.value,function(t){return[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(" "+t)+"\n\t\t\t\t\t\t\t\t")]})],2)]],2)}):e._e()],2),e._v(" "),1==e.order.is_pay?r("div",["delivery"!=e.order.pay_type?r("div",{staticClass:"have-pay"}):"delivery"==e.order.pay_type?r("div",{staticClass:"delivery-pay"}):e._e()]):e._e()]),e._v(" "),e.order.thumbs&&e.order.thumbs.length>0?[r("div",{staticClass:"tip"},[e._v("顾客上传的图片")]),e._v(" "),r("div",{staticClass:"goods-imgs padding-10-lr padding-15-t padding-5-b bg-default"},[r("van-row",{attrs:{gutter:"10"}},e._l(e.order.thumbs,function(t,a){return r("van-col",{key:a,attrs:{span:"6"}},[r("div",{staticClass:"img-wrap",on:{click:function(t){e.util.jsPreviewImage(e.order.thumbs,a)}}},[r("img",{staticClass:"wh-100",attrs:{src:t,alt:""}})])])}))],1)]:e._e(),e._v(" "),e._l(e.order.data.order.thumbs,function(t){return e.order.data&&e.order.data.order&&e.order.data.order.thumbs?[r("div",{staticClass:"tip"},[e._v(e._s(t.title))]),e._v(" "),r("div",{staticClass:"goods-imgs padding-10-lr padding-15-t padding-5-b bg-default"},[r("van-row",{attrs:{gutter:"10"}},e._l(t.value,function(a,i){return r("van-col",{key:i,attrs:{span:"6"}},[r("div",{staticClass:"img-wrap",on:{click:function(r){e.util.jsPreviewImage(t.value,i)}}},[r("img",{staticClass:"wh-100",attrs:{src:a,alt:""}})])])}))],1)]:e._e()}),e._v(" "),e.order.data&&e.order.data.order&&e.order.data.order.extra_fee?[r("div",{staticClass:"tip"},[e._v("附加服务")]),e._v(" "),r("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},e._l(e.order.data.order.extra_fee,function(t,a){return r("ul",{key:a,staticClass:"margin-10-t flex-lr"},[r("li",[e._v(e._s(t.title))]),e._v(" "),r("li",[e._l(t.value,function(t){return[e._v("\n\t\t\t\t\t\t\t"+e._s(" "+t.name)+"\n\t\t\t\t\t\t")]})],2)])}))]:e._e(),e._v(" "),r("div",{staticClass:"tip"},[e._v("订单信息")]),e._v(" "),r("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},[r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[e._v("订单编号")]),e._v(" "),r("li",[e._v(e._s(e.order.order_sn))])]),e._v(" "),r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[e._v("下单时间")]),e._v(" "),r("li",[e._v(e._s(e.order.addtime_cn))])]),e._v(" "),r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[e._v("付款方式")]),e._v(" "),r("li",[e._v(e._s(e.order.pay_type_cn))])])]),e._v(" "),r("div",{staticClass:"tip"},[e._v("订单收入")]),e._v(" "),r("div",{staticClass:"bg-default padding-10-lr padding-5-t padding-15-b"},[r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[e._v("配送费")]),e._v(" "),r("li",[e._v("¥"+e._s(e.order.deliveryer_fee))])]),e._v(" "),e.order.delivery_tips>0?r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[e._v("小费")]),e._v(" "),r("li",[e._v("¥"+e._s(e.order.delivery_tips))])]):e._e(),e._v(" "),r("ul",{staticClass:"margin-10-t flex-lr"},[r("li",[e._v("本单收入")]),e._v(" "),r("li",[e._v("¥"+e._s(e.order.deliveryer_total_fee))])])]),e._v(" "),r("div",{staticClass:"btn-group padding-10-lr padding-15-t padding-5-b"},[r("van-row",{attrs:{gutter:"10"}},[e.order.transfer_deliveryer_id==e.deliveryer.id&&1==e.order.transfer_delivery_status?[r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-danger",on:{click:function(t){e.onChangeOrderStatus("direct_transfer_refuse")}}},[e._v("拒绝转单")])]),e._v(" "),r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(t){e.onChangeOrderStatus("direct_transfer_agree")}}},[e._v("接受转单")])])]:e.deliveryer.id==e.order.deliveryer_id?[3==e.order.delivery_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(t){e.onChangeOrderStatus("delivery_success")}}},[e._v("确认送达")])]):e._e(),e._v(" "),2==e.order.delivery_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(t){e.onChangeOrderStatus("delivery_instore")}}},[e._v("确认取货")])]):e._e(),e._v(" "),1==e.order.deliveryer_transfer_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-primary",on:{click:function(t){e.onChangeOrderStatus("delivery_transfer")}}},[e._v("申请转单")])]):e._e(),e._v(" "),1==e.order.deliveryer_transfer_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-danger",on:{click:function(t){e.onChangeOrderStatus("direct_transfer")}}},[e._v("定向转单")])]):e._e(),e._v(" "),1==e.order.deliveryer_cancel_status?r("van-col",{attrs:{span:"8"}},[r("div",{staticClass:"btn-item bg-danger",on:{click:function(t){e.onChangeOrderStatus("cancel")}}},[e._v("取消订单")])]):e._e()]:e._e()],2)],1)],2),e._v(" "),e.showPreLoading?r("iloading"):e._e(),e._v(" "),r("van-dialog",{attrs:{"show-cancel-button":"",confirmButtonText:"确认送达"},on:{confirm:function(t){e.onChangeOrderStatus("delivery_success")},cancel:function(t){e.code.codeShow=!1}},model:{value:e.code.codeShow,callback:function(t){e.$set(e.code,"codeShow",t)},expression:"code.codeShow"}},[r("van-field",{attrs:{placeholder:"输入收货码","input-align":"center",readonly:""}}),e._v(" "),r("van-field",{attrs:{placeholder:"请输入收货码"},model:{value:e.code.value,callback:function(t){e.$set(e.code,"value",t)},expression:"code.value"}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"img-wrap"},[t("img",{staticClass:"w-100",attrs:{src:"static/img/store.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"img-wrap"},[t("img",{staticClass:"w-100",attrs:{src:"static/img/customer.png",alt:""}})])}]};var c=r("VU/8")(n,l,!1,function(e){r("9bqm")},null,null);t.default=c.exports}});