webpackJsonp([75],{"/6+U":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={data:function(){return{}},components:{publicHeader:s("Cz8s").a},methods:{}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"merchant-index"}},[s("public-header",{attrs:{title:"商户管理"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"group"},[s("van-row",{attrs:{gutter:"20"}},[t.util.checkperm("merchant.store")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/store"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-shop c-primary"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("商户列表")])])])],1):t._e(),t._v(" "),t.util.checkperm("merchant.activity")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/activity/list"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-presentfill c-danger"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("商户活动")])])])],1):t._e(),t._v(" "),t.util.checkperm("merchant.getcash")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/getcash"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-sponsor"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("提现申请")])])])],1):t._e(),t._v(" "),t.util.checkperm("merchant.current")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/current"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-money c-primary"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("账户明细")])])])],1):t._e(),t._v(" "),t.util.checkperm("merchant.settle")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/settle"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-home c-info"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("商户入驻")])])])],1):t._e(),t._v(" "),t.util.checkperm("merchant.storage")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/storage"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-deletefill"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("回收站")])])])],1):t._e(),t._v(" "),t.util.checkperm("merchant.report")?s("van-col",{attrs:{span:"8"}},[s("router-link",{staticClass:"merchant-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/merchant/report"})}},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon icon-survey"})]),t._v(" "),s("div",{staticClass:"bottom"},[s("span",[t._v("投诉列表")])])])],1):t._e()],1)],1)])],1)},staticRenderFns:[]};var c=s("VU/8")(i,e,!1,function(t){s("0zRB")},null,null);a.default=c.exports},"0zRB":function(t,a){}});