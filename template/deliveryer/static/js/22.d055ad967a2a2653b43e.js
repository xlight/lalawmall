webpackJsonp([22],{"5EFG":function(t,a){},E9VN:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Cz8s"),n=e("deIj"),i={components:{publicHeader:s.a},data:function(){return{timePicker:!1,minDate:new Date(2014,12,1),maxDate:new Date,currentDate:new Date,showPreLoading:!0,stat:{errander:{}},days:0,timeType:"",stat_day:{start:this.util.formatDate(new Date,"date"),end:this.util.formatDate(new Date,"date")}}},methods:{onLoad:function(){var t=this;Object(n.a)({vue:t,url:"delivery/statcenter/stat/stat_vue",data:{type:"errander",days:t.days,stat_day:t.stat_day},success:function(a){t.stat=a.stat}})},onTogglePicker:function(t){t&&(this.timeType=t),this.timePicker=!this.timePicker},onConfirmTime:function(t){t=this.util.formatDate(t,"date"),this.stat_day[this.timeType]=t,this.onTogglePicker()},onToggleTab:function(t){t!=this.days&&(this.days=t,-1!=this.days&&this.onLoad())}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"statcenter-errander"}},[e("public-header",{attrs:{title:"跑腿单统计"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"wrap-search"},[e("div",{staticClass:"tab-group"},[e("div",{staticClass:"tab-item",class:{active:0==t.days},on:{click:function(a){t.onToggleTab(0)}}},[t._v("今天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:7==t.days},on:{click:function(a){t.onToggleTab(7)}}},[t._v("近7天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:30==t.days},on:{click:function(a){t.onToggleTab(30)}}},[t._v("近30天")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:-1==t.days},on:{click:function(a){t.onToggleTab(-1)}}},[t._v("自定义")])])]),t._v(" "),e("van-list",{staticClass:"border-0px"},[-1==t.days?e("div",{staticClass:"diy-time"},[e("span",{on:{click:function(a){t.onTogglePicker("start")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stat_day.start,expression:"stat_day.start"}],attrs:{type:"text",disabled:""},domProps:{value:t.stat_day.start},on:{input:function(a){a.target.composing||t.$set(t.stat_day,"start",a.target.value)}}})]),t._v(" "),e("span",{staticClass:"padding-15-lr c-gray"},[t._v("~")]),t._v(" "),e("span",{on:{click:function(a){t.onTogglePicker("end")}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stat_day.end,expression:"stat_day.end"}],attrs:{type:"text",disabled:""},domProps:{value:t.stat_day.end},on:{input:function(a){a.target.composing||t.$set(t.stat_day,"end",a.target.value)}}})]),t._v(" "),e("van-button",{staticClass:"bg-primary margin-10-l",attrs:{size:"mini",disabled:!t.stat_day.start||!t.stat_day.end},on:{click:t.onLoad}},[t._v("确定")])],1):t._e(),t._v(" "),e("van-cell-group",{staticClass:"border-0px"},[e("van-cell",{attrs:{title:"总收入",value:"¥"+t.stat.errander.total_fee}}),t._v(" "),e("van-cell",{attrs:{title:"配送成功",value:t.stat.errander.success_order}})],1)],1),t._v(" "),0!=t.days?e("div",{staticClass:"padding-15"},[e("router-link",{staticClass:"van-button van-button van-button--default van-button--normal van-button--block bg-primary font-16",attrs:{to:t.util.getUrl({path:"/pages/statcenter/detail",query:{days:t.days,start:t.stat_day.start,end:t.stat_day.end,type:"errander"}}),tag:"button"}},[t._v("查看详情")])],1):t._e()],1),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.timePicker,callback:function(a){t.timePicker=a},expression:"timePicker"}},[e("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:t.onTogglePicker,confirm:t.onConfirmTime},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}})],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var o=e("VU/8")(i,r,!1,function(t){e("5EFG")},null,null);a.default=o.exports}});
//# sourceMappingURL=22.d055ad967a2a2653b43e.js.map