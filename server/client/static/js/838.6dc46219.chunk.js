"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[838],{2e3:function(e,t,n){n(2791);var c=n(184),r=function(e){var t=e.url,n=e.size;return(0,c.jsx)("div",{className:(n?"w-[".concat(n,"px] h-[").concat(n,"px]"):"w-10 h-10")+" rounded-full overflow-hidden",children:(0,c.jsx)("img",{className:"w-full h-full",src:t,alt:"avatar"})})};r.defaultProps={url:"https://i.pravatar.cc/100"},t.Z=r},6654:function(e,t,n){n(2791);var c=n(7009),r=n(184);t.Z=function(){return(0,r.jsx)("button",{className:"cursor-pointer hover:text-my-green-200 flex items-center justify-center hover:text-my-green-200",children:(0,r.jsx)(c.Z,{name:"heart"})})}},5461:function(e,t,n){n.d(t,{Z:function(){return x}});var c=n(4942),r=n(1413),s=n(885),l=n(2791),a=n(1176),i=n(6457),o=n(7009),u=n(184),d=function(e){var t=e.children,n=e.handleClose,c=(0,l.useRef)(null);return(0,u.jsx)("div",{onClick:function(e){e.target===c.current&&n(!1)},ref:c,className:"fixed top-0 left-0 bottom-0 right-0 w-screen h-screen z-[9999] bg-black/70 flex justify-center items-center",children:(0,u.jsxs)("div",{className:"relative bg-white p-5 rounded-lg w-full max-w-screen-lg h-[700px]",children:[(0,u.jsx)("button",{onClick:function(){return n(!1)},className:"absolute top-5 right-5 z-10",children:(0,u.jsx)(o.Z,{name:"close",className:"w-7 h-7"})}),t]})})},x=function(e){var t=e.postId,n=e.title,o=e.content,x=e.closeEditor,f=e.updatePost,h=(0,l.useState)({title:n,content:o}),m=(0,s.Z)(h,2),j=m[0],p=m[1],g=function(e){p((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,c.Z)({},e.target.name,e.target.value))}))};return(0,u.jsx)(d,{handleClose:x,children:(0,u.jsx)("div",{className:"flex flex-col h-full",children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.Z.edit((0,r.Z)((0,r.Z)({},j),{},{postId:t})).then((function(e){e.content.content===j.content&&f({title:e.content.title,content:e.content.content})})).catch((function(e){return console.error(e)}))},className:"flex flex-col gap-3 justify-between h-full",children:[(0,u.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,u.jsxs)("label",{className:"flex flex-col gap-2",children:[(0,u.jsx)("span",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430"}),(0,u.jsx)("input",{value:j.title,onChange:g,name:"title",type:"text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430",className:"p-2 rounded shadow-inner border-black/20 border-[1px]"})]}),(0,u.jsxs)("label",{className:"flex flex-col gap-2",children:[(0,u.jsx)("span",{children:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"}),(0,u.jsx)("textarea",{value:j.content,onChange:g,name:"content",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430",className:"p-2 rounded shadow-inner border-black/20 border-[1px]",rows:8,children:j.content})]})]}),(0,u.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.Z,{className:"ml-auto "+(j.title===n&&j.content===o?"!bg-gray-400 !hover:bg-gray-400 !cursor-default":""),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.Z,{onClick:x,className:"ml-auto",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})})]})]})})})}},9712:function(e,t,n){n.d(t,{Z:function(){return v}});var c=n(1413),r=n(2982),s=n(885),l=n(2791),a=n(2e3),i=n(1523),o=n(4461),u=n(7009),d=n(6654),x=n(5392),f=n(838),h=n(5461),m=n(184),j=function(e){var t=e._id,n=e.created_at,r=e.title,j=e.content,p=e.image,g=e.likes,v=e.comments,Z=e.onDelete,N=(0,l.useState)(!1),b=(0,s.Z)(N,2),w=b[0],y=b[1],k=(0,l.useState)({id:t,createdAt:n,title:r,content:j,image:p,likes:g,comments:v}),S=(0,s.Z)(k,2),C=S[0],_=S[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"p-6 bg-white rounded-xl flex flex-col gap-4 text-base",children:[(0,m.jsxs)("div",{className:"flex justify-between w-full",children:[(0,m.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,m.jsxs)(i.rU,{to:"",className:"flex gap-3 items-center",children:[(0,m.jsx)(a.Z,{}),(0,m.jsx)("span",{children:"Nickname"})]}),(0,m.jsx)(i.rU,{to:"".concat("","/post/").concat(C.id),className:"text-sm text-gray-500",children:(0,f.Z)(n)})]}),Z?(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)(x.Z,{postId:C.id,list:[{text:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",action:function(){y(!0)}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",action:function(){return e=C.id,void Z(e);var e}}]})}):(0,m.jsx)(o.Z,{})]}),!!C.title&&(0,m.jsx)("h2",{className:"font-bold text-xl",children:C.title}),!!C.content&&(0,m.jsx)("div",{className:"text-truncate",children:C.content}),(0,m.jsx)(i.rU,{to:"".concat("","/post/").concat(C.id),className:"text-gray-500 cursor-pointer font-medium hover:text-my-green-200",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."}),!!p&&(0,m.jsx)("div",{className:"rounded-xl overflow-hidden",children:(0,m.jsx)("img",{className:"m-0 w-full",src:"".concat("","/images/").concat(p),alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),(0,m.jsxs)("div",{className:"flex gap-3",children:[(0,m.jsxs)("div",{className:"flex gap-2",children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)("span",{children:g||"0"})]}),(0,m.jsxs)("div",{className:"flex gap-2",children:[(0,m.jsx)("div",{className:"cursor-pointer hover:text-my-green-200 flex items-center justify-center",children:(0,m.jsx)(u.Z,{name:"comment"})}),(0,m.jsx)("span",{children:v||"0"})]})]})]}),w&&(0,m.jsx)(h.Z,{postId:C.id,title:r,content:j,closeEditor:function(){return y(!1)},updatePost:function(e){y(!1),_((function(t){return(0,c.Z)((0,c.Z)({},t),e)}))}})]})},p=n(1176),g=function(e){var t=e.data,n=e.my,a=(0,l.useState)(t),i=(0,s.Z)(a,2),o=i[0],u=i[1],d=function(e){p.Z.delete(e).then((function(t){t.content&&u((function(t){return(0,r.Z)(t).filter((function(t){return t._id===e}))}))})).catch((function(e){return console.log(e)}))};return(0,m.jsx)("ul",{className:"flex flex-col gap-7",children:o.map((function(e){return n?(0,m.jsx)(j,(0,c.Z)((0,c.Z)({},e),{},{onDelete:d}),e._id):(0,m.jsx)(j,(0,c.Z)({},e),e._id)}))})};g.defaultProps={my:!1};var v=g},4461:function(e,t,n){n(2791);var c=n(184);t.Z=function(){return(0,c.jsx)("button",{className:"py-1 px-5 bg-my-green-200 text-white rounded-lg hover:bg-my-green-300 duration-200",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})}},2838:function(e,t,n){n.r(t);var c=n(885),r=n(2791),s=n(9712),l=n(8071),a=n(1176),i=n(184);t.default=function(){var e=(0,r.useState)(null),t=(0,c.Z)(e,2),n=t[0],o=t[1];return(0,r.useEffect)((function(){a.Z.get().then((function(e){return o(e)})).catch((function(e){return console.error(e)}))}),[]),n?(0,i.jsx)("div",{className:"w-[695px] my-12",children:(0,i.jsx)(s.Z,{data:n})}):(0,i.jsx)(l.Z,{})}},5392:function(e,t,n){var c=n(885),r=n(2791),s=n(7009),l=n(1523),a=n(184),i=function(e){var t=e.list,n=(0,r.useState)(!1),i=(0,c.Z)(n,2),o=i[0],u=i[1];return(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("button",{onClick:function(){u((function(e){return!e}))},className:"inline",children:(0,a.jsx)(s.Z,{name:"menu"})}),o&&(0,a.jsx)("ul",{className:"absolute top-6 right-0 p-4 bg-white shadow-lg rounded-lg",children:t.map((function(e,t){return"string"===typeof e.action?(0,a.jsx)("li",{children:(0,a.jsx)(l.rU,{to:e.action,children:e.text})},"action_".concat(t)):(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:function(){return t=e.action,u(!1),void t();var t},children:e.text})},"action_".concat(t))}))})]})};i.defaultProps={list:[]},t.Z=i},838:function(e,t){t.Z=function(e){var t=new Date(e),n=t.getDate().toString().padStart(2,"0"),c=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getFullYear().toString();return"".concat(n,".").concat(c,".").concat(r)}}}]);
//# sourceMappingURL=838.6dc46219.chunk.js.map