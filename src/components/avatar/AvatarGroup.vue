<template>
  <div :class="styling">
    <slot v-if="false"></slot>
    <component v-for="(avatar, index) in slicedAvatars" :key="avatar" :is="avatar" :style="{ 'z-index': 99 - index }" />
    <Avatar type="dark" v-if="avatars.length > max" class="enk-avatar-group__rest">+{{ avatars.length - max }}</Avatar>
  </div>
</template>

<script lang="ts">
import { slice } from "lodash-es";
import { computed, defineComponent, onMounted, PropType, ref, VNode } from "vue";
import { Config } from "../../core/Config";
import Avatar from "./Avatar.vue";

export default defineComponent({
  components: { Avatar },
  props: {
    min: {
      type: [String, Number] as PropType<string | number>,
      default: 0
    },
    max: {
      type: [String, Number] as PropType<string | number>,
      default: 3
    },
    narrow: Boolean
  },
  setup(props, { slots }) {
    const avatars = ref<VNode[]>([]);

    onMounted(() => {
      if (slots?.default) {
        avatars.value = slots.default();
      }
    });

    const isGrouped = computed(() => avatars.value.length >= Number(props.min));
    const slicedAvatars = computed(() => slice(avatars.value, 0, Number(props.max)));

    const styling = computed(() => {
      const prefix = `${Config.ABBR}-avatar-group`;

      return {
        [prefix]: true,
        [prefix + "--grouped"]: isGrouped.value,
        [prefix + "--narrow"]: props.narrow
      };
    });

    return {
      avatars,
      slicedAvatars,
      styling
    };
  }
});
</script>
