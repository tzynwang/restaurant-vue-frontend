import Vue from "vue";
import VueRouter from "vue-router";
import store from "./../store";

import SignIn from "../views/SignIn.vue";
import Restaurants from "../views/Restaurants.vue";

Vue.use(VueRouter);

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser;
  if (currentUser && !currentUser.isAdmin) {
    next("/404");
    return;
  }

  next();
};

const routes = [
  {
    path: "/",
    name: "root",
    redirect: { name: "sign-in" },
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: Restaurants,
  },
  {
    path: "/restaurants/feeds",
    name: "restaurants-feeds",
    component: () => import("../views/RestaurantsFeeds.vue"),
  },
  {
    path: "/restaurants/top",
    name: "restaurants-tops",
    component: () => import("../views/RestaurantsTop.vue"),
  },
  {
    path: "/restaurants/:id",
    name: "restaurant",
    component: () => import("../views/Restaurant.vue"),
  },
  {
    path: "/restaurants/:id/dashboard",
    name: "restaurant-dashboard",
    component: () => import("../views/RestaurantDashboard.vue"),
  },
  {
    path: "/users/top",
    name: "users-top",
    component: () => import("../views/UsersTop.vue"),
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/users/:id/edit",
    name: "user-edit",
    component: () => import("../views/UserEdit.vue"),
  },
  {
    path: "/admin",
    exact: true,
    redirect: "/admin/restaurants",
  },
  {
    path: "/admin/restaurants",
    name: "admin-restaurants",
    component: () => import("../views/AdminRestaurants.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin/restaurants/new",
    name: "admin-restaurant-new",
    component: () => import("../views/AdminRestaurantNew.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin/restaurants/:id/edit",
    name: "admin-restaurant-edit",
    component: () => import("../views/AdminRestaurantEdit.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin/restaurants/:id",
    name: "admin-restaurant",
    component: () => import("../views/AdminRestaurant.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin/categories",
    name: "admin-categories",
    component: () => import("../views/AdminCategories.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    path: "/admin/users",
    name: "admin-users",
    component: () => import("../views/AdminUsers.vue"),
    beforeEnter: authorizeIsAdmin,
  },
  {
    // ?????? https://github.com/vuejs/vue-router/issues/724#issuecomment-301260298
    // ?????? https://router.vuejs.org/guide/essentials/redirect-and-alias.html#alias
    // ??????alias??????????????????????????????/404
    name: "not-found",
    path: "/404",
    alias: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = window.localStorage.getItem("token");
  const tokenInStore = store.state.token;
  let isAuthenticated = store.state.isAuthenticated;

  // ?????? localStorage ??? store ?????? token ????????????
  // ??? !== ??? &&
  // ??????????????????localStorage???vuex???token??????????????????
  // ??????????????????localStorage??????token?????????????????? fetchCurrentUser
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch("fetchCurrentUser");
  }

  // ????????????????????? token ?????????
  const pathsWithoutAuthentication = ["sign-up", "sign-in"];

  // ?????? token ???????????????????????????????????????????????????/signin
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next("/signin");
    return;
  }

  // ?????? token ????????????????????????????????????????????????/restaurants
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next("/restaurants");
    return;
  }

  next();
});

export default router;
