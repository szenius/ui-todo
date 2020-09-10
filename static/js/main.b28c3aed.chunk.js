(this["webpackJsonpui-todo"]=this["webpackJsonpui-todo"]||[]).push([[0],{110:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(73),a(74),a(20)),u=a(41),s=a(21),d=function(t){return{type:"SET_TODOS",data:t}},p=function(t,e){var a=e.type,n=e.data;switch(a){case"SET_TODOS":return Object(s.a)({},t,{todos:n});case"ADD_TODO":var r=Object(s.a)({},t.todos,Object(u.a)({},n.id,{description:n.description}));return Object(s.a)({},t,{todos:r});case"UPDATE_TODO":var o=Object(s.a)({},t.todos);return o[n.id]&&(o[n.id].description=n.description),Object(s.a)({},t,{todos:o});case"DELETE_TODO":var c=Object(s.a)({},t.todos);return delete c[n],Object(s.a)({},t,{todos:c});default:return t}},l={todos:{}},f=Object(n.createContext)(l),m=function(t){var e=t.children,a=Object(n.useReducer)(p,l),o=Object(i.a)(a,2),c=o[0],u=o[1];return r.a.createElement(f.Provider,{value:{state:c,dispatch:u}},e)},O=function(){return r.a.createElement("h1",{"data-cy":"header"},"TODO")},b=a(113),v=a(50),h=a(114),E=a(7),_=a.n(E),j=a(27),y=a(48),T=a.n(y);a(76);a(79).config();T.a.initializeApp({apiKey:"AIzaSyBF6LS7jEjzm9HTzLpzG9_NZhQJ1WQ_E3A",authDomain:"regal-moment-265311.firebaseapp.com",databaseURL:"https://regal-moment-265311.firebaseio.com",projectId:"regal-moment-265311",storageBucket:"regal-moment-265311.appspot.com",messagingSenderId:"727774404761",appId:"1:727774404761:web:ba274fa82e3cb8933a9808"});var k=T.a.firestore(),D={fetchTodos:function(){var t=Object(j.a)(_.a.mark((function t(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.next=3,k.collection("todo-list").get();case 3:return t.sent.docs.forEach((function(t){e[t.id]=t.data()})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),addTodo:function(){var t=Object(j.a)(_.a.mark((function t(e,a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("todo-list").doc(e).set({description:a});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),updateTodo:function(){var t=Object(j.a)(_.a.mark((function t(e,a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("todo-list").doc(e).update({description:a});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),deleteTodo:function(){var t=Object(j.a)(_.a.mark((function t(e){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("todo-list").doc(e).delete();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),a=e[0],o=e[1],c=Object(n.useContext)(f).dispatch;return r.a.createElement("div",{className:"todo-input"},r.a.createElement(b.a,{value:a,onChange:function(t){var e=t.target.value;return o(e)},placeholder:"Add a TODO",size:"large",className:"todo-input__input","data-cy":"todo-input__input"}),r.a.createElement(v.a,{type:"primary",shape:"round",onClick:function(){var t=Object(h.a)();D.addTodo(t,a),c(function(t,e){return{type:"ADD_TODO",data:{id:t,description:e}}}(t,a)),o("")},className:"todo-input__button","data-cy":"todo-input__button"},"Add"))},w=function(t){var e=Object(n.useState)(t.description),a=Object(i.a)(e,2),o=a[0],c=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"todo-task"},!d&&r.a.createElement("div",{className:"todo-task__name","data-cy":"todo-task__name"},t.description),d&&r.a.createElement(b.a,{value:o,onChange:function(t){var e=t.target.value;return c(e)},placeholder:"Update a TODO",size:"large",className:"todo-task__input","data-cy":"todo-task__input"}),r.a.createElement(v.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-update",onClick:function(){return d&&t.update(t.id,o),void p(!d)}},"Update"),r.a.createElement(v.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-delete",disabled:d,onClick:function(){return t.delete(t.id)}},"Delete"))},x=function(){var t=Object(n.useContext)(f),e=t.state,a=t.dispatch;Object(n.useEffect)((function(){(function(){var t=Object(j.a)(_.a.mark((function t(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.fetchTodos();case 2:e=t.sent,a(d(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[a]);var o=function(t,e){D.updateTodo(t,e),a(function(t,e){return{type:"UPDATE_TODO",data:{id:t,description:e}}}(t,e))},c=function(t){D.deleteTodo(t),a(function(t){return{type:"DELETE_TODO",data:t}}(t))};return r.a.createElement("div",{className:"todo-list","data-cy":"todo-list"},Object.entries(e.todos).map((function(t){var e=Object(i.a)(t,2),a=e[0],n=e[1];return r.a.createElement(w,{key:a,description:n.description,update:o,delete:c,id:a})})))},N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(O,null),r.a.createElement(m,null,r.a.createElement(g,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},68:function(t,e,a){t.exports=a(110)},73:function(t,e,a){},74:function(t,e,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.b28c3aed.chunk.js.map