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
  padding: 12px 20px;
  border-radius: 24px;
  color: white;
  letter-spacing: 0.1em;
}

a.button.secondary {
  margin: 16px;
  border: 2px dashed $main-color;
  color: $main-color;
  background: unset;
  text-transform: uppercase;
}

</style>
