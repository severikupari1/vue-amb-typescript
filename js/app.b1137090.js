(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({EditItem:"EditItem",ModifyBlog:"ModifyBlog",about:"about"}[t]||t)+"."+{EditItem:"ce575386",ModifyBlog:"b0d98ab9",about:"8cffe00b"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={EditItem:1,ModifyBlog:1,about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({EditItem:"EditItem",ModifyBlog:"ModifyBlog",about:"about"}[t]||t)+"."+{EditItem:"14d75660",ModifyBlog:"4d3b4baa",about:"9928b9c6"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3a17":function(t,e,n){},6927:function(t,e,n){"use strict";n("6ffd")},"6ffd":function(t,e,n){},"74a0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{class:t.className,attrs:{src:t.imageSrc,alt:t.alt}})},a=[],o=n("60a3"),i=o["b"].component("CustomImage",{props:{imageSrc:{type:String,required:!0},className:{type:String,default:"nav-item"},alt:{type:String,default:""}}}),c=i,s=n("2877"),u=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=u.exports},a7f9:function(t,e,n){},a899:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],attrs:{id:"app"}},[n("navbar"),n("router-view",{key:t.$route.fullPath})],1)},o=[],i=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",[n("route",{attrs:{"link-text":"Vue js ","class-name":"nav-text nav-item"}})],1),n("div",{staticClass:"main-links"},[n("router-link",{staticClass:"nav-item",attrs:{to:{name:"home"},tag:"div"}},[t._v(" Home ")]),n("router-link",{staticClass:"nav-item",attrs:{to:{name:"modify"},tag:"div"}},[t._v(" Edit / Delete ")]),n("router-link",{staticClass:"nav-item",attrs:{to:{name:"create"},tag:"div"}},[t._v(" Create new ")])],1)])},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{class:t.className,attrs:{to:{name:"home"},tag:t.tag}},[t._v(" "+t._s(t.linkText)+" ")])},m=[],b={name:"route",props:{linkText:{type:String,required:!0},className:{type:String,default:""},tag:{type:String,default:"div"}}},h=b,v=n("2877"),g=Object(v["a"])(h,f,m,!1,null,null,null),y=g.exports,j=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(l["b"]);j=Object(u["a"])([Object(l["a"])({components:{Route:y}})],j);var O=j,k=O,w=(n("e182"),Object(v["a"])(k,d,p,!1,null,"c8cad824",null)),x=w.exports,E=n("4bb5"),_=Object(E["a"])("globalValues"),C=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(l["b"]);Object(u["a"])([_.State],C.prototype,"isLoading",void 0),C=Object(u["a"])([Object(l["a"])({components:{Navbar:x}})],C);var P=C,S=P,L=Object(v["a"])(S,a,o,!1,null,null,null),A=L.exports,B=n("8c4f"),M=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",{staticClass:"page-title"},[t._v("Welcome to my Blog")]),n("div",{staticClass:"card-container"},t._l(t.list,(function(e){return n("router-link",{key:e.id,attrs:{to:"/article/"+e.id}},[n("el-card",{staticClass:"article",attrs:{"body-style":{padding:"0px"}}},[n("custom-image",{staticClass:"image",attrs:{"image-src":"https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg"}}),n("div",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1)])}),I=[],N=n("bee2"),R=n("74a0"),T=Object(E["a"])("posts"),$=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(N["a"])(n,[{key:"mounted",value:function(){this.getAllPosts()}}]),n}(l["b"]);Object(u["a"])([T.State],$.prototype,"list",void 0),Object(u["a"])([T.Action],$.prototype,"getAllPosts",void 0),$=Object(u["a"])([Object(l["a"])({components:{CustomImage:R["a"]}})],$);var V=$,q=V,D=(n("6927"),Object(v["a"])(q,M,I,!1,null,"d03226ac",null)),F=D.exports,H=[{path:"/",name:"home",component:F},{path:"/article/:id",name:"article",component:function(){return n.e("ModifyBlog").then(n.bind(null,"3ad6"))}},{path:"/modify",name:"modify",component:function(){return n.e("ModifyBlog").then(n.bind(null,"87fe"))}},{path:"/create",name:"create",component:function(){return n.e("EditItem").then(n.bind(null,"1071"))}},{path:"/edit/:id",name:"edit",component:function(){return n.e("EditItem").then(n.bind(null,"1071"))}},{path:"*",name:"notFound",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}}];r["default"].use(B["a"]);var J=new B["a"]({mode:"history",base:"/",routes:H}),U=J,K=n("2f62"),W=n("6fc5"),z=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.isLoading=!1,t}return Object(N["a"])(n,[{key:"updateLoading",value:function(t){this.isLoading=t}},{key:"setLoading",value:function(t){this.context.commit("updateLoading",t)}}]),n}(W["d"]);Object(u["a"])([W["c"]],z.prototype,"updateLoading",null),Object(u["a"])([W["a"]],z.prototype,"setLoading",null),z=Object(u["a"])([Object(W["b"])({namespaced:!0})],z);var G=z,Q=n("1da1"),X=n("2909"),Y=(n("96cf"),n("99af"),n("fb6a"),n("4de4"),n("d81d"),n("5c96")),Z=n.n(Y);function tt(t){Object(Y["Notification"])({title:t.title,message:t.message,type:t.type,offset:100,duration:5e3})}var et=n("bc3a"),nt=n.n(et),rt={baseURL:"https://jsonplaceholder.typicode.com",headers:{Accept:"application/json"}},at=nt.a.create(rt);at.interceptors.request.use((function(t){return lt.dispatch("globalValues/setLoading",!0),t})),at.interceptors.response.use((function(t){return lt.dispatch("globalValues/setLoading",!1),t}),(function(t){return lt.dispatch("globalValues/setLoading",!1),t}));var ot=at,it=5,ct=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.list=[],t.fetchedList=!1,t.post={id:0,title:"",body:""},t}return Object(N["a"])(n,[{key:"saveList",value:function(t){this.fetchedList=!0,this.list=[].concat(Object(X["a"])(this.list),Object(X["a"])(t.slice(0,it+1)))}},{key:"showError",value:function(t){tt({title:"Error",type:"error",message:t})}},{key:"getAllPosts",value:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.fetchedList){t.next=4;break}return t.abrupt("return",Promise.resolve(!0));case 4:return t.prev=4,t.next=7,ot.get("/posts");case 7:return e=t.sent,this.context.commit("saveList",e.data),t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t["catch"](4),this.context.commit("showError","Could not fetch the list"),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"save",value:function(t){this.post=t}},{key:"getPost",value:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0===this.list.length){t.next=9;break}if(n=this.list.filter((function(t){return t.id===e})),!n.length){t.next=6;break}return t.abrupt("return",Promise.resolve(n[0]));case 6:return t.abrupt("return",Promise.reject(!1));case 7:t.next=10;break;case 9:return t.abrupt("return",ot.get("/posts/".concat(e)).then((function(t){return r.context.commit("save",t.data),t.data})).catch((function(){return tt({title:"Error",type:"error",message:"Could not fetch Article"}),!1})));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"edit",value:function(t){this.list.map((function(e){e.id===t.id&&(e=t)}))}},{key:"editPost",value:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",ot.put("/posts/".concat(e.id),{data:e}).then((function(){return tt({title:"Success",type:"success",message:"Successfully edited"}),n.context.commit("edit",e),!0})).catch((function(){return tt({title:"Error",type:"error",message:"Could not edit"}),!1})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"create",value:function(t){var e=this.list.reduce((function(t,e){return t.id>e.id?t:e}));t.id=e.id+1,this.list.unshift(t)}},{key:"createPost",value:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",ot.post("/posts",{data:e}).then((function(t){return tt({title:"Success",type:"success",message:"Successfully created an Article"}),t.data.data.id=t.data.id,n.context.commit("create",t.data.data),!0})).catch((function(){return tt({title:"Error",type:"error",message:"Could not create"}),!1})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(t){this.list=this.list.filter((function(e){return e.id!==t}))}},{key:"deletePost",value:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",ot.delete("/posts/".concat(e)).then((function(){tt({title:"Success",type:"success",message:"Successfully deleted"}),n.context.commit("delete",e)})).catch((function(){tt({title:"Error",type:"error",message:"Could not delete"})})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(W["d"]);Object(u["a"])([W["c"]],ct.prototype,"saveList",null),Object(u["a"])([W["c"]],ct.prototype,"showError",null),Object(u["a"])([W["a"]],ct.prototype,"getAllPosts",null),Object(u["a"])([W["c"]],ct.prototype,"save",null),Object(u["a"])([W["a"]],ct.prototype,"getPost",null),Object(u["a"])([W["c"]],ct.prototype,"edit",null),Object(u["a"])([W["a"]],ct.prototype,"editPost",null),Object(u["a"])([W["c"]],ct.prototype,"create",null),Object(u["a"])([W["a"]],ct.prototype,"createPost",null),Object(u["a"])([W["c"]],ct.prototype,"delete",null),Object(u["a"])([W["a"]],ct.prototype,"deletePost",null),ct=Object(u["a"])([Object(W["b"])({namespaced:!0})],ct);var st=ct;r["default"].use(K["a"]);var ut=new K["a"].Store({modules:{globalValues:G,posts:st}}),lt=ut;n("a7f9"),n("a899");r["default"].use(Z.a),r["default"].config.productionTip=!1,new r["default"]({router:U,store:lt,render:function(t){return t(A)}}).$mount("#app")},e182:function(t,e,n){"use strict";n("3a17")}});
//# sourceMappingURL=app.b1137090.js.map