webpackJsonp([93],{"9dO1":function(t,a){},fqqz:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Dd8w"),n=s.n(e),r=s("NYxO"),v=s("Cz8s"),_=s("deIj"),o={components:{publicHeader:v.a},data:function(){return{showPreLoading:!0,stat:{},detail:[],deliveryer:{}}},methods:{onLoad:function(){var t=this;Object(_.a)({vue:this,data:{detail:1,filter:t.filter?t.filter.items:{}},url:"plateform/statcenter/delivery/index",success:function(a){t.stat=a.stat,t.detail=a.detail,t.deliveryer=a.deliveryer}})}},computed:n()({},Object(r.c)(["filter"])),mounted:function(){this.onLoad()}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"statcenter-delivery-index"}},[s("public-header",{attrs:{title:"配送统计"}}),t._v(" "),s("div",{staticClass:"content padding-15 font-14 "},[s("van-row",{staticClass:"c-gray"},[s("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}},[t._v("日期")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"3"}},[t._v("总配送")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("普通订单")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("超时订单")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("平均配送时长(分)")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("配送超时率")])],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"5"}},[t._v("总计")]),t._v(" "),s("van-col",{attrs:{span:"3"}},[t._v(t._s(t.stat.total_success_order))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.total_normal_order))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.total_timeout_order))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.avg_normal_delivery_time))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.percent_timeout+"%"))])],1),t._v(" "),t._l(t.detail,function(a,e){return t.detail?s("van-row",{key:e},[s("van-col",{attrs:{span:"5"}},[t._v(t._s(a.stat_day))]),t._v(" "),s("van-col",{attrs:{span:"3"}},[t._v(t._s(a.total_success_order))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.total_normal_order))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.total_timeout_order))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.avg_normal_delivery_time))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.percent_timeout+"%"))])],1):t._e()})],2),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=s("VU/8")(o,i,!1,function(t){s("9dO1")},"data-v-04133eea",null);a.default=l.exports}});
//# sourceMappingURL=93.520e74b19dea4e6b5f11.js.map