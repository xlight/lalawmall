webpackJsonp([51],{"7Iyg":function(t,e){},Ls0E:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("deIj"),i={data:function(){return{config:{logo:"",title:""},username:"",password:"",islegal:!1}},methods:{onLoad:function(){var t=this;Object(a.a)({vue:t,url:"plateform/auth/login",autoAssign:!0,variable:"config",success:function(e){t.islegal=!0}})},onSubmit:function(){var t=this;t.islegal&&(t.username?t.password?(t.islegal=!1,Object(a.c)({vue:t,url:"plateform/auth/login",data:{username:t.username,password:t.password},success:function(e){if(t.util.setStorage("ipuser",e.user),t.util.setStorage("iptoken",e.user.token),!t.util.isWeixin()){var s=window.redirct_url;return(!s||s&&-1!=s.path.indexOf("pages/auth/"))&&(s={path:"/pages/order/takeout"}),void t.$router.replace(t.util.getUrl(s))}t.util.jsUrl("wx:scanCode")},fail:function(e){t.util.$toast(e.message),t.islegal=!0}})):t.util.$toast("请输入登录密码"):t.util.$toast("请输入手机号"))}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"auth-login"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"plateform"},[s("div",{staticClass:"plateform-bg bg-primary"}),t._v(" "),s("div",{staticClass:"plateform-info"},[s("div",{staticClass:"logo-wrap"},[s("img",{staticClass:"img-100",attrs:{src:t.config.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.config.title))])])]),t._v(" "),s("div",{staticClass:"inputs-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入登录密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("van-button",{staticClass:"btn-login",attrs:{size:"large",type:"primary",disabled:!t.islegal,block:""},on:{click:t.onSubmit}},[t._v("登录")])],1)])},staticRenderFns:[]};var r=s("VU/8")(i,o,!1,function(t){s("7Iyg")},null,null);e.default=r.exports}});