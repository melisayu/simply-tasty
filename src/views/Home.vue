<template>
  <div class="container">
    <div class="bg">
    </div>
    <div class="hero">
      <p>Welcome</p>
      <h1>Its all simply tasty</h1>
      <p>
        Find your tastiest recipes here.
        <br>
        Tastiest recipes you can find on the internet.
      </p>
      <div class="my-4">
        <Button :buttonText="buttonText"></Button>
      </div>
    </div>
    <Categories></Categories>
    <Random></Random>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";

import Categories from "./Categories.vue";
import Random from "./Random.vue";

export default {
  name: "home",
  components: {
    Button,
    Categories,
    Random,
  },
  data() {
    return {
      buttonText: "I want to eat",
    }
  },
}

</script>

<style lang="scss">
.hero {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  position: relative;
  margin-top: 80px;

  h1 {
    font-size: 1.5em;
  }
  p {
    margin: 0;
  }
}

@media (min-width: 768px) {
  .hero {
    height: 45vh;
    p {
      margin: .5em 0;
    }
  }
}

@media (min-width: 1200px) {
  .hero {
    height: 80vh;
    padding: 40px;

    h1 {
      margin: .67em 0;
      font-size: 2em;
    }
    p {
      margin: 1em 0;
    }
  }
}
</style>
