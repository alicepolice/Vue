<template>
  <div class="text-6xl">about</div>
  <button @click="sendMessage('hello')">点我发送消息</button>
</template>

<script>
export default {
  name: 'AboutView',
  data: function () {
    return {
      connection: null
    }
  },
  methods: {
    sendMessage: function (message) {
      console.log("Hello")
      console.log(this.connection);
      this.connection.send(message);
    }
  },
  created: function () {
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://127.0.0.1:1234")

    this.connection.onmessage = function (event) {
      console.log(event);
    }

    this.connection.onopen = function (event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }

  }
}
</script>
