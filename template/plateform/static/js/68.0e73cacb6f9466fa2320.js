webpackJsonp([68],{"593/":function(a,t){},H65D:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),v=s.n(n),r=s("NYxO"),_=s("Cz8s"),e=s("deIj"),c={components:{publicHeader:_.a},data:function(){return{showPreLoading:!0,stat:{},detail:[]}},methods:{onLoad:function(){var a=this;Object(e.a)({vue:this,data:{detail:1,filter:a.filter?a.filter.items:{}},url:"plateform/statcenter/paytype/index",success:function(t){a.detail=t.detail,a.stat=t.stat}})}},computed:v()({},Object(r.c)(["filter"])),mounted:function(){this.onLoad()}},i={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"statcenter-paytype-detail"}},[s("public-header",{attrs:{title:"详情"}}),a._v(" "),s("div",{staticClass:"content padding-15 font-14 "},[s("van-row",{staticClass:"c-gray"},[s("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}},[a._v("账期")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"3"}},[a._v("总单数")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("货到付款")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("余额支付")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("微信支付")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("支付宝")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}}),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"3"}}),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("单数/占比/")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("单数/占比")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("单数/占比/")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("单数/占比/")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}}),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"3"}}),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("成交金额")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("成交金额")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("成交金额")]),a._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[a._v("成交金额")])],1),a._v(" "),a._e(),a._v(" "),a._l(a.detail,function(t,n){return a.detail?s("van-row",{key:n},[s("van-col",{attrs:{span:"5"}},[a._v(a._s(t.stat_day))]),a._v(" "),s("van-col",{attrs:{span:"3"}},[a._v(a._s(t.total_success_order))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v(a._s(t.order_delivery+"/"+t.pre_order_delivery+"%"))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v(a._s(t.order_credit+"/"+t.pre_order_credit+"%"))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v(a._s(t.order_wechat+"/"+t.pre_order_wechat+"%"))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v(a._s(t.order_alipay+"/"+t.pre_order_alipay+"%"))]),a._v(" "),s("van-col",{attrs:{span:"5"}}),a._v(" "),s("van-col",{attrs:{span:"3"}}),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v("￥"+a._s(t.sum_delivery))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v("￥"+a._s(t.sum_credit))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v("￥"+a._s(t.sum_wechat))]),a._v(" "),s("van-col",{attrs:{span:"4"}},[a._v("￥"+a._s(t.sum_alipay))])],1):a._e()})],2),a._v(" "),a.showPreLoading?s("iloading"):a._e()],1)},staticRenderFns:[]};var d=s("VU/8")(c,i,!1,function(a){s("593/")},"data-v-3d2cac7c",null);t.default=d.exports}});