(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c50812"],{"73a3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:{name:"admin-restaurant-new"}}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},r=[],s=a("e04c"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?a("Spinner"):a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" # ")]),a("th",{attrs:{scope:"col"}},[t._v(" Category ")]),a("th",{attrs:{scope:"col"}},[t._v(" Name ")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v(" 操作 ")])])]),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)])},u=[],c=a("1da1"),o=(a("4de4"),a("96cf"),a("2375")),d=a("be6c"),l=a("2fa3"),m={name:"AdminRestaurantsTable",components:{Spinner:o["a"]},data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchRestaurants()},methods:{fetchRestaurants:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,d["a"].restaurants.get();case 4:if(a=e.sent,n=a.data,"error"!==n.status){e.next=8;break}throw new Error(n.message);case 8:t.restaurants=n.restaurants,t.isLoading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),l["a"].fire({icon:"error",title:"無法取得餐廳，請稍後再試"}),t.isLoading=!1;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()},deleteRestaurant:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d["a"].restaurants.delete({restaurantId:t});case 3:if(n=a.sent,r=n.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:e.restaurants=e.restaurants.filter((function(e){return e.id!==t})),l["a"].fire({icon:"success",title:"刪除餐廳成功"}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),l["a"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},f=m,v=a("2877"),b=Object(v["a"])(f,i,u,!1,null,null,null),p=b.exports,g={name:"AdminRestaurants",components:{AdminNav:s["a"],AdminRestaurantsTable:p}},h=g,_=Object(v["a"])(h,n,r,!1,null,null,null);e["default"]=_.exports},be6c:function(t,e,a){"use strict";a("b0c0");var n=a("2fa3");e["a"]={users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:a})}},categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,a=t.name;return n["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},get:function(){return n["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,a=t.formData;return n["b"].put("/admin/restaurants/".concat(e),a)},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))}}}},e04c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:{name:"admin-restaurants"}}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:{name:"admin-categories"}}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:{name:"admin-users"}}},[t._v("Users")])],1)},r=[],s={name:"AdminNav"},i=s,u=a("2877"),c=Object(u["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-71c50812.7dd272a8.js.map