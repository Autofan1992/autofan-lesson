(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={navMenu:"Navbar_navMenu__3fc_G",item:"Navbar_item__2P-Kd",active:"Navbar_active__3Mk4n"}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(27),a=n(2),c=n(19),s="DIALOGS/addMessage",o={dialogs:[{id:1,name:"Nick"},{id:2,name:"Dimych"}],messages:[]},i=function(e){return function(t){t(function(e,t){return{type:s,message:e,id:t}}(e)),t(Object(c.a)("messageForm"))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:e.messages.length,message:t.message}])});default:return e}}},126:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return x}));var r=n(10),a=n.n(r),c=n(20),s=n(27),o=n(2),i=n(14),u="USERS/TOGGLE_FOLLOW_USER",l="USERS/SET_USERS",d="USERS/SET_CURRENT_PAGE",j="USERS/SET_USERS_TOTAL_COUNT",b="USERS/TOGGLE_IS_FETCHING",h="USERS/TOGGLE_FOLLOWING_PROGRESS",f={users:[],totalUsersCount:0,pageSize:5,currentPage:1,isFetching:!1,followingInProgress:[]},p=function(e){return{type:u,userID:e}},O=function(e){return{type:b,isFetching:e}},m=function(e,t){return{type:h,isFollowing:e,userID:t}},g=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O(!0)),n.next=3,i.c.getUsers(e,t);case 3:c=n.sent,r((s=c.data.items,{type:l,users:s})),r((a=c.data.totalCount,{type:j,totalCount:a})),r({type:d,currentPage:e}),r(O(!1));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t?i.c.unfollowUserRequest:i.c.followUserRequest,r(m(!0,e)),n.next=4,c(e);case 4:0===n.sent.data.resultCode&&(r(p(e)),r(m(!1,e)));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(o.a)(Object(o.a)({},e),{},{followed:!e.followed}):e}))});case l:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case j:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case d:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case b:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case h:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(s.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}}},129:function(e,t,n){e.exports={errorLabel:"FormControls_errorLabel__nRhlD",formError:"FormControls_formError__EC6c1"}},132:function(e,t,n){e.exports={ToDoWrapper:"ToDo_ToDoWrapper__1tlR5"}},133:function(e,t,n){e.exports={weatherWrapper:"Weather_weatherWrapper__1c_xF"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n(91),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"1f6ea116-9c88-4045-ba83-8df91e8a32ba"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t))},unfollowUserRequest:function(e){return a.delete("follow/".concat(e))},followUserRequest:function(e){return a.post("follow/".concat(e))}},s={getAuthInfo:function(){return a.get("auth/me")},getAuthProfile:function(e){return a.get("profile/".concat(e))},sendLoginRequest:function(e,t,n,r){return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},getCaptchaImage:function(){return a.get("security/get-captcha-url")},sendLogoutRequest:function(){return a.delete("auth/login")}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},setStatus:function(e){return a.put("profile/status",{status:e})}},i=r.create({baseURL:"http://api.openweathermap.org/data/2.5/"}),u={getWeatherData:function(e){return i.get("weather?q=".concat(e,"&appid=").concat("b979e8592b62a595eec4ec0cf4ac691f","&units=metric&lang=ru"))}}},165:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(0),a=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,295)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},c=n(1),s=n.n(c),o=n(62),i=n.n(o),u=(n(165),n(11)),l=n(16);var d=function(e){return Object(r.jsx)("h2",{children:"Settings"})};var j=function(e){return Object(r.jsx)("h2",{children:"Music"})};var b=function(e){return Object(r.jsx)("h2",{children:"News"})},h=n(12),f=n.n(h);var p=function(e){return Object(r.jsxs)("nav",{className:f.a.navMenu,children:[Object(r.jsx)(l.b,{to:"/profile",className:f.a.item,activeClassName:f.a.active,children:"Profile"}),Object(r.jsx)(l.b,{to:"/dialogs",className:f.a.item,activeClassName:f.a.active,children:"Messages"}),Object(r.jsx)(l.b,{to:"/news",className:f.a.item,activeClassName:f.a.active,children:"News"}),Object(r.jsx)(l.b,{to:"/music",className:f.a.item,activeClassName:f.a.active,children:"Music"}),Object(r.jsx)(l.b,{to:"/settings",className:f.a.item,activeClassName:f.a.active,children:"Settings"}),Object(r.jsx)(l.b,{to:"/users",className:f.a.item,activeClassName:f.a.active,children:"Users"}),Object(r.jsx)(l.b,{to:"/todolist",className:f.a.item,activeClassName:f.a.active,children:"Todo List"}),Object(r.jsx)(l.b,{to:"/weather",className:f.a.item,activeClassName:f.a.active,children:"Weather"})]})};var O=function(e){return Object(r.jsx)("ul",{className:"list-group mb-3",children:Object(r.jsxs)("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[Object(r.jsxs)("div",{className:"toDoItem flex-grow-1 d-flex align-items-center",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"toDo",id:e.id,onChange:e.handleComplete,checked:e.completeToggle}),Object(r.jsx)("label",{htmlFor:e.id,className:"".concat(e.completeToggle," mx-3 form-check-label flex-grow-1"),children:e.text})]}),Object(r.jsx)("button",{className:"btn btn-danger btn-sm",onClick:e.handleDelete,id:e.id,children:"\xd7"})]})})},m=n(84),g=n(127),x=n(38),v=n(45),w=Object(x.b)(2);var T=Object(g.a)({form:"todoForm"})((function(e){return Object(r.jsx)("form",{onSubmit:e.handleSubmit,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col",children:Object(r.jsx)(m.a,{name:"text",component:v.a,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443",validate:[x.c,w]})}),Object(r.jsx)("div",{className:"col-auto",children:Object(r.jsx)("button",{className:"btn btn-primary px-5",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})})]})})})),N=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{onSubmit:function(t){e.addTodo(t.text)}}),Object(r.jsx)("hr",{}),e.todos.map((function(t){return Object(r.jsx)(O,{id:t.id,text:t.text,completeToggle:t.complete,handleComplete:function(){return e.updateTodoStatus(t.id)},handleDelete:function(){return e.deleteTodo(t.id)}},t.id)})),Object(r.jsxs)("p",{className:"todosLeft",children:["\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043e\u043a",e.activeTodos>0?": "+e.activeTodos:" \u043d\u0435\u0442"]}),Object(r.jsx)("div",{className:"filterButtons",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-auto",children:Object(r.jsx)("button",{className:"btn btn-secondary",onClick:e.handleFilter,value:"ALL_TODOS",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"})}),Object(r.jsx)("div",{className:"col-auto",children:Object(r.jsx)("button",{className:"btn btn-secondary",onClick:e.handleFilter,value:"ACTIVE_TODOS",disabled:!e.activeTodos,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435"})}),Object(r.jsx)("div",{className:"col-auto",children:Object(r.jsx)("button",{className:"btn btn-secondary",onClick:e.handleFilter,value:"COMPLETE_TODOS",disabled:!e.completeTodos,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"})})]})}),Object(r.jsx)("div",{children:e.todosLength?Object(r.jsxs)("button",{className:"btn btn-secondary my-3",onClick:function(){return e.toggleAllTodo()},children:["\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 ","".concat(e.toggleAllComplete)]}):""}),Object(r.jsx)("div",{children:e.completeTodos?Object(r.jsx)("button",{className:"btn btn-secondary",onClick:function(){return e.deleteAllCompleteTodo()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}):""})]})},y=n(15),_=n(27),S=n(2),C=n(19),D="TODOS/ADD_TODO",E="TODOS/DELETE_TODO",L="TODOS/DELETE_ALL_COMPLETE_TODO",A="TODOS/TOGGLE_ALL_TODO",I="TODOS/UPDATE_TODO_STATUS",P="TODOS/FILTER_TODO",k={todos:[],filter:"all",toggleAllComplete:!0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(S.a)(Object(S.a)({},e),{},{newText:"",todos:[{id:e.todos.length,text:t.text,complete:!1}].concat(Object(_.a)(e.todos))});case I:return Object(S.a)(Object(S.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.id?Object(S.a)(Object(S.a)({},e),{},{complete:!e.complete}):e}))});case P:return Object(S.a)(Object(S.a)({},e),{},{filter:t.status});case E:return Object(S.a)(Object(S.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});case L:return Object(S.a)(Object(S.a)({},e),{},{todos:e.todos.filter((function(e){return!e.complete}))});case A:return Object(S.a)(Object(S.a)({},e),{},{toggleAllComplete:!e.toggleAllComplete,todos:e.todos.map((function(t){return Object(S.a)(Object(S.a)({},t),{},{complete:e.toggleAllComplete})}))});default:return e}},R=n(132),U=n.n(R),M=n(66),W=function(e){return e.todoList.todos},G=Object(M.a)((function(e){return e.todoList.filter}),W,(function(e,t){switch(e){case"ALL_TODOS":return t;case"COMPLETE_TODOS":return t.filter((function(e){return e.complete}));case"ACTIVE_TODOS":return t.filter((function(e){return!e.complete}));default:return t}})),H=Object(M.a)(W,(function(e){return e.filter((function(e){return!e.complete})).length})),z=Object(M.a)(W,(function(e){return e.some((function(e){return e.complete}))}));var B=Object(y.b)((function(e){return{todoList:e.todoList,newText:e.todoList.newText,todos:G(e),filter:e.todoList.filter,someActiveTodos:H(e),someCompleteTodos:z(e),toggleAllComplete:e.todoList.toggleAllComplete,todosLength:e.todoList.todos.length}}),{addTodo:function(e){return function(t){t(function(e){return{type:D,text:e}}(e)),t(Object(C.a)("todoForm"))}},deleteAllCompleteTodo:function(){return{type:L}},toggleAllTodo:function(){return{type:A}},deleteTodo:function(e){return{type:E,id:e}},updateTodoStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:I,id:e}},filterTodo:function(e){return{type:P,status:e}}})((function(e){return Object(r.jsx)("div",{className:U.a.ToDoWrapper,children:Object(r.jsx)(N,{addTodo:e.addTodo,handleFilter:function(t){e.filterTodo(t.target.value)},updateTodoStatus:e.updateTodoStatus,toggleAllComplete:e.toggleAllComplete,deleteTodo:e.deleteTodo,toggleAllTodo:e.toggleAllTodo,deleteAllCompleteTodo:e.deleteAllCompleteTodo,todos:e.todos,activeTodos:e.someActiveTodos,completeTodos:e.someCompleteTodos,todosLength:e.todosLength})})})),q=n(42),J=n.n(q),K=n.p+"static/media/logo.103b5fa1.svg",V=n(93);var X=function(e){return Object(r.jsxs)("header",{className:J.a.header,children:[Object(r.jsx)("div",{className:J.a.logoBlock,children:Object(r.jsx)("img",{src:K,alt:""})}),Object(r.jsx)("div",{className:J.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{className:J.a.userInfo,children:[Object(r.jsx)(l.b,{to:"/profile/".concat(e.userID),children:Object(r.jsx)("div",{className:J.a.avatar,children:Object(r.jsx)("img",{src:e.userPhoto?e.userPhoto:V.a,alt:"avatar"})})}),Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("p",{className:"mb-0",children:e.userLogin}),Object(r.jsx)("button",{onClick:e.handleLogout,className:"btn btn-link p-0",children:"Logout"})]})]}):Object(r.jsx)(l.b,{className:"btn btn-link",to:"/login",children:"Login"})})]})},Y=n(10),Z=n.n(Y),Q=n(20),$=n(14),ee="AUTH/SET_USER_DATA",te="AUTH/SET_CAPTCHA",ne={userID:null,email:null,login:null,userPhoto:null,isAuth:!1,authError:null,captcha:{error:!1,imageUrl:void 0}},re=function(e,t,n,r,a){return{type:ee,payload:{userID:t,email:n,login:r,userPhoto:a,isAuth:e}}},ae=function(){return function(){var e=Object(Q.a)(Z.a.mark((function e(t){var n,r,a,c,s;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.getAuthInfo();case 2:if(0!==(n=e.sent).data.resultCode){e.next=9;break}return r=n.data.data,a=r.id,c=r.email,s=r.login,e.next=7,$.a.getAuthProfile(a);case 7:n=e.sent,t(re(!0,a,c,s,n.data.photos.small));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(S.a)(Object(S.a)({},e),t.payload);case te:return Object(S.a)(Object(S.a)({},e),{},{captcha:{error:!0,imageUrl:t.url}});default:return e}},se=n(30);var oe=Object(y.b)((function(e){return{userLogin:Object(se.b)(e),userID:Object(se.a)(e),userPhoto:Object(se.c)(e),isAuth:Object(se.e)(e)}}),{logout:function(){return function(){var e=Object(Q.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.sendLogoutRequest();case 2:0===e.sent.data.resultCode&&t(re(!1,null,null,null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(r.jsx)(X,Object(S.a)(Object(S.a)({},e),{},{handleLogout:function(){e.logout()}}))}));var ie=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"location mt-3",children:Object(r.jsxs)("h1",{className:"fw-bold",children:[e.weatherCity,", ",e.country]})}),Object(r.jsxs)("div",{className:"temperature",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("div",{className:"icon",children:e.weather.map((function(e,t){return e.icon&&Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,".png"),alt:""},t)}))}),Object(r.jsxs)("h2",{className:"mt-2 mb-4",children:["\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 ",Math.round(e.temperature),", \xb0C"]})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"fw-bold",children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a:"})," ",Math.round(e.temperatureFeels)," \xb0C"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"fw-bold",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0433\u043e\u0434\u044b:"})," ",e.weather.map((function(e){return e.description}))]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"fw-bold",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430:"})," ",Math.round(e.windSpeed)," \u043c/\u0441"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"fw-bold",children:"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430:"})," ",e.sunriseDate]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"fw-bold",children:"\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043a\u0430\u0442\u0430:"})," ",e.sunsetDate]})]})]})},ue="WEATHER/SET_WEATHER_DATA",le="WEATHER/TOGGLE_FETCHING",de="WEATHER/SET_CITY",je={weatherInfo:{weather:[],temperature:null,temperatureFeels:null,windSpeed:null,sunriseDate:null,sunsetDate:null,country:null,weatherCity:null},isFetching:!1,cityName:"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"},be=function(e){return{type:de,cityName:e}},he=function(e){return{type:le,isFetching:e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(S.a)(Object(S.a)({},e),{},{weatherInfo:{weather:Object(_.a)(t.weatherData.weather),temperature:t.weatherData.main.temp,temperatureFeels:t.weatherData.main.feels_like,windSpeed:t.weatherData.wind.speed,sunriseDate:t.weatherData.sys.sunrise,sunsetDate:t.weatherData.sys.sunset,country:t.weatherData.sys.country,weatherCity:t.weatherData.name}});case de:return Object(S.a)(Object(S.a)({},e),{},{cityName:t.cityName});case le:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});default:return e}},pe=n(47);var Oe=function(e){return Object(r.jsx)("form",{onSubmit:e.handleFormSubmit,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:e.placeholder,onChange:e.handleInputChange,value:e.cityName})}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u041f\u043e\u0438\u0441\u043a"})})]})})},me=n(133),ge=n.n(me);var xe=Object(y.b)((function(e){var t=e.weatherPage.weatherInfo.sunriseDate,n=e.weatherPage.weatherInfo.sunsetDate,r=new Date(1e3*t),a=new Date(1e3*n);return{fetchingStatus:e.weatherPage.isFetching,cityName:e.weatherPage.cityName,placeholder:e.weatherPage.placeholder,weather:e.weatherPage.weatherInfo.weather,temperature:e.weatherPage.weatherInfo.temperature,temperatureFeels:e.weatherPage.weatherInfo.temperatureFeels,windSpeed:e.weatherPage.weatherInfo.windSpeed,sunriseDate:r.getHours()+":"+r.getMinutes()+":"+r.getSeconds(),sunsetDate:a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),country:e.weatherPage.weatherInfo.country,weatherCity:e.weatherPage.weatherInfo.weatherCity}}),{getWeatherData:function(e){return function(){var t=Object(Q.a)(Z.a.mark((function t(n){var r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n(he(!0)),n(be(e)),!e.trim()){t.next=17;break}return t.prev=3,t.next=6,$.d.getWeatherData(e);case 6:r=t.sent,n(he(!1)),n((a=r.data,{type:ue,weatherData:a})),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),console.warn(t.t0),alert("\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");case 15:t.next=18;break;case 17:alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430");case 18:n(he(!1));case 19:case"end":return t.stop()}var a}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}()},setCity:be})((function(e){return Object(r.jsxs)("div",{className:ge.a.weatherWrapper,children:[Object(r.jsx)(Oe,{handleFormSubmit:function(t){t.preventDefault(),e.getWeatherData(e.cityName)},handleInputChange:function(t){e.setCity(t.target.value)},cityName:e.cityName,placeholder:e.placeholder}),e.fetchingStatus?Object(r.jsx)(pe.a,{}):e.weatherCity&&Object(r.jsx)(ie,{weather:e.weather,temperature:e.temperature,temperatureFeels:e.temperatureFeels,windSpeed:e.windSpeed,sunriseDate:e.sunriseDate,sunsetDate:e.sunsetDate,country:e.country,weatherCity:e.weatherCity})]})}));var ve=Object(g.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaURL;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{className:"inputBlocks my-3",children:[Object(r.jsx)("div",{className:"input-block",children:Object(r.jsx)(m.a,{component:v.a,validate:[x.c],name:"email",type:"email",placeholder:"Email"})}),Object(r.jsx)("div",{className:"input-block my-3",children:Object(r.jsx)(m.a,{component:v.a,validate:[x.c],name:"password",type:"password",placeholder:"Password"})}),Object(r.jsx)("div",{className:"input-block form-check",children:Object(r.jsxs)("label",{className:"form-check-label",children:[Object(r.jsx)(m.a,{className:"form-check-input",name:"rememberMe",component:"input",type:"checkbox"}),Object(r.jsx)("p",{className:"mb-0",children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})]})}),n&&Object(r.jsx)("div",{className:"alert alert-danger mt-3",role:"alert",children:n}),a&&Object(r.jsxs)("div",{className:"input-block",children:[Object(r.jsx)("div",{className:"my-3",children:Object(r.jsx)("img",{src:a,alt:""})}),Object(r.jsx)(m.a,{name:"captcha",component:"input",type:"text"})]})]}),Object(r.jsx)("button",{className:"btn btn-primary px-5",children:"\u0412\u043e\u0439\u0442\u0438"})]})})),we=Object(y.b)((function(e){return{isAuth:Object(se.e)(e),captchaURL:Object(se.d)(e)}}),{login:function(e){var t=e.email,n=e.password,r=e.rememberMe,a=e.captcha;return function(){var e=Object(Q.a)(Z.a.mark((function e(c){var s;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.a.sendLoginRequest(t,n,r,a);case 3:if(0===(s=e.sent).data.resultCode?c(ae()):s.data.resultCode>0&&s.data.resultCode<10&&c(Object(C.b)("loginForm",{_error:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438/\u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})),10!==s.data.resultCode){e.next=11;break}return c(Object(C.b)("loginForm",{_error:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438/\u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 \u0432 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435"})),e.next=9,$.a.getCaptchaImage();case 9:s=e.sent,c((o=s.data.url,{type:te,url:o}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.warn(e.t0);case 16:case"end":return e.stop()}var o}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuth,a=e.captchaURL;return n?Object(r.jsx)(u.a,{to:"profile/14088"}):Object(r.jsxs)("div",{className:"py-3 px-3",children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ve,{onSubmit:function(e){t(e)},captchaURL:a})]})})),Te=n(9),Ne="APP/SET_INITIALIZED",ye={initialized:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},Se=function(e){return e.app.initialized},Ce=n(94),De=n(125),Ee={friends:[{name:"Dimych"},{name:"Jeremy"}]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return e},Ae=n(126),Ie=n(134),Pe=n(128),ke=Object(Te.c)({profilePage:Ce.b,dialogsPage:De.b,sidebar:Le,todoList:F,usersPage:Ae.a,auth:ce,weatherPage:fe,form:Pe.a,app:_e}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Te.d,Re=Object(Te.e)(ke,Fe(Object(Te.a)(Ie.a))),Ue=s.a.lazy((function(){return n.e(5).then(n.bind(null,297))})),Me=s.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),We=s.a.lazy((function(){return n.e(4).then(n.bind(null,298))}));var Ge=Object(Te.d)(Object(y.b)((function(e){return{initialized:Se(e)}}),{initializeApp:function(){return function(e){e(ae()).then((function(){e({type:Ne})}))}}}),u.f)((function(e){var t=e.initialized,n=e.initializeApp;return Object(c.useEffect)((function(){n()}),[n,t]),t?Object(r.jsx)("main",{className:"pageWrapper",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"appWrapper",children:[Object(r.jsx)(oe,{}),Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"appContent",children:Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)(pe.a,{}),children:[Object(r.jsx)(u.b,{path:"/login",render:function(){return Object(r.jsx)(we,{})}}),Object(r.jsx)(u.b,{path:"/dialogs",render:function(){return Object(r.jsx)(Ue,{})}}),Object(r.jsx)(u.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(Me,{})}}),Object(r.jsx)(u.b,{path:"/news",render:function(){return Object(r.jsx)(b,{})}}),Object(r.jsx)(u.b,{path:"/music",render:function(){return Object(r.jsx)(j,{})}}),Object(r.jsx)(u.b,{path:"/settings",render:function(){return Object(r.jsx)(d,{})}}),Object(r.jsx)(u.b,{path:"/todolist",render:function(){return Object(r.jsx)(B,{})}}),Object(r.jsx)(u.b,{path:"/users",render:function(){return Object(r.jsx)(We,{})}}),Object(r.jsx)(u.b,{path:"/weather",render:function(){return Object(r.jsx)(xe,{})}})]})})]})})}):Object(r.jsx)(pe.a,{})}));function He(){return Object(r.jsx)(l.a,{children:Object(r.jsx)(y.a,{store:Re,children:Object(r.jsx)(Ge,{})})})}i.a.render(Object(r.jsx)(He,{}),document.getElementById("root")),a()},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return o}));var r=function(e){return e.auth.login},a=function(e){return e.auth.userID},c=function(e){return e.auth.userPhoto},s=function(e){return e.auth.isAuth},o=function(e){return e.auth.captcha.imageUrl}},38:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){return e?void 0:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044c\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},a=function(e){return function(t){return t.length>e?"\u041c\u0430\u043a\u0441. \u0434\u043b\u0438\u043d\u043d\u0430 \u0441\u043e\u0442\u0441\u0430\u0432\u043b\u044f\u0435\u0442 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}},c=function(e){return function(t){return t.length<e?"\u041c\u0438\u043d. \u0434\u043b\u0438\u043d\u043d\u0430 \u0441\u043e\u0442\u0441\u0430\u0432\u043b\u044f\u0435\u0442 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}}},42:function(e,t,n){e.exports={header:"Header_header__u365D",logoBlock:"Header_logoBlock__1AS_9",loginBlock:"Header_loginBlock__3o0GL",userInfo:"Header_userInfo__1xpF8",avatar:"Header_avatar__11DMT"}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(2),a=n(85),c=n(0),s=n(129),o=n.n(s);n(84);function i(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(c.jsxs)("div",{children:[a,s&&Object(c.jsx)("span",{className:o.a.errorLabel,children:r})]})}var u=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return Object(c.jsx)(i,Object(r.a)(Object(r.a)({},n),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)(Object(r.a)({},t),n),{},{className:"form-control ".concat(!n.meta.valid&&n.meta.touched&&"is-invalid")}))}))},l=function(e){var t=e.input,n=Object(a.a)(e,["input"]);return Object(c.jsx)(i,Object(r.a)(Object(r.a)({},n),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},t),n),{},{className:"form-control ".concat(!n.meta.valid&&n.meta.touched&&"is-invalid")}))}))}},47:function(e,t,n){"use strict";var r=n(0),a=n.p+"static/media/preloader.f2b68f11.svg";t.a=function(e){return Object(r.jsx)("div",{className:"preloader",children:Object(r.jsx)("img",{src:a,alt:""})})}},93:function(e,t,n){"use strict";t.a=n.p+"static/media/user.4a000e6c.svg"},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return T}));var r=n(10),a=n.n(r),c=n(20),s=n(27),o=n(2),i=n(14),u=n(19),l="PROFILE/ADD_POST",d="PROFILE/DELETE_POST",j="PROFILE/LIKE_POST",b="PROFILE/SET_USER_PROFILE",h="PROFILE/SET_USER_STATUS",f="PROFILE/SET_CHANGE_STATUS_RESULT_CODE",p={posts:[],profile:null,status:null,statusChangeResult:null},O=function(e){return function(t){t(function(e){return{type:l,text:e}}(e)),t(Object(u.a)("postForm"))}},m=function(e){return{type:j,id:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:b,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return{type:h,status:e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(x(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return{type:f,resultCode:e}},T=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.setStatus(e);case 3:0===t.sent.data.resultCode&&(n(x(e)),n(w(!0))),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn(t.t0),n(w(!1));case 11:return t.prev=11,setTimeout((function(){n(w(null))}),3e3),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:e.posts.length,message:t.text,likesCount:null}])});case d:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.map((function(e){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{likesCount:++e.likesCount}):e}))});case b:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case h:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case f:return Object(o.a)(Object(o.a)({},e),{},{statusChangeResult:t.resultCode});default:return e}}}},[[286,1,2]]]);
//# sourceMappingURL=main.7d4e5254.chunk.js.map