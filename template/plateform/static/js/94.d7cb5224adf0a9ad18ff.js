webpackJsonp([94],{fzJp:function(e,s){},nVP0:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("Cz8s"),i=a("deIj"),r={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0,filter:{items:{}}}},components:{publicHeader:t.a},methods:{onLoad:function(e){Object(i.b)({vue:this,force:e,url:"plateform/member/recharge/list"})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(e,s){this.onLoad(!0)},deep:!0}}},d={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{attrs:{id:"member-recharge"}},[a("public-header",{attrs:{title:"顾客充值明细"}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search wrap-search-notab"},[a("van-search",{attrs:{placeholder:"请输入顾客姓名/UID"},model:{value:e.filter.items.keyword,callback:function(s){e.$set(e.filter.items,"keyword",s)},expression:"filter.items.keyword"}})],1),e._v(" "),a("van-pull-refresh",{on:{refresh:function(s){e.onPullDownRefresh()}},model:{value:e.isRefresh,callback:function(s){e.isRefresh=s},expression:"isRefresh"}},[e.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),a("p",[e._v("没有符合条件的数据!")])]):a("van-list",{staticClass:"recharge-list",attrs:{finished:e.records.finished,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.records.loading,callback:function(s){e.$set(e.records,"loading",s)},expression:"records.loading"}},[e._l(e.records.data,function(s,t){return a("div",{key:s.id,staticClass:"recharge-item"},[a("div",{staticClass:"padding-10 flex-lr"},[a("div",{staticClass:"recharge-title flex ellipsis"},[a("div",{staticClass:"recharge-img"},[a("img",{attrs:{src:s.avatar,alt:""}})]),e._v(" "),a("div",{staticClass:"recharge-name"},[e._v(e._s(s.realname))]),e._v(" "),a("div",{staticClass:"c-gray font-15"},[e._v("uid: "+e._s(s.uid))])]),e._v(" "),"wechat"==s.pay_type?a("div",{staticClass:"itag itag-primary"},[e._v("微信")]):e._e(),e._v(" "),"alipay"==s.pay_type?a("div",{staticClass:"itag itag-info"},[e._v("支付宝")]):e._e()]),e._v(" "),a("div",{staticClass:"border-1px-t padding-10"},[a("div",{staticClass:"recharge-info flex"},[a("div",[e._v("充值金额：")]),e._v(" "),a("div",{staticClass:"c-danger"},[e._v("￥"+e._s(s.fee))])]),e._v(" "),a("div",{staticClass:"recharge-info flex"},[a("div",[e._v("充值时间：")]),e._v(" "),a("div",[e._v(e._s(s.addtime_cn))])]),e._v(" "),a("div",{staticClass:"recharge-info flex"},[a("div",[e._v("充值单号：")]),e._v(" "),a("div",[e._v(e._s(s.order_sn))])])])])}),e._v(" "),e.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[e._v("没有更多了")])]):e._e()],2)],1)],1),e._v(" "),e.showPreLoading?a("iloading"):e._e()],1)},staticRenderFns:[]};var n=a("VU/8")(r,d,!1,function(e){a("fzJp")},null,null);s.default=n.exports}});
//# sourceMappingURL=94.d7cb5224adf0a9ad18ff.js.map