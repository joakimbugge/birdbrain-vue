<template>
  <button type="button" :class="styling" :style="{ width, height }" :disabled="disabled" ref="root" @click="ripple">
    <slot v-if="!isLoading"></slot>
    <Icon v-else name="spinner" spin />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref, toRefs, VNode, watch } from "vue";
import { Config } from "../../core/Config";
import { Type } from "../../core/enums/Type";
import Icon from "../icon/Icon.vue";

interface Props {
  type: Type;
  block: boolean;
  outline: boolean;
  text: boolean;
  disabled: boolean;
  loading: boolean;
}

interface ComponentLike {
  type: {
    name?: string;
  };
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: Type.Primary
    },
    block: Boolean,
    outline: Boolean,
    text: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  components: {
    Icon
  },
  setup(props, { slots }) {
    const ICON_COMPONENT_NAME = "Icon";
    const { loading } = toRefs<Props>(props);

    const root = ref<HTMLElement | null>(null);
    const width = ref<string | null>(null);
    const height = ref<string | null>(null);
    const isIcon = ref(false);
    const isIconFirst = ref(false);
    const isIconLast = ref(false);
    const isIconOnly = ref(false);
    const isLoading = ref(false);

    const onLoadingChange = (current: boolean, previous: boolean): void => {
      const getPropertyValue = (property: "width" | "height"): string | null =>
        !previous && current ? window.getComputedStyle(root.value as Element).getPropertyValue(property) : null;

      width.value = getPropertyValue("width");
      height.value = getPropertyValue("height");
      isLoading.value = current;
    };

    onMounted(() => {
      if (slots?.default) {
        const children = slots.default();
        const isComponentLikeNode = (node: VNode): node is VNode & ComponentLike => typeof node.type !== "string";
        const isIconNode = (node: VNode) => isComponentLikeNode(node) && node.type.name === ICON_COMPONENT_NAME;

        isIcon.value = !props.loading && children.some(isIconNode);
        isIconFirst.value = isIcon.value && isIconNode(children[0]);
        isIconLast.value = isIcon.value && !isIconFirst.value;
        isIconOnly.value = isIcon.value && children.every(isIconNode);
      }

      if (loading.value) {
        onLoadingChange(true, false);
      }
    });

    watch(loading, onLoadingChange);

    const ripple = (event: ElementMouseEvent): void => {
      if (!root.value || !event.currentTarget) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const left = event.clientX - rect.left;
      const top = event.clientY - rect.top;
      const circle = document.createElement("span");

      circle.classList.add(`${Config.ABBR}-button__ripple`);
      circle.style.left = `${left}px`;
      circle.style.top = `${top}px`;

      circle.addEventListener("animationend", () => {
        circle.remove();
      });

      root.value.appendChild(circle);
    };

    const styling = computed(() => {
      const element = `${Config.ABBR}-button`;
      const typeModifier = `--${props.type}`;

      return {
        [element + ""]: true,
        [element + "--icon"]: isIcon.value,
        [element + "--icon--first"]: !isIconOnly.value && isIconFirst.value,
        [element + "--icon--last"]: !isIconOnly.value && isIconLast.value,
        [element + "--block"]: props.block,
        [element + typeModifier]: true,
        [element + typeModifier + "--outline"]: props.outline,
        [element + typeModifier + "--text"]: props.text
      };
    });

    return {
      root,
      width,
      height,
      isIcon,
      isIconFirst,
      isIconLast,
      isIconOnly,
      isLoading,
      styling,
      ripple
    };
  }
});
</script>
