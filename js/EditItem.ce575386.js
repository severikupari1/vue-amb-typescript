(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EditItem"],{1071:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create"},[a("h1",{staticClass:"page-title"},[t._v(t._s(t.pageTitle))]),a("div",{staticClass:"form-container"},[a("el-form",{attrs:{"label-position":"top",model:t.formData}},[a("el-form-item",{attrs:{label:"Title"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("el-form-item",{attrs:{label:"Description"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.formData.body,callback:function(e){t.$set(t.formData,"body",e)},expression:"formData.body"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v(t._s(t.pageTitle))])],1)],1)],1)])},o=[],s=a("d4ec"),r=a("bee2"),c=a("262e"),n=a("2caf"),l=a("9ab4"),p=a("60a3"),f=a("4bb5"),u=Object(f["a"])("posts"),m=function(t){Object(c["a"])(a,t);var e=Object(n["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.pageTitle="",t.isNew=!0,t.postId=0,t.formData={title:"",id:0,body:""},t}return Object(r["a"])(a,[{key:"created",value:function(){var t=this;this.postId=+this.$route.params.id,this.postId?(this.isNew=!1,this.pageTitle="Modify Article",this.getPost(this.postId).then((function(e){t.formData=e}))):this.pageTitle="Create new Article"}},{key:"submitForm",value:function(){this.isNew?this.createPost(this.formData):(this.formData.id=this.postId,this.editPost(this.formData))}}]),a}(p["b"]);Object(l["a"])([u.Action],m.prototype,"editPost",void 0),Object(l["a"])([u.Action],m.prototype,"createPost",void 0),Object(l["a"])([u.Action],m.prototype,"getPost",void 0),m=Object(l["a"])([p["a"]],m);var d=m,b=d,h=(a("e12f"),a("2877")),v=Object(h["a"])(b,i,o,!1,null,"21d79297",null);e["default"]=v.exports},7745:function(t,e,a){},e12f:function(t,e,a){"use strict";a("7745")}}]);
//# sourceMappingURL=EditItem.ce575386.js.map