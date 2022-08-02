(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c01ed9d6"],{"793b":function(e,t,r){"use strict";r("d838")},ca20:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("base-modal",{staticClass:"report-modal",attrs:{id:"report-modal",mount:!0,title:"Report",shortHeight:!0,modalContentClass:"report-modal",modalDialogClass:"report-modal-dialog",hideFooter:!0,hideHeader:!0},scopedSlots:e._u([{key:"body",fn:function(){return[r("div",{style:{"text-align":"end"}},[r("button",{staticClass:"ui-btn ui-btn__close",on:{click:e.close}},[r("span",{staticClass:"icon-ic-modal-close"})])]),r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-content__title"},[e._v(e._s(e.type.charAt(0).toUpperCase())+e._s(e.type.substring(1))+" Report")]),r("div",{staticClass:"description-input"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{type:"text",placeholder:"Please describe the issue in detail"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),r("div",{staticClass:"submit-wr"},[r("button",{staticClass:"ui-btn btn-block ui-onboard-btn",on:{click:e.submitReport}},[e._v(" Submit ")])])])]},proxy:!0}])})},n=[],s=r("1da1"),o=(r("a4d3"),r("e01a"),r("b0c0"),r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("7299")),a=r("708e"),l={name:"ReportModal",components:{BaseModal:o["default"]},props:{},data:function(){return{type:"",description:"",entityId:"",action:"",uploadImageParams:{extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp",minSize:1024,size:209715200,multiple:!0,directory:!1,drop:!1,dropDirectory:!1,createDirectory:!1,addIndex:!1,thread:3},files:[],media:[]}},mounted:function(){var e=this;this.$eventBus.$on("OPEN_REPORT_MODAL",function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.type=r.type,e.entityId=r.entityId,e.action=r.action,e.successMessage=r.successMessage,e.errorMessage=r.errorMessage,e.$nextTick((function(){e.$bvModal.show("report-modal")}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},computed:{},methods:{resetData:function(){this.entityId="",this.description="",this.type=""},close:function(){this.resetData(),this.$root.$emit("bv::hide::modal","report-modal")},submitReport:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("".concat(e.action),{id:e.entityId,description:e.description,type:e.type});case 2:r=t.sent,e.close(),i=r?e.successMessage:e.errorMessage,e.$bvToast.toast(i,{autoHideDelay:2e3,noCloseButton:!0,toaster:"b-toaster-top-center"});case 6:case"end":return t.stop()}}),t)})))()},fileType:function(e){return"image/"===e.type.substr(0,6)?"image":"video/"===e.type.substr(0,6)?"video":"doc"},inputFile:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,s,o,l,c,u,d,p,b,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e||t){i.next=28;break}if(r.loading||(r.loading=!0),!(e.size>=0&&e.size<r.uploadImageParams.size)){i.next=28;break}if(n=r.media.length+1,s=r.files.push({file:null,order:n,loading:!0,progress:0}),o=500,l=setInterval((function(){r.files[s-1].progress<90?r.files[s-1].progress+=10:r.files[s-1].progress<99&&(r.files[s-1].progress+=3,o=1e3)}),o),r.media.push({file:null,order:n}),"video/"!==e.type.substr(0,6)){i.next=21;break}return i.next=11,Object(a["a"])(e.blob,{quality:.6});case 11:return u=i.sent,i.next=14,u[0].blob.arrayBuffer();case 14:return d=i.sent,p=new File([d],"thumbnail.jpeg",{type:"image/jpeg"}),console.log(p),i.next=19,r.$store.dispatch("profile/uploadImage",{newFile:p});case 19:c=i.sent,console.log(c);case 21:return i.next=23,r.$store.dispatch("profile/uploadImage",{newFile:e,thumbId:c});case 23:b=i.sent,console.log(e),f=r.fileType(e.file),"video"!==f?(r.media[s-1].file=b,r.files[s-1].file=e,r.files[s-1].progress=100,setTimeout((function(){r.files[s-1].loading=!1,clearInterval(l)}),1e3)):setTimeout((function(){r.media[s-1].file=b,r.files[s-1].file=e,r.files[s-1].progress=100,setTimeout((function(){r.files[s-1].loading=!1,clearInterval(l)}),1e3)}),2e3),r.loading&&(r.loading=!1);case 28:case"end":return i.stop()}}),i)})))()},inputFilter:function(e,t,r){var i=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var s,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e||t){n.next=27;break}if(!(e.size>=0&&e.size>i.uploadImageParams.size)){n.next=6;break}return i.modalMessageType="error",i.modalMessage="Upload is too large, it can't be more than 1GB",i.$nextTick((function(){i.$refs.showErrorModal.onShow(),i.$nextTick((function(){i.$bvModal.show("error-modal")}))})),n.abrupt("return",r());case 6:if(i.$refs.showErrorModal.onHide(),!/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)){n.next=9;break}return n.abrupt("return",r());case 9:if(!/\.(php5?|html?|jsx?)$/i.test(e.name)){n.next=11;break}return n.abrupt("return",r());case 11:if(!e||""!==e.error||!e.file||t&&e.file===t.file){n.next=26;break}if(e.blob="",s=window.URL||window.webkitURL,s&&(e.blob=s.createObjectURL(e.file)),e.url="",!e.blob||"image/"!==e.type.substr(0,6)){n.next=20;break}e.url=e.blob,n.next=26;break;case 20:if(!e.blob||"video/"!==e.type.substr(0,6)){n.next=26;break}return n.next=23,Object(a["a"])(e.blob,{quality:.6});case 23:o=n.sent,e.url=e.blob,e.poster=o[1].blob;case 26:!e||""!==e.error||"image/"!==e.type.substr(0,6)||!e.blob||t&&e.blob===t.blob||(e.error="image parsing",l=new Image,l.onload=function(){i.$refs.upload.update(e,{error:"",height:l.height,width:l.width})},l.Î¿nerrÎ¿r=function(){i.$refs.upload.update(e,{error:"parsing image size"})},l.src=e.blob);case 27:case"end":return n.stop()}}),n)})))()}}},c=l,u=(r("793b"),r("2877")),d=Object(u["a"])(c,i,n,!1,null,"5d85dffe",null);t["default"]=d.exports},d838:function(e,t,r){}}]);