webpackJsonp([60],{"31vp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Cz8s"),s=t("deIj"),v={data:function(){return{id:0,showPreLoading:!0,getcashDetail:{status:0,get_fee:0,trade_no:"",take_fee:0,final_fee:0,addtime:"",status_cn:""}}},components:{publicHeader:i.a},methods:{onLoad:function(){Object(s.a)({vue:this,url:"manage/finance/getcashRecord/detail",autoAssign:!0,variable:"getcashDetail",data:{id:this.id}})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},_={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"getcashRecord-detail"}},[t("public-header",{attrs:{title:"交易详情"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"van-form-preview"},[t("div",{staticClass:"van-form-preview__hd"},[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("提现金额")]),e._v(" "),t("div",{staticClass:"van-form-preview__value_in-hd",class:{"c-primary":1==e.getcashDetail.status,"c-danger":1!=e.getcashDetail.status}},[e._v(e._s(e.Lang.dollarSign)+e._s(e.getcashDetail.get_fee))])])]),e._v(" "),t("div",{staticClass:"van-form-preview__bd"},[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("订单号")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcashDetail.trade_no))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("提现金额")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcashDetail.get_fee))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("手续费")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcashDetail.take_fee))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("实际到账")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcashDetail.final_fee))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("申请时间")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcashDetail.addtime))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("交易状态")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcashDetail.status_cn))])])])])]),e._v(" "),e.showPreLoading?t("iloading"):e._e()],1)},staticRenderFns:[]};var r=t("VU/8")(v,_,!1,function(e){t("TN3T")},null,null);a.default=r.exports},TN3T:function(e,a){}});
//# sourceMappingURL=60.05115edd9ea8cbf692d7.js.map