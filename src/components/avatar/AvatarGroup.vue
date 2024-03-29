<template>
  <div :class="styling">
    <slot v-if="false"></slot>
    <component v-for="(avatar, index) in slicedAvatars" :key="avatar" :is="avatar" :style="{ 'z-index': 99 - index }" />
    <Avatar type="dark" v-if="avatars.length > max" :class="avatarStyling">+{{ avatars.length - max }}</Avatar>
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

        if (Array.isArray(avatars.value[0].children)) {
          avatars.value = avatars.value[0].children as VNode[];
        }
      }
    });

    const isGrouped = computed(() => avatars.value.length >= Number(props.min));
    const slicedAvatars = computed(() => slice(avatars.value, 0, Number(props.max)));

    const styling = computed(() => {
      const element = `${Config.ABBR}-avatar-group`;

      return {
        [element]: true,
        [element + "--grouped"]: isGrouped.value,
        [element + "--narrow"]: props.narrow
      };
    });

    const avatarStyling = computed(() => {
      const element = `${Config.ABBR}-avatar-group__rest`;

      return {
        [element]: true
      };
    });

    return {
      avatars,
      slicedAvatars,
      styling,
      avatarStyling
    };
  }
});
</script>
