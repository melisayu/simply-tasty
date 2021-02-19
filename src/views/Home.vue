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
        <Button :buttonText="buttonText" :onClickFunc="redirect"></Button>
      </div>
    </div>
    <Categories></Categories>
    <RandomList></RandomList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Button from "@/components/Button.vue";
import RandomList from "@/components/RandomList.vue";

import Categories from "./Categories.vue";

@Component({
  components: {
    Button,
    Categories,
    RandomList,
  },
})
export default class Home extends Vue {
  name = "home"
  data() {
    return {
      buttonText: "Show me something!",
    }
  }
  // Redirect to random page
  redirect() {
    this.$router.push('Random');
  }
}

</script>

<style lang="scss">
.hero {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 80px;
  height: 40vh;

  h1 {
    font-size: 1.5em;
  }
  p {
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .hero {
    height: 45vh;
    p {
      margin: .5em 0;
    }
  }
}

@media screen and (min-width: 900px) {
  .hero {
    height: calc(90vh - 80px);
  }
}

@media screen and (min-width: 1200px) {
  .hero {
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

// Ipad pro big screen
@media only screen
  and (min-device-width: 1024px)
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .hero {
      height: 45vh;
    }
}
</style>
