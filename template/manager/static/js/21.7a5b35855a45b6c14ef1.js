webpackJsonp([21],{cmNu:function(t,i){},ps9T:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("woOf"),o=e.n(n),s=e("Cz8s"),a=e("+CBI"),c=e("XbGN"),l={components:{publicHeader:s.a,iswitch:a.a},data:function(){return{phonic:{voice:1,vibrate:1,voice_type:1,new:{times:"loop"},refund:{times:"loop"},remind:{times:"loop"}},timesPopup:!1,times:["循环播放","播放3遍"],keySelected:"",islegal:!1,showPreLoading:!0}},methods:{onLoad:function(){var t=c.a.igetPrefs("phonic");this.phonic=o()(this.phonic,t),this.islegal=!0,this.showPreLoading=!1},onSubmit:function(){if(!this.islegal)return!1;this.islegal=!1,c.a.isetPrefs("phonic",this.phonic),this.util.$toast("设置成功",this.util.getUrl({path:"pages/shop/setting"}),1e3,"replace")},onToggleTimes:function(t){t&&(this.keySelected=t),this.timesPopup=!this.timesPopup},onConfirmTimes:function(t,i){var e="";e=0==i?"loop":"three",this.phonic[this.keySelected].times=e,this.onToggleTimes()},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"member-phonic"}},[e("public-header",{attrs:{title:"语音设置"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("新语音提示")]),t._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"语音提示"}},[e("iswitch",{attrs:{slot:"right-icon",value:t.phonic.voice,"text-open":"ON","text-close":"OFF",keys:"phonic.voice"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),e("van-cell",{attrs:{title:"新消息振动"}},[e("iswitch",{attrs:{slot:"right-icon",value:t.phonic.vibrate,"text-open":"ON","text-close":"OFF",keys:"phonic.vibrate"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),e("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("播放频率")]),t._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"接单"}},[e("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleTimes("new")}},slot:"right-icon"},["loop"==t.phonic.new.times?e("span",{staticClass:"c-gray"},[t._v("循环播放")]):"three"==t.phonic.new.times?e("span",{staticClass:"c-gray"},[t._v("播放3次")]):t._e(),t._v(" "),e("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),e("van-cell",{attrs:{title:"退单"}},[e("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleTimes("refund")}},slot:"right-icon"},["loop"==t.phonic.refund.times?e("span",{staticClass:"c-gray"},[t._v("循环播放")]):"three"==t.phonic.refund.times?e("span",{staticClass:"c-gray"},[t._v("播放3次")]):t._e(),t._v(" "),e("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),e("van-cell",{attrs:{title:"催单"}},[e("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(i){t.onToggleTimes("remind")}},slot:"right-icon"},["loop"==t.phonic.remind.times?e("span",{staticClass:"c-gray"},[t._v("循环播放")]):"three"==t.phonic.remind.times?e("span",{staticClass:"c-gray"},[t._v("播放3次")]):t._e(),t._v(" "),e("van-icon",{attrs:{name:"arrow"}})],1)])],1),t._v(" "),e("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("铃声")]),t._v(" "),e("van-radio-group",{model:{value:t.phonic.voice_type,callback:function(i){t.$set(t.phonic,"voice_type",i)},expression:"phonic.voice_type"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"音乐",clickable:""},on:{click:function(i){t.phonic.voice_type=2}}},[e("van-radio",{attrs:{name:2}})],1),t._v(" "),e("van-cell",{attrs:{title:"订单内容",clickable:""},on:{click:function(i){t.phonic.voice_type=1}}},[e("van-radio",{attrs:{name:1}})],1)],1)],1),t._v(" "),e("div",{staticClass:"padding-15"},[e("van-button",{staticClass:"font-16 bg-info",attrs:{disabled:!t.islegal,size:"normal",block:""},on:{click:t.onSubmit}},[t._v("保存")])],1)],1),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.timesPopup,callback:function(i){t.timesPopup=i},expression:"timesPopup"}},[e("div",{staticClass:"popup-content"},[e("van-picker",{attrs:{columns:t.times,"show-toolbar":"",title:"播放次数"},on:{cancel:t.onToggleTimes,confirm:t.onConfirmTimes}})],1)]),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var p=e("VU/8")(l,r,!1,function(t){e("cmNu")},null,null);i.default=p.exports}});
//# sourceMappingURL=21.7a5b35855a45b6c14ef1.js.map