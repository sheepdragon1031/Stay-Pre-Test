(this.webpackJsonpcustomhook=this.webpackJsonpcustomhook||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(6),r=n.n(o),u=(n(11),n(4)),i=n(2),s=n(3),b=(n(12),n(0));var l=function(){var e=function(e){var t=e.initialValues,n=e.validation,a=e.onSubmit,o=Object(c.useState)(t),r=Object(s.a)(o,2),b=r[0],l=r[1],j=Object(c.useState)({}),d=Object(s.a)(j,2),h=d[0],O=d[1],m=Object(c.useState)(!1),p=Object(s.a)(m,2),f=p[0],g=p[1];return Object(c.useEffect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;0===Object.keys(h).length&&f&&e(b)}),[h,f,b,a]),{handleChange:function(e){g(!1),"text"===e.target.type?l((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(u.a)({},e.target.name,e.target.value))})):"checkbox"===e.target.type&&l((function(t){return Object(i.a)(Object(i.a)({},t),{},{rememberMe:e.target.checked})}))},handleSubmit:function(e){O(n(b)),g(!0)},values:b,errors:h}}({initialValues:{account:"",password:"",rememberMe:!1},validation:function(e){var t={};return e.account?e.password||(t.password="\u8acb\u8f38\u5165\u5bc6\u78bc"):t.account="\u8acb\u8f38\u5165\u5e33\u865f",t},onSubmit:function(e){return console.table(e)}}),t=e.handleChange,n=e.handleSubmit,a=e.values,o=e.errors,r=Object(c.useState)(""),l=Object(s.a)(r,2),j=l[0],d=l[1],h=function(e,t){var n=null;return function(){var c=arguments,a=this,o=function(){return e.apply(a,c)};clearTimeout(n),n=setTimeout(o,t)}}((function(e){e.preventDefault(),console.log("".concat(e.target.id," Debounce 1000ms")),d("".concat(e.target.id," Debounce 1000ms"))}),1e3);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{name:"account",onChange:t,value:a.account,placeholder:"Account"}),o.account&&Object(b.jsx)("div",{children:o.account}),Object(b.jsx)("input",{name:"password",onChange:t,value:a.password,placeholder:"password"}),o.password&&Object(b.jsx)("div",{children:o.password}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",name:"rememberMe",onChange:t,checked:a.rememberMe}),"Remember Me"]}),Object(b.jsx)("button",{onClick:n,children:"Login"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Debounce 1000ms"}),Object(b.jsx)("button",{id:"btn",onClick:function(e){return h(e)},children:"Debounce"}),Object(b.jsx)("div",{children:j})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.45344de4.chunk.js.map