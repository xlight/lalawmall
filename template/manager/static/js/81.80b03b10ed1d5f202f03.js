webpackJsonp([81],{"P3e+":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("woOf"),e=a.n(i),n=a("Cz8s"),o=a("mzkE"),d=a("deIj"),r=a("nZVv"),l={components:{publicHeader:n.a,publicFooter:o.a},data:function(){return{isRefresh:!1,filter:{items:{status:"1"}},showPreLoading:!0,records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},store:{},menufooter:{}}},methods:{onUpdateOrderStatus:function(t,s){Object(r.b)({vue:this,type:s,index:t,order:this.records.data[t]})},onLoad:function(t){var s=this;Object(d.b)({vue:s,force:t,url:"manage/order/tangshi/list",data:{menufooter:1},recordsName:"orders",success:function(t){s.isRefresh=!1}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad(!0))},onToggleGoodsShow:function(t){var s=this;this.$nextTick().then(function(){s.records.data[t].showGoods=!s.records.data[t].showGoods,s.records=e()({},s.records)})}},mounted:function(){this.onLoad(),this.util.imap(),this.util.icloudapi()},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.filter.items.status=this.query.status)}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"order-tangshi-list"}},[a("public-header",{attrs:{title:"店内订单管理"}}),t._v(" "),a("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"tabs flex-lr"},[a("div",{staticClass:"tabs-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[a("div",{staticClass:"mark"},[t._v("新")]),t._v(" "),a("div",{staticClass:"title"},[t._v("待确认")])]),t._v(" "),a("div",{staticClass:"tabs-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[a("div",{staticClass:"mark"},[t._v("接")]),t._v(" "),a("div",{staticClass:"title"},[t._v("已确认")])]),t._v(" "),a("div",{staticClass:"tabs-item",class:{active:5==t.filter.items.status},on:{click:function(s){t.onToggleStatus(5)}}},[a("div",{staticClass:"mark"},[t._v("完")]),t._v(" "),a("div",{staticClass:"title"},[t._v("已完成")])])]),t._v(" "),a("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("暂无数据")])]):a("van-list",{staticClass:"order-list padding-10 ",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},t._l(t.records.data,function(s,i){return a("div",{key:s.id,staticClass:"order-item bg-default font-14 margin-10-t"},[a("div",{staticClass:"order-nt bg-gray flex-lr padding-10-tb padding-10-r "},[a("div",{staticClass:"number-time flex"},[a("div",{staticClass:"number"},[t._v(t._s(s.serial_sn))]),t._v(" "),a("div",{staticClass:"c-info"},[t._v(t._s(s.addtime_cn))])]),t._v(" "),a("div",[t._v(t._s(s.order_status_cn))])]),t._v(" "),a("div",{staticClass:"padding-10-lr padding-5-b"},[a("div",{staticClass:"flex-lr padding-10-t"},[3==s.order_type?[a("div",{staticClass:"font-bold font-18"},[t._v("用餐信息："),a("span",{staticClass:"font-16"},[t._v(t._s(s.table_sn)+"号桌,"+t._s(s.person_num)+"人就餐")])]),t._v(" "),a("div",{staticClass:"order-type bg-danger"},[t._v("扫码点餐")])]:t._e(),t._v(" "),4==s.order_type?[a("div",{staticClass:"font-bold font-18"},[t._v("用餐信息："),a("span",{staticClass:"font-16"},[t._v(t._s(s.table_category_title)+" "+t._s(s.reserve_type_cn))])]),t._v(" "),4==s.order_type?a("div",{staticClass:"order-type bg-warning"},[t._v("预点餐")]):t._e()]:t._e()],2),t._v(" "),s.mobile?a("div",{staticClass:"flex c-info margin-5-t",on:{click:function(a){t.util.jsTel(s.mobile)}}},[a("div",{staticClass:"icon icon-telephone"}),t._v(" "),a("div",{staticClass:"margin-5-l"},[t._v(t._s(s.mobile))])]):t._e()]),t._v(" "),a("div",{staticClass:"divide"},[a("div",{staticClass:"divide-line"})]),t._v(" "),a("div",{staticClass:"goods-info "},[a("div",{staticClass:"flex-lr padding-10-lr padding-5-t padding-10-b"},[a("div",{staticClass:"font-18 font-bold"},[t._v("商品")]),t._v(" "),a("div",{staticClass:"c-info flex goods-show",on:{click:function(s){t.onToggleGoodsShow(i)}}},[a("span",{staticClass:"margin-5-r"},[t._v("展开")]),t._v(" "),a("i",{staticClass:"icon icon-arrow-down"})])]),t._v(" "),s.showGoods?[a("van-row",{staticClass:"padding-10 "},[a("van-col",{staticClass:"c-danger",attrs:{span:"3"}},[t._v("备注:")]),t._v(" "),a("van-col",{staticClass:"line-12",attrs:{span:"21"}},[t._v(t._s(s.note?s.note:"无"))])],1),t._v(" "),a("div",{staticClass:"goods-list"},t._l(s.goods,function(s){return a("van-row",{key:s.goods_id,staticClass:"goods-item"},[a("van-col",{attrs:{span:"16"}},[t._v(t._s(s.goods_title))]),t._v(" "),a("van-col",{staticClass:"c-danger",attrs:{span:"4"}},[t._v("x"+t._s(s.goods_num))]),t._v(" "),a("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v(t._s(t.Lang.dollarSign)+t._s(s.goods_price))])],1)}))]:t._e(),t._v(" "),a("div",{staticClass:"padding-10-lr padding-10-t padding-5-b"},[a("div",{staticClass:"flex-lr "},[a("div",{staticClass:"font-18 font-bold"},[t._v("本单预计收入")]),t._v(" "),a("div",{staticClass:"font-16 c-danger font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.store_final_fee))])]),t._v(" "),3==s.order_type?a("div",{staticClass:"margin-10-t flex"},[a("span",{staticClass:"c-gray"},[t._v(t._s(s.table_sn)+"号桌,"+t._s(s.person_num)+"人就餐")])]):t._e(),t._v(" "),a("div",{staticClass:"margin-10-t flex"},[a("span",{staticClass:"c-gray margin-10-r"},[t._v("本单顾客实际支付:")]),t._v(" "),a("span",{staticClass:"c-danger"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.final_fee))])])])],2),t._v(" "),a("div",{staticClass:"divide"},[a("div",{staticClass:"divide-line"})]),t._v(" "),a("div",{staticClass:" action"},[1==s.status?[a("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(i,"handle")}}},[t._v("确认")])]:2==s.status?[a("div",{staticClass:"action-item bg-info",on:{click:function(s){t.onUpdateOrderStatus(i,"end")}}},[t._v("完成")])]:t._e(),t._v(" "),1==s.is_pay&&"delivery"!=s.pay_type?[a("div",{staticClass:"action-item bg-danger",on:{click:function(s){t.onUpdateOrderStatus(i,"cancel_refund")}}},[t._v("取消并退款")])]:[a("div",{staticClass:"action-item bg-danger",on:{click:function(s){t.onUpdateOrderStatus(i,"cancel")}}},[t._v("取消")])],t._v(" "),0==s.is_pay?a("div",{staticClass:"action-item bg-danger",on:{click:function(s){t.onUpdateOrderStatus(i,"pay_status")}}},[t._v("设为已支付")]):t._e(),t._v(" "),a("router-link",{staticClass:"action-item",attrs:{tag:"div",to:t.util.getUrl({path:"pages/order/detail",query:{id:s.id}})}},[t._v("详情")])],2),t._v(" "),1==s.is_pay&&"delivery"!=s.pay_type?a("div",{staticClass:"pay-status have-pay"}):t._e()])}))],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var v=a("VU/8")(l,c,!1,function(t){a("fFEL")},null,null);s.default=v.exports},fFEL:function(t,s){}});
//# sourceMappingURL=81.80b03b10ed1d5f202f03.js.map