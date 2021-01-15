<template>
  <div class="container">

    <p>Welcome</p>
    <h1>Its all simply tasty</h1>
    <Button :buttonText="buttonText"></Button>
    <p>
      Find your tastiest recipes here
    </p>
    <div>
      Gambar makanan
    </div>

    <h2>Categories</h2>
    <div>
      Category cards
    </div>

    <h2>Our Tastiest Recipes This Month</h2>
    <div>
      Card and Preview
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button";

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
