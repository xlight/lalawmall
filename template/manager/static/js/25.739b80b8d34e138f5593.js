webpackJsonp([25],{"4hny":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Dd8w"),n=i.n(e),s=i("Cz8s"),o=i("+CBI"),r=i("deIj"),l=i("NYxO"),c={components:{publicHeader:s.a,iswitch:o.a},data:function(){return{minDate:new Date(2015,12,1),currentDate:new Date,currentDate2:new Date,popupStatus:{datePicker:!1,timePicker:!1},dateType:"",timeType:"",goodsNum:0,id:0,thumb:{},bargain:{title:"",content:"",use_limit:2,starttime:new Date,endtime:new Date,starthour:"00:00",endhour:"23:59",order_limit:"1",goods_limit:"1",goods:[],thumb:"",thumb_:""},showPreLoading:!0}},computed:n()({},Object(l.c)(["bargainGoods","bargainInfo"])),methods:n()({},Object(l.b)(["setBargainGoods","setBargainInfo"]),{onTogglePopup:function(t){var a="";"starttime"==t||"endtime"==t?(this.dateType=t,a="datePicker"):"starthour"!=t&&"endhour"!=t||(this.timeType=t,a="timePicker"),this.popupStatus[a]=!this.popupStatus[a]},onChooseTime:function(t){this.bargain[this.timeType]=t,this.onTogglePopup(this.timeType)},onChooseDate:function(t){var a=parseInt(Date.parse(t)/1e3);this.bargain[this.dateType]=a,this.onTogglePopup(this.dateType)},onLoad:function(){var t=this,a=t.util.parseQuery(t.$route.query);a.id>0&&(t.id=a.id),Object(r.a)({vue:t,url:"manage/activity/bargain/post",data:{id:t.id},autoAssign:!0,variable:"bargain",success:function(a){var i=a.bargain;t.util.length(t.bargainInfo)>0&&(i=t.bargainInfo),t.bargain=t.util.extend(t.bargain,i),t.goodsNum=t.bargain.goods.length;var e=t.util.length(t.bargainGoods);e>0&&(t.goodsNum=e)}})},onUploadImage:function(t){var a=this;a.util.image({obj:t,success:function(t,i){i.url&&i.filename&&(a.bargain.thumb=i.filename,a.bargain.thumb_=i.url)},options:{channel:"h5"}})},onSubmit:function(){var t=this.bargain.goods;this.util.length(this.bargainGoods)>0&&(t=this.bargainGoods),this.util.length(t)<1?this.util.$toast("请选择参与活动的商品"):Object(r.c)({vue:this,url:"manage/activity/bargain/post",data:{bargain:this.bargain,bargainGoods:t,id:this.id}})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})}}),watch:{bargain:{handler:function(t,a){this.setBargainInfo(this.bargain)},deep:!0}},mounted:function(){this.onLoad()}},u={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"activity-detail"}},[i("public-header",{attrs:{title:"活动详情"}}),t._v(" "),i("div",{staticClass:"content"},[i("van-cell-group",[i("van-cell",{staticClass:"no-fix flex-lr",attrs:{title:"活动图标"}},[i("div",{staticClass:"flex goods-thumb-wrap",attrs:{slot:"right-icon"},slot:"right-icon"},[t.bargain.thumb_?i("img",{staticClass:"goods-thumb ",attrs:{src:t.bargain.thumb_,alt:""}}):i("img",{staticClass:"goods-thumb ",attrs:{src:"static/img/add_pic.png",alt:""}}),t._v(" "),i("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(a){t.onUploadImage(a)}}})])]),t._v(" "),i("van-field",{attrs:{label:"活动主题",placeholder:"请输入活动主题","input-align":"right"},model:{value:t.bargain.title,callback:function(a){t.$set(t.bargain,"title",a)},expression:"bargain.title"}}),t._v(" "),i("van-field",{attrs:{label:"活动描述",placeholder:"请输入活动描述","input-align":"right"},model:{value:t.bargain.content,callback:function(a){t.$set(t.bargain,"content",a)},expression:"bargain.content"}})],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{title:"开始日期"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(a){t.onTogglePopup("starttime")}},slot:"right-icon"},[i("span",{staticClass:"c-gray"},[t._v(t._s(t.util.formatDate(t.bargain.starttime)))]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",{attrs:{title:"结束日期"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(a){t.onTogglePopup("endtime")}},slot:"right-icon"},[i("span",{staticClass:"c-gray"},[t._v(t._s(t.util.formatDate(t.bargain.endtime)))]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t抢购时段"),i("span",{staticClass:"font-12"},[t._v("（开始）")])]),t._v(" "),i("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(a){t.onTogglePopup("starthour")}},slot:"right-icon"},[i("span",{staticClass:"c-gray"},[t._v(t._s(t.bargain.starthour))]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),i("van-cell",[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t抢购时段"),i("span",{staticClass:"font-12"},[t._v("（结束）")])]),t._v(" "),i("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(a){t.onTogglePopup("endhour")}},slot:"right-icon"},[i("span",{staticClass:"c-gray"},[t._v(t._s(t.bargain.endhour))]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{title:"与其他优惠同享"}},[i("iswitch",{attrs:{slot:"right-icon",value:t.bargain.use_limit,"text-open":"同享","text-close":"互斥","condition-open":"1","condition-close":"2",keys:"bargain.use_limit"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),i("van-cell",{attrs:{title:"每个用户每天最多可购买"}},[i("div",{staticClass:"input-unit",attrs:{slot:"right-icon"},slot:"right-icon"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.bargain.order_limit,expression:"bargain.order_limit"}],attrs:{type:"text"},domProps:{value:t.bargain.order_limit},on:{input:function(a){a.target.composing||t.$set(t.bargain,"order_limit",a.target.value)}}}),t._v(" "),i("span",[t._v("单")])])]),t._v(" "),i("van-cell",{attrs:{title:"每单可购买特价商品"}},[i("div",{staticClass:"input-unit",attrs:{slot:"right-icon"},slot:"right-icon"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.bargain.goods_limit,expression:"bargain.goods_limit"}],attrs:{type:"text"},domProps:{value:t.bargain.goods_limit},on:{input:function(a){a.target.composing||t.$set(t.bargain,"goods_limit",a.target.value)}}}),t._v(" "),i("span",[t._v("种")])])])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{title:"参与商品"}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t参与商品"),i("span",{staticClass:"font-12"},[t._v("（不支持多规格产品）")])]),t._v(" "),i("router-link",{staticClass:"flex",attrs:{slot:"right-icon",to:t.util.getUrl({path:"pages/activity/bargainGoods",query:{bargain_id:t.id}})},slot:"right-icon"},[t.goodsNum>0?i("span",{staticClass:"c-gray"},[t._v("已选择"+t._s(t.goodsNum)+"个商品")]):i("span",{staticClass:"c-gray"},[t._v("选择商品")]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)],1)],1),t._v(" "),i("div",{staticClass:"padding-15"},[i("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("保存")])],1)],1),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.popupStatus.datePicker,callback:function(a){t.$set(t.popupStatus,"datePicker",a)},expression:"popupStatus.datePicker"}},[i("div",{staticClass:"popup-content"},[i("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate},on:{cancel:function(a){t.onTogglePopup(t.dateType)},confirm:t.onChooseDate},model:{value:t.currentDate,callback:function(a){t.currentDate=a},expression:"currentDate"}})],1)]),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.popupStatus.timePicker,callback:function(a){t.$set(t.popupStatus,"timePicker",a)},expression:"popupStatus.timePicker"}},[i("div",{staticClass:"popup-content"},[i("van-datetime-picker",{attrs:{type:"time","min-hour":0,"max-hour":23},on:{cancel:function(a){t.onTogglePopup(t.timeType)},confirm:t.onChooseTime}})],1)]),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var g=i("VU/8")(c,u,!1,function(t){i("vE9s")},null,null);a.default=g.exports},vE9s:function(t,a){}});
//# sourceMappingURL=25.739b80b8d34e138f5593.js.map