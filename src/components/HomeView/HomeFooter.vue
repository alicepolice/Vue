<template>
  <div class="mx-2 my-4">
    <div class="text-center font-bold text-sm">
      Don't see anything you like?
    </div>
    <div
      class="
        w-11/12
        h-10
        pt-2.5
        text-center
        m-auto
        mt-4
        border border-rose-500
        font-bold
        text-sm text-rose-500
      "
    >
      View all Games
      <b-icon-arrow-right
        class="inline-block text-lg align-text-top"
      ></b-icon-arrow-right>
    </div>
    <div
      class="
        w-11/12
        h-10
        pt-2.5
        text-center
        m-auto
        mt-4
        border border-rose-500
        font-bold
        text-sm text-rose-500
      "
    >
      View something random
      <b-icon-arrow-left-right
        class="inline-block text-lg align-text-top"
      ></b-icon-arrow-left-right>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeFooter",
  props: {
  }
}
</script>