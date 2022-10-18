<template>
  <HomeFAQ />
  <TopNavigation :top-navigation="topNavigation"></TopNavigation>
  <GameInfo :game-info="gameInfo"></GameInfo>
  <GameBlog :game-blog="gameBlog"></GameBlog>
  <PlatformNavigation
    :platform-navigation="platformNavigation"
  ></PlatformNavigation>
  <GameList :game-list="latestGames"></GameList>
  <GameList :game-list="mostFeatureGames"></GameList>
  <HomeFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameInfo from "../components/HomeView/GameInfo.vue";
import GameBlog from "../components/HomeView/GameBlog.vue";
import HomeFAQ from "../components/HomeView/HomeFAQ.vue";
import TopNavigation from "../components/HomeView/TopNavigation.vue";
import GameList from "../components/HomeView/GameList.vue";
import PlatformNavigation from "../components/HomeView/PlatformNavigation.vue";
import HomeFooter from "../components/HomeView/HomeFooter.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    GameInfo,
    GameBlog,
    HomeFAQ,
    TopNavigation,
    GameList,
    PlatformNavigation,
    HomeFooter,
  },
  data() {
    return {
      topNavigation: [
        { text: "All Games", href: "" },
        { text: "Game jams", href: "" },
        { text: "Developer Logs", href: "" },
        { text: "Community", href: "" },
        { text: "Bundles", href: "" },
      ],
      gameInfo: {
        youtube:
          "https://www.youtube.com/embed/U7MJljsoUSo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0",
        title: "Baba Is You",
        desc: "You can change the rules by which you play",
        price: 14.99,
        platforms: ["b-icon-windows", "b-icon-apple"],
        images: [
          require("@/assets/slideshow/1.png"),
          require("@/assets/slideshow/2.png"),
          require("@/assets/slideshow/3.png"),
          require("@/assets/slideshow/4.png"),
          require("@/assets/slideshow/5.png"),
        ],
      },
      gameBlog: [
        {
          title: "Games of the Month: surrealist solitaire puzzles",
          text: `What’s that? You need more games? I hear you, anonymous hapi fan.
          We’ve reached the part of the year when games start coming out fast`,
          img: require("@/assets/blog/1.jpg"),
        },
        {
          title: "Games of the Month: Puzzles!",
          text: `Sometimes you need a good puzzle game, just something to throw all of
          your attention at and ignore anything else going on. Well if that
          sometime for you is right now, then you’re in luck because in this
          Games of the Month`,
          img: require("@/assets/blog/2.jpg"),
        },
        {
          title: "The next hapi Creator Day is July 29th!",
          text: ` I don’t think I’m allowed to make the entire body of this post “The
          next itch.io Creator Day is taking place on Friday July 29th.” I mean
          it’s true, we are hosting the next itch.io Creator Day on Friday July
          29th but I should probably write more here.`,
          img: require("@/assets/blog/3.jpg"),
        },
      ],
      platformNavigation: [
        {
          title: "Windows",
          href: "",
          img: require("@/assets/svg/windows.svg"),
        },
        {
          title: "macOS",
          href: "",
          img: require("@/assets/svg/apple.svg"),
        },
        {
          title: "Linux",
          href: "",
          img: require("@/assets/svg/linux.svg"),
        },
        {
          title: "Android",
          href: "",
          img: require("@/assets/svg/android.svg"),
        },
        {
          title: "iOS",
          href: "",
          img: require("@/assets/svg/apple.svg"),
        },
        {
          title: "Web",
          href: "",
          img: require("@/assets/svg/web.svg"),
        },
        {
          title: "Free",
          href: "",
          img: require("@/assets/svg/free.svg"),
        },
        {
          title: "On Sale",
          href: "",
          img: require("@/assets/svg/sale.svg"),
        },
        {
          title: "Top Seller",
          href: "",
          img: require("@/assets/svg/star.svg"),
        },
        {
          title: "Recent",
          href: "",
          img: require("@/assets/svg/recent.svg"),
        },
      ],
      latestGames: {
        title: "Latest Featured Games",
        button: {
          title: "View all",
          href: "",
        },
        games: [
          {
            title: "Late Night Mop",
            text: "A haunted house cleaning simulator.",
            img: require("@/assets/game/1.png"),
            price: 0,
          },
          {
            title: "an average day at the cat cafe",
            text: "A haunted house cleaning simulator.",
            img: require("@/assets/game/2.png"),
            price: 0,
            web: true,
          },
          {
            title: "Corebreaker",
            text: "A fast-paced action-platform shooter game with roguelike elements.",
            img: require("@/assets/game/3.png"),
            price: 19.99,
            tags: ["Difficult", "Fast-Paced"],
          },
          {
            title: "Beacon Pines",
            text: "Normal isn't what it used to be.",
            img: require("@/assets/game/4.png"),
            price: 4.99,
          },
          {
            title: "Atuel",
            text: "Traverse a surrealist landscape inspired by the Atuel River in Argentina.",
            img: require("@/assets/game/5.png"),
            price: 0,
          },
        ],
      },
      mostFeatureGames: {
        title: "Most Featured Games",
        button: {
          title: "View all",
          href: "",
        },
        games: [
          {
            title: "Hitobito no Hikari - Heian Jidai",
            text: "A survival horror TTRPG about cursed priestesses.",
            img: require("@/assets/game/6.png"),
            tags: ["Physical games"],
            price: 3,
          },
          {
            title: "Doko Roko",
            text: "A symbiosis with ancient shadows. A tower full of demons. A proverb.",
            img: require("@/assets/game/7.png"),
            price: 10,
          },
          {
            title: "The Zachtronics Solitaire Collection",
            text: "All seven Zachtronics solitaire games, updated with new 4K graphics, plus one brand new Tarot-themed solitaire variant.",
            img: require("@/assets/game/8.png"),
            price: 9.99,
            tags: ["Card Game", "Singleplayer"],
          },
          {
            title: "Mixolumia",
            text: "Entrancing musical falling block puzzler.",
            img: require("@/assets/game/9.png"),
            price: 10,
            tags: ["High Score", "Arcade"],
          },
          {
            title: "Atuel",
            text: "Traverse a surrealist landscape inspired by the Atuel River in Argentina.",
            img: require("@/assets/game/5.png"),
            price: 0,
          },
          {
            title: "Corebreaker",
            text: "A fast-paced action-platform shooter game with roguelike elements.",
            img: require("@/assets/game/3.png"),
            price: 19.99,
            tags: ["Difficult", "Fast-Paced"],
          },
        ],
      },
    };
  },
});
</script>
