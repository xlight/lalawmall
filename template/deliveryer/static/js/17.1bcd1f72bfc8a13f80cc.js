webpackJsonp([17],{AqQd:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Cz8s"),a=i("deIj"),n={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0}},components:{publicHeader:s.a},methods:{onLoad:function(e){Object(a.b)({vue:this,force:e,url:"delivery/news/notice/list",recordsName:"notice"})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"notice-list"}},[i("public-header",{attrs:{title:"公告列表"}}),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:function(t){e.onPullDownRefresh()}},model:{value:e.isRefresh,callback:function(t){e.isRefresh=t},expression:"isRefresh"}},[e.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),i("p",[e._v("暂无数据!")])]):i("van-list",{staticClass:"notice-list",attrs:{finished:e.records.finished,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.records.loading,callback:function(t){e.$set(e.records,"loading",t)},expression:"records.loading"}},[e._l(e.records.data,function(t,s){return i("div",{staticClass:"notice-item border-1px-b padding-10"},[i("router-link",{attrs:{to:e.util.getUrl({path:"/pages/notice/detail",query:{id:t.id}})}},[i("div",{staticClass:"item-left"},[i("div",{staticClass:"itag",class:{"itag-primary":1==t.is_new,"itag-disabled":0==t.is_new}},[e._v("消息")])]),e._v(" "),i("div",{staticClass:"item-right"},[i("div",{staticClass:"font-16 ellipsis c-default"},[e._v(e._s(t.title))]),e._v(" "),i("div",{staticClass:"font-14 ellipsis c-default"},[e._v(e._s(t.addtime))])])])],1)}),e._v(" "),e.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[e._v("没有更多了")])]):e._e()],2)],1),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)])],1)},staticRenderFns:[]};var d=i("VU/8")(n,o,!1,function(e){i("yCJ7")},null,null);t.default=d.exports},yCJ7:function(e,t){}});