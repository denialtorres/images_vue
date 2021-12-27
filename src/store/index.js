import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";

// conect Vuex to Vue
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: auth,
  },
});
