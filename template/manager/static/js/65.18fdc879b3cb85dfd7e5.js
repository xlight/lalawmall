webpackJsonp([65],{MonK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Cz8s"),s=n("deIj"),o={data:function(){return{id:0,content:"",showPreLoading:!0}},components:{publicHeader:i.a},methods:{onLoad:function(){var t=this;Object(s.a)({vue:this,data:{id:t.id},url:"manage/news/notice/detail",success:function(e){t.content=e.notice.content}})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"news-detail"}},[e("public-header",{attrs:{title:"公告详情"}}),this._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"detail-info"},[this._v("\n\t\t\t"+this._s(this.content)+"\n\t\t")])]),this._v(" "),this.showPreLoading?e("iloading"):this._e()],1)},staticRenderFns:[]};var c=n("VU/8")(o,a,!1,function(t){n("Omb2")},null,null);e.default=c.exports},Omb2:function(t,e){}});
//# sourceMappingURL=65.18fdc879b3cb85dfd7e5.js.map