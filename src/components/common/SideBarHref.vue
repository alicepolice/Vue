
<template>
  <div class="mt-8 mx-2">
    <div class="font-bold text-stone-700 text-sm">{{ items.title }}</div>
    <div class="w-full text-stone-600 mt-2 text-sm">
      <template v-for="(value, index) in items.items" :key="index">
        <a :href="value.href">
          <div
            class="
              py-1
              inline-block
              w-1/2
              align-middle
              hover:text-rose-500 hover:underline
            "
            v-html="value.text"
          ></div>
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

interface item {
  text: string;
  href: string;
}

interface items {
  items: item[];
  title: string;
}

export default {
  name: "SideBarHref",
  props: {
    items: { type: Object as PropType<items>, required: true },
  },
};
</script>
