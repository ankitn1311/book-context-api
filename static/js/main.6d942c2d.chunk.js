(this["webpackJsonpcontext-app"]=this["webpackJsonpcontext-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),i=n(6),j=n.n(i),s=(n(13),n(7)),a=n(3),u=n(16),b=Object(o.createContext)(),d=function(e){var t=Object(o.useState)([{id:Object(u.a)(),title:"ankit",author:"negi"}]),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(c.jsx)(b.Provider,{value:{books:r,addBook:function(e,t){var n={id:Object(u.a)(),title:e,author:t};i([].concat(Object(s.a)(r),[n]))},deleteBook:function(e){i(r.filter((function(t){return e!==t.id})))}},children:e.children})};var l=function(e){var t=e.books,n=Object(o.useContext)(b).deleteBook;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsxs)("li",{onClick:function(){return n(e.id)},children:[Object(c.jsx)("div",{className:"title",children:e.title}),Object(c.jsx)("div",{className:"author",children:e.author})]},e.id)}))})};var O=function(){var e=Object(o.useContext)(b).books;return Object(c.jsx)("div",{id:"booklist",children:Object(c.jsx)("ul",{children:Object(c.jsx)(l,{books:e})})})},h=function(){var e=Object(o.useContext)(b).books;return e.length>0?Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{children:"My Book App"}),Object(c.jsxs)("h5",{children:[e.length," books to read"]})]}):Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{children:"My Book App"}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{style:{textAlign:"center"},children:"No books to read ... just enjoy :)"})})]})};var x=function(){var e=Object(o.useContext)(b).addBook,t=Object(o.useState)(""),n=Object(a.a)(t,2),r=n[0],i=n[1],j=Object(o.useState)(""),s=Object(a.a)(j,2),u=s[0],d=s[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,u),i(""),d("")},children:[Object(c.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},placeholder:"book name",value:r,required:!0}),Object(c.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},placeholder:"author",value:u,required:!0}),Object(c.jsx)("input",{type:"submit",value:"add book"})]})})},v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(d,{children:[Object(c.jsx)(h,{}),Object(c.jsx)(O,{}),Object(c.jsx)(x,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};j.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.6d942c2d.chunk.js.map