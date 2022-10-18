<template>
  <div class="m-2 mt-4">
    <div class="font-bold inline-block">Platform & Sale</div>
    <div class="flex mt-2 flex-wrap">
      <a
        :href="value.href"
        v-for="(value, index) in platformNavigation"
        :key="index"
        class="w-1/5 flex-shrink-0 hover:text-rose-500"
      >
        <div>
          <img :src="value.img" class="w-2/5 mx-auto mt-1" />
          <div class="text-center m-1.5 text-xs">{{ value.title }}</div>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";

interface platformNavigation {
  title: string;
  href: string;
  img: string;
}

export default {
  name: "PlatformNavigation",
  props: {
    platformNavigation: {
      type: Array as PropType<platformNavigation[]>,
      required: true,
    },
  },
};
</script>