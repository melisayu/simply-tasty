<template>
  <div class="container">
    <h2>Our Tastiest Recipes</h2>
    <Select :options="sortOptions" :onChangeFunc="getSort"></Select>
    <div class="random-list">
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
import { Component, Vue, Emit } from "vue-property-decorator";

import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Select from "@/components/Select.vue";

@Component({
  components: {
    Card,
    Button,
    Select,
  },
})
export default class Randomizer extends Vue {
  name = "RandomList"
  items: Array<any> = []
  axios: any
  sortOptions: Array<string>
  selected: string

  data() {
    return {
      items: [],
      sortOptions: [{
        id: "1",
        label: "A-Z",
      }, {
        id: "2",
        label: "Z-A",
      }],
      selected: "",
    }
  }
  /* Display random items when component is loaded */
  created() {
    /* Requests to get random items*/
    const requestRandom = "/random.php";
    for (let i=0; i < 10; i++) {
      this.axios
        .get(requestRandom)
        .then(response => {
          this.items.push(response.data.meals[0])
        });
    }
  }
  /* Function to sort random displayed recipes */
  getSort(e) {
    this.selected = e.target.value;
    if (this.selected === "1" ) {
      this.items.sort((a, b) => {
        return (a.strMeal < b.strMeal) ? -1 : (a.strMeal > b.strMeal) ? 1 : 0;
      })
    }
    if (this.selected === "2") {
      this.items.sort((a, b) => {
        return (a.strMeal < b.strMeal) ? 1 : (a.strMeal > b.strMeal) ? -1 : 0;
      })
    }
  }
}

</script>

<style lang="scss">
.random-list {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-bottom: 2em;
    margin-left: 1em;
    margin-right: 1em;
  }

@media screen and (min-width: 375px) {
  .random-list {
    grid-template-columns: repeat(2, (minmax(135px, 1fr))) !important;
  }
}

@media screen and (min-width: 768px) {
  .random-list {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  @media screen and (min-width: 992px) {
    .random-list {
      grid-template-columns: repeat(4, 1fr) !important;
    }
  }
}

</style>
