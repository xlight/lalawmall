webpackJsonp([113],{BIPZ:function(e,t){},aSDZ:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l("Fd2+"),a={data:function(){return{block:!0,user:{}}},components:{PublicHeader:l("Cz8s").a},methods:{onLoad:function(){var e=this;this.util.request({url:"wmall/member/profile"}).then(function(t){var l=t.data.message;l.errno||(e.user=l.message)})},onLogout:function(){var e=this;i.a.confirm({title:"温馨提示",message:"确定退出登录吗？"}).then(function(){e.util.removeStorage("itoken"),e.util.delCookie("itoken"),e.$router.replace(e.util.getUrl({path:"/pages/auth/login"}))})}},mounted:function(){this.onLoad()}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"memberProfile"}},[l("public-header",{attrs:{title:"会员资料"}}),e._v(" "),l("div",{staticClass:"content"},[l("van-cell-group",[l("van-cell",{attrs:{title:"会员uid",value:e.user.uid}}),e._v(" "),l("van-cell",{attrs:{title:"手机号",value:e.user.mobile?e.user.mobile:"绑定手机号",to:e.util.getUrl({path:"/pages/member/bind?mobile="+e.user.mobile}),"is-link":""}}),e._v(" "),l("van-cell",{attrs:{title:"用户名",value:e.user.realname,"is-link":"",to:e.util.getUrl({path:"/pages/member/profileUsername?username="+e.user.realname})}}),e._v(" "),l("van-cell",{attrs:{title:"账号密码",value:"修改","is-link":"",to:e.util.getUrl({path:"/pages/member/profilePassword"})}})],1),e._v(" "),l("div",{staticClass:"submit"},[e.util.isWeixin()?e._e():l("van-button",{attrs:{type:"danger",size:"normal",block:"block"},on:{click:e.onLogout}},[e._v("退出登录")])],1)],1)],1)},staticRenderFns:[]};var n=l("VU/8")(a,r,!1,function(e){l("BIPZ")},null,null);t.default=n.exports}});
//# sourceMappingURL=113.e1edf559645daffc17aa.js.map