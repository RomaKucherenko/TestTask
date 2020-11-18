/*! For license information please see main.67a9c23a.chunk.js.LICENSE.txt */
(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{15:function(e,t,n){e.exports={Error:"FormControls_Error__3WPFQ",ErrorSpan:"FormControls_ErrorSpan__6w8dm",Input:"FormControls_Input__2d90D",LoginInput:"FormControls_LoginInput__27ZRW",StyledPasswordInput:"FormControls_StyledPasswordInput__3_Lf3",StyledInput:"FormControls_StyledInput__3mWtX",ShowLabel:"FormControls_ShowLabel__3oguU"}},155:function(e,t,n){e.exports=n(280)},160:function(e,t,n){},21:function(e,t,n){e.exports={Users:"Users_Users__1v7m0",Header:"Users_Header__KwosV",User:"Users_User__2_MfI",UsersFilterInput:"Users_UsersFilterInput__U_EX7",UsersHeader:"Users_UsersHeader__1ARBg",DeleteActionSpan:"Users_DeleteActionSpan__14t_e",SortById:"Users_SortById__3GdX2",ByDown:"Users_ByDown__2iye3",ByUp:"Users_ByUp__3FAgj",CreateNewUserLink:"Users_CreateNewUserLink__GrGV1"}},28:function(e,t,n){e.exports={Profile:"Profile_Profile__3NmHj",ProfileSubmitButton:"Profile_ProfileSubmitButton__2nFCi",ProfileCancelButton:"Profile_ProfileCancelButton__1PMMu",ProfileInfo:"Profile_ProfileInfo__1Ox-h",ToUsersButton:"Profile_ToUsersButton__2Iwd2",EditButton:"Profile_EditButton__2yeXx",EditProfileForm:"Profile_EditProfileForm__1Pe3A"}},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(63),o=n.n(s),c=(n(160),n(11)),u=n(83),i=n.n(u),l=n(51),m=n(12),f=n.n(m),d=n(27),p=n(43),_=n(13),E=n(124).create({baseURL:"https://emphasoft-test-assignment.herokuapp.com/"}),b=function(e,t){return E.post("api-token-auth/",{username:e,password:t}).then((function(e){return e}),(function(e){return e.response.status}))},v=function(e){return E.get("/api/v1/users/",{headers:{authorization:"Token ".concat(e)}}).then((function(e){return e}))},h=function(e,t){return E.get("/api/v1/users/".concat(e),{headers:{authorization:"Token ".concat(t)}}).then((function(e){return e}))},U=function(e,t){return E.post("/api/v1/users/",e,{headers:{authorization:"Token ".concat(t)}}).then((function(e){return e}),(function(e){return e.response}))},g=function(e,t,n){return E.patch("/api/v1/users/".concat(t,"/"),JSON.stringify(e),{headers:{authorization:"Token ".concat(n),"Content-Type":"application/json"}}).then((function(e){return e}),(function(e){return e.response}))},O=function(e,t){return E.delete("/api/v1/users/".concat(e,"/"),{headers:{authorization:"Token ".concat(t),"Content-Type":"application/json"}}).then((function(e){return e}),(function(e){return e.response}))},S=n(26),j=function(e,t){return e.forEach((function(n,a){n.id===t&&e.splice(a,1)})),e.map((function(e){return e}))},w={users:[]},L=function(e){return{type:"DELETE_USER",userId:e}},y=function(e){return{type:"ADD_NEW_USER",userData:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(_.a)(Object(_.a)({},e),{},{users:Object(p.a)(t.users)});case"ADD_NEW_USER":return Object(_.a)(Object(_.a)({},e),{},{users:[].concat(Object(p.a)(e.users),[t.userData])});case"DELETE_USER":return Object(_.a)(Object(_.a)({},e),{},{users:j(e.users,t.userId)});case"NULL_USERS_DATA":return{users:[]};default:return e}},k=n(9),P=n(21),I=n.n(P),C=n(16),T=Object(k.b)((function(e){return{token:e.auth.token}}),{deleteUser:function(e,t){return function(){var n=Object(d.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(e,t);case 2:204===n.sent.status&&a(L(e));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.username,n=e.first_name,a=e.last_name,s=e.id,o=e.token,c=e.deleteUser;return r.a.createElement("div",{className:I.a.User},r.a.createElement("div",null,s),r.a.createElement("div",null,t),r.a.createElement("div",null,n),r.a.createElement("div",null,a),r.a.createElement("div",null,r.a.createElement(C.b,{to:"/Profile/"+s},"ViewProfile")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){window.confirm("\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f?")&&c(s,o)},className:I.a.DeleteActionSpan},"Delete")))})),x=n(126),A=n.n(x),B=n(6),F=n(10),D=function(e){return{token:e.auth.token}},R=function(e){return Object(k.b)(D)(Object(F.e)((function(t){return t.token||t.history.push("/Login"),r.a.createElement(e,t)})))},H=n(87),W=n.n(H),z={token:null},$=function(e){return{type:"SET_AUTH_DATA",token:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_DATA":return Object(_.a)(Object(_.a)({},e),{},{token:t.token});case"NULL_AUTH_DATA":return localStorage.removeItem("token"),{token:null};default:return e}},M={userProfile:null},V=function(e){return{type:"SET_USER_PROFILE",userProfile:e}},X=function(){return{type:"NULL_PROFILE"}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PROFILE":return Object(_.a)(Object(_.a)({},e),{},{userProfile:Object(_.a)({},t.userProfile)});case"UPDATE_USER":return Object(_.a)(Object(_.a)({},e),{},{userProfile:Object(_.a)({},t.userData)});case"NULL_PROFILE":return{userProfile:null};default:return e}};var J=Object(F.e)(Object(k.b)(null,(function(e){return{logout:function(){e({type:"NULL_USERS_DATA"}),e({type:"NULL_AUTH_DATA"}),e({type:"NULL_PROFILE"})}}}))((function(e){return r.a.createElement("div",{className:W.a.Logout},r.a.createElement("button",{className:W.a.LogoutButton,onClick:function(){e.history.push("/Login"),e.logout()}},"Logout"))}))),G=Object(B.d)(R)((function(e){var t,n=e.requestUsers,s=e.users,o=e.token,u=Object(a.useState)(s),i=Object(c.a)(u,2),m=i[0],f=i[1],d=Object(a.useState)(""),_=Object(c.a)(d,2),E=_[0],b=_[1],v=Object(a.useState)(null),h=Object(c.a)(v,2),U=h[0],g=h[1];!function(e,t){Object(a.useEffect)((function(){e(t)}),[])}(n,o),Object(a.useEffect)((function(){g(null)}),[s,E]),Object(a.useEffect)((function(){f(s)}),[s]);var O=m.map((function(e){return r.a.createElement(T,{id:e.id,username:e.username,first_name:e.first_name,last_name:e.last_name})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement("div",{className:I.a.UsersHeader},r.a.createElement("input",{value:E,onChange:function(e){b(e.target.value),f(function(e,t){return e.filter((function(e){return e.username.includes(t)}))}(s,e.target.value))},placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c Username",className:I.a.UsersFilterInput}),r.a.createElement("div",{className:A()(I.a.SortById,(t={},Object(l.a)(t,I.a.ByUp,!0===U),Object(l.a)(t,I.a.ByDown,!1===U),t)),onClick:function(){f(function(e,t){var n,a,r=function(e,t){return e.num-t.num},s=Object.values(e.reduce((function(e,t){var n=t.id;return n in e?e[n].push(t):e[n]=[t],e}),{})).map((function(e){return e.sort(r)})).sort((function(e,t){return e[0].num-t[0].num}));return t?(n=[]).concat.apply(n,Object(p.a)(s)):(a=[]).concat.apply(a,Object(p.a)(s)).reverse()}(m,U)),g(!U)}},"Sort By Id"),r.a.createElement(C.b,{to:"/Users/create",className:I.a.CreateNewUserLink},"Create new User")),r.a.createElement("div",{className:I.a.Users},r.a.createElement("div",{className:I.a.Header},r.a.createElement("div",{className:I.a.User},r.a.createElement("div",null,"Id"),r.a.createElement("div",null,"username"),r.a.createElement("div",null,"first_name"),r.a.createElement("div",null,"last_name"),r.a.createElement("div",null,"ViewProfile"),r.a.createElement("div",null,"Delete"))),O))})),Q=Object(k.b)((function(e){return{users:e.users.users,token:e.auth.token}}),{requestUsers:function(e){return function(){var t=Object(d.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:200===(a=t.sent).status&&n({type:"SET_USERS",users:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(G),K=n(121),Y=n(122),ee=n(90),te=n(15),ne=n.n(te),ae=function(e){var t=e.input,n=e.meta,a=Object(ee.a)(e,["input","meta"]),s=n.error&&n.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.className?ne.a[a.className]:ne.a.Input},r.a.createElement("input",Object.assign({},t,a,{className:s?ne.a.Error:""}))),s&&r.a.createElement("div",null,r.a.createElement("span",{className:ne.a.ErrorSpan},n.error)))},re=function(e){var t=e.input,n=e.meta,a=Object(ee.a)(e,["input","meta"]),s=n.error&&n.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.className?ne.a[a.className]:ne.a.Input},r.a.createElement("input",Object.assign({},t,a,{className:s?ne.a.Error:""})),r.a.createElement("span",{onClick:function(){a.setType("password"===a.type?"text":"password")},className:ne.a.ShowLabel},"Show")),s&&r.a.createElement("div",null,r.a.createElement("span",{className:ne.a.ErrorSpan},n.error)))},se=function(e){if(!e)return"This field is required"},oe=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ce=function(e){if(!/^[\w.@+-]+$/.test(e))return"Entered incorrect data. Use only Letters, digits and @/./+/-/_ "},ue=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430."},ie=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430."},le=n(129),me=n(28),fe=n.n(me),de=oe(150),pe=oe(30),_e=Object(B.d)(Object(k.b)((function(e){return{initialValues:{username:e.profile.userProfile.username,first_name:e.profile.userProfile.first_name,last_name:e.profile.userProfile.last_name,is_active:e.profile.userProfile.is_active}}}),{}),Object(Y.a)({form:"editProfile"}))((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:fe.a.EditProfileForm},r.a.createElement("label",null,"Username:",r.a.createElement(K.a,{component:ae,validate:[se,ce],name:"username",placeholder:"Username"})),r.a.createElement("label",null,"\u0418\u043c\u044f:",r.a.createElement(K.a,{component:ae,validate:[se,pe,ue],name:"first_name",placeholder:"\u0418\u043c\u044f"})),r.a.createElement("label",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",r.a.createElement(K.a,{component:ae,validate:[se,de,ie],name:"last_name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"})),r.a.createElement("label",null,"is_active:",r.a.createElement(K.a,{name:"is_active",component:"input",type:"checkbox"}))),e.error?r.a.createElement("span",{className:ne.a.Error},e.error):null,r.a.createElement("div",null,r.a.createElement("button",{disabled:e.isSubmitting,className:fe.a.ProfileSubmitButton},"Save Changes"),r.a.createElement("button",{className:fe.a.ProfileCancelButton,onClick:function(t){t.preventDefault(),e.onCancelClick()}},"CANCEL")))})),Ee=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),s=n[0],o=n[1];return r.a.createElement(_e,{onSubmit:function(t){o(!0);var n=e.userProfile,a=n.username,r=n.first_name,s=n.last_name,c=n.is_active;if(le.a({username:a,first_name:r,last_name:s,is_active:c},t))o(!1),e.onSuccess();else{var u=function(e,t){var n=new Map;for(var a in e)for(var r in t)e[a]!==t[r]&&a===r&&n.set(a,e[a]);return Object.fromEntries(n)}(t,{username:a,first_name:r,last_name:s,is_active:c});e.updateUser(u,e.userId,e.token).then((function(t){o(!1),void 0===t&&e.onSuccess()}))}},isSubmitting:s,onCancelClick:e.onCancelClick})},be=Object(B.d)(R,F.e,Object(k.b)((function(e){return{userProfile:e.profile.userProfile,token:e.auth.token}}),{requestUserProfile:function(e,t){return function(){var n=Object(d.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h(e,t);case 2:200===(r=n.sent).status&&a(V(r.data));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},updateUser:function(e,t,n){return function(){var a=Object(d.a)(f.a.mark((function a(r){var s,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e,t,n);case 2:if(200!==(s=a.sent).status){a.next=7;break}r(V(s.data)),a.next=11;break;case 7:if(400!==s.status){a.next=11;break}return o=Object.values(s.data)[0][0],r(Object(S.a)("editProfile",{_error:o})),a.abrupt("return",o);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},nullUserAction:X}))((function(e){var t=e.requestUserProfile,n=e.match,s=e.userProfile,o=e.updateUser,u=e.token,i=e.nullUserAction,l=Object(a.useState)(!1),m=Object(c.a)(l,2),f=m[0],d=m[1];return Object(a.useEffect)((function(){t(n.params.userId,u),i()}),[n.params.userId]),s?r.a.createElement("div",{className:fe.a.Profile},r.a.createElement(J,null),r.a.createElement("div",null,f?r.a.createElement(Ee,{userProfile:s,updateUser:o,onCancelClick:function(){d(!1)},onSuccess:function(){d(!1)},token:u,userId:n.params.userId}):r.a.createElement("div",{className:fe.a.ProfileInfo},r.a.createElement("div",null,"Username: ",s.username),r.a.createElement("div",null,"\u0418\u043c\u044f: ",s.first_name),r.a.createElement("div",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ",s.last_name),r.a.createElement("div",null,"is_active: ","".concat(s.is_active)),r.a.createElement("div",null,"is_superuser: ","".concat(s.is_superuser)),r.a.createElement("div",null,"last_login: ",s.last_login),r.a.createElement("button",{className:fe.a.EditButton,onClick:function(){return d(!0)}},"Edit"))),r.a.createElement(C.b,{to:"/Users"},r.a.createElement("button",{className:fe.a.ToUsersButton},"Back to Users"))):r.a.createElement("div",null,"...Loading...")})),ve=n(42),he=n.n(ve),Ue=function(e){if(!e)return"This field is required"},ge=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Oe=function(e){if(!/^[\w.@+-]+$/.test(e))return"Entered incorrect data. Use only Letters, digits and @/./+/-/_ "},Se=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b."},je=function(e){if(!/^[a-zA-Z]+$/.test(e))return"\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b."},we=function(e){if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(e))return"\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, 1 \u0446\u0438\u0444\u0440\u0430, 1 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f."},Le=function(e){var t={};return e.confirmPassword!==e.password&&(t.confirmPassword="Password mismatched"),t},ye=ge(150),Ne=ge(30),ke=Object(B.d)(Object(Y.a)({form:"createUser",validate:Le}))((function(e){var t=Object(a.useState)("password"),n=Object(c.a)(t,2),s=n[0],o=n[1],u=Object(a.useState)("password"),i=Object(c.a)(u,2),l=i[0],m=i[1];return r.a.createElement("form",{className:he.a.CreateUserForm,onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement(K.a,{component:ae,validate:[Ue,Oe,ye],name:"username",id:"username",placeholder:"Username",className:"StyledInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"first_name"},"\u0418\u043c\u044f:"),r.a.createElement(K.a,{component:ae,validate:[Ue,Ne,Se],name:"first_name",id:"first_name",placeholder:"\u0418\u043c\u044f",className:"StyledInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"last_name"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"),r.a.createElement(K.a,{component:ae,validate:[Ue,ye,je],name:"last_name",id:"last_name",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",className:"StyledInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement(K.a,{component:re,validate:[Ue,ye,we],name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",type:l,setType:m,className:"StyledPasswordInput"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"confirmPassword"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement(K.a,{component:re,validate:[Ue,ye,we],name:"confirmPassword",id:"confirmPassword",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:s,setType:o,className:"StyledPasswordInput"}))),e.error?r.a.createElement("span",{className:ne.a.Error},e.error):null,r.a.createElement("div",null,r.a.createElement("button",{className:he.a.CreateUserButton,disabled:e.isSubmitting},"CreateUser")))})),Pe=Object(F.e)((function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),s=n[0],o=n[1];return r.a.createElement(ke,{onSubmit:function(t){var n=t.username,a=t.last_name,r=t.first_name,s=t.password;e.createNewUser({username:n,last_name:a,first_name:r,password:s,is_active:!0}).then((function(t){o(!1),void 0===t&&e.history.push("/Users")}))},setSubmitting:o,isSubmitting:s})})),Ie=Object(B.d)(R)((function(e){return r.a.createElement("div",{className:he.a.CreateUser},r.a.createElement(J,null),r.a.createElement(Pe,{createNewUser:e.createNewUser}),r.a.createElement(C.b,{to:"/Users"},r.a.createElement("button",{className:he.a.ToUsersButton},"Back to Users")))})),Ce=Object(k.b)(null,{createNewUser:function(e,t){return function(){var n=Object(d.a)(f.a.mark((function n(a){var r,s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U(e,t);case 2:if(201!==(r=n.sent).code){n.next=7;break}a(y(r.data)),n.next=11;break;case 7:if(400!==r.status){n.next=11;break}return s=Object.values(r.data)[0][0],a(Object(S.a)("createUser",{_error:s})),n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ie),Te=n(29),xe=n.n(Te),Ae=function(e){if(!e)return"This field is required"},Be=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Fe=function(e){if(!/^[\w.@+-]+$/.test(e))return"Entered incorrect data."},De=function(e){if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(e))return"Entered incorrect data."},Re=Be(150),He=Be(128),We=Object(Y.a)({form:"login"})((function(e){var t=Object(a.useState)("password"),n=Object(c.a)(t,2),s=n[0],o=n[1];return r.a.createElement("form",{onSubmit:e.handleSubmit,className:xe.a.LoginForm},r.a.createElement("div",{className:xe.a.LoginInputWrapper},r.a.createElement(K.a,{component:ae,validate:[Ae,Fe,Re],name:"username",placeholder:"Login",className:"StyledInput"})),r.a.createElement("div",{className:xe.a.LoginInputWrapper},r.a.createElement(K.a,{component:re,name:"password",placeholder:"Password",validate:[Ae,De,He],type:s,setType:o,className:"StyledPasswordInput"})),r.a.createElement("div",{className:xe.a.LoginInputWrapper},r.a.createElement("label",null,"Remember me:",r.a.createElement(K.a,{name:"remember_me",component:"input",type:"checkbox"}))),e.error?r.a.createElement("span",{className:ne.a.Error},e.error):null,r.a.createElement("div",null,r.a.createElement("button",{disabled:e.isSubmitting,className:xe.a.LoginSubmitButton},"\u0412\u043e\u0439\u0442\u0438 \u0432 IT")))})),ze=Object(B.d)(F.e,Object(k.b)(null,{login:function(e,t){return function(){var n=Object(d.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e,t);case 2:if(400!==(r=n.sent)){n.next=7;break}a(Object(S.a)("login",{_error:"Incorrect Username/Password"})),n.next=9;break;case 7:if(200!==r.status){n.next=9;break}return n.abrupt("return",a($(r.data.token)));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))((function(e){var t=e.login,n=e.history,s=Object(a.useState)(!1),o=Object(c.a)(s,2),u=o[0],i=o[1];return r.a.createElement("div",{className:xe.a.Login},r.a.createElement("h1",{className:xe.a.LoginHeading},"Login"),r.a.createElement(We,{onSubmit:function(e){i(!0);var a=e.username,r=e.password,s=e.remember_me;t(a,r).finally((function(e){i(!1)})).then((function(e){s&&localStorage.setItem("token",e.token),n.push("/Users")}))},setSubmitting:i,isSubmitting:u}))})),$e=Object(k.b)((function(e){return{token:e.auth.token}}),{initializeApp:function(){return function(){var e=Object(d.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("token")&&t($(localStorage.getItem("token")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=r.a.useState(!0),n=Object(c.a)(t,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){e.initializeApp().then((function(){return o(!1)}))}),[]),r.a.createElement("div",{className:i.a.App},s?r.a.createElement("div",null,"...Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{exact:!0,path:"/Users",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(F.a,{path:"/Profile/:userId",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(F.a,{path:"/Users/create",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(F.a,{path:"/Login",render:function(){return r.a.createElement(ze,null)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=n(123),Me=n(128),Ve=Object(B.c)({form:qe.a,users:N,profile:Z,auth:q}),Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,Ze=Object(B.e)(Ve,Xe(Object(B.a)(Me.a)));o.a.render(r.a.createElement(C.a,null,r.a.createElement(k.a,{store:Ze},r.a.createElement($e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={Login:"Login_Login__3D9nx",LoginForm:"Login_LoginForm__1rfyv",LoginHeading:"Login_LoginHeading__3PcH-",LoginInputWrapper:"Login_LoginInputWrapper__18XQ0",LoginSubmitButton:"Login_LoginSubmitButton__2m5nm"}},42:function(e,t,n){e.exports={CreateUser:"CreateUser_CreateUser__1LAUi",CreateUserForm:"CreateUser_CreateUserForm__JdyJx",ToUsersButton:"CreateUser_ToUsersButton__3Svu4",CreateUserButton:"CreateUser_CreateUserButton__3u8at"}},83:function(e,t,n){e.exports={App:"App_App__Vlopc"}},87:function(e,t,n){e.exports={Logout:"Logout_Logout__28q4D",LogoutButton:"Logout_LogoutButton__23O3e"}}},[[155,1,2]]]);
//# sourceMappingURL=main.67a9c23a.chunk.js.map