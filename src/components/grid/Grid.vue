<template>
  <div :class="styling">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Config } from "../../core/Config";

export default defineComponent({
  setup() {
    const styling = computed(() => {
      const element = `${Config.ABBR}-grid`;

      return {
        [element]: true
      };
    });

    return {
      styling
    };
  }
});
</script>
