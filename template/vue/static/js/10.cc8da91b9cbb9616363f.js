webpackJsonp([10],{"M/F+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("bOdI"),i=s.n(a),o={data:function(){var t;return t={mobile:"",password:"",repassword:"",captcha:"",code:"",config:{},downcount:60,captcha_img:"",code_html:"获取验证码"},i()(t,"downcount",60),i()(t,"code_disabled",!1),i()(t,"verify",1),t},methods:{onRefreshCaptcha:function(){var t=this;this.util.request({url:"wmall/auth/register/captcha"}).then(function(e){t.captcha_img=e.data.message.message.captcha})},onSubmit:function(){var t=this;if(!this.mobile)return this.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.mobile))return this.$toast("手机号格式错误"),!1;if(1==this.verify&&!this.code)return this.$toast("请输入短信验证码"),!1;if(!this.password)return this.$toast("密码不能为空"),!1;var e=this.password.length;if(e<8||e>20)return this.$toast("请输入8-20位密码"),!1;return/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(this.password)?this.repassword?this.password!=this.repassword?(this.$toast("两次密码输入不一致"),!1):void this.util.request({url:"wmall/auth/register",method:"POST",data:{mobile:this.mobile,code:this.code,password:this.password,repassword:this.repassword}}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message,"",1e3),!1;s=s.message,t.util.setStorage("itoken",s.member.token),t.$router.replace(t.util.getUrl({path:"/pages/home/index"}))}):(this.$toast("请重复输入密码"),!1):(this.$toast("密码必须由数字和字母组合"),!1)},onGetCode:function(){var t=this;return 1==this.verify&&(60==this.downcount&&(this.mobile?this.util.isValidMobile(this.mobile)?this.captcha?void this.util.request({url:"system/common/code",method:"POST",data:{mobile:this.mobile,captcha:this.captcha}}).then(function(e){var s=e.data.message;if(s.errno)t.$toast(s.message);else{var a=setInterval(function(){t.downcount--,t.downcount<=0?(clearInterval(a),t.code_html="获取验证码",t.downcount=60):(t.code_disabled=!0,t.code_html=t.downcount+"秒后重新获取")},1e3);t.$toast("验证码发送成功, 请注意查收")}}):(this.$toast("请输入图形验证码"),!1):(this.$toast("手机号格式错误"),!1):(this.$toast("请输入手机号"),!1)))},onLoad:function(){var t=this;this.util.request({url:"wmall/auth/register"}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message,"",1e3),!1;t.config=s.message.config_mall,t.captcha_img=s.message.captcha,t.verify=s.message.verify})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"register"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[t.config.logo?s("img",{attrs:{src:t.config.logo,alt:""}}):s("img",{attrs:{src:"static/img/head.png",alt:""}})]),t._v(" "),s("div",{staticClass:"name"},[t._v(t._s(t.config.title))])]),t._v(" "),s("div",{staticClass:"list-block"},[s("van-cell-group",[s("van-field",{attrs:{"left-icon":"phone1",type:"number",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),1==t.verify?[s("van-field",{attrs:{"left-icon":"code",type:"number",placeholder:"请输入图形验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),t._v(" "),s("van-field",{attrs:{"left-icon":"email",type:"number",placeholder:"请输入6位短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})]:t._e(),t._v(" "),s("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:"请重复输入密码"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],2),t._v(" "),1==t.verify?[s("div",{staticClass:"email-img",on:{click:t.onRefreshCaptcha}},[s("img",{attrs:{src:t.captcha_img,alt:""}})]),t._v(" "),1==t.verify?s("div",{staticClass:"list-password",class:{disabled:t.code_disabled},on:{click:t.onGetCode}},[t._v(t._s(t.code_html)),s("van-icon",{attrs:{name:"right"}})],1):t._e()]:t._e(),t._v(" "),s("div",{staticClass:"content-padded"},[s("div",{staticClass:"button-register",on:{click:t.onSubmit}},[t._v("立即注册")])])],2),t._v(" "),s("div",{staticClass:"text"},[s("p",[t._v("已有账号？"),s("router-link",{staticClass:"text-a",attrs:{to:t.util.getUrl({path:"/pages/auth/login"})}},[t._v("立即登录")])],1)])])])},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(t){s("Wm/A")},null,null);e.default=l.exports},"Wm/A":function(t,e){},bOdI:function(t,e,s){"use strict";e.__esModule=!0;var a,i=s("C4MV"),o=(a=i)&&a.__esModule?a:{default:a};e.default=function(t,e,s){return e in t?(0,o.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}}});
//# sourceMappingURL=10.cc8da91b9cbb9616363f.js.map