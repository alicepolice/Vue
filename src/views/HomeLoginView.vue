<template>
  <div class="text-5xl">登录成功的主页</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeLoginView",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$emit("set-bottom-flag", true);
  },
});
</script>
