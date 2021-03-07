import Vue from 'vue'
import Vuex from 'vuex'

import $axios from './axios-instance';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    categoryType: '',
    mealsBasedOnCategory: [],
    loading: false,
    mealDetail: {
      strCategory: '',
      strTags: '',
    },
    tags: [],
    ingredients: {},
  },

  getters: {
    mealTags(state) {
      // Split string of tags into individual tags and return it into array
      if (state.mealDetail.strTags) {
        return state.mealDetail.strTags && state.mealDetail.strTags.split(",");
      }
    },

    // Get 3 randomized relevant meals based on category
    pickRelevantItems(state) {
      const randomized = state.mealsBasedOnCategory.sort(() => 0.5 - Math.random());
      return randomized.slice(0, 3);
    }
  },

  actions: {
    /* Request to get List of Categories*/
    getCategories({ commit }) {
      commit('setLoading', true);
      const requestCategories = "/categories.php";
      $axios.get(requestCategories)
      .then(response => {
        commit('setCategories', response.data.categories);
        commit('setLoading', false);
      })
    },

    // Get list of meals based on category
    getMealsBasedOnCategory({ commit, state }) {
      $axios.get(`/filter.php?c=${state.categoryType}`)
      .then(response => {
        commit('setMealsBasedOnCategory', response.data.meals);
      })
    },

    // Get detail information
    getDetail({ commit, state, getters , dispatch}, id) {
      commit('setLoading', true);
      $axios.get(`/lookup.php?i=${id}`).then(response => {
        commit('setMealDetail', response.data.meals[0]); // Detailed data
        commit('setTags', getters.mealTags);
        commit('setCategoryType', state.mealDetail.strCategory);
        dispatch('filterIngredients').then(response => commit('setIngredients', response));
        dispatch('getMealsBasedOnCategory');
        commit('setLoading', false);
      });
    },

    // To filter meal response data to get ingredients and measures
    filterMealData({ state}, prefix) {
      return Object.keys(state.mealDetail)
        .filter(item => item.includes(prefix))
        .map(key => state.mealDetail[key])
        .filter(name => name && name.replace(/\s/g, "").length && name);
    },

    // Action to put filtered ingredients and measures into "ingredients" array of object
    filterIngredients({ dispatch }) {
      const obj = {
        ingredients: [],
        measures: [],
      }
      dispatch('filterMealData', "strIngredient").then((response) => obj.ingredients = response);
      dispatch('filterMealData', "strMeasure").then((response) => obj.measures = response);
      return obj;
    },
  },

  mutations: {
    setLoading(state, bool) {
      state.loading = bool;
    },

    setCategories(state, categories) {
      state.categories = categories;
    },

    setMealsBasedOnCategory(state, data) {
      state.mealsBasedOnCategory = data;
    },

    setCategoryType(state, type) {
      state.categoryType = type;
    },

    setMealDetail(state, data) {
      state.mealDetail = data;
    },

    setTags(state, tags) {
      state.tags = tags;
    },

    setIngredients(state, obj) {
      state.ingredients = obj;
    },
  },

  modules: {
  }
})
