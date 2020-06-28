webpackJsonp([49],{"45m7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("mvHQ"),a=i.n(o),n=i("woOf"),c=i.n(n),r=i("Cz8s"),s=i("deIj"),l={components:{publicHeader:r.a},data:function(){return{id:0,weeks:["周一","周二","周三","周四","周五","周六","周日"],timePicker:!1,currentDate:"",categoryPicker:!1,categorys:{},thumb:{},now_category:{title:"",displayorder:"",min_fee:"",description:"",is_showtime:0,limit_week:{},start_time:"0:00",end_time:"0:00",categorysTitle:"",thumb:""},TimeType:"s",showPreLoading:!0}},methods:{onLoad:function(){var t=this;Object(s.a)({vue:this,url:"manage/goods/category/post",data:{id:t.id},success:function(e){t.now_category=t.util.extend(t.now_category,e.now_category),t.categorys=e.categorys,t.id>0&&(t.thumb.url=t.now_category.thumb)}})},onSelectWeek:function(t){this.now_category.limit_week[t]?this.$delete(this.now_category.limit_week,t):this.$set(this.now_category.limit_week,t,t)},onTogglePicker:function(t){this.timePicker=!this.timePicker,"s"!=t&&"e"!=t||(this.TimeType=t)},onConfirmTime:function(t){t&&("s"==this.TimeType?this.now_category.start_time=t:this.now_category.end_time=t),this.onTogglePicker()},onUploadImage:function(t){var e=this;e.util.image({obj:t,success:function(t,i){i.url&&i.filename&&(e.thumb={url:i.url,filename:i.filename},e.thumb=c()({},e.thumb),e.now_category.thumb=e.thumb.filename)},options:{channel:"h5"}})},onSubmit:function(){if(!this.now_category.title)return this.util.$toast("请输入分类名称","",1e3),!1;if(1==this.now_category.is_showtime){if(!this.now_category.start_time)return this.util.$toast("请选择限购开始时间","",1e3),!1;if(!this.now_category.end_time)return this.util.$toast("请选择限购结束时间","",1e3),!1}Object(s.c)({vue:this,url:"manage/goods/category/post",data:{id:this.id,params:a()(this.now_category)},redirect:this.util.getUrl({path:"/pages/category/index"})})},onDeleteCategory:function(t){Object(s.c)({vue:this,url:"manage/goods/category/del",data:{id:t.id},confirm:"确定删除此分类吗",redirect:this.util.getUrl({path:"/pages/category/index"}),message:"删除分组成功"})},onCategoryPicker:function(){this.categoryPicker=!this.categoryPicker},onConfirmCategory:function(t){this.now_category.parentid=t.id,this.now_category.categorysTitle=t.title,this.onCategoryPicker()}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"category-post"}},[i("public-header",{attrs:{title:"编辑分类"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("基本信息")]),t._v(" "),i("van-cell-group",[i("van-cell",{staticClass:"no-fix flex",attrs:{title:"商品分类图片"}},[i("div",{staticClass:"flex goods-thumb-wrap",attrs:{slot:"right-icon"},slot:"right-icon"},[t.thumb.url?i("img",{staticClass:"goods-thumb ",attrs:{src:t.thumb.url,alt:""}}):i("img",{staticClass:"goods-thumb ",attrs:{src:"static/img/add_pic.png",alt:""}}),t._v(" "),i("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){t.onUploadImage(e)}}})])]),t._v(" "),i("van-field",{attrs:{label:"分类名称",placeholder:"请输入分类名称"},model:{value:t.now_category.title,callback:function(e){t.$set(t.now_category,"title",e)},expression:"now_category.title"}}),t._v(" "),i("van-field",{attrs:{label:"分类排序",placeholder:"请输入分类排序"},model:{value:t.now_category.displayorder,callback:function(e){t.$set(t.now_category,"displayorder",e)},expression:"now_category.displayorder"}}),t._v(" "),i("van-field",{attrs:{label:"最低消费金额",placeholder:"请输入最低消费金额"},model:{value:t.now_category.min_fee,callback:function(e){t.$set(t.now_category,"min_fee",e)},expression:"now_category.min_fee"}})],1),t._v(" "),t.now_category.id?t._e():[i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("所属一级分类")]),t._v(" "),i("van-cell-group",[i("van-cell",{attrs:{title:"已有一级分类"}},[i("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(e){t.onCategoryPicker()}},slot:"right-icon"},[i("span",[t._v(t._s(t.now_category.categorysTitle?t.now_category.categorysTitle:"请选择"))]),t._v(" "),i("van-icon",{attrs:{name:"arrow"}})],1)])],1)],t._v(" "),i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("分类描述")]),t._v(" "),i("van-cell-group",[i("van-field",{attrs:{type:"textarea",placeholder:"请输入分类描述",rows:"3"},model:{value:t.now_category.description,callback:function(e){t.$set(t.now_category,"description",e)},expression:"now_category.description"}})],1),t._v(" "),i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("售卖时间")]),t._v(" "),i("van-radio-group",{model:{value:t.now_category.is_showtime,callback:function(e){t.$set(t.now_category,"is_showtime",e)},expression:"now_category.is_showtime"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"全时段售卖",clickable:""},on:{click:function(e){t.now_category.is_showtime="0"}}},[i("van-radio",{attrs:{name:"0"}})],1),t._v(" "),i("van-cell",{attrs:{title:"限时售卖",clickable:""},on:{click:function(e){t.now_category.is_showtime="1"}}},[i("van-radio",{attrs:{name:"1"}})],1)],1)],1),t._v(" "),1==t.now_category.is_showtime?[i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("售卖日")]),t._v(" "),i("div",{staticClass:"sail-day padding-10-lr padding-5-t padding-5-b bg-default"},t._l(t.weeks,function(e,o){return i("div",{staticClass:"weekday"},[i("div",{staticClass:"weekday-inner",class:{active:t.now_category.limit_week[o+1]==o+1},on:{click:function(e){t.onSelectWeek(o+1)}}},[t._v(t._s(e))])])})),t._v(" "),i("div",{staticClass:"padding-10-tb padding-15-lr font-14 c-gray"},[t._v("售卖时段")]),t._v(" "),i("van-cell",[t.now_category.start_time?i("span",{on:{click:function(e){t.onTogglePicker("s")}}},[t._v(t._s(t.now_category.start_time))]):i("span",{on:{click:function(e){t.onTogglePicker("s")}}},[t._v("0:00")]),t._v(" "),i("span",{staticClass:"padding-15-lr"},[t._v("至")]),t._v(" "),t.now_category.end_time?i("span",{on:{click:function(e){t.onTogglePicker("e")}}},[t._v(t._s(t.now_category.end_time))]):i("span",{on:{click:function(e){t.onTogglePicker("e")}}},[t._v("0:00")])])]:t._e(),t._v(" "),i("div",{staticClass:"padding-15"},[i("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),t.id>0?i("van-button",{staticClass:"bg-danger font-16 margin-15-t",attrs:{size:"normal",block:""},on:{click:function(e){t.onDeleteCategory(t.now_category)}}},[t._v("删除")]):t._e()],1)],2),t._v(" "),t.showPreLoading?i("iloading"):t._e(),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.timePicker,callback:function(e){t.timePicker=e},expression:"timePicker"}},[i("div",{staticClass:"popup-content"},[i("van-datetime-picker",{attrs:{type:"time","min-hour":0,"max-hour":23},on:{confirm:t.onConfirmTime,cancel:t.onTogglePicker},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)]),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.categoryPicker,callback:function(e){t.categoryPicker=e},expression:"categoryPicker"}},[i("div",{staticClass:"popup-content"},[i("van-picker",{attrs:{"show-toolbar":"","value-key":"title",columns:t.categorys},on:{cancel:t.onCategoryPicker,confirm:t.onConfirmCategory}})],1)])],1)},staticRenderFns:[]};var d=i("VU/8")(l,g,!1,function(t){i("WX5r")},null,null);e.default=d.exports},WX5r:function(t,e){}});
//# sourceMappingURL=49.9111940a0577836c3b49.js.map