webpackJsonp([20],{"2Ji6":function(e,t){},T8h0:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Cz8s"),s=i("deIj"),l={data:function(){return{type:"",title:"",deliveryer:{kefu_status:"1",extra:{kefu_busy_reply:""}},islegal:!1,showPreLoading:!0}},methods:{onLoad:function(){var e=this;Object(s.a)({vue:e,url:"delivery/kefu/setting/index",data:{},success:function(t){e.deliveryer=e.util.extend(e.deliveryer,t.deliveryer),e.islegal=!0}})},onSubmit:function(){var e=this;if(e.islegal){e.islegal=!1;var t={type:e.type};"kefu_status"==e.type?t.kefu_status=e.deliveryer.kefu_status:"busy_reply"==e.type&&(t.busy_reply=e.deliveryer.extra.kefu_busy_reply),Object(s.c)({vue:e,url:"delivery/kefu/setting/update",data:t,success:function(t){e.util.$toast(t,e.util.getUrl({path:"/pages/kefu/setting"}),2e3,"replace")}})}}},mounted:function(){var e=this.util.parseQuery(this.$route.query);this.type=e.type,"kefu_status"==this.type?this.title="客服状态":"busy_reply"==this.type&&(this.title="忙碌状态自动回复"),this.util.setWXTitle(this.title),this.onLoad()},components:{PublicHeader:a.a}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"kefu-index"}},[i("public-header",{attrs:{title:e.title}}),e._v(" "),i("div",{staticClass:"content"},["kefu_status"==e.type?[i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[e._v("店员客服状态")]),e._v(" "),i("van-radio-group",{model:{value:e.deliveryer.kefu_status,callback:function(t){e.$set(e.deliveryer,"kefu_status",t)},expression:"deliveryer.kefu_status"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"在线",clickable:""},on:{click:function(t){e.deliveryer.kefu_status="1"}}},[i("van-radio",{attrs:{name:"1"}})],1),e._v(" "),i("van-cell",{attrs:{title:"忙碌",clickable:""},on:{click:function(t){e.deliveryer.kefu_status="2"}}},[i("van-radio",{attrs:{name:"2"}})],1),e._v(" "),i("van-cell",{attrs:{title:"离线",clickable:""},on:{click:function(t){e.deliveryer.kefu_status="3"}}},[i("van-radio",{attrs:{name:"3"}})],1)],1)],1)]:"busy_reply"==e.type?[i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[e._v("忙碌状态自动回复")]),e._v(" "),i("van-cell-group",[i("van-field",{attrs:{type:"textarea",placeholder:"当对话为忙碌状态时, 将自动回复此内容给顾客",rows:"4"},model:{value:e.deliveryer.extra.kefu_busy_reply,callback:function(t){e.$set(e.deliveryer.extra,"kefu_busy_reply",t)},expression:"deliveryer.extra.kefu_busy_reply"}})],1)]:e._e(),e._v(" "),i("div",{staticClass:"padding-15"},[i("van-button",{staticClass:"bg-primary",attrs:{size:"normal",disabled:!e.islegal,block:""},on:{click:e.onSubmit}},[e._v("保存修改")])],1)],2),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)},staticRenderFns:[]};var u=i("VU/8")(l,r,!1,function(e){i("2Ji6")},null,null);t.default=u.exports}});