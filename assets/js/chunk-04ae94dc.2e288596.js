(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04ae94dc"],{"10f1":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"the-feed"},[e.showPostbox?n("feed-item-new-post",{attrs:{"network-id":e.networkId,"network-name":e.networkName,"network-display":e.networkDisplay,feedType:e.feedType}}):e._e(),"mainFeed"===e.feedType?n("filter-date",{attrs:{initialFilter:e.filter},on:{filterChange:e.onFilterChange}}):e._e(),"mainFeed"===e.feedType&&e.newCount>0?n("div",{staticClass:"the-feed-button"},[n("button",{staticClass:"ui-btn feed-new-posts",on:{click:function(t){return t.preventDefault(),e.clearUnreads(t)}}},[n("span",{staticClass:"icon-ic-arrow-back"}),n("span",[e._v(e._s(e.newCount)+" New Posts")])])]):e._e(),n("div",{staticClass:"the-feed-content"},[e.pinnedPosts||"mainFeed"!==e.feedType?e.pinnedPosts&&"mainFeed"===e.feedType?n("div",e._l(e.pinnedPosts,(function(t,s){return n("div",{key:t.id},[n("feed-item",{attrs:{"network-feed":!!e.networkId,post:t,index:s},on:{showToast:e.showToast}})],1)})),0):e._e():n("div",[n("indeterminate-loader")],1),e._l(e.posts,(function(t,s){return n("div",{key:t.activity?t.activity.id:t.id},[n("div",[n("feed-item",{attrs:{"network-feed":!!e.networkId,post:t,index:s},on:{showToast:e.showToast}}),t.activity&&t.activity.earlierPosts&&t.activity.earlierPosts.length?n("expandable-items",{attrs:{profile:t.profile,posts:t.activity.earlierPosts}}):e._e()],1)])})),n("infinite-loading",{ref:"InfiniteLoading",attrs:{identifier:e.infiniteId,"force-use-infinite-wrapper":""},on:{infinite:e.infiniteHandler},scopedSlots:e._u([{key:"spinner",fn:function(){return e._l(10,(function(e){return n("div",{key:e},[n("feed-item-skeleton")],1)}))},proxy:!0}])},[n("div",{attrs:{slot:"no-more"},slot:"no-more"},[n("div")]),n("div",{attrs:{slot:"no-results"},slot:"no-results"},[e.loading||e.posts.length?n("div"):n("no-results",{attrs:{unreadPosts:e.activeFilters.unreads,postsCount:e.posts?e.posts.length:0,from:e.feedType}})],1)])],2)],1)},i=[],r=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("b64b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-filter-date"},[n("button",{staticClass:"date-arrow",on:{click:e.back}},[n("svg",{staticClass:"btn-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),n("div",{staticClass:"ui-filter-date__wr"},e._l(e.days,(function(t,s){return n("button",{key:s,staticClass:"filter-date-btn",class:e.$moment(t.moment).format("YYYY-MM-DD")===e.$moment(e.selectedFilter.date).format("YYYY-MM-DD")?"active":"",on:{click:function(n){return e.onFilterChange("date",t.moment)}}},[n("span",{staticClass:"filter-date-btn__day"},[e._v(e._s(t.weekday))]),n("span",{staticClass:"filter-date-btn__month"},[e._v(e._s(t.date.month)+" "+e._s(t.date.day))])])})),0),e.days.length>e.minDays?n("button",{staticClass:"date-arrow right",on:{click:e.forward}},[n("svg",{staticClass:"btn-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):n("button",{staticClass:"date-arrow right",attrs:{disabled:""}},[n("svg",{staticClass:"btn-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),n("b-dropdown",{attrs:{"no-caret":"","toggle-class":"ui-btn__icon ui-filter-date__button","menu-class":"ui-filter-date__menu",right:"",lazy:!0},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("svg",{staticClass:"btn-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}})])]},proxy:!0},{key:"default",fn:function(){return[n("div",{staticClass:"smenu"},e._l(e.filterTypes,(function(t){return n("label",{key:t.type,staticClass:"container",on:{click:function(n){return e.onFilterChange("type",t.type)}}},[n("div",{staticClass:"ui-flex ui-flex-col"},[n("span",{staticClass:"ui-title"},[e._v(e._s(t.name))]),n("span",{staticClass:"ui-desc"},[e._v(e._s(t.description))])]),n("input",{attrs:{type:"radio",name:"radio"},domProps:{checked:t.type===e.selectedFilter.type}}),n("span",{staticClass:"checkmark"})])})),0)]},proxy:!0}])})],1)}),o=[],d=(n("fb6a"),n("9029")),l={name:"FilterDate",props:{initialFilter:Object},watch:{"initialFilter.type":function(e){this.selectedFilter.type=e}},mounted:function(){this.initializeDays()},data:function(){return{minDays:d["isMobileOnly"]?4:6,days:[],selectedFilter:{type:this.initialFilter.type,date:this.initialFilter.date},filterTypes:[{type:"default",name:"Default",description:"New posts in my hubs, and all activity of users I'm following in my hubs"},{type:"recentPosts",name:"Recent Posts",description:"Only new posts in my hubs"},{type:"expanded",name:"Expanded",description:"All activity in my hubs"},{type:"everything",name:"Everything",description:"All activity across all public hubs on bizfluence"}]}},methods:{onFilterChange:function(e,t){this.selectedFilter[e]=t,this.$emit("filterChange",{type:this.selectedFilter.type,date:this.selectedFilter.date})},initializeDays:function(){for(var e=0;e<this.minDays;e++){var t=new Date;t.setDate(t.getDate()-e);var n={weekday:t.toLocaleDateString("en-US",{weekday:"long"}),date:{month:t.toLocaleDateString("en-US",{month:"long"}),day:t.getDate()},moment:t.toUTCString()};this.days.unshift(n)}},back:function(){var e=new Date;e.setDate(e.getDate()-this.days.length);var t={weekday:e.toLocaleDateString("en-US",{weekday:"long"}),date:{month:e.toLocaleDateString("en-US",{month:"long"}),day:e.getDate()},moment:e.toUTCString()};this.days.unshift(t)},forward:function(){this.days.length>this.minDays&&(this.days=this.days.slice(1))}}},c=l,u=(n("8491"),n("2877")),f=Object(u["a"])(c,a,o,!1,null,null,null),p=f.exports,h=n("2b16"),g=n.n(h),m=function(){return Promise.resolve().then(n.t.bind(null,"e166",7))},y=function(){return Promise.all([n.e("chunk-a9464d02"),n.e("chunk-090d2b2e"),n.e("chunk-68d2811e"),n.e("chunk-19beea7d"),n.e("chunk-8335e1f2")]).then(n.bind(null,"a508"))},w=function(){return n.e("chunk-0c268cd6").then(n.bind(null,"14c0"))},v=function(){return n.e("chunk-83efadf4").then(n.bind(null,"e2b0"))},k=function(){return n.e("chunk-5864a772").then(n.bind(null,"aec5"))},b=function(){return n.e("chunk-d82e05ec").then(n.bind(null,"bb284"))},F=function(){return n.e("chunk-2d60332c").then(n.bind(null,"6a19"))},C={name:"TheFeeds",components:{FilterDate:p,InfiniteLoading:m,FeedItemNewPost:k,FeedItem:y,FeedItemSkeleton:w,IndeterminateLoader:v,NoResults:b,ExpandableItems:F},props:{feedType:{type:String,required:!0},networkId:{type:String,required:!1},networkDisplay:{type:String,required:!1},userSlug:{type:String,required:!1},showPostbox:{type:Boolean,required:!1,default:!0},networkName:{type:String,required:!1},showPosts:{type:Boolean,required:!1,default:!0}},watch:{networkId:function(){this.$store.commit("feeds/setFeedPage",{increment:1}),this.$store.commit("feeds/resetFeedPage"),this.$refs.InfiniteLoading.stateChanger.reset()},userSlug:function(){this.$store.commit("feeds/setFeedPage",{increment:1})},feedType:function(e,t){},feedFilterType:function(e,t){}},sockets:{updateUnreadCount:function(e){this.feedCount=e.count,this.newCount=e.newCount||this.newCount}},data:function(){return{sort:g.a,loading:!0,progressValue:0,feed:[],feedCount:0,newCount:0,filter:{type:this.$store.getters["profile/getSelectedFilter"]||"Default",date:(new Date).toUTCString()}}},computed:{isAuth:function(){return this.$store.getters["auth/getAuthStatus"]},activeFilters:function(){return this.$store.getters["feeds/getActiveFilters"]},network:function(){return this.$store.getters["network/getNetwork"]},page:function(){return this.$store.getters["feeds/getFeedPage"]},posts:function(){var e=this,t=this.$store.getters["feeds/getFeedsPosts"].filter((function(t){var n;return(null===(n=t.activity)||void 0===n?void 0:n.active)||"mainFeed"!==e.feedType&&"network"!==e.feedType||t.active}));return t},pinnedPosts:function(){return this.$store.getters["feeds/getPinnedPosts"]},focusedPost:function(){return this.$store.getters["feeds/getFocusedPosts"]},feedFilterType:function(){return this.$store.getters["feeds/getFeedFilterType"]},customNetworks:function(){return this.$store.getters["feeds/getFilteredNetworks"]},customNetworksByIds:function(){return this.$store.getters["feeds/getFilteredNetworksByIds"]},communities:function(){var e="60dd9984fea235f5fd29309c",t=[e];return t},customPosts:function(){return this.$store.getters["feeds/getCustomPosts"]},infiniteId:function(){return this.$store.getters["feeds/getInfiniteId"]}},methods:{onFilterChange:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=t.filter.type,t.filter=e,t.$store.dispatch("feeds/refreshMainFeed"),t.$store.commit("feeds/resetFeedPage"),e.type===s){n.next=7;break}return n.next=7,t.$store.dispatch("profile/editProfile",{selectedFilter:e.type});case 7:case"end":return n.stop()}}),n)})))()},clearUnreads:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.newCount=0,e.$store.dispatch("feeds/refreshMainFeed"),e.$store.commit("feeds/resetFeedPage"),e.$refs.InfiniteLoading.stateChanger.reset();case 4:case"end":return t.stop()}}),t)})))()},infiniteHandler:function(e){var t=this;this.feed=this.fetchFeeds().then((function(n){var s;null!==n&&void 0!==n&&null!==(s=n.posts)&&void 0!==s&&s.length?(t.networkId&&t.networkId!==t.network._id||t.$store.commit("feeds/setFeedPage",{increment:1}),e.loaded()):e.complete()})),console.log(this.feed)},fetchFeeds:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,s,i,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("network"!==e.feedType){t.next=12;break}if(n=e.$store.getters["network/getNetwork"],n.id){t.next=4;break}return t.abrupt("return");case 4:return e.$store.commit("feeds/clearActiveFilters"),t.next=7,e.$store.dispatch("feeds/fetchNetworkPosts",{network:n,page:e.page,limit:50});case 7:return s=t.sent,e.loading=!1,t.abrupt("return",s);case 12:if("user"!==e.feedType){t.next=20;break}return t.next=15,e.$store.dispatch("feeds/fetchUserPosts",{slug:e.$store.getters["user/getProfileHandle"],page:e.page});case 15:return i=t.sent,e.loading=!1,t.abrupt("return",i);case 20:if("bookmarked"!==e.feedType){t.next=28;break}return t.next=23,e.$store.dispatch("feeds/fetchBookmarkedPosts",{page:e.page});case 23:return r=t.sent,e.loading=!1,t.abrupt("return",r);case 28:if(!(Object.keys(e.activeFilters).length>0)){t.next=34;break}return t.next=31,e.$store.dispatch("feeds/fetchFeedsWithActiveFilters",{page:e.page,limit:20,activeFilters:e.activeFilters});case 31:return a=t.sent,e.loading=!1,t.abrupt("return",a);case 34:return o=e.$store.dispatch("feeds/fetchFeed",{filter:e.filter,page:e.page,limit:50,feedFilterType:e.feedFilterType}),e.loading=!1,t.abrupt("return",o);case 37:case"end":return t.stop()}}),t)})))()},showToast:function(e){this.$bvToast.toast(e,{autoHideDelay:2e3,noCloseButton:!0,toaster:"b-toaster-top-center"})}}},_=C,x=(n("2b45"),Object(u["a"])(_,s,i,!1,null,null,null));t["a"]=x.exports},"2b16":function(e,t,n){e.exports=n.p+"img/sort-outline.a6ac2ebd.svg"},"2b45":function(e,t,n){"use strict";n("a4c2")},8491:function(e,t,n){"use strict";n("d54d")},a4c2:function(e,t,n){},d54d:function(e,t,n){}}]);