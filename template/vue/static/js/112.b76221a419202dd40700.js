webpackJsonp([112],{"N2y/":function(t,e){},h4Gk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Gu7T"),o=s.n(r),a=s("Cz8s"),i=s("mzkE"),n={data:function(){return{hotStores:[],recommendStores:[],searchHistorys:[],keyword:"",menufooter:{},preLoading:!1}},components:{PublicHeader:a.a,PublicFooter:i.a},methods:{onLoad:function(){var t=this;this.preLoading=!0,this.util.request({url:"wmall/home/hunt/index",data:{menufooter:1}}).then(function(e){t.preLoading=!1;var s=e.data.message;s.errno?t.$toast(s.message):(t.util.setStorage("itime",s.message.v),t.hotStores=[].concat(o()(t.hotStores),o()(s.message.hotStores)),t.recommendStores=[].concat(o()(t.recommendStores),o()(s.message.recommendStores)),t.searchHistorys=[].concat(o()(t.searchHistorys),o()(s.message.searchHistorys)))})},onClearHistory:function(){var t=this;this.$dialog.confirm({message:"确定清除历史记录吗"}).then(function(e){"confirm"==e&&t.util.request({url:"wmall/home/hunt/truncate"}).then(function(e){var s=e.data.message;s.errno?t.$toast(s.message):t.searchHistorys=[]}).catch(function(t){})})},onKeyword:function(t){this.keyword=t},onSearch:function(){if(!this.keyword)return!1;this.keyword;this.$router.push(this.util.getUrl({path:"/pages/home/searchResult",query:{key:this.keyword}}))}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search"}},[s("public-header",{attrs:{title:"搜索"}}),t._v(" "),s("public-footer",{attrs:{menufooter:t.menufooter,preLoading:t.preLoading}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"search-header van-hairline--bottom"},[s("div",{staticClass:"search-content"},[s("van-icon",{attrs:{name:"search"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入商家或商品名称"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})],1),t._v(" "),s("div",{staticClass:"search-btn",on:{click:t.onSearch}},[t._v("搜索")])]),t._v(" "),t.hotStores.length>0||t.searchHistorys.length>0?s("div",{staticClass:"rmd-history"},[t.hotStores.length>0?s("div",{staticClass:"search-rmd-wrap"},[t._m(0),t._v(" "),s("div",{staticClass:"search-rmd"},t._l(t.hotStores,function(e,r){return s("router-link",{key:r,attrs:{to:t.util.getUrl({path:e.url}),tag:"div"}},[t._v(t._s(e.title))])}),1)]):t._e(),t._v(" "),t.searchHistorys.length>0?s("div",{staticClass:"search-history-wrap"},[s("div",{staticClass:"search-rmd-title"},[s("div",{staticClass:"van-hairline--bottom"},[t._v("历史搜索")]),t._v(" "),s("div",{staticClass:"icon icon-delete",on:{click:t.onClearHistory}})]),t._v(" "),s("div",{staticClass:"search-rmd"},t._l(t.searchHistorys,function(e,r){return s("div",{key:r,on:{click:function(s){return t.onKeyword(e)}}},[t._v(t._s(e))])}),0)]):t._e()]):t._e(),t._v(" "),t.recommendStores.length>0?s("van-cell-group",[s("van-cell",{attrs:{title:"猜你在找"}}),t._v(" "),t._l(t.recommendStores,function(e,r){return s("van-cell",{key:r,staticClass:"guess-store",attrs:{"is-link":"",to:t.util.getUrl({path:e.url})}},[s("template",{slot:"title"},[s("img",{attrs:{src:e.logo}}),t._v(" "),s("span",[t._v(t._s(e.title))])])],2)})],2):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-rmd-title "},[e("div",{staticClass:"van-hairline--bottom"},[this._v("热门搜索")])])}]};var l=s("VU/8")(n,c,!1,function(t){s("N2y/")},null,null);e.default=l.exports}});
//# sourceMappingURL=112.b76221a419202dd40700.js.map