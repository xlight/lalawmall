define(["jquery.ui"],function(a){var b={itemid:""};return b.init=function(a){window.tmodtpl=a.tmodtpl,b.attachurl=a.attachurl,b.guide=a.guide,b.guide||(b.guide={name:"启动图",params:{status:1,show_setting:"everytime",interval_time:60},css:{backgroundColor:"#000000"},data:{M0123456789101:{pagePath:"pages/home/index",imgUrl:"https://1.xinzuowl.com/attachment/images/1/2017/03/qra8AS8rF5m8MUom19Bo521maA8oF8.jpg"},M0123456789102:{pagePath:"pages/home/index",imgUrl:"https://1.xinzuowl.com/attachment/images/1/2016/11/yammcm8C22RvxXR2E2RrRX262rHkZP.jpg"},M0123456789103:{pagePath:"pages/home/index",imgUrl:"https://1.xinzuowl.com/attachment/images/1/2016/11/z6KuY8xzb8NnKb0B1cW6wK46W9Dlnu.jpg"}}}),tmodtpl.helper("tomedia",function(a){return"string"!=typeof a?"":0==a.indexOf("http://")||0==a.indexOf("https://")||0==a.indexOf("../addons")?a:0==a.indexOf("images/")?b.attachurl+a:void 0}),b.tplGuide(),b.tplEditor(),b.initGotop(),b.save()},b.tplGuide=function(){var a=tmodtpl("tpl-show-guide",b.guide);$("#app-preview").html(a)},b.tplEditor=function(){var a=tmodtpl("tpl-edit-guide",b.guide);$("#app-editor .inner").html(a),$("#app-editor #addItem").unbind("click").click(function(){var a=b.getId("M",0),c=$(this).closest(".form-items").data("max");if(b.length(b.guide.data)>=c)return void Notify.info("最大添加 "+c+" 个！");b.guide.data[a]={pagePath:"",imgUrl:""},b.tplGuide(),b.tplEditor()}),$("#app-editor .del-item").unbind("click").click(function(){var a=$(this).closest(".form-items").data("min"),c=$(this).closest(".item").data("id");if(a){if(b.length(b.guide.data)<=a)return void Notify.info("至少保留 "+a+" 个！")}Notify.confirm("确定删除吗",function(){delete b.guide.data[c],b.tplGuide(),b.tplEditor()})}),b.tplSortable(),$("#app-editor").find(".diy-bind").bind("input propertychange change",function(){var a=$(this),c=a.data("bind"),d=a.data("bind-child"),e=a.data("bind-parent"),f=a.data("bind-init"),g="",h=this.tagName;if("INPUT"==h){var i=a.data("placeholder");g=a.val(),g=""==g?i:g}else"SELECT"==h?g=a.find("option:selected").val():"TEXTAREA"==h&&(g=a.val());g=$.trim(g),d?e?b.guide[d][e][c]=g:b.guide[d][c]=g:b.guide[c]=g,b.tplGuide(),f&&b.tplEditor()}),$("#app-editor .slider").length>0&&$("#app-editor .slider").each(function(){var a=$(this).data("decimal"),b=($(this).data("multiply"),$(this).data("value"));a&&(b*=a),$(this).slider({slide:function(b,c){var d=c.value;a&&(d/=a),$(this).siblings(".input").val(d).trigger("propertychange"),$(this).siblings(".count").find("span").text(d)},value:b,min:$(this).data("min"),max:$(this).data("max")})})},b.tplSortable=function(){$("#app-editor .inner").sortable({opacity:.8,placeholder:"highlight",items:".item",revert:100,scroll:!1,cancel:".goods-selector,input,.btn",axis:"y",start:function(a,b){var c=b.item.height();$(".highlight").css({height:c+22+"px","margin-bottom":"10px"}),$(".highlight").html('<div><i class="icon icon-plus"></i> 放置此处</div>'),$(".highlight div").css({"line-height":c+16+"px","font-size":"16px",color:"#999","text-align":"center",border:"2px dashed #eee"})},update:function(a,c){b.sortItems()}})},b.sortItems=function(){var a={};$("#app-editor .inner .item").each(function(){var c=$(this).data("id");a[c]=b.guide.data[c]}),b.guide.data=a,b.tplGuide()},b.initGotop=function(){$(window).bind("scroll resize",function(){$(window).scrollTop()>100?$("#gotop").show():$("#gotop").hide(),$("#gotop").unbind("click").click(function(){$("body").animate({scrollTop:"0px"},1e3)})})},b.length=function(a){if(void 0===a)return 0;var b=0;for(var c in a)b++;return b},b.getId=function(a,b){return a+(+new Date+b)},b.save=function(){$(".btn-save").unbind("click").click(function(){if($(this).data("status"))return void Notify.info("正在保存，请稍候。。。");if(!b.guide.data)return void Notify.info("启动图为空！");$(".btn-save").data("status",1).text("保存中...");$.post("./index.php?c=site&a=entry&ctrl=wxapp&ac=guide&op=index&do=web&m=we7_wmall",{guide:b.guide},function(a){if($(".btn-save").text("保存启动图").data("status",0),0!=a.message.errno)return void Notify.error(a.message.message);Notify.success("保存成功！",a.message.url)},"json")})},b});