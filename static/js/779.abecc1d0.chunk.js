/*! For license information please see 779.abecc1d0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{197:function(t,e,r){r.d(e,{Jh:function(){return d},Zq:function(){return p},aT:function(){return l},e2:function(){return h},hG:function(){return f},z1:function(){return s}});var n=r(861),o=r(243);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(N){h=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var l={};function p(){}function v(){}function d(){}var y={};h(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(I([])));m&&m!==e&&r.call(m,a)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var h=u.arg,s=h.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(s).then((function(t){h.value=t,a(h)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=h(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,h(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),h(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),h(w,u,"Generator"),h(w,a,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var a="86374829588cb08ffa498bec6fb1661b",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmZkYjkxMjcyMjg3MGUyMzg4ZGQ0MzU3ODJjYTU2ZiIsInN1YiI6IjY0Y2NmNzU0NzY0Yjk5MDBlM2JhNWFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.In4jq0rW_1654XErrGjwD7GHNgYJB4wzMI8zmAAIdDg"}},u="https://api.themoviedb.org/3/";function h(){return(0,o.Z)("https://API.themoviedb.org/3/trending/movie/day?language=en-US",{params:{api_key:a}}).then((function(t){return t})).catch((function(t){return console.log(t)}))}function s(t){return(0,o.Z)("https://API.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),{params:{api_key:a}}).then((function(t){return t})).catch((function(t){return console.log(t)}))}function f(t){return(0,o.Z)("https://API.themoviedb.org/3/movie/".concat(t,"?language=en-US"),{params:{api_key:a}}).then((function(t){return t})).catch((function(t){return console.log(t)}))}function l(t){return(0,o.Z)("https://image.tmdb.org/t/p/w400/".concat(t)).then((function(t){return t})).catch((function(t){return console.log(t)}))}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"movie/").concat(e,"/credits?language=en-US"),c);case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return(0,o.Z)("https://API.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),{params:{api_key:a}})}},779:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n,o=r(439),i=r(791),a=r(197),c=r(689),u=r(168),h=r(867).ZP.div(n||(n=(0,u.Z)(["\n    margin-top: 20px;\n\n    .review {\n        border: 1px solid #ccc;\n        padding: 10px;\n        margin-bottom: 20px;\n\n        h3 {\n            font-size: 18px;\n            margin-bottom: 5px;\n        }\n\n        p {\n            font-size: 16px;\n        }\n    }\n\n    .no-reviews {\n        text-align: center;\n        margin-top: 20px;\n        font-size: 18px;\n        color: #999;\n    }\n"]))),s=r(184),f=function(){var t=(0,c.UO)().movieId,e=(0,i.useState)([]),r=(0,o.Z)(e,2),n=r[0],u=r[1];return(0,i.useEffect)((function(){(0,a.Jh)(t).then((function(t){return u(t.data.results)})).catch((function(t){return console.log(t)}))}),[t]),(0,s.jsx)(h,{children:0!==n.length?n.map((function(t){return(0,s.jsxs)("div",{className:"review",children:[(0,s.jsxs)("h3",{children:["Author: ",t.author]}),(0,s.jsx)("p",{children:t.content})]},t.id)})):(0,s.jsx)("div",{className:"no-reviews",children:"No reviews available"})})}}}]);
//# sourceMappingURL=779.abecc1d0.chunk.js.map