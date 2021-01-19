<template>
  <div class="container detail">
    <img />
    <h3> {{ meals.strMeal }} </h3>
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
          <li v-for="(measurement, i) in measures" v-bind:key="i">
            {{ measurement + " " + ingredients[i] }}
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Button from "@/components/Button.vue";
import Tag from "@/components/Tag.vue";

@Component({
  components: {
    Button,
    Tag,
  },
})
export default class Detail extends Vue {
  name = "home"
  id = ''
  meals: any
  ingredients: Array<any> = []
  measures: Array<any> = []
  tags = ''
  axios: any
  data() {
    return {
      id: '',
      meals: {},
      firstButton: 'Print',
      secondButton: 'Share',
      ingredients: [],
      measures: [],
      tags: [],
    }
  }
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.axios
      .get(`/lookup.php?i=${id}`)
      .then(response => {
        this.meals = response.data.meals[0];
        this.ingredients = Object.keys(this.meals).filter(item => item.includes('strIngredient')).map(key => this.meals[key]).filter(name => name);
        this.measures = Object.keys(this.meals).filter(item => item.includes('strMeasure')).map(key => this.meals[key]).filter(name => name);
        this.tags = this.meals.strTags && this.meals.strTags.split(',');
      })
  }
}

</script>

<style lang="scss">
.detail {
  position: relative;
  margin-top: 4em;
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
    margin: 4em 1em;
    h5 {
      margin-bottom: 0;
    }
    ul {
      list-style-type: disc;
      text-align: left;
    }
  }
}

@media (min-width: 768px) {
  .detail {
    img {
      width: auto;
      max-width: 35%;
    }
    .wrapper {
        grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
