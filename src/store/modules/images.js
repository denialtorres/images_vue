import api from "../../api/imgur";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    var token = rootState.auth.token;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  async uploadImages(images) {
    console.log(images);
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
