import Vue from "vue";
import Vuex from "vuex";

import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
    token: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        // 展開所有項目
        ...state.currentUser,
        // 再將fetch得來的currentUser資料覆蓋上去
        ...currentUser,
      };
      state.token = window.localStorage.getItem("token");
      state.isAuthenticated = true;
    },
    revokeAuthentication(state) {
      state.currentUser = {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      };
      state.isAuthenticated = false;
      state.token = "";
      window.localStorage.removeItem("token");
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 透過API用token交換currentUser資訊
        const { data } = await usersAPI.getCurrentUser();
        const { id, name, email, image, isAdmin } = data;
        // 保存到state.currentUser中
        commit("setCurrentUser", {
          id,
          name,
          email,
          image,
          isAdmin,
        });
      } catch (error) {
        console.error(error);
        // 驗證失敗則觸發登出行為，以清除 state 中的 token
        commit("revokeAuthentication");
        return false;
      }
    },
  },
  modules: {},
});
