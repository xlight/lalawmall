webpackJsonp([71],{Gw1t:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Cz8s"),l=e("+CBI"),n=e("deIj"),r={data:function(){return{id:0,showPreLoading:!0,printerPicker:!1,print_labels:[],qrcodePicker:!1,data:{status:0,name:"",type:"feie",print_no:"",key:"",api_key:"",feie_user:"",feie_ukey:"",member_code:"",userid:"",print_nums:"1",print_header:"",print_footer:"",print_label_type:0,print_label:[],is_print_all:"",qrcode_type:"delivery_assign",qrcode_link:"",language:"zh-cn",data:{format:{goods_title:{font_size:"large"},note:{font_size:"large"}}}}}},components:{publicHeader:i.a,iswitch:l.a},methods:{onLoad:function(){var a=this,t=this;Object(n.a)({vue:this,url:"manage/shop/printer/post",data:{id:t.id,_account_perm:1},success:function(e){a.print_labels=t.util.extend(a.print_labels,e.print_labels),e.data&&(a.data=t.util.extend(a.data,e.data))}})},onPrinterPicker:function(){this.printerPicker=!this.printerPicker},onQrcodePicker:function(){this.qrcodePicker=!this.qrcodePicker},onCloseQrcode:function(){this.data.qrcode_link="",this.onQrcodePicker()},onLabelsPicker:function(){this.data.print_labels="",this.onPrinterPicker()},onToggleLabels:function(a){this.$refs.checkboxes[a].toggle()},onSubmit:function(){return this.data.name?this.data.print_no?void Object(n.c)({vue:this,url:"manage/shop/printer/post",data:{id:this.id,data:this.data},message:"编辑打印机成功",redirect:this.util.getUrl({path:"/pages/printer/list"})}):(this.util.$toast("机器号不能为空","",1e3),!1):(this.util.$toast("名称不能为空","",1e3),!1)},jsToggleSwitch:function(a){this.util.jsToggleSwitch({vue:this,key:a.keys,value:a.value})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},c={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"printer-post"}},[e("public-header",{attrs:{title:"编辑打印机"}}),a._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",[e("van-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[a._v("是否启用打印机")]),a._v(" "),e("iswitch",{attrs:{slot:"right-icon",value:a.data.status,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"data.status"},on:{change:a.jsToggleSwitch},slot:"right-icon"})],1),a._v(" "),e("van-field",{attrs:{label:"打印机名称",placeholder:"请填写打印机名称","input-align":"right"},model:{value:a.data.name,callback:function(t){a.$set(a.data,"name",t)},expression:"data.name"}})],1),a._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.type,callback:function(t){a.$set(a.data,"type",t)},expression:"data.type"}},[e("van-cell",{attrs:{title:"打印机类型"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"飞鹅定制打印机",clickable:"",label:""},on:{click:function(t){a.data.type="feie"}}},[e("van-radio",{attrs:{name:"feie"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"飞鹅新版定制打印机",clickable:"",label:""},on:{click:function(t){a.data.type="feie_new"}}},[e("van-radio",{attrs:{name:"feie_new"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"365 S1定制打印机",clickable:"",label:"机器号以kdt1开头的"},on:{click:function(t){a.data.type="365"}}},[e("van-radio",{attrs:{name:"365"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"365 S2定制打印机",clickable:"",label:"机器号以kdt2开头的"},on:{click:function(t){a.data.type="365_s2"}}},[e("van-radio",{attrs:{name:"365_s2"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"喜讯定制打印机",clickable:"",label:"支持打印后自动接单"},on:{click:function(t){a.data.type="xixun"}}},[e("van-radio",{attrs:{name:"xixun"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"易联云定制打印机",clickable:"",label:"不推荐"},on:{click:function(t){a.data.type="yilianyun"}}},[e("van-radio",{attrs:{name:"yilianyun"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"飞印打印机",clickable:"",label:"不推荐,后期将停止更新"},on:{click:function(t){a.data.type="feiyin"}}},[e("van-radio",{attrs:{name:"feiyin"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"AiPrint打印机",clickable:"",label:"不推荐,后期将停止更新"},on:{click:function(t){a.data.type="AiPrint"}}},[e("van-radio",{attrs:{name:"AiPrint"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"启云定制打印机",clickable:"",label:"不推荐,后期将停止更新"},on:{click:function(t){a.data.type="qiyun"}}},[e("van-radio",{attrs:{name:"qiyun"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"进云打印机",clickable:"",label:"不推荐"},on:{click:function(t){a.data.type="jinyun"}}},[e("van-radio",{attrs:{name:"jinyun"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"零点云打印机",clickable:""},on:{click:function(t){a.data.type="lingdian"}}},[e("van-radio",{attrs:{name:"lingdian"}})],1)],1),a._v(" "),e("van-cell-group",{staticClass:"margin-10-t"},["feie_new"==a.data.type?[e("van-field",{attrs:{label:"USER",placeholder:"请填写飞鹅USER","input-align":"right"},model:{value:a.data.member_code,callback:function(t){a.$set(a.data,"member_code",t)},expression:"data.member_code"}}),a._v(" "),e("van-field",{attrs:{label:"UKEY",placeholder:"请填写飞鹅UKEY","input-align":"right"},model:{value:a.data.api_key,callback:function(t){a.$set(a.data,"api_key",t)},expression:"data.api_key"}})]:a._e(),a._v(" "),"jinyun"==a.data.type?[e("van-field",{attrs:{label:"商户ID",placeholder:"请填写商户ID","input-align":"right"},model:{value:a.data.member_code,callback:function(t){a.$set(a.data,"member_code",t)},expression:"data.member_code"}}),a._v(" "),e("van-field",{attrs:{label:"API密钥",placeholder:"请填写API密钥","input-align":"right"},model:{value:a.data.api_key,callback:function(t){a.$set(a.data,"api_key",t)},expression:"data.api_key"}})]:a._e(),a._v(" "),e("van-field",{attrs:{label:"机器号",placeholder:"请填写机器号","input-align":"right"},model:{value:a.data.print_no,callback:function(t){a.$set(a.data,"print_no",t)},expression:"data.print_no"}}),a._v(" "),"jinyun"==a.data.type?[e("van-field",{attrs:{label:"打印机设备编码",placeholder:"请填写打印机设备编码","input-align":"right"},model:{value:a.data.key,callback:function(t){a.$set(a.data,"key",t)},expression:"data.key"}})]:a._e(),a._v(" "),"xixun"!==a.data.type&&"jinyun"!==a.data.type?[e("van-field",{attrs:{label:"打印机key",placeholder:"请填写打印机key","input-align":"right"},model:{value:a.data.key,callback:function(t){a.$set(a.data,"key",t)},expression:"data.key"}})]:a._e(),a._v(" "),"feiyin"==a.data.type||"AiPrint"==a.data.type?[e("van-field",{attrs:{label:"商户编号",placeholder:"请填写商户编号","input-align":"right"},model:{value:a.data.member_code,callback:function(t){a.$set(a.data,"member_code",t)},expression:"data.member_code"}})]:a._e(),a._v(" "),"yilianyun"==a.data.type||"qiyun"==a.data.type?[e("van-field",{attrs:{label:"用户ID",placeholder:"请填写用户ID","input-align":"right"},model:{value:a.data.userid,callback:function(t){a.$set(a.data,"userid",t)},expression:"data.userid"}}),a._v(" "),e("van-field",{attrs:{label:"apikey",placeholder:"请填写apikey","input-align":"right"},model:{value:a.data.api_key,callback:function(t){a.$set(a.data,"api_key",t)},expression:"data.api_key"}})]:a._e(),a._v(" "),e("van-field",{attrs:{label:"打印联数",placeholder:"默认为1","input-align":"right"},model:{value:a.data.print_nums,callback:function(t){a.$set(a.data,"print_nums",t)},expression:"data.print_nums"}}),a._v(" "),e("van-field",{attrs:{label:"头部自定义信息",placeholder:"建议少于20个字","input-align":"right"},model:{value:a.data.print_header,callback:function(t){a.$set(a.data,"print_header",t)},expression:"data.print_header"}}),a._v(" "),e("van-field",{attrs:{label:"尾部自定义信息",placeholder:"建议少于20个字","input-align":"right"},model:{value:a.data.print_footer,callback:function(t){a.$set(a.data,"print_footer",t)},expression:"data.print_footer"}})],2),a._v(" "),"feie_new"==a.data.type||"feie"==a.data.type?[e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.language,callback:function(t){a.$set(a.data,"language",t)},expression:"data.language"}},[e("van-cell",{attrs:{title:"打印机语言"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"简体中文",clickable:""},on:{click:function(t){a.data.language="zh-cn"}}},[e("van-radio",{attrs:{name:"zh-cn"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"维语",clickable:""},on:{click:function(t){a.data.language="Uyghur"}}},[e("van-radio",{attrs:{name:"Uyghur"}})],1)],1)]:a._e(),a._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.print_label_type,callback:function(t){a.$set(a.data,"print_label_type",t)},expression:"data.print_label_type"}},[e("van-cell",{attrs:{title:"打印指定标签"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"打印所有的商品",clickable:""},on:{click:function(t){a.data.print_label_type=0}}},[e("van-radio",{attrs:{name:0}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"打印指定标签",clickable:""},on:{click:function(t){a.data.print_label_type=1,a.onPrinterPicker()}}},[e("van-radio",{attrs:{name:1}})],1)],1),a._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.is_print_all,callback:function(t){a.$set(a.data,"is_print_all",t)},expression:"data.is_print_all"}},[e("van-cell",{attrs:{title:"打印类型"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"整单打印",clickable:"",label:"打印订单的全部商品条目信息"},on:{click:function(t){a.data.is_print_all="1"}}},[e("van-radio",{attrs:{name:"1"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"分单打印",clickable:"",label:"订单里的全部商品每个打印一次"},on:{click:function(t){a.data.is_print_all="0"}}},[e("van-radio",{attrs:{name:"0"}})],1)],1),a._v(" "),a.util.checkplugin("svip")?[e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.data.format.goods_title.font_size,callback:function(t){a.$set(a.data.data.format.goods_title,"font_size",t)},expression:"data.data.format.goods_title.font_size"}},[e("van-cell",{attrs:{title:"商品名称文字大小"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"大字号",clickable:""},on:{click:function(t){a.data.data.format.goods_title.font_size="large"}}},[e("van-radio",{attrs:{name:"large"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"正常字号",clickable:""},on:{click:function(t){a.data.data.format.goods_title.font_size="normal"}}},[e("van-radio",{attrs:{name:"normal"}})],1)],1),a._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.data.format.note.font_size,callback:function(t){a.$set(a.data.data.format.note,"font_size",t)},expression:"data.data.format.note.font_size"}},[e("van-cell",{attrs:{title:"订单备注文字大小"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"大字号",clickable:""},on:{click:function(t){a.data.data.format.note.font_size="large"}}},[e("van-radio",{attrs:{name:"large"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"正常字号",clickable:""},on:{click:function(t){a.data.data.format.note.font_size="normal"}}},[e("van-radio",{attrs:{name:"normal"}})],1)],1)]:a._e(),a._v(" "),e("van-radio-group",{staticClass:"margin-10-t",model:{value:a.data.qrcode_type,callback:function(t){a.$set(a.data,"qrcode_type",t)},expression:"data.qrcode_type"}},[e("van-cell",{attrs:{title:"二维码类型"}}),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"配送员接单二维码",clickable:""},on:{click:function(t){a.data.qrcode_type="delivery_assign"}}},[e("van-radio",{attrs:{name:"delivery_assign"}})],1),a._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"自定义二维码链接",clickable:""},on:{click:function(t){a.data.qrcode_type="custom",a.onQrcodePicker()}}},[e("van-radio",{attrs:{name:"custom"}})],1)],1),a._v(" "),e("div",{staticClass:"padding-15"},[e("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:""},on:{click:a.onSubmit}},[a._v("提交")])],1)],2),a._v(" "),a.showPreLoading?e("iloading"):a._e(),a._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:a.printerPicker,callback:function(t){a.printerPicker=t},expression:"printerPicker"}},[e("div",{staticClass:"popup-title"},[e("span",{staticClass:"c-info",on:{click:a.onLabelsPicker}},[a._v("取消")]),a._v(" "),e("span",[a._v("打印指定标签")]),a._v(" "),e("span",{staticClass:"c-info",on:{click:a.onPrinterPicker}},[a._v("确定")])]),a._v(" "),e("div",{staticClass:"popup-content"},[e("van-checkbox-group",{model:{value:a.data.print_label,callback:function(t){a.$set(a.data,"print_label",t)},expression:"data.print_label"}},[e("van-cell-group",a._l(a.print_labels,function(t,i){return e("van-cell",{key:t.id,attrs:{clickable:"",title:t.title},on:{click:function(t){a.onToggleLabels(i)}}},[e("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:t.id}})],1)}))],1)],1)]),a._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:a.qrcodePicker,callback:function(t){a.qrcodePicker=t},expression:"qrcodePicker"}},[e("div",{staticClass:"popup-title"},[e("span",{staticClass:"c-info",on:{click:a.onCloseQrcode}},[a._v("取消")]),a._v(" "),e("span",[a._v("自定义二维码链接")]),a._v(" "),e("span",{staticClass:"c-info",on:{click:a.onQrcodePicker}},[a._v("确定")])]),a._v(" "),e("div",{staticClass:"popup-content"},[e("van-cell-group",{staticClass:"margin-10-t"},[e("van-field",{attrs:{label:"自定义二维码链接","input-align":"right"},model:{value:a.data.qrcode_link,callback:function(t){a.$set(a.data,"qrcode_link",t)},expression:"data.qrcode_link"}})],1)],1)])],1)},staticRenderFns:[]};var s=e("VU/8")(r,c,!1,function(a){e("wQnJ")},null,null);t.default=s.exports},wQnJ:function(a,t){}});
//# sourceMappingURL=71.b1ac2c234789aaf28efb.js.map