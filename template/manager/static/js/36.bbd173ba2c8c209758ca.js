webpackJsonp([36],{"N+2M":function(t,s){},qyBY:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Cz8s"),i=a("deIj"),o={components:{publicHeader:e.a},data:function(){return{records:{page:1,psize:10,loading:!1,finished:!1,empty:!1,data:[]},keyword:""}},methods:{onLoad:function(){},onSearch:function(t){this.keyword?Object(i.b)({vue:this,force:t,recordsName:"goods",url:"manage/goods/index/search",data:{keyword:this.keyword},success:function(t){}}):this.util.$toast("请输入商品名称","",1e3)},onChangeStatus:function(t,s,a){var e=this,i=s.id;if("status"==t)var o=1==s.status?0:1,n={url:"manage/goods/index/status",confirm:1==s.status?"确定下架此商品吗?":"确定上架此商品吗?",data:{id:i,value:o},success:function(t){e.util.$toast(t),e.records.data[a].status=o}};else if("total"==t)n={url:"manage/goods/index/turncate",confirm:"确定设置已售罄吗?",data:{id:i},success:function(t){e.util.$toast(t),e.records.data[a].total=0}};e.util.jspost(n)}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"goods-search"}},[a("public-header",{attrs:{title:"商品搜索"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"search-header van-hairline--bottom"},[a("div",{staticClass:"search-content"},[a("van-icon",{attrs:{name:"search"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入商品名称"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}})],1),t._v(" "),a("div",{staticClass:"search-btn",on:{click:function(s){t.onSearch(!0)}}},[t._v("搜索")])]),t._v(" "),a("div",{staticClass:"goods-search-warp"},[t.records.empty?t._e():a("van-list",{attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:function(s){t.onSearch(!1)}},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[a("div",{staticClass:"goods-list"},t._l(t.records.data,function(s,e){return a("div",{key:e,staticClass:"goods-item van-hairline--bottom"},[a("div",{staticClass:"goods-info flex-lr"},[a("div",{staticClass:"goods-thumb"},[a("img",{attrs:{src:s.thumb,alt:""}}),t._v(" "),s.label?a("div",{staticClass:"hot"},[t._v(t._s(s.label))]):t._e(),t._v(" "),1!=s.status?a("div",{staticClass:"status"},[t._v("已下架")]):t._e()]),t._v(" "),a("div",{staticClass:"flex-tb-left info-inner"},[a("div",{staticClass:"font-bold w-100 ellipsis font-15"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"c-gray flex font-13"},[a("span",[t._v("已售: "+t._s(s.sailed))]),t._v(" "),-1==s.total?a("span",{staticClass:"sailed-tip"},[t._v("不限库存")]):a("span",{staticClass:"margin-10-l"},[t._v("库存: "+t._s(s.total))])]),t._v(" "),a("div",{staticClass:"flex font-13"},[a("span",{staticClass:"c-info"},[t._v("\n\t\t\t\t\t\t\t\t\t\t外卖: "),a("span",{staticClass:"font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))])]),t._v(" "),a("span",{staticClass:"c-danger margin-10-l"},[t._v("\n\t\t\t\t\t\t\t\t\t\t店内: "),a("span",{staticClass:"font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.ts_price))])])])])]),t._v(" "),a("div",{staticClass:"goods-btn"},[0!=s.total?a("div",{staticClass:"btn-item",on:{click:function(a){t.onChangeStatus("total",s,e)}}},[t._v("售罄")]):t._e(),t._v(" "),a("router-link",{staticClass:"btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"pages/goods/post",query:{id:s.id}})}},[t._v("编辑")]),t._v(" "),a("div",{staticClass:"btn-item",on:{click:function(a){t.onChangeStatus("status",s,e)}}},[t._v(t._s(1==s.status?"下架":"上架"))])],1)])}))])],1),t._v(" "),t.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("暂无相关商品，敬请期待")])]):t._e()])],1)},staticRenderFns:[]};var c=a("VU/8")(o,n,!1,function(t){a("N+2M")},null,null);s.default=c.exports}});
//# sourceMappingURL=36.bbd173ba2c8c209758ca.js.map