(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{123:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),s=n(9),o=n(26),i=n(5),u="[ui] Open modal",l="[ui] Close modal",j="[calendar] Set active event",d="[calendar] Add new event",b="[calendar] Clear Active event",m="[calendar] Event updated",p="[calendar] Event deleted",f="[calendar] Events loaded",O="[auth] Cleaning events data",v="[auth] Finish checking login state",h="[auth] Login",x="[auth] Logout",g={checking:!0,uid:null,name:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case x:return{checking:!1};case v:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});default:return e}},k=n(51),w=n(11),N=n.n(w),E=n(18),S=n(13),C=n.n(S),_="https://calendar-express.herokuapp.com",D=function(){var e=Object(E.a)(N.a.mark((function e(t,n){var a,r,c=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c.length>2&&void 0!==c[2]?c[2]:"GET",r="".concat(_,"/").concat(t),"GET"!==a){e.next=8;break}return e.next=5,fetch(r);case 5:return e.abrupt("return",e.sent);case 8:return e.next=10,fetch(r,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(E.a)(N.a.mark((function e(t,n){var a,r,c,s=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>2&&void 0!==s[2]?s[2]:"GET",r="".concat(_,"/").concat(t),c=localStorage.getItem("token")||"","GET"!==a){e.next=9;break}return e.next=6,fetch(r,{method:a,headers:{"x-token":c}});case 6:return e.abrupt("return",e.sent);case 9:return e.next=11,fetch(r,{method:a,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(n)});case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=n(19),A=n.n(I),L=function(e){return{type:d,payload:e}},R=function(e){return{type:b}},F=function(e){return{type:m,payload:e}},G=function(e){return{type:f,payload:e}},P={events:[],activeEvent:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{events:Object(k.a)(t.payload)});case j:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case d:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(k.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case m:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(e){return e.id!==t.payload.id}))});case O:return Object(i.a)({},P);default:return e}},M={modalOpen:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},J=Object(o.b)({ui:H,auth:y,calendar:V}),U=n(63),B="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,X=Object(o.d)(J,B(Object(o.a)(U.a))),q=n(33),z=n(10),K=n(17),Q=n(25),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(K.a)(t,2),r=n[0],c=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},o=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(Q.a)({},t.name,t.value)))};return[r,o,s]},Y=function(e){return{type:h,payload:e}},Z=function(){return function(e){localStorage.clear(),e({type:x}),e({type:O})}},$=function(){return{type:v}},ee=(n(88),n(2)),te=function(){var e=Object(s.b)(),t=W({login_email:"drullian@gmail.com",login_password:"casacasa"}),n=Object(K.a)(t,3),a=n[0],r=n[1],c=(n[2],W({register_name:"Druidsnake",register_mail:"drullian@gmail.com",register_password:"casacasa",register_password2:"casacasa"})),o=Object(K.a)(c,3),i=o[0],u=o[1],l=(o[2],a.login_email),j=a.login_password,d=i.register_name,b=i.register_mail,m=i.register_password,p=i.register_password2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=l,a=j,function(){var e=Object(E.a)(N.a.mark((function e(t){var r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Y({uid:c.uid,name:c.name}))):C.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{name:"login_email",type:"text",value:l,className:"form-control",placeholder:"Correo",onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{name:"login_password",type:"password",value:j,className:"form-control",placeholder:"Contrase\xf1a",onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==p)return C.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=d,a=b,r=m,function(){var e=Object(E.a)(N.a.mark((function e(t){var c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:if(!(s=e.sent).ok){e.next=12;break}localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Y({uid:s.uid,name:s.name})),e.next=13;break;case 12:return e.abrupt("return",C.a.fire("Error",s.msg,"error"));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{name:"register_name",type:"text",value:d,className:"form-control",placeholder:"Nombre",onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{name:"register_mail",type:"email",value:b,className:"form-control",placeholder:"Correo",onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{name:"register_password",type:"password",value:m,className:"form-control",placeholder:"Contrase\xf1a",onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{name:"register_password2",type:"password",value:p,className:"form-control",placeholder:"Repita la contrase\xf1a",onChange:u})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(50),ae=(n(90),n(91),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Z())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt mr-2"}),Object(ee.jsx)("span",{children:"Salir"})]})]})}),re={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsxs)("span",{children:[" - ",a.name]})]})},se=n(46),oe=n.n(se),ie=n(47),ue=n.n(ie),le=function(){return{type:u}},je=A()().minutes(0).seconds(0),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:je.add(1,"hour").toDate()},me=function(){var e=Object(s.b)(),t=Object(a.useState)(je.toDate()),n=Object(K.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(de.toDate()),u=Object(K.a)(o,2),j=u[0],d=u[1],b=Object(a.useState)(!0),m=Object(K.a)(b,2),p=m[0],f=m[1],O=Object(s.c)((function(e){return e.ui})).modalOpen,v=Object(a.useState)(be),h=Object(K.a)(v,2),x=h[0],g=h[1],y=x.notes,k=x.title,w=x.start,S=x.end,_=Object(s.c)((function(e){return e.calendar})).activeEvent,D=Object(s.c)((function(e){return e.auth}));D.uid,D.name;Object(a.useEffect)((function(){g(_?Object(i.a)({},_):be)}),[_]);oe.a.setAppElement("#root");var I=function(t){e({type:l}),e(R()),g(be)},G=function(e){var t=e.target;g(Object(i.a)(Object(i.a)({},x),{},Object(Q.a)({},t.name,t.value)))};return Object(ee.jsx)("div",{children:Object(ee.jsxs)(oe.a,{isOpen:O,onAfterOpen:function(){},onRequestClose:I,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",contentLabel:"Example Modal",children:[Object(ee.jsx)("h1",{children:" Nuevo evento "}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{noValidate:!0,onSubmit:function(t){t.preventDefault(),console.log(w),console.log(S);var n=A()(w),a=A()(S);return n.isSameOrAfter(a)?C.a.fire("Error","La fecha fin debe ser mayor a la fecha inicio","error"):k.trim().length<2?f(!1):(f(!0),e(_?function(e){return function(){var t=Object(E.a)(N.a.mark((function t(n,a){var r,c,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().calendar.activeEvent,t.prev=1,t.next=4,T("events/".concat(r.id),Object(i.a)(Object(i.a)({},r),e),"PUT");case 4:return c=t.sent,t.next=7,c.json();case 7:(s=t.sent).ok?n(F(e)):C.a.fire("Error",s.msg,"error"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(x):function(e){return function(){var t=Object(E.a)(N.a.mark((function t(n,a){var r,c,s,o,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,s=r.name,t.prev=1,t.next=4,T("events",e,"POST");case 4:return o=t.sent,t.next=7,o.json();case 7:(i=t.sent).ok?(e.id=i.eventId,e.user={_id:c,name:s},n(L(e)),C.a.fire("Success","Evento creado exitosamente","success")):C.a.fire("Error",i.msg,"error"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),C.a.fire("Error",t.t0.response.msg,"error");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(x)),void I())},className:"container",children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ue.a,{onChange:function(e){c(e),g(Object(i.a)(Object(i.a)({},x),{},{start:e}))},value:r})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ue.a,{onChange:function(e){d(e),g(Object(i.a)(Object(i.a)({},x),{},{end:e}))},value:j,minDate:r})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:k,autoComplete:"off",onChange:G}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:y,onChange:G}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})})},pe=function(){var e=Object(s.b)();return Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(R()),e(le())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})})},fe=function(){var e=Object(s.b)();return Object(ee.jsx)("div",{children:Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(E.a)(N.a.mark((function e(t,n){var a,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent,e.prev=1,e.next=4,T("events/".concat(a.id),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,console.log(c),c.ok?(t({type:p,payload:a}),t(R()),C.a.fire("Success",c.msg,"success")):C.a.fire("Error",c.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash mr-2"}),Object(ee.jsx)("span",{children:"Borrar evento"})]})})};A.a.locale("es");var Oe=Object(ne.b)(A.a),ve=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(E.a)(N.a.mark((function e(t){var n,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("events");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?((r=a.events).map((function(e){e.start=A()(e.start).toDate(),e.end=A()(e.end).toDate()})),t(G(r))):C.a.fire("Error",a.msg,"error"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),C.a.fire("Error",e.t0.response.msg,"error");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.auth})).uid,n=Object(s.c)((function(e){return e.calendar})),r=n.events,c=n.activeEvent,o=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(K.a)(o,2),u=i[0],l=i[1];return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:Oe,events:r,startAccessor:"start",endAccessor:"end",messages:re,onSelectSlot:function(){e(R())},selectable:!0,eventPropGetter:function(e,n,a,r){return{style:{backgroundColor:t==e.user._id?"blue":"#4EC5F1",borderRadius:"0px",opacity:.8,display:"block"}}},onDoubleClickEvent:function(t){e(le())},onSelectEvent:function(t){e(function(e){return{type:j,payload:e}}(t))},onView:function(e){localStorage.setItem("lastView",e),l(e)},view:u,components:{event:ce}}),Object(ee.jsx)(pe,{}),c&&Object(ee.jsx)(fe,{}),Object(ee.jsx)(me,{})]})},he=n(36),xe=["isAuthenticated","component"],ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,xe);return Object(ee.jsx)(z.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(i.a)({},e)):Object(ee.jsx)(z.a,{to:"/login"})}}))},ye=["isAuthenticated","component"],ke=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,ye);return Object(ee.jsx)(z.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(z.a,{to:"/"}):Object(ee.jsx)(n,Object(i.a)({},e))}}))},we=function(){var e=Object(s.b)();Object(a.useEffect)((function(){e(function(){var e=Object(E.a)(N.a.mark((function e(t){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Y({uid:a.uid,name:a.name}))):t($());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return n?Object(ee.jsx)("h1",{children:"Espere..."}):Object(ee.jsx)(q.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(z.d,{children:[Object(ee.jsx)(ke,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(ee.jsx)(ge,{exact:!0,path:"/",component:ve,isAuthenticated:!!r}),Object(ee.jsx)(z.a,{to:"/"})]})})})},Ne=function(){return Object(ee.jsx)(s.a,{store:X,children:Object(ee.jsx)(we,{})})};n(123);c.a.render(Object(ee.jsx)(Ne,{}),document.getElementById("root"))},88:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.b1d54780.chunk.js.map