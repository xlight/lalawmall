webpackJsonp([35],{"0osR":function(t,a){},kPbf:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Gu7T"),n=e.n(s),i=e("Cz8s"),o=e("deIj"),c={components:{publicHeader:i.a},data:function(){return{timePicker:!1,minDate:new Date(2014,12,1),maxDate:new Date,currentDate:new Date,timeType:"",days:0,stat_day:{start:this.util.formatDate(new Date,"date"),end:this.util.formatDate(new Date,"date")},orderby:"total_goods_price",records:[],showPreLoading:!0}},methods:{onLoad:function(t){var a=this;t&&(this.records=[]),Object(o.a)({vue:a,url:"manage/statcenter/member/newAndOld",data:{days:a.days,stat_day:a.stat_day},success:function(t){a.records=[].concat(n()(t.records))}})},onTogglePicker:function(t){t&&(this.timeType=t),this.timePicker=!this.timePicker},onConfirmTime:function(t){t=this.util.formatDate(t,"date"),this.stat_day[this.timeType]=t,this.onTogglePicker()},onToggleDays:function(t){t!=this.days&&(this.days=t,-1!=this.days&&this.onLoad(!0))}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"statcenter-newAndOld"}},[e("public-header",{attrs:{title:"新老客统计"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"wrap-search"},[e("div",{staticClass:"tab-group van-hairline--bottom"},[e("div",{staticClass:"tab-item ",class:{active:0==t.days},on:{click:function(a){t.onToggleDays(0)}}},[t._v("今天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:7==t.days},on:{click:function(a){t.onToggleDays(7)}}},[t._v("近7天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:30==t.days},on:{click:function(a){t.onToggleDays(30)}}},[t._v("近30天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:-1==t.days},on:{click:function(a){t.onToggleDays(-1)}}},[t._v("自定义")])]),t._v(" "),-1==t.days?e("div",{staticClass:"diy-time"},[e("span",{on:{click:function(a){t.onTogglePicker("start")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stat_day.start,expression:"stat_day.start"}],attrs:{type:"text",disabled:""},domProps:{value:t.stat_day.start},on:{input:function(a){a.target.composing||t.$set(t.stat_day,"start",a.target.value)}}})]),t._v(" "),e("span",{staticClass:"padding-15-lr c-gray"},[t._v("~")]),t._v(" "),e("span",{on:{click:function(a){t.onTogglePicker("end")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stat_day.end,expression:"stat_day.end"}],attrs:{type:"text",disabled:""},domProps:{value:t.stat_day.end},on:{input:function(a){a.target.composing||t.$set(t.stat_day,"end",a.target.value)}}})]),t._v(" "),e("van-button",{staticClass:"bg-info margin-10-l",attrs:{size:"mini",disabled:!t.stat_day.start||!t.stat_day.end},on:{click:function(a){t.onLoad(!0)}}},[t._v("确定")])],1):t._e()]),t._v(" "),e("div",{staticClass:"rank-list",class:{"is-diy":-1==t.days}},[e("van-row",{staticClass:"font-15 c-gray flex-lr"},[e("van-col",{attrs:{span:"6"}},[t._v("日期")]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v("成交顾客数")]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v("新客人数"),e("br"),t._v("/占比")]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v("老客人数"),e("br"),t._v("/占比")])],1),t._v(" "),t._l(t.records,function(a,s){return t.records.length>0?e("van-row",{key:s,staticClass:"flex-lr"},[e("van-col",{attrs:{span:"6"}},[t._v(t._s(a.stat_day))]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v(t._s(a.total_success)+"人")]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v(t._s(a.total_success_new)+"人 / "+t._s(a.percent_new)+"%")]),t._v(" "),e("van-col",{attrs:{span:"6"}},[t._v(t._s(a.total_success_old)+"人 / "+t._s(a.percent_old)+"%")])],1):t._e()})],2)]),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.timePicker,callback:function(a){t.timePicker=a},expression:"timePicker"}},[e("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:t.onTogglePicker,confirm:t.onConfirmTime},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}})],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var d=e("VU/8")(c,r,!1,function(t){e("0osR")},null,null);a.default=d.exports}});
//# sourceMappingURL=35.0a536c1a8a264407d83a.js.map