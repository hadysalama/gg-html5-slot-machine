(()=>{var e={274:(e,t,n)=>{var r={"./ape_rawr.webp":734,"./king_ape.webp":443,"./pump_it.webp":200,"./small_goggles.webp":831,"./small_goggles_green.webp":137,"./small_goggles_purple.webp":219,"./small_logo.webp":930,"./up.webp":573};function o(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=l,e.exports=o,o.id=274},734:(e,t,n)=>{"use strict";e.exports=n.p+"87ae8af268c8c206ccfc.webp"},443:(e,t,n)=>{"use strict";e.exports=n.p+"8fd3ce8e8c38f10f1aa6.webp"},200:(e,t,n)=>{"use strict";e.exports=n.p+"04996e2136a3a913b1f1.webp"},831:(e,t,n)=>{"use strict";e.exports=n.p+"7cf8b5e122e126defd4e.webp"},137:(e,t,n)=>{"use strict";e.exports=n.p+"fd541f284e24d79d81bb.webp"},219:(e,t,n)=>{"use strict";e.exports=n.p+"f104402b443e7ac35e1b.webp"},930:(e,t,n)=>{"use strict";e.exports=n.p+"23726cbb529a03596367.webp"},573:(e,t,n)=>{"use strict";e.exports=n.p+"4bad4ca16ccce15acbc0.webp"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r={},o=function(){function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.random();e(this,o),this.name=t,r[t]?this.img=r[t].cloneNode():(this.img=new Image,this.img.src=n(274)("./".concat(t,".webp")),r[t]=this.img)}var l,i;return l=o,i=[{key:"preload",value:function(){o.symbols.forEach((function(e){return new o(e)}))}},{key:"symbols",get:function(){return["small_goggles","small_goggles_purple","king_ape","small_logo","ape_rawr","pump_it","up"]}},{key:"random",value:function(){return this.symbols[Math.floor(Math.random()*this.symbols.length)]}}],null&&t(l.prototype,null),i&&t(l,i),Object.defineProperty(l,"prototype",{writable:!1}),o}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reelContainer=t,this.idx=n,this.symbolContainer=document.createElement("div"),this.symbolContainer.classList.add("icons"),this.reelContainer.appendChild(this.symbolContainer),this.animation=this.symbolContainer.animate([{transform:"none",filter:"blur(0)"},{filter:"blur(2px)",offset:.5},{transform:"translateY(-".concat(10*Math.floor(this.factor)/(3+10*Math.floor(this.factor))*100,"%)"),filter:"blur(0)"}],{duration:1e3*this.factor,easing:"ease-in-out"}),this.animation.cancel(),r.forEach((function(e){return l.symbolContainer.appendChild(new o(e).img)}))}var t,n;return t=e,(n=[{key:"factor",get:function(){return 1+Math.pow(this.idx/2,2)}},{key:"renderSymbols",value:function(e){for(var t=document.createDocumentFragment(),n=3;n<3+10*Math.floor(this.factor);n++){var r=new o(n>=10*Math.floor(this.factor)-2?e[n-10*Math.floor(this.factor)]:void 0);t.appendChild(r.img)}this.symbolContainer.appendChild(t)}},{key:"spin",value:function(){var e=this,t=new Promise((function(t){return e.animation.onfinish=t})),n=new Promise((function(t){return setTimeout(t,1e3*e.factor)}));return this.animation.play(),Promise.race([t,n]).then((function(){"finished"!==e.animation.playState&&e.animation.finish();for(var t=e.symbolContainer.children.length-3,n=0;n<t;n++)e.symbolContainer.firstChild.remove()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),o.preload(),this.currentSymbols=[["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"]],this.nextSymbols=[["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"],["small_goggles_purple","small_goggles_purple","small_goggles_purple"]],this.container=t,this.reels=Array.from(this.container.getElementsByClassName("reel")).map((function(e,t){return new i(e,t,n.currentSymbols[t])})),this.spinButton=document.getElementById("spin"),this.spinButton.addEventListener("click",(function(){return n.spin()})),this.autoPlayCheckbox=document.getElementById("autoplay"),this.jackpot=document.getElementById("jp").innerHTML,r.inverted&&this.container.classList.add("inverted"),this.config=r}var t,n;return t=e,(n=[{key:"spin",value:function(){var e=this;return this.currentSymbols=this.nextSymbols,this.nextSymbols=[[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()],[o.random(),o.random(),o.random()]],this.onSpinStart(this.nextSymbols),Promise.all(this.reels.map((function(t){return t.renderSymbols(e.nextSymbols[t.idx]),t.spin()}))).then((function(){return e.onSpinEnd(e.nextSymbols)}))}},{key:"onSpinStart",value:function(e){var t,n;this.spinButton.disabled=!0,null===(t=(n=this.config).onSpinStart)||void 0===t||t.call(n,e)}},{key:"onSpinEnd",value:function(e){var t,n,r=this;if(this.spinButton.disabled=!1,null===(t=(n=this.config).onSpinEnd)||void 0===t||t.call(n,e),this.autoPlayCheckbox.checked)return window.setTimeout((function(){return r.spin()}),200);this.jackpot=parseFloat(this.jackpot)+.1,document.getElementById("jp").innerHTML=this.jackpot}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u={inverted:!1,onSpinStart:function(e){console.log("onSpinStart",e)},onSpinEnd:function(e){console.log("onSpinEnd",e)}};new p(document.getElementById("slot"),u)})()})();