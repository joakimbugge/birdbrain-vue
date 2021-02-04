<template>
  <div :class="styling">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Config } from "../../core/Config";
import { Breakpoint } from "../../core/enums/Breakpoint";

type SizeProp = string | number | undefined;

interface Breakpoints {
  [key: string]: SizeProp;
}

export interface Styles {
  [key: string]: boolean;
}

export default defineComponent({
  props: {
    size: [String, Number],
    xs: [String, Number] as PropType<SizeProp>,
    sm: [String, Number] as PropType<SizeProp>,
    md: [String, Number] as PropType<SizeProp>,
    lg: [String, Number] as PropType<SizeProp>,
    xl: [String, Number] as PropType<SizeProp>
  },
  setup(props) {
    const getStylingForBreakpoints = (breakpoints: Breakpoints): Styles => {
      return Object.keys(breakpoints).reduce((accumulator, breakpoint) => {
        const value = breakpoints[breakpoint];

        return {
          ...accumulator,
          [`${Config.ABBR}-grid-row--${breakpoint}--${value}`]: Boolean(value)
        };
      }, {});
    };

    const styling = computed(() => {
      const element = `${Config.ABBR}-grid-row`;

      const breakpoints: Breakpoints = {
        [Breakpoint.Xs]: props.xs,
        [Breakpoint.Sm]: props.sm,
        [Breakpoint.Md]: props.md,
        [Breakpoint.Lg]: props.lg,
        [Breakpoint.Xl]: props.xl
      };

      return {
        [element]: true,
        [element + `--${props.size}`]: Boolean(props.size),
        ...getStylingForBreakpoints(breakpoints)
      };
    });

    return {
      styling
    };
  }
});
</script>
