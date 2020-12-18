require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{FPr8:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"methods"},[i("i-cell-group",{attrs:{mpcomid:"5"}},[i("i-cell",{attrs:{title:"发起会话","is-link":"",url:"/pages/search/main?type=user",mpcomid:"0"}}),t._v(" "),i("i-cell",{attrs:{title:"加入群聊","is-link":"",url:"/pages/search/main?type=group",mpcomid:"1"}}),t._v(" "),i("i-cell",{attrs:{title:"新建群聊","is-link":"",url:"/pages/create/main",mpcomid:"2"}}),t._v(" "),i("i-cell",{attrs:{title:"我的黑名单","is-link":"",url:"/pages/blacklist/main",mpcomid:"3"}}),t._v(" "),i("i-cell",{attrs:{title:"我的群组","is-link":"",url:"/pages/groups/main",mpcomid:"4"}})],1)],1),t._v(" "),i("div",{staticClass:"friends"},[i("van-index-bar",{attrs:{"scroll-top":t.scrollTop,"index-list":t.indexList,mpcomid:"8"}},t._l(t.groupedFriends,function(e,n){return i("div",{key:e.key},[i("van-index-anchor",{attrs:{index:e.key,mpcomid:"6_"+n}}),t._v(" "),t._l(e.friendList,function(e,r){return i("div",{key:e.userID,staticClass:"friend-item",attrs:{eventid:"0_"+n+"-"+r},on:{click:function(i){t.toProfile(e.userID)}}},[i("i-avatar",{attrs:{"i-class":"avatar",src:e.profile.avatar,mpcomid:"7_"+n+"-"+r}}),t._v(" "),i("div",{staticClass:"username"},[t._v(t._s(e.profile.nick||e.userID))])],1)})],2)}))],1)])},staticRenderFns:[]};e.a=n},P61V:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(i("Gu7T")),r=a(i("ifoU")),s=i("0xDb");function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{search:"",groupedFriends:[],indexList:[],addUserId:"",result:{},scrollTop:0}},onPageScroll:function(t){this.scrollTop=t.scrollTop},methods:{handleApply:function(){var t=this;wx.$app.joinGroup({groupID:this.result.groupID,type:this.result.type}).then(function(e){"JoinedSuccess"===e.data.status?(t.$store.commit("showToast",{title:"加群成功"}),t.search=""):t.$store.commit("showToast",{title:"申请成功，等待群管理员确认"}),t.handleApplyModal()}).catch(function(){t.$store.commit("showToast",{title:"加群失败"})})},initFriendsList:function(){var t=this;wx.$app.getFriendList({fromAccount:this.$store.state.user.userProfile.to}).then(function(e){var i=new r.default;e.data.forEach(function(t){return i.set(t.userID,t)});var s=t.groupingFriendList([].concat((0,n.default)(i.values())));t.groupedFriends=s,t.indexList=s.map(function(t){return t.key})})},groupingFriendList:function(t){var e=new r.default,i=[];return t.forEach(function(t){var i=t.profile.nick||t.userID,n=(0,s.pinyin)(i)[0].toUpperCase();e.has(n)?e.get(n).push(t):e.set(n,[t])}),e.forEach(function(t,e){i.push({key:e,friendList:t})}),i.sort(function(t,e){return t.key>e.key?1:-1})},toProfile:function(t){wx.navigateTo({url:"../user-profile/main?userID="+t})}},mounted:function(){this.initFriendsList()}}},hYiP:function(t,e,i){"use strict";var n=s(i("5nAL")),r=s(i("xLcW"));function s(t){return t&&t.__esModule?t:{default:t}}new n.default(r.default).$mount()},mvBY:function(t,e){},xLcW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("P61V"),r=i.n(n),s=i("FPr8");var a=function(t){i("mvBY")},o=i("ybqe")(r.a,s.a,a,null,null);e.default=o.exports}},["hYiP"]);