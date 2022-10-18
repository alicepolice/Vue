<template>
  <div
    class="bg-auto p-1 text-white"
    :style="
      'background-image:url(' + require('@/assets/diffuse/diffuse.jpg') + ')'
    "
  >
    <div class="h-52 m-2">
      <iframe
        class="h-full w-full"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        type="text/html"
        :src="gameInfo.youtube"
      ></iframe>
    </div>
    <div class="ml-2 font-bold text-xl">{{ gameInfo.title }}</div>
    <div class="ml-2 text-sm">{{ gameInfo.desc }}.</div>
    <div class="m-2">
      <div class="w-full">
        <img :src="currentImg[0]" class="w-1/2 inline-block" />
        <img :src="currentImg[1]" class="w-1/2 inline-block" />
      </div>
    </div>
    <div class="h-8 m-2">
      <div
        class="
          inline-block
          text-black
          bg-white
          rounded-md
          text-xs
          px-1
          py-0.5
          font-bold
        "
      >
        ${{ gameInfo.price }}
      </div>
      <template v-for="(value, index) in gameInfo.platforms" :key="index">
        <component :is="value" class="inline-block ml-2"></component>
      </template>
    </div>
    <div class="h-10 m-2 w-44">
      <div
        class="
          h-full
          text-lg
          font-bold
          py-1
          px-3
          border-2 border-white
          rounded-sm
        "
      >
        <span class="inline-block">Get the game</span>
        <b-icon-arrow-right
          class="inline-block ml-1 text-lg"
        ></b-icon-arrow-right>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";

interface GameInfo {
  youtube: string;
  title: string;
  desc: string;
  price: number;
  platforms: string[];
  images: string[];
}

export default {
  name: "GameInfo",
  props: {
    gameInfo: {
      type: Object as PropType<GameInfo>,
      required: true,
    },
  },
  data() {
    return {
      timer: null as unknown,
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide: function (): void {
      this.timer = setInterval(this.next, 4000);
    },

    next: function (): void {
      this.currentIndex += 1;
    },
  },
  computed: {
    currentImg: function (): string[] {
      let index = Math.abs(this.currentIndex) % this.gameInfo.images.length;
      let index2 = (index + 1) % this.gameInfo.images.length;
      return [this.gameInfo.images[index], this.gameInfo.images[index2]];
    },
  },
};
</script>