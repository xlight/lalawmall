webpackJsonp([67],{L5wW:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Dd8w"),n=e.n(s),r=e("NYxO"),_=e("Cz8s"),o=e("deIj"),v={components:{publicHeader:_.a},data:function(){return{showPreLoading:!0,stat:{},detail:[]}},methods:{onLoad:function(){var t=this;Object(o.a)({vue:this,data:{detail:1,filter:t.filter?t.filter.items:{}},url:"plateform/statcenter/delivery/day",success:function(a){t.stat=a.stat,t.detail=a.detail}})}},computed:n()({},Object(r.c)(["filter"])),mounted:function(){this.onLoad()}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"statcenter-delivery-day"}},[e("public-header",{attrs:{title:"配送详情"}}),t._v(" "),e("div",{staticClass:"content padding-15 font-14 "},[e("van-row",{staticClass:"c-gray"},[e("van-col",{staticClass:"padding-10-tb",attrs:{span:"5"}},[t._v("配送员")]),t._v(" "),e("van-col",{staticClass:"padding-10-tb",attrs:{span:"4"}},[t._v("总配送")]),t._v(" "),e("van-col",{staticClass:"padding-10-tb",attrs:{span:"8"}},[t._v("普通单"),e("br"),t._v("平均配送时长（分）")]),t._v(" "),e("van-col",{staticClass:"padding-10-tb",attrs:{span:"7"}},[t._v("超时单"),e("br"),t._v("超时率")]),t._v(" "),t._e()],1),t._v(" "),e("van-row",[e("van-col",{attrs:{span:"5"}},[t._v("总计")]),t._v(" "),e("van-col",{attrs:{span:"4"}},[t._v(t._s(t.stat.total_success_order))]),t._v(" "),e("van-col",{attrs:{span:"8"}},[t._v(t._s(t.stat.total_normal_order+"/"+t.stat.avg_normal_delivery_time))]),t._v(" "),e("van-col",{attrs:{span:"7"}},[t._v(t._s(t.stat.total_timeout_order+"/"+t.stat.percent_timeout+"%"))]),t._v(" "),t._e()],1),t._v(" "),t._l(t.detail,function(a,s){return t.detail?e("van-row",{key:s},[e("van-col",{attrs:{span:"5"}},[t._v(t._s(a.title))]),t._v(" "),e("van-col",{attrs:{span:"4"}},[t._v(t._s(a.total_success_order))]),t._v(" "),e("van-col",{attrs:{span:"8"}},[t._v(t._s(a.total_normal_order+"/"+a.avg_normal_delivery_time))]),t._v(" "),e("van-col",{attrs:{span:"7"}},[t._v(t._s(a.total_timeout_order+"/"+a.percent_timeout+"%"))]),t._v(" "),t._e()],1):t._e()})],2),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var l=e("VU/8")(v,i,!1,function(t){e("M7JL")},"data-v-3c567f58",null);a.default=l.exports},M7JL:function(t,a){}});