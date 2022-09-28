<template>
  <router-view @set-bottom-flag="setBottomFlag" />
  <BottomBar v-show="bottomFlag" :items="bottomItems" />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import BottomBar from "@/components/BottomBar.vue";

type BottomItem = {
  text: string;
  icon: string;
  routerName: string;
};

export default defineComponent({
  name: "App",
  components: {
    BottomBar,
  },
  data() {
    return {
      bottomItems: [
        { text: "首页", icon: "b-icon-house-heart", routerName: "home" },
        { text: "理财", icon: "b-icon-coin", routerName: "about" },
        { text: "消息", icon: "b-icon-chat-dots", routerName: "about" },
        { text: "我的", icon: "b-icon-person-circle", routerName: "about" },
      ] as BottomItem[],
      bottomFlag: true as boolean,
    };
  },
  methods: {
    setBottomFlag(value: boolean): void {
      this.bottomFlag = value;
    },
  },
});
</script>
  