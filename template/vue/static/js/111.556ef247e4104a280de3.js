webpackJsonp([111],{"79ox":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("Gu7T"),n=s.n(i),e=s("Cz8s"),o=s("deIj"),c={components:{PublicHeader:e.a},data:function(){return{zhezhaoShow:!1,detailOrComment:"detail",store:{thumbs:[],haodian_tags:[],is_favorite:""},coupon:{record:[],coupons:[]},kanjia:[],pintuan:[],seckill:[],comment:{page:1,psize:5,empty:!1,loaded:!1,loading:!1,data:[]},sid:0,can_comment:!1,showPreLoading:!0}},methods:{onToggleDetailOrComment:function(t){this.detailOrComment=t},onLoad:function(){var t=this;Object(o.a)({vue:t,url:"haodian/index/detail",data:{sid:t.sid,page:t.comment.page,psize:t.comment.psize},autoAssign:!0,variable:"store",success:function(a){t.coupon=t.util.extend(t.coupon,a.coupon),t.kanjia=[].concat(n()(a.kanjia)),t.pintuan=[].concat(n()(a.pintuan)),t.seckill=[].concat(n()(a.seckill)),t.can_comment=a.can_comment,t.comment.data=[].concat(n()(t.comment.data),n()(a.comment)),t.comment.data.length||(t.comment.empty=!0),a.comment.length<t.comment.psize&&(t.comment.loaded=!0),t.comment.page++}})},onGetComment:function(){var t=this;Object(o.a)({vue:t,url:"haodian/index/comment",data:{sid:t.sid,page:t.comment.page,psize:t.comment.psize},success:function(a){t.comment.data=[].concat(n()(t.comment.data),n()(a.comment)),t.comment.data.length||(t.comment.empty=!0),a.comment.length<t.comment.psize&&(t.comment.loaded=!0),t.comment.page++,t.comment.loading=!1}})},onFavor:function(t){var a=this;if(this.store.is_favorite)var s="cancal";else s="star";Object(o.c)({vue:this,url:"wmall/member/op/favorite",data:{id:t,type:s},success:function(){"star"==s?(a.$toast("添加收藏成功"),a.store.is_favorite=1):(a.$toast("取消收藏成功"),a.store.is_favorite=0)}})},getCoupon:function(){Object(o.c)({vue:this,url:"wmall/channel/coupon/get",data:{sid:this.sid},message:"领取成功"})},onComment:function(){this.can_comment?this.util.jsUrl("/gohome/pages/haodian/comment?sid="+this.sid):this.util.$toast("您已评论过，请勿重复评论")}},mounted:function(){this.$route.query&&this.$route.query.sid&&(this.sid=this.$route.query.sid),this.onLoad()}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"haodian-detail"}},[s("public-header",{attrs:{title:"商户详情"}}),t._v(" "),s("div",{staticClass:"content"},[t.store.thumbs.length>0?s("div",{staticClass:"padding-10-lr padding-10-t bg-default"},[s("van-swipe",{staticClass:"thumbs",attrs:{loop:"","indicator-color":"#ff2d4b"}},t._l(t.store.thumbs,function(a,i){return s("van-swipe-item",{key:i,attrs:{autoplay:3e3},on:{click:function(s){return t.util.jsUrl(a.url)}}},[s("img",{attrs:{src:a.image}})])}),1)],1):t._e(),t._v(" "),s("div",{staticClass:"store-info bg-default font-14 flex-lr padding-10-lr padding-15-tb van-hairline--bottom"},[s("div",{staticClass:"store-logo"},[s("img",{staticClass:"img-100",attrs:{src:t.store.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"info-inner"},[s("div",{staticClass:"w-100 flex"},[s("div",{staticClass:"store-title font-15 font-500 ellipsis"},[t._v(t._s(t.store.title))]),t._v(" "),s("ul",{staticClass:"flex"},[t.store.haodian_cid>0?s("li",{staticClass:"store-tag"},[t._v(t._s(t.store.haodian_cid_cn))]):t._e(),t._v(" "),t.store.haodian_child_id>0?s("li",{staticClass:"store-tag"},[t._v(t._s(t.store.haodian_child_id_cn))]):t._e()])]),t._v(" "),s("div",{staticClass:"flex font-12"},[s("van-rate",{attrs:{size:12,"disabled-color":"#ff2d4b",disabled:""},model:{value:t.store.haodian_score,callback:function(a){t.$set(t.store,"haodian_score",a)},expression:"store.haodian_score"}}),t._v(" "),s("span",{staticClass:"c-gray  margin-5-l"},[t._v(t._s(t.store.haodian_score)+"分")]),t._v(" "),s("div",{staticClass:"flex margin-10-l"},[s("i",{staticClass:"icon icon-hotfill c-danger"}),t._v(" "),s("span",{staticClass:"c-gray"},[t._v("人气:"+t._s(t.store.click))])])],1),t._v(" "),s("div",{staticClass:"flex c-gray font-12"},[s("i",{staticClass:"icon icon-time"}),t._v(" "),s("span",{staticClass:"margin-5-l"},[t._v("营业时间: "+t._s(t.store.business_hours_cn))])]),t._v(" "),s("div",{staticClass:"flex c-gray font-12 store-address"},[s("i",{staticClass:"icon icon-location"}),t._v(" "),s("span",{staticClass:"margin-5-l ellipsis"},[t._v(t._s(t.store.address))])]),t._v(" "),s("div",{staticClass:"store-other c-danger flex "},[s("i",{staticClass:"font-20 icon icon-taxi border-1px-r padding-5-r",on:{click:function(a){return t.util.jsLocation({lat:t.store.location_x,lng:t.store.location_y})}}}),t._v(" "),s("i",{staticClass:"font-20 icon icon-phone padding-5-l",on:{click:function(a){return t.util.jsUrl("tel:"+t.store.telephone)}}})])])]),t._v(" "),t.store.haodian_tags.length>0?s("ul",{staticClass:"store-feature bg-default font-14 padding-10-lr padding-15-t padding-5-b"},t._l(t.store.haodian_tags,function(a,i){return s("li",{key:i,staticClass:"feature-item flex"},[s("i",{staticClass:"icon icon-tag font-14 c-danger margin-5-r"}),t._v(" "),s("span",[t._v(t._s(a))])])}),0):t._e(),t._v(" "),t.coupon.coupons.length>0||t.coupon.record.length>0?s("div",{staticClass:"store-coupon margin-10-t padding-10-t bg-default"},[s("div",{staticClass:"activity-header "},[t._v("店铺优惠券")]),t._v(" "),s("div",{staticClass:"coupon-list padding-5-b"},[1==t.coupon.can_collect?s("div",{staticClass:"coupon-item flex-lr"},[s("div",{staticClass:"left"},[s("div",{staticClass:"c-danger font-500"},[t._v(t._s(t.coupon.title))]),t._v(" "),s("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("满"+t._s(t.coupon.coupons[0].condition)+t._s(t.Lang.dollarSignCn)+"可用")]),t._v(" "),s("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("限"+t._s(t.coupon.endtime_cn)+"前领取")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",{staticClass:"font-18 font-bold c-danger"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.coupon.coupons[0].discount))]),t._v(" "),s("div",{staticClass:"btn-take",on:{click:t.getCoupon}},[t._v("立即领取")])])]):t._e(),t._v(" "),t.coupon.record.length>0?t._l(t.coupon.record,function(a){return s("div",{key:a.id,staticClass:"coupon-item flex-lr"},[s("div",{staticClass:"left"},[s("div",{staticClass:"c-danger font-500"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("满"+t._s(a.condition)+t._s(t.Lang.dollarSignCn)+"可用")]),t._v(" "),s("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("限"+t._s(a.endtime_cn)+"前使用")])]),t._v(" "),s("div",{staticClass:"right"},[s("span",{staticClass:"font-18 font-bold c-danger"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.discount))]),t._v(" "),s("div",{staticClass:"c-danger margin-10-t"},[t._v("已领取")])])])}):t._e()],2)]):t._e(),t._v(" "),t.kanjia.length>0?s("div",{staticClass:"haodian-kanjia bg-default margin-10-t padding-10-t"},[s("div",{staticClass:"activity-header"},[t._v("\n\t\t\t\t本店砍价\n\t\t\t\t"),s("div",{staticClass:"more",on:{click:function(a){return t.util.jsUrl("/gohome/pages/kanjia/index?sid="+t.sid)}}},[t._v("\n\t\t\t\t\t更多\n\t\t\t\t\t"),s("div",{staticClass:"icon icon-arrow-right"})])]),t._v(" "),s("div",{staticClass:"activity-list"},t._l(t.kanjia,function(a,i){return s("router-link",{key:i,staticClass:"activity-item",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:a.id}})}},[s("div",{staticClass:"item-inner"},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:a.thumb,alt:""}})]),t._v(" "),s("div",{staticClass:"goods-title"},[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"flex"},[s("span",{staticClass:"c-danger font-500 font-15"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.price))]),t._v(" "),s("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.oldprice))]),t._v(" "),s("div",{staticClass:"discount"},[t._v(t._s(a.discount)+"折")])])])])}),1)]):t._e(),t._v(" "),t.seckill.length>0?s("div",{staticClass:"haodian-seckill bg-default margin-10-t padding-10-t"},[s("div",{staticClass:"activity-header"},[t._v("\n\t\t\t\t本店抢购\n\t\t\t\t"),s("div",{staticClass:"more",on:{click:function(a){return t.util.jsUrl("/gohome/pages/seckill/index?sid="+t.sid)}}},[t._v("\n\t\t\t\t\t更多\n\t\t\t\t\t"),s("div",{staticClass:"icon icon-arrow-right"})])]),t._v(" "),s("div",{staticClass:"activity-list"},t._l(t.seckill,function(a,i){return s("div",{key:i,staticClass:"activity-item bg-default padding-10 van-hairline--bottom"},[s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:a.thumb,alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"font-14 w-100"},[s("p",[t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"flex-lr-bottom w-100"},[s("div",{staticClass:"price-bar"},[s("div",{staticClass:"flex"},[s("span",{staticClass:"font-500 font-15 margin-5-r"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.price))]),t._v(" "),s("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.oldprice))]),t._v(" "),s("div",{staticClass:"discount"},[t._v(t._s(a.discount)+"折")])]),t._v(" "),s("div",{staticClass:"bar"},[s("div",{staticClass:"bar-inner",style:{width:a.sailed_percent+"%"}}),t._v(" "),s("div",{staticClass:"bar-text"},[t._v("已抢"+t._s(a.sailed)+"份")])])]),t._v(" "),s("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/seckill/detail",query:{id:a.id}})}},[t._v("去抢购")])],1)])])])}),0)]):t._e(),t._v(" "),t.pintuan.length>0?s("div",{staticClass:"haodian-pintuan bg-default margin-10-t padding-10-t"},[s("div",{staticClass:"activity-header"},[t._v("\n\t\t\t\t本店拼团\n\t\t\t\t"),s("div",{staticClass:"more",on:{click:function(a){return t.util.jsUrl("/gohome/pages/pintuan/index?sid="+t.sid)}}},[t._v("\n\t\t\t\t\t更多\n\t\t\t\t\t"),s("div",{staticClass:"icon icon-arrow-right"})])]),t._v(" "),s("div",{staticClass:"activity-list"},t._l(t.pintuan,function(a,i){return s("div",{key:a.id,staticClass:"activity-item"},[s("div",{staticClass:"item-inner"},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:a.thumb,alt:""}}),t._v(" "),s("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(a.peoplenum)+"人团\n\t\t\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"goods-title"},[t._v(t._s(a.name))]),t._v(" "),s("div",{staticClass:"flex"},[s("span",{staticClass:"font-500 font-15 margin-5-r"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.price))]),t._v(" "),s("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.oldprice))]),t._v(" "),s("div",{staticClass:"discount"},[t._v(t._s(a.discount)+"折")])]),t._v(" "),s("div",{staticClass:"flex-lr margin-10-t"},[s("div",{staticClass:"bar"},[s("div",{staticClass:"bar-inner",style:{width:a.sailed_percent+"%"}}),t._v(" "),s("div",{staticClass:"bar-text"},[t._v("已售"+t._s(a.falesailed_total)+"份")])]),t._v(" "),s("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:a.id}})}},[t._v("拼团")])],1)])])}),0)]):t._e(),t._v(" "),s("div",{staticClass:"detail-comment bg-default margin-10-t"},[s("div",{staticClass:"tab-group van-hairline--bottom"},[s("div",{staticClass:"tab-item",class:{active:"detail"==t.detailOrComment},on:{click:function(a){return t.onToggleDetailOrComment("detail")}}},[t._v("商户详情")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:"comment"==t.detailOrComment},on:{click:function(a){return t.onToggleDetailOrComment("comment")}}},[t._v("用户评价")])]),t._v(" "),"detail"==t.detailOrComment?s("div",{staticClass:"richtext",domProps:{innerHTML:t._s(t.store.description)}}):"comment"==t.detailOrComment?[t.comment.empty?s("div",{staticClass:"no-data-simple"},[s("span",{staticClass:"icon icon-cry"}),t._v(" "),s("span",[t._v("暂无评价~")])]):s("van-list",{staticClass:"comment-list",attrs:{finished:t.comment.loaded,offset:100,"immediate-check":!1},on:{load:t.onGetComment},model:{value:t.comment.loading,callback:function(a){t.$set(t.comment,"loading",a)},expression:"comment.loading"}},[t._l(t.comment.data,function(a,i){return s("div",{key:a.id,staticClass:"comment-item padding-15-tb padding-10-lr van-hairline--bottom"},[s("div",{staticClass:"consumer-info flex-lr"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-100",attrs:{src:"http://wx.qlogo.cn/mmopen/lgicrYyMHFv8ZSaWRtQjcpbHDotWhy159lhJqQUTO0QbkB2FBaC9n4bO3eQhpIeX9lx4lYCpGiaAqnUXVzkXZmFVqiaHM4DC9HH/132",alt:""}})]),t._v(" "),s("div",{staticClass:"basic flex-lr"},[s("div",[s("div",{staticClass:"font-14"},[t._v(t._s(a.username))]),t._v(" "),s("div",{staticClass:"c-gray font-12 margin-5-t"},[t._v(t._s(a.addtime_cn))])]),t._v(" "),s("van-rate",{attrs:{size:13,"disabled-color":"#ff2d4b",disabled:""},model:{value:a.store_service,callback:function(s){t.$set(a,"store_service",s)},expression:"item.store_service"}})],1)]),t._v(" "),s("div",{staticClass:"comment-item"},[s("div",{staticClass:"text"},[t._v(t._s(a.note))]),t._v(" "),a.thumbs.length>0?s("van-row",{staticClass:"thumbs margin-10-t",attrs:{gutter:"10"}},[t._l(a.thumbs,function(i,n){return n<4?s("van-col",{key:n,attrs:{span:"6"}},[s("div",{on:{click:function(s){return t.util.jsPreviewImage(a.thumbs,n)}}},[s("img",{staticClass:"w-100",attrs:{src:i,alt:""}})])]):t._e()}),t._v(" "),s("div",{staticClass:"thumbs-num"},[t._v("共"+t._s(a.thumbs.length)+"张")])],2):t._e()],1)])}),t._v(" "),t.comment.loaded?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)]:t._e()],2)]),t._v(" "),s("van-goods-action",[s("van-goods-action-mini-btn",{attrs:{icon:"comment",text:"评价"},on:{click:t.onComment}}),t._v(" "),s("van-goods-action-mini-btn",{class:{favorite:t.store.is_favorite},attrs:{icon:t.store.is_favorite?"favor_fill_light":"favor1",text:t.store.is_favorite?"已收藏":"收藏"},on:{click:function(a){return t.onFavor(t.store.id)}}}),t._v(" "),s("van-goods-action-mini-btn",{attrs:{icon:"share",text:"分享"},on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}}),t._v(" "),s("van-goods-action-big-btn",{staticClass:"btn-share",attrs:{text:"联系商家",primary:""},on:{click:function(a){return t.util.jsUrl("tel:"+t.store.telephone)}}})],1),t._v(" "),s("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?s("div",{staticClass:"share-zhezhao",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[s("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()]),t._v(" "),s("transition",{attrs:{name:"van-fade"}},[t.showPreLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[]};var r=s("VU/8")(c,l,!1,function(t){s("SVp3")},null,null);a.default=r.exports},SVp3:function(t,a){}});
//# sourceMappingURL=111.556ef247e4104a280de3.js.map