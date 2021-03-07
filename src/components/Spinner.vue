<template>
  <spinner
    v-if="loading"
    line-fg-color="#F9BB13"
    line-bg-color="FFF"
  >
  </spinner>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueSimpleSpinner from "vue-simple-spinner";

@Component({
  components: {
    spinner: VueSimpleSpinner,
  },
})

export default class Spinner extends Vue {
  name: "spinner"
  get loading() {
    return this.$store.state.loading;
  }
}
</script>
