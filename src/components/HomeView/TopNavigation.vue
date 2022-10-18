<template>
  <div class="overflow-x-auto flex bg-white">
    <template v-for="(value, index) in topNavigation" :key="index">
      <a :href="value.href">
        <div
          class="
            p-3
            font-bold
            text-sm text-stone-800
            hover:text-rose-500
            whitespace-nowrap
          "
        >
          {{ value.text }}
        </div>
      </a>
    </template>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";

interface TopNavigation {
  text: string;
  href: string;
}

export default {
  name: "topNavigation",
  props: {
    topNavigation: {
      type: Array as PropType<TopNavigation[]>,
      required: true,
    },
  },
};
</script>