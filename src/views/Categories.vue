<template>
  <div class="container">
    <div class="wrapper categories">
      <h2>Categories</h2>
      <Spinner />
      <ul class="grid">
        <li class="category-card" v-for="category in categories" v-bind:key="category.id">
          <router-link :to="{path: '/category/' + category.strCategory}">
            <img v-bind:src="category.strCategoryThumb" alt="Category Image"/>
            <p> {{ category.strCategory }} </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Spinner from "@/components/Spinner.vue";

@Component({
  components: {
    Spinner,
  },
})

export default class Categories extends Vue {
  name: "categories"
  get categories() {
    return this.$store.state.categories;
  }
  created() {
    this.$store.dispatch('getCategories');
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.categories {
  margin: 0 1em;
  padding: 1em 0;
}

ul.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 16px;
  padding: 0;
}

ul.grid li.category-card {
  border: 1px solid $gray;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 0 10px;
  font-size: 1.2rem;

  img {
    width: 100px;
  }
}

ul li.category-card:hover {
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media screen and (min-width: 1200px) {
  ul.grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media screen and (min-width: 1700px) {
  ul.grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

</style>
