<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath"/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  }
})

export default class App extends Vue {
  name: "App"
}

</script>
