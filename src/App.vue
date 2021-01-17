<template>
  <div id="app">
    <div class="bg">
    </div>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Simply Tasty",
  components: {
    Header,
    Footer,
  },
}

</script>
