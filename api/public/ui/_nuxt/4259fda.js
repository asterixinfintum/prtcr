(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{317:function(t,e,n){"use strict";n(31),n(54);e.a={props:["subject","backFunction","closeFunction"],data:function(){return{opacity:!0,numberInput:"",confirmTrade:!1}},methods:{validateNumberInput:function(){var t=this.numberInput.replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");this.numberInput=t},toggleconfirmTrade:function(){this.confirmTrade?this.confirmTrade=!1:this.confirmTrade=!0}}}},442:function(t,e,n){"use strict";n.r(e);var c={props:["toggleOfferCard","toggledepositor"],mixins:[n(317).a]},r=n(53),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup"},[e("div",{staticClass:"transactionstyle"},[e("div",{staticClass:"popup__body transactionstyle__body"},[e("div",{staticClass:"transactionstyle__subject"},[e("div",{staticClass:"transactionstyle__subject--backbtn",on:{click:t.toggleOfferCard}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"transactionstyle__subject--closebtn",on:{click:t.toggledepositor}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}})])])]),t._v(" "),e("div",{staticClass:"transactionstyle__container"},[t._m(1),t._v(" "),e("h3",{staticClass:"transactionstyle__amounttodep"},[t._v("\n                    Amount to Deposit\n                ")]),t._v(" "),e("div",{staticClass:"transactionstyle__inputbox"},[e("div",{staticClass:"transactionstyle__inputboxarea"},[t._m(2),t._v(" "),e("div",{staticClass:"transactionstyle__inputboxarea--section flex-direction-column flex-end-column"},[e("div",{staticClass:"transactionstyle__inputboxarea--inputsection"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.numberInput,expression:"numberInput"}],attrs:{placeholder:"Enter Amount"},domProps:{value:t.numberInput},on:{input:[function(e){e.target.composing||(t.numberInput=e.target.value)},t.validateNumberInput]}}),t._v(" "),e("span")]),t._v(" "),e("span",{staticClass:"amounttobuyinusd"},[t._v("≈ $0.00")])])]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"transactionstyle__btn"},[e("button",{staticClass:"btn colored-btn padded-btn",class:{opacity:t.opacity}},[t._v("Withdraw")])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"transactionstyle__subject--name"},[t("h3",[this._v("Deposit Into USDC Vault")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"transactionstyle__info"},[e("div",{staticClass:"transactionstyle__info--header"},[e("span",[t._v("Deposit Info")])]),t._v(" "),e("div",{staticClass:"transactionstyle__info--text"},[e("p",[t._v("Enter the amount of USDC you would like to deposit.")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"transactionstyle__inputboxarea--section center-align reserveasset-label-area"},[e("figure",{staticClass:"reserveassetlogo"},[e("img",{attrs:{src:"https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}})]),t._v(" "),e("span",{staticClass:"reserveassetlabel"},[t._v("USDT")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"transactionstyle__inputboxarea center-align"},[e("div",{staticClass:"transactionstyle__inputboxarea--section flex-direction-column"},[e("span",{staticClass:"balance"},[t._v("Balance USDT")]),t._v(" "),e("span",{staticClass:"balance-figure"},[t._v("$0")])]),t._v(" "),e("div",{staticClass:"transactionstyle__inputboxarea--section"},[e("span",{staticClass:"percentpill"},[t._v("25%")]),t._v(" "),e("span",{staticClass:"percentpill"},[t._v("50%")]),t._v(" "),e("span",{staticClass:"percentpill"},[t._v("75%")]),t._v(" "),e("span",{staticClass:"percentpill"},[t._v("Max")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"transactionstyle__returns"},[e("div",{staticClass:"transactionstyle__returns--area"},[e("span",[t._v("Estimated Yearly Returns*")]),t._v(" "),e("span",{staticClass:"green"},[t._v("@ 18.16% APY")])]),t._v(" "),e("div",{staticClass:"transactionstyle__returns--area"},[e("span",[t._v("$0.00")]),t._v(" "),e("figure",{staticClass:"reserveassetlogo"},[e("img",{attrs:{src:"https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}})])])])}],!1,null,null,null);e.default=component.exports}}]);