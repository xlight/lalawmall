webpackJsonp([91],{"2Xgy":function(t,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e("Cz8s"),i=e("+CBI"),s=e("deIj"),n={data:function(){return{showPreLoading:!0,mall:{status:"1",close_reason:"",serve_radius:"0",mobile:""}}},components:{publicHeader:a.a,iswitch:i.a},methods:{onLoad:function(){Object(s.a)({vue:this,autoAssign:!0,variable:"mall",url:"plateform/errander/config/basic"})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})},onSubmit:function(){console.log(this.mall),Object(s.c)({vue:this,url:"plateform/errander/config/basic",data:this.mall})}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{attrs:{id:"mall-basic"}},[e("public-header",{attrs:{title:"基础设置"}}),t._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",[e("van-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("跑腿状态")]),t._v(" "),e("iswitch",{attrs:{slot:"right-icon",value:t.mall.status,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"mall.status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),e("van-field",{attrs:{label:"跑腿关闭原因",placeholder:"请输入跑腿关闭原因","input-align":"right"},model:{value:t.mall.close_reason,callback:function(l){t.$set(t.mall,"close_reason",l)},expression:"mall.close_reason"}})],1),t._v(" "),e("van-cell-group",{staticClass:"margin-10-t"},[e("van-cell",{staticClass:"border-0px"},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("跑腿服务半径")]),t._v(" "),e("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[e("div",{staticClass:"input-unit"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mall.serve_radius,expression:"mall.serve_radius"}],attrs:{type:"number"},domProps:{value:t.mall.serve_radius},on:{input:function(l){l.target.composing||t.$set(t.mall,"serve_radius",l.target.value)}}}),e("span",[t._v("KM")])])])]),t._v(" "),e("van-field",{attrs:{label:"跑腿服务城市",placeholder:"请输入跑腿服务城市","input-align":"right"},model:{value:t.mall.city,callback:function(l){t.$set(t.mall,"city",l)},expression:"mall.city"}}),t._v(" "),e("van-field",{attrs:{label:"客服电话",placeholder:"请输入客服电话","input-align":"right"},model:{value:t.mall.mobile,callback:function(l){t.$set(t.mall,"mobile",l)},expression:"mall.mobile"}})],1),t._v(" "),e("div",{staticClass:"padding-15"},[e("van-button",{staticClass:"bg-primary font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var r=e("VU/8")(n,o,!1,function(t){e("GRdX")},null,null);l.default=r.exports},GRdX:function(t,l){}});