<template>
  <div class="container bg-gray-100 absolute inset-0">
    <div class="box-border bg-white border-b-1 border-b-black h-16 p-2">
      <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
        <b-icon-arrow-left-short
          class="inline-block text-4xl align-middle mr-3 mt-2"
          @click="navigate"
        />
      </router-link>

      <span class="text-xl absolute top-5">手机号登录注册</span>
      <router-link :to="{ name: 'login' }" custom v-slot="{ navigate }">
        <span
          class="text-lg absolute right-4 top-5 text-gray-500"
          @click="navigate"
          >密码登录</span
        >
      </router-link>
    </div>

    <div
      class="bg-cover bg-center h-24 shadow-inner"
      :style="{
        'background-image': 'url(' + banner + ')',
      }"
    ></div>
    <div>
      <select id="countries" class="login-register-input w-full border-y">
        <option selected value="CN">中国大陆</option>
        <option value="US">美国</option>
        <option value="CA">加拿大</option>
        <option value="FR">法国</option>
        <option value="DE">德国</option>
      </select>
    </div>
    <div class="border-b">
      <div class="login-register-input w-1/6">+86</div>
      <input
        id="phone"
        class="login-register-input w-3/6"
        type="text"
        placeholder="请输入手机号码"
        v-model="phone"
      />
      <div
        class="login-register-input w-2/6 text-center"
        :class="changeGetCodeColor"
      >
        获取验证码
      </div>
    </div>
    <div class="border-b">
      <div class="login-register-input w-1/6">验证码</div>
      <input
        id="code"
        class="login-register-input w-5/6"
        type="text"
        placeholder="请输入验证码"
        @focusin="changeIMG('4.png')"
        @focusout="changeIMG('3.png')"
      />
    </div>
    <div class="text-center pt-6">
      <button type="button" class="login-register-solid-button w-11/12">
        验证登录
      </button>
    </div>
    <div class="text-center pt-4">
      <div class="flex items-center align-top">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="login-register-checkbox"
        />
        <label
          for="link-checkbox"
          class="
            ml-2
            text-sm
            font-medium
            text-gray-500
            dark:text-gray-300
            text-left
          "
          >我已阅读并同意<a
            href="#"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >用户协议</a
          >和<a
            href="#"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >隐私政策</a
          >，未注册绑定的手机号验证成功后将自动注册</label
        >
      </div>
    </div>
    <div class="text-center pt-6">
      <label
        class="
          ml-2
          text-sm
          font-medium
          text-gray-500
          dark:text-gray-300
          text-left
        "
      >
        遇到问题?<a
          href="#"
          class="text-blue-600 dark:text-blue-500 hover:underline"
          >查看帮助</a
        >
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegisterView",
  components: {},
  data() {
    return {
      banner: require("../assets/3.png"),
      phone: "",
    };
  },
  methods: {
    changeIMG(src: string): void {
      this.banner = require(`../assets/${src}`);
    },
  },
  computed: {
    changeGetCodeColor(): string {
      if (this.phone == "") {
        return "text-gray-400";
      } else {
        return "text-pink-400";
      }
    },
  },
  mounted() {
    this.$emit("set-bottom-flag", false);
  },
});
</script>
