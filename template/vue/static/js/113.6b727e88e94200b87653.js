webpackJsonp([113],{"49IX":function(t,a){},EDeD:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Gu7T"),i=s.n(e),n={data:function(){return{chats:{page:1,psize:20,loading:!1,finished:!1,data:[]},showPreLoading:!0}},methods:{onLoad:function(){var t=this;if(t.chats.finished)return!1;t.util.request({url:"kefu/member/index",data:{page:t.chats.page,psize:t.chats.psize}}).then(function(a){t.showPreLoading=!1;var s=a.data.message;if(s.errno)t.util.$toast(s.message);else{var e=(s=s.message).chats.chats;e&&e.length>0?(t.chats.data=[].concat(i()(t.chats.data),i()(e)),e.length<t.chats.psize&&(t.chats.finished=!0)):t.chats.finished=!0,t.chats.page++,t.chats.loading=!1}})}},mounted:function(){},components:{PublicHeader:s("Cz8s").a}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"kefu-index"}},[s("public-header",{attrs:{title:"消息中心"}}),t._v(" "),s("div",{staticClass:"content font-14"},[s("van-list",{staticClass:"chat-list",attrs:{finished:t.chats.finished,offset:100,"immediate-check":!0},on:{load:t.onLoad},model:{value:t.chats.loading,callback:function(a){t.$set(t.chats,"loading",a)},expression:"chats.loading"}},t._l(t.chats.data,function(a,e){return s("router-link",{key:a.id,staticClass:"chat-item",attrs:{to:t.util.getUrl({path:"/plugin/pages/kefu/chat",query:{relation:a.relation,kefuopenid:a.kefuopenid,kefuunionid:a.kefuunionid}}),tag:"div"}},[s("div",{staticClass:"item-inner",class:{"van-hairline--top":e>0}},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-100",attrs:{src:a.kefuavatar,alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"nickname ellipsis "},[t._v(t._s(a.kefunickname))]),t._v(" "),s("div",{staticClass:"lasttime ellipsis c-gray"},[t._v(t._s(a.lasttime_cn))])]),t._v(" "),s("div",{staticClass:"last-content w-100 ellipsis c-gray font-13"},[t._v(t._s(a.content))])]),t._v(" "),a.notread>0?s("div",{staticClass:"not-read"},[t._v(t._s(a.notread))]):t._e()])])}),1)],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=s("VU/8")(n,c,!1,function(t){s("49IX")},null,null);a.default=l.exports}});
//# sourceMappingURL=113.6b727e88e94200b87653.js.map