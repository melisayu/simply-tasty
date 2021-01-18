<template>
  <div class="container">
    <h2 class="category-type"> {{ type }} </h2>
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
import Card from "@/components/Card.vue";

export default {
  name: "categoryList",
  components: {
    Card,
  },
  data() {
    return {
      type: '',
      meals: [],
    }
  },
  created() {
    const { type } = this.$route.params;
    this.type = type;
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
  top: 80px;
}

.category-wrap {
  padding: 4em 1.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 16px;
}

@media (min-width: 768px) {
  .category-wrap {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (min-width: 1200px) {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
