(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{299:function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var s=t(36),n=t(37),r=t(40),i=t(38),o=t(41),m=t(0),l=t.n(m),c=t(30),u=t(19),d=function(e){return{isAuth:e.auth.isAuth}},_=function(e){var a=function(a){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,a),Object(n.a)(t,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(c.a,{to:"/login"})}}]),t}(l.a.Component);return Object(u.b)(d)(a)}},300:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3K3oQ",userList:"Dialogs_userList__1PPh4",massageList:"Dialogs_massageList__12s0N",newMessageAdd:"Dialogs_newMessageAdd__39Ph7",newMessageAddText:"Dialogs_newMessageAddText__tnNl2",newMessageAddButton:"Dialogs_newMessageAddButton__3sBla"}},301:function(e,a,t){e.exports={userElements:"UserItem_userElements__2DJVw",activeLink:"UserItem_activeLink__2JMsK",user__item:"UserItem_user__item__1ixQN"}},302:function(e,a,t){e.exports={massage__item:"UserMessageItem_massage__item__Uyr0j"}},303:function(e,a,t){e.exports={textareaWrap:"NewMessageForm_textareaWrap__1Yx6U",textarea:"NewMessageForm_textarea__31aU2",btnTextarea:"NewMessageForm_btnTextarea__1no06"}},312:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(128),i=t(300),o=t.n(i),m=t(301),l=t.n(m),c=t(12),u=function(e){var a="/dialogs/"+e.urlD;return n.a.createElement("div",{className:l.a.userElements},n.a.createElement(c.b,{to:a,activeClassName:l.a.activeLink,className:l.a.user__item},n.a.createElement("div",{className:l.a.user__ava},e.userAva),n.a.createElement("div",{className:l.a.user__name},e.userName)))},d=t(302),_=t.n(d),g=function(e){return n.a.createElement("div",{className:_.a.massage__item},n.a.createElement("div",{className:_.a.text},e.messageText))},p=t(129),v=t(130),b=t(64),f=t(75),E=t(303),N=t.n(E),x=Object(f.a)(50),M=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:N.a.textareaWrap}," ",n.a.createElement(p.a,{className:N.a.textarea,component:b.b,name:"newMessageBody",validate:[f.b,x],placeholder:"Post message"})),n.a.createElement("button",{className:N.a.btnTextarea,type:"submit"},"Send message!"))})),D=function(e){var a=e.oldDialogsData.map((function(e){return n.a.createElement(u,{urlD:e.urlD,userAva:e.userAva,userName:e.userName,key:e.id})})),t=e.oldMessageData.map((function(e){return n.a.createElement(g,{messageText:e.messageText,id:e.id,key:e.id})}));return n.a.createElement("div",null,n.a.createElement("div",{className:o.a.dialogs},n.a.createElement("div",{className:o.a.userList},a),n.a.createElement("div",{className:o.a.massageList},t)),n.a.createElement("div",{className:o.a.newMessageAdd},n.a.createElement(M,{onSubmit:function(a){e.addMessageActionCreator(a.newMessageBody)}})))},h=t(19),A=t(299),w=t(7);a.default=Object(w.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage,oldDialogsData:e.dialogsPage.oldDialogsData,oldMessageData:e.dialogsPage.oldMessageData}}),{addMessageActionCreator:r.a}),A.a)(D)}}]);
//# sourceMappingURL=4.ed91af68.chunk.js.map