webpackJsonp([93],{Ylwl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Gu7T"),n=e.n(r),i=e("Cz8s"),s=e("deIj"),c={data:function(){return{records:{type:"",data:[]}}},components:{publicHeader:i.a},methods:{onLoad:function(){var t=this;Object(s.a)({vue:this,data:{id:t.id},url:"plateform/merchant/activity/post",success:function(a){t.records.data=[].concat(n()(t.records.data),n()(a.records.data)),t.records.type=a.records.type,console.log(t.records.data)}})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"activity-post"}},[e("public-header",{attrs:{title:"创建商户活动"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"activity-group"},[e("div",{staticClass:"tip"},[t._v("活动时间")]),t._v(" "),e("van-cell-group",[e("van-field",{attrs:{label:"开始时间",placeholder:"未设置","is-link":""}}),t._v(" "),e("van-field",{attrs:{label:"结束时间",placeholder:"未设置","is-link":""}})],1),t._v(" "),"discount"==t.records.type?[e("div",{staticClass:"tip"},[t._v("满减优惠")]),t._v(" "),e("van-cell-group",[e("van-field",{attrs:{label:"消费满(元)",placeholder:"未设置",type:"number","input-align":"right"},model:{value:t.records.data.condition,callback:function(a){t.$set(t.records.data,"condition",a)},expression:"records.data.condition"}}),t._v(" "),e("van-field",{attrs:{label:"立减(元)",placeholder:"未设置",type:"number","input-align":"right"},model:{value:t.records.data.back,callback:function(a){t.$set(t.records.data,"back",a)},expression:"records.data.back"}}),t._v(" "),e("van-field",{attrs:{label:"代理商承担",placeholder:"未设置",type:"number","input-align":"right"},model:{value:t.records.data.agent_charge,callback:function(a){t.$set(t.records.data,"agent_charge",a)},expression:"records.data.agent_charge"}}),t._v(" "),e("van-field",{attrs:{label:"平台承担",placeholder:"未设置",type:"number","input-align":"right"},model:{value:t.records.data.plateform_charge,callback:function(a){t.$set(t.records.data,"plateform_charge",a)},expression:"records.data.plateform_charge"}})],1),t._v(" "),e("div",{staticClass:"remove-activity"},[t._v("删除")])]:t._e()],2),t._v(" "),t._m(0),t._v(" "),t._m(1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"append-activity border-1px-tb"},[a("i",{staticClass:"icon icon-add"}),this._v("\n\t\t\t新建一级优惠\n\t\t")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-group van-col"},[a("button",{staticClass:"bg-primary van-button van-button--default van-button--normal van-button--block"},[a("span",{staticClass:"van-button__text"},[this._v("保存")])])])}]};var l=e("VU/8")(c,o,!1,function(t){e("k3h7")},null,null);a.default=l.exports},k3h7:function(t,a){}});