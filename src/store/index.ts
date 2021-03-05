import Vue from 'vue'
import Vuex from 'vuex'

import $axios from './axios-instance';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    }
  },

  actions: {
    /* Request to get List of Categories*/
    getCategories({ commit }) {
      const requestCategories = "/categories.php";
      $axios
        .get(requestCategories)
        .then(response => {
          commit('setCategories', response.data.categories);
        })
    }
  },

  modules: {
  }
})
