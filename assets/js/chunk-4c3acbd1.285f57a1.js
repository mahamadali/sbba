(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c3acbd1"],{"0766":function(e,t,s){e.exports=s.p+"img/empty-join-requests.a785978b.svg"},"20f4":function(e,t,s){"use strict";s("53f8")},"219e":function(e,t,s){"use strict";s("4975")},"30ec":function(e,t,s){},3604:function(e,t,s){"use strict";s("7ee3")},"36b2":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"invite-manager"},[s("div",{staticClass:"invite-manager__wrapper"},[s("div",{staticClass:"invite-manager__header"},[s("div",{staticClass:"invite-manager__header--text"},[e._v("Hub Invite Manager")]),s("button",{staticClass:"ui-btn ui-btn__outline invite-manager__link--btn",on:{click:e.showNetworkInviteModal}},[s("i",{staticClass:"icon-plus"}),s("div",{staticClass:"btn-text"},[e._v("Invite Members")])])]),s("hr",{staticClass:"invite-manager__divider"}),s("div",{staticClass:"invite-manager__body"},[s("b-tabs",{staticClass:"network-invites__tab",attrs:{pills:"","nav-class":"network-invites__tabs","nav-wrapper-class":"network-invites__tabs--wrapper","active-nav-item-class":"network-invites__tabs--active-nav-item","active-tab-class":"network-invites__tabs--active-tab"},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},e._l(e.showListTabs,(function(t,n){return s("b-tab",{key:n,attrs:{"title-item-class":"network-invites__tab--item","title-link-class":"network-invites__tab--link",disabled:e.loading&&n!=e.tabIndex},on:{click:function(t){return t.preventDefault(),e.clearTab(t)}},scopedSlots:e._u([{key:"title",fn:function(){return[s("div",{staticClass:"network-invites__tab--item-title"},[e._v(" "+e._s(t.tabName)+" ")])]},proxy:!0}],null,!0)},[s("div",{staticClass:"network-invites-wrapper"},[s("div",{staticClass:"network-invites-wrapper__content"},[e._l(e.showRequestLists,(function(n,r){return s("div",{key:r,staticClass:"network-invites-wrapper__item"},[s("invite-network-user-list",{attrs:{requestList:n,type:t.type},on:{success:e.removeRecord}})],1)})),s("infinite-loading",{ref:"InfiniteLoading",refInFor:!0,attrs:{identifier:e.infiniteId,spinner:""},on:{infinite:e.infiniteHandler}},[s("div",{staticClass:"empty-state",attrs:{slot:"no-results"},slot:"no-results"},[[s("img",{staticClass:"empty-invites__img",attrs:{src:e.EmptyInvitesImg,alt:"No pending Invites"}}),s("div",{staticClass:"empty-invites__text"},[e._v(" "+e._s(e.emptyText)+" ")])]],2),s("div",{attrs:{slot:"no-more"},slot:"no-more"})])],2)])])})),1)],1)]),s("invite-network-user-modal",{on:{close:e.closeModal}})],1)},r=[],i=s("2909"),a=s("1da1"),o=(s("96cf"),s("a9e3"),s("fb6a"),s("99af"),s("c740"),s("a434"),s("383d")),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tab-wrapper"},[s("div",{staticClass:"tab-wrapper__header clickable"},[s("b-avatar",{attrs:{size:"3rem",variant:"light",src:e.requestList.avatar?e.requestList.avatar:e.genericNetwork}})],1),s("div",{staticClass:"tab-wrapper__pointer tab-wrapper__name"},[s("p",{staticClass:"tab-wrapper__name-stats",domProps:{innerHTML:e._s(e.formattedSummaryText)},on:{click:e.postContentClick}}),s("span",[e._v(" "+e._s(e._f("moment")(e.requestList.createdAt,"DD/MM/YY")))])]),"networkInvite"==e.type||"joinRequest"==e.type?s("div",{staticClass:"tab-wrapper__action"},[s("button",{staticClass:"ui-btn ui-btn__outline reject-button",on:{click:e.onReject}},[e.loaderReject?s("b-spinner",{attrs:{small:"",label:"loader"}}):s("span",[e._v(" Reject ")])],1),s("button",{staticClass:"ui-btn btn-primary",on:{click:e.onAccept}},[e.loaderAccept?s("b-spinner",{attrs:{small:"",label:"loader"}}):s("span",[e._v(" Accept ")])],1)]):"yourRequest"==e.type&&"pending"==e.requestList.status?s("div",{staticClass:"tab-wrapper__action tab-wrapper__status"},[e._v(" "+e._s(e.requestList.status)+" "),s("span",{staticClass:"icon-status-pending"})]):e._e()])},u=[],l=s("efca"),d=s.n(l),p=s("be02"),f={components:{},data:function(){return{genericNetwork:d.a,page:1,loaderReject:!1,loaderAccept:!1}},props:{requestList:{type:Object},type:{type:String}},computed:{formattedSummaryText:function(){return Object(p["a"])(this.requestList.text)}},mounted:function(){},methods:{postContentClick:function(e){if(e.target.matches(".mention")){var t=e.target.attributes["data-id"].value;this.$router.push({path:t})}},onAccept:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.loaderAccept=!0,"networkInvite"!=e.type){t.next=9;break}return t.next=5,e.$store.dispatch("networks/manageMyJoinRequests",{networkId:e.requestList.networkId,type:"accept"});case 5:s=t.sent,s.success&&(e.$emit("success",e.requestList.requestId),e.$eventBus.$emit("refreshMyNetworks")),t.next=13;break;case 9:return t.next=11,e.$store.dispatch("networks/networkInvitesRequests",{requestId:e.requestList.requestId,type:"accept"});case 11:n=t.sent,n.success&&e.$emit("success",e.requestList.requestId);case 13:t.next=18;break;case 15:throw t.prev=15,t.t0=t["catch"](0),t.t0.response.data.message;case 18:return t.prev=18,e.loaderAccept=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))()},onReject:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.loaderReject=!0,"networkInvite"!=e.type){t.next=9;break}return t.next=5,e.$store.dispatch("networks/manageMyJoinRequests",{networkId:e.requestList.networkId,type:"decline"});case 5:s=t.sent,s.success&&e.$emit("success",e.requestList.requestId),t.next=13;break;case 9:return t.next=11,e.$store.dispatch("networks/networkInvitesRequests",{requestId:e.requestList.requestId,type:"decline"});case 11:n=t.sent,n.success&&e.$emit("success",e.requestList.requestId);case 13:t.next=18;break;case 15:throw t.prev=15,t.t0=t["catch"](0),t.t0.response.data.message;case 18:return t.prev=18,e.loaderReject=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))()}}},v=f,m=(s("3604"),s("2877")),h=Object(m["a"])(v,c,u,!1,null,"04f65d07",null),b=h.exports,w=s("4170"),_=s.n(w),k=s("69ee"),g=s.n(k),x=s("b70c"),I=s.n(x),y=s("0766"),C=s.n(y),L=s("e166"),q=s.n(L),R={components:{InviteNetworkUserModal:o["a"],InviteNetworkUserList:b,InfiniteLoading:q.a},props:{initialIndex:{type:Number,defualt:0}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("profile/fetchIsNetworkAdmin");case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){},data:function(){return{page:1,listTabs:[{id:1,tabName:"Hub Invites",type:"networkInvite"},{id:2,tabName:"Invites Sent",type:"inviteSent"},{id:3,tabName:"Your Requests",type:"yourRequest"},{id:4,tabName:"Join Requests",type:"joinRequest"}],tabIndex:this.initialIndex,infiniteId:new Date,requestLists:[],loading:!1}},computed:{isNetworkAdmin:function(){return this.$store.getters["profile/getIsNetworkAdmin"]},showListTabs:function(){return this.isNetworkAdmin?this.listTabs:this.listTabs.slice(0,3)},showRequestLists:function(){return Object(i["a"])(this.requestLists)},EmptyInvitesImg:function(){return 0==this.tabIndex?_.a:1==this.tabIndex?g.a:2==this.tabIndex?I.a:C.a},emptyText:function(){return 0==this.tabIndex?"You have no hub invites":1==this.tabIndex?"You have no hub invites ":2==this.tabIndex?"You have no requests":"You have no join requests"}},methods:{clearTab:function(){this.page=1,this.requestLists=[],this.loading=!0,this.infiniteId+=1},infiniteHandler:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.fetchUserList();case 2:n=s.sent,n.length?(t.page+=1,t.requestLists=[].concat(Object(i["a"])(t.requestLists),Object(i["a"])(n)),e.loaded()):e.complete(),t.loading=!1;case 5:case"end":return s.stop()}}),s)})))()},fetchUserList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.tabIndex){t.next=6;break}return t.next=3,e.$store.dispatch("networks/fetchMyNetworkInvites",{page:e.page});case 3:return t.abrupt("return",t.sent);case 6:if(1!=e.tabIndex){t.next=12;break}return t.next=9,e.$store.dispatch("networks/fetchMyOutgoingInvites",{page:e.page});case 9:return t.abrupt("return",t.sent);case 12:if(2!=e.tabIndex){t.next=18;break}return t.next=15,e.$store.dispatch("networks/fetchMyRequests",{page:e.page});case 15:return t.abrupt("return",t.sent);case 18:if(3!=e.tabIndex){t.next=22;break}return t.next=21,e.$store.dispatch("networks/fetchJoinRequests",{page:e.page});case 21:return t.abrupt("return",t.sent);case 22:case"end":return t.stop()}}),t)})))()},showNetworkInviteModal:function(){this.$bvModal.show("invite-network-user-modal")},closeModal:function(){this.$bvModal.hide("invite-network-user-modal")},removeRecord:function(e){var t=this.requestLists.findIndex((function(t){return t.requestId===e}));this.requestLists.splice(t,1)}}},M=R,$=(s("d293"),s("ec86"),Object(m["a"])(M,n,r,!1,null,"5e113d56",null));t["default"]=$.exports},"383d":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("base-modal",{attrs:{id:"invite-network-user-modal",mount:"","no-close-on-backdrop":!1,modalHeaderClass:"invite-modal__header",modalContentClass:"invite-modal__content"},on:{onShow:e.onShow},scopedSlots:e._u([{key:"header",fn:function(t){var n=t.close;return[s("div",{staticClass:"ui-flex ui-align-center invite-modal__header"},[s("h5",{staticClass:"ui-model-title"},[e._v("Invite from Bizfluence")])]),s("button",{staticClass:"ui-btn ui-btn__close",on:{click:n}},[s("span",{staticClass:"icon-ic-modal-close"})])]}},{key:"body",fn:function(){return[s("hr",{staticClass:"invite-modal__header--divider"}),e.network?e._e():s("div",{staticClass:"base-select"},[s("div",{staticClass:"base-select__label"},[e._v("Select Network:")]),s("div",{staticClass:"base-select__network"},[s("base-dropdown",{ref:"networkDropdown",attrs:{"class-dropdown":"inclusion-dd","custom-text":"","class-toggle":"inclusion-btn",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[s("span",{staticClass:"base-select__network--text"},[e._v(e._s(e.networkSelected.text||"Select Network"))])]},proxy:!0},{key:"default",fn:function(){return e._l(e.networkList,(function(t){return s("base-list-item-default",{key:t.value,attrs:{text:t.text},nativeOn:{click:function(s){return e.selectNetwork(t)}}})}))},proxy:!0}],null,!1,1283428264)})],1)]),s("div",{staticClass:"base-select__members"},[s("div",{staticClass:"base-select__label"},[e._v("Select Members:")]),s("div",{staticClass:"base-select__members__tags"},[s("vue-tags-input",{attrs:{tags:e.usersList,"autocomplete-items":e.autocompleteItems,placeholder:"Select Members","add-only-from-autocomplete":""},on:{"tags-changed":e.update},scopedSlots:e._u([{key:"autocomplete-item",fn:function(t){return s("div",{staticClass:"search-results-item",on:{click:function(e){return t.performAdd(t.item)}}},[s("div",{staticClass:"search-results-item__container"},[""!=t.item.picture&&t.item.picture.url?s("blur-hash-image",{staticClass:"search-results-item__image clickable",attrs:{hash:"LdHfL}oJR$WBKnfi%3ofT0kCM{ay",src:t.item.picture.url,transitionDuration:500,alt:"Profile Picture"}}):e._e(),s("div",{staticClass:"search-results-item__text"},[e._v(" "+e._s(t.item.text)+" "),s("span",[e._v(" ("+e._s(t.item.handle)+") ")])])],1),s("hr",{staticClass:"search-results-item__divider"})])}}]),model:{value:e.tag,callback:function(t){e.tag=t},expression:"tag"}})],1)]),s("div",[s("ul",{staticClass:"display-results"},e._l(e.users,(function(t){return s("li",{key:t.userId},[s("div",{staticClass:"display-results__container"},[s("div"),s("div",{staticClass:"display-results__item"},[t.picture?s("blur-hash-image",{staticClass:"display-results__image clickable",attrs:{hash:"LdHfL}oJR$WBKnfi%3ofT0kCM{ay",src:t.picture.fromats&&t.picture.fromats.thumbnails?t.picture.fromats.thumbnails.url:t.picture.url,transitionDuration:500,alt:"Profile Picture"},on:{mousedown:function(s){return s.preventDefault(),e.goToProfile(t.text)}}}):e._e()],1),s("div",{staticClass:"display-results__text"},[e._v(" "+e._s(t.text)+" "),s("span",[e._v(" ("+e._s(t.handle)+") ")]),s("hr")])])])})),0)])]},proxy:!0},{key:"footer",fn:function(t){var n=t.save;return[s("div",{staticClass:"invite-modal__footer"},[s("button",{staticClass:"ui-btn invite-modal__submit-button",attrs:{disabled:0==e.users.length||e.loading},on:{click:function(t){return e.sendNewInvites(n)}}},[e.loading?s("b-spinner",{attrs:{small:"",label:"loader"}}):[e._v(" Send invitation ")]],2)])]}}])}),e.showResultModal?s("invite-user-result-modal",{ref:"InviteUserResultModal",attrs:{errorUsersList:e.errorUsersList,successUsersList:e.successUsersList}}):e._e()],1)},r=[],i=s("1da1"),a=(s("96cf"),s("4de4"),s("caad"),s("2532"),s("7db0"),s("d81d"),s("b0c0"),s("cdb5")),o=s("7299"),c=s("c627"),u=s.n(c),l=s("c7a0"),d=s.n(l),p=s("454b"),f=s("8f1b"),v=s("d4f2"),m=s("b012"),h={components:{BaseModal:o["default"],BaseDropdown:p["a"],BaseListItemDefault:f["a"],VueTagsInput:d.a,BlurHashImage:v["BlurHashImage"],InviteUserResultModal:a["a"]},props:{network:{type:Object,required:!1}},data:function(){return{loading:!1,ic_close:u.a,networkSelected:{},users:[],tag:"",autocompleteItems:[],selectedOptions:[],networkList:[],errorUsersList:[],successUsersList:[],showResultModal:!1,showModal:!1}},computed:{usersList:function(){var e=this;return this.users.filter((function(t){return e.selectedOptions.includes(t.userId)}))}},watch:{tag:"searchInputChanged",network:"networkDrodpownList"},mounted:function(){this.networkDrodpownList()},methods:{closeModal:function(e){e()},onShow:function(){this.errorsLength=[],this.users=[],this.autocompleteItems=[]},filterUser:function(e){return this.errorsLength.errors.find((function(t){return t.userId==e}))},showErrorMessage:function(e){var t=this.filterUser(e);return t?"".concat(t.message):""},update:function(e){this.autocompleteItems=[],this.users=e,this.selectedOptions=e.map((function(e){return e.userId}))},selectNetwork:function(e){this.networkSelected=e,this.$refs.networkDropdown.hide()},networkDrodpownList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.network){t.next=4;break}e.networkSelected={value:e.network.id,text:e.network.name},t.next=8;break;case 4:return t.next=6,e.$store.dispatch("networks/getNetworkInviteList");case 6:s=t.sent,e.networkList=s.map((function(e){return{value:e.id,text:e.name}}));case 8:case"end":return t.stop()}}),t)})))()},searchInputChanged:Object(m["debounce"])((function(e){e&&this.retrieveSearchUserResults(e)}),500),retrieveSearchUserResults:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!e){s.next=5;break}return s.next=3,t.$store.dispatch("post/searchProfiles",{searchText:e});case 3:n=s.sent,n&&(t.autocompleteItems=n.map((function(e){var t;return{text:e.title,picture:null!==(t=e.picture)&&void 0!==t?t:"",userId:e.userId,handle:e.handle}})));case 5:case"end":return s.stop()}}),s)})))()},sendNewInvites:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("networks/inviteNetworkMember",{users:e.selectedOptions,networkId:e.networkSelected.value});case 2:s=t.sent,s.success&&(e.errorUsersList=e.users.filter((function(e){return s.errors.find((function(t){return t.userId==e.userId}))})),e.successUsersList=e.users.filter((function(e){return!s.errors.find((function(t){return t.userId==e.userId}))})),e.$emit("close"),e.showResultModal=!0,e.$nextTick((function(){e.$refs.InviteUserResultModal.onShow(!0),e.$nextTick((function(){e.$bvModal.show("invite-user-result-modal")}))})));case 4:case"end":return t.stop()}}),t)})))()}}},b=h,w=(s("219e"),s("20f4"),s("2877")),_=Object(w["a"])(b,n,r,!1,null,"f516f7dc",null);t["a"]=_.exports},4170:function(e,t,s){e.exports=s.p+"img/empty-network-invitation.3d26d4f5.svg"},4975:function(e,t,s){},"53f8":function(e,t,s){},"69ee":function(e,t,s){e.exports=s.p+"img/empty-invites-sent.889cf5a3.jpeg"},"7ee3":function(e,t,s){},b012:function(e,t){function s(e,t,s){var n,r,i,a,o;function c(){var u=Date.now()-a;u<t&&u>=0?n=setTimeout(c,t-u):(n=null,s||(o=e.apply(i,r),i=r=null))}null==t&&(t=100);var u=function(){i=this,r=arguments,a=Date.now();var u=s&&!n;return n||(n=setTimeout(c,t)),u&&(o=e.apply(i,r),i=r=null),o};return u.clear=function(){n&&(clearTimeout(n),n=null)},u.flush=function(){n&&(o=e.apply(i,r),i=r=null,clearTimeout(n),n=null)},u}s.debounce=s,e.exports=s},b70c:function(e,t,s){e.exports=s.p+"img/empty-my-requests.324114a8.svg"},c3dd:function(e,t,s){},d293:function(e,t,s){"use strict";s("c3dd")},ec86:function(e,t,s){"use strict";s("30ec")},efca:function(e,t,s){e.exports=s.p+"img/generic-network.2d23bfb5.svg"}}]);