webpackJsonp([59],{"8bWc":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),n=i("Cz8s"),c=i("deIj"),r={components:{publicHeader:n.a},data:function(){return{advertise:[],isRefresh:!1,showPreLoading:!0,filter:{items:{status:1}}}},methods:{onLoad:function(t){t&&(this.advertise=[]);var s=this;Object(c.a)({vue:this,url:"manage/advertise/list/index",data:{filter:this.filter.items},success:function(t){s.isRefresh=!1,s.advertise=[].concat(e()(s.advertise),e()(t.advertise))}})},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad(!0))},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"advertise-list"}},[i("public-header",{attrs:{title:"店铺推广记录"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"wrap-search wrap-search-input"},[i("div",{staticClass:"tab-group flex-lr border-1px-b"},[i("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("未开启")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("进行中")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("已结束")])])]),t._v(" "),i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.advertise.length>0?i("div",{staticClass:"advertise-list"},t._l(t.advertise,function(s,a){return i("div",{key:s.id,staticClass:"advertise-item"},[i("div",{staticClass:"padding-15 van-hairline--bottom"},[i("div",{staticClass:"flex margin-15-b"},[i("span",{staticClass:"font-15"},[t._v(t._s(s.title)+" "),1==s.status?i("span",{staticClass:"c-gray font-14 padding-5-l"},[t._v("剩余"+t._s(s.until)+"天")]):t._e()])]),t._v(" "),"stick"==s.type?i("p",{staticClass:"desc"},[t._v("置顶排序: No."+t._s(s.displayorder))]):t._e(),t._v(" "),i("p",{staticClass:"desc"},[t._v("广告持续: "+t._s(s.days)+"天")]),t._v(" "),i("p",{staticClass:"desc"},[t._v("开始时间: "+t._s(s.starttime_cn))]),t._v(" "),i("p",{staticClass:"desc"},[t._v("结束时间: "+t._s(s.endtime_cn))]),t._v(" "),i("p",{staticClass:"desc"},[t._v("创建日期: "+t._s(s.addtime_cn))])]),t._v(" "),i("div",{staticClass:"status"},[1==s.status?i("img",{staticClass:"img-100",attrs:{src:"static/img/activity_ing.png",alt:""}}):2==s.status?i("img",{staticClass:"img-100",attrs:{src:"static/img/activity_end.png",alt:""}}):0==s.status?i("img",{staticClass:"img-100",attrs:{src:"static/img/activity_not_start.png",alt:""}}):t._e()])])})):i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("还没有为店铺推广哦~")])])])],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var o=i("VU/8")(r,l,!1,function(t){i("iTnh")},null,null);s.default=o.exports},iTnh:function(t,s){}});
//# sourceMappingURL=59.8f202db41ba6a146fb88.js.map