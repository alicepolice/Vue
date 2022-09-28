<template>
  <div class="container bg-gray-100 absolute inset-0">
    <div class="box-border bg-white border-b-1 border-b-black h-16 p-2">
      <router-link :to="{ name: 'home' }" custom v-slot="{ navigate }">
        <b-icon-arrow-left-short
          class="inline-block text-4xl align-middle mr-3 mt-2"
          @click="navigate"
        />
      </router-link>

      <span class="text-xl absolute top-5">密码登录</span>
      <router-link :to="{ name: 'register' }" custom v-slot="{ navigate }">
        <span
          class="text-lg absolute right-4 top-5 text-gray-500"
          @click="navigate"
          >短信登录</span
        >
      </router-link>
    </div>

    <div
      class="bg-cover bg-center h-24 shadow-inner"
      :style="{
        'background-image': 'url(' + banner + ')',
      }"
    ></div>
    <div class="border-y">
      <div class="login-register-input w-1/6">账号</div>
      <input
        id="username"
        class="login-register-input w-5/6"
        type="text"
        placeholder="请输入手机号或邮箱"
      />
    </div>
    <div class="border-b">
      <div class="login-register-input w-1/6">密码</div>
      <input
        id="password"
        class="login-register-input w-3/6"
        type="text"
        placeholder="请输入密码"
        @focusin="changeIMG('4.png')"
        @focusout="changeIMG('3.png')"
      />
      <div class="login-register-input pl-8 w-2/6 text-pink-400 text-center">
        忘记密码?
      </div>
    </div>
    <div class="text-center pt-6 flex justify-around">
      <button type="button" class="login-register-hollow-button w-5/12">
        注册
      </button>
      <button type="button" class="login-register-solid-button w-5/12">
        登录
      </button>
    </div>
    <div class="text-center pt-4">
      <div class="flex items-center align-top">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          class="ml-4 w-5 h-5 bg-gray-100 rounded"
        />
        <label
          for="link-checkbox"
          class="ml-2 text-sm font-medium text-gray-500 text-left"
          >我已阅读并同意<a href="#" class="text-blue-600">用户协议</a>和<a
            href="#"
            class="text-blue-600"
            >隐私政策</a
          ></label
        >
      </div>
    </div>
    <div class="text-center pt-6">
      <label class="login-register-checkbox">
        遇到问题?<a href="#" class="text-blue-600">查看帮助</a>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  components: {},
  data() {
    return {
      banner: require("../assets/3.png"),
    };
  },
  methods: {
    changeIMG(src: string): void {
      this.banner = require(`../assets/${src}`);
    },
  },
  mounted() {
    this.$emit("set-bottom-flag", false);
  },
});
</script>
