webpackJsonp([51],{G03c:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Gu7T"),i=o.n(r),a=o("woOf"),n=o.n(a),c=o("Cz8s"),s=o("Yo4o"),d=o("deIj"),l={components:{publicHeader:c.a},data:function(){return{id:0,order:{},deliveryer:[],showPreLoading:!0}},methods:{onLoad:function(e){var t=this;e&&(t.deliveryer=[]),Object(d.a)({vue:t,url:"plateform/errander/order/dispatch",data:{id:t.id},success:function(e){t.order=n()(t.order,e.order),t.deliveryer=[].concat(i()(t.deliveryer),i()(e.deliveryer)),t.onLoadMap()}})},onLoadMap:function(){var e=this;Object(s.a)().then(function(t){for(var o=new t.Map("map-container",{resizeEnable:!0,zoom:12}),r={},i=[],a=e.deliveryer,n="",c=0;c<a.length;c++)a[c].location_x&&a[c].location_y&&(n='<div class="deliveryer-item '+a[c].css+'"><div class="deliveryer-info flex-lr" id="deliveryer-info"><span class="deliveryer-name">'+a[c].title+'</span><span class="delivery-times-info"><span class="wait-pickup">'+a[c].order_takeout_num+'</span> / <span class="wait-delivery">'+a[c].order_errander_num+'</span></span><span class="icon icon-attention hide"></span></div><img class="location-dot" src="static/img/location_dot.png"></div>',(r=new t.Marker({position:new t.LngLat(a[c].location_y,a[c].location_x),content:n,extData:{index:c}})).on("click",function(t){var o=this.getExtData().index,r=e.deliveryer[o],i={url:"plateform/errander/order/dispatch",data:{dispatch:1,id:e.id,deliveryer_id:r.id},confirm:"确定将订单指派给"+r.title+"配送吗",success:function(t){e.util.$toast(t),e.$router.replace(e.util.getUrl({path:"/pages/plugin/paotui/list",query:{status:e.order.status}}))}};e.util.jspost(i)}),i.push(r));if(e.order.buy_location_y&&e.order.buy_location_x&&(r=new t.Marker({position:[e.order.buy_location_y,e.order.buy_location_x],offset:new t.Pixel(-19,-52),content:'<div class="marker-start-route"></div>'}),i.push(r)),e.order.accept_location_y&&e.order.accept_location_x&&(r=new t.Marker({position:[e.order.accept_location_y,e.order.accept_location_x],offset:new t.Pixel(-19,-52),content:'<div class="marker-end-route"></div>'}),i.push(r)),o.add(i),e.order.buy_location_y&&e.order.buy_location_x&&e.order.accept_location_y&&e.order.accept_location_x){var s=[[e.order.buy_location_y,e.order.buy_location_x],[e.order.accept_location_y,e.order.accept_location_x]];new t.Polyline({path:s,strokeColor:"#3366FF",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid",strokeDasharray:[10,5]}).setMap(o),o.setFitView(),new t.Driving({map:o,panel:"panel"}).search(new t.LngLat(e.order.buy_location_y,e.order.buy_location_x),new t.LngLat(e.order.accept_location_y,e.order.accept_location_x))}o.setFitView()})},onAlert:function(){this.$dialog.alert({message:'<p class="font-13">绿色标注代表配送员在线中且有未完成的订单;<br> 灰色标注代表配送员离线中(5分钟没有上传地址位置即视为离线); <br>红色标注代表配送员在线中且没有未完成的订单<br>凌晨5:00之前配送员手中订单包括前一天的订单数据，凌晨5:00之后则是当天的数据</p>'})}},created:function(){this.$route.query&&this.$route.query.id&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()}},u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"order-dispatch"}},[o("public-header",{attrs:{title:"订单调度"}}),e._v(" "),o("div",{staticClass:"content"},[o("div",{attrs:{id:"map-container"}}),e._v(" "),o("div",{staticClass:"icon icon-question1",on:{click:e.onAlert}}),e._v(" "),o("div",{staticClass:"icon icon-refresh",on:{click:function(t){e.onLoad(!0)}}})]),e._v(" "),e.showPreLoading?o("iloading"):e._e()],1)},staticRenderFns:[]};var p=o("VU/8")(l,u,!1,function(e){o("OR+J")},null,null);t.default=p.exports},"OR+J":function(e,t){}});