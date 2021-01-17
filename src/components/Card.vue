<template>
  <div class="card">
    <a>
      <img v-bind:src="item.strMealThumb" />
      <h5> {{ item.strMeal }} </h5>
    </a>
    <div class="tags-wrap">
      <Tag v-for="tag in tags" v-bind:key="tag" :tagText="tag">
      </Tag>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";

export default {
  name: "card",
  components: {
    Tag,
  },
  data() {
    return {
      item: {},
      tags: [],
    }
  },
  mounted() {
    this.axios
      .get("json/v1/1/random.php")
      .then(response => {
        this.item = response.data.meals[0];
        this.tags = response.data.meals[0].strTags && response.data.meals[0].strTags.split(',');
      })
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.card {
  background: white;
  max-width: 20%;
  padding-bottom: 16px;
  border-radius: 16px;

  img {
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  h5 {
    margin: .5em;
  }

  .tags-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}

</style>
