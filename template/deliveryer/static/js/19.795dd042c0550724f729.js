webpackJsonp([19],{iQj4:function(t,a){},pjzi:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("Cz8s"),r=i("deIj"),l={data:function(){return{delivery:{},showPreLoading:!1}},components:{publicHeader:s.a},methods:{onLoad:function(){var t=this;Object(r.a)({url:"delivery/home/setting/list",vue:t,success:function(a){t.delivery=a.deliveryer}})},onLoginOut:function(){var t=this;this.$dialog.confirm({title:"温馨提示",message:"确定退出登录吗？"}).then(function(){t.util.removeStorage("deliveryerInfo"),t.util.removeStorage("idtoken"),t.$router.replace(t.util.getUrl({path:"/pages/auth/login"}))})}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"home-setting"}},[i("public-header",{attrs:{title:"设置"}}),t._v(" "),i("div",{staticClass:"content"},[i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{to:"",title:"头像"}},[i("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[i("div",{staticClass:"user-img"},[i("img",{attrs:{src:t.delivery.avatar,alt:""}})])])]),t._v(" "),i("van-cell",{attrs:{to:"",title:"我的二维码"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"手机号"}},[i("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[i("span",[t._v(t._s(t.delivery.mobile))]),t._v(" "),i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"健康证"}},[i("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[i("span",[t._v("未上传")]),t._v(" "),i("van-icon",{staticClass:"margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"工作城市"}},[i("div",{staticClass:"flex c-gray",attrs:{slot:"right-icon"},slot:"right-icon"},[i("span",[t._v("太原")]),t._v(" "),i("van-icon",{staticClass:"margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"详细资料"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("span",{staticClass:"c-warning"},[t._v("填资料 让家人安心")]),t._v(" "),i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{to:"",title:"本机号码"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{to:t.util.getUrl({path:"/pages/member/phonic"}),title:"语音设置"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"快捷消息管理"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"清理聊天缓存"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{to:"",title:"反馈"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{to:"",title:"管理细则"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"诊断"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{to:"",title:"关于美团众包"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[i("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)])],1),t._v(" "),i("div",{staticClass:"login-out van-hairline--top van-hairline--bottom",on:{click:t.onLoginOut}},[t._v("退出登陆")])],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var o=i("VU/8")(l,n,!1,function(t){i("iQj4")},null,null);a.default=o.exports}});