webpackJsonp([2],{Ez5F:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("bOdI"),n=i.n(s),e=i("Cz8s"),o=i("mzkE"),c=i("+CBI"),l=i("Fd2+"),v=i("deIj"),r={data:function(){return{deliveryer:{id:0,avatar:"",work_status:0},stat:{errander:{num:0},takeout:{num:0},total:{fee:0}},takeout_rank_status:0,errander_rank_status:0,config:{},location:{},showPreLoading:!0,menufooter:{},locationInfo:{location_x:"",location_y:"",addtime:""}}},components:{publicHeader:e.a,publicFooter:o.a,iswitch:c.a,Dialog:l.a},methods:{onLoad:function(){var t=this;Object(v.a)({vue:t,url:"delivery/member/mine/index",autoAssign:!0,variable:"deliveryer",data:{type:"today",menufooter:1},success:function(a){t.stat=t.util.extend(t.stat,a.stat),t.takeout_rank_status=a.takeout_rank_status,t.errander_rank_status=a.errander_rank_status,t.config=a.config;var i=t.util.getStorage("locationInfo");t.locationInfo=t.util.extend(t.locationInfo,i)}})},jsToggleSwitch:function(t){var a,i=this;i.util.jsToggleSwitch((a={vue:i,key:t.keys,value:t.value,url:"delivery/member/mine/setting",data:{which:"work_status"}},n()(a,"key",t.keys),n()(a,"confirm","确定变更工作状态吗？"),n()(a,"success",function(){i.util.jsSetValue({vue:i,key:t.keys,value:t.value}),i.util.icloudapi()}),a))},onMyLocation:function(){var t=this;Object(v.a)({vue:t,url:"delivery/member/mine/location",data:{},success:function(a){t.location=a.location;var i="地址："+t.location.address+"</br>经度："+t.location.location_y+"</br>纬度："+t.location.location_x+"</br>时间："+t.location.addtime_cn+"</br>";l.a.confirm({title:"最近位置上传",message:i}).then(function(){})}})}},mounted:function(){this.onLoad(),this.util.imap(),this.util.icloudapi()}},d={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"member-mine"}},[i("public-header",{attrs:{title:"个人中心"}}),t._v(" "),i("public-footer",{attrs:{showPreLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"member-header"},[i("div",{staticClass:"header-info flex-lr"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"img-100",attrs:{src:t.deliveryer.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"user-info"},[i("div",[t._v("#"+t._s(t.deliveryer.id)+" "+t._s(t.deliveryer.title))]),t._v(" "),i("div",{staticClass:"font-14"},[t._v("账户余额："+t._s(t.Lang.dollarSign)+t._s(t.deliveryer.credit2))])])]),t._v(" "),i("div",{staticClass:"user-status"},[i("iswitch",{attrs:{slot:"right-icon",value:t.deliveryer.work_status,"condition-open":"1","condition-close":"0","text-open":"接单","text-close":"休息",keys:"deliveryer.work_status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)]),t._v(" "),i("div",{staticClass:"statcenter"},[i("van-row",[i("van-col",{staticClass:"van-hairline--right",attrs:{span:"8"}},[i("div",{staticClass:"font-14"},[t._v("今日外卖单")]),t._v(" "),i("div",{staticClass:"padding-10-t font-weight font-bold"},[t._v(t._s(t.stat.takeout.num))])]),t._v(" "),i("van-col",{staticClass:"van-hairline--right",attrs:{span:"8"}},[i("div",{staticClass:"font-14"},[t._v("今日跑腿单")]),t._v(" "),i("div",{staticClass:"padding-10-t font-weight font-bold"},[t._v(t._s(t.stat.errander.num))])]),t._v(" "),i("van-col",{attrs:{span:"8"}},[i("div",{staticClass:"font-14"},[t._v("余额")]),t._v(" "),i("div",{staticClass:"padding-10-t font-weight font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.deliveryer.credit2))])])],1)],1)]),t._v(" "),i("div",{staticClass:"block-nav van-hairline--tb"},[t._m(0),t._v(" "),i("div",{staticClass:"nav-list"},[i("van-row",[i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/finance/current"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-news_hot_light"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("账户明细")])])],1),t._v(" "),i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/finance/index"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-refund"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("资产")])])],1),t._v(" "),i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/finance/getcashList"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-text1"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("提现记录")])])],1),t._v(" "),i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/member/setting"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-settings"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的设置")])])],1),t._v(" "),i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/comment/list"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-comments"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的评价")])])],1),t._v(" "),i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/member/phonic"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-notice"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("语音设置")])])],1)],1)],1)]),t._v(" "),i("div",{staticClass:"block-nav van-hairline--tb"},[t._m(1),t._v(" "),i("div",{staticClass:"nav-list"},[i("van-row",[i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/statcenter/index"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-calendar"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("配送统计")])])],1),t._v(" "),1==t.takeout_rank_status?i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/statcenter/rank"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-rank"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("外卖排行")])])],1):t._e(),t._v(" "),1==t.errander_rank_status?i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/statcenter/erranderRank"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-rank"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("跑腿排行")])])],1):t._e(),t._v(" "),t.config&&1==t.config.development_delivery_location?i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/statcenter/location"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-location"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("定位信息")])])],1):t._e(),t._v(" "),i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("router-link",{attrs:{tag:"div",to:"/pages/notice/list"}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-newshot"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("公告列表")])])],1)],1),t._v(" "),t.config&&1==t.config.development_delivery_location?i("van-row",[i("van-col",{staticClass:"nav-item",attrs:{span:"6"}},[i("div",{on:{click:t.onMyLocation}},[i("div",{staticClass:"nav-icon"},[i("i",{staticClass:"icon icon-location"})]),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的位置")])])])],1):t._e()],1)]),t._v(" "),i("div",{staticClass:"member-tips"},[t._v("语音技术由科大讯飞提供支持")])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"padding-15-l"},[a("div",{staticClass:"block-nav-title van-hairline--bottom font-14"},[this._v("我的账户")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"padding-15-l"},[a("div",{staticClass:"block-nav-title van-hairline--bottom font-14"},[this._v("统计")])])}]};var _=i("VU/8")(r,d,!1,function(t){i("RkHv")},null,null);a.default=_.exports},RkHv:function(t,a){},bOdI:function(t,a,i){"use strict";a.__esModule=!0;var s,n=i("C4MV"),e=(s=n)&&s.__esModule?s:{default:s};a.default=function(t,a,i){return a in t?(0,e.default)(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}}});