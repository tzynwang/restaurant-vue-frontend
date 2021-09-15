(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452696c7"],{"12b2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?a("Spinner"):a("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("*Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"categoryId"}},[t._v("*Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v(" --請選擇-- ")]),t._l(t.categories,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[t._v("Tel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[t._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?a("img",{staticClass:"d-block img-thumbnail mb-3",staticStyle:{"object-fit":"cover"},attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=a("1da1"),i=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("96cf"),a("2375")),u=a("be6c"),c=a("2fa3"),d={name:"AdminRestaurantForm",components:{Spinner:o["a"]},props:{initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{categories:[],restaurant:Object(i["a"])({},this.initialRestaurant),isLoading:!0}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].categories.get();case 3:a=e.sent,r=a.data,t.categories=r.categories,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),c["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"}),t.isLoading=!1;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleFileChange:function(t){var e=t.target.files;if(e.length){var a=window.URL.createObjectURL(e[0]);this.restaurant.image=a}else this.restaurant.image=""},handleSubmit:function(t){if(this.restaurant.name)if(this.restaurant.categoryId){var e=t.target,a=new FormData(e);this.$emit("after-submit",a)}else c["a"].fire({icon:"warning",title:"請選擇餐廳類別"});else c["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}}},l=d,m=a("2877"),p=Object(m["a"])(l,r,n,!1,null,null,null);e["a"]=p.exports},6945:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminRestaurantForm",{attrs:{"initial-restaurant":t.restaurant,"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("b0c0"),a("a4d3"),a("e01a"),a("12b2")),u=a("be6c"),c=a("2fa3"),d={name:"AdminRestaurantEdit",components:{AdminRestaurantForm:o["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},isProcessing:!1}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,a){var r=t.params.id;this.fetchRestaurant(r),a()},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,d,l,m,p,g,f,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].restaurants.getDetail({restaurantId:t});case 3:if(r=a.sent,n=r.data,"error"!==n.status){a.next=7;break}throw new Error(n.message);case 7:i=n.restaurant,o=i.id,d=i.name,l=i.tel,m=i.address,p=i.opening_hours,g=i.description,f=i.image,v=i.CategoryId,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{id:o,name:d,tel:l,address:m,openingHours:p,description:g,image:f,categoryId:v}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},handleAfterSubmit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,u["a"].restaurants.update({restaurantId:e.restaurant.id,formData:t});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:e.$router.push({name:"admin-restaurants"}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),c["a"].fire({icon:"error",title:"無法更新餐廳資料，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},l=d,m=a("2877"),p=Object(m["a"])(l,r,n,!1,null,null,null);e["default"]=p.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3");e["a"]={users:{get:function(){return r["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a})}},categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},get:function(){return r["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))}}}},e01a:function(t,e,a){"use strict";var r=a("23e7"),n=a("83ab"),s=a("da84"),i=a("5135"),o=a("861d"),u=a("9bf2").f,c=a("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};c(m,d);var p=m.prototype=d.prototype;p.constructor=m;var g=p.toString,f="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=g.call(t);if(i(l,t))return"";var a=f?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-452696c7.c34be998.js.map