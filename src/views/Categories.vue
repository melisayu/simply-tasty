<template>
  <div class="container">
    <div class="categories">
      <h2>Categories</h2>
      <ul class="grid">
        <li class="category-card" v-for="category in categories" v-bind:key="category.id">
          <router-link :to="{path: '/category/' + category.strCategory}">
            <img v-bind:src="category.strCategoryThumb" />
            <p>{{ category.strCategory }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})

export default class Categories extends Vue {
  name: "categories"
  categories: Array<any> = []
  axios: any
  data() {
    return {
      categories: [],
    }
  }
  /* Request to get Categories*/
  created() {
    const requestCategories = "/categories.php";
    this.axios
      .get(requestCategories)
      .then(response => {
        this.categories = response.data.categories;
      })
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.categories {
  margin: 8em 1em;
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

@media (min-width: 1200px) {
  .categories {
    margin: 5em 0;
  }
  ul.grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (min-width: 1700px) {
  ul.grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

</style>
