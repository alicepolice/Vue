<template>
  <TopBar @changeSideFlag="changeSideFlag"></TopBar>
  <SideBar :show-flag="sideFlag"></SideBar>
  <div class="absolute top-12 w-full z-10">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/common/TopBar.vue";
import SideBar from "./components/common/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    TopBar,
    SideBar,
  },
  data() {
    return {
      sideFlag: false as boolean,
    };
  },
  methods: {
    changeSideFlag(): void {
      this.sideFlag = !this.sideFlag;
    },
  },
});
</script>
  