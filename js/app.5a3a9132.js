(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0dcb4733"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,a[1](s)}n[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/demo-simpleserver/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("1356"),n=a.n(r);n.a},1356:function(t,e,a){},"4d93":function(t,e,a){"use strict";var r=a("b3a5"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""},scopedSlots:t._u([{key:"extension",fn:function(){return[t.$store.state.user?a("v-tabs",{attrs:{centered:"","background-color":"primary",dark:"","fixed-tabs":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",{attrs:{href:"#todo"}},[t._v("\n                  todo\n              ")]),a("v-tab",{attrs:{href:"#airbnb"}},[t._v("\n                  airbnb queries\n              ")])],1):t._e()]},proxy:!0}])},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("MongoDB")]),a("span",{staticClass:"font-weight-light hidden-sm-and-down"},[t._v("SIMPLE APP CONNECTION")])]),a("v-spacer"),t.user?a("div",[t._v("\n          Welcome: "+t._s(t.user.name)+"\n          "),a("v-btn",{attrs:{text:""},on:{click:t.logout}},[a("span",{staticClass:"mr-2"},[t._v("logout")])])],1):a("div",[a("v-btn",{attrs:{text:""},on:{click:function(e){t.loginDialog=!t.loginDialog}}},[a("span",{staticClass:"mr-2"},[t._v("Login")])]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.registerDialog=!t.registerDialog}}},[a("span",{staticClass:"mr-2"},[t._v("Register")])])],1),a("div",{staticClass:"hidden-md-and-down"},[a("svg",{staticClass:"icon-github",attrs:{fill:"#000",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 62 60"}},[a("path",{attrs:{d:"M31 0a30.7 30.7 0 0 0-9.8 59.9c1.55.3 2.116-.6 2.116-1.4s-.026-2.7-.042-5.3c-8.622 1.9-10.44-4.1-10.44-4.1-1.414-3.5-3.448-4.5-3.448-4.5-2.815-1.9.213-1.9.213-1.9a6.74 6.74 0 0 1 4.746 3.2c2.766 4.7 7.254 3.3 9.023 2.6a6.3 6.3 0 0 1 1.966-4.1c-6.88-.8-14.12-3.5-14.12-15.2a11.964 11.964 0 0 1 3.193-8.3 10.9 10.9 0 0 1 .3-8.1s2.6-.9 8.525 3.1a30.617 30.617 0 0 1 15.522 0c5.92-4 8.517-3.1 8.517-3.1a10.886 10.886 0 0 1 .308 8.1 11.946 11.946 0 0 1 3.186 8.3c0 11.8-7.248 14.4-14.155 15.1a7.52 7.52 0 0 1 2.1 5.7c0 4.1-.04 7.5-.04 8.5 0 .8.56 1.7 2.13 1.4A30.708 30.708 0 0 0 31 0"}})]),a("a",{attrs:{target:"_blank",href:"https://github.com/webknet/demo-simpleserver"}},[a("span",[t._v(" View on GitHub")])])])],1),a("v-content",[a("home",{attrs:{tab:t.tab}})],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px",transition:"dialog-transition"},model:{value:t.loginDialog,callback:function(e){t.loginDialog=e},expression:"loginDialog"}},[a("login",{attrs:{close:t.closeLoginDialog}})],1),a("v-dialog",{attrs:{persistent:"",overlay:!1,"max-width":"500px",transition:"dialog-transition"},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[a("register",{attrs:{close:t.closeRegisterDialog}})],1)],1)},o=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.user?a("div",[a("v-tabs-items",{staticStyle:{"background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{value:"todo"}},[a("todo")],1),a("v-tab-item",{attrs:{value:"airbnb"}},[a("airbnb")],1)],1)],1):a("div",{staticStyle:{"text-align":"center","padding-top":"60px"}},[a("h1",{staticClass:"font-weight-light"},[t._v("Register a new user or login with:")]),a("h3",{staticClass:"font-weight-light"},[t._v("demo@mail.com")]),a("h3",{staticClass:"font-weight-light"},[t._v("pass: demo")])])])},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5",attrs:{"grid-list-xs":""}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[t._v("TODO")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",to:"list"},on:{click:function(e){t.showList=!0}}},[a("v-icon",[t._v("list")])],1),a("v-btn",{attrs:{icon:"",to:"cards"},on:{click:function(e){t.showList=!1}}},[a("v-icon",[t._v("apps")])],1)],1),a("div",{staticClass:"pa-3"},[a("h2",[t._v(t._s(t.today.toDateString()))])]),a("v-card",{staticClass:"mt-3"},[a("v-card-text",[a("v-text-field",{attrs:{outlined:"",label:"task",autofocus:"",clearable:"","append-outer-icon":"send"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)},"click:append-outer":t.add},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}})],1)],1),a("v-toolbar",{staticClass:"mt-5"},[a("v-toolbar-title",[t._v("Your Tasks")]),a("v-spacer"),a("span",{staticClass:"title grey--text"},[t._v(t._s(t.tasks.length)+" tasks")]),a("div",[a("span",{staticClass:"caption"},[t._v("  "+t._s(t.done)+" completed")])])],1),a("v-progress-linear",{attrs:{value:t.completed}}),t.showList?a("v-list",[t._l(t.tasks,function(e,r){return[a("v-list-item",{key:r,on:{click:function(a){return t.update(e)}}},[a("v-list-item-action",[a("v-checkbox",{on:{change:function(a){return t.update(e)}},model:{value:e.done,callback:function(a){t.$set(e,"done",a)},expression:"item.done"}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline",class:{done:e.done}},[t._v(t._s(e.description))]),a("v-list-item-subtitle",{staticClass:"font-weight-light"},[t._v("Added on: "+t._s(new Date(e.date).toDateString()))])],1),a("v-list-item-action",[e.done?a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.remove(e)}}},[a("v-icon",{attrs:{color:"red"}},[t._v("clear")])],1):t._e()],1)],1),r+1<t.tasks.length?a("v-divider",{key:r+e}):t._e()]})],2):a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.tasks,function(e,r){return[a("v-flex",{key:r,attrs:{xs12:"",md6:"",xl4:""}},[a("v-card",{staticClass:"ma-3 pa-2"},[a("v-toolbar",{attrs:{color:"info",dark:""}},[a("v-icon",{attrs:{large:""}},[t._v("assignment")]),a("v-toolbar-title",[a("span",{staticClass:" font-weight-light"},[t._v("Task")])])],1),a("v-card-text",{staticClass:"headline font-weight-bold"},[a("div",{staticClass:"grey--text font-weight-light caption"},[t._v("Added on: "+t._s(new Date(e.date).toDateString()))]),a("span",{class:{done:e.done}},[t._v(t._s(e.description))])]),a("v-card-actions",[a("v-btn",{attrs:{icon:"",color:"orange"},on:{click:function(a){return t.update(e)}}},[a("v-icon",[t._v(t._s(e.done?"done":"crop_square"))]),t._v("\n                        done\n                    ")],1),a("v-spacer"),e.done?a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.remove(e)}}},[a("v-icon",{attrs:{color:"red"}},[t._v("clear")])],1):t._e()],1)],1)],1)]})],2),a("v-snackbar",{attrs:{color:"error","multi-line":"",right:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"caption font-weight-light"},[t._v("Task removed.")])]),a("v-flex",{attrs:{xs12:""}},[t._v("\n                "+t._s(t.snackbarText)+"\n            ")])],1),a("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},u=[],d=(a("7514"),a("bc3a")),p=a.n(d);p.a.defaults.baseURL="http://localhost:3000",p.a.interceptors.request.use(function(t){return t.headers={"Content-Type":"application/json","x-auth-token":void 0===sessionStorage.token?"":sessionStorage.token},t}),p.a.interceptors.response.use(function(t){var e=t.headers["x-auth-token"];return null!=e&&""!=e&&(sessionStorage["token"]=e),t},function(t){return Promise.reject(t)});var v="sample_airbnb";p.a.post("/db",JSON.stringify({db:v})).then(function(t){return console.log(t)});var f={register:function(t){return p.a.post("/users",JSON.stringify(t))},signin:function(t){return p.a.post("/users/auth",JSON.stringify(t))},saveChanges:function(t){return p.a.post("/api",JSON.stringify(t))},query:function(t){return p.a.post("/api",JSON.stringify(t))}},b={data:function(){return{task:"",tasks:[],today:new Date,check:!0,snackbar:!1,snackbarText:"",showList:!0}},computed:{completed:function(){return this.tasks.filter(function(t){return t.done}).length/this.tasks.length*100},done:function(){return this.tasks.filter(function(t){return t.done}).length}},methods:{add:function(){var t=this,e={collection:{name:"todo ".concat(this.$store.state.user._id),action:"insert",query:"One"},value:{description:this.task,done:!1,date:(new Date).getTime()}};f.saveChanges(e).then(function(e){t.tasks.push(e.data.ops[0]),t.task=""}).catch(function(t){return console.log(t.response)})},update:function(t){t.done=!t.done;var e={collection:{name:"todo ".concat(this.$store.state.user._id),action:"update",query:"ById"},value:{filter:t._id,update:{$set:{done:t.done}}}};f.saveChanges(e).then(function(t){return console.log(t)}).catch(function(t){return console.log(t.response)})},remove:function(t){var e=this,a=this.tasks.find(function(e){return e._id==t._id});f.saveChanges({collection:{name:"todo ".concat(this.$store.state.user._id),action:"delete",query:"ById"},value:t._id}).then(function(t){e.tasks.splice(e.tasks.indexOf(a),1),e.snackbarText=a.description,e.snackbar=!0})}},created:function(){var t=this;f.query({collection:{name:"todo ".concat(this.$store.state.user._id),action:"query",query:"Many",fields:""},value:{}}).then(function(e){t.tasks=e.data.result}).catch(function(t){return console.log(t.response)}),this.showList="/list"==this.$route.fullPath}},m=b,g=(a("b7cf"),a("2877")),h=a("6544"),y=a.n(h),_=a("8336"),k=a("b0af"),w=a("99d9"),x=a("ac7c"),O=a("a523"),V=a("ce7e"),C=a("0e8f"),T=a("132d"),j=a("a722"),P=a("8860"),D=a("da13"),S=a("1800"),E=a("5d23"),I=a("8e36"),L=a("2db4"),$=a("2fa4"),q=a("8654"),B=a("71d9"),A=a("2a7f"),R=Object(g["a"])(m,c,u,!1,null,null,null),N=R.exports;y()(R,{VBtn:_["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["b"],VCheckbox:x["a"],VContainer:O["a"],VDivider:V["a"],VFlex:C["a"],VIcon:T["a"],VLayout:j["a"],VList:P["a"],VListItem:D["a"],VListItemAction:S["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VProgressLinear:I["a"],VSnackbar:L["a"],VSpacer:$["a"],VTextField:q["a"],VToolbar:B["a"],VToolbarTitle:A["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pa-5 pt-5 white elevation-3"},[a("h2",{staticClass:"font-weight-light ml-5 mb-3"},[t._v("Filter")]),a("v-layout",{staticClass:"mx-2",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm3:"","ml-5":""}},[a("v-select",{attrs:{items:t.markets,label:"Place","prepend-icon":"map","clear-icon":"$vuetify.icons.clear",clearable:""},model:{value:t.market,callback:function(e){t.market=e},expression:"market"}})],1),a("v-flex",{attrs:{xs12:"",sm3:"","ml-5":""}},[a("v-select",{attrs:{items:t.propertyTypes,label:"Property type","prepend-icon":"location_city","clear-icon":"$vuetify.icons.clear",clearable:""},model:{value:t.propertyType,callback:function(e){t.propertyType=e},expression:"propertyType"}})],1),a("v-flex",{attrs:{xs12:"",sm3:"","ml-5":""}},[a("v-select",{attrs:{items:t.bedTypes,label:"Bed type","prepend-icon":"local_hotel","clear-icon":"$vuetify.icons.clear",clearable:""},model:{value:t.bedType,callback:function(e){t.bedType=e},expression:"bedType"}})],1),a("v-flex",{staticClass:"text-right",attrs:{xs12:"",sm2:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.getItems(!0)}}},[a("v-icon",{attrs:{large:""}},[t._v("search")])],1)],1)],1)],1),a("v-progress-linear",{attrs:{indeterminate:t.loading}}),a("v-container",{staticClass:"mt-3",attrs:{"grid-list-xs":""}},[t.documents.length>0?a("div",[parseInt(t.total/t.totalByPage)>1?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:parseInt(t.total/t.totalByPage),"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.documents,function(e){return a("v-flex",{key:e._id,attrs:{xs12:"",md6:"",lg4:"",xl3:""}},[a("v-card",{staticClass:"ma-3",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text",attrs:{height:"200px",src:e.images.picture_url}},[a("v-card-title",{staticClass:"align-end fill-height"},[t._v("\n                                "+t._s(e.name))])],1),a("v-card-text",[a("v-layout",{attrs:{"align-center":""}},[a("v-rating",{attrs:{value:e.review_scores.review_scores_rating/20,color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$vuetify.icons.ratingFull","half-increments":"",readonly:""}}),a("div",{staticClass:"grey--text ml-4"},[t._v(t._s(e.review_scores.review_scores_rating/20||"N/A")+" ("+t._s(e.number_of_reviews)+")")])],1),a("div",{staticClass:"title"},[a("v-icon",{attrs:{color:"red"}},[t._v("bookmark_border")]),t._v(" "+t._s(e.property_type))],1),a("div",{staticClass:"cation"},[a("v-icon",{attrs:{color:"blue-grey lighten-3"}},[t._v("local_hotel")]),t._v(" "+t._s(e.bed_type))],1),a("div",{staticClass:"module line-clamp mt-3"},[a("p",[t._v(t._s(e.summary))])]),a("v-divider"),a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.host.host_picture_url}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v("\n                                        "+t._s(e.host.host_name)+"\n                                    ")]),a("v-list-item-subtitle",[t._v("\n                                        "+t._s(e.host.host_about)+"\n                                    ")])],1)],1),a("v-list-item",[a("div",{staticClass:"module line-clamp mt-3"},[a("p",[t._v(t._s(e.access))])])])],1),a("v-card-actions",[a("v-icon",[t._v("place")]),a("span",[t._v(t._s(e.address.market))]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"info"}},[t._v("bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"orange"}},[t._v("share")])],1)],1)],1)],1)}),1),parseInt(t.total/t.totalByPage)>1?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:parseInt(t.total/t.totalByPage),"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1):a("div",{staticStyle:{"text-align":"center","padding-top":"60px"}},[t.loading?a("div",[a("h1",{staticClass:"font-weight-light"},[t._v("Loading...")])]):a("div",[a("h1",{staticClass:"font-weight-light"},[t._v("No data found")]),a("h3",{staticClass:"font-weight-light"},[t._v("try again")])])])])],1)},M=[],U={data:function(){return{loading:!1,documents:[],markets:[],market:null,propertyTypes:[],propertyType:null,bedTypes:[],bedType:null,page:1,total:0,totalByPage:20}},watch:{page:function(){this.$vuetify.goTo(0,{duration:500,offset:0,easing:"easeOutQuad"}),this.getItems()}},methods:{loadSelects:function(){var t=this;this.distinct("address.market").then(function(e){return t.markets=e.data}),this.distinct("property_type").then(function(e){return t.propertyTypes=e.data}),this.distinct("bed_type").then(function(e){return t.bedTypes=e.data})},distinct:function(t){var e={collection:{name:"listingsAndReviews",action:"query",query:"Distinct"},value:{field:t}};return f.query(e)},getItems:function(t){var e=this;this.documents=[],this.page=t?1:this.page,this.loading=!0;var a={};this.market&&(a["address.market"]=this.market),this.propertyType&&(a.property_type=this.propertyType),this.bedType&&(a.bed_type=this.bedType);var r={collection:{name:"listingsAndReviews",action:"query",query:"Many",fields:{"review_scores.review_scores_rating":1,"images.picture_url":1,"host.host_picture_url":1,"host.host_name":1,"host.host_about":1,"address.market":1,name:1,number_of_reviews:1,property_type:1,summary:1,access:1,bed_type:1}},value:{filter:a,sort:{},skip:this.page*this.totalByPage-this.totalByPage,limit:this.totalByPage}};f.query(r).then(function(t){e.documents=t.data.result,e.total=t.data.count,e.loading=!1})}},mounted:function(){this.loadSelects(),this.getItems(!0)}},J=U,G=(a("4d93"),a("adda")),z=a("8270"),H=a("891e"),Q=a("1d4d"),W=a("b974"),Y=Object(g["a"])(J,F,M,!1,null,null,null),K=Y.exports;y()(Y,{VBtn:_["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VContainer:O["a"],VDivider:V["a"],VFlex:C["a"],VIcon:T["a"],VImg:G["a"],VLayout:j["a"],VListItem:D["a"],VListItemAvatar:z["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VPagination:H["a"],VProgressLinear:I["a"],VRating:Q["a"],VSelect:W["a"],VSpacer:$["a"]});var X=a("2f62");function Z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function tt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Z(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Z(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var et={props:{tab:String},components:{todo:N,airbnb:K},computed:tt({},Object(X["c"])({user:"user"}))},at=et,rt=a("c671"),nt=a("aac8"),ot=Object(g["a"])(at,i,l,!1,null,null,null),st=ot.exports;y()(ot,{VTabItem:rt["a"],VTabsItems:nt["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[t._v("Login")])],1),a("v-card-text",[a("v-form",{ref:"loginForm",attrs:{autocomplete:"off","lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"email",label:"Email","prepend-icon":"account_circle",rules:t.emailRules,type:"email","validate-on-blur":"",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{name:"password",label:"Password",rules:[function(t){return!!t||"Password is required"}],"prepend-icon":"lock","append-icon":t.ep?"visibility":"visibility_off",type:t.ep?"password":"text",required:""},on:{"click:append":function(e){t.ep=!t.ep},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t.error?a("div",{staticStyle:{color:"red"}},[a("v-icon",{attrs:{color:"red"}},[t._v("error_outline")]),a("span",[t._v(" user or password error")])],1):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.close}},[t._v("cancel")]),a("v-btn",{attrs:{text:"",disabled:!t.valid},on:{click:t.submit}},[t._v("login")])],1)],1)],1)},lt=[];function ct(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function ut(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ct(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ct(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var dt={props:{close:Function},data:function(){return{ep:!0,valid:!0,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],user:{email:"",passsword:""},error:!1}},methods:ut({},Object(X["b"])({setUser:"login"}),{submit:function(){var t=this;this.error=!1,this.$refs.loginForm.validate()&&f.signin(this.user).then(function(e){t.setUser(e.data),console.log(e.data),t.close()}).catch(function(e){t.error=!0,console.log("error",e.response)})}})},pt=dt,vt=a("4bd4"),ft=Object(g["a"])(pt,it,lt,!1,null,null,null),bt=ft.exports;y()(ft,{VBtn:_["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["b"],VForm:vt["a"],VIcon:T["a"],VSpacer:$["a"],VTextField:q["a"],VToolbar:B["a"],VToolbarTitle:A["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[t._v("Register")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{autocomplete:"off","lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"Name",label:"User name","prepend-icon":"account_circle",rules:[function(t){return!!t||"Name is required"}],type:"text","validate-on-blur":"",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),a("v-text-field",{attrs:{name:"email",label:"Email","prepend-icon":"account_circle",rules:t.emailRules,type:"email","validate-on-blur":"",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{name:"password",label:"Password",rules:[function(t){return!!t||"Password is required"}],"prepend-icon":"lock","append-icon":t.ep?"visibility":"visibility_off",type:t.ep?"password":"text",required:""},on:{"click:append":function(e){t.ep=!t.ep},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t.error?a("div",{staticStyle:{color:"red"}},[a("v-icon",{attrs:{color:"red"}},[t._v("error_outline")]),a("span",[t._v(t._s(t.errorText))])],1):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.close}},[t._v("cancel")]),a("v-btn",{attrs:{text:"",disabled:!t.valid},on:{click:t.submit}},[t._v("Save")])],1)],1)},gt=[];function ht(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function yt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ht(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ht(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var _t={props:{close:Function},data:function(){return{ep:!0,valid:!0,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],user:{name:"",email:"",passsword:""},error:!1,errorText:""}},methods:yt({},Object(X["b"])({setUser:"login"}),{submit:function(){var t=this;if(this.error=!1,this.$refs.form.validate()){var e={collection:{action:"insert"},value:yt({},this.user)};f.register(e).then(function(e){t.setUser(e.data),t.close(),console.log(e)}).catch(function(e){t.error=!0,t.errorText=e.response.data,console.log(e.response)})}}})},kt=_t,wt=Object(g["a"])(kt,mt,gt,!1,null,null,null),xt=wt.exports;function Ot(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function Vt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Ot(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ot(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}y()(wt,{VBtn:_["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["b"],VForm:vt["a"],VIcon:T["a"],VSpacer:$["a"],VTextField:q["a"],VToolbar:B["a"],VToolbarTitle:A["a"]});var Ct={name:"App",components:{home:st,login:bt,register:xt},data:function(){return{loginDialog:!1,registerDialog:!1,tab:null}},computed:Vt({},Object(X["c"])({user:"user"})),methods:{closeLoginDialog:function(){this.loginDialog=!1},closeRegisterDialog:function(){this.registerDialog=!1},logout:function(){this.$store.dispatch("login",null)}}},Tt=Ct,jt=(a("034f"),a("7496")),Pt=a("40dc"),Dt=a("a75b"),St=a("169a"),Et=a("71a3"),It=a("fe57"),Lt=a("9a96"),$t=Object(g["a"])(Tt,n,o,!1,null,null,null),qt=$t.exports;y()($t,{VApp:jt["a"],VAppBar:Pt["a"],VBtn:_["a"],VContent:Dt["a"],VDialog:St["a"],VSpacer:$["a"],VTab:Et["a"],VTabs:It["a"],VTabsSlider:Lt["a"],VToolbarTitle:A["a"]});var Bt=a("8c4f");r["a"].use(Bt["a"]);var At=new Bt["a"]({mode:"history",base:"/demo-simpleserver/",routes:[{path:"/",name:"home",component:st},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});r["a"].use(X["a"]);var Rt=new X["a"].Store({state:{user:null},mutations:{USER_LOGGED_IN:function(t,e){t.user=e}},actions:{login:function(t,e){var a=t.commit;a("USER_LOGGED_IN",e)}}}),Nt=a("f309");r["a"].use(Nt["a"]);var Ft=new Nt["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:At,store:Rt,vuetify:Ft,render:function(t){return t(qt)}}).$mount("#app")},b3a5:function(t,e,a){},b6ee:function(t,e,a){},b7cf:function(t,e,a){"use strict";var r=a("b6ee"),n=a.n(r);n.a}});
//# sourceMappingURL=app.5a3a9132.js.map