<template>
  <div :class="styling">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    fluid: Boolean,
    center: Boolean
  },
  setup(props) {
    const styling = computed(() => {
      return {
        ["enk-container"]: true,
        ["enk-container--fluid"]: props.fluid,
        ["enk-container--center"]: props.center
      };
    });

    return {
      styling
    };
  }
});
</script>
