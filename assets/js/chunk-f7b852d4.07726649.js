(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7b852d4"],{3697:function(e,t,n){},"82fc":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:[e.interestClass,"base-tag"],on:{click:function(t){return t.stopPropagation(),e.$emit("click")}}},[e._v(" "+e._s(e.name)+" "),"selected"===e.type||"selectedType"===e.type?n("base-icon-button",{staticClass:"size12",attrs:{icon:"icon-close",active:"selected"===e.type||"selectedType"===e.type},on:{iconClicked:e.removeClicked}}):e._e()],1)},c=[],o=(n("b0c0"),n("f367")),a=n("37ce"),r=n.n(a),i={name:"BaseInterestTag",components:{BaseIconButton:o["default"]},props:{name:{type:String},type:{type:String}},data:function(){return{ic_post_tag_remove:r.a}},methods:{removeClicked:function(){console.log("remove Clicked"),"selectedType"!==this.type&&this.$store.commit("post/removeFromSelectedInterests",this.name)}},computed:{interestClass:function(){switch(this.type){case"selected":return"tag-selected";case"network":return"tag-network";case"global":return"tag-global";case"selectedType":return"tag-type"}return""}}},l=i,p=(n("ad93"),n("2877")),u=Object(p["a"])(l,s,c,!1,null,"f7d85ef8",null);t["default"]=u.exports},ad93:function(e,t,n){"use strict";n("3697")}}]);