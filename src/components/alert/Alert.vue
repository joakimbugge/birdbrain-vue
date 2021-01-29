<template>
  <div :class="styling">
    <Icon :name="iconName" :class="iconStyling" v-if="icon !== false" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Config } from "../../core/Config";
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
      const element = `${Config.ABBR}-alert`;
      const typeModifier = `--${props.type}`;

      return {
        [element]: true,
        [element + typeModifier]: true,
        [element + "--inline"]: props.inline,
        [element + typeModifier + "--outline"]: props.outline,
        [element + typeModifier + "--text"]: props.text
      };
    });

    const iconStyling = computed(() => {
      const element = `${Config.ABBR}-alert__icon`;

      return {
        [element]: true
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
      styling,
      iconStyling
    };
  }
});
</script>
