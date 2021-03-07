<template>
  <div class="container detail wrapper">
    <Spinner />
    <h2> {{ mealDetail.strMeal }} </h2>
    <img v-bind:src="mealDetail.strMealThumb" />
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
          <li v-for="(data, i) in ingredients.ingredients" v-bind:key="data.index">
            {{ `${ingredients.measures[i]} ${data}` }}
          </li>
        </ul>
      </div>
      <div class="text-justify">
        <h5>Directions</h5>
        <p>
          {{ mealDetail.strInstructions }}
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
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";
import Tag from "@/components/Tag.vue";

@Component({
  components: {
    Button,
    Card,
    Spinner,
    Tag,
  },
})
export default class Detail extends Vue {
  name = "home"
  id = ""
  data() {
    return {
      id: "",
      firstButton: "Print",
      secondButton: "Share",
    }
  }
  get mealDetail() {
    return this.$store.state.mealDetail;
  }
  get tags() {
    return this.$store.state.tags;
  }
  get ingredients() {
    return this.$store.state.ingredients;
  }
  get relevantItems() {
    return this.$store.getters.pickRelevantItems;
  }
  created() {
    // Get a meal ID that has passed into route param and dispatch get detail
    const { id } = this.$route.params;
    this.id = id;
    this.$store.dispatch('getDetail', id);
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
