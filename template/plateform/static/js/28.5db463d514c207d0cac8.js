webpackJsonp([28],{V1Va:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Cz8s"),i=a("+CBI"),o=a("deIj"),r={data:function(){return{showPreLoading:!0,mall:{store_orderby_type:"displayorder",store_overradius_display:"1"}}},components:{publicHeader:l.a,iswitch:i.a},methods:{onLoad:function(){Object(o.a)({vue:this,autoAssign:!0,variable:"mall",url:"plateform/agent/config/mall"})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})},onSubmit:function(){Object(o.c)({vue:this,url:"plateform/agent/config/mall",data:this.mall})}},mounted:function(){this.onLoad()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mall-basic"}},[a("public-header",{attrs:{title:"基础设置"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-radio-group",{model:{value:t.mall.store_orderby_type,callback:function(e){t.$set(t.mall,"store_orderby_type",e)},expression:"mall.store_orderby_type"}},[a("van-cell-group",[a("van-cell",{attrs:{title:"首页商家排序方式"}}),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"按排序大小",clickable:""},on:{click:function(e){t.mall.store_orderby_type="displayorder"}}},[a("van-radio",{attrs:{name:"displayorder"}})],1),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"按热度",clickable:""},on:{click:function(e){t.mall.store_orderby_type="click"}}},[a("van-radio",{attrs:{name:"click"}})],1),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"离我最近",clickable:""},on:{click:function(e){t.mall.store_orderby_type="distance"}}},[a("van-radio",{attrs:{name:"distance"}})],1),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"销量最高",clickable:""},on:{click:function(e){t.mall.store_orderby_type="sailed"}}},[a("van-radio",{attrs:{name:"sailed"}})],1),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"评分最高",clickable:""},on:{click:function(e){t.mall.store_orderby_type="score"}}},[a("van-radio",{attrs:{name:"score"}})],1)],1)],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("超出商家配送范围是否展示")]),t._v(" "),a("iswitch",{attrs:{slot:"right-icon",value:t.mall.store_overradius_display,"condition-open":"1","condition-close":"2","text-open":"ON","text-close":"OFF",keys:"mall.store_overradius_display"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),a("div",{staticClass:"padding-15"},[a("van-button",{staticClass:"bg-primary font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var n=a("VU/8")(r,s,!1,function(t){a("ZYuu")},null,null);e.default=n.exports},ZYuu:function(t,e){}});