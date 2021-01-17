<template>
  <div class="container">
    <div class="hero">
      <p>Welcome</p>
      <h1>Its all simply tasty</h1>
      <p>
        Find your tastiest recipes here.
        <br>
        Tastiest recipes you can find on the internet.
      </p>
      <div class="my-4">
        <Button :buttonText="buttonText"></Button>
      </div>
    </div>

    <div class="categories">
      <h2>Categories</h2>
      <ul>
        <li class="category-card" v-for="category in categories" v-bind:key="category.id">
          <img v-bind:src="category.strCategoryThumb" />
          <p>{{ category.strCategory }}</p>
        </li>
      </ul>
    </div>

    <div class="featured">
      <h2>Our Tastiest Recipes</h2>
      <Card></Card>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";

export default {
  name: "home",
  components: {
    Button,
    Card,
  },
  data() {
    return {
      buttonText: "I want to eat",
      categories: [],
    }
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => (this.categories = response.data.categories));
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.hero {
  text-align: left;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  position: relative;
  margin-top: 80px;
}

.categories {
  margin: 4em 0;
}

.featured {
  display: grid;
  column-gap: 16px;
  margin-bottom: 4em;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 16px;
  padding: 0;
}
ul li.category-card {
  border: 1px solid $gray;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  cursor: pointer;
  padding: 0 10px;
  font-size: 1.2rem;

  img {
    width: 100px;
  }
}

ul li.category-card:hover {
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>
