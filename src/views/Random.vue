<template>
  <div class="container random-wrapper">
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
    <Button :buttonText="buttonText" :onClickFunc="randomize"></Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card,
    Button,
  },
})
export default class Randomizer extends Vue {
  name = "random"
  items: Array<any> = []
  axios: any

  data() {
    return {
      items: [],
      buttonText: "Show me other random recipes!" // This is the random button
    }
  }
  /* Requests to get random items*/
  public getRandom() {
    const requestRandom = "/random.php";
    for (let i=0; i < 4; i++) {
      this.axios
        .get(requestRandom)
        .then(response => {
          this.items.push(response.data.meals[0])
        });
    }
  }
  /* Display random items when categories component is loaded */
  created() {
    this.getRandom();
  }
  /* Function onClick "random" button */
  randomize() {
    this.items = [];
    this.getRandom();
  }
}

</script>

<style lang="scss">
.random-wrapper {
  margin: 8em 1em;

  .random {
    display: grid;
    grid-template-columns: repeat(2, (minmax(135px, 1fr)));
    column-gap: 16px;
    row-gap: 16px;
    margin-bottom: 4em;
  }
}

@media (min-width: 470px) and (max-width: 620px) {
  .random {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (min-width: 768px) {
  .random-wrapper {
    margin: 4em 0;
    .random {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

</style>
