<template>
  <div class="enk-alert" :class="styling">
    <Icon :name="iconName" class="enk-alert__icon" v-if="icon !== false" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Type } from "../../core/enums/Type";
import Icon, { IconName } from "../icon/Icon.vue";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<Type>,
      default: Type.Warning
    },
    outline: Boolean,
    text: Boolean,
    icon: [String, Boolean] as PropType<IconName | boolean>,
    inline: Boolean
  },
  components: { Icon },
  setup(props) {
    const styling = computed(() => {
      const element = `enk-alert`;
      const typeModifier = `--${props.type}`;

      return {
        [element + typeModifier]: true,
        [element + "--inline"]: props.inline,
        [element + typeModifier + "--outline"]: props.outline,
        [element + typeModifier + "--text"]: props.text
      };
    });

    const iconName = computed(() => {
      if (props.icon) {
        return props.icon;
      }

      switch (props.type) {
        case Type.Danger:
          return "times-circle";
        case Type.Warning:
          return "exclamation-triangle";
        case Type.Success:
          return "check-circle";
        default:
          return "info-circle";
      }
    });

    return {
      iconName,
      styling
    };
  }
});
</script>
