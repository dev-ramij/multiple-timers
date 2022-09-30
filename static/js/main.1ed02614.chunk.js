(this["webpackJsonpmultiple-timers"]=this["webpackJsonpmultiple-timers"]||[]).push([[0],{152:function(e,t,n){"use strict";n.r(t);var i=n(37),r=n.n(i),c=n(89),a=n.n(c),o=n(14),s=n(99),u=n(9),l=n(102),d=n(0),j=n(103),f=n(211),m=n(210),b=n(201),p=n(209),O=n(218),h=n(105),x=n.n(h),g=n.p+"static/media/Leapfrog.00b4adbd.ogg",v=n(56),w=n.n(v);function S(e){return e.substring(0,e.lastIndexOf(" "))}function y(e,t){if(!e||null===e)return k();var n=new Date,i=e.getHours()*Math.pow(60,2)+60*e.getMinutes()+e.getSeconds();return t?i:i?(n.setSeconds(n.getSeconds()+i),n):null}function k(){var e=new Date;return e.setHours(0,0,0,0),e}var I=n(1);function T(e){var t=e.id,n=e.removeTimer;return Object(I.jsxs)("div",{className:"title-bar",children:[Object(I.jsx)("h2",{children:S(t)}),Object(I.jsx)(O.a,{"aria-label":"delete",color:"default",onClick:function(){localStorage.removeItem("input ".concat(t)),n()},children:Object(I.jsx)(x.a,{})})]})}var E=n(106),C=n.n(E),L=n(107),N=n.n(L),R=n(108),_=n.n(R);function F(e){var t=e.pause,n=e.resume,i=e.restart,r=e.isRunning,c=e.clockValues,a=e.input,o=e.id;return Object(I.jsxs)("div",{className:"buttons",children:[Object(I.jsx)(O.a,{onClick:function(){if(r())t();else if(c().every((function(e){return Boolean(e)})))n();else{var e=y(a());if(!e)return;i(e)}},id:"button_"+o,children:r()?Object(I.jsx)(N.a,{}):Object(I.jsx)(C.a,{})}),Object(I.jsx)(O.a,{onClick:function(){var e=y(a());i(e),t()},children:Object(I.jsx)(_.a,{})})]})}n(97);function H(e){var t=e.expiryTimestamp,n=e.updateTimeoutSeconds,i=e.removeTimer,r=e.id,c=e.isHidden,a=Object(j.useTimer)({autoStart:!1,expiryTimestamp:t,onExpire:function(){var e=y(R);E(e),x(),function(e){w.a.close();var t=new Audio(g);t.loop=!0,t.play(),w.a.fire({title:"".concat(S(e),"'s off"),icon:"warning"}).then((function(){t.loop=!1,t.pause()}))}(r)}}),o=a.seconds,s=a.minutes,O=a.hours,h=a.isRunning,x=a.pause,v=a.resume,E=a.restart,C=[O,s,o],L=Object(d.useState)(function(e){var t=localStorage.getItem("input ".concat(e));return"null"!==t&&t?new Date(JSON.parse(t.toString())):k()}(r)),N=Object(u.a)(L,2),R=N[0],_=N[1];if(Object(d.useEffect)((function(){localStorage.setItem("input ".concat(r),JSON.stringify(R)),n(y(R,!0));var e=y(R);E(e),x()}),[R]),c)return Object(I.jsx)(I.Fragment,{});function H(){return Object(I.jsxs)("div",{className:"clock buttons",children:[Object(I.jsx)("div",{className:"actual-timer",children:C.map((function(e,t){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{children:e<10?"0".concat(e):e}),t===C.length-1?"":":"]})}))}),Object(I.jsx)(F,{pause:function(){return x()},resume:function(){return v()},restart:function(e){return E(e)},isRunning:function(){return h},clockValues:function(){return C},input:function(){return R},id:r})]})}return Object(I.jsxs)("section",{className:"wrapper",children:[Object(I.jsx)(T,{id:r,removeTimer:i}),Object(I.jsx)(b.b,{dateAdapter:m.a,children:Object(I.jsx)(p.a,{ampm:!1,ampmInClock:!1,views:["hours","minutes","seconds"],inputFormat:"HH:mm:ss",mask:"__:__:__",label:"INSERT TIME HERE",value:R,onChange:function(e){_(e)},renderInput:function(e){return Object(I.jsx)(f.a,Object(l.a)({onKeyDown:function(e){if("Enter"===e.key){var t=y(R);E(t)}}},e))}})}),Object(I.jsx)(H,{}),Object(I.jsx)("hr",{})]})}var J=n(5),D=n(198),B=n(216),M=n(215),A=n(217),V=n(20),K=n(110),P=n.n(K);function G(e){var t=e.createTimer;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(O.a,{onClick:function(){t()},children:Object(I.jsx)(P.a,{style:{color:"white"}})})})}var Y=Object(J.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(D.a)(t.palette.common.white,0),marginLeft:0,width:"100%"}})),q=Object(J.a)("div")((function(e){return{paddingRight:e.theme.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),z=Object(J.a)(V.c)((function(e){var t=e.theme;return{color:"inherit",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"}}}));function Q(e){var t=e.createTimer,n=e.changeInputFilter,i=(e.sortList,Object(d.useState)("")),r=Object(u.a)(i,2),c=r[0],a=r[1];return Object(d.useEffect)((function(){n(c)}),[c]),Object(I.jsx)(M.a,{sx:{flexGrow:1,width:"100%"},children:Object(I.jsx)(B.a,{position:"static",children:Object(I.jsxs)(A.a,{children:[Object(I.jsxs)(Y,{children:[Object(I.jsx)(q,{}),Object(I.jsx)(z,{onChange:function(e){return a(e.target.value)},placeholder:"Click + to add timers",inputProps:{"aria-label":"search"},onKeyDown:function(e){"Escape"===e.key&&(e.target.value="",a(""))}})]}),Object(I.jsx)(G,{createTimer:t})]})})})}var U=n(219);function W(e){var t=e.timerList,n=Object(d.useState)(!1),i=Object(u.a)(n,2),r=i[0],c=i[1];return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(U.a,{onClick:function(){c(!0),t.forEach((function(e){document.getElementById("button_"+e.id).click()})),c(!1)},disabled:r,variant:"contained",color:"success",children:"Play All"})})}function X(){var e=Object(d.useState)(function(){var e=localStorage.getItem("timerList");return e&&e!==[]?JSON.parse(e.toString()):[]}()),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(d.useState)(""),c=Object(u.a)(r,2),l=c[0],j=c[1];function f(){return(f=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.fire({title:"Enter timer's name",input:"text",inputValidator:function(e){if(!e)return"You need to write something!"}}).then((function(e){e.value&&i((function(t){return[].concat(Object(o.a)(t),[{timeoutSeconds:0,id:"".concat(e.value," ").concat(t.length),expiryTimestamp:0}])}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){localStorage.setItem("timerList",JSON.stringify(n))}),[n]),Object(I.jsxs)("div",{id:"main",children:[Object(I.jsx)(Q,{createTimer:function(){return function(){return f.apply(this,arguments)}()},changeInputFilter:function(e){return j(e)}}),n.map((function(e){return Object(I.jsx)(H,{id:e.id,isHidden:!e.id.substring(0,e.id.lastIndexOf(" ")).toLocaleLowerCase().includes(l.toLocaleLowerCase()),expiryTimestamp:e.expiryTimestamp,removeTimer:function(){return function(e){i((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)},updateTimeoutSeconds:function(t){return function(e,t){var r=Object(o.a)(n),c=r.findIndex((function(t){return t.id===e.id}));r[c].timeoutSeconds=t,i(r)}(e,t)}},e.id)})),Object(I.jsx)(W,{timerList:n})]})}r.a.render(Object(I.jsx)(X,{}),document.getElementById("root"))},97:function(e,t,n){}},[[152,1,2]]]);
//# sourceMappingURL=main.1ed02614.chunk.js.map