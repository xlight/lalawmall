webpackJsonp([122],{jf3e:function(t,e){},xEUG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),s=a.n(o),n=a("Gu7T"),i=a.n(n),c=a("NYxO"),r={data:function(){return{addresses:[],showSearch:!1,key:"",searchAddress:[],addressSearchHistory:[],getNowLocationing:!1,MapType:"gaode"}},components:{PublicHeader:a("Cz8s").a},watch:{key:function(){var t=this,e=this.key;this.showSearch=!!e,this.searchAddress=[];var a="system/common/map/suggestion";"google"==this.MapType&&(a="system/common/map/suggestion_google"),e&&this.util.request({url:a,data:{key:e}}).then(function(e){var a=e.data.message;a.errno||(t.searchAddress=[].concat(i()(t.searchAddress),i()(a.message)))})}},methods:s()({},Object(c.b)(["setLocation"]),{onLoad:function(){var t=this;this.util.request({url:"wmall/home/location/index"}).then(function(e){var a=e.data.message;a.errno||(t.addresses=[].concat(i()(t.addresses),i()(a.message)),t.MapType=t.util.getStorage("MapType"))});var e=this.util.getStorage("addressSearchHistory");e&&e.length&&e.length>0&&(this.addressSearchHistory=[].concat(i()(this.addressSearchHistory),i()(e)))},chooseLocation:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={last_location_x:this.locationInfo.location_x,address:t.address,location_x:t.location_x,location_y:t.location_y};this.setLocation(a),e&&(a.name=t.name,this.addressSearchHistory.push(a),this.util.setStorage("addressSearchHistory",this.addressSearchHistory)),this.$router.go(-1)},onGetNowLocation:function(){var t=this;t.getNowLocationing=!0,t.util.getLocation({successLocation:function(t){},successAddress:function(e){t.setLocation({last_location_x:t.locationInfo.location_x,location_x:e.location_x,location_y:e.location_y,address:e.address}),t.getNowLocationing=!1,t.$router.go(-1)},fail:function(e){t.getNowLocationing=!1,t.util.$toast("获取定位失败,你可以手动搜索收货地址")},MapType:t.MapType})}}),computed:s()({},Object(c.c)(["locationInfo"])),mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-location"}},[a("public-header",{attrs:{title:"选择收货地址"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"search-header-wrap van-hairline--bottom"},[a("div",{staticClass:"search-header"},[a("van-search",{attrs:{"show-action":"",background:"#fff",placeholder:"请输入您的收货地址"},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[a("div",{attrs:{slot:"action"},slot:"action"},[t._v("搜索")])])],1)]),t._v(" "),t.showSearch?a("van-cell-group",t._l(t.searchAddress,function(e,o){return a("van-cell",{key:o,attrs:{title:e.address,label:e.name},on:{click:function(a){return t.chooseLocation(e,!0)}}})}),1):[a("div",{staticClass:"location",on:{click:t.onGetNowLocation}},[a("van-icon",{attrs:{name:"location"}}),t._v(" "+t._s(1==t.getNowLocationing?"正在获取定位...":"点击定位当前位置")+"\n\t\t\t")],1),t._v(" "),t.addresses.length&&t.addresses.length>0?[a("div",{staticClass:"item-title"},[a("van-icon",{attrs:{name:"time"}}),t._v("我的收货地址\n\t\t\t\t")],1),t._v(" "),a("van-cell-group",t._l(t.addresses,function(e,o){return a("van-cell",{key:o,attrs:{title:e.address,label:e.realname+" "+e.sex+" "+e.mobile},on:{click:function(a){return t.chooseLocation(e)}}})}),1)]:t._e(),t._v(" "),t.addressSearchHistory.length&&t.addressSearchHistory.length>0?[a("div",{staticClass:"item-title"},[a("van-icon",{attrs:{name:"location"}}),t._v("搜索历史\n\t\t\t\t")],1),t._v(" "),a("van-cell-group",t._l(t.addressSearchHistory,function(e,o){return a("van-cell",{key:o,attrs:{title:e.address,label:e.name},on:{click:function(a){return t.chooseLocation(e)}}})}),1)]:t._e()]],2)],1)},staticRenderFns:[]};var d=a("VU/8")(r,l,!1,function(t){a("jf3e")},null,null);e.default=d.exports}});
//# sourceMappingURL=122.8db9aa67fe366e013a9f.js.map