(window.webpackJsonp=window.webpackJsonp||[]).push([[69,23],{294:function(e,t,r){"use strict";var n=r(3),o=r(95).find,c=r(147),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},318:function(e,t,r){"use strict";r(31),r(54);t.a={methods:{addEllipsis:function(e,t){return e.length>t?e.substring(0,t-3)+"...":e},convertToFloat:function(e){return parseFloat(e.replace(/,/g,""))},compareAssetsPrices:function(e,t){return parseFloat(e)/parseFloat(t)},toDecimal:function(e){return e>=1&&e<=100?e/100:0},containsOnlyLetters:function(e){return/^[A-Za-z]+$/.test(e)}}}},357:function(e,t,r){"use strict";r(48),r(47),r(38),r(11),r(93),r(46),r(94);var n=r(39),o=(r(31),r(70)),c=r(318);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a={data:function(){return{firstname:null,lastname:null,email:null,phonenumber:null,password:null,confirmpassword:null,termscheckbox:!1,passwordInputTypeToText:!1,confirmpasswordInputTypeToText:!1,termscontenterror:!1,autherror:!1}},mixins:[c.a],computed:d(d({},Object(o.d)({assets:function(e){return e.list.assets},authError:function(e){return e.auth.authError}})),{},{assets:function(){return this.assets}}),methods:d(d(d({},Object(o.b)("list",["getassets"])),Object(o.c)("auth",["SET_AUTH_ERROR"])),{},{closeAuthError:function(){var e=this.SET_AUTH_ERROR;this.autherror=!1,e(!1)},routeToAuthPage:function(e){this.$router.push("/".concat(e))},validateEmail:function(e){return/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(e)},toggleInputType:function(input){"password"===input&&(this.passwordInputTypeToText?this.passwordInputTypeToText=!1:this.passwordInputTypeToText=!0),"confirmpassword"===input&&(this.confirmpasswordInputTypeToText?this.confirmpasswordInputTypeToText=!1:this.confirmpasswordInputTypeToText=!0)}}),mounted:function(){this.getassets()}}},367:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iODAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMCAwaDI0djI0aC0yNHoiIGZpbGw9IiNmZmYiLz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjIiLz48cGF0aCBkPSJtMTIgNy41Yy00LjMwNDgzIDAtNy41MjM4MyAzLjU4MzMtOC42MDUyNyA0Ljk2NTMtLjI0ODc4LjMxNzktLjI0ODc4Ljc1MTUgMCAxLjA2OTQgMS4wODE0NCAxLjM4MiA0LjMwMDQ0IDQuOTY1MyA4LjYwNTI3IDQuOTY1MyA0LjMwNDggMCA3LjUyMzgtMy41ODMzIDguNjA1My00Ljk2NTMuMjQ4OC0uMzE3OS4yNDg4LS43NTE1IDAtMS4wNjk0LTEuMDgxNS0xLjM4Mi00LjMwMDUtNC45NjUzLTguNjA1My00Ljk2NTN6IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg=="},538:function(e,t,r){"use strict";r.r(t);r(71),r(73),r(48),r(47),r(38),r(93),r(46),r(94);var n=r(39),o=(r(294),r(11),r(31),r(210),r(357)),c=r(70);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={data:function(){return{view:"nameview",loading:!1}},mixins:[o.a],computed:d(d({},Object(c.d)({assets:function(e){return e.list.assets}})),{},{bitcoinAssetId:function(){var e=this.assets;return e.length?e.find((function(e){return"BTC"===e.coin}))._id:null},authErrorText:function(){return"looks like a user with your email or phonenumber already exists"}}),methods:d(d({},Object(c.b)("auth",["checkDuplicate","signup"])),{},{containsOnlyPhoneNumber:function(e){return/^\+?\d{1,3}?[-\s.]?\(?\d{2,3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/.test(e)},previoustonameview:function(){this.view="nameview"},toggleView:function(){var e=this;if("nameview"===this.view)return this.firstname&&this.firstname.length?(this.$refs.firstname.classList.remove("error"),this.lastname&&this.lastname.length?(this.$refs.lastname.classList.remove("error"),this.view="emailPhoneView"):void this.$refs.lastname.classList.add("error")):void this.$refs.firstname.classList.add("error");if("emailPhoneView"===this.view){if(!this.email||!this.phonenumber||!this.termscheckbox)return this.email||this.$refs.email.classList.add("error"),this.phonenumber||this.$refs.phonenumber.classList.add("error"),this.validateEmail(this.email)||this.$refs.email.classList.add("error"),void(this.termscheckbox||(this.termscontenterror="Please make sure to check the 'Agree to Terms of Service' and 'Privacy' box before proceeding"));if(!this.validateEmail(this.email))return void this.$refs.email.classList.add("error");var t=this.email,r=this.phonenumber,n=this.checkDuplicate,o={email:t,phonenumber:r};this.loading=!0,n(o).then((function(){e.autherror=!1,e.loading=!1,e.view="passwordView"})).catch((function(){e.loading=!1,e.autherror=!0,e.$refs.phonenumber.classList.add("error"),e.$refs.email.classList.add("error")}))}else this.view="emailPhoneView"},checkpasswords:function(){var e=this;if(!this.password||!this.confirmpassword)return this.password||this.$refs.password.classList.add("error"),void(this.confirmpassword||this.$refs.confirmpassword.classList.add("error"));if(this.password!==this.confirmpassword)return this.$refs.password.classList.add("error"),void this.$refs.confirmpassword.classList.add("error");if(!this.termscheckbox)return this.termscontenterror="Please make sure to check the 'Agree to Terms of Service' box before proceeding";var t={firstname:this.firstname,lastname:this.lastname,email:this.email,phonenumber:this.phonenumber,password:this.password};this.signup(t).then((function(){e.$router.push("/overview")})).catch((function(e){console.log(e)}))}}),watch:{firstname:function(e,t){return this.firstname.length&&this.firstname&&this.containsOnlyLetters(this.firstname.trim())?void this.$refs.firstname.classList.remove("error"):this.$refs.firstname.classList.add("error")},lastname:function(e,t){return this.lastname.length&&this.lastname&&this.containsOnlyLetters(e.trim())?void this.$refs.lastname.classList.remove("error"):this.$refs.lastname.classList.add("error")},email:function(e,t){this.validateEmail(e)?this.$refs.email.classList.remove("error"):this.$refs.email.classList.add("error")},phonenumber:function(e,t){return this.containsOnlyPhoneNumber(e)?this.containsOnlyPhoneNumber(e)?this.$refs.phonenumber.classList.remove("error"):void(e&&this.$refs.phonenumber.classList.remove("error")):this.$refs.phonenumber.classList.add("error")},password:function(e,t){e!==this.confirmpassword?(this.$refs.password.classList.add("error"),this.$refs.confirmpassword.classList.add("error")):e===this.confirmpassword&&(this.$refs.password.classList.remove("error"),this.$refs.confirmpassword.classList.remove("error"))},confirmpassword:function(e,t){e!==this.password?(this.$refs.password.classList.add("error"),this.$refs.confirmpassword.classList.add("error")):e===this.password&&(this.$refs.password.classList.remove("error"),this.$refs.confirmpassword.classList.remove("error"))},termscheckbox:function(e,t){this.termscontenterror=!0===e?null:"Please make sure to check the 'Agree to Terms of Service' box before proceeding"}}},h=r(53),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"header auth",attrs:{id:"header"}},[t("div",{staticClass:"header__left"},[t("div",{staticClass:"header__logo",on:{click:function(t){return e.$router.push("/")}}},[t("figure"),e._v(" "),t("p",[e._v("BVX")])])])]),e._v(" "),e.authError&&e.autherror?t("div",[t("ErrorPopup",{attrs:{error:e.authErrorText,close:e.closeAuthError}})],1):e._e(),e._v(" "),t("div",{staticClass:"auth"},[t("div",{staticClass:"content"},[t("div",{staticClass:"content__body"},[e.bitcoinAssetId?t("div",{staticClass:"container auth__container"},[t("h1",{staticClass:"auth__h1"},[e._v("Create Account")]),e._v(" "),"nameview"===e.view?t("div",{key:"name-view"},[t("div",{staticClass:"auth__inputarea"},[e._m(0),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],ref:"firstname",domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"auth__inputarea"},[e._m(1),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],ref:"lastname",domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}})])])]):e._e(),e._v(" "),"emailPhoneView"===e.view?t("div",{key:"email-phone-view"},[t("div",{staticClass:"auth__inputarea"},[e._m(2),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"email",domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"auth__inputarea"},[e._m(3),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.phonenumber,expression:"phonenumber"}],ref:"phonenumber",domProps:{value:e.phonenumber},on:{input:function(t){t.target.composing||(e.phonenumber=t.target.value)}}})])])]):e._e(),e._v(" "),"passwordView"===e.view?t("div",{key:"password-view"},[t("div",{staticClass:"auth__inputarea"},[e._m(4),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("img",{attrs:{src:r(367)},on:{click:function(t){return e.toggleInputType("password")}}}),e._v(" "),"checkbox"==(e.passwordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var r=e.password,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.password=r.concat([null])):c>-1&&(e.password=r.slice(0,c).concat(r.slice(c+1)))}else e.password=o}}}):"radio"==(e.passwordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:e.passwordInputTypeToText?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"auth__inputarea"},[e._m(5),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("img",{attrs:{src:r(367)},on:{click:function(t){return e.toggleInputType("confirmpassword")}}}),e._v(" "),"checkbox"==(e.confirmpasswordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],ref:"confirmpassword",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.confirmpassword)?e._i(e.confirmpassword,null)>-1:e.confirmpassword},on:{change:function(t){var r=e.confirmpassword,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.confirmpassword=r.concat([null])):c>-1&&(e.confirmpassword=r.slice(0,c).concat(r.slice(c+1)))}else e.confirmpassword=o}}}):"radio"==(e.confirmpasswordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],ref:"confirmpassword",attrs:{type:"radio"},domProps:{checked:e._q(e.confirmpassword,null)},on:{change:function(t){e.confirmpassword=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],ref:"confirmpassword",attrs:{type:e.confirmpasswordInputTypeToText?"text":"password"},domProps:{value:e.confirmpassword},on:{input:function(t){t.target.composing||(e.confirmpassword=t.target.value)}}})])])]):e._e(),e._v(" "),t("div",{staticClass:"auth__terms"},[t("div",{staticClass:"auth__termsarea"},[t("div",{staticClass:"auth__checkboxarea"},[t("div",{staticClass:"auth__checkboxarea--checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.termscheckbox,expression:"termscheckbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.termscheckbox)?e._i(e.termscheckbox,null)>-1:e.termscheckbox},on:{change:function(t){var r=e.termscheckbox,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.termscheckbox=r.concat([null])):c>-1&&(e.termscheckbox=r.slice(0,c).concat(r.slice(c+1)))}else e.termscheckbox=o}}})])]),e._v(" "),t("div",{staticClass:"auth__termsdescription"},[t("p",{staticClass:"auth__termsdescription--p"},[e._v("\n                  By creating an account, I agree to Binance's\n                  "),t("span",{staticClass:"highlight",on:{click:function(t){return e.$router.push("/terms")}}},[e._v("Terms of Service")]),e._v("\n                  and\n                  "),t("span",{staticClass:"highlight",on:{click:function(t){return e.$router.push("/privacy")}}},[e._v("Privacy Policy")]),e._v(".\n                ")])])]),e._v(" "),e.termscontenterror?t("div",{staticClass:"auth__termsdescription--error"},[t("p",[e._v(e._s(e.termscontenterror))])]):e._e()]),e._v(" "),"emailPhoneView"===e.view?t("div",{staticClass:"auth__inputarea"},[t("button",{staticClass:"btn colored-btn padded-btn auth__btn greyed-btn",on:{click:e.previoustonameview}},[e._v("\n              Previous\n            ")])]):e._e(),e._v(" "),e.loading?e._e():t("div",{staticClass:"auth__inputarea flex flex-direction-column"},[t("button",{staticClass:"btn colored-btn padded-btn auth__btn",class:{"greyed-btn":"passwordView"===e.view},on:{click:e.toggleView}},[e._v("\n              "+e._s("emailPhoneView"===this.view||"nameview"===this.view?"Next":"Previous")+"\n            ")])]),e._v(" "),e.loading?t("div",{staticClass:"auth__inputarea"},[e._m(6)]):e._e(),e._v(" "),"passwordView"!==e.view||e.loading?e._e():t("div",{staticClass:"auth__inputarea",on:{click:e.checkpasswords}},[t("button",{staticClass:"btn colored-btn padded-btn auth__btn"},[e._v("Sign Up")])]),e._v(" "),t("div",{staticClass:"auth__termsdescription"},[t("p",{staticClass:"auth__termsdescription--p"},[e._v("\n              Already have an account?\n              "),t("span",{staticClass:"highlight",on:{click:function(t){return e.routeToAuthPage("login")}}},[e._v("Login")])])])]):e._e()])])])])}),[function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("First Name")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Last Name")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Email")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Phone Number")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Password")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Confirm Password")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this._self._c;return e("button",{staticClass:"btn colored-btn padded-btn auth__btn"},[e("span",{staticClass:"loader-button"})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ErrorPopup:r(386).default})}}]);