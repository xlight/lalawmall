webpackJsonp([29],{"7bJP":function(t,i){},VzVV:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=o("mvHQ"),e=o.n(n),a=o("woOf"),s=o.n(a),c=o("Cz8s"),l=o("deIj"),u={components:{publicHeader:c.a},data:function(){return{page_title:"",datePicker:{type:"",maxDate:new Date(2050,12),currentDate:new Date,status:!1,start:"",end:""},coupon:{condition1:0,discount1:0,use_days_limit1:0},popupShow:{coupon:!1,time:!1},coupons:[],filter:{items:{type:""}},activity:{title:"",amount:"",type_limit:1,condition:""},now_couponIndex:-1,showPreLoading:!0}},methods:{onLoad:function(){var t=this;Object(l.a)({vue:t,url:"manage/activity/index/activity_coupon",data:{filter:this.filter.items},success:function(i){t.islegal=!0,t.page_title=i.page_title;var o=t.util.formatDate(t.datePicker.currentDate);t.datePicker.start=t.datePicker.end=o},fail:function(i){var o="";-1e3==i.errno&&(o=t.util.getUrl({path:"pages/activity/index"})),t.util.$toast(i.message,o,1e3)}})},onToggleDatePicker:function(t){this.datePicker.status=!this.datePicker.status,t&&(this.datePicker.type=t)},onToggleCoupon:function(){if(!this.popupShow.coupon&&"couponGrant"==this.filter.items.type&&this.coupons.length>=1&&-1==this.now_couponIndex)return this.util.$toast("只能添加一张优惠券"),!1;this.popupShow.coupon=!this.popupShow.coupon,0==this.popupShow.coupon&&(this.now_couponIndex=-1)},onConfirmTime:function(t){var i=this.util.formatDate(t);this.datePicker[this.datePicker.type]=i,this.onToggleDatePicker()},onSelectGroup:function(t){this.activity.type_limit=t},onAddCoupon:function(){var t=parseFloat(this.coupon.discount1);if(t<=0)return this.util.$toast("请填写优惠金额"),!1;var i=parseFloat(this.coupon.condition1);if(i<t)return this.util.$toast("使用条件不能小于优惠金额"),!1;var o=parseFloat(this.coupon.use_days_limit1);if(o<=0)return this.util.$toast("请填写有效期"),!1;var n={condition:i,discount:t,use_days_limit:o};this.now_couponIndex>=0?this.coupons[this.now_couponIndex]=n:this.coupons.push(n),this.onToggleCoupon()},onEditCoupon:function(t){this.coupon.condition1=this.coupons[t].condition,this.coupon.discount1=this.coupons[t].discount,this.coupon.use_days_limit1=this.coupons[t].use_days_limit,this.now_couponIndex=t,this.onToggleCoupon()},onDelCoupon:function(t){this.coupons.splice(t,1)},onSubmit:function(){if(!this.filter.items.type)return this.util.$toast("请先选择活动类型"),!1;if(this.activity.amount<=0)return this.util.$toast("券包总数不能为空"),!1;if("couponCollect"==this.filter.items.type&&!this.activity.type_limit)return this.util.$toast("请选择面向人群"),!1;if(0==this.coupons.length)return this.util.$toast("请添加优惠券"),!1;var t=s()(this.activity,{starttime:this.datePicker.start,endtime:this.datePicker.end,coupons:this.coupons});Object(l.c)({vue:this,url:"manage/activity/index/activity_coupon",data:{type:this.filter.items.type,params:e()(t)},redirect:this.util.getUrl({path:"pages/activity/index"})})}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&this.query.type&&(this.filter.items.type=this.query.type)}},r={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"activity-coupon-collect"}},[o("public-header",{attrs:{title:t.page_title}}),t._v(" "),o("div",{staticClass:"content"},[o("van-cell-group",{staticClass:"margin-10-t"},[o("van-field",{attrs:{label:"活动名称",placeholder:"请输入活动名称","input-align":"right"},model:{value:t.activity.title,callback:function(i){t.$set(t.activity,"title",i)},expression:"activity.title"}})],1),t._v(" "),o("van-cell-group",{staticClass:"margin-10-t"},[o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("开始时间")]),t._v(" "),o("div",{staticClass:"c-gray",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleDatePicker("start")}},slot:"right-icon"},[t._v("\n\t\t\t\t\t"+t._s(this.datePicker.start?this.datePicker.start:"点击选择")+"\n\t\t\t\t\t"),o("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("结束时间")]),t._v(" "),o("div",{staticClass:"c-gray",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleDatePicker("end")}},slot:"right-icon"},[t._v("\n\t\t\t\t\t"+t._s(this.datePicker.end?this.datePicker.end:"点击选择")+"\n\t\t\t\t\t"),o("van-icon",{attrs:{name:"arrow"}})],1)])],1),t._v(" "),o("div",{staticClass:"activity-box margin-10-t"},[o("van-cell-group",[o("van-field",{attrs:{label:"券包总数",placeholder:"请输入券包总数","input-align":"right"},model:{value:t.activity.amount,callback:function(i){t.$set(t.activity,"amount",i)},expression:"activity.amount"}})],1),t._v(" "),"couponCollect"==t.filter.items.type?o("van-radio-group",{model:{value:t.activity.type_limit,callback:function(i){t.$set(t.activity,"type_limit",i)},expression:"activity.type_limit"}},[o("van-cell-group",{staticClass:"margin-10-t"},[o("van-field",{attrs:{label:"面向人群","input-align":"right"},model:{value:t.activity.condition,callback:function(i){t.$set(t.activity,"condition",i)},expression:"activity.condition"}}),t._v(" "),o("van-cell",{staticClass:"no-fix",attrs:{title:"新老用户通用",clickable:""},on:{click:function(i){t.onSelectGroup(1)}}},[o("van-radio",{attrs:{name:1}})],1),t._v(" "),o("van-cell",{staticClass:"no-fix",attrs:{title:"新用户",clickable:""},on:{click:function(i){t.onSelectGroup(2)}}},[o("van-radio",{attrs:{name:2}})],1)],1)],1):"couponGrant"==t.filter.items.type?o("van-cell-group",{staticClass:"margin-10-t"},[o("van-field",{attrs:{label:"返券条件",placeholder:"请输入满足返券金额","input-align":"right"},model:{value:t.activity.condition,callback:function(i){t.$set(t.activity,"condition",i)},expression:"activity.condition"}})],1):t._e(),t._v(" "),t.coupons.length>0?o("div",{staticClass:"coupon-container"},t._l(t.coupons,function(i,n){return o("div",{key:n,staticClass:"coupon-detail"},[o("div",{staticClass:"coupon-operation"},[o("div",{staticClass:"btn-coupon-edit",on:{click:function(i){t.onEditCoupon(n)}}},[t._v("编辑")]),t._v(" "),o("div",{staticClass:"btn-coupon-edit",on:{click:function(i){t.onDelCoupon(n)}}},[t._v("删除")])]),t._v(" "),o("div",{staticClass:"coupon-amount"},[o("div",{staticClass:"discount-amount"},[t._v(t._s(i.discount))]),t._v(" "),o("div",{staticClass:"font-12 c-gray padding-10-t"},[t._v("满"+t._s(i.condition)+"可用")])]),t._v(" "),o("div",{staticClass:"coupon-term"},[t._v("\n\t\t\t\t\t\t领取后\n\t\t\t\t\t\t"),o("span",[t._v(t._s(i.use_days_limit))]),t._v("\n\t\t\t\t\t\t天内有效\n\t\t\t\t\t")])])})):t._e(),t._v(" "),o("div",{staticClass:"add-coupon flex border-1px-tb",on:{click:t.onToggleCoupon}},[o("div",{staticClass:"icon icon-add"}),t._v(" "),o("div",[t._v("添加优惠券")])])],1),t._v(" "),o("div",{staticClass:"padding-15"},[o("van-button",{staticClass:"font-16 bg-info",attrs:{size:"normal",block:""},on:{click:function(i){t.onSubmit()}}},[t._v("确认并保存")])],1)],1),t._v(" "),t.showPreLoading?o("iloading"):t._e(),t._v(" "),o("van-popup",{staticClass:"popup-time",attrs:{position:"bottom"},model:{value:t.datePicker.status,callback:function(i){t.$set(t.datePicker,"status",i)},expression:"datePicker.status"}},[o("van-datetime-picker",{attrs:{type:"datetime","min-data":t.datePicker.currentDate,"max-date":t.datePicker.maxDate},on:{confirm:t.onConfirmTime,cancel:t.onToggleDatePicker},model:{value:t.datePicker.currentDate,callback:function(i){t.$set(t.datePicker,"currentDate",i)},expression:"datePicker.currentDate"}})],1),t._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:t.popupShow.coupon,callback:function(i){t.$set(t.popupShow,"coupon",i)},expression:"popupShow.coupon"}},[o("div",{staticClass:"popup-title"},[o("span",{staticClass:"c-info",on:{click:t.onToggleCoupon}},[t._v("取消")]),t._v(" "),o("span",[t._v("添加优惠券")]),t._v(" "),o("span",{staticClass:"c-info",on:{click:t.onAddCoupon}},[t._v("确定")])]),t._v(" "),o("div",{staticClass:"popup-content"},[o("van-cell-group",[o("van-field",{attrs:{label:"优惠券金额",placeholder:"请输入优惠券金额","input-align":"right"},model:{value:t.coupon.discount1,callback:function(i){t.$set(t.coupon,"discount1",i)},expression:"coupon.discount1"}}),t._v(" "),o("van-field",{attrs:{label:"满多少"+t.Lang.dollarSignCn+"可用",placeholder:"请输入使用条件","input-align":"right"},model:{value:t.coupon.condition1,callback:function(i){t.$set(t.coupon,"condition1",i)},expression:"coupon.condition1"}}),t._v(" "),o("van-field",{attrs:{label:"领取有效期",placeholder:"请输入有效期","input-align":"right"},model:{value:t.coupon.use_days_limit1,callback:function(i){t.$set(t.coupon,"use_days_limit1",i)},expression:"coupon.use_days_limit1"}})],1)],1)])],1)},staticRenderFns:[]};var p=o("VU/8")(u,r,!1,function(t){o("7bJP")},null,null);i.default=p.exports}});
//# sourceMappingURL=29.4682e44259d95a023282.js.map