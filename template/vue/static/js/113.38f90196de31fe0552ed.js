webpackJsonp([113],{HsXB:function(t,s){},SGkN:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),o=a.n(i),n=a("Cz8s"),e=a("lVAl"),l=a("75NE"),d=a("deIj"),c=a("Jfm7"),r={components:{PublicHeader:n.a,Comment:e.a,CountDown:l.a},data:function(){return{id:0,goods:{name:"",thumb:"",endtime:0,store:{},is_favor:!1,buy_note:"",description:"",total_looknum:0,total_sharenum:0,thumbs:[]},recommend:[],showPreLoading:!0,zhezhaoShow:!1,danmus:[],danmu:{index:0,item:{},show:!1},comment:{page:2,psize:8,data:[]}}},methods:{onLoad:function(){var t=this;Object(d.a)({vue:t,url:"seckill/goods/detail",data:{id:t.id},autoAssign:!0,variable:"goods",success:function(s){var a=s.recommend;t.recommend=[].concat(o()(t.recommend),o()(a)),t.comment.data=s.comment,t.danmus=s.danmu;var i=window._share;i&&(i.success=function(){t.util.request({url:"gohome/common/share",data:{id:t.id,type:"seckill"}}).then(function(t){})}),t.wx.share(i),setTimeout(function(){t.danmus&&(t.onToggleDanmu(),setInterval(function(){t.onToggleDanmu()},5e3))},5e3)}})},onFavor:function(){Object(c.c)({vue:this,goods_id:this.goods.id,type:"seckill",target:"goods"})},onToggleDanmu:function(){Object(c.b)({vue:this})},onComment:function(){Object(c.a)({vue:this,type:"seckill",id:this.id})}},mounted:function(){this.$route.query&&this.$route.query.id>0&&(this.id=this.$route.query.id),this.onLoad()},watch:{$route:function(t,s){this.showPreLoading=!0,this.goods={name:"",thumb:"",endtime:0,store:{}},this.recommend=[],this.$route.query.id&&(this.id=this.$route.query.id),this.$refs.content.scrollTop=0,this.onLoad()}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"seckill-detail"}},[a("public-header",{attrs:{title:"商品详情"}}),t._v(" "),a("div",{ref:"content",staticClass:"content"},[t.danmu.item&&t.danmu.item.nickname?a("transition",{attrs:{name:"danmu-fade",mode:"out-in"}},[a("div",{staticClass:"order-danmu",class:{"opacity-0":!t.danmu.show}},[a("div",{staticClass:"flex"},[a("img",{staticClass:"thumb",attrs:{src:t.danmu.item.avatar,alt:""}}),t._v(" "),a("span",{staticClass:"info"},[t._v(t._s(t.danmu.item.nickname)+" "+t._s(t.danmu.item.time)+"购买了此商品")])])])]):t._e(),t._v(" "),a("div",{staticClass:"goods-info padding-15-lr padding-15-t bg-default"},[t.goods.thumbs&&t.goods.thumbs.length>0?a("van-swipe",{staticClass:"thumbs",attrs:{loop:"",autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(t.goods.thumbs,function(t,s){return a("van-swipe-item",{key:s},[a("img",{attrs:{src:t}})])}),1):a("div",{staticClass:"thumb"},[a("img",{staticClass:"img-100",attrs:{src:t.goods.thumb,alt:""}}),t._v(" "),3==t.goods.status?a("div",{staticClass:"end-bg"},[a("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),a("ul",{staticClass:"right-btn"},[a("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/poster/index",query:{goods_id:t.id,type:"seckill"}})}},[a("span",[t._v("生成")]),a("span",[t._v("海报")])])],1),t._v(" "),a("div",{staticClass:"title"},[t._v("【限时抢购】"+t._s(t.goods.store.title)+" "+t._s(t.goods.name))]),t._v(" "),a("div",{staticClass:"flex-lr van-hairline--bottom padding-15-b"},[a("div",{staticClass:"flex-lr"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"c-danger font-16 font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.goods.price))]),t._v(" "),a("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.goods.oldprice))])])]),t._v(" "),a("span",{staticClass:"c-gray font-12"},[t._v("已售"+t._s(t.goods.sailed)+"份")]),t._v(" "),1==t.goods.status&&0!=t.goods.total?a("div",{staticClass:"flex"},[a("span",{staticClass:"font-12 c-gray margin-5-r"},[t._v("距结束")]),t._v(" "),t.goods.endtime?a("count-down",{attrs:{endTime:t.goods.endtime}}):t._e()],1):t._e()]),t._v(" "),a("div",{staticClass:"padding-15-tb flex-lr font-12 c-gray"},[a("div",{staticClass:"take-info-item"},[a("i",{staticClass:"icon icon-browse"}),t._v(" "),a("span",[t._v(t._s(t.goods.total_looknum)+"人浏览")])]),t._v(" "),a("div",{staticClass:"take-info-item text-center van-hairline--left van-hairline--right"},[a("i",{staticClass:"icon icon-share"}),t._v(" "),a("span",[t._v(t._s(t.goods.total_sharenum)+"人分享")])]),t._v(" "),a("div",{staticClass:"take-info-item text-right"},[a("i",{staticClass:"icon icon-friend font-15"}),t._v(" "),a("span",[t._v(t._s(t.goods.sailed)+"人参与")])])])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[a("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[a("div",{staticClass:"font-14"},[t._v("适用门店")]),t._v(" "),t._e()],1),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r flex-lr"},[a("div",{staticClass:"font-14 store-info"},[a("div",{staticClass:"margin-10-b w-100 ellipsis"},[t._v(t._s(t.goods.store.title))]),t._v(" "),a("div",{staticClass:"flex c-gray w-100",on:{click:function(s){return t.util.jsLocation({lat:t.goods.store.location_x,lng:t.goods.store.location_y})}}},[a("i",{staticClass:"icon icon-location margin-5-r font-15"}),t._v(" "),a("p",{staticClass:"ellipsis"},[t._v(t._s(t.goods.store.address))])])]),t._v(" "),a("i",{staticClass:"icon icon-telephone icon-telephone-circle",on:{click:function(s){return t.util.jsUrl("tel:"+t.goods.store.telephone)}}})])]),t._v(" "),a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(1),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r richtext",domProps:{innerHTML:t._s(t.goods.description)}})]),t._v(" "),a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(2),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r richtext",domProps:{innerHTML:t._s(t.goods.buy_note)}})]),t._v(" "),a("comment",{attrs:{comment:t.comment.data},on:{onLoadingComment:t.onComment}}),t._v(" "),t.recommend.length>0?a("div",{staticClass:"margin-10-t bg-default"},[a("div",{staticClass:"padding-15-l"},[a("router-link",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/seckill/index"})}},[a("div",{staticClass:"font-14"},[t._v("更多优惠商品")]),t._v(" "),a("van-icon",{staticClass:"c-gray",attrs:{name:"arrow"}})],1)],1),t._v(" "),a("div",{staticClass:"activity-list"},t._l(t.recommend,function(s,i){return a("div",{key:i,staticClass:"activity-item"},[a("router-link",{staticClass:"item-inner",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/seckill/detail",query:{id:s.id}})}},[a("div",{staticClass:"thumb"},[a("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),a("div",{staticClass:"goods-title"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"flex-lr"},[a("div",{staticClass:"flex"},[a("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))]),t._v(" "),a("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.oldprice))])]),t._v(" "),a("div",{staticClass:"c-gray font-12"},[t._v("已售"+t._s(s.falesailed_total)+"份")])])])],1)}),0)]):t._e()],1),t._v(" "),a("van-goods-action",[a("van-goods-action-mini-btn",{attrs:{icon:"shop",text:"店铺"},on:{click:function(s){return t.util.jsUrl("gohome/pages/haodian/detail?sid="+t.goods.store.id)}}}),t._v(" "),a("van-goods-action-mini-btn",{class:{favorite:t.goods.is_favor},attrs:{icon:t.goods.is_favor?"favor_fill_light":"favor1",text:t.goods.is_favor?"已收藏":"收藏"},on:{click:t.onFavor}}),t._v(" "),a("van-goods-action-mini-btn",{attrs:{icon:"share",text:"分享"},on:{click:function(s){t.zhezhaoShow=!t.zhezhaoShow}}}),t._v(" "),1==t.goods.status?[0!=t.goods.total?a("van-goods-action-big-btn",{staticClass:"btn-buy",attrs:{text:"立即抢购"},on:{click:function(s){return t.util.jsUrl("/gohome/pages/seckill/order/create?goods_id="+t.goods.id)}}}):a("van-goods-action-big-btn",{staticClass:"van-button--disabled",attrs:{text:"已抢光"}})]:t._e(),t._v(" "),2==t.goods.status?[a("van-goods-action-big-btn",{staticClass:"van-button--disabled",attrs:{text:"活动未开始"}})]:t._e(),t._v(" "),3==t.goods.status?[a("van-goods-action-big-btn",{staticClass:"van-button--disabled",attrs:{text:"活动已结束"}})]:t._e()],2),t._v(" "),a("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?a("div",{staticClass:"share-zhezhao",on:{click:function(s){t.zhezhaoShow=!t.zhezhaoShow}}},[a("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[a("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[a("div",{staticClass:"font-14"},[t._v("抢购流程")])]),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r flex-lr"},[a("div",{staticClass:"step flex"},[a("span",{staticClass:"step-number"},[t._v("1")]),t._v(" "),a("ul",{staticClass:"c-gray font-12"},[a("li",{staticClass:"margin-5-b"},[t._v("选择商品")]),t._v(" "),a("li",[t._v("点击立即购买")])])]),t._v(" "),a("div",{staticClass:"step flex"},[a("span",{staticClass:"step-number"},[t._v("2")]),t._v(" "),a("ul",{staticClass:"c-gray font-12"},[a("li",{staticClass:"margin-5-b"},[t._v("付款完成")]),t._v(" "),a("li",[t._v("在订单页选择使用")])])]),t._v(" "),a("div",{staticClass:"step flex"},[a("span",{staticClass:"step-number"},[t._v("3")]),t._v(" "),a("ul",{staticClass:"c-gray font-12"},[a("li",{staticClass:"margin-5-b"},[t._v("出示核销码")]),t._v(" "),a("li",[t._v("请工作人员验证")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[s("div",{staticClass:"font-14"},[this._v("商品详情")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[s("div",{staticClass:"font-14"},[this._v("购买须知")])])}]};var g=a("VU/8")(r,v,!1,function(t){a("HsXB")},null,null);s.default=g.exports}});
//# sourceMappingURL=113.38f90196de31fe0552ed.js.map