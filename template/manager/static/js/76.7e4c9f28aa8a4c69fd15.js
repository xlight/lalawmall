webpackJsonp([76],{"Rlb+":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Cz8s"),a=s("deIj"),n={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0}},components:{publicHeader:i.a},methods:{onLoad:function(e){Object(a.b)({vue:this,force:e,url:"manage/news/notice/list",recordsName:"notice"})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"news-notice"}},[s("public-header",{attrs:{title:"公告列表"}}),e._v(" "),s("div",{staticClass:"content"},[s("van-pull-refresh",{on:{refresh:function(t){e.onPullDownRefresh()}},model:{value:e.isRefresh,callback:function(t){e.isRefresh=t},expression:"isRefresh"}},[e.records.empty?s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),s("p",[e._v("暂无数据!")])]):s("van-list",{staticClass:"notice-list",attrs:{finished:e.records.finished,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.records.loading,callback:function(t){e.$set(e.records,"loading",t)},expression:"records.loading"}},[e._l(e.records.data,function(t,i){return s("div",{staticClass:"notice-item border-1px-b padding-10"},[s("router-link",{attrs:{to:e.util.getUrl({path:"/pages/news/detail",query:{id:t.id}})}},[s("div",{staticClass:"item-left"},[s("div",{staticClass:"itag",class:{"itag-info":1==t.is_new,"itag-disabled":0==t.is_new}},[e._v("消息")])]),e._v(" "),s("div",{staticClass:"item-right"},[s("div",{staticClass:"font-16 ellipsis c-default"},[e._v(e._s(t.title))]),e._v(" "),s("div",{staticClass:"font-14 ellipsis c-default"},[e._v(e._s(t.addtime))])])])],1)}),e._v(" "),e.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[e._v("没有更多了")])]):e._e()],2)],1),e._v(" "),e.showPreLoading?s("iloading"):e._e()],1)],1)},staticRenderFns:[]};var d=s("VU/8")(n,o,!1,function(e){s("YQlf")},null,null);t.default=d.exports},YQlf:function(e,t){}});
//# sourceMappingURL=76.7e4c9f28aa8a4c69fd15.js.map