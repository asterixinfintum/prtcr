(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{561:function(e,t,o){"use strict";o.r(t);o(56),o(72);var r={props:["strategies","subStrategies","toggleSubStrategies","shortTermMovingAveragePeriod","shortTermMovingAveragePeriodTrackWidth","shortTermMovingAveragePeriodThumbPos","longTermMovingAveragePeriod","longTermMovingAveragePeriodTrackWidth","longTermMovingAveragePeriodThumbPos"]},n=o(53),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"autotradesettings__suboptions"},[t("div",{staticClass:"autotradesettings__option sub"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Moving Average Crossovers")]),e._v(" "),t("div",{staticClass:"toggle-switch off",class:{on:e.subStrategies.includes("Moving Average Crossovers")},on:{click:function(t){return e.toggleSubStrategies("Moving Average Crossovers")}}},[t("span",{staticClass:"toggle-switch-button",class:{off:!e.subStrategies.includes("Moving Average Crossovers"),on:e.subStrategies.includes("Moving Average Crossovers")}})])]),e._v(" "),e.subStrategies.includes("Moving Average Crossovers")?t("div",[t("div",{staticClass:"autotradesettings__optioncontainer"},[t("div",{staticClass:"autotradesettings__option sub-option"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Short-term moving average\n                        period")]),e._v(" "),t("div",{staticClass:"autotradesettings__option--inputarea"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.shortTermMovingAveragePeriod,expression:"shortTermMovingAveragePeriod"}],attrs:{type:"number"},domProps:{value:e.shortTermMovingAveragePeriod},on:{input:function(t){t.target.composing||(e.shortTermMovingAveragePeriod=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__sliderbody"},[t("div",{staticClass:"autotradesettings__slidercontainer"},[t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__slidertrack",style:{width:e.shortTermMovingAveragePeriodTrackWidth+"%"}}),e._v(" "),t("div",{staticClass:"autotradesettings__sliderthumb",style:{left:e.shortTermMovingAveragePeriodThumbPos}})]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.shortTermMovingAveragePeriod,expression:"shortTermMovingAveragePeriod"}],staticClass:"autotradesettings__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.shortTermMovingAveragePeriod},on:{__r:function(t){e.shortTermMovingAveragePeriod=t.target.value}}})])])])]),e._v(" "),t("div",{staticClass:"autotradesettings__optioncontainer"},[t("div",{staticClass:"autotradesettings__option sub-option"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Long-term moving average\n                        period")]),e._v(" "),t("div",{staticClass:"autotradesettings__option--inputarea"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.longTermMovingAveragePeriod,expression:"longTermMovingAveragePeriod"}],attrs:{type:"number"},domProps:{value:e.longTermMovingAveragePeriod},on:{input:function(t){t.target.composing||(e.longTermMovingAveragePeriod=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__sliderbody"},[t("div",{staticClass:"autotradesettings__slidercontainer"},[t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__slidertrack",style:{width:e.longTermMovingAveragePeriodTrackWidth+"%"}}),e._v(" "),t("div",{staticClass:"autotradesettings__sliderthumb",style:{left:e.longTermMovingAveragePeriodThumbPos}})]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.longTermMovingAveragePeriod,expression:"longTermMovingAveragePeriod"}],staticClass:"autotradesettings__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.longTermMovingAveragePeriod},on:{__r:function(t){e.longTermMovingAveragePeriod=t.target.value}}})])])])])]):e._e(),e._v(" "),t("div",{staticClass:"autotradesettings__option sub"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Channel Breakouts")]),e._v(" "),t("div",{staticClass:"toggle-switch off",class:{on:e.subStrategies.includes("Channel Breakouts")},on:{click:function(t){return e.toggleSubStrategies("Channel Breakouts")}}},[t("span",{staticClass:"toggle-switch-button",class:{off:!e.subStrategies.includes("Channel Breakouts"),on:e.subStrategies.includes("Channel Breakouts")}})])]),e._v(" "),e.subStrategies.includes("Channel Breakouts")?t("div",[t("div",{staticClass:"autotradesettings__optioncontainer"},[t("div",{staticClass:"autotradesettings__option sub-option"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Channel period")]),e._v(" "),t("div",{staticClass:"autotradesettings__option--inputarea"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.shortTermMovingAveragePeriod,expression:"shortTermMovingAveragePeriod"}],attrs:{type:"number"},domProps:{value:e.shortTermMovingAveragePeriod},on:{input:function(t){t.target.composing||(e.shortTermMovingAveragePeriod=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__sliderbody"},[t("div",{staticClass:"autotradesettings__slidercontainer"},[t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__slidertrack",style:{width:e.shortTermMovingAveragePeriodTrackWidth+"%"}}),e._v(" "),t("div",{staticClass:"autotradesettings__sliderthumb",style:{left:e.shortTermMovingAveragePeriodThumbPos}})]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.shortTermMovingAveragePeriod,expression:"shortTermMovingAveragePeriod"}],staticClass:"autotradesettings__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.shortTermMovingAveragePeriod},on:{__r:function(t){e.shortTermMovingAveragePeriod=t.target.value}}})])])])]),e._v(" "),t("div",{staticClass:"autotradesettings__optioncontainer"},[t("div",{staticClass:"autotradesettings__option sub-option"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Distance from channel for breakout confirmation")]),e._v(" "),t("div",{staticClass:"autotradesettings__option--inputarea"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.longTermMovingAveragePeriod,expression:"longTermMovingAveragePeriod"}],attrs:{type:"number"},domProps:{value:e.longTermMovingAveragePeriod},on:{input:function(t){t.target.composing||(e.longTermMovingAveragePeriod=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__sliderbody"},[t("div",{staticClass:"autotradesettings__slidercontainer"},[t("div",{staticClass:"autotradesettings__slider"},[t("div",{staticClass:"autotradesettings__slidertrack",style:{width:e.longTermMovingAveragePeriodTrackWidth+"%"}}),e._v(" "),t("div",{staticClass:"autotradesettings__sliderthumb",style:{left:e.longTermMovingAveragePeriodThumbPos}})]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.longTermMovingAveragePeriod,expression:"longTermMovingAveragePeriod"}],staticClass:"autotradesettings__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:e.longTermMovingAveragePeriod},on:{__r:function(t){e.longTermMovingAveragePeriod=t.target.value}}})])])])])]):e._e(),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"autotradesettings__option sub"},[t("label",{staticClass:"autotradesettings__option--label"},[e._v("Momentum Indicators")]),e._v(" "),t("div",{staticClass:"toggle-switch off"},[t("span",{staticClass:"toggle-switch-button off"})])])}],!1,null,null,null);t.default=component.exports}}]);