<template>
  <a class="button">
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
  methods: {
    buttonOnClick() {
      console.log('aahhh buttonnya kepencet')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

a.button {
  background: $main-color;
  padding: 8px 20px;
  border-radius: 4px;
  color: white;
  letter-spacing: 0.1em;
}

</style>
