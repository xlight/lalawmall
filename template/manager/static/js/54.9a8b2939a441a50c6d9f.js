webpackJsonp([54],{izOG:function(t,s){},pzx7:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Cz8s"),a=i("mzkE"),l=i("deIj"),o=i("+CBI"),n={data:function(){return{store:{},manager:{},stat:{},notice:30,order_notice_num:0,showPreLoading:!0,menufooter:{}}},components:{publicHeader:e.a,publicFooter:a.a,iswitch:o.a},methods:{onLoad:function(){var t=this;Object(l.a)({vue:t,url:"manage/shop/index/index",data:{menufooter:1},success:function(s){t.store=s.store,t.manager=s.manager,t.stat=s.stat,t.notice=s.notice,t.order_notice_num=s.order_notice_num}})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.keys,value:t.value,url:"manage/shop/index/status",data:{type:t.type,value:t.value}})},onLoginout:function(){var t=this;this.$dialog.confirm({title:"温馨提示",message:"确定退出登录吗？"}).then(function(){t.util.removeStorage("clerkInfo"),t.util.isCloud()&&(api.removePrefs({key:"clerkInfo"}),api.removePrefs({key:"sid"})),t.$router.replace(t.util.getUrl({path:"/pages/auth/login"}))})}},created:function(){},mounted:function(){this.onLoad(),this.util.imap(),this.util.icloudapi()}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"store-setting"}},[i("public-header",{attrs:{title:"商家中心"}}),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:t.store.logo,alt:""}})]),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(t.store.title))])]),t._v(" "),i("van-cell-group",{staticClass:"margin-10-b"},[i("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/select"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/cut_shop.png",alt:""}})]),t._v(" "),i("div",[t._v("切换门店")])])])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-b"},[i("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/index"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/shop_info.png",alt:""}})]),t._v(" "),i("div",[t._v("门店信息")])])]),t._v(" "),t.store?i("van-cell",[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/shop_status.png",alt:""}})]),t._v(" "),i("div",[t._v("营业状态")])]),t._v(" "),i("iswitch",{attrs:{slot:"right-icon",value:t.store.is_in_business,"condition-open":"1","condition-close":"0","text-open":"营业","text-close":"休息",keys:"store.is_in_business",type:"is_in_business"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1):t._e(),t._v(" "),i("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/settingMore"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/auto_takeOrder.png",alt:""}})]),t._v(" "),i("div",[t._v("自动接单/通知配送员抢单/模板消息/语音电话")])])]),t._v(" "),i("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/shop/phonic"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/auto_deliveryOrder.png",alt:""}})]),t._v(" "),i("div",[t._v("语音提醒")])])])],1),t._v(" "),i("van-cell-group",[i("van-cell",{attrs:{"is-link":"",to:t.util.getUrl({path:"/pages/more/password"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/account_password.png",alt:""}})]),t._v(" "),i("div",[t._v("账户密码")])])])],1),t._v(" "),i("div",{staticClass:"padding-15",on:{click:function(s){t.onLoginout()}}},[i("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal"}},[t._v("退出")])],1),t._v(" "),i("div",{staticClass:"manager-tips"},[t._v("语音技术由科大讯飞提供支持")])],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(n,r,!1,function(t){i("izOG")},null,null);s.default=c.exports}});
//# sourceMappingURL=54.9a8b2939a441a50c6d9f.js.map