import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_token"),
};

const getters = {
  isLoggedIn: function (state) {
    // !! turn value into a boolean
    return !!state.token;
  },
};

const actions = {
  login: function () {
    api.login();
  },
  logout: function ({ commit }) {
    commit("setToken", null);
  },
  finalizeLogin: function ({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    window.localStorage.setItem("imgur_token", query.access_token);
    router.push("/");
  },
};

const mutations = {
  setToken: function (state, token) {
    state.token = token;
    window.localStorage.removeItem("imgur_token");
  },
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
