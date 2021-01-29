<template>
  <div class="enk-avatar" :class="styling">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { Config } from "../../core/Config";
import { Type } from "../../core/enums/Type";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: Type.Primary
    }
  },
  setup(props, { slots }) {
    const isImage = ref(false);

    onMounted(() => {
      if (slots?.default) {
        isImage.value = slots.default().some(({ type }) => type === "img");
      }
    });

    const styling = computed(() => {
      const prefix = `${Config.ABBR}-avatar`;
      const type = `${prefix}--${props.type}`;

      return {
        [type]: true,
        [prefix + "--image"]: isImage.value
      };
    });

    return {
      styling
    };
  }
});
</script>
