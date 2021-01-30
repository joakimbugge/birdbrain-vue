<template>
  <div :class="styling">
    <slot v-if="false"></slot>
    <component ref="targetComponent" :is="targetSlot" @mouseenter="show" @mouseleave="hide" />

    <div ref="tooltip">
      <div :class="tooltipStyling">
        <slot name="content"
          ><p>{{ content }}</p>
        </slot>

        <div data-popper-arrow :class="arrowStyling"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createPopper, Instance } from "@popperjs/core";
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  PropType,
  ref,
  VNode,
  watch,
  ComponentPublicInstance
} from "vue";
import { Config } from "../../core/Config";
import { Type } from "../../core/enums/Type";

enum Position {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right"
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: Type.Dark
    },
    position: {
      type: String as PropType<Position>,
      default: Position.Top
    },
    content: String
  },
  setup(props, { slots }) {
    const targetSlot = ref<VNode | null>(null);
    const targetComponent = ref<ComponentPublicInstance | null>(null);
    const targetElement = ref<Element | null>(null);
    const tooltip = ref<HTMLElement | null>(null);
    const visible = ref(false);
    let popper: Instance;

    onMounted(() => {
      if (slots?.default) {
        targetSlot.value = slots.default()[0];
      }
    });

    onUpdated(() => {
      if (popper) {
        popper.update();
      }
    });

    const show = () => {
      visible.value = true;
    };

    const hide = () => {
      visible.value = false;
    };

    watch(targetComponent, () => {
      if (targetComponent.value?.$el) {
        console.log(targetComponent.value);
        targetElement.value = targetComponent.value.$el;
      }
    });

    watch([targetElement, tooltip], () => {
      if (targetElement.value && tooltip.value) {
        popper = createPopper(targetElement.value, tooltip.value, {
          placement: props.position,
          modifiers: [{ name: "offset", options: { offset: [0, 15] } }]
        });
      }
    });

    watch(
      () => props.position,
      () => {
        if (popper) {
          popper.setOptions({ placement: props.position });
        }
      }
    );

    const styling = computed(() => {
      const element = `${Config.ABBR}-tooltip`;

      return {
        [element]: true,
        [element + `--${props.type}`]: true,
        [element + "--visible"]: visible.value
      };
    });

    const tooltipStyling = computed(() => {
      const element = `${Config.ABBR}-tooltip__tooltip`;

      return {
        [element]: true,
        [element + `--${props.type}`]: true
      };
    });

    const arrowStyling = computed(() => {
      const element = `${Config.ABBR}-tooltip__tooltip__arrow`;

      return {
        [element]: true
      };
    });

    return {
      targetSlot,
      targetComponent,
      show,
      hide,
      styling,
      tooltip,
      tooltipStyling,
      arrowStyling
    };
  }
});
</script>
