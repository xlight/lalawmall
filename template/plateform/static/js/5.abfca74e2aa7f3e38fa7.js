webpackJsonp([5],{HT2k:function(t,e){},MJLE:function(t,e,r){var i,n;n=function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;e<i;e++){var n=[],o=this.data.charCodeAt(e);o>65536?(n[0]=240|(1835008&o)>>>18,n[1]=128|(258048&o)>>>12,n[2]=128|(4032&o)>>>6,n[3]=128|63&o):o>2048?(n[0]=224|(61440&o)>>>12,n[1]=128|(4032&o)>>>6,n[2]=128|63&o):o>128?(n[0]=192|(1984&o)>>>6,n[1]=128|63&o):n[0]=o,this.parsedData.push(n)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[i][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=f.getLostPoint(this);(0==r||t>i)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var o=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(i.beginFill(0,100),i.moveTo(s,o),i.lineTo(s+1,o),i.lineTo(s+1,o+1),i.lineTo(s,o+1),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[i+o][n+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=f.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&1==(i>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(i>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[i][a-s]){var l=!1;o<t.length&&(l=1==(t[o]>>>n&1)),f.getMask(e,i,a-s)&&(l=!l),this.modules[i][a-s]=l,-1==--n&&(o++,n=7)}if((i+=r)<0||this.moduleCount<=i){i-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,i){for(var n=m.getRSBlocks(t,r),o=new _,a=0;a<i.length;a++){var s=i[a];o.put(s.mode,4),o.put(s.getLength(),f.getLengthInBits(s.mode,t)),s.write(o)}var l=0;for(a=0;a<n.length;a++)l+=n[a].dataCount;if(o.getLengthInBits()>8*l)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*l+")");for(o.getLengthInBits()+4<=8*l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*l||(o.put(e.PAD0,8),o.getLengthInBits()>=8*l));)o.put(e.PAD1,8);return e.createBytes(o,n)},e.createBytes=function(t,e){for(var r=0,i=0,n=0,o=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var l=e[s].dataCount,h=e[s].totalCount-l;i=Math.max(i,l),n=Math.max(n,h),o[s]=new Array(l);for(var u=0;u<o[s].length;u++)o[s][u]=255&t.buffer[u+r];r+=l;var c=f.getErrorCorrectPolynomial(h),d=new v(o[s],c.getLength()-1).mod(c);a[s]=new Array(c.getLength()-1);for(u=0;u<a[s].length;u++){var p=u+d.getLength()-a[s].length;a[s][u]=p>=0?d.get(p):0}}var g=0;for(u=0;u<e.length;u++)g+=e[u].totalCount;var m=new Array(g),_=0;for(u=0;u<i;u++)for(s=0;s<e.length;s++)u<o[s].length&&(m[_++]=o[s][u]);for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<a[s].length&&(m[_++]=a[s][u]);return m};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},o=0,a=1,s=2,l=3,h=4,u=5,c=6,d=7,f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case o:return(e+r)%2==0;case a:return e%2==0;case s:return r%3==0;case l:return(e+r)%3==0;case h:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case u:return e*r%2+e*r%3==0;case c:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new v([1],0),r=0;r<t;r++)e=e.multiply(new v([1,p.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var n=0;n<e;n++){for(var o=0,a=t.isDark(i,n),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var l=-1;l<=1;l++)n+l<0||e<=n+l||0==s&&0==l||a==t.isDark(i+s,n+l)&&o++;o>5&&(r+=3+o-5)}for(i=0;i<e-1;i++)for(n=0;n<e-1;n++){var h=0;t.isDark(i,n)&&h++,t.isDark(i+1,n)&&h++,t.isDark(i,n+1)&&h++,t.isDark(i+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);var u=0;for(n=0;n<e;n++)for(i=0;i<e;i++)t.isDark(i,n)&&u++;return r+=10*(Math.abs(100*u/e/e-50)/5)}},p={glog:function(t){if(t<1)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;g<8;g++)p.EXP_TABLE[g]=1<<g;for(g=8;g<256;g++)p.EXP_TABLE[g]=p.EXP_TABLE[g-4]^p.EXP_TABLE[g-5]^p.EXP_TABLE[g-6]^p.EXP_TABLE[g-8];for(g=0;g<255;g++)p.LOG_TABLE[p.EXP_TABLE[g]]=g;function v(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function m(t,e){this.totalCount=t,this.dataCount=e}function _(){this.buffer=[],this.length=0}v.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=p.gexp(p.glog(this.get(r))+p.glog(t.get(i)));return new v(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=p.glog(this.get(0))-p.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=p.gexp(p.glog(t.get(i))+e);return new v(r,0).mod(t)}},m.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m.getRSBlocks=function(t,e){var r=m.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,n=[],o=0;o<i;o++)for(var a=r[3*o+0],s=r[3*o+1],l=r[3*o+2],h=0;h<a;h++)n.push(new m(s,l));return n},m.getRsBlockTable=function(t,e){switch(e){case n.L:return m.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return m.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return m.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return m.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},_.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var w=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function y(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var C=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,r=this._el,i=t.getModuleCount();Math.floor(e.width/i),Math.floor(e.height/i);function n(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&r.setAttribute(i,e[i]);return r}this.clear();var o=n("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(o),o.appendChild(n("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(n("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<i;a++)for(var s=0;s<i;s++)if(t.isDark(a,s)){var l=n("use",{x:String(s),y:String(a)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),k="svg"===document.documentElement.tagName.toLowerCase()?C:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,i=t.getModuleCount(),n=Math.floor(e.width/i),o=Math.floor(e.height/i),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<i;s++){a.push("<tr>");for(var l=0;l<i;l++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+o+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var h=r.childNodes[0],u=(e.width-h.offsetWidth)/2,c=(e.height-h.offsetHeight)/2;u>0&&c>0&&(h.style.margin=c+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,i,n,o,a,s,l,h,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*e;else void 0===h&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}var i=function(t,e){this._bIsPainted=!1,this._android=y(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return i.prototype.draw=function(t){var e=this._elImage,r=this._oContext,i=this._htOption,n=t.getModuleCount(),o=i.width/n,a=i.height/n,s=Math.round(o),l=Math.round(a);e.style.display="none",this.clear();for(var h=0;h<n;h++)for(var u=0;u<n;u++){var c=t.isDark(h,u),d=u*o,f=h*a;r.strokeStyle=c?i.colorDark:i.colorLight,r.lineWidth=1,r.fillStyle=c?i.colorDark:i.colorLight,r.fillRect(d,f,o,a),r.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,s,l),r.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,s,l)}this._bIsPainted=!0},i.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var i=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return i.onabort=n,i.onerror=n,i.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}.call(this,t)},i.prototype.isPainted=function(){return this._bIsPainted},i.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},i.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},i}();function b(t,e){for(var r=1,i=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),o=0,a=w.length;o<=a;o++){var s=0;switch(e){case n.L:s=w[o][0];break;case n.M:s=w[o][1];break;case n.Q:s=w[o][2];break;case n.H:s=w[o][3]}if(i<=s)break;r++}if(r>w.length)throw new Error("Too long data");return r}return(i=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(k=C),this._android=y(),this._el=t,this._oQRCode=null,this._oDrawing=new k(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(b(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},i.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},i.prototype.clear=function(){this._oDrawing.clear()},i.CorrectLevel=n,i},t.exports=n()},lnPV:function(t,e){},yYVM:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("woOf"),n=r.n(i),o=r("Cz8s"),a=r("Gu7T"),s=r.n(a),l=r("MJLE"),h=r.n(l),u={props:{show:{type:Boolean,default:!0},scene:""},data:function(){return{keywords:"",fansSelectedIndex:-1,fans:[],qrcode:"",fansSearched:[]}},methods:{newQrcode:function(t){new h.a("qrcode-focus",{width:120,height:120,text:t,image:""})},onLoad:function(){var t=this;this.util.request({url:"plateform/common/fans",data:{scene:this.scene}}).then(function(e){var r=e.data.message;if(r.errno)return t.util.$toast(r.message),!1;(r=r.message).fans&&r.fans.length>0&&(t.fans=[].concat(s()(t.fans),s()(r.fans))),t.qrcode=r.qrcode,t.newQrcode(t.qrcode)})},cancel:function(){this.$emit("cancel")},confirm:function(){var t=this.fans;if(this.keywords&&(t=this.fansSearched),this.fansSelectedIndex<0||this.fansSelectedIndex>-1&&!t[this.fansSelectedIndex])return this.util.$toast("请选择一个粉丝"),!1;this.$emit("confirm",t[this.fansSelectedIndex])}},watch:{keywords:function(){var t=this;if(!this.keywords)return!1;this.fansSearched=[],this.util.request({url:"plateform/common/fans",data:{key:this.keywords,scene:this.scene}}).then(function(e){var r=e.data.message;if(r.errno)return t.util.$toast(r.message),!1;(r=r.message).fans&&r.fans.length>0&&(t.fansSearched=[].concat(s()(t.fansSearched),s()(r.fans)))})}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"select-fans"}},[r("van-popup",{staticClass:"popup-fans",attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("div",{staticClass:"popup-title"},[r("span",{staticClass:"c-gray",on:{click:t.cancel}},[t._v("取消")]),t._v(" "),r("span",[t._v("选择公众号粉丝")]),t._v(" "),r("span",{staticClass:"c-primary",on:{click:t.confirm}},[t._v("确定")])]),t._v(" "),r("div",{staticClass:"popup-content bg-default"},[r("ul",{staticClass:"font-14 padding-15"},[r("li",[t._v("待添加粉丝未关注公众号请先"),r("span",{staticClass:"c-danger"},[t._v("关注公众号")]),t._v("哦")]),t._v(" "),r("li",[t._v("未搜索到粉丝请"),r("span",{staticClass:"c-danger"},[t._v("扫码绑定粉丝")]),r("span",{staticClass:"font-12"},[t._v("(点击即可复制二维码)")])])]),t._v(" "),r("div",{attrs:{id:"qrcode-focus",alt:""}}),t._v(" "),r("van-search",{attrs:{placeholder:"请输入粉丝昵称/姓名/手机号/顾客UID"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),r("van-radio-group",{model:{value:t.fansSelectedIndex,callback:function(e){t.fansSelectedIndex=e},expression:"fansSelectedIndex"}},[t.keywords?r("van-cell-group",{staticClass:"border-0px"},t._l(t.fansSearched,function(e,i){return r("van-cell",{key:e.id,attrs:{clickable:""},on:{click:function(e){t.fansSelectedIndex=i}}},[r("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.nickname)+"\n\t\t\t\t\t\t")]),t._v(" "),r("van-radio",{attrs:{name:i}})],1)})):r("van-cell-group",{staticClass:"border-0px"},t._l(t.fans,function(e,i){return r("van-cell",{key:e.id,attrs:{clickable:""},on:{click:function(e){t.fansSelectedIndex=i}}},[r("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.nickname)+"\n\t\t\t\t\t\t")]),t._v(" "),r("van-radio",{attrs:{name:i}})],1)}))],1)],1)])],1)},staticRenderFns:[]};var d=r("VU/8")(u,c,!1,function(t){r("HT2k")},null,null).exports,f={components:{publicHeader:o.a,selectFans:d},data:function(){return{id:0,deliveryer:{nickname:"点击选择粉丝",title:"",mobile:"",age:"",sex:"男",password:"",repassword:""},sexGroup:["男","女"],fansSelected:{},popupStatus:{fans:!1,sex:!1},islegal:!1,showPreLoading:!0}},methods:{onLoad:function(){var t=this;if(!this.id)return this.islegal=!0,!1;this.util.request({url:"plateform/deliveryer/plateform/post",data:{id:this.id}}).then(function(e){t.showPreLoading=!1;var r=e.data.message;if(r.errno)return t.util.$toast(r.message),!1;(r=r.message).deliveryer&&(delete r.deliveryer.password,t.deliveryer=n()(t.deliveryer,r.deliveryer)),t.islegal=!0})},onSubmit:function(){var t=this;if(!this.islegal)return!1;var e=this.deliveryer;if(!this.id&&!this.fansSelected.id)return this.util.$toast("请选择一个粉丝"),!1;if(!e.title)return this.util.$toast("请填写配送员真实姓名"),!1;if(!e.mobile)return this.util.$toast("请填写配送员手机号"),!1;if(!this.util.isValidMobile(e.mobile))return this.util.$toast("手机号格式错误"),!1;if(!e.age)return this.util.$toast("请填写配送员年龄"),!1;if(!this.id&&!e.password)return this.util.$toast("请填写登录密码"),!1;if(e.passwrod){var r=e.password.length;if(r<8||r>20)return this.util.$toast("请输入8-20位密码"),!1;if(!/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(e.password))return this.util.$toast("密码必须由数字和字母组合"),!1;if(!e.repassword)return this.util.$toast("请重复输入密码"),!1;if(e.password!=e.repassword)return this.util.$toast("两次密码输入不一致"),!1}this.islegal=!1,this.util.request({url:"plateform/deliveryer/plateform/post",method:"POST",data:{id:this.id,deliveryer:e,wechat:this.fansSelected}}).then(function(e){var r=e.data.message;if(t.islegal=!0,r.errno)return t.util.$toast(r.message),!1;var i=r.message;i>0&&t.util.$toast("保存成功",t.util.getUrl({path:"pages/deliveryer/guide",query:{id:i}}),1500,"replace")})},onTogglePopup:function(t){this.popupStatus[t]=!this.popupStatus[t]},onConfirmFans:function(t){this.fansSelected=t,this.deliveryer.nickname=t.nickname,this.onTogglePopup("fans")},onConfirmSex:function(t,e){this.deliveryer.sex=t,this.onTogglePopup("sex")},onCancelSex:function(){this.onTogglePopup("sex")}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"deliveryer-profile"}},[r("public-header",{attrs:{title:"基本信息"}}),t._v(" "),r("div",{staticClass:"content"},[r("van-cell-group",[r("van-cell",{attrs:{title:"微信昵称"}},[r("div",{attrs:{slot:"right-icon"},on:{click:function(e){t.onTogglePopup("fans")}},slot:"right-icon"},[t._v("\n\t\t\t\t\t"+t._s(t.deliveryer.nickname)),r("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),r("van-field",{attrs:{label:"配送员姓名",placeholder:"请输入姓名","input-align":"right"},model:{value:t.deliveryer.title,callback:function(e){t.$set(t.deliveryer,"title",e)},expression:"deliveryer.title"}}),t._v(" "),r("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号","input-align":"right"},model:{value:t.deliveryer.mobile,callback:function(e){t.$set(t.deliveryer,"mobile",t._n(e))},expression:"deliveryer.mobile"}}),t._v(" "),r("van-field",{attrs:{label:"年龄",placeholder:"请输入年龄","input-align":"right"},model:{value:t.deliveryer.age,callback:function(e){t.$set(t.deliveryer,"age",t._n(e))},expression:"deliveryer.age"}}),t._v(" "),r("van-cell",{attrs:{title:"性别"}},[r("div",{attrs:{slot:"right-icon"},on:{click:function(e){t.onTogglePopup("sex")}},slot:"right-icon"},[t._v("\n\t\t\t\t\t"+t._s(t.deliveryer.sex)),r("van-icon",{attrs:{name:"arrow"}})],1)])],1),t._v(" "),r("van-cell-group",{staticClass:"margin-10-t"},[r("van-field",{attrs:{label:"登录密码",placeholder:"请输入登录密码",type:"password","input-align":"right"},model:{value:t.deliveryer.password,callback:function(e){t.$set(t.deliveryer,"password",t._n(e))},expression:"deliveryer.password"}}),t._v(" "),r("van-field",{attrs:{label:"确认登录密码",placeholder:"请再次输入登录密码",type:"password","input-align":"right"},model:{value:t.deliveryer.repassword,callback:function(e){t.$set(t.deliveryer,"repassword",t._n(e))},expression:"deliveryer.repassword"}})],1),t._v(" "),r("div",{staticClass:"padding-15"},[r("van-button",{attrs:{size:"normal",type:"primary",block:"",disabled:!t.islegal},on:{click:t.onSubmit}},[t._v("保存修改")])],1)],1),t._v(" "),t.popupStatus.fans?r("select-fans",{attrs:{show:t.popupStatus.fans},on:{cancel:function(e){t.onTogglePopup("fans")},confirm:t.onConfirmFans}}):t._e(),t._v(" "),r("van-popup",{attrs:{position:"bottom"},model:{value:t.popupStatus.sex,callback:function(e){t.$set(t.popupStatus,"sex",e)},expression:"popupStatus.sex"}},[r("van-picker",{attrs:{columns:t.sexGroup,title:"选择性别"},on:{confirm:t.onConfirmSex,cancel:t.onCancelSex}})],1),t._v(" "),t.showPreLoading?r("iloading"):t._e()],1)},staticRenderFns:[]};var g=r("VU/8")(f,p,!1,function(t){r("lnPV")},null,null);e.default=g.exports}});
//# sourceMappingURL=5.abfca74e2aa7f3e38fa7.js.map