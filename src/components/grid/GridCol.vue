<template>
  <div class="enk-grid-col" :class="styling">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { isPlainObject } from "lodash-es";
import { computed, defineComponent, PropType } from "vue";
import { Config } from "../../core/Config";
import { Breakpoint } from "../../core/enums/Breakpoint";

type SizeProp = string | number | Size | undefined;

interface Breakpoints {
  [key: string]: SizeProp;
}

interface Styles {
  [key: string]: boolean;
}

interface Size {
  size: string | number;
  order: string | number;
}

export default defineComponent({
  props: {
    size: [String, Number],
    order: [String, Number],
    xs: [String, Number, Object] as PropType<SizeProp>,
    sm: [String, Number, Object] as PropType<SizeProp>,
    md: [String, Number, Object] as PropType<SizeProp>,
    lg: [String, Number, Object] as PropType<SizeProp>,
    xl: [String, Number, Object] as PropType<SizeProp>
  },
  setup(props) {
    const getStylingForBreakpoints = (breakpoints: Breakpoints): Styles => {
      return Object.keys(breakpoints).reduce((accumulator, breakpoint) => {
        const value = breakpoints[breakpoint];

        if (isPlainObject(value)) {
          const { size, order } = value as Size;

          return {
            ...accumulator,
            [`${Config.ABBR}-grid-col--${breakpoint}--${size}`]: Boolean(size),
            [`${Config.ABBR}-grid-col--${breakpoint}--order--${order}`]: Boolean(order)
          };
        }

        return {
          ...accumulator,
          [`${Config.ABBR}-grid-col--${breakpoint}--${value}`]: Boolean(value)
        };
      }, {});
    };

    const styling = computed(() => {
      const breakpoints: Breakpoints = {
        [Breakpoint.Xs]: props.xs,
        [Breakpoint.Sm]: props.sm,
        [Breakpoint.Md]: props.md,
        [Breakpoint.Lg]: props.lg,
        [Breakpoint.Xl]: props.xl
      };

      return {
        [`${Config.ABBR}-grid-col--` + props.size]: Boolean(props.size),
        [`${Config.ABBR}-grid-col--order--` + props.order]: Boolean(props.order),
        ...getStylingForBreakpoints(breakpoints)
      };
    });

    return {
      styling
    };
  }
});
</script>
