webpackJsonp([31],{"5/jo":function(t,e){},Ls0E:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Cz8s"),o=a("deIj"),s={components:{publicHeader:i.a},data:function(){return{config:{title:"",logo:""},mobile:"",password:"",showPreLoading:!0,islegal:!1}},methods:{onLoad:function(){var t=this,e=t.util.getStorage("clerkInfo");if(e&&e.token)return alert(10),void t.$router.replace(t.util.getUrl({path:"/pages/order/index"}));Object(o.a)({vue:t,url:"manage/auth/login",data:{nosid:1},autoAssign:!0,variable:"config",success:function(){t.islegal=!0}})},onSubmit:function(){var t=this;t.mobile?t.password?Object(o.c)({vue:t,url:"manage/auth/login",data:{mobile:t.mobile,password:t.password,nosid:1},success:function(e){t.util.setStorage("clerkInfo",{token:e.clerk.token});var a=e.sids;if(alert(11),1!=a.length){if(a.length>1)return alert(15),void t.util.$toast("登录成功",t.util.getUrl({path:"/pages/shop/select"}),1e3,"replace")}else{alert(12),t.util.setStorage("__sid",a[0]);var i=t.util.getStorage("forwardUrl");i?(alert(13),t.util.$toast("登录成功","",1e3),window.location.href=i):(alert(14),t.util.$toast("登录成功",t.util.getUrl({path:"/pages/order/index"}),1e3,"replace"))}},fail:function(e){t.util.$toast(e.message),t.islegal=!0}}):t.util.$toast("请输入密码"):t.util.$toast("请输入手机号")}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"auth-login"}},[a("public-header",{attrs:{title:"登录"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"plateform-logo"},[a("img",{staticClass:"wh-100",attrs:{src:t.config.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"plateform-title"},[t._v(t._s(t.config.title))]),t._v(" "),a("div",{staticClass:"input-group"},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.mobile,expression:"mobile",modifiers:{number:!0}}],attrs:{placeholder:"请输入手机号",type:"text"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"operation"},[a("router-link",{staticClass:"flex font-14",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/auth/forget"})}},[t._v("\n\t\t\t\t忘记密码\n\t\t\t\t"),a("div",{staticClass:"icon icon-question1 margin-5-l"})])],1),t._v(" "),a("div",{staticClass:"save-btn"},[a("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:"",disabled:!t.islegal},on:{click:t.onSubmit}},[t._v("登录")])],1)]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var n=a("VU/8")(s,l,!1,function(t){a("5/jo")},null,null);e.default=n.exports}});
//# sourceMappingURL=31.564a448a1dedffbb636e.js.map