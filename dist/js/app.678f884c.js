(function(e){function t(t){for(var i,r,u=t[0],l=t[1],s=t[2],f=0,d=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f66":function(e,t,n){e.exports=n.p+"img/3.a9402f11.png"},2395:function(e,t,n){},"456f":function(e,t,n){"use strict";var i=n("7707"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("7c55"),n("2877")),u={},l=Object(r["a"])(u,o,a,!1,null,null,null),s=l.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ata-box container"},[n("div",{staticClass:"title hint"},[e._v("Activate the animation")]),e._m(0),n("div",{staticClass:"block-box"},e._l(e.$animateArr,(function(t,i){return n("div",{key:"img"+i,staticClass:"block-dom wow",class:t,attrs:{id:i}},[n("div",{staticClass:"block"},[n("div",{staticClass:"animate animated infinite",class:t,attrs:{"data-animate":t}},[n("img",{staticClass:"img",attrs:{src:e.imgDom[i%4]}})])]),n("div",{staticClass:"animate-name"},[e._v(e._s(t))])])})),0)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title abbreviation animated bounceInLeft"},[n("a",{attrs:{href:"https://nodei.co/npm/qiu-wow/"}},[n("img",{attrs:{src:"https://nodei.co/npm/qiu-wow.png"}})])])}],m=(n("4160"),n("c975"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("498a"),n("10d1"),n("159b"),n("ddb0"),n("2909")),p={element:window.document.documentElement,scrolled:!0,animationNameCache:new WeakMap,vendors:["moz","webkit"],interval:"",boxes:void 0,defaultInfo:{boxClass:"wow",animateClass:"animated",offset:0,innerHeight:0,mobile:!1,live:!0,isCycle:!1,callback:null}};function v(){p.scrolled=!1;var e=p.defaultInfo.isCycle?g.boxList():p.boxes||g.boxList(),t=[];if(e.forEach((function(e){return!e||(g.isVisible(e)?(g.show(e),!0):(p.defaultInfo.isCycle&&!g.isVisible(e)&&e.eventList&&e.eventList.animationend&&(g.applyStyle(e,!0),e.eventList={}),void t.push(e)))})),p.boxes=t,!t.length&&!p.defaultInfo.live)return g.stop()}function b(e){var t;p.defaultInfo=Object.assign(p.defaultInfo,e);var n=setInterval((function(){"interactive"!==(t=document.readyState)&&"complete"!==t||(clearInterval(n),h())}),50)}function h(){if(g.boxList().length&&(g.disabled()?g.resetStyle():(g.boxList().forEach((function(e){g.applyStyle(e,!0)})),v(),g.addEvent(window,"scroll",v),g.addEvent(window,"resize",v))),p.defaultInfo.live)return new MutationObserver((function(e){var t=[];return e.length&&e.forEach((function(e){t.push(function(){var t=e.addedNodes||[],n=[];return t.forEach((function(e){n.push(g.doSync(e))})),n}())})),t})).observe(document.body,{childList:!0,subtree:!0})}var g={isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},extend:function(){return Object.assign.apply(Object,arguments)},boxList:function(){return Object(m["a"])(p.element.querySelectorAll("."+p.defaultInfo.boxClass))},addEvent:function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},disabled:function(){return p.defaultInfo.mobile},resetStyle:function(){var e=[];return g.boxList().forEach((function(t){e.push(t.style.visibility="visible")})),e},applyStyle:function(e,t){var n=e.getAttribute("data-wow-duration"),i=e.getAttribute("data-wow-delay"),o=e.getAttribute("data-wow-iteration");return g.customStyle(e,t,n,i,o)},customStyle:function(e,t,n,i,o){return t&&p.animationNameCache.set(e,g.animationName(e)),e.style.visibility=t?"hidden":"visible",n&&g.vendorSet(e.style,{animationDuration:n}),i&&g.vendorSet(e.style,{animationDelay:i}),o&&g.vendorSet(e.style,{animationIterationCount:o}),g.vendorSet(e.style,{animationName:t?"none":p.animationNameCache.get(e)}),e},animationName:function(e){var t=getComputedStyle(e).getPropertyValue("animation-name");return"none"===t?"":t},vendorSet:function(e,t){var n=[],i=function(i){var o=t[i];e[""+i]=o,n.push(function(){var t=[];return p.vendors.forEach((function(n){t.push(e[""+n+i.charAt(0).toUpperCase()+i.substr(1)]=o)})),t}())};for(var o in t)i(o);return n},isVisible:function(e){var t=p.defaultInfo.offset,n=window.pageYOffset,i=n+g.innerHeight()-t,o=g.offsetTop(e),a=o+e.clientHeight;return o<=i&&a>=n},show:function(e){return g.applyStyle(e),e.className=e.className+" "+p.defaultInfo.animateClass,null!=p.defaultInfo.callback&&p.defaultInfo.callback(e),void 0===e.eventList&&(e.eventList={}),e.eventList.animationend?g.resetAnimationCycle(e):(g.addEvent(e,"animationend",g.resetAnimation),e.eventList.animationend=!0,g.addEvent(e,"oanimationend",g.resetAnimation),e.eventList.oanimationend=!0,g.addEvent(e,"webkitAnimationEnd",g.resetAnimation),e.eventList.webkitAnimationEnd=!0,g.addEvent(e,"mozAnimationEnd ",g.resetAnimation),e.eventList.mozAnimationEnd=!0,g.addEvent(e,"MSAnimationEnd",g.resetAnimation),e.eventList.MSAnimationEnd=!0),e},resetAnimation:function(e){var t;if(e.type.toLowerCase().indexOf("animationend")>=0)return t=e.target||e.srcElement,t.className=t.className.replace(p.defaultInfo.animateClass,"").trim()},resetAnimationCycle:function(e){return e.className=e.className.replace(p.defaultInfo.animateClass,"").trim()},stop:function(){g.removeEvent(window,"scroll",v),g.removeEvent(window,"resize",v)},removeEvent:function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},offsetTop:function(e){var t;while(void 0===e.offsetTop)e=e.parentNode;t=e.offsetTop;while(e=e.offsetParent)t+=e.offsetTop;return t},innerHeight:function(){return p.defaultInfo.innerHeight?p.defaultInfo.innerHeight:g.isMobile()?document.documentElement.scrollHeight>document.documentElement.clientHeight?window.innerHeight:document.documentElement.clientHeight:Math.min(document.documentElement.clientHeight,window.innerHeight)},doSync:function(e){var t=[];if(null==e&&(e=p.element),1===e.nodeType)return g.boxList().forEach((function(e){p.boxes.indexOf(e)<0?(p.boxes.push(e),g.disabled()?g.resetStyle():g.applyStyle(e,!0),t.push(p.scrolled=!0)):t.push(void 0)})),t}},w=b,y=w,I={name:"Home",data:function(){return{blockBoxShow:!1,imgDom:[n("775a"),n("8e30"),n("1f66"),n("5fa5")]}},created:function(){},mounted:function(){y({boxClass:"wow",animateClass:"animated",offset:0,innerHeight:0,mobile:!1,live:!0,isCycle:!1,callback:null})},methods:{}},O=I,E=(n("456f"),Object(r["a"])(O,f,d,!1,null,"608334f7",null)),L=E.exports;i["a"].use(c["a"]);var x=[{path:"/",name:"Home",component:L}],S=new c["a"]({routes:x}),C=S;n("77ed");i["a"].config.productionTip=!1,i["a"].prototype.$animateArr=["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp","hinge","rollIn","rollOut","headShake","jello","jackInTheBox","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","heartBeat"],new i["a"]({router:C,render:function(e){return e(s)}}).$mount("#app")},"5fa5":function(e,t,n){e.exports=n.p+"img/4.09a718f0.png"},7707:function(e,t,n){},"775a":function(e,t,n){e.exports=n.p+"img/1.86aacd57.png"},"7c55":function(e,t,n){"use strict";var i=n("2395"),o=n.n(i);o.a},"8e30":function(e,t,n){e.exports=n.p+"img/2.8d207b8c.png"}});
//# sourceMappingURL=app.678f884c.js.map