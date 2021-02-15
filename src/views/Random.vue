<template>
  <div class="container wrapper">
    <h2>Try a Random Recipe!</h2>
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
import { Component, Vue } from "vue-property-decorator";

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
      buttonText: "Show me another random recipe!" // This is the random button
    }
  }
  /* Requests to get random items*/
  public getRandom() {
    const requestRandom = "/random.php";
    this.axios
      .get(requestRandom)
      .then(response => {
        this.items.push(response.data.meals[0])
    });
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
.wrapper {
  padding: 1em 16px !important;
}
.random {
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 2em;
}

@media screen and (min-width: 768px) {
  .random {
    max-width: 80%;
  }
}

</style>
