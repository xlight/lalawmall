webpackJsonp([20],{eiUY:function(t,s){},mBvS:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("woOf"),i=a.n(e),c=a("Cz8s"),n=a("deIj"),o={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},showPreLoading:!0,isRefresh:!1,filter:{items:{status:0}},confirms:{cancel:"确定撤销该提现申请吗？",status:"确定将该提现申请设为已处理吗？",transfers:"确定微信打款吗？"},remarkPopup:!1,remark:"",cancelId:0,cancelIndex:-1}},components:{publicHeader:c.a},methods:{onLoad:function(t){Object(n.b)({vue:this,force:t,url:"plateform/agent/getcash/list"})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)},onToogleRemarkPopup:function(t,s){this.remarkPopup=!this.remarkPopup,t>0&&s>-1&&(this.cancelId=t,this.cancelIndex=s)},onConfirmRemark:function(){this.remark?this.cancelId>0&&this.cancelIndex>-1&&this.onGetcashUpdate(this.cancelId,"cancel",this.cancelIndex):this.util.$toast("备注不能为空")},onGetcashUpdate:function(t,s,a,e){var c=this,n=c.confirms[s];"cancel"!=s||c.remark||this.$toast("请输入备注");var o={url:"plateform/agent/getcash/status",data:{id:t,type:s,status:e,remark:c.remark},confirm:n,success:function(t){if(c.util.$toast(t),0==c.filter.items.status){var e=1;"cancel"==s&&(e=3),c.records.data[a].status=e}else c.records.data.splice(a,1);c.records=i()({},c.records),c.remark="",c.remarkPopup=!1}};c.util.jspost(o)},onQueryToAccountStatus:function(t){var s=this;Object(n.c)({vue:s,url:"plateform/agent/getcash/query",data:{id:t},success:function(t){s.util.$toast(t.message),setTimeout(function(){s.onLoad(!0)},1e3)},fail:function(t){s.util.$toast(t.message),setTimeout(function(){s.onLoad(!0)},1e3)}})}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(t,s){this.onLoad(!0)},deep:!0}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"agent-getcash"}},[a("public-header",{attrs:{title:"提现申请"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search wrap-search-input"},[a("div",{staticClass:"tab-group flex-lr border-1px-b"},[a("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("全部")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("申请中")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("提现成功")]),t._v(" "),a("div",{staticClass:"tab-item",class:{active:3==t.filter.items.status},on:{click:function(s){t.onToggleStatus(3)}}},[t._v("撤销")])]),t._v(" "),a("van-search",{attrs:{placeholder:"请输入代理名称或代理区域"},model:{value:t.filter.items.keyword,callback:function(s){t.$set(t.filter.items,"keyword",s)},expression:"filter.items.keyword"}})],1),t._v(" "),a("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("没有符合条件的数据!")])]):a("van-list",{staticClass:"getcash-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,e){return a("div",{staticClass:"getcash-item margin-10-b"},[a("van-row",[a("van-col",{attrs:{span:"5"}},[a("div",{staticClass:"getcash-img"},[a("img",{staticClass:"img-100",attrs:{src:s.avatar,alt:""}})])]),t._v(" "),a("van-col",{attrs:{span:"19"}},[a("div",{staticClass:"getcash-name flex-lr"},[a("div",{staticClass:"c-default"},[t._v(t._s(s.title))]),t._v(" "),1==s.status?a("div",{staticClass:"itag itag-primary font-14"},[t._v("提现成功")]):2==s.status?a("div",{staticClass:"itag itag-danger font-14"},[t._v("申请中")]):3==s.status?a("div",{staticClass:"itag itag-disabled font-14"},[t._v("已撤销")]):t._e()]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("提现金额")]),t._v(" "),a("div",{staticClass:"c-danger font-14"},[t._v("￥"+t._s(s.get_fee))])]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("手续费")]),t._v(" "),a("div",{staticClass:"c-danger font-14"},[t._v("￥"+t._s(s.take_fee))])]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("实际到账")]),t._v(" "),a("div",{staticClass:"c-danger font-14"},[t._v("￥"+t._s(s.final_fee))])]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("到账状态")]),t._v(" "),a("div",{staticClass:"font-14",class:s.toaccount_status_css},[t._v(t._s(s.toaccount_status_cn))])]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("微信昵称")]),t._v(" "),a("div",{staticClass:"c-gray font-14"},[t._v(t._s(s.account.nickname))])]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("申请时间")]),t._v(" "),a("div",{staticClass:"c-gray font-14"},[t._v(t._s(s.addtime_cn))])]),t._v(" "),a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("订单号")]),t._v(" "),a("div",{staticClass:"c-gray font-14"},[t._v(t._s(s.trade_no))])]),t._v(" "),1==s.status?a("div",{staticClass:"getcash-info flex"},[a("div",{staticClass:"c-default font-14"},[t._v("处理完成时间")]),t._v(" "),a("div",{staticClass:"c-gray font-14"},[t._v(t._s(s.endtime_cn))])]):t._e()])],1),t._v(" "),2==s.status?a("div",{staticClass:"border-1px-t btn-group"},[a("div",{staticClass:"btn-item bg-default",on:{click:function(a){t.onToogleRemarkPopup(s.id,e)}}},[t._v("撤销")]),t._v(" "),a("div",{staticClass:"btn-item bg-default",on:{click:function(a){t.onGetcashUpdate(s.id,"status",e,1)}}},[t._v("设为已处理")]),t._v(" "),a("div",{staticClass:"btn-item bg-primary",on:{click:function(a){t.onGetcashUpdate(s.id,"transfers",e)}}},[t._v("微信打款")])]):t._e(),t._v(" "),1==s.status&&"bank"==s.channel&&2!=s.toaccount_status?a("div",{staticClass:"border-1px-t btn-group"},[3==s.toaccount_status?a("div",{staticClass:"btn-item bg-default",on:{click:function(a){t.onToogleRemarkPopup(s.id,e)}}},[t._v("撤销")]):t._e(),t._v(" "),1==s.toaccount_status?a("div",{staticClass:"btn-item bg-default",on:{click:function(a){t.onQueryToAccountStatus(s.id)}}},[t._v("查询到账状态")]):t._e()]):t._e()],1)}),t._v(" "),t.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.remarkPopup,callback:function(s){t.remarkPopup=s},expression:"remarkPopup"}},[a("div",{staticClass:"popup-title"},[a("span",{staticClass:"c-gray",on:{click:t.onToogleRemarkPopup}},[t._v("取消")]),t._v(" "),a("span",[t._v("撤销备注")]),t._v(" "),a("span",{staticClass:"c-primary",on:{click:t.onConfirmRemark}},[t._v("确定")])]),t._v(" "),a("div",{staticClass:"popup-content"},[a("van-field",{attrs:{type:"textarea",placeholder:"输入撤销提现备注",rows:"8"},model:{value:t.remark,callback:function(s){t.remark=s},expression:"remark"}})],1)]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var r=a("VU/8")(o,l,!1,function(t){a("eiUY")},null,null);s.default=r.exports}});