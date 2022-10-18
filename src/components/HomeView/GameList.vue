<template>
  <div class="m-2 mt-4">
    <div>
      <div class="font-bold inline-block">{{ gameList.title }}</div>

      <div v-if="gameList.button" class="float-right">
        <div
          class="
            border border-rose-400
            text-sm
            font-bold
            text-rose-500
            rounded-sm
            px-4
            py-1
            active:bg-rose-400 active:text-white
          "
        >
          {{ gameList.button.title }}
          <b-icon-arrow-right
            class="inline-block text-lg align-text-top"
          ></b-icon-arrow-right>
        </div>
      </div>

      <div class="w-full mt-4 flex flex-wrap justify-between">
        <template v-for="(value, index) in gameList.games" :key="index">
          <div class="w-44 inline-block align-top">
            <img class="h-28 w-full" :src="value.img" />
            <div
              class="text-xs font-bold mt-1 text-stone-800 w-3/4 inline-block"
            >
              {{ value.title }}
            </div>
            <div
              class="
                inline-block
                w-1/4
                align-top
                text-xs
                bg-stone-200
                rounded-sm
                py-0.5
                mt-1
                text-center
                font-bold
              "
              :class="{ 'bg-stone-500': value.price != 0 }"
            >
              <span v-if="value.web">WEB</span>
              <span v-else-if="value.price == 0">FREE</span>
              <span v-else-if="value.price != 0" class="font-normal text-white"
                >${{ value.price }}</span
              >
            </div>
            <div class="text-xs font-normal mt-1" v-if="value.tags">
              <template v-for="(tag, index) in value.tags" :key="index">
                <a class="text-rose-500" href="">#{{ tag }}</a>
                <template v-if="index != value.tags.length - 1">,</template>
              </template>
            </div>
            <div class="text-xs font-normal text-stone-500 mt-1">
              {{ value.text }}
            </div>
            <div class="my-1"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "vue";

interface Game {
  title: string;
  text: string;
  img: string;
  price: number;
  web?: boolean;
  tags?: string[];
}

interface GameList {
  title: string;
  button: {
    title: string;
    href: string;
  };
  games: Game[];
}

export default {
  name: "GameList",
  props: {
    gameList: {
      type: Object as PropType<GameList>,
      required: true,
    },
  },
};
</script>