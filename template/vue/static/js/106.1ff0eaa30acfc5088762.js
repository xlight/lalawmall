webpackJsonp([106],{"b+6r":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),n=a("Cz8s"),o=a("NPH5"),r={data:function(){return{keyword:"",stores:[],showPreLoading:!0}},components:{PublicHeader:n.a,load:o.a},methods:{onLoad:function(){var t=this,s=this.$route.query.key?this.$route.query.key:"";this.keyword&&(s=this.keyword,this.stores=[]);var a={key:s};this.util.request({url:"haodian/hunt/search",data:a}).then(function(s){t.showPreLoading=!1;var a=s.data.message;a.errno?t.$toast(a.message):t.stores=[].concat(i()(t.stores),i()(a.message.stores.store))})},onSearch:function(){if(!this.keyword)return!1;this.onLoad()}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"haodian-searchResult"}},[a("public-header",{attrs:{title:"搜索结果"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"search-header van-hairline--bottom"},[a("div",{staticClass:"search-content"},[a("van-icon",{attrs:{name:"search"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入商家"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}})],1),t._v(" "),a("div",{staticClass:"search-btn",on:{click:t.onSearch}},[t._v("搜索")])]),t._v(" "),t.stores.length>0?a("div",{staticClass:"haodian-store-box"},[a("div",{staticClass:"haodian-list"},t._l(t.stores,function(s,e){return a("div",{key:s.id,staticClass:"store-item ",class:{"van-hairline--top":e>0}},[a("router-link",{staticClass:"img-wrap",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/haodian/detail",query:{sid:s.id}})}},[a("img",{attrs:{src:s.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"store-main"},[a("router-link",{attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/haodian/detail",query:{sid:s.id}})}},[a("div",{staticClass:"flex-lr"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"store-title"},[t._v(t._s(s.title))]),t._v(" "),a("van-rate",{attrs:{size:12,"disabled-color":"#ff2d4b",disabled:""},model:{value:s.haodian_score,callback:function(a){t.$set(s,"haodian_score",a)},expression:"item.haodian_score"}}),t._v(" "),a("span",{staticClass:"c-gray font-12 margin-5-l"},[t._v(t._s(s.haodian_score)+"分")])],1),t._v(" "),a("div",{staticClass:"c-danger"},[t._v(t._s(s.distance)+"km")])]),t._v(" "),a("div",{staticClass:"c-gray font-12 margin-10-t"},[t._v("营业时间: "+t._s(s.business_hours_cn))]),t._v(" "),s.haodian_tags.length>0?a("ul",{staticClass:"store-tags"},t._l(s.haodian_tags,function(s,e){return a("li",{key:e,staticClass:"tag-item"},[t._v(t._s(s))])}),0):t._e()]),t._v(" "),s.activity.length>0?a("div",{staticClass:"discount-box"},t._l(s.activity,function(s,e){return a("div",{key:s.index,staticClass:"single-line"},[a("img",{attrs:{src:s.thumb_vue,alt:""}}),t._v(" "),a("div",{staticClass:"discount-text"},[t._v(t._s(s.text))])])}),0):t._e()],1)],1)}),0)]):a("div",{staticClass:"no-result"},[t._m(0),t._v(" "),a("div",{staticClass:"text"},[t._v("抱歉,没有找到合适的商户")])])]),t._v(" "),a("transition",{attrs:{name:"van-fade"}},[t.showPreLoading?a("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img"},[s("div",{staticClass:"icon icon-store"})])}]};var c=a("VU/8")(r,l,!1,function(t){a("nl6t")},null,null);s.default=c.exports},nl6t:function(t,s){}});