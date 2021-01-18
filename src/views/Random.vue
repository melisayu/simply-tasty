<template>
  <div class="container">
    <h2>Our Tastiest Recipes</h2>
    <div class="random">
      <Card
        v-for="item in items"
        v-bind:key="item.idMeal"
        :cardId="item.idMeal"
        :cardTitle="item.strMeal"
        :cardPreview="item.strMealThumb"
        :cardTags="item.strTags && item.strTags.split(',')"
      >
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";

export default {
  name: "random",
  components: {
    Card,
  },
  data() {
    return {
      items: [],
    }
  },
  /* Requests to get Random Items*/
  created() {
    const requestRandom = "/random.php";
    for (let i=0; i < 4; i++) {
      this.axios
        .get(requestRandom)
        .then(response => {
          this.items.push(response.data.meals[0])
        })
    }
  },
}

</script>

<style lang="scss">
.random {
  display: grid;
  column-gap: 16px;
  margin-bottom: 4em;
  grid-template-columns: repeat(4, 1fr)
}
</style>
