<template>
  <div class="text-6xl">主页面 HELLO WORLD</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  mounted() {
    this.$emit("set-bottom-flag", true);
  },
});
</script>
