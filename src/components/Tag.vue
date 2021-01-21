<template>
  <div class="tags">
    <p>
      {{ tagText }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})

export default class Tag extends Vue {
  name = "tag"
  @Prop() tagText: string
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.tags {
  border: 2px dashed $main-color;
  background: $banana;
  margin: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: .8em;
  p {
    margin: 0;
  }
}

</style>
