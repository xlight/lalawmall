webpackJsonp([21],{Ge5H:function(t,e){},bXtx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Cz8s"),o=a("deIj"),i={components:{publicHeader:s.a},data:function(){return{getCode:!0,codeText:"发送验证码",downcount:60,islegal:!0,mobile:"",code:"",password:"",repassword:"",captcha:"",captcha_img:"",showPreLoading:!0}},methods:{onLoad:function(){this.onRefreshCaptcha(),this.showPreLoading=!1},onGetCode:function(){var t=this;return!!t.getCode&&(t.mobile?t.util.isValidMobile(t.mobile)?this.captcha?void Object(o.a)({vue:t,url:"system/common/code",method:"POST",data:{mobile:t.mobile,captcha:t.captcha},success:function(e){t.getCode=!1,t.codeText=t.downcount+"秒后重新获取";var a=setInterval(function(){t.downcount--,t.downcount<=0?(clearInterval(a),t.codeText="获取验证码",t.downcount=60,t.getCode=!0):t.codeText=t.downcount+"秒后重新获取"},1e3);t.util.$toast("验证码发送成功, 请注意查收")}}):(this.$toast("请输入图形验证码"),!1):(t.util.$toast("手机号格式错误"),!1):(t.util.$toast("手机号不能为空"),!1))},onSubmit:function(){if(!this.mobile)return this.util.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.mobile))return this.util.$toast("手机号格式错误"),!1;if(!this.code)return this.util.$toast("请输入短信验证码"),!1;if(!this.password)return this.util.$toast("密码不能为空"),!1;var t=this.password.length;if(t<8||t>20)return this.util.$toast("请输入8-20位密码"),!1;if(!/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(this.password))return this.util.$toast("密码必须由数字和字母组合"),!1;if(!this.repassword)return this.util.$toast("请重复输入密码"),!1;if(this.password!=this.repassword)return this.util.$toast("两次密码输入不一致"),!1;var e={mobile:this.mobile,code:this.code,password:this.password,repassword:this.repassword};Object(o.c)({vue:this,url:"delivery/auth/forget/index",data:e,message:"找回成功",redirect:this.util.getUrl({path:"/pages/auth/login"})})},onRefreshCaptcha:function(){var t=this;this.util.request({url:"delivery/auth/forget/captcha"}).then(function(e){t.captcha_img=e.data.message.message.captcha})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"auth-forget"}},[a("public-header",{attrs:{title:"忘记密码"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-cell-group",{staticClass:"margin-10-t"},[a("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),a("van-field",{attrs:{type:"number",label:"图形验证码",placeholder:"请输入图形验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),t._v(" "),a("van-field",{attrs:{center:"",clearable:"",label:"手机验证码",placeholder:"请输入6位短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[a("van-button",{staticClass:"bg-theme",attrs:{slot:"button",size:"small",disabled:!t.getCode},on:{click:t.onGetCode},slot:"button"},[t._v(t._s(t.codeText))])],1),t._v(" "),a("van-field",{attrs:{label:"新密码",placeholder:"请输入您的登录密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("van-field",{attrs:{label:"确认新密码",placeholder:"请确认您的登录密码",type:"password"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),t._v(" "),a("div",{staticClass:"email-img",on:{click:t.onRefreshCaptcha}},[a("img",{attrs:{src:t.captcha_img,alt:""}})]),t._v(" "),a("div",{staticClass:"padding-15"},[a("van-button",{staticClass:"bg-theme font-16",attrs:{size:"normal",block:"",disabled:!t.islegal},on:{click:t.onSubmit}},[t._v("立即找回")])],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var n=a("VU/8")(i,l,!1,function(t){a("Ge5H")},"data-v-4aa1986b",null);e.default=n.exports}});