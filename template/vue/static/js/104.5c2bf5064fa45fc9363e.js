webpackJsonp([104],{"H/iz":function(t,e){},V37o:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),a=s("mzkE"),n={components:{PublicHeader:i.a,PublicFooter:a.a},data:function(){return{fee:"",config:{},storebd_user:{},showPreLoading:!0}},methods:{onLoad:function(){var t=this;this.showPreLoading=!0,this.util.request({url:"storebd/getcash/application",data:{menufooter:1}}).then(function(e){t.showPreLoading=!1;var s=e.data.message;t.config=s.message.config,t.storebd_user=s.message.storebd_user})},onSubmit:function(){var t=this;if(this.fee<=0)return this.$toast("请填写提现金额"),!1;this.util.request({url:"storebd/getcash/application",data:{fee:this.fee},method:"POST"}).then(function(e){var s=e.data.message;0==s.errno?(t.$toast("申请提现成功"),t.$router.replace(t.util.getUrl({path:"/package/pages/storebd/index"}))):t.$toast(s.message)})}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"store-getcash"}},[s("public-header",{attrs:{title:"立即提现"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"list-block"},[s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-inner"},[s("div",{staticClass:"item-title"},[t._v("\n\t\t\t\t\t\t\t账户可用余额："),s("span",{staticClass:"price"},[t._v(t._s(t.Lang.dollarSign)+" "+t._s(t.storebd_user.credit2))])])])])]),t._v(" "),s("div",{staticClass:"list-block"},[s("div",{staticClass:"list-item"},[s("div",{staticClass:"list-title"},[t._v("提现金额")]),t._v(" "),s("div",{staticClass:"list-input"},[s("van-cell-group",[s("van-field",{attrs:{type:"number"},model:{value:t.fee,callback:function(e){t.fee=e},expression:"fee"}})],1)],1),t._v(" "),t.config.fee_getcash?s("div",{staticClass:"help"},[s("p",[t._v("最低提现金额为"+t._s(t.config.fee_getcash.get_cash_fee_min)+t._s(t.Lang.dollarSignCn))]),t._v(" "),s("p",[t._v("提现费率为"+t._s(t.config.fee_getcash.get_cash_fee_rate)+"%")])]):t._e()])]),t._v(" "),s("div",{staticClass:"tab"},[s("div",{staticClass:"button-fill",on:{click:t.onSubmit}},[t._v("提现")])])]),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.showPreLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[]};var r=s("VU/8")(n,o,!1,function(t){s("H/iz")},null,null);e.default=r.exports}});
//# sourceMappingURL=104.5c2bf5064fa45fc9363e.js.map