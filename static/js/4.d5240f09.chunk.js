(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{105:function(t,e,r){"use strict";var n,o,a,u=r(108),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){a=!1}function s(t){if(t){if(t!==n){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,r){return e!==r.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+e.join(", "));n=t,c()}}else n!==i&&(n=i,c())}function l(){return a||(a=function(){n||s(i);for(var t,e=n.split(""),r=[],o=u.nextValue();e.length>0;)o=u.nextValue(),t=Math.floor(o*e.length),r.push(e.splice(t,1)[0]);return r.join("")}())}t.exports={get:function(){return n||i},characters:function(t){return s(t),n},seed:function(t){u.seed(t),o!==t&&(c(),o=t)},lookup:function(t){return l()[t]},shuffled:l}},106:function(t,e,r){"use strict";t.exports=r(107)},107:function(t,e,r){"use strict";var n=r(105),o=r(109),a=r(113),u=r(114)||0;function i(){return o(u)}t.exports=i,t.exports.generate=i,t.exports.seed=function(e){return n.seed(e),t.exports},t.exports.worker=function(e){return u=e,t.exports},t.exports.characters=function(t){return void 0!==t&&n.characters(t),n.shuffled()},t.exports.isValid=a},108:function(t,e,r){"use strict";var n=1;t.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(t){n=t}}},109:function(t,e,r){"use strict";var n,o,a=r(110);r(105);t.exports=function(t){var e="",r=Math.floor(.001*(Date.now()-1567752802062));return r===o?n++:(n=0,o=r),e+=a(7),e+=a(t),n>0&&(e+=a(n)),e+=a(r)}},110:function(t,e,r){"use strict";var n=r(105),o=r(111),a=r(112);t.exports=function(t){for(var e,r=0,u="";!e;)u+=a(o,n.get(),1),e=t<Math.pow(16,r+1),r++;return u}},111:function(t,e,r){"use strict";var n,o="object"===typeof window&&(window.crypto||window.msCrypto);n=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],r=0;r<t;r++)e.push(Math.floor(256*Math.random()));return e},t.exports=n},112:function(t,e){t.exports=function(t,e,r){for(var n=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*n*r/e.length),a="";;)for(var u=t(o),i=o;i--;)if((a+=e[u[i]&n]||"").length===+r)return a}},113:function(t,e,r){"use strict";var n=r(105);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},114:function(t,e,r){"use strict";t.exports=0},115:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},118:function(t,e,r){t.exports={Label:"LoginForm_Label__11CCE",Form:"LoginForm_Form__3FfkX",Input:"LoginForm_Input__cVezs",NameBtn:"LoginForm_NameBtn__3s8kk"}},125:function(t,e,r){"use strict";r.r(e);var n=r(33),o=r(115),a=r(0),u={name:"email",type:"email",placeholder:"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 email",required:!0},i={name:"password",type:"password",placeholder:"\u0412\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0},c=r(106),s=r(18),l=r(34),f=r(118),h=r.n(f),p=r(1),b=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),r=e[0],f=e[1],b=Object(a.useState)(""),d=Object(o.a)(b,2),m=d[0],g=d[1],j=Object(s.b)(),v=Object(a.useRef)(Object(c.generate)()),x=Object(a.useRef)(Object(c.generate)()),w=function(){f(""),g("")};return Object(p.jsx)("form",{className:h.a.Form,onSubmit:function(t){t.preventDefault(),j(l.a.login({email:r,password:m})),w()},children:Object(p.jsxs)("div",{className:h.a.FormContainer,children:[Object(p.jsx)("div",{className:h.a.Email,children:Object(p.jsxs)("label",{className:h.a.Label,htmlFor:v.current,children:["Email",Object(p.jsx)("input",Object(n.a)(Object(n.a)({},u),{},{className:h.a.Input,required:!0,value:r,onChange:function(t){var e=t.target.value;f(e)},id:v.current}))]})}),Object(p.jsx)("div",{className:h.a.Password,children:Object(p.jsxs)("label",{className:h.a.Label,htmlFor:x.current,children:["Password",Object(p.jsx)("input",Object(n.a)(Object(n.a)({},i),{},{className:h.a.Input,required:!0,value:m,onChange:function(t){var e=t.target.value;g(e)},id:x.current}))]})}),Object(p.jsx)("button",{type:"submit",className:h.a.NameBtn,children:"Log in"})]})})};e.default=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b,{})})}}}]);
//# sourceMappingURL=4.d5240f09.chunk.js.map