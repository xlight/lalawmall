webpackJsonp([11],{Ls0E:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Cz8s"),i=a("deIj"),s={data:function(){return{config:{logo:""},mobile:"",password:"",showPreLoading:!0}},components:{publicHeader:o.a},methods:{onLoad:function(){this.util.getStorage("idtoken")?this.$router.replace(this.util.getUrl({path:"/pages/order/takeout"})):Object(i.a)({vue:this,url:"delivery/auth/login",autoAssign:!0,variable:"config"})},onSubmit:function(){var t=this;t.mobile?t.password?Object(i.c)({vue:t,url:"delivery/auth/login",data:{mobile:t.mobile,password:t.password},success:function(e){t.util.setStorage("idtoken",e.deliveryer.token);var a=window.redirct_url;(!a||a&&-1!=a.path.indexOf("pages/auth/"))&&(a={path:"/pages/order/takeout"}),t.$router.replace(t.util.getUrl(a))}}):t.util.$toast("请输入密码"):t.util.$toast("请输入手机号")}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"auth-login"}},[a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"login-group"},[a("div",{staticClass:"login-avatar"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img-100",attrs:{src:t.config.logo,alt:""}})])]),t._v(" "),a("div",{staticClass:"login-input"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.mobile,expression:"mobile",modifiers:{number:!0}}],staticClass:"c-gray login-info",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("div",{staticClass:"flex-lr login-info"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"c-gray login-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("router-link",{staticClass:"forget",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/auth/forget"})}},[t._v("忘记密码？\n\t\t\t\t\t")])],1)]),t._v(" "),a("div",{staticClass:"login-button btn-group"},[a("button",{staticClass:"font-16 van-button van-button--normal van-button--block ",on:{click:t.onSubmit}},[t._v("登陆\n\t\t\t\t")])])])]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-header"},[e("div",{staticClass:"login-title"},[this._v("欢迎登陆")])])}]};var r=a("VU/8")(s,n,!1,function(t){a("Rr+t")},null,null);e.default=r.exports},"Rr+t":function(t,e){}});
//# sourceMappingURL=11.6a918c5addbcc31548be.js.map