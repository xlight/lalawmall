webpackJsonp([10],{"9WJ5":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("Cz8s"),a=i("deIj"),e={components:{publicHeader:n.a},data:function(){return{queues:[],isRefresh:!1,showPreLoading:!0}},methods:{onLoad:function(t){var s=this;t&&(this.queues=[]);var i=this;Object(a.a)({vue:this,url:"manage/tangshi/assign/index",success:function(t){i.queues=t.queues,s.isRefresh=!1}})},onChangeNotice:function(t,s){var i=this;i.util.jspost({url:"manage/tangshi/assign/notice",data:{id:t.id,number:s},confirm:"确定通知吗？",success:function(t){i.util.$toast(t,0)}})},onChangeStatus:function(t,s,i,n){var a=this;if(2==s)var e="确定该号已入座吗?";else e="确定过号吗?";a.util.jspost({url:"manage/tangshi/assign/status",data:{id:t.id,status:s,number:i},confirm:e,success:function(t){a.queues[n].now_number=!1,0!=a.queues[n].total&&(a.queues[n].total=a.queues[n].total-1)}})},onPullDownRefresh:function(){this.onLoad()}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"order-assign"}},[i("public-header",{attrs:{title:"排队"}}),t._v(" "),i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.queues.length>0?i("div",{staticClass:"assign-list"},[i("div",{staticClass:"assign-group"},t._l(t.queues,function(s,n){return i("div",{staticClass:"assign-item border-1px-t"},[i("div",{staticClass:"assign-title border-1px-b"},[i("div",{staticClass:"assign-info"},[i("div",[t._v("当前叫号")]),t._v(" "),s.now_number?i("div",{staticClass:"info"},[t._v(t._s(s.now_number))]):i("div",{staticClass:"info"},[t._v("暂无排队信息")])]),t._v(" "),i("div",{staticClass:"assign-info"},[i("div",[t._v("桌号分类")]),t._v(" "),i("div",{staticClass:"tables-type"},[t._v(t._s(s.title))])]),t._v(" "),i("div",{staticClass:"assign-take"},[i("div",{staticClass:"takeout"},[i("div",[t._v("取号")]),t._v(" "),i("div",[t._v("("+t._s(s.total)+"/"+t._s(s.position)+")")])])])]),t._v(" "),i("div",{staticClass:"assign-button border-1px-b"},[i("router-link",{staticClass:"small-button",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/tangshi/assignRecord",query:{id:s.id}})}},[i("span",{staticClass:"icon icon-viewgallery"}),t._v("\n\t\t\t\t\t\t\t查看已领\n\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"small-button active",on:{click:function(i){t.onChangeNotice(s,s.now_number)}}},[i("span",{staticClass:"icon icon icon-remind2"}),t._v("\n\t\t\t\t\t\t\t叫号\n\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"small-button active",on:{click:function(i){t.onChangeStatus(s,2,s.now_number,n)}}},[i("span",{staticClass:"icon icon-home2"}),t._v("\n\t\t\t\t\t\t\t入座\n\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"small-button active",on:{click:function(i){t.onChangeStatus(s,3,s.now_number,n)}}},[i("span",{staticClass:"icon icon-forward"}),t._v("\n\t\t\t\t\t\t\t跳过\n\t\t\t\t\t\t")])],1)])}))]):i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无排队列表!")])])]),t._v(" "),i("router-link",{staticClass:"assign-but",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/tangshi/assignQueue"})}},[i("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal",block:""}},[t._v("添加队列")])],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var u=i("VU/8")(e,o,!1,function(t){i("T0O3")},null,null);s.default=u.exports},T0O3:function(t,s){}});
//# sourceMappingURL=10.9ffb4de03b1c91da8c33.js.map