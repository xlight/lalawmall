webpackJsonp([12],{aNYW:function(t,e){},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var s,o=a("C4MV"),i=(s=o)&&s.__esModule?s:{default:s};e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},bXtx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("bOdI"),o=a.n(s),i={data:function(){var t;return t={mobile:"",password:"",repassword:"",captcha:"",code:"",config:{},downcount:60,captcha_img:"",code_html:"获取验证码"},o()(t,"downcount",60),o()(t,"code_disabled",!1),t},methods:{onRefreshCaptcha:function(){var t=this;this.util.request({url:"wmall/auth/forget/captcha"}).then(function(e){t.captcha_img=e.data.message.message.captcha})},onSubmit:function(){var t=this;if(!this.mobile)return this.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.mobile))return this.$toast("手机号格式错误"),!1;if(!this.captcha)return this.$toast("请输入图形验证码"),!1;if(!this.code)return this.$toast("请输入短信验证码"),!1;if(!this.password)return this.$toast("密码不能为空"),!1;var e=this.password.length;if(e<8||e>20)return this.$toast("请输入8-20位密码"),!1;return/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(this.password)?this.repassword?this.password!=this.repassword?(this.$toast("两次密码输入不一致"),!1):void this.util.request({url:"wmall/auth/forget",method:"POST",data:{mobile:this.mobile,code:this.code,password:this.password,repassword:this.repassword}}).then(function(e){var a=e.data.message;if(a.errno)return t.util.$toast(a.message,"",1e3),!1;a=a.message,t.util.setStorage("itoken",a.member.token),t.$router.replace(t.util.getUrl({path:"/pages/home/index"}))}):(this.$toast("请重复输入密码"),!1):(this.$toast("密码必须由数字和字母组合"),!1)},onGetCode:function(){var t=this;return 60==this.downcount&&(this.mobile?this.util.isValidMobile(this.mobile)?this.captcha?void this.util.request({url:"system/common/code",method:"POST",data:{mobile:this.mobile,captcha:this.captcha}}).then(function(e){var a=e.data.message;if(a.errno)t.$toast(a.message);else{var s=setInterval(function(){t.downcount--,t.downcount<=0?(clearInterval(s),t.code_html="获取验证码",t.downcount=60):(t.code_disabled=!0,t.code_html=t.downcount+"秒后重新获取")},1e3);t.$toast("验证码发送成功, 请注意查收")}}):(this.$toast("请输入图形验证码"),!1):(this.$toast("手机号格式错误"),!1):(this.$toast("请输入手机号"),!1))},onLoad:function(){var t=this;this.util.request({url:"wmall/auth/forget"}).then(function(e){var a=e.data.message;if(a.errno)return t.util.$toast(a.message,"",1e3),!1;t.config=a.message.config_mall,t.captcha_img=a.message.captcha})}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"forget"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[t.config.logo?a("img",{attrs:{src:t.config.logo,alt:""}}):a("img",{attrs:{src:"static/img/head.png",alt:""}})]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.config.title))])]),t._v(" "),a("div",{staticClass:"list-block"},[a("van-cell-group",[a("van-field",{attrs:{"left-icon":"phone1",type:"number",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),a("van-field",{attrs:{"left-icon":"code",type:"number",placeholder:"请输入图形验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),t._v(" "),a("van-field",{attrs:{"left-icon":"email",type:"number",placeholder:"请输入6位短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t._v(" "),a("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:"请输入新密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:"请重复输入新密码"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),t._v(" "),a("div",{staticClass:"email-img",on:{click:t.onRefreshCaptcha}},[a("img",{attrs:{src:t.captcha_img,alt:""}})]),t._v(" "),a("div",{staticClass:"list-password",class:{disabled:t.code_disabled},on:{click:t.onGetCode}},[t._v(t._s(t.code_html)),a("van-icon",{attrs:{name:"right"}})],1),t._v(" "),a("div",{staticClass:"content-padded"},[a("div",{staticClass:"button-register",on:{click:t.onSubmit}},[t._v("立即找回")])])],1),t._v(" "),a("div",{staticClass:"text"},[a("p",[t._v("已有账号？"),a("router-link",{staticClass:"text-a",attrs:{to:t.util.getUrl({path:"/pages/auth/login"})}},[t._v("立即登录")])],1)])])])},staticRenderFns:[]};var l=a("VU/8")(i,n,!1,function(t){a("aNYW")},null,null);e.default=l.exports}});
//# sourceMappingURL=12.b8211abb2a1041bc5fb0.js.map