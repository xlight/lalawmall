webpackJsonp([25],{LR3e:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("Gu7T"),n=i.n(r),o=i("Cz8s"),d=i("7+VE"),a=i("deIj"),s={components:{publicHeader:o.a,deliveryerLocation:d.a},data:function(){return{deliveryer:[],ids:[],showPreLoading:!0}},methods:{onLoad:function(e){var t=this;e&&(t.deliveryer=[]),Object(a.a)({vue:t,url:"plateform/deliveryer/plateform/location",data:{ids:t.ids},success:function(e){t.deliveryer=[].concat(n()(t.deliveryer),n()(e.deliveryer))}})}},created:function(){this.$route.query&&this.$route.query.id&&this.ids.push(this.$route.query.id)},mounted:function(){this.onLoad()}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"deliveryer-location"}},[i("public-header",{attrs:{title:"配送员位置"}}),e._v(" "),i("div",{staticClass:"content"},[e.deliveryer.length>0?i("deliveryer-location",{attrs:{deliveryer:e.deliveryer}}):e._e(),e._v(" "),i("div",{staticClass:"icon icon-refresh",on:{click:function(t){e.onLoad(!0)}}})],1),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)},staticRenderFns:[]};var l=i("VU/8")(s,c,!1,function(e){i("iOIk")},null,null);t.default=l.exports},iOIk:function(e,t){}});