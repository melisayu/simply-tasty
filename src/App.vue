<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Simply Tasty",
  components: {
    Header,
    Footer,
  },
}

</script>
