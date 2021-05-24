export default {
  name: "city",
  namespaced: true,
  state: {
    cityname: ""
  },
  getters: {
    getState(state) {
      return state;
    }
  },
  mutations: {
    changeCity(state, cityName) {
      state.cityName = cityName;
    }
  },
  actions: {
      changeByAction({commit}, disploy) {
          commit("changeCity", disploy)
      }
  }
};
