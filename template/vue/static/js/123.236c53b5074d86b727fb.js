webpackJsonp([123],{"5tjU":function(t,e){},ntjZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Cz8s"),a=s("EE5Z"),i={data:function(){return{stores:[],showLoading:!0,selective:{}}},components:{PublicHeader:n.a,storeGroup:a.a},methods:{onLoad:function(){var t=this;this.util.request({url:"wmall/channel/brand",data:{}}).then(function(e){var s=e.data.message.message;t.stores=s.stores,t.selective=s.selective,t.showLoading=!1})}},mounted:function(){this.onLoad()}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"store-brand"}},[e("public-header",{attrs:{title:"为您优选"}}),this._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"banner"},[e("img",{attrs:{src:this.selective.imgurl}})]),this._v(" "),e("store-group",{attrs:{stores:this.stores}})],1),this._v(" "),e("transition",{attrs:{name:"loading"}},[e("iloading",{directives:[{name:"show",rawName:"v-show",value:this.showLoading,expression:"showLoading"}]})],1)],1)},staticRenderFns:[]};var r=s("VU/8")(i,o,!1,function(t){s("5tjU")},null,null);e.default=r.exports}});
//# sourceMappingURL=123.236c53b5074d86b727fb.js.map