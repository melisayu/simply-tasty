<template>
  <a class="button">
    {{ buttonText }}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Button extends Vue {
  name = "button"
  @Prop() buttonText: string
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

a.button {
  background: $main-color;
  padding: 6px 10px;
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

@media (min-width: 768px) {
  a.button {
    padding: 12px 20px;
  }
}

</style>
