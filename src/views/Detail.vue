<template>
  <div class="container">

    <img />
    <h1>Recipe name</h1>
    <div>
      <button>print</button>
      <button>share</button>
    </div>

    <h2>Ingredients</h2>
    <h2>Directions</h2>

  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";

export default {
  name: "home",
  components: {
    Button,
  },
  data() {
    return {
      buttonText: "I want to eat"
    }
  }
}

</script>
