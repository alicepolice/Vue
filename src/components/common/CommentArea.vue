<template>
  <div class="m-2">
    <div class="text-3xl font-bold">Comments</div>
    <template v-if="comments.length == 0">当前pid帖子没有评论</template>
    <template v-for="(value, index) in comments" :key="index">
      <div class="border border-stone-300 p-1">
        <div>
          <img
            src="@/assets/avater/hamster.jpg"
            class="inline-block w-12 h-12 align-top"
          />
          <div class="inline-block ml-2">
            <div class="font-bold text-stone-700">{{ value.name }}</div>
            <div class="text-stone-400 text-sm">
              {{ dateConvert(value.date) }}
            </div>
          </div>
        </div>
        <div class="mt-2">{{ value.text }}</div>
        <div class="float-right">
          <span class="m-1 text-rose-500">回复</span>
          <span class="m-1 text-rose-500" @click="deleteComment(value.id)"
            >删除</span
          >
        </div>
        <div class="clear-both"></div>
      </div>
      <div class="mt-2"></div>
    </template>
  </div>
</template>
<script>
export default {
  name: "CommentArea",
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    dateConvert(date) {
      return new Date(date).toUTCString()
    },
    deleteComment(id) {
      this.$emit('delete-comment', id)
    }
  }
}
</script>