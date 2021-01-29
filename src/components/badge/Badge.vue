<template>
  <div class="enk-badge" :class="styling">
    <slot></slot>
    <div class="enk-badge__indicator" v-if="isVisible">
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
      const prefix = `${Config.ABBR}-badge`;
      const type = `${prefix}--${props.type}`;
      const position = `${prefix}--${props.position}`;

      return {
        [type]: true,
        [position]: true,
        [type + "--pulse"]: props.pulse,
        [prefix + "--dot"]: props.dot,
        [prefix + "--pulse"]: props.pulse
      };
    });

    return {
      isVisible,
      parsedValue,
      styling
    };
  }
});
</script>
