webpackJsonp([127],{LjlY:function(t,s){},WttH:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("woOf"),a=i.n(e),o=i("Dd8w"),r=i.n(o),n=i("Cz8s"),c=i("Vr3d"),d=i("RoZr"),l=i("deIj"),u=i("NYxO"),_={data:function(){return{showPreLoading:!0,records:{page:1,psize:10,loading:!1,finished:!1,empty:!1,data:[]},cart:{num:0},from:"",type:"takeout",table_id:0,table:{},store:{},hotGoods:[],keyword:"",searchHistory:[],activetabs:0,showMoveDot:[]}},components:{PublicHeader:n.a,GoodsHandle:c.a,StoreCart:d.a},methods:r()({},Object(u.b)(["replaceStore","replaceCart"]),{onSearch:function(t,s){var i=this;(i.records.loading=!0,s)?i.keyword=s:i.keyword&&-1==i.searchHistory.indexOf(i.keyword)&&(i.searchHistory.push(i.keyword),i.util.setStorage("isearchHistory.goods."+i.sid,i.searchHistory));i.keyword?Object(l.b)({vue:i,force:t,recordsName:"goods",url:"wmall/store/goods/search",data:{sid:i.sid,table_id:i.table_id,is_search:1,keyword:i.keyword},success:function(t){i.records.empty||(i.store=t.store,i.cart=t.cart,i.replaceStore(t.store),i.replaceCart(t.cart.message.cart))}}):i.util.$toast("请输入商品名称","",1e3)},onLoad:function(){var t=this;t.searchHistory=t.util.getStorage("isearchHistory.goods."+t.istore.id),t.searchHistory||(t.searchHistory=[]),Object(l.a)({vue:t,url:"wmall/store/goods/search",data:{sid:t.sid,table_id:t.table_id,is_search:0},success:function(s){t.hotGoods=s.hotGoods,t.table_id>0&&s.table&&(t.table=a()(t.table,s.table),t.type="table",t.from="table")}})},onDetail:function(t){this.table_id>0?this.$router.push(this.util.getUrl({path:"tangshi/pages/table/goodsDetail",query:{id:t,sid:this.store.id,table_id:this.table_id}})):this.$router.push(this.util.getUrl({path:"pages/store/goodsDetail",query:{id:t,sid:this.store.id,pindan_id:this.pindan_id}}))},onDelHistory:function(){var t=this;this.$dialog.confirm({message:"确定清除历史记录吗"}).then(function(s){"confirm"==s&&(t.util.removeStorage("isearchHistory.goods."+t.sid),t.searchHistory=[])})}}),computed:r()({},Object(u.c)(["istore","icart"])),created:function(){this.$route.query&&(this.sid=this.$route.query.sid,this.pindan_id=0,this.$route.query.pindan_id>0&&(this.pindan_id=this.$route.query.pindan_id),this.$route.query.table_id>0&&(this.table_id=this.$route.query.table_id))},mounted:function(){this.onLoad()}},v={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"goods-search"}},[i("public-header",{attrs:{title:"商品搜索"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"search-header van-hairline--bottom"},[i("div",{staticClass:"search-content"},[i("van-icon",{attrs:{name:"search"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入商品名称"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}})],1),t._v(" "),i("div",{staticClass:"search-btn",on:{click:function(s){return t.onSearch(!0)}}},[t._v("搜索")])]),t._v(" "),1==t.records.page?[t.hotGoods&&t.hotGoods.length>0?i("div",{staticClass:"rmd-history"},[i("div",{staticClass:"search-rmd-wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"search-rmd"},t._l(t.hotGoods,function(s,e){return i("div",{key:"hot"+e,on:{click:function(i){return t.onSearch(!0,s.title)}}},[t._v(t._s(s.title))])}),0)])]):t._e(),t._v(" "),t.searchHistory&&t.searchHistory.length>0?i("div",{staticClass:"rmd-history"},[i("div",{staticClass:"search-rmd-wrap"},[i("div",{staticClass:"search-rmd-title"},[i("div",{staticClass:"van-hairline--bottom"},[t._v("搜索历史")]),t._v(" "),i("div",{staticClass:"icon icon-delete",on:{click:t.onDelHistory}})]),t._v(" "),i("div",{staticClass:"search-rmd"},t._l(t.searchHistory,function(s,e){return i("div",{key:"h"+e,on:{click:function(i){return t.onSearch(!0,s)}}},[t._v(t._s(s))])}),0)])]):t._e()]:t._e(),t._v(" "),i("div",{staticClass:"goods-search-warp"},[t.records.empty?t._e():i("van-list",{attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:function(s){return t.onSearch(!1)}},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[i("div",{staticClass:"goods-list"},t._l(t.records.data,function(s){return i("div",{key:s.id,staticClass:"goods-item van-hairline--bottom"},[i("div",{staticClass:"goods-thumb",on:{click:function(i){return t.onDetail(s.id)}}},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-info"},[i("div",{staticClass:"w-100 ellipsis font-14 font-500",on:{click:function(i){return t.onDetail(s.id)}}},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"c-gray flex font-12 margin-5-t",on:{click:function(i){return t.onDetail(s.id)}}},[i("span",[t._v("已售"+t._s(s.sailed))]),t._v(" "),i("span",{staticClass:"margin-15-l"},[t._v("赞"+t._s(s.comment_good))])]),t._v(" "),1!=s.svip_status||s.discount_price?t._e():i("div",{staticClass:"svip-price-tips margin-5-t"},[i("div",{staticClass:"svip-price"},[i("i",{staticClass:"icon icon-crownfill"}),t._v(" "),i("span",[t._v(t._s(s.discount)+"折")])]),t._v(" "),i("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])]),t._v(" "),i("div",{staticClass:"font-500 c-danger font-14 flex margin-5-t",on:{click:function(i){return t.onDetail(s.id)}}},[i("span",[t._v(t._s(t.Lang.dollarSign)+t._s(s.price)+t._s(s.unitname_cn))]),t._v(" "),1!=s.svip_status||s.discount_price>0?i("div",{staticClass:"flex margin-10-l"},[s.discount?[i("van-icon",{attrs:{name:"tag"}}),t._v(" "),i("span",{staticClass:"font-12"},[t._v(t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份 "+t._s(s.unitnum>1?s.unitnum_multi_cn+"购":""))])]:s.unitnum>1?[i("van-icon",{attrs:{name:"tag"}}),t._v(" "),i("span",{staticClass:"font-12"},[t._v(t._s(s.unitnum_multi_cn)+"购")])]:t._e()],2):s.unitnum>1?i("div",{staticClass:"flex margin-10-l"},[i("van-icon",{attrs:{name:"tag"}}),t._v(" "),i("span",{staticClass:"font-12"},[t._v(t._s(s.unitnum_multi_cn)+"购")])],1):t._e()]),t._v(" "),i("div",{staticClass:"goods-operation"},[i("goods-handle",{attrs:{goods:s,optionId:0,from:"detail",type:t.type,table:t.table}})],1)])])}),0)])],1),t._v(" "),t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无相关商品，敬请期待")])]):t._e()],2),t._v(" "),i("store-cart",{attrs:{show:!t.records.empty&&t.records.page>1,store:t.store,cart:t.cart,pindan_id:t.pindan_id,from:t.from,table:t.table}}),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"search-rmd-title "},[s("div",{staticClass:"van-hairline--bottom"},[this._v("热门搜索")])])}]};var h=i("VU/8")(_,v,!1,function(t){i("LjlY")},null,null);s.default=h.exports}});
//# sourceMappingURL=127.1277d2a9d609bb088952.js.map