webpackJsonp([90],{"/26s":function(t,e){},"04vE":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("Cz8s"),i=o("+CBI"),a=o("deIj"),n={data:function(){return{showPreLoading:!0,order:{use_default_accept_address:"1",audit_accept_address:"1",check_member_drag_address:"1"}}},components:{publicHeader:s.a,iswitch:i.a},methods:{onLoad:function(){Object(a.a)({vue:this,autoAssign:!0,variable:"order",url:"plateform/config/takeout/order"})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})},onSubmit:function(){Object(a.c)({vue:this,url:"plateform/config/takeout/order",data:this.order})}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"takeout-ordersubmit"}},[o("public-header",{attrs:{title:"订单提交"}}),t._v(" "),o("div",{staticClass:"content"},[o("van-cell-group",[o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("提交订单页面默认收货地址")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.order.use_default_accept_address,"condition-open":"1","condition-close":"2","text-open":"ON","text-close":"OFF",keys:"order.use_default_accept_address"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("提交订单时需确认收货信息")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.order.audit_accept_address,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"order.audit_accept_address"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("防客户拖定位降配送费"),o("br"),o("span",{staticClass:"font-12 c-gray"},[t._v("仅适用于按距离收取配送费的计费模式")])]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.order.check_member_drag_address,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"order.check_member_drag_address"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),o("div",{staticClass:"padding-15"},[o("van-button",{staticClass:"bg-primary font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?o("iloading"):t._e()],1)},staticRenderFns:[]};var r=o("VU/8")(n,c,!1,function(t){o("/26s")},null,null);e.default=r.exports}});
//# sourceMappingURL=90.722c207e91da5a0979ba.js.map