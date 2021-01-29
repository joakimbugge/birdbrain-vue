<template>
  <FontAwesomeIcon :icon="['fas', name]" :spin="spin" />
</template>

<script lang="ts">
import { IconName as FaIconName, IconDefinition as FaIconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent, PropType } from "vue";

export type IconDefinition = FaIconDefinition;
export type IconName = FaIconName;

library.add(fas);

const DISABLED_ICONS: IconName[] = ["font-awesome-logo-full"];

export const icons: IconDefinition[] = Object.values(fas).filter(({ iconName }) => !DISABLED_ICONS.includes(iconName));

export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
      validator: (value: IconName) => icons.some(({ iconName }) => iconName === value)
    },
    spin: Boolean
  },
  components: { FontAwesomeIcon }
});
</script>
