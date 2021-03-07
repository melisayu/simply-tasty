import Vue from 'vue'
import Vuex from 'vuex'

import $axios from './axios-instance';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    categoryType: '',
    mealsBasedOnCategory: [],
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },

    setMealsBasedOnCategory(state, data) {
      state.mealsBasedOnCategory = data;
    },

    setCategoryType(state, type) {
      state.categoryType = type;
    }
  },

  actions: {
    /* Request to get List of Categories*/
    getCategories({ commit }) {
      const requestCategories = "/categories.php";
      $axios.get(requestCategories)
      .then(response => {
        commit('setCategories', response.data.categories);
      })
    },

    // Get list of meals based on category
    getMealsBasedOnCategory({ commit, state }) {
      $axios.get(`/filter.php?c=${state.categoryType}`)
      .then(response => {
        commit('setMealsBasedOnCategory', response.data.meals);
      })
    }
  },

  modules: {
  }
})
