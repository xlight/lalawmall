webpackJsonp([56],{hKO3:function(t,a){},oh6c:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("Dd8w"),e=s.n(n),r=s("NYxO"),_=s("Cz8s"),o=s("deIj"),v={components:{publicHeader:_.a},data:function(){return{showPreLoading:!0,stat:{},detail:[]}},methods:{onLoad:function(){var t=this;Object(o.a)({vue:this,data:{detail:1,filter:t.filter?t.filter.items:{}},url:"plateform/statcenter/takeout/takeout",success:function(a){t.detail=a.detail,t.stat=a.stat}})}},computed:e()({},Object(r.c)(["filter"])),mounted:function(){this.onLoad()}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"statcenter-current"}},[s("public-header",{attrs:{title:"详情"}}),t._v(" "),s("div",{staticClass:"content padding-15"},[s("van-row",{staticClass:"c-gray flex-lr font-15"},[s("van-col",{staticClass:"padding-10-tb",attrs:{span:"6"}},[t._v("账期")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}},[t._v("已完成 "),s("br"),t._v("单数")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}},[t._v("总营业额")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("总入账")]),t._v(" "),s("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("总退款")])],1),t._v(" "),s("van-row",[s("van-col",{attrs:{span:"6"}},[t._v("总计")]),t._v(" "),s("van-col",{attrs:{span:"5"}},[t._v(t._s(t.stat.total_success_order))]),t._v(" "),s("van-col",{attrs:{span:"5"}},[t._v(t._s(t.stat.total_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.total_final_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.total_refund_fee))])],1),t._v(" "),t._l(t.detail,function(a,n){return t.detail?s("van-row",{key:n},[s("van-col",{attrs:{span:"6"}},[t._v(t._s(a.stat_day))]),t._v(" "),s("van-col",{attrs:{span:"5"}},[t._v(t._s(a.total_success_order))]),t._v(" "),s("van-col",{attrs:{span:"5"}},[t._v(t._s(a.total_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.final_fee))]),t._v(" "),s("van-col",{attrs:{span:"4"}},[t._v(t._s(a.refund_fee))])],1):t._e()})],2),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=s("VU/8")(v,c,!1,function(t){s("hKO3")},"data-v-54cc1833",null);a.default=l.exports}});