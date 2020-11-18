/*! For license information please see main.24171e41.chunk.js.LICENSE.txt */
(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{155:function(e,t,n){e.exports=n(280)},16:function(e,t,n){e.exports={Error:"FormControls_Error__3WPFQ",ErrorSpan:"FormControls_ErrorSpan__6w8dm",Input:"FormControls_Input__2d90D",LoginInput:"FormControls_LoginInput__27ZRW",StyledPasswordInput:"FormControls_StyledPasswordInput__3_Lf3",StyledInput:"FormControls_StyledInput__3mWtX",ShowLabel:"FormControls_ShowLabel__3oguU"}},160:function(e,t,n){},21:function(e,t,n){e.exports={Users:"Users_Users__1v7m0",Header:"Users_Header__KwosV",User:"Users_User__2_MfI",UsersFilterInput:"Users_UsersFilterInput__U_EX7",UsersHeader:"Users_UsersHeader__1ARBg",DeleteActionSpan:"Users_DeleteActionSpan__14t_e",SortById:"Users_SortById__3GdX2",ByDown:"Users_ByDown__2iye3",ByUp:"Users_ByUp__3FAgj",CreateNewUserLink:"Users_CreateNewUserLink__GrGV1"}},28:function(e,t,n){e.exports={Profile:"Profile_Profile__3NmHj",ProfileSubmitButton:"Profile_ProfileSubmitButton__2nFCi",ProfileCancelButton:"Profile_ProfileCancelButton__1PMMu",ProfileInfo:"Profile_ProfileInfo__1Ox-h",ToUsersButton:"Profile_ToUsersButton__2Iwd2",EditButton:"Profile_EditButton__2yeXx",EditProfileForm:"Profile_EditProfileForm__1Pe3A"}},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(64),o=n.n(s),c=(n(160),n(11)),u=n(84),i=n.n(u),l=n(52),m=n(37),f=n(12),d=n.n(f),p=n(27),_=n(44),E=n(13),b=n(124).create({baseURL:"https://emphasoft-test-assignment.herokuapp.com/"}),v=function(e,t){return b.post("api-token-auth/",{username:e,password:t}).then((function(e){return e}),(function(e){return e.response.status}))},h=function(e){return b.get("/api/v1/users/",{headers:{authorization:"Token ".concat(e)}}).then((function(e){return e}))},U=function(e,t){return b.get("/api/v1/users/".concat(e),{headers:{authorization:"Token ".concat(t)}}).then((function(e){return e}))},g=function(e,t){return b.post("/api/v1/users/",e,{headers:{authorization:"Token ".concat(t)}}).then((function(e){return e}),(function(e){return e.response}))},O=function(e,t,n){return b.patch("/api/v1/users/".concat(t,"/"),JSON.stringify(e),{headers:{authorization:"Token ".concat(n),"Content-Type":"application/json"}}).then((function(e){return e}),(function(e){return e.response}))},j=function(e,t){return b.delete("/api/v1/users/".concat(e,"/"),{headers:{authorization:"Token ".concat(t),"Content-Type":"application/json"}}).then((function(e){return e}),(function(e){return e.response}))},S=n(26),w=function(e,t){return e.forEach((function(n,a){n.id===t&&e.splice(a,1)})),e.map((function(e){return e}))},P={users:[]},L=function(e){return{type:"DELETE_USER",userId:e}},y=function(e){return{type:"ADD_NEW_USER",userData:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:Object(_.a)(t.users)});case"ADD_NEW_USER":return Object(E.a)(Object(E.a)({},e),{},{users:[].concat(Object(_.a)(e.users),[t.userData])});case"DELETE_USER":return Object(E.a)(Object(E.a)({},e),{},{users:w(e.users,t.userId)});case"NULL_USERS_DATA":return{users:[]};default:return e}},N=n(9),I=n(21),C=n.n(I),A=n(14),T=Object(N.b)((function(e){return{token:e.auth.token}}),{deleteUser:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(e,t);case 2:204===n.sent.status&&a(L(e));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.username,n=e.first_name,a=e.last_name,s=e.id,o=e.token,c=e.deleteUser;return r.a.createElement("div",{className:C.a.User},r.a.createElement("div",null,s),r.a.createElement("div",null,t),r.a.createElement("div",null,n),r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement(A.b,{to:"/Profile/"+s},"ViewProfile")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){window.confirm("\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?")&&c(s,o)},className:C.a.DeleteActionSpan},"Delete")))})),x=n(126),B=n.n(x),F=n(6),D=n(10),R=function(e){return{token:e.auth.token}},H=function(e){return Object(N.b)(R)(Object(D.e)((function(t){return t.token||t.history.push("/Login"),r.a.createElement(e,t)})))},W=n(88),z=n.n(W),$={token:null,isAuth:!1},q=function(e){return{type:"SET_AUTH_DATA",token:e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_DATA":return Object(E.a)(Object(E.a)({},e),{},{token:t.token,isAuth:!0});case"NULL_AUTH_DATA":return localStorage.removeItem("token"),localStorage.removeItem("lastPath"),{token:null};default:return e}},V={userProfile:null},X=function(e){return{type:"SET_USER_PROFILE",userProfile:e}},Z=function(){return{type:"NULL_PROFILE"}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PROFILE":return Object(E.a)(Object(E.a)({},e),{},{userProfile:Object(E.a)({},t.userProfile)});case"UPDATE_USER":return Object(E.a)(Object(E.a)({},e),{},{userProfile:Object(E.a)({},t.userData)});case"NULL_PROFILE":return{userProfile:null};default:return e}};var G=Object(D.e)(Object(N.b)(null,(function(e){return{logout:function(){e({type:"NULL_USERS_DATA"}),e({type:"NULL_AUTH_DATA"}),e({type:"NULL_PROFILE"})}}}))((function(e){return r.a.createElement("div",{className:z.a.Logout},r.a.createElement("button",{className:z.a.LogoutButton,onClick:function(){e.history.push("/Login"),e.logout()}},"Logout"))}))),Q=function(e){return Object(D.e)((function(t){var n,s=t.location,o=Object(m.a)(t,["location"]);return n=s.pathname,Object(a.useEffect)((function(){localStorage.setItem("lastPath",n)})),r.a.createElement(e,o)}))},K=Object(F.d)(Q,H)((function(e){var t,n=e.requestUsers,s=e.users,o=e.token,u=(Object(m.a)(e,["requestUsers","users","token"]),Object(a.useState)(s)),i=Object(c.a)(u,2),f=i[0],d=i[1],p=Object(a.useState)(""),E=Object(c.a)(p,2),b=E[0],v=E[1],h=Object(a.useState)(null),U=Object(c.a)(h,2),g=U[0],O=U[1];!function(e,t){Object(a.useEffect)((function(){e(t)}),[])}(n,o),function(e,t,n){Object(a.useEffect)((function(){n(null)}),[e,t])}(s,b,O),Object(a.useEffect)((function(){d(s)}),[s]);var j=f.map((function(e){return r.a.createElement(T,{id:e.id,username:e.username,first_name:e.first_name,last_name:e.last_name})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{className:C.a.UsersHeader},r.a.createElement("input",{value:b,onChange:function(e){v(e.target.value),d(function(e,t){return e.filter((function(e){return e.username.includes(t)}))}(s,e.target.value))},placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c Username",className:C.a.UsersFilterInput}),r.a.createElement("div",{className:B()(C.a.SortById,(t={},Object(l.a)(t,C.a.ByUp,!0===g),Object(l.a)(t,C.a.ByDown,!1===g),t)),onClick:function(){d(function(e,t){var n,a,r=function(e,t){return e.num-t.num},s=Object.values(e.reduce((function(e,t){var n=t.id;return n in e?e[n].push(t):e[n]=[t],e}),{})).map((function(e){return e.sort(r)})).sort((function(e,t){return e[0].num-t[0].num}));return t?(n=[]).concat.apply(n,Object(_.a)(s)):(a=[]).concat.apply(a,Object(_.a)(s)).reverse()}(f,g)),O(!g)}},"Sort By Id"),r.a.createElement(A.b,{to:"/Users/create",className:C.a.CreateNewUserLink},"Create new User")),r.a.createElement("div",{className:C.a.Users},r.a.createElement("div",{className:C.a.Header},r.a.createElement("div",{className:C.a.User},r.a.createElement("div",null,"Id"),r.a.createElement("div",null,"username"),r.a.createElement("div",null,"first_name"),r.a.createElement("div",null,"last_name"),r.a.createElement("div",null,"ViewProfile"),r.a.createElement("div",null,"Delete"))),j))})),Y=Object(N.b)((function(e){return{users:e.users.users,token:e.auth.token}}),{requestUsers:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:200===(a=t.sent).status&&n({type:"SET_USERS",users:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(K),ee=n(121),te=n(122),ne=n(16),ae=n.n(ne),re=function(e){var t=e.input,n=e.meta,a=Object(m.a)(e,["input","meta"]),s=n.error&&n.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.className?ae.a[a.className]:ae.a.Input},r.a.createElement("input",Object.assign({},t,a,{className:s?ae.a.Error:""}))),s&&r.a.createElement("div",null,r.a.createElement("span",{className:ae.a.ErrorSpan},n.error)))},se=function(e){var t=e.input,n=e.meta,a=Object(m.a)(e,["input","meta"]),s=n.error&&n.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.className?ae.a[a.className]:ae.a.Input},r.a.createElement("input",Object.assign({},t,a,{className:s?ae.a.Error:""})),r.a.createElement("span",{onClick:function(){a.setType("password"===a.type?"text":"password")},className:ae.a.ShowLabel},"Show")),s&&r.a.createElement("div",null,r.a.createElement("span",{className:ae.a.ErrorSpan},n.error)))},oe=function(e){if(!e)return"This field is required"},ce=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ue=function(e){if(!/^[\w.@+-]+$/.test(e))return"Entered incorrect data. Use only Letters, digits and @/./+/-/_ "},ie=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430."},le=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430."},me=n(129),fe=n(28),de=n.n(fe),pe=ce(150),_e=ce(30),Ee=Object(F.d)(Object(N.b)((function(e){return{initialValues:{username:e.profile.userProfile.username,first_name:e.profile.userProfile.first_name,last_name:e.profile.userProfile.last_name,is_active:e.profile.userProfile.is_active}}}),{}),Object(te.a)({form:"editProfile"}))((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:de.a.EditProfileForm},r.a.createElement("label",null,"Username:",r.a.createElement(ee.a,{component:re,validate:[oe,ue],name:"username",placeholder:"Username"})),r.a.createElement("label",null,"\u0418\u043c\u044f:",r.a.createElement(ee.a,{component:re,validate:[oe,_e,ie],name:"first_name",placeholder:"\u0418\u043c\u044f"})),r.a.createElement("label",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",r.a.createElement(ee.a,{component:re,validate:[oe,pe,le],name:"last_name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"})),r.a.createElement("label",null,"is_active:",r.a.createElement(ee.a,{name:"is_active",component:"input",type:"checkbox"}))),e.error?r.a.createElement("span",{className:ae.a.Error},e.error):null,r.a.createElement("div",null,r.a.createElement("button",{disabled:e.isSubmitting,className:de.a.ProfileSubmitButton},"Save Changes"),r.a.createElement("button",{className:de.a.ProfileCancelButton,onClick:function(t){t.preventDefault(),e.onCancelClick()}},"CANCEL")))})),be=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),s=n[0],o=n[1];return r.a.createElement(Ee,{onSubmit:function(t){o(!0);var n=e.userProfile,a=n.username,r=n.first_name,s=n.last_name,c=n.is_active;if(me.a({username:a,first_name:r,last_name:s,is_active:c},t))o(!1),e.onSuccess();else{var u=function(e,t){var n=new Map;for(var a in e)for(var r in t)e[a]!==t[r]&&a===r&&n.set(a,e[a]);return Object.fromEntries(n)}(t,{username:a,first_name:r,last_name:s,is_active:c});e.updateUser(u,e.userId,e.token).then((function(t){o(!1),void 0===t&&e.onSuccess()}))}},isSubmitting:s,onCancelClick:e.onCancelClick})},ve=Object(F.d)(Q,H,D.e,Object(N.b)((function(e){return{userProfile:e.profile.userProfile,token:e.auth.token}}),{requestUserProfile:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U(e,t);case 2:200===(r=n.sent).status&&a(X(r.data));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},updateUser:function(e,t,n){return function(){var a=Object(p.a)(d.a.mark((function a(r){var s,o;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(e,t,n);case 2:if(200!==(s=a.sent).status){a.next=7;break}r(X(s.data)),a.next=11;break;case 7:if(400!==s.status){a.next=11;break}return o=Object.values(s.data)[0][0],r(Object(S.a)("editProfile",{_error:o})),a.abrupt("return",o);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},nullUserAction:Z}))((function(e){var t=e.requestUserProfile,n=e.match,s=e.userProfile,o=e.updateUser,u=e.token,i=e.nullUserAction,l=Object(a.useState)(!1),m=Object(c.a)(l,2),f=m[0],d=m[1];return Object(a.useEffect)((function(){t(n.params.userId,u),i()}),[n.params.userId]),s?r.a.createElement("div",{className:de.a.Profile},r.a.createElement(G,null),r.a.createElement("div",null,f?r.a.createElement(be,{userProfile:s,updateUser:o,onCancelClick:function(){d(!1)},onSuccess:function(){d(!1)},token:u,userId:n.params.userId}):r.a.createElement("div",{className:de.a.ProfileInfo},r.a.createElement("div",null,"Username: ",s.username),r.a.createElement("div",null,"\u0418\u043c\u044f: ",s.first_name),r.a.createElement("div",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",s.last_name),r.a.createElement("div",null,"is_active: ","".concat(s.is_active)),r.a.createElement("div",null,"is_superuser: ","".concat(s.is_superuser)),r.a.createElement("div",null,"last_login: ",s.last_login),r.a.createElement("button",{className:de.a.EditButton,onClick:function(){return d(!0)}},"Edit"))),r.a.createElement(A.b,{to:"/Users"},r.a.createElement("button",{className:de.a.ToUsersButton},"Back to Users"))):r.a.createElement("div",null,"...Loading...")})),he=n(43),Ue=n.n(he),ge=function(e){if(!e)return"This field is required"},Oe=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},je=function(e){if(!/^[\w.@+-]+$/.test(e))return"Entered incorrect data. Use only Letters, digits and @/./+/-/_ "},Se=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b."},we=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b."},Pe=function(e){if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(e))return"\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, 1 \u0446\u0438\u0444\u0440\u0430, 1 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f."},Le=function(e){var t={};return e.confirmPassword!==e.password&&(t.confirmPassword="Password mismatched"),t},ye=Oe(150),ke=Oe(30),Ne=Object(F.d)(Object(te.a)({form:"createUser",validate:Le}))((function(e){var t=Object(a.useState)("password"),n=Object(c.a)(t,2),s=n[0],o=n[1],u=Object(a.useState)("password"),i=Object(c.a)(u,2),l=i[0],m=i[1];return r.a.createElement("form",{className:Ue.a.CreateUserForm,onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement(ee.a,{component:re,validate:[ge,je,ye],name:"username",id:"username",placeholder:"Username",className:"StyledInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"first_name"},"\u0418\u043c\u044f:"),r.a.createElement(ee.a,{component:re,validate:[ge,ke,Se],name:"first_name",id:"first_name",placeholder:"\u0418\u043c\u044f",className:"StyledInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"last_name"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"),r.a.createElement(ee.a,{component:re,validate:[ge,ye,we],name:"last_name",id:"last_name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",className:"StyledInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement(ee.a,{component:se,validate:[ge,ye,Pe],name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",type:l,setType:m,className:"StyledPasswordInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"confirmPassword"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement(ee.a,{component:se,validate:[ge,ye,Pe],name:"confirmPassword",id:"confirmPassword",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:s,setType:o,className:"StyledPasswordInput"}))),e.error?r.a.createElement("span",{className:ae.a.Error},e.error):null,r.a.createElement("div",null,r.a.createElement("button",{className:Ue.a.CreateUserButton,disabled:e.isSubmitting},"CreateUser")))})),Ie=Object(D.e)((function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),s=n[0],o=n[1];return r.a.createElement(Ne,{onSubmit:function(t){var n=t.username,a=t.last_name,r=t.first_name,s=t.password;e.createNewUser({username:n,last_name:a,first_name:r,password:s,is_active:!0}).then((function(t){o(!1),void 0===t&&e.history.push("/Users")}))},setSubmitting:o,isSubmitting:s})})),Ce=Object(F.d)(Q,H)((function(e){return r.a.createElement("div",{className:Ue.a.CreateUser},r.a.createElement(G,null),r.a.createElement(Ie,{createNewUser:e.createNewUser}),r.a.createElement(A.b,{to:"/Users"},r.a.createElement("button",{className:Ue.a.ToUsersButton},"Back to Users")))})),Ae=Object(N.b)(null,{createNewUser:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e,t);case 2:if(201!==(r=n.sent).code){n.next=7;break}a(y(r.data)),n.next=11;break;case 7:if(400!==r.status){n.next=11;break}return s=Object.values(r.data)[0][0],a(Object(S.a)("createUser",{_error:s})),n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ce),Te=n(29),xe=n.n(Te),Be=function(e){if(!e)return"This field is required"},Fe=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},De=function(e){if(!/^[\w.@+-]+$/.test(e))return"Entered incorrect data."},Re=function(e){if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(e))return"Entered incorrect data."},He=Fe(150),We=Fe(128),ze=Object(te.a)({form:"login"})((function(e){var t=Object(a.useState)("password"),n=Object(c.a)(t,2),s=n[0],o=n[1];return r.a.createElement("form",{onSubmit:e.handleSubmit,className:xe.a.LoginForm},r.a.createElement("div",{className:xe.a.LoginInputWrapper},r.a.createElement(ee.a,{component:re,validate:[Be,De,He],name:"username",placeholder:"Login",className:"StyledInput"})),r.a.createElement("div",{className:xe.a.LoginInputWrapper},r.a.createElement(ee.a,{component:se,name:"password",placeholder:"Password",validate:[Be,Re,We],type:s,setType:o,className:"StyledPasswordInput"})),r.a.createElement("div",{className:xe.a.LoginInputWrapper},r.a.createElement("label",null,"Remember me:",r.a.createElement(ee.a,{name:"remember_me",component:"input",type:"checkbox"}))),e.error?r.a.createElement("span",{className:ae.a.Error},e.error):null,r.a.createElement("div",null,r.a.createElement("button",{disabled:e.isSubmitting,className:xe.a.LoginSubmitButton},"\u0412\u043e\u0439\u0442\u0438 \u0432 IT")))})),$e=Object(F.d)(D.e,Object(N.b)(null,{login:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(a){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v(e,t);case 2:if(400!==(r=n.sent)){n.next=7;break}a(Object(S.a)("login",{_error:"Incorrect Username/Password"})),n.next=9;break;case 7:if(200!==r.status){n.next=9;break}return n.abrupt("return",a(q(r.data.token)));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))((function(e){var t=e.login,n=e.history,s=Object(a.useState)(!1),o=Object(c.a)(s,2),u=o[0],i=o[1];return r.a.createElement("div",{className:xe.a.Login},r.a.createElement("h1",{className:xe.a.LoginHeading},"Login"),r.a.createElement(ze,{onSubmit:function(e){i(!0);var a=e.username,r=e.password,s=e.remember_me;t(a,r).finally((function(e){i(!1)})).then((function(e){s&&localStorage.setItem("token",e.token),n.push("/Users")}))},setSubmitting:i,isSubmitting:u}))})),qe=Object(D.e)(Object(N.b)((function(e){return{token:e.auth.token,isAuth:e.auth.isAuth,lastPath:e.auth.lastPath}}),{initializeApp:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("token")&&t(q(localStorage.getItem("token")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.initializeApp,n=e.isAuth,s=e.history,o=(e.lastPath,r.a.useState(!0)),u=Object(c.a)(o,2),l=u[0];return function(e,t){Object(a.useEffect)((function(){e().then((function(){return t(!1)}))}),[])}(t,u[1]),function(e,t,n){Object(a.useEffect)((function(){e?localStorage.getItem("lastPath")?t.push(localStorage.getItem("lastPath")):t.push("/Users"):t.push("/Login")}),[e])}(n,s),r.a.createElement("div",{className:i.a.App},l?r.a.createElement("div",null,"...Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{exact:!0,path:"/Users",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(D.a,{path:"/Profile/:userId",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(D.a,{path:"/Users/create",render:function(){return r.a.createElement(Ae,null)}}),r.a.createElement(D.a,{path:"/Login",render:function(){return r.a.createElement($e,null)}})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=n(123),Ve=n(128),Xe=Object(F.c)({form:Me.a,users:k,profile:J,auth:M}),Ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,Je=Object(F.e)(Xe,Ze(Object(F.a)(Ve.a)));o.a.render(r.a.createElement(A.a,{basename:"/TestTask"},r.a.createElement(N.a,{store:Je},r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={Login:"Login_Login__3D9nx",LoginForm:"Login_LoginForm__1rfyv",LoginHeading:"Login_LoginHeading__3PcH-",LoginInputWrapper:"Login_LoginInputWrapper__18XQ0",LoginSubmitButton:"Login_LoginSubmitButton__2m5nm"}},43:function(e,t,n){e.exports={CreateUser:"CreateUser_CreateUser__1LAUi",CreateUserForm:"CreateUser_CreateUserForm__JdyJx",ToUsersButton:"CreateUser_ToUsersButton__3Svu4",CreateUserButton:"CreateUser_CreateUserButton__3u8at"}},84:function(e,t,n){e.exports={App:"App_App__Vlopc"}},88:function(e,t,n){e.exports={Logout:"Logout_Logout__28q4D",LogoutButton:"Logout_LogoutButton__23O3e"}}},[[155,1,2]]]);
//# sourceMappingURL=main.24171e41.chunk.js.map