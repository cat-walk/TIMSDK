require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([13],{KwLj:function(e,t){},TIXD:function(e,t,n){"use strict";var a=i(n("5nAL")),o=i(n("qy7V"));function i(e){return e&&e.__esModule?e:{default:e}}new a.default(o.default).$mount()},eiSl:function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"form-item"},[n("div",{staticClass:"label"},[e._v("群类型")]),e._v(" "),n("picker",{attrs:{range:e.range,"range-key":"name",value:e.selectedIndex,eventid:"0"},on:{change:e.choose}},[e._v("\n      "+e._s(e.range[e.selectedIndex].name)+"\n      "),n("i-icon",{attrs:{type:"enter",mpcomid:"0"}})],1)],1),e._v(" "),n("div",{staticClass:"form-item",class:{required:e.isAVChatRoom}},[n("div",{staticClass:"label"},[e._v("\n      群ID\n      "),e.isAVChatRoom?n("i-icon",{attrs:{type:"prompt",eventid:"1",mpcomid:"1"},on:{click:e.showInfo}}):e._e()],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.groupID,expression:"groupID"}],attrs:{placeholder:"请输入群ID",eventid:"2"},domProps:{value:e.groupID},on:{input:function(t){t.target.composing||(e.groupID=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-item name required"},[n("div",{staticClass:"label"},[e._v("\n      群名称\n    ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.groupName,expression:"groupName"}],attrs:{placeholder:"请输入群名称",eventid:"3"},domProps:{value:e.groupName},on:{input:function(t){t.target.composing||(e.groupName=t.target.value)}}})]),e._v(" "),n("button",{class:{"button-disabled":e.disabled},attrs:{"hover-class":"clicked",loading:e.loading,disabled:e.disabled,eventid:"4"},on:{click:e.handleClick}},[e._v("创建群组")])],1)},staticRenderFns:[]};t.a=a},qy7V:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("xNvV"),o=n.n(a),i=n("eiSl");var s=function(e){n("KwLj")},r=n("ybqe")(o.a,i.a,s,null,null);t.default=r.exports},xNvV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n("//Fk")),o=s(n("woOf")),i=s(n("Dd8w"));function s(e){return e&&e.__esModule?e:{default:e}}var r={selectedIndex:0,range:[{type:wx.TIM.TYPES.GRP_WORK,name:"好友工作群"},{type:wx.TIM.TYPES.GRP_PUBLIC,name:"陌生人社交群"},{type:wx.TIM.TYPES.GRP_MEETING,name:"临时会议群"},{type:wx.TIM.TYPES.GRP_AVCHATROOM,name:"直播群"}],groupName:"",groupID:"",loading:!1};t.default={data:function(){return(0,i.default)({},r)},onUnload:function(){(0,o.default)(this,r)},computed:{isAVChatRoom:function(){return this.range[this.selectedIndex].type===wx.TIM.TYPES.GRP_AVCHATROOM},disabled:function(){return""===this.groupName||!(!this.isAVChatRoom||""!==this.groupID)}},methods:{choose:function(e){this.selectedIndex=Number(e.mp.detail.value)},handleClick:function(){var e=this;this.loading=!0,wx.$app.createGroup({type:this.range[this.selectedIndex].type,groupID:this.groupID||void 0,name:this.groupName}).then(function(t){var n=t.data.group;return e.isAVChatRoom?wx.$app.joinGroup({groupID:n.groupID}):a.default.resolve()}).then(this.handleResolved).catch(this.handleRejected)},handleResolved:function(){this.loading=!1,wx.showToast({title:"创建成功",duration:1e3}),setTimeout(function(){wx.navigateBack()},1e3)},handleRejected:function(e){this.loading=!1,wx.showToast({title:e.message||"创建失败",icon:"none"})},showInfo:function(){wx.showModal({title:"提示",content:"直播群常用于直播聊天场景，只有在主动加群（需要填写群ID）后才能收到消息，重新登录后需要重新加群。\n故在创建直播群时，必须填写群ID",showCancel:!1,confirmText:"了解"})}}}}},["TIXD"]);