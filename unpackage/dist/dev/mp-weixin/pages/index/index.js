require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],[,,,,,,,,,function(e,t,n){"use strict";var i=a(n(0)),s=a(n(10));function a(e){return e&&e.__esModule?e:{default:e}}new i.default(s.default).$mount()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),s=n.n(i),a=n(13),o=!1;var u=function(e){o||n(11)},l=n(1)(s.a,a.a,u,null,null);l.options.__file="..\\..\\..\\..\\uniapp\\news\\pages\\index\\index.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},function(e,t){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{news:[]}},onLoad:function(){var t=this;e.showLoading({title:"加载中...."}),e.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(n){t.news=n.data,e.hideLoading()},fail:function(){},complete:function(){}})},methods:{openinfo:function(t){var n=t.currentTarget.dataset.newsid;e.navigateTo({url:"../info/info?newsid="+n})}}}}).call(t,n(2).default)},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("view",{staticClass:"uni-list"},e._l(e.news,function(t,i){return n("view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover","data-newsid":t.post_id,eventid:"krQ-0-"+i},on:{tap:e.openinfo}},[n("view",{staticClass:"uni-media-list"},[n("image",{staticClass:"uni-media-list-logo",attrs:{src:t.author_avatar}}),e._v(" "),n("view",{staticClass:"uni-media-list-body"},[n("view",{staticClass:"uni-media-list-text-top"},[e._v(e._s(t.title))]),e._v(" "),n("view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[e._v(e._s(t.created_at))])])])])}))])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s}],[9]);
//# sourceMappingURL=../../.sourcemap/pages/index/index.js.map