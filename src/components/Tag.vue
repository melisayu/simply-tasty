<template>
  <div class="tags">
    <a>
      {{ tagText }}
    </a>
  </div>
</template>

<script>
export default {
  name: "tag",
  props: {
    tagText: String,
  },
  methods: {
    buttonOnClick() {
      console.log('CLICK TAG')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.tags {
  border: 2px dashed $main-color;
  background: $banana;
  margin: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: .8em;
}

</style>
