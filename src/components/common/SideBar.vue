<template>
  <transition
    enter-active-class="duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200"
    leave-to-class="opacity-0"
    leave-from-class="opacity-100"
  >
    <div class="fixed z-30 h-full w-full" v-show="showFlag" id="model">
      <div class="bg-black h-full w-full opacity-50"></div>
    </div>
  </transition>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="-translate-x-64"
    enter-to-class="translate-x-0"
    leave-active-class="duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-64"
  >
    <div
      class="fixed z-40 top-12 w-64 h-full bg-stone-100 border-r overflow-auto"
      v-show="showFlag"
      id="sideBar"
    >
      <div class="mt-3 mx-2">
        <input
          id="search"
          class="
            bg-white
            focus:outline-none focus:ring focus:border-blue-200
            py-1.5
            pl-3
            w-full
            border border-gray-300
            text-sm
          "
          type="text"
          placeholder="Search games & creators"
          v-model="search"
        />
      </div>
      <SideBarHref :items="popularTags"></SideBarHref>
      <SideBarHref :items="browse"></SideBarHref>
      <SideBarHref :items="gamesByPrice"></SideBarHref>
      <div class="h-20 text-center">
        <div class="pt-6">
          <template v-for="(value, index) in appInfo.apps" :key="index">
            <a :href="value.href">
              <component
                :is="value.icon"
                class="inline m-1 text-xl hover:text-rose-500"
              ></component>
            </a>
          </template>
          <a :href="appInfo.download.href">
            <span
              class="
                text-xs text-stone-800
                mx-2
                hover:text-rose-500 hover:underline
              "
              >{{ appInfo.download.title }}</span
            >
          </a>
        </div>
      </div>
      <div class="mx-2">
        <div class="font-bold text-stone-700 text-sm">{{ blogs.title }}</div>
        <div
          v-for="(value, index) in blogs.items"
          :key="index"
          class="text-sm my-2"
        >
          <a :href="value.href">
            <div
              class="
                inline-block
                w-4/5
                text-stone-700
                hover:text-rose-500 hover:underline
              "
            >
              {{ value.text }}
            </div>
            <div
              class="inline-block w-1/5 align-top text-stone-400 text-center"
            >
              {{ value.days }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import SideBarHref from "@/components/common/SideBarHref.vue";

export default {
  name: "SideBar",
  components: { SideBarHref },
  props: {
    showFlag: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      search: "",
      popularTags: {
        title: "POPULAR TAGS",
        items: [
          { text: "Horror games", href: "" },
          { text: "Multiplayer", href: "" },
          { text: "Visual novels", href: "" },
          { text: "HTML5 games", href: "" },
          { text: "Simulation", href: "" },
          { text: "macOS games", href: "" },
          { text: "Roguelike", href: "" },
          { text: "Linux games", href: "" },
          { text: "Browse all tags", href: "" },
        ],
      },
      browse: {
        title: "BROWSE",
        items: [
          { text: "Games", href: "" },
          { text: "Game assets", href: "" },
          { text: "Tools", href: "" },
          { text: "Albums & soundtracks", href: "" },
          { text: "Physical games", href: "" },
          { text: "Comics", href: "" },
          { text: "Books", href: "" },
          { text: "Randomizer", href: "" },
        ],
      },
      gamesByPrice: {
        title: "GAMES BY PRICE",
        items: [
          { text: "On Sale", href: "" },
          { text: "Free games", href: "" },
          { text: "With demo", href: "" },
          { text: "Top sellers", href: "" },
          { text: "$5 or less", href: "" },
          { text: "$15 or less", href: "" },
        ],
      },
      appInfo: {
        download: {
          title: "Download app",
          href: "",
        },
        apps: [
          { icon: "b-icon-reddit", href: "" },
          { icon: "b-icon-facebook", href: "" },
          { icon: "b-icon-twitter", href: "" },
        ],
      },
      blogs: {
        title: "FROM THE HAPIGAMES BLOG",
        items: [
          {
            text: "Games of the Month: surrealist solitaire puzzles",
            href: "",
            days: "18d",
          },
          {
            text: "Games of the Month: Puzzles!",
            href: "",
            days: "45d",
          },
          {
            text: "The next itch.io Creator Day is July 29th!",
            href: "",
            days: "84d",
          },
          {
            text: "Games of the Week: Let's play cards, tabletop, and more!",
            href: "",
            days: "92d",
          },
          {
            text: "Welcome to the itch.io Summer Sale!",
            href: "",
            days: "115d",
          },
          {
            text: "How to play itch.io games on the Steam Deck",
            href: "",
            days: "122d",
          },
        ],
      },
    };
  },
};
</script>