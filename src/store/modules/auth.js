import api from "../../api/imgur";

const state = {
  token: null,
};

const getters = {
  isLoggedIn: function (state) {
    // !! turn value into a boolean
    !!state.token;
  },
};

const actions = {
  login: function () {
    api.login();
  },
  logout: function ({ commit }) {
    commit("setToken", null);
  },
};

const mutations = {
  setToken: function (state, token) {
    state.token = token;
  },
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
};
