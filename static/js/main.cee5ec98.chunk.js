(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a.n(c),i=a(4),r=a(1);a(10);var l=a(2),s=a.n(l),o=a(0),j=function(e){var t=e.items,a=e.total,c=e.perPage,n=e.currentPage,i=e.onPageChange,r=Math.ceil(a/c),l=function(e){e!==n&&e>0&&e<=r&&i(e)};return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===n}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:function(){return l(n-1)},children:"\xab"})}),t.slice(0,r).map((function(e,t){return Object(o.jsx)("li",{className:s()("page-item",{active:t+1===n}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(t+1),onClick:function(){return l(t+1)},children:t+1})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:n===r}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===r,onClick:function(){return l(n+1)},children:"\xbb"})})]})},d=function(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(r.useState)(5),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],u=l[1],h=s*a-a+1,b=s*a<d.length?s*a:d.length,p=d.filter((function(e,t){return t>=h-1&&t<b}));return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(h," - ").concat(b," of ").concat(d.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){c(+e.target.value),u(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{items:d,total:d.length,perPage:a,currentPage:s,onPageChange:u}),Object(o.jsx)("ul",{children:p.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cee5ec98.chunk.js.map