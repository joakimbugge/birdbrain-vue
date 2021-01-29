<template>
  <div :class="styling">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Config } from "../../core/Config";

export default defineComponent({
  props: {
    fluid: Boolean,
    center: Boolean
  },
  setup(props) {
    const styling = computed(() => {
      const element = `${Config.ABBR}-container`;

      return {
        [element]: true,
        [element + "--fluid"]: props.fluid,
        [element + "--center"]: props.center
      };
    });

    return {
      styling
    };
  }
});
</script>
