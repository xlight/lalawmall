webpackJsonp([54],{"87qr":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Cz8s"),s=a("deIj"),r=a("Fd2+"),n={components:{publicHeader:i.a},data:function(){return{showPreLoading:!0,type:"slideHomeTop",page_title:"",advertise:{},amount:0,displayorder:0,day:0,pay_type:"credit"}},methods:{onLoad:function(){var t=this;Object(s.a)({vue:t,url:"manage/advertise/index/stick",data:{type:t.type},success:function(e){if(t.page_title=e.page_title,t.advertise=e.advertise,t.amount=e.amount,"stick"==t.type){for(var a in t.advertise.prices)if(0==t.advertise.prices[a].sailed){for(var i in t.advertise.prices[a].fees){t.day=i;break}t.displayorder=a;break}}else if(t.advertise.leave>0)for(var i in t.advertise.prices){t.day=i;break}}})},onSelectPosition:function(t,e){if("stick"==this.type)if("day"==e){var a=this.advertise.prices[this.displayorder];if(1==a.sailed)return!1;this.day=a.fees[t].day}else this.displayorder=t;else this.advertise.leave>0&&(this.day=t)},onSubmit:function(){var t=this;return"stick"==t.type&&0==t.displayorder?(t.util.$toast("请选择置顶位置","",1e3),!1):0==t.day?(t.util.$toast("请选择购买天数","",1e3),!1):"stick"==t.type&&1==t.advertise.prices[t.displayorder].sailed?(t.util.$toast("该位置已售出","",1e3),!1):void r.a.confirm({title:"提示",message:"确定购买该推广活动吗?"}).then(function(){Object(s.c)({vue:t,url:"manage/advertise/index/stick",data:{type:t.type,displayorder:t.displayorder,day:t.day,pay_type:t.pay_type},success:function(e){t.util.pay({pay_type:t.pay_type,order_type:"advertise",order_id:e.id,sid:e.sid,vue:t})}})}).catch(function(){})}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&this.query.type&&(this.type=this.query.type)}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"advertise-stick"}},[a("public-header",{attrs:{title:"商家推广"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-inner"},[a("div",{staticClass:"padding-15-lr padding-10-tb c-gray font-14"},[t._v(t._s("stick"==t.type?"可选广告位置":"广告幻灯片位置"))]),t._v(" "),"stick"==t.type?[a("van-radio-group",{model:{value:t.displayorder,callback:function(e){t.displayorder=e},expression:"displayorder"}},[a("van-cell-group",t._l(t.advertise.prices,function(e,i){return a("van-cell",{key:"s"+i,attrs:{clickable:""},on:{click:function(e){t.onSelectPosition(i)}}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("置顶 "),a("span",{staticClass:"c-danger"},[t._v("No."+t._s(e.displayorder))])]),t._v(" "),a("van-radio",{attrs:{name:i}})],1)}))],1),t._v(" "),t.advertise.prices&&t.advertise.prices[t.displayorder]?a("van-radio-group",{staticClass:"margin-10-t",model:{value:t.day,callback:function(e){t.day=e},expression:"day"}},[a("van-cell-group",[a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t置顶 "),a("span",{staticClass:"c-danger "},[t._v("No."+t._s(t.advertise.prices[t.displayorder].displayorder))]),t._v("可选价目"+t._s(1==t.advertise.prices[t.displayorder].sailed?"（已售）":"")+"\n\t\t\t\t\t\t\t")])]),t._v(" "),t._l(t.advertise.prices[t.displayorder].fees,function(e,i){return a("van-cell",{key:i,attrs:{title:"购买广告"+e.day+"天"+e.fee+t.Lang.dollarSignCn,clickable:""},on:{click:function(e){t.onSelectPosition(i,"day")}}},[0==t.advertise.prices[t.displayorder].sailed?a("van-radio",{attrs:{name:i}}):t._e()],1)})],2)],1):t._e()]:[a("van-cell-group",[a("van-cell",{attrs:{title:t.page_title+"推广"}})],1),t._v(" "),a("van-radio-group",{staticClass:"margin-10-t",model:{value:t.day,callback:function(e){t.day=e},expression:"day"}},[a("van-cell-group",[a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t广告位总数"+t._s(t.advertise.total)+"个 "+t._s(t.advertise.leave>0?"剩余"+t.advertise.leave+"个位置":"（已售罄）")+" 价目:\n\t\t\t\t\t\t\t")])]),t._v(" "),t._l(t.advertise.prices,function(e,i){return a("van-cell",{key:i,attrs:{title:"购买广告"+e.day+"天"+e.fee+t.Lang.dollarSignCn,clickable:""},on:{click:function(e){t.onSelectPosition(i)}}},[t.advertise.leave>0?a("van-radio",{attrs:{name:i}}):t._e()],1)})],2)],1)],t._v(" "),a("div",{staticClass:"padding-15-lr padding-10-tb c-gray font-14"},[t._v("选择支付方式")]),t._v(" "),a("van-radio-group",{model:{value:t.pay_type,callback:function(e){t.pay_type=e},expression:"pay_type"}},[a("van-cell-group",[a("van-cell",{staticClass:"no-fix",attrs:{clickable:""},on:{click:function(e){t.pay_type="credit"}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"margin-5-r"},[t._v("余额支付")]),t._v(" "),a("span",[t._v("账户余额: "+t._s(t.Lang.dollarSign)+t._s(t.amount))])]),t._v(" "),a("van-radio",{attrs:{name:"credit"}})],1)],1)],1)],2),t._v(" "),a("div",{staticClass:"fix-bottom van-hairline--top"},[t.advertise.leave?a("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:""},on:{click:function(e){t.onSubmit()}}},[t._v("立即购买")]):a("van-button",{staticClass:"van-button--disabled",attrs:{size:"normal",block:""}},[t._v("此广告位已售罄，去看看其他广告位")])],1)]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var d=a("VU/8")(n,l,!1,function(t){a("JBev")},null,null);e.default=d.exports},JBev:function(t,e){}});
//# sourceMappingURL=54.4c9f22afbfd951679388.js.map