webpackJsonp([40],{fp1N:function(t,i){},p8kq:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l={components:{publicHeader:e("Cz8s").a},data:function(){return{id:0}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"deliveryer-guide"}},[e("public-header",{attrs:{title:"配送员详情"}}),t._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",{staticClass:"margin-10-t"},[e("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/deliveryer/profile",query:{id:t.id}})}},[e("i",{staticClass:"icon icon-profilefill c-info",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("div",{attrs:{slot:"title"},slot:"title"},[t._v("个人信息")])]),t._v(" "),e("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/deliveryer/power",query:{id:t.id}})}},[e("i",{staticClass:"icon icon-waimai c-danger",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("div",{attrs:{slot:"title"},slot:"title"},[t._v("配送权限")])]),t._v(" "),e("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/deliveryer/comision",query:{id:t.id}})}},[e("i",{staticClass:"icon icon-moneybagfill c-primary",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),e("div",{attrs:{slot:"title"},slot:"title"},[t._v("提成及提现")])])],1),t._v(" "),t._e()],1)],1)},staticRenderFns:[]};var r=e("VU/8")(l,s,!1,function(t){e("fp1N")},null,null);i.default=r.exports}});