webpackJsonp([102],{"73ac":function(t,i){},gru3:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("mzkE"),a=s("Cz8s"),o=s("NPH5"),r=s("MHEY"),l={name:"StoreGoods",data:function(){return{store:{},activity:{},commentHeight:0,hide_telephone:0,preLoading:!0}},components:{PublicHeader:a.a,PublicFooter:e.a,Load:o.a,StoreHeader:r.a},methods:{onLoad:function(){var t=this;this.util.request({url:"wmall/store/index",data:{sid:this.$route.query.sid,gconfig:1}}).then(function(i){var s=i.data.message.message;t.store=s.store,t.activity=s.activity,t.hide_telephone=i.data.global.gconfig.hide_telephone,t.util.setWXTitle(t.store.title),t.preLoading=!1})}},mounted:function(){this.onLoad();var t=document.documentElement.clientHeight,i=document.getElementsByClassName("header")[0].clientHeight,s=document.getElementsByClassName("store-tabs")[0].clientHeight;if(this.commentHeight=t-i-s,document.getElementById("public-header")){var e=document.getElementById("public-header").clientHeight;this.commentHeight=this.commentHeight-e}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"store-info"}},[t.isWeixin?t._e():s("public-header",{attrs:{title:t.store.title}}),t._v(" "),s("store-header",{attrs:{store:t.store}}),t._v(" "),s("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[s("router-link",{staticClass:"tab-item ",attrs:{to:t.util.getUrl({path:"/pages/store/goods?sid="+t.store.id}),tag:"div"}},[t._v("商品")]),t._v(" "),s("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/comment?sid="+t.store.id}),tag:"div"}},[t._v("评价")]),t._v(" "),s("div",{staticClass:"tab-item active"},[t._v("商家")])],1),t._v(" "),s("div",{staticClass:"store-detail",style:{height:t.commentHeight+"px"}},[s("div",{staticClass:"detail-region"},[t.store.service_titles?s("div",{staticClass:"no-gutter"},[s("router-link",{staticClass:"col-20",attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id}})}},[s("div",{staticClass:"van-icon van-icon-takeout"}),t._v(" "),s("div",[t._v(t._s(t.store.service_titles.takeout))])]),t._v(" "),1==t.store.is_meal?s("div",{staticClass:"col-20",on:{click:function(i){return t.util.jsUrl("wx:scanCode")}}},[s("div",{staticClass:"van-icon van-icon-meal"}),t._v(" "),s("div",[t._v(t._s(t.store.service_titles.tangshi))])]):t._e(),t._v(" "),1==t.store.is_reserve?s("router-link",{staticClass:"col-20",attrs:{to:t.util.getUrl({path:"/tangshi/pages/reserve/index",query:{sid:t.store.id}})}},[s("div",{staticClass:"van-icon van-icon-reserve"}),t._v(" "),s("div",[t._v(t._s(t.store.service_titles.reserve))])]):t._e(),t._v(" "),1==t.store.is_assign?s("router-link",{staticClass:"col-20",attrs:{to:t.util.getUrl({path:"/tangshi/pages/assign/assign",query:{sid:t.store.id}})}},[s("div",{staticClass:"van-icon van-icon-assign"}),t._v(" "),s("div",[t._v(t._s(t.store.service_titles.assign))])]):t._e(),t._v(" "),1==t.store.is_paybill?s("router-link",{staticClass:"col-20",attrs:{to:t.util.getUrl({path:"/pages/store/paybill",query:{sid:t.store.id}})}},[s("div",{staticClass:"van-icon van-icon-signboard"}),t._v(" "),s("div",[t._v(t._s(t.store.service_titles.paybill))])]):t._e()],1):t._e()]),t._v(" "),t.store.thumbs&&t.store.thumbs.length>0?s("van-cell-group",{staticClass:"margin-10-t border-0px"},[s("van-cell",[s("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[s("i",{staticClass:"icon icon-store font-18 margin-5-r"}),t._v(" "),s("span",[t._v("门店实景")])])]),t._v(" "),s("van-cell",{staticClass:"padding-10-lr"},[s("div",{staticClass:"store-thumbs"},t._l(t.store.thumbs,function(i,e){return s("div",{key:e,staticClass:"thumb-item ",on:{click:function(s){return t.util.jsPreviewImage(i.image)}}},[s("img",{staticClass:"img-100",attrs:{src:i.image,alt:""}})])}),0)])],1):t._e(),t._v(" "),t.store.qualification&&(t.store.qualification.business&&t.store.qualification.business.thumb||t.store.qualification.service&&t.store.qualification.service.thumb||t.store.qualification.more1&&t.store.qualification.more1.thumb||t.store.qualification.more2&&t.store.qualification.more2.thumb)?s("van-cell-group",{staticClass:"margin-10-t border-0px"},[s("van-cell",[s("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[s("i",{staticClass:"icon icon-pic font-18 margin-5-r"}),t._v(" "),s("span",[t._v("营业资质")])])]),t._v(" "),s("van-cell",{staticClass:"padding-10-lr"},[s("div",{staticClass:"store-thumbs"},[t.store.qualification.business&&t.store.qualification.business.thumb?s("div",{staticClass:"thumb-item",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.business.thumb)}}},[s("img",{staticClass:"img-100",attrs:{src:t.store.qualification.business.thumb,alt:""}})]):t._e(),t._v(" "),t.store.qualification.service&&t.store.qualification.service.thumb?s("div",{staticClass:"thumb-item",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.service.thumb)}}},[s("img",{staticClass:"img-100",attrs:{src:t.store.qualification.service.thumb,alt:""}})]):t._e(),t._v(" "),t.store.qualification.more1&&t.store.qualification.more1.thumb?s("div",{staticClass:"thumb-item",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.more1.thumb)}}},[s("img",{staticClass:"img-100",attrs:{src:t.store.qualification.more1.thumb,alt:""}})]):t._e(),t._v(" "),t.store.qualification.more2&&t.store.qualification.more2.thumb?s("div",{staticClass:"thumb-item",on:{click:function(i){return t.util.jsPreviewImage(t.store.qualification.more2.thumb)}}},[s("img",{staticClass:"img-100",attrs:{src:t.store.qualification.more2.thumb,alt:""}})]):t._e()])])],1):t._e(),t._v(" "),t.store.custom_url?s("div",{staticClass:"detail-region custom-url-wrap"},[s("van-cell-group",{staticClass:"border-0px"},[t._l(t.store.custom_url,function(i){return[s("van-cell",{attrs:{title:i.title,icon:"all","is-link":"",center:!0},on:{click:function(s){return t.util.jsUrl(i.wxapp_link)}}},[s("van-icon",{attrs:{slot:"right-icon",name:"right"},slot:"right-icon"})],1)]})],2)],1):t._e(),t._v(" "),s("div",{staticClass:"detail-region"},[s("van-cell-group",{staticClass:"border-0px"},[s("van-cell",{attrs:{icon:"newshot"}},[s("div",{staticClass:"rest-text",attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t配送服务：\n\t\t\t\t\t\t"),t.store.delivery_title?s("div",{staticClass:"allocation-icon"},[t._v(t._s(t.store.delivery_title))]):s("span",{staticClass:"inline"},[t._v("由 商家 ")]),t._v("\n\t\t\t\t\t\t提供配送服务\n\t\t\t\t\t")])]),t._v(" "),1!=t.hide_telephone?s("van-cell",{attrs:{title:"电话："+t.store.telephone,icon:"phone","is-link":""},on:{click:function(i){return t.util.jsUrl("tel:"+t.store.telephone)}}}):t._e(),t._v(" "),s("van-cell",{attrs:{title:"地址："+t.store.address,icon:"location","is-link":""},on:{click:function(i){return t.util.jsLocation({lat:t.store.location_x,lng:t.store.location_y})}}}),t._v(" "),s("van-cell",{attrs:{title:"营业时间："+t.store.business_hours_cn,icon:"time"}}),t._v(" "),t.store.sns?[t.store.sns.qq?s("van-cell",{attrs:{title:t.store.sns.qq,icon:"qq","is-link":""},on:{click:function(i){return t.util.jsUrl("http://wpa.qq.com/msgrd?v=3&uin="+t.store.sns.qq+"&site=qq&menu=yes")}}}):t._e(),t._v(" "),t.store.sns.weixin?s("van-cell",{attrs:{title:t.store.sns.weixin,icon:"weixin"}}):t._e()]:t._e()],2)],1),t._v(" "),t.activity.num>0?s("div",{staticClass:"detail-region"},[t._e(),t._v(" "),s("div",{staticClass:"discount-box"},t._l(t.activity.items,function(i){return s("div",{staticClass:"discount-item flex"},[s("div",{staticClass:"left"},[s("div",{staticClass:"icon-b"},[s("img",{attrs:{src:"static/img/"+i.type+"_b.png"}})])]),t._v(" "),s("div",{staticClass:"right"},[t._v(t._s(i.title))])])}),0)],1):t._e(),t._v(" "),s("router-link",{staticClass:"report",attrs:{tag:"div",to:t.util.getUrl({path:"pages/store/report",query:{sid:t.store.id}})}},[t._v("举报商家")])],1),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.preLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[]};var c=s("VU/8")(l,n,!1,function(t){s("73ac")},null,null);i.default=c.exports}});
//# sourceMappingURL=102.3a1fb3f7ae6ad094121a.js.map