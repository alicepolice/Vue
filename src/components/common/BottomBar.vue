<template>
  <div
    class="
      box-border
      h-16
      absolute
      container
      bg-blue-200
      bottom-0
      left-0
      flex flex-nowrap
      items-center
    "
  >
    <div v-for="(item, index) in items" :key="index" style="width: 100%">
      <router-link :to="{ name: item.routerName }" custom v-slot="{ navigate }">
        <div @click="navigate" class="text-center">
          <div class="pt-2">
            <component :is="item.icon" class="m-auto text-2xl" />
            <div class="text-lg">
              {{ item.text }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

interface BottomItem {
  text: string;
  icon: string;
  routerName: string;
}
export default {
  props: {
    items: {
      type: Array as PropType<BottomItem[]>,
      required: true,
    },
  },
};
</script>

