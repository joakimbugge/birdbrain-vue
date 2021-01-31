<template>
  <div :class="styling">
    <slot></slot>
    <div :class="indicatorStyling" v-if="isVisible">
      <span v-if="!dot">{{ parsedValue }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Config } from "../../core/Config";
import { Type } from "../../core/enums/Type";

enum Position {
  TopLeft = "top-left",
  TopRight = "top-right",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left"
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: Type.Danger
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 0
    },
    min: {
      type: [Number, String],
      default: 0
    },
    pulse: Boolean,
    dot: Boolean,
    position: {
      type: String as PropType<Position>,
      default: Position.TopRight
    }
  },
  setup(props) {
    const isNumber = (value: string | number): boolean => {
      return !!value && (typeof value === "number" || Number.isFinite(parseInt(value, 10)));
    };

    const isVisible = computed(() => {
      const isAboveMin = Number(props.value) >= Number(props.min);
      const isBelowMax = Number(props.value) <= Number(props.max);

      return (
        !isNumber(props.value) || (isNumber(props.value) && isAboveMin && (!props.dot || (props.dot && isBelowMax)))
      );
    });

    const parsedValue = computed(() => {
      const value = isNumber(props.value) ? Number(props.value) : props.value;
      const max = Number(props.max);

      return max && value > max ? `${max}+` : value;
    });

    const styling = computed(() => {
      const element = `${Config.ABBR}-badge`;
      const type = `${element}--${props.type}`;
      const position = `${element}--${props.position}`;

      return {
        [element]: true,
        [type]: true,
        [position]: true,
        [type + "--pulse"]: props.pulse,
        [element + "--dot"]: props.dot,
        [element + "--pulse"]: props.pulse
      };
    });

    const indicatorStyling = computed(() => {
      const element = `${Config.ABBR}-badge__indicator`;

      return {
        [element]: true
      };
    });

    return {
      isVisible,
      parsedValue,
      styling,
      indicatorStyling
    };
  }
});
</script>
