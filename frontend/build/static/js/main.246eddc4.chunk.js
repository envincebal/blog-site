(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(t,e,n){},61:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(34),o=n.n(s),r=(n(41),n(8)),i=n(12),l=n(6),b=n(17),j=n.n(b),d=(n(61),n(16)),u=n(0),p=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(u.jsxs)("div",{className:"nav-container container",children:[Object(u.jsx)("div",{className:"navbar-header",children:Object(u.jsx)("p",{className:"navbar-brand",children:"DAILY JOURNAL"})}),Object(u.jsx)("div",{className:"new-entry-container",children:Object(u.jsx)(i.b,{to:"/compose",children:Object(u.jsx)(d.a,{type:"button",variant:"secondary",children:"+ New Entry"})})})]})})})},h=n(9),O=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(""),o=Object(r.a)(s,2),l=o[0],b=o[1],p=new Date;return Object(u.jsxs)("div",{className:"compose-body post-body",children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)(d.a,{type:"button",className:"back-button",variant:"primary",children:"Back"})}),Object(u.jsx)("h1",{children:"Compose"}),Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(h.a.Group,{className:"form-group",children:[Object(u.jsx)(h.a.Label,{children:"Title"}),Object(u.jsx)(h.a.Control,{type:"text",className:"form-control",autoComplete:"off",value:n,onChange:function(t){return a(t.target.value)}}),Object(u.jsx)(h.a.Label,{children:"Post"}),Object(u.jsx)(h.a.Control,{as:"textarea",name:"postContent",className:"form-control",autoComplete:"off",rows:"8",value:l,onChange:function(t){return b(t.target.value)}})]}),Object(u.jsx)(d.a,{onClick:function(t){t.preventDefault();j.a.post("https://protected-garden-31419.herokuapp.com/compose",{title:n,content:l,date:p}).then((function(t){console.log(t.data),window.open("/","_self")}))},name:"button",className:"btn btn-primary",disabled:!n||!l,children:"Publish"})]})]})},m=function(){var t=Object(c.useState)(Object(l.e)().state.title),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(Object(l.e)().state.content),o=Object(r.a)(s,2),b=o[0],p=o[1],O=Object(l.e)().state.id;return Object(u.jsxs)("div",{className:"compose-body post-body",children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)(d.a,{type:"button",className:"back-button",variant:"primary",children:"Back"})}),Object(u.jsx)("h1",{children:"Edit Post"}),Object(u.jsxs)(h.a,{children:[Object(u.jsxs)(h.a.Group,{className:"form-group",children:[Object(u.jsx)(h.a.Label,{children:"Title"}),Object(u.jsx)(h.a.Control,{type:"text",className:"form-control",autoComplete:"off",value:n,onChange:function(t){return a(t.target.value)}}),Object(u.jsx)(h.a.Label,{children:"Post"}),Object(u.jsx)(h.a.Control,{as:"textarea",className:"form-control",autoComplete:"off",rows:"8",value:b,onChange:function(t){return p(t.target.value)}})]}),Object(u.jsx)(d.a,{onClick:function(t){t.preventDefault();var e="https://protected-garden-31419.herokuapp.com/edit/"+O;j.a.put(e,{title:n,content:b}).then((function(t){console.log(t.data),window.open("/","_self")}))},name:"button",className:"btn btn-primary",disabled:!n||!b,children:"Edit"})]})]})},x=(n(68),function(t){return Object(u.jsxs)("div",{className:"blog-entry",children:["Posted on"," ",Object(u.jsx)("span",{className:"post-date",children:new Date(t.date).toLocaleString("en-US")}),Object(u.jsx)("h3",{children:t.title.length>37?t.title.substring(0,37)+"...":t.title}),Object(u.jsxs)("div",{className:"entry-footer",children:[Object(u.jsx)(i.b,{to:{pathname:"/posts/"+t.id,state:{id:t.id}},children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"VIEW"})}),Object(u.jsx)(i.b,{to:{pathname:"/edit/"+t.id,state:{id:t.id,title:t.title,content:t.content}},children:Object(u.jsx)("button",{type:"button",name:"edit",className:"btn btn-outline-secondary",children:"EDIT"})}),Object(u.jsx)("button",{name:"delete",className:"btn btn-outline-danger",onClick:t.deletePost,children:"DELETE"})]})]})}),f=(n(69),function(){var t=Object(l.e)().state.id,e=Object(c.useState)(""),n=Object(r.a)(e,2),a=n[0],s=n[1],o=Object(c.useState)(""),b=Object(r.a)(o,2),p=b[0],h=b[1];return Object(c.useEffect)((function(){j.a.get("https://protected-garden-31419.herokuapp.com/posts/"+t).then((function(t){s(t.data.title),h(t.data.content)}))})),Object(u.jsxs)("div",{className:"post-body",children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)(d.a,{type:"button",className:"back-button",variant:"primary",children:"Back"})}),Object(u.jsx)("h2",{className:"post-title",children:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{className:"post-content",children:p})]})}),v=(n(70),function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(1),o=Object(r.a)(s,2),b=o[0],d=o[1];Object(c.useEffect)((function(){j()("https://protected-garden-31419.herokuapp.com").then((function(t){a(t.data.posts)}))}),[]);var h=function(){return d((function(t){return t-1}))},v=function(){return d((function(t){return t+1}))};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(l.a,{exact:!0,path:"/",render:function(){var t=Math.ceil(n.length/3),e=3*b,c=e-3,s=n.slice(c,e).map((function(t){return Object(u.jsx)(x,{id:t._id,title:t.title,content:t.content,date:t.date,deletePost:function(e){return function(t,e){t.preventDefault(),j.a.delete("https://protected-garden-31419.herokuapp.com/delete/"+e).then((function(t){console.log(t)})),a(n.filter((function(t){return t._id!==e})))}(e,t._id)}},t._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"entries-container",children:s}),Object(u.jsx)("div",{className:"page-buttons",children:n.length>3&&Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-info newer-posts-button newer-posts",onClick:h,disabled:1===b,children:"Newer"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-info older-posts-button older-posts",onClick:v,disabled:b===t,children:"Previous"})]})})]})}}),Object(u.jsx)(l.a,{exact:!0,path:"/compose",component:O}),Object(u.jsx)(l.a,{exact:!0,path:"/posts/:id",component:f}),Object(u.jsx)(l.a,{exact:!0,path:"/edit/:id",component:m})]})]})})});o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.246eddc4.chunk.js.map