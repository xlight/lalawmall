webpackJsonp([52],{OILG:function(t,e){},aiEB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),r=i.n(s),o=i("Cz8s"),n=i("mzkE"),a=i("deIj"),l={components:{publicHeader:o.a,publicFooter:n.a},data:function(){return{menufooter:this.util.getStorage("menufooter"),urls:{system:[],plugin:[]},showPreLoading:!0}},methods:{onLoad:function(){var t=this;Object(a.a)({vue:this,url:"plateform/more/index/index",success:function(e){t.urls.system=e.urls.system,t.urls.plugin=[].concat(r()(t.urls.plugin),r()(e.urls.plugin))}})}},mounted:function(){this.onLoad(),this.util.imap(),this.util.icloudapi()}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"more"}},[i("public-header",{attrs:{title:"更多"}}),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"group"},[i("van-row",{attrs:{gutter:"20"}},t._l(t.urls.system,function(e,s){return t.util.checkperm(e.checkperm)?i("van-col",{key:e.id,attrs:{span:"8"}},[i("router-link",{staticClass:"deliveryer-item",attrs:{tag:"div",to:t.util.getUrl({path:e.url})}},[i("div",{staticClass:"top"},[i("i",{class:"icon "+e.icon+" "+e.iconColor})]),t._v(" "),i("div",{staticClass:"bottom"},[i("span",[t._v(t._s(e.title))])])])],1):t._e()}))],1),t._v(" "),i("div",{staticClass:"group"},[i("van-row",{attrs:{gutter:"20"}},t._l(t.urls.plugin,function(e,s){return t.util.checkperm(e.checkperm)?i("van-col",{key:e.id,attrs:{span:"8"}},[i("router-link",{staticClass:"deliveryer-item",attrs:{tag:"div",to:t.util.getUrl({path:e.url})}},[i("div",{staticClass:"top"},[i("i",{class:"icon "+e.icon+" "+e.iconColor})]),t._v(" "),i("div",{staticClass:"bottom"},[i("span",[t._v(t._s(e.title))])])])],1):t._e()}))],1)]),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(l,u,!1,function(t){i("OILG")},null,null);e.default=c.exports}});
//# sourceMappingURL=52.8f7cffc7a9ca4acdba07.js.map