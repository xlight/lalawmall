webpackJsonp([29],{"c/2g":function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("Cz8s"),i=t("deIj"),c={data:function(){return{channel:"weixin",account:{},get_fee:"",showPreLoading:!0,islegal:!1,config:{}}},components:{publicHeader:e.a},methods:{onLoad:function(){var a=this;Object(i.a)({vue:a,url:"manage/finance/getcash/index",autoAssign:!0,variable:"account",success:function(n){a.islegal=!0,a.config=n.config}})},onSubmit:function(){var a=this;if(!a.islegal)return!1;var n=parseFloat(a.get_fee);if(isNaN(n)||n<=0)return a.util.$toast("提现金额有误"),!1;if(n>a.account.amount)return a.util.$toast("提现金额不能大于账户可用余额"),!1;a.islegal=!1;var t=(n*a.account.fee_rate/100).toFixed(2);t=Math.max(t,a.account.fee_min),a.account.fee_max>0&&(t=Math.min(t,a.account.fee_max));var e=(n-(t=parseFloat(t))).toFixed(2),c="提现金额"+n+a.Lang.dollarSignCn+", 手续费"+t+a.Lang.dollarSignCn+",实际到账"+e+a.Lang.dollarSignCn+", 确定提现吗";Object(i.c)({vue:a,url:"manage/finance/getcash/getcash",confirm:c,data:{fee:n,channel:a.channel},success:function(n){a.util.$toast(n,a.util.getUrl({path:"/pages/finance/index"}),1e3)},fail:function(n){a.util.$toast(n),a.islegal=!0}})}},mounted:function(){this.onLoad()}},l={render:function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{attrs:{id:"finance-getcash"}},[t("public-header",{attrs:{title:"申请提现"}}),a._v(" "),t("div",{staticClass:"content"},[t("van-cell-group",{staticClass:"margin-10-t"},[t("van-cell",[t("div",{attrs:{slot:"title"},slot:"title"},[a._v("\n\t\t\t\t\t账户可用余额:\n\t\t\t\t\t"),t("span",{staticClass:"c-info margin-5-l"},[a._v(a._s(a.Lang.dollarSign)+a._s(a.account.amount))])])])],1),a._v(" "),t("van-cell-group",{staticClass:"margin-10-t padding-15 border-0px"},[t("p",{staticClass:"font-14 margin-10-b"},[a._v("提现金额")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.get_fee,expression:"get_fee",modifiers:{number:!0}}],staticClass:"getcash-num",attrs:{type:"text",placeholder:"请输入提现金额"},domProps:{value:a.get_fee},on:{input:function(n){n.target.composing||(a.get_fee=a._n(n.target.value))},blur:function(n){a.$forceUpdate()}}}),a._v(" "),t("div",{staticClass:"getcash-rule"},[t("p",[a._v("最低提现金额为"+a._s(a.account.fee_limit)+a._s(a.Lang.dollarSignCn))]),a._v(" "),t("p",[a._v("提现费率为"+a._s(a.account.fee_rate)+"%，最低收取"+a._s(a.account.fee_min)+a._s(a.Lang.dollarSignCn)+"，最高收取"+a._s(a.account.fee_max)+a._s(a.Lang.dollarSignCn))])])]),a._v(" "),a.config&&a.config.type?t("van-radio-group",{model:{value:a.channel,callback:function(n){a.channel=n},expression:"channel"}},[t("p",{staticClass:"getcash-type"},[a._v("提现方式")]),a._v(" "),t("van-cell-group",{staticClass:"border-0px"},[t("van-cell",{attrs:{title:"微信提现",clickable:""},on:{click:function(n){a.channel="weixin"}}},[t("van-radio",{attrs:{name:"weixin"}})],1),a._v(" "),1==a.config.type.alipay?t("van-cell",{attrs:{title:"支付宝提现",clickable:""},on:{click:function(n){a.channel="alipay"}}},[t("van-radio",{attrs:{name:"alipay"}})],1):a._e(),a._v(" "),1==a.config.type.bank?t("van-cell",{attrs:{title:"银行卡提现",clickable:""},on:{click:function(n){a.channel="bank"}}},[t("van-radio",{attrs:{name:"bank"}})],1):a._e()],1)],1):a._e(),a._v(" "),t("div",{staticClass:"padding-15"},[t("van-button",{staticClass:"font-16 bg-info",attrs:{size:"normal",disabled:!a.islegal,block:""},on:{click:a.onSubmit}},[a._v("提现")])],1)],1),a._v(" "),a.showPreLoading?t("iloading"):a._e()],1)},staticRenderFns:[]};var s=t("VU/8")(c,l,!1,function(a){t("lK8n")},null,null);n.default=s.exports},lK8n:function(a,n){}});
//# sourceMappingURL=29.fec2ab926aaa43fb5271.js.map