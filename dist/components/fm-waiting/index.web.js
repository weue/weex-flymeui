// { "framework": "Vue" }

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-waiting/index"]=e():t["npm/weex-flymeui/components/fm-waiting/index"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=268)}({0:function(t,e){t.exports=function(t,e,n,i,r){var o,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,s=t.default);var c,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),i&&(u._scopeId=i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,d=l?u.render:u.beforeCreate;l?u.render=function(t,e){return c.call(e),d(t,e)}:u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:o,exports:s,options:u}}},1:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},2:function(t,e,n){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(3),o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(v(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(v(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function v(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(u)return l;i.parentNode.removeChild(i)}if(f){var r=c++;i=a||(a=m()),e=g.bind(null,i,r,!1),n=g.bind(null,i,r,!0)}else i=m(),e=function(t,e){var n=e.css,i=e.media,r=e.sourceMap;i&&t.setAttribute("media",i);d.ssrId&&t.setAttribute(p,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}t.exports=function(t,e,n,i){u=n,d=i||{};var s=r(t,e);return h(s),function(e){for(var n=[],i=0;i<s.length;i++){var a=s[i];(c=o[a.id]).refs--,n.push(c)}e?h(s=r(t,e)):s=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},268:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(269);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return function(t){return t&&t.__esModule?t:{default:t}}(i).default}})},269:function(t,e,n){var i=!1;var r=n(0)(n(272),n(274),function(t){i||n(270)},"data-v-60cd183e",null);r.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-waiting/index.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},270:function(t,e,n){var i=n(271);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("3831d5aa",i,!1,{})},271:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\n.fm-waiting[data-v-60cd183e] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  /*兼容H5异常*/\n  z-index: 999;\n}\n.waiting-wrapper[data-v-60cd183e] {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 2.22222rem;\n  border-radius: 0.16667rem;\n  padding: 0 0.66667rem;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.waiting--text[data-v-60cd183e] {\n  font-size: 0.38889rem;\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  text-align: center;\n}\n.waiting-circle[data-v-60cd183e] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  margin: 0.55556rem 0;\n}\n.waiting--dot[data-v-60cd183e] {\n  z-index: 1;\n  width: 0.38889rem;\n  height: 0.38889rem;\n  margin: 0 0.02778rem;\n  border-radius: 0.19444rem;\n  opacity: 1;\n}\n.waiting--dot-1[data-v-60cd183e] {\n  background-color: #4da84f;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.waiting--dot-2[data-v-60cd183e] {\n  background-color: #4d79d3;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.waiting--dot-3[data-v-60cd183e] {\n  background-color: #de6a3c;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n",""])},272:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(273));var r=weex.requireModule("animation");e.default={name:"FmWaiting",props:{title:{type:String,default:""},backgroundOpacity:{type:Number,default:.7},canAutoClose:{type:Boolean,default:!0}},data:function(){return{show:!1,showIn:!1,loadingStart:0,animating:!1}},computed:{wrapperStyle:function(){var t=this.showIn;return{backgroundColor:"rgba(0, 0, 0, "+this.backgroundOpacity+")",opacity:t?1:0}}},methods:{handleTouchEnd:function(t){t.preventDefault&&t.preventDefault()},appear:function(t){var e=this;if(!this.animating){var n=this.$refs["fm-waiting"];n?(this.animating=!0,r.transition(n,{styles:{opacity:t?1:0},duration:320,timingFunction:"cubic-bezier(0.33, 0, 0.66, 1)"},function(){e.showIn=t,t?e.$emit("fmWaitingAppeared",!1):e.$emit("fmWaitingDisappeared",!1),e.animating=!1})):this.showIn=t}},start:function(){this.prepare(),this.dot1Queue.loop(),this.dot2Queue.loop(),this.dot3Queue.loop()},stop:function(){this.dot1Queue&&this.dot1Queue.stop(),this.dot2Queue&&this.dot2Queue.stop(),this.dot3Queue&&this.dot3Queue.stop()},warpperClicked:function(){this.animating||this.canAutoClose&&this.hide()},prepare:function(){this.dot1=this.$refs["dot-1"],this.dot2=this.$refs["dot-2"],this.dot3=this.$refs["dot-3"];this.dot1Queue=(0,i.default)(this.dot1,[{styles:{transform:"translateX(48px) scale(1)",opacity:1,perspective:0},duration:700,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},{styles:{transform:"translateX(96px) scale(0.5)",opacity:1,perspective:0},duration:700,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},{styles:{transform:"translateX(90px) scale(0.3)",opacity:0,perspective:0},duration:200,timingFunction:"linear"},{styles:{transform:"translateX(0px) scale(0.5)",opacity:1,perspective:0},duration:500,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"}]);this.dot2Queue=(0,i.default)(this.dot2,[{styles:{transform:"translateX(48px) scale(0.5)",opacity:1,perspective:0},duration:700,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},{styles:{transform:"translateX(40px) scale(0.3)",opacity:0,perspective:0},duration:200,timingFunction:"linear"},{styles:{transform:"translateX(-48px) scale(0.5)",opacity:1,perspective:0},duration:500,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},{styles:{transform:"translateX(0px) scale(1)",opacity:1,perspective:0},duration:700,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"}]);this.dot3Queue=(0,i.default)(this.dot3,[{styles:{transform:"translateX(-6px) scale(0.3)",opacity:0,perspective:0},duration:200,timingFunction:"linear"},{styles:{transform:"translateX(-96px) scale(0.5)",opacity:1,perspective:0},duration:500,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},{styles:{transform:"translateX(-48px) scale(1)",opacity:1,perspective:0},duration:700,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},{styles:{transform:"translateX(0px) scale(0.5)",opacity:1,perspective:0},duration:700,timingFunction:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"}])},active:function(){var t=this;this.show||(this.show=!0,this.loadingStart=(new Date).getTime(),setTimeout(function(){t.appear(!0),t.start()},20))},hide:function(){var t=this;if(this.show){this.show=!1;var e=20;(new Date).getTime()-this.loadingStart<=500&&(e=500),setTimeout(function(){t.appear(!1),t.stop()},e)}}}}},273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new o(t,e)};var r=weex.requireModule("animation"),o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.steps=n,this.currStep=-1,this.looping=!1}return i(t,[{key:"start",value:function(){this._excuteAll()}},{key:"reset",value:function(){this.currStep=-1}},{key:"loop",value:function(){var t=this;this.looping=!0;!function e(){t.looping&&t._excuteAll(function(){t.reset(),e()})}()}},{key:"stop",value:function(){this.looping=!1}},{key:"_excuteAll",value:function(t){var e=this,n=this._next();n?this._animate(n,function(){setTimeout(function(){e._excuteAll(t)},1)}):"function"==typeof t&&t()}},{key:"_animate",value:function(t,e){r.transition(this.element,t,function(){"function"==typeof e&&e()})}},{key:"_next",value:function(t){return this.currStep<this.steps.length&&(this.currStep++,this.steps[this.currStep])}}]),t}()},274:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show||t.showIn?n("div",{ref:"fm-waiting",staticClass:"fm-waiting",staticStyle:t.$processStyle(void 0),style:t.$processStyle(t.wrapperStyle),on:{click:t.warpperClicked,touchend:t.handleTouchEnd}},[t.show||t.showIn?n("div",{staticClass:"waiting-wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[n("div",{staticClass:"waiting-circle",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[n("div",{ref:"dot-1",staticClass:"waiting--dot waiting--dot-1",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)}),t._v(" "),n("div",{ref:"dot-2",staticClass:"waiting--dot waiting--dot-2",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)}),t._v(" "),n("div",{ref:"dot-3",staticClass:"waiting--dot waiting--dot-3",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)})]),t._v(" "),n("text",{staticClass:"waiting--text",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v(t._s(t.title))])]):t._e()]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0},3:function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a={id:t+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}}})});