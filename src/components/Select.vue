<template>
  <div class="select-wrapper">
    <select class="select" v-on:change="onChangeFunc($event)">
      <option selected value="">
        Sort
      </option>
      <option v-for="option in options" :key="option.id" v-bind:value="option.id">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Select extends Vue {
  name = "select"
  @Prop() onChangeFunc
  @Prop() options: Array<any>
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.select-wrapper {
  margin-bottom: 1.2em;

  select.select {
    height: 38px;
    width: 218px;

    option {
      height: 40px;
    }
  }
}

@media (min-width: 768px) {
}

</style>
