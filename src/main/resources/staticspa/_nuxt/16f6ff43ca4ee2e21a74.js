(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{187:function(e,t,n){var content=n(192);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("f00e97e0",content,!0,{sourceMap:!1})},188:function(e,t,n){var content=n(194);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("db350200",content,!0,{sourceMap:!1})},189:function(e,t,n){var content=n(196);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("31b05778",content,!0,{sourceMap:!1})},191:function(e,t,n){"use strict";var r=n(187);n.n(r).a},192:function(e,t,n){(t=n(38)(!1)).push([e.i,".warning[data-v-2425c710]{color:#ffac30}.success[data-v-2425c710]{color:#48c774}.node-block[data-v-2425c710]{border:2px solid #fff;border-radius:10px;padding:.1em}.marker>div[data-v-2425c710]{padding:0 3px;margin-top:-.8em;text-align:center}.title[data-v-2425c710]{background:#232a3d none repeat scroll 0 0;display:inline;padding:0 .6em;margin:0 .6em;color:#fff}.content[data-v-2425c710]{padding:0;color:#fff}ul[data-v-2425c710]{padding:0;list-style:none;text-align:left}li[data-v-2425c710]{color:#fff;font-weight:700}span[data-v-2425c710]{color:#f2eef2!important;font-weight:400}td[data-v-2425c710]{color:#f2eef2;text-align:right}th[data-v-2425c710]{text-align:left}",""]),e.exports=t},193:function(e,t,n){"use strict";var r=n(188);n.n(r).a},194:function(e,t,n){(t=n(38)(!1)).push([e.i,".service-block[data-v-a2424398]{margin:.35em}.marker[data-v-a2424398]{border:2px solid #fff;display:inline-block}.marker>div[data-v-a2424398]{display:block;padding:0 3px;margin-top:-.8em;text-align:center}.title[data-v-a2424398]{background:#232a3d none repeat scroll 0 0;display:inline-block;padding:0 .6em;margin:0 .6em;color:#fff}.content[data-v-a2424398]{padding:.55em;display:inline-grid;grid-gap:.55em}",""]),e.exports=t},195:function(e,t,n){"use strict";var r=n(189);n.n(r).a},196:function(e,t,n){(t=n(38)(!1)).push([e.i,"#dashboard[data-v-2ba6ccd8]{min-height:100vh}.container[data-v-2ba6ccd8]{margin:0 auto;display:flex;flex-flow:column wrap;padding:0 1em 1em}h1[data-v-2ba6ccd8]{padding:.25em 1em;height:2em;color:#f2eef2}",""]),e.exports=t},197:function(e,t,n){"use strict";n.r(t);n(81),n(20),n(21),n(10),n(66);var r=n(49),o=n(67),c=n(190),l={name:"Node",props:{node:{required:!0,type:Object},flexStyle:{required:!1,type:Object}},computed:{faGasPump:function(){return c.a},daysSince:function(){return this.getDaysSince(this.node.health[0]["running since"])}},methods:{getDaysSince:function(e){var t=new Date,n=new Date(e);return Math.floor((t-n)/864e5)}}},d=(n(191),n(48)),f={name:"Service",components:{Node:Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"node-block",style:e.flexStyle},[n("div",{staticClass:"marker"},[n("div",[n("div",{staticClass:"title"},[e._v("\n        "+e._s(e.node.ip)+"\n      ")]),e._v(" "),n("div",{staticClass:"content"},[n("ul",[e._m(0),e._v(" "),n("li",[n("span",[e._v("Ver: ")]),e._v(e._s(e.node.health[0].hasOwnProperty("version")?e.node.health[0].version:"missing"))]),e._v(" "),n("li",[n("span",[e._v("Uptime: ")]),e._v(e._s(e.daysSince)+" Days "),n("font-awesome-icon",{class:e.daysSince>7?"warning":"success",attrs:{icon:e.faGasPump}})],1)])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("span",[this._v("Health: ")]),this._v("Ok")])}],!1,null,"2425c710",null).exports},props:{service:{required:!0,type:Object}},computed:{gridStyle:function(){return{gridTemplateColumns:"repeat(".concat(this.autoGrid(),",minmax(130px,1fr))")}}},data:function(){return{}},methods:{autoGrid:function(){return 2},isInt:function(e){return e%1==0}}},v=(n(193),Object(d.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"service-block"},[t("div",{staticClass:"marker"},[t("div",[t("div",{staticClass:"title"},[this._v("\n          "+this._s(this.service.name)+"\n        ")]),this._v(" "),t("div",[t("div",{staticClass:"content",style:this.gridStyle},this._l(this.service.nodes,(function(e,n){return t("Node",{key:n,attrs:{node:e}})})),1)])])])])}),[],!1,null,"a2424398",null).exports);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={name:"PollingService",data:function(){return{polling:null,interval:5e3}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({startAutoPoller:function(){var e=this;this.fetchData(),this.polling=setInterval((function(){e.fetchData()}),this.interval)}},Object(o.b)(["fetchData"])),beforeDestroy:function(){clearInterval(this.polling)},created:function(){this.startAutoPoller()}},O=Object(d.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"7263fa80",null).exports;function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var j={name:"OnWindowResizeService",methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.d)({setWindowHeight:"layout/setWindowHeight",setHeadingHeight:"layout/setHeadingHeight"}),{handleResize:function(){var e=document.getElementById("heading").offsetHeight;this.setWindowHeight(window.innerHeight),this.setHeadingHeight(e)}}),mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}};function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var _={components:{Service:v,PollingService:O,OnWindowResizeService:Object(d.a)(j,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"da1ea070",null).exports},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.e)(["services"]),{},Object(o.c)({dashboardContainerHeight:"layout/dashboardContainerHeight"}))},P=(n(195),Object(d.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("h1",{attrs:{id:"heading"}},[e._v(e._s(e.services.name))]),e._v(" "),n("PollingService"),e._v(" "),n("OnWindowResizeService"),e._v(" "),n("div",{staticClass:"container",style:{height:e.dashboardContainerHeight+"px"}},e._l(e.services.services,(function(e,t){return n("Service",{key:t,attrs:{service:e}})})),1)],1)}),[],!1,null,"2ba6ccd8",null));t.default=P.exports}}]);