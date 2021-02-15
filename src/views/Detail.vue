<template>
  <div class="container detail wrapper">
    <h2> {{ meals.strMeal }} </h2>
    <img v-bind:src="meals.strMealThumb" />
    <div class="button-wrapper">
      <Button class="secondary" :buttonText="firstButton"></Button>
      <Button class="secondary" :buttonText="secondButton"></Button>
    </div>
    <div class="tags-wrap">
      <Tag v-for="tag in tags" v-bind:key="tag" :tagText="tag">
      </Tag>
    </div>
    <div class="wrapper">
      <div class="text-justify">
        <h5>Ingredients</h5>
        <ul>
          <li v-for="i in ingredients" v-bind:key="i.index">
            {{ i.measure + " " + i.ingredient }}
          </li>
        </ul>
      </div>
      <div class="text-justify">
        <h5>Directions</h5>
        <p>
          {{ meals.strInstructions }}
        </p>
      </div>
    </div>
    <h5>Other meals from the same category</h5>
    <div class="relevant">
      <Card
        v-for="item in relevantItems"
        v-bind:key="item.idMeal"
        :cardId="item.idMeal"
        :cardTitle="item.strMeal"
        :cardPreview="item.strMealThumb"
      >
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Tag from "@/components/Tag.vue";

@Component({
  components: {
    Button,
    Card,
    Tag,
  },
})
export default class Detail extends Vue {
  name = "home"
  id = ""
  meals: any
  ingredients: Array<any> = []
  measures: Array<any> = []
  tags = ""
  type = ""
  relevantItems: Array<any> = []
  axios: any
  data() {
    return {
      id: "",
      meals: {},
      firstButton: "Print",
      secondButton: "Share",
      ingredients: [],
      tags: [],
      type: "",
      relevantItems: [],
    }
  }
  created() {
    // Get a meal ID that has passed into route param
    const { id } = this.$route.params;
    this.id = id;
    this.axios
      // Get detail information
      .get(`/lookup.php?i=${id}`)
      .then(response => {
        this.meals = response.data.meals[0]; // General detailed data
        this.tags = this.meals.strTags && this.meals.strTags.split(","); // Split string of tags into individual tags
        this.type = this.meals.strCategory;

        // A function to filter response data to get ingredients and measures
        const filterData = (meals, prefix) => {
          return Object.keys(meals)
            .filter(item => item.includes(prefix))
            .map(key => meals[key])
            .filter(name => name && name.replace(/\s/g, "").length && name);
        };

        // Put filtered ingredients and measures into "ingredients" array of object
        const ingredients = filterData(this.meals, "strIngredient");
        const measures = filterData(this.meals, "strMeasure");
        Object.values(ingredients).map((value, index) => {
          this.ingredients.push({
            "id": index + 1,
            "ingredient": value,
            "measure": measures[index],
          })
        })
      })
  }
  @Watch("type")
  getRelevantItems() {
    // Get a list of meals based on category (relevant items)
    this.axios
      .get(`/filter.php?c=${this.type}`)
      .then(response => {
        const meals = response.data.meals;

        // Randomly pick 3 other meals from related category
        const randomized = meals.sort(() => 0.5 - Math.random())
        this.relevantItems = randomized.slice(0, 3)
      })
  }
}

</script>

<style lang="scss">
.detail {
  position: relative;
  padding: 1em 16px !important;

  img {
    max-height: 500px;
    width: 100%;
  }

  .button-wrapper {
    top: 2em;
    position: relative;
  }

  .tags-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    top: 4em;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    margin: 4em 1em 2em 1em;

    h5 {
      margin-bottom: 0;
    }

    ul {
      list-style-type: disc;
      text-align: left;
    }
  }

  .relevant {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin: 0 1em 1em 1em;

    .card * {
      max-width: 100%;
      margin: auto;
    }
  }
}

@media screen and (min-width: 768px) {
  .detail {
    img {
      width: auto;
      max-width: 35%;
    }

    .wrapper {
        grid-template-columns: 1fr 1fr;
    }

    .relevant {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
}
</style>
