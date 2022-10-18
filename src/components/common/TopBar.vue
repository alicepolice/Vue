<template>
  <div class="fixed z-50 h-12 w-full shadow-md bg-white">
    <div
      class="inline-block h-full w-16 active:text-rose-500"
      @click="emitChangeSideFlag"
    >
      <b-icon-list class="text-3xl mt-2 ml-4"></b-icon-list>
    </div>
    <div class="inline-block h-full w-48">
      <img src="@/assets/logo/logo.png" class="mt-1 h-4/5 w-full" />
    </div>
    <div class="inline-block float-right mt-2.5 mr-4">
      <div
        class="
          border-2 border-gray-300
          px-3.5
          py-0.5
          rounded-sm
          text-sm
          font-bold
        "
      >
        Log in
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TopBar",
  methods: {
    emitChangeSideFlag(): void {
      this.$emit("changeSideFlag");
    },
  },
});
</script>