webpackJsonp([104],{MqYM:function(e,t){},uYzc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"freelunch-rule"}},[t("div",{staticClass:"content"},[t("div",{staticClass:"banner"},[t("img",{attrs:{src:"static/img/freeLunch_rule.png",alt:""}}),this._v(" "),t("div",{staticClass:"close",on:{click:this.onClose}},[this._v("关闭")])]),this._v(" "),t("div",{staticClass:"rules",domProps:{innerHTML:this._s(this.agreement)}})])])},staticRenderFns:[]};var r=n("VU/8")({name:"freelunchRule",data:function(){return{agreement:""}},methods:{onLoad:function(){var e=this;this.util.request({url:"freeLunch/freeLunch/rule"}).then(function(t){var n=t.data.message;if(n.errno)return e.util.$toast(n.message),!1;e.agreement=n.message.agreement})},onClose:function(){this.$router.go(-1)}},mounted:function(){this.onLoad()}},s,!1,function(e){n("MqYM")},"data-v-5c34a7b2",null);t.default=r.exports}});
//# sourceMappingURL=104.38e2d944f8eca942ecba.js.map