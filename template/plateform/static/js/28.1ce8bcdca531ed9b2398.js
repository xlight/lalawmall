webpackJsonp([28],{h7JV:function(e,t){},ws8Y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Cz8s"),s=a("deIj"),l={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},filter:{items:{type:"exchangeRedpacket"}},isRefresh:!1,showPreLoading:!0}},components:{publicHeader:i.a},methods:{onLoad:function(e){Object(s.b)({vue:this,force:e,url:"plateform/mealRedpacket/order"})},onToggleType:function(e){this.filter.items.type!=e&&(this.filter.items.type=e)},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(e,t){this.onLoad(!0)},deep:!0}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"mealRedpacket-order"}},[a("public-header",{attrs:{title:"套餐红包购买记录"}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search wrap-search-input"},[a("div",{staticClass:"tab-group flex-lr border-1px-b"},[a("div",{staticClass:"tab-item",class:{active:"exchangeRedpacket"==e.filter.items.type},on:{click:function(t){e.onToggleType("exchangeRedpacket")}}},[e._v("红包套餐")]),e._v(" "),a("div",{staticClass:"tab-item",class:{active:"mealRedpacket"==e.filter.items.type},on:{click:function(t){e.onToggleType("mealRedpacket")}}},[e._v("红包套餐plus")])]),e._v(" "),a("van-search",{attrs:{placeholder:"请输入用户姓名"},model:{value:e.filter.items.keyword,callback:function(t){e.$set(e.filter.items,"keyword",t)},expression:"filter.items.keyword"}})],1),e._v(" "),a("van-pull-refresh",{on:{refresh:function(t){e.onPullDownRefresh()}},model:{value:e.isRefresh,callback:function(t){e.isRefresh=t},expression:"isRefresh"}},[e.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),a("p",[e._v("没有符合条件的数据!")])]):a("van-list",{staticClass:"redpacket-list",attrs:{finished:e.records.finished,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.records.loading,callback:function(t){e.$set(e.records,"loading",t)},expression:"records.loading"}},[e._l(e.records.data,function(t,i){return a("div",{key:t.id,staticClass:"redpacket-item margin-10-b"},[a("div",{staticClass:"item-title flex-lr"},[a("div",{staticClass:"title flex"},[a("div",{staticClass:"title-img"},[a("img",{attrs:{src:t.avatar,alt:""}})]),e._v(" "),a("div",{staticClass:"title-name"},[e._v(e._s(t.nickname))]),e._v(" "),a("div",{staticClass:"c-gray font-15"},[e._v("UID: "+e._s(t.uid))])]),e._v(" "),"exchangeRedpacket"==t.type?a("div",{staticClass:"itag",class:{"itag-primary":"exchangeRedpacket"==t.type}},[e._v("红包套餐")]):"mealRedpacket"==t.type?a("div",{staticClass:"itag",class:{"itag-info":"mealRedpacket"==t.type}},[e._v("红包套餐plus")]):e._e()]),e._v(" "),a("div",{staticClass:"order-detail border-1px-t"},[a("div",{staticClass:"order-info flex"},[a("div",[e._v("购买费用：")]),e._v(" "),a("div",{staticClass:"c-danger"},[e._v("¥"+e._s(t.final_fee)+" "),a("div",{staticClass:"gift-type itag itag-danger"},[e._v(e._s(t.pay_type_cn))])])]),e._v(" "),a("div",{staticClass:"order-info flex"},[a("div",[e._v("购买时间：")]),e._v(" "),a("div",[e._v(e._s(t.addtime_cn))])]),e._v(" "),a("div",{staticClass:"order-info flex"},[a("div",[e._v("订单号：")]),e._v(" "),a("div",[e._v(e._s(t.order_sn))])])]),e._v(" "),a("div",{staticClass:"border-1px-t btn-group"},[a("router-link",{staticClass:"btn-item bg-default",attrs:{tag:"div",to:e.util.getUrl({path:"/pages/plugin/mealRedpacket/list",query:{id:t.id}})}},[e._v("查看红包信息")])],1)])}),e._v(" "),e.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[e._v("没有更多了")])]):e._e()],2)],1)],1),e._v(" "),e.showPreLoading?a("iloading"):e._e()],1)},staticRenderFns:[]};var d=a("VU/8")(l,r,!1,function(e){a("h7JV")},null,null);t.default=d.exports}});
//# sourceMappingURL=28.1ce8bcdca531ed9b2398.js.map