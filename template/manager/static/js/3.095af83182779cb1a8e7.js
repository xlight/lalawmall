webpackJsonp([3],{lGS2:function(t,s,i){"use strict";i.d(s,"a",function(){return o});var a=i("woOf"),e=i.n(a),n=i("EuEE");i("YaEn");function o(t){var s=t.order,i=t.type,a=function(t){return{cancel:{tip:"确定取消订单吗",success_status:7},team_success:{tip:"确定立即成团吗",success_status:3},team_cancel:{tip:"确定取消成团吗",success_status:7}}[t]}(i),o=a.success_status,c={id:s.id};if("team_success"==i){var l="manage/gohome/order/status";c.type="team_success"}else{"team_cancel"==i&&(c.team_cancel=1,i="cancel");l="manage/gohome/order/"+i}var r={url:l,data:c,confirm:a.tip,success:function(s){n.a.$toast(s),"detail"==t.from?(t.vue.order.status=o,t.vue.order=e()({},t.vue.order)):t.vue.records.data.splice(t.index,1)}};n.a.jspost(r)}},n9QR:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Cz8s"),e=i("deIj"),n=i("lGS2"),o={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},filter:{items:{status:1}},code:"",confirmDialog:!1,isRefresh:!1,showPreLoading:!0}},components:{publicHeader:a.a},methods:{onLoad:function(t){Object(e.b)({vue:this,force:t,url:"manage/gohome/order/list"})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)},onChangeStatus:function(t,s){Object(n.a)({vue:this,type:t,index:s,order:this.records.data[s]})},onOrderPrint:function(t,s){var i=this;t&&i.$dialog.confirm({title:"温馨提示",message:"确定打印订单吗"}).then(function(){Object(e.c)({vue:i,url:"manage/gohome/order/print",data:{id:t},success:function(t){i.util.$toast("打印成功"),i.records.data[s].print_nums++}})})},onConfirm:function(){this.code?Object(e.c)({vue:this,url:"manage/gohome/order/confirm",data:{code:this.code},message:"核销成功"}):this.util.$toast("请输入6位核销码")}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(t,s){this.onLoad(!0)},deep:!0}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"gohome-order-index"}},[i("public-header",{attrs:{title:"订单列表"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"wrap-search"},[i("div",{staticClass:"tab-group flex-lr border-1px-b"},[i("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("待付款")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("待生效")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:3==t.filter.items.status},on:{click:function(s){t.onToggleStatus(3)}}},[t._v("待使用")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:5==t.filter.items.status},on:{click:function(s){t.onToggleStatus(5)}}},[t._v("待评价")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:6==t.filter.items.status},on:{click:function(s){t.onToggleStatus(6)}}},[t._v("已完成")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:7==t.filter.items.status},on:{click:function(s){t.onToggleStatus(7)}}},[t._v("已取消")])])]),t._v(" "),i("div",{staticClass:"refresh-wrap"},[i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无数据!")])]):i("van-list",{staticClass:"order-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[i("div",{staticClass:"order-group"},t._l(t.records.data,function(s,a){return i("div",{key:s.id,staticClass:"order-item"},[i("router-link",{attrs:{to:t.util.getUrl({path:"/pages/gohome/order/detail",query:{id:s.id}})}},[i("div",{staticClass:"order-title flex-lr van-hairline--bottom"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"number"},[t._v("#"+t._s(s.id))]),t._v(" "),s.order_type_all?i("div",{staticClass:"itag",class:s.order_type_all.css},[t._v(t._s(s.order_type_all.text))]):t._e()]),t._v(" "),i("div",{staticClass:"font-14 c-danger"},[t._v(t._s(s.status_all.text))])]),t._v(" "),i("div",{staticClass:"order-goods van-hairline--bottom"},[i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"flex goods-info"},[i("div",{staticClass:"goods-img"},[i("img",{staticClass:"img-100",attrs:{src:s.goods.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-name font-14"},[t._v(t._s(s.goods.name))]),t._v(" "),i("div",{staticClass:"font-14 c-gray"},[t._v("x"+t._s(s.num))])]),t._v(" "),i("div",{staticClass:"c-danger font-14"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))])]),t._v(" "),i("div",{staticClass:"flex-lr padding-10-t"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"font-15"},[t._v(t._s(s.username))]),t._v(" "),i("div",{staticClass:"font-14 c-gray padding-10-lr"},[t._v(t._s(s.mobile))]),t._v(" "),i("div",{staticClass:"icon icon-phone2 c-info font-16",on:{click:function(i){t.util.jsUrl("tel:"+s.mobile)}}})]),t._v(" "),i("div",{staticClass:"font-14",class:s.pay_type_all.css},[t._v(t._s(s.pay_type_all.text))])])])]),t._v(" "),i("div",{staticClass:"padding-10 btn-group1"},[s.status<5?i("div",{staticClass:"btn-item bg-danger",on:{click:function(s){t.onChangeStatus("cancel",a)}}},[t._v("取消")]):t._e(),t._v(" "),i("div",{staticClass:"btn-item bg-info",on:{click:function(i){t.onOrderPrint(s.id,a)}}},[i("i",{staticClass:"icon icon-print margin-5-r"}),t._v("打印("+t._s(s.print_nums)+")\n\t\t\t\t\t\t\t\t")]),t._v(" "),"pintuan"==s.order_type&&1==s.is_team?[2==s.status?i("div",{staticClass:"btn-item bg-success",on:{click:function(s){t.onChangeStatus("team_success",a)}}},[t._v("立即成团")]):t._e(),t._v(" "),2==s.status||3==s.status?i("div",{staticClass:"btn-item bg-danger",on:{click:function(s){t.onChangeStatus("team_cancel",a)}}},[t._v("取消成团")]):t._e()]:t._e()],2),t._v(" "),2==s.status?i("div",{staticClass:"pay-status have-pay"}):t._e()],1)})),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])],1)],1),t._v(" "),i("div",{staticClass:"btn-group"},[i("div",{staticClass:"btn-item bg-info",on:{click:function(s){t.confirmDialog=!0}}},[t._v("核销码核销")]),t._v(" "),t.util.isCloud()&&t.util.isHasModule("FNScanner")?[i("div",{staticClass:"btn-item bg-danger",on:{click:function(s){t.util.scanQRCode()}}},[t._v("扫码核销")])]:t._e()],2)]),t._v(" "),i("van-dialog",{attrs:{title:"核销码核销","show-cancel-button":""},on:{confirm:t.onConfirm},model:{value:t.confirmDialog,callback:function(s){t.confirmDialog=s},expression:"confirmDialog"}},[i("van-field",{attrs:{placeholder:"请输入6位核销码","input-align":"center"},model:{value:t.code,callback:function(s){t.code=s},expression:"code"}})],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var l=i("VU/8")(o,c,!1,function(t){i("rfbi")},null,null);s.default=l.exports},rfbi:function(t,s){}});
//# sourceMappingURL=3.095af83182779cb1a8e7.js.map