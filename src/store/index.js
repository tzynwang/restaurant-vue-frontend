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
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        // 展開所有項目
        ...state.currentUser,
        // 再將fetch得來的currentUser資料覆蓋上去
        ...currentUser,
      };
      state.isAuthenticated = true;
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
      }
    },
  },
  modules: {},
});
