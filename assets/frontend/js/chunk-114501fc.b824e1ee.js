(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-114501fc"],{"04f6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"network-hub"},[s("div",{staticClass:"network-hub-preview"},[s("h3",{staticClass:"network-hub-preview__title"},[t._v("Hub Preview")]),s("div",{staticClass:"network-hub-preview__wr"},[s("div",{staticClass:"network__header"},[s("div",{staticClass:"network__header-img"}),s("div",{staticClass:"network__header-info disable"},[s("div",{staticClass:"network__header-info-text"},[s("h2",[t._v(t._s(t.previewName||"Hub Name"))]),s("p",[s("span",[t._v(t._s(t.previewPrivacy||"Group Privacy"))]),s("span",[t._v("1 Members")])])])])]),t._m(0),s("div",{staticClass:"network-post"},[s("div",{staticClass:"network-post__new"},[s("feed-item-new-post")],1)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"network-tabs"},[s("label",{staticClass:"network-tabs__tab"},[t._v("Home")]),s("label",{staticClass:"network-tabs__tab"},[t._v("About")]),s("label",{staticClass:"network-tabs__tab"},[t._v("Announcements")]),s("label",{staticClass:"network-tabs__tab"},[t._v("Members")])])}],i=(s("b0c0"),s("aec5")),n={name:"NetworkHub",components:{FeedItemNewPost:i["default"]},computed:{getNetwork:function(){return this.$store.getters["network/getNewNetworkPreview"]},previewName:function(){var t=this.getNetwork.name;return t},previewPrivacy:function(){var t=this.getNetwork.isPublic,e=null;return e=t?"Public Network":"Private Network",e}}},o=n,c=(s("9203"),s("2877")),w=Object(c["a"])(o,a,r,!1,null,"4de1ab6b",null);e["default"]=w.exports},5228:function(t,e,s){},9203:function(t,e,s){"use strict";s("5228")}}]);