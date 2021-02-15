<template>
  <div class="container category-type wrapper">
    <h2> {{ type }} </h2>
    <div class="category-wrap">
        <Card
          v-for="meal in meals"
          v-bind:key="meal.idMeal"
          :cardTitle="meal.strMeal"
          :cardPreview="meal.strMealThumb"
          :cardId="meal.idMeal"
        >
        </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card,
  },
})

export default class CategoryList extends Vue {
  name = "categoryList"
  type = ""
  meals: Array<any> = []
  axios: any
  data() {
    return {
      type: '',
      meals: [],
    }
  }
  created() {
    // Get category type that was chosen and passed into route param
    const { type } = this.$route.params;
    this.type = type;
    // Get list of meals based on category
    this.axios
      .get(`/filter.php?c=${type}`)
      .then(response => {
        this.meals = response.data.meals;
      })
  }
}

</script>

<style lang="scss">
.category-type {
  position: relative;
}

.category-wrap {
  padding: 0 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 16px;
}

@media screen and (min-width: 768px) {
  .category-wrap {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media screen and (min-width: 1200px) {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
