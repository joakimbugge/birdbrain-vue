<template>
  <div :class="styling">
    <div :class="indicatorStyling" :style="{ width }"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Config } from "../../core/Config";
import { Type } from "../../core/enums/Type";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: Type.Primary
    },
    progress: {
      type: [String, Number] as PropType<string | number>,
      default: 0
    },
    fixed: Boolean,
    outline: Boolean
  },
  setup(props) {
    const composeStyling = (element: string) => () => {
      const type = `${element}--${props.type}`;

      return {
        [element]: true,
        [element + "--fixed"]: props.fixed,
        [type]: true,
        [type + "--outline"]: props.outline
      };
    };

    const width = computed(() => {
      return `${Math.max(0, Math.min(Number(props.progress), 100))}%`;
    });

    const styling = computed(composeStyling(`${Config.ABBR}-progress-bar`));
    const indicatorStyling = computed(composeStyling(`${Config.ABBR}-progress-bar__indicator`));

    return {
      width,
      styling,
      indicatorStyling
    };
  }
});
</script>
