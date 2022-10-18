<template>
  <div class="m-2 mt-4">
    <div class="font-bold">From the blog</div>
    <div class="overflow-x-auto flex mt-2">
      <template v-for="(value, index) in gameBlog" :key="index">
        <div class="w-48 flex-shrink-0 mr-2">
          <img class="h-24 w-full" :src="value.img" />
          <div class="text-xs font-bold mt-1 text-stone-800 whitespace-normal">
            {{ value.title }}
          </div>
          <div class="h-12 text-xs overflow-clip mt-1 text-stone-500">
            {{ value.text }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";

interface GameBlog {
  title: string;
  text: string;
  img: string;
}

export default {
  name: "GameBlog",
  props: {
    gameBlog: {
      type: Array as PropType<GameBlog[]>,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>