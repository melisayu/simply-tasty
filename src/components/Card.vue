<template>
  <div class="card">
    <router-link :to="{path: '/detail/' + cardId}">
      <img v-bind:src="cardPreview" />
      <h5> {{ cardTitle }} </h5>
    </router-link>
    <div class="tags-wrap">
      <Tag v-for="tag in cardTags" v-bind:key="tag" :tagText="tag">
      </Tag>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";

export default {
  name: "card",
  props: {
    cardTitle: String,
    cardPreview: String,
    cardTags: Array,
    cardId: String,
  },
  components: {
    Tag,
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.card {
  background: white;
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
