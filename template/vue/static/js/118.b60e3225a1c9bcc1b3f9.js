webpackJsonp([118],{"5mxR":function(e,t){},S1rl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Gu7T"),s=a.n(n),i=a("Cz8s"),o=a("mzkE"),r={components:{PublicHeader:i.a,PublicFooter:o.a},data:function(){return{showPreLoading:!0,records:[],min:0,loaded:!1,loading:!1,empty:!1,menufooter:{}}},methods:{onLoad:function(){var e=this;if(this.loaded)return!1;this.loading=!0,this.util.request({url:"ordergrant/record",data:{min:this.min,menufooter:1}}).then(function(t){e.showPreLoading=!1;var a=t.data.message;e.records=[].concat(s()(e.records),s()(a.message)),e.records.length||(e.loaded=!0,e.empty=!0),a.min||(e.loaded=!0),e.loading=!1,e.min=a.min,e.menufooter=window.menufooter})}},mounted:function(){this.onLoad()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"ordergrant-index"}},[a("public-header",{attrs:{title:"详细记录"}}),e._v(" "),a("public-footer",{attrs:{preLoading:e.showPreLoading,menufooter:e.menufooter}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"grant-list"},[e.empty?e._e():a("van-list",{attrs:{finished:e.loaded,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.records,function(t){return e.empty?e._e():a("div",{staticClass:"grant-item van-hairline--bottom"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"titles"},[e._v(e._s(t.mark))]),e._v(" "),a("div",{staticClass:"text"},[a("span",{staticClass:"label",class:{"label-warning":"label-warning"==t.css,"label-success":"label-success"==t.css,"label-info":"label-info"==t.css,"label-primary":"label-primary"==t.css,"label-danger":"label-danger"==t.css,"label-default":"label-default"==t.css}},[e._v(e._s(t.text))]),e._v(e._s(t.addtime))])]),e._v(" "),a("div",{staticClass:"grant"},[e._v("+"+e._s(t.grant))])])}),0),e._v(" "),e.empty?a("div",{staticClass:"common-no-con"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),a("p",[e._v("您还没有奖励记录")])]):e._e()],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(r,l,!1,function(e){a("5mxR")},null,null);t.default=d.exports}});
//# sourceMappingURL=118.b60e3225a1c9bcc1b3f9.js.map