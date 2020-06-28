webpackJsonp([61],{e2kp:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),n=a.n(i),o=a("Dd8w"),e=a.n(o),r=a("Cz8s"),l=a("+CBI"),c=a("deIj"),d=a("NYxO"),u={components:{publicHeader:r.a,iswitch:l.a},data:function(){return{keyword:"",goodsList:[],showPreLoading:!0}},watch:{keyword:function(){this.onSearch()}},computed:e()({},Object(d.c)(["bargainGoods"])),methods:e()({},Object(d.b)(["setBargainGoods"]),{onToggleCheckBox:function(t){this.goodsList[t].is_bargain=!this.goodsList[t].is_bargain,!this.goodsList[t].is_bargain&&this.bargainGoods.hasOwnProperty(this.goodsList[t].id)&&delete this.bargainGoods[this.goodsList[t].id]},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})},onSearch:function(){var t=this;t.keyword&&Object(c.a)({vue:t,url:"manage/activity/bargain/search",data:{keyword:t.keyword},success:function(s){var a=s.goods;if(t.util.length(t.bargainGoods)>0&&a&&a.length>0)for(var i in a)t.bargainGoods.hasOwnProperty(a[i].id)&&(a[i]=t.bargainGoods[a[i].id]);t.goodsList=[].concat(n()(a))}})},onSubmit:function(){var t=this.goodsList,s={};if(t.length>0)for(var a in t)(s=t[a]).is_bargain&&(this.bargainGoods[s.id]=s);this.setBargainGoods(this.bargainGoods),this.$router.go(-1)}}),mounted:function(){this.showPreLoading=!1}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"activity-bargainGoods-search"}},[a("public-header",{attrs:{title:"创建商品活动"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-search",{staticClass:"padding-10-tb",attrs:{placeholder:"请输入商品名称"},model:{value:t.keyword,callback:function(s){t.keyword=s},expression:"keyword"}}),t._v(" "),a("van-row",{staticClass:"content-inner"},[a("van-col",{staticClass:"wh-100 goods-wrap",attrs:{span:"24"}},[t.goodsList.length>0?a("div",{staticClass:"goods-list padding-15-lr bg-default"},t._l(t.goodsList,function(s,i){return a("div",{staticClass:"goods-item van-hairline--bottom"},[a("div",{on:{click:function(s){t.onToggleCheckBox(i)}}},[a("van-row",[a("van-col",{attrs:{span:"5"}},[a("img",{staticClass:"goods-thumb",attrs:{src:s.thumb,alt:""}})]),t._v(" "),a("van-col",{attrs:{span:"17"}},[a("div",{staticClass:"w-100 ellipsis font-bold font-14"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"margin-5-t c-gray font-12"},[a("span",{staticClass:"padding-10-r"},[t._v("月售"+t._s(s.sailed))]),t._v(" "),a("span",[t._v("好评"+t._s(s.per_comment_good)+"%")])]),t._v(" "),s.is_bargain?a("div",{staticClass:"discount flex margin-5-t hide"},[a("span",{staticClass:"mark flex"},[a("span",[t._v(t._s(t.Lang.dollarSign)+t._s(s.discount_price))]),t._v(" "),a("span",[t._v("折扣")])]),t._v(" "),a("span",{staticClass:"c-gray font-12 margin-5-l"},[t._v("351天后到期")])]):t._e(),t._v(" "),a("div",{staticClass:"margin-5-t"},[a("span",[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))]),t._v(" "),a("span",{staticClass:"padding-10-l c-gray font-12 hide"},[t._v("已参与其他活动")])])]),t._v(" "),a("van-col",{staticClass:"text-right",attrs:{span:"2"}},[a("div",{staticClass:"radio-box icon",class:{"icon-check":s.is_bargain}})])],1)],1),t._v(" "),s.is_bargain?a("div",{staticClass:"goods-set"},[a("div",{staticClass:"flex-lr font-12 margin-5-b"},[a("span",[t._v("活动价")]),t._v(" "),a("div",{staticClass:"input-unit"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:s.discount_price,expression:"item.discount_price",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:s.discount_price},on:{input:function(a){a.target.composing||t.$set(s,"discount_price",t._n(a.target.value))},blur:function(s){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"font-12 bg-default"},[t._v(t._s(t.Lang.dollarSignCn))])])]),t._v(" "),a("div",{staticClass:"flex-lr font-12 margin-5-b"},[a("span",[t._v("每单限购")]),t._v(" "),a("div",{staticClass:"input-unit"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:s.max_buy_limit,expression:"item.max_buy_limit",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:s.max_buy_limit},on:{input:function(a){a.target.composing||t.$set(s,"max_buy_limit",t._n(a.target.value))},blur:function(s){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"font-12 bg-default"},[t._v(t._s(t.Lang.dollarSignCn))])])]),t._v(" "),a("div",{staticClass:"flex-lr font-12 margin-5-b"},[a("span",[t._v("每日库存")]),t._v(" "),a("div",{staticClass:"input-unit"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:s.discount_total,expression:"item.discount_total",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:s.discount_total},on:{input:function(a){a.target.composing||t.$set(s,"discount_total",t._n(a.target.value))},blur:function(s){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"font-12 bg-default"},[t._v("份")])])]),t._v(" "),a("div",{staticClass:"flex-lr font-12 margin-5-b"},[a("span",[t._v("当日剩余库存")]),t._v(" "),a("div",{staticClass:"input-unit"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:s.discount_available_total,expression:"item.discount_available_total",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:s.discount_available_total},on:{input:function(a){a.target.composing||t.$set(s,"discount_available_total",t._n(a.target.value))},blur:function(s){t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"font-12 bg-default"},[t._v("份")])])]),t._v(" "),a("div",{staticClass:"flex-lr font-12"},[a("span",[t._v("新用户专享")]),t._v(" "),a("iswitch",{attrs:{value:s.poi_user_type,"text-open":"ON","text-close":"OFF","condition-open":"new","condition-close":"all",keys:"goodsList."+i+".poi_user_type"},on:{change:t.jsToggleSwitch}})],1)]):t._e()])})):t._e()])],1),t._v(" "),a("div",{staticClass:"fix-bottom van-hairline--top"},[a("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("选好了, 返回商品列表")])],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var _=a("VU/8")(u,v,!1,function(t){a("l+t8")},null,null);s.default=_.exports},"l+t8":function(t,s){}});
//# sourceMappingURL=61.98d27359bcbb4d6bc870.js.map