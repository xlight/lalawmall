webpackJsonp([21],{Ld6N:function(t,s){},O62G:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Gu7T"),i=e.n(a),n=e("Cz8s"),o=e("deIj"),l=(e("uaSg"),{data:function(){return{relation:"member2clerk",fansopenid:0,orderid:0,chat:{status:1},kefu:{},fans:{},order:{id:0},chatlog:{min:0,psize:100,loading:!1,finished:!1,data:[]},content:"",fastReply:[],faseReplyMsg:"",orders:[],websocket:{},heartCheck:{},status:{fastReply:!1,others:!1,voice:!1},popup:{fastReply:!1,order:!1},showPreLoading:!0,islegal:!1}},methods:{onLoad:function(){var t=this;Object(o.a)({vue:t,url:"manage/kefu/clerk/chat",data:{relation:t.relation,fansopenid:t.fansopenid,kefuunionid:t.kefuunionid,orderid:t.orderid,min:t.chatlog.min,psize:t.chatlog.psize},success:function(s){t.chat=t.util.extend(t.chat,s.chat),t.kefu=t.util.extend(t.kefu,s.kefu),t.fans=t.util.extend(t.fans,s.fans),t.order=t.util.extend(t.order,s.order),t.fastReply=[].concat(i()(s.reply)),s.chatlog.logs&&s.chatlog.logs.length>0&&(t.chatlog.data=[].concat(i()(s.chatlog.logs)),s.chatlog.logs.length<t.chatlog.psize&&(t.chatlog.finished=!0)),t.chatlog.min=s.chatlog.min,t.chatlog.min||(t.chatlog.finished=!0),t.util.setWXTitle(t.fans.nickname)}})},onLoadMore:function(){var t=this;if(t.chatlog.finished)return t.$nextTick(function(){t.chatlog.loading=!1}),t.util.$toast("没有更多消息了"),!1;Object(o.a)({vue:t,url:"manage/kefu/clerk/more",data:{chatid:t.chat.id,min:t.chatlog.min,psize:t.chatlog.psize},success:function(s){s.chatlog.logs&&s.chatlog.logs.length>0&&(t.chatlog.data=s.chatlog.logs.concat(t.chatlog.data),s.chatlog.logs.length<t.chatlog.psize&&(t.chatlog.finished=!0)),t.chatlog.min=s.chatlog.min,t.chatlog.min||(t.chatlog.finished=!0),t.chatlog.loading=!1}})},onSendMessage:function(t,s){var e=this;return!!e.islegal&&(e.islegal=!1,t||(t=e.content),s||(s="text"),!(!t||""==t)&&void Object(o.c)({vue:e,url:"manage/kefu/clerk/addchat",data:{chatid:e.chat.id,type:s,content:t},success:function(t){e.chatlog.data.push(t.log),"text"==s?e.content="":"orderTakeout"==s&&(e.hasSendOrder=!0)}}))},onConfirmFastReply:function(){var t=this;if(!t.faseReplyMsg||""==t.faseReplyMsg)return!1;Object(o.c)({vue:t,url:"manage/kefu/clerk/addreply",data:{content:t.faseReplyMsg,relation:t.relation},success:function(s){s.reply&&s.reply.length>0&&(t.fastReply=[].concat(i()(s.reply))),t.faseReplyMsg="",t.onTogglePopup("fastReply")}})},onUploadImage:function(t){var s=this;s.$toast.loading({mask:!0,message:"上传中...",duration:0}),s.util.image({obj:t,success:function(t,e){if(e.url&&e.filename){var a=e.filename;s.islegal=!0,s.onSendMessage(a,"image"),s.$toast.clear()}},options:{channel:"h5"}})},onScrollBottom:function(){var t=this;t.islegal=!0,setTimeout(function(){var s=t.$refs.chatlog;s.scrollTop=s.scrollHeight},200)},onToggleStatus:function(t){for(var s in this.status)this.status[s]=s==t&&!this.status[s]},onTogglePopup:function(t){if(!t)return!1;this.popup[t]=!this.popup[t]},onSetNotreadZero:function(){Object(o.c)({vue:this,url:"manage/kefu/clerk/zero",data:{chatid:this.chat.id},success:function(t){console.log("清零成功")}})},onOrderClick:function(t){t>0&&(this.onSendMessage(t,"orderTakeout"),this.onTogglePopup("order"))},onShowOrders:function(){var t=this;Object(o.a)({vue:t,url:"manage/kefu/clerk/order",data:{chatid:t.chat.id},success:function(s){var e=s.orders;e&&e.length>0?(t.orders=[].concat(i()(e)),t.onTogglePopup("order")):t.util.$toast("该顾客最近未在您的门店下过单")}})},onGetMessage:function(t){var s=this;s.chat&&s.chat.id==t.chat.chatid&&setTimeout(function(){s.chatlog.data.push(t.chat),s.onSetNotreadZero()},200)},initWebSocket:function(){this.iwebsocket.onGetMessage=this.onGetMessage}},mounted:function(){var t=this.util.parseQuery(this.$route.query);this.relation=t.relation,this.fansopenid=t.fansopenid,this.kefuunionid=t.kefuunionid,this.orderid=t.orderid,this.onLoad(),this.initWebSocket()},destroyed:function(){this.iwebsocket.onGetMessage=null},updated:function(){this.onScrollBottom()},components:{PublicHeader:n.a},computed:{chatLogBottom:function(){var t=96;return 2==this.chat.status?t=56:this.status.fastReply?t=272:this.status.others&&(t=237),t}}}),c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"kefu-chat"}},[e("public-header",{attrs:{title:t.fans.nickname}}),t._v(" "),e("div",{staticClass:"content font-14"},[e("div",{staticClass:"connection"},[1==t.fans.isonline?e("div",{staticClass:"status"},[t._v(t._s(t.fans.online_cn))]):t._e(),t._v(" "),t.fans.mobile?e("div",{staticClass:"call flex c-info"},[e("div",{staticClass:"flex",on:{click:function(s){t.util.jsTel(t.fans.mobile)}}},[e("i",{staticClass:"icon icon-telephone"}),t._v(" "),e("span",[t._v(t._s(t.fans.mobile_cn))])])]):t._e()]),t._v(" "),e("div",{ref:"chatlog",staticClass:"chatlog",style:{bottom:t.chatLogBottom+"px"}},[e("van-pull-refresh",{on:{refresh:function(s){t.onLoadMore()}},model:{value:t.chatlog.loading,callback:function(s){t.$set(t.chatlog,"loading",s)},expression:"chatlog.loading"}},[t.chatlog.data.length>0?[t._l(t.chatlog.data,function(s,a){return[e("div",{staticClass:"log-item",class:{left:1==s.isleft,right:0==s.isleft}},[s.addtime_cn?e("div",{staticClass:"time flex-center margin-15-b"},[e("span",[t._v(t._s(s.addtime_cn))])]):t._e(),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"img-100",attrs:{src:s.avatar,alt:""}})]),t._v(" "),"text"==s.type?e("div",{staticClass:"text before"},[t._v(t._s(s.content))]):"image"==s.type?e("div",{staticClass:"image",on:{click:function(e){t.util.jsPreviewImage(s.content)}}},[e("img",{attrs:{src:s.content,alt:""}})]):"orderTakeout"==s.type?e("div",{staticClass:"order before",on:{click:function(e){t.util.jsUrl("pages/order/detail",{id:s.orderid})}}},[e("div",{staticClass:"c-gray"},[t._v("订单信息")]),t._v(" "),e("div",{staticClass:"flex-lr margin-10-t"},[e("div",{staticClass:"store-logo"},[e("img",{staticClass:"img-100",attrs:{src:s.content.logo,alt:""}})]),t._v(" "),e("div",{staticClass:"order-info"},[e("div",{staticClass:"flex-lr"},[e("div",{staticClass:"store-title ellipsis"},[t._v(t._s(s.content.title))]),t._v(" "),e("div",{staticClass:"order-status font-12 ellipsis"},[t._v(t._s(s.content.status_cn))])]),t._v(" "),e("div",{staticClass:"flex-lr c-gray"},[e("div",{staticClass:"goods-title ellipsis"},[t._v(t._s(s.content.goods_title))]),t._v(" "),e("div",{staticClass:"order-fee font-12 ellipsis"},[t._v("实付"),e("span",{staticClass:"c-default"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.content.final_fee)+t._s(t.Lang.dollarSignCn))])])])])])]):t._e(),t._v(" "),t._e()])])]})]:t._e(),t._v(" "),t._e()],2)],1),t._v(" "),1==t.chat.status?e("div",{staticClass:"tools"},[e("div",{staticClass:"guess flex padding-15-lr padding-10-tb van-hairline--bottom"},[e("span",{staticClass:"c-gray margin-10-r"},[t._v("猜你喜欢")]),t._v(" "),e("ul",{staticClass:"guess-list"},[e("li",{staticClass:"guess-item",on:{click:function(s){t.onShowOrders()}}},[t._v("最近订单")])])]),t._v(" "),e("div",{staticClass:"main flex-lr"},[t._e(),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"text",attrs:{type:"text",placeholder:"输入消息..."},domProps:{value:t.content},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key,"Enter"))return null;t.onSendMessage()},input:function(s){s.target.composing||(t.content=s.target.value)}}}),t._v(" "),e("i",{staticClass:"icon icon-sort margin-15-lr",on:{click:function(s){t.onToggleStatus("fastReply")}}}),t._v(" "),t.content?e("div",{staticClass:"btn-send",on:{click:function(s){t.onSendMessage()}}},[t._v("发送")]):e("i",{staticClass:"icon icon-add",on:{click:function(s){t.onToggleStatus("others")}}})]),t._v(" "),t.status.fastReply?e("ul",{staticClass:"common-reply van-hairline--top"},[t._l(t.fastReply,function(s,a){return[e("li",{staticClass:"reply-item van-hairline--bottom",on:{click:function(e){t.onSendMessage(s,"text")}}},[t._v(t._s(s))])]}),t._v(" "),e("li",{staticClass:"reply-item flex-center c-info"},[e("i",{staticClass:"icon icon-add font-18 margin-5-r"}),t._v(" "),e("span",{on:{click:function(s){t.onTogglePopup("fastReply")}}},[t._v("添加常用语")])])],2):t._e(),t._v(" "),t.status.others?e("ul",{staticClass:"others"},[e("li",{staticClass:"other-item"},[e("div",{staticClass:"other-item-inner"},[e("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(s){t.onUploadImage(s)}}}),t._v(" "),e("i",{staticClass:"icon icon-pic-filling"}),t._v(" "),e("span",{staticClass:"margin-10-t"},[t._v("照片")])])])]):t._e()]):e("div",{staticClass:"close-tips ellipsis van-hairline--top"},[t._v(t._s(t.chat.reason))])]),t._v(" "),e("van-popup",{staticClass:"fast-reply-popup",model:{value:t.popup.fastReply,callback:function(s){t.$set(t.popup,"fastReply",s)},expression:"popup.fastReply"}},[e("div",{staticClass:"title"},[t._v("添加快捷短语")]),t._v(" "),e("van-field",{staticClass:"border-0px",attrs:{type:"textarea",placeholder:"例如: 我不能吃辣, 麻烦少放些辣椒",rows:"4"},model:{value:t.faseReplyMsg,callback:function(s){t.faseReplyMsg=s},expression:"faseReplyMsg"}}),t._v(" "),e("div",{staticClass:"flex-center van-hairline--top"},[e("div",{staticClass:"flex-1 flex-center padding-15-tb van-hairline--right",on:{click:function(s){t.onTogglePopup("fastReply")}}},[t._v("取消")]),t._v(" "),e("div",{staticClass:"flex-1 flex-center padding-15-tb c-gray",on:{click:t.onConfirmFastReply}},[t._v("确认添加")])])],1),t._v(" "),e("van-popup",{staticClass:"order-list-popup",attrs:{position:"bottom"},model:{value:t.popup.order,callback:function(s){t.$set(t.popup,"order",s)},expression:"popup.order"}},[e("div",{staticClass:"title padding-15 flex-lr van-hairline--bottom"},[e("div",{staticClass:"font-15"},[t._v("点击发送订单"),e("span",{staticClass:"c-gray font-12 margin-10-l"},[t._v("展示最近5个订单")])]),t._v(" "),e("i",{staticClass:"icon icon-close font-20",on:{click:function(s){t.onTogglePopup("order")}}})]),t._v(" "),e("div",{staticClass:"popup-content"},[t._l(t.orders,function(s,a){return e("div",{key:s.id,staticClass:"order-item padding-15-l bg-default font-15",on:{click:function(e){t.onOrderClick(s.id)}}},[e("div",{staticClass:"item-inner ",class:{"van-hairline--top":a>0}},[e("div",{staticClass:"store-logo"},[e("img",{staticClass:"img-100",attrs:{src:s.logo,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"flex-lr w-100"},[e("div",{staticClass:"store-title ellipsis"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"order-status ellipsis"},[t._v(t._s(s.status_cn))])]),t._v(" "),e("div",{staticClass:"flex-lr c-gray padding-10-t"},[e("div",{staticClass:"goods-title ellipsis"},[t._v(t._s(s.goods_title))]),t._v(" "),e("div",{staticClass:"order-fee ellipsis"},[t._v("\n\t\t\t\t\t\t\t\t实付"),e("span",{staticClass:"c-default"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.final_fee))])])])])])])}),t._v(" "),t._e()],2)]),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var r=e("VU/8")(l,c,!1,function(t){e("Ld6N")},null,null);s.default=r.exports}});
//# sourceMappingURL=21.9b54efb9c00605857669.js.map