import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SearchQuery: ''
  },
  mutations: {
    SET_SEARCH_QUERY: (state, value) => {
      state.SearchQuery = value;
    }
  },
  actions: {
    ADD_SEARCH_QUERY({commit}, value) {
      commit('SET_SEARCH_QUERY', value)
    }
  },
  getters:{
    SEARCH_QUERY(state) {
      return state.SearchQuery
    }
  },
  modules: {},
});
