(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouye/shouye"],{"237a":function(o,t,e){"use strict";e.r(t);var n=e("7515"),u=e("b8bf");for(var s in u)"default"!==s&&function(o){e.d(t,o,function(){return u[o]})}(s);e("cf6a");var c=e("2877"),a=Object(c["a"])(u["default"],n["a"],n["b"],!1,null,null,null);t["default"]=a.exports},"496f":function(o,t,e){},"615e":function(o,t,e){"use strict";(function(o){e("1cf6"),e("921b");n(e("66fd"));var t=n(e("237a"));function n(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("6e42")["createPage"])},7515:function(o,t,e){"use strict";var n=function(){var o=this,t=o.$createElement;o._self._c},u=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return u})},8867:function(o,t,e){"use strict";(function(o,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"65d3"))},s={components:{uniPopup:u},data:function(){return{show:!1,type:"",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,scrollTop:0,old:{scrollTop:0},imageURL:"/static/shouye/dat.png",imageURLX:"/static/shouye/xiaot.png",imageURLBUY:"/static/shouye/icon_ljcj_sy.png",imageURLa1:"/static/shouye/ad-02.jpg",imageURLa2:"/static/shouye/ad-03.jpg",imageURLa3:"/static/shouye/ad-04.jpg"}},methods:{togglePopup:function(o,t){this.type=o,"tip"===t?this.show=!0:this.$refs[t].open()},cancel:function(o){"tip"!==o?this.$refs[o].close():this.show=!1},change:function(t){console.log(o(t.show," at pages\\shouye\\shouye.vue:195"))},upper:function(t){console.log(o(t," at pages\\shouye\\shouye.vue:198"))},lower:function(t){console.log(o(t," at pages\\shouye\\shouye.vue:201"))},scroll:function(t){console.log(o(t," at pages\\shouye\\shouye.vue:204")),this.old.scrollTop=t.detail.scrollTop},goTop:function(o){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),n.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})},modal1:function(o){n.showModal({content:"抱歉,您的积分不足!",confirmColor:"#87572C",cancelColor:"#939393"})}}};t.default=s}).call(this,e("0de9")["default"],e("6e42")["default"])},b8bf:function(o,t,e){"use strict";e.r(t);var n=e("8867"),u=e.n(n);for(var s in n)"default"!==s&&function(o){e.d(t,o,function(){return n[o]})}(s);t["default"]=u.a},cf6a:function(o,t,e){"use strict";var n=e("496f"),u=e.n(n);u.a}},[["615e","common/runtime","common/vendor"]]]);