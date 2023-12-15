<template>
    <div>
      <textarea v-model="chatLog" cols="100" rows="20"></textarea><br>
      <input v-model="newMessage" placeholder="Введите сообщение">
      <button @click="sendMessage">Отправить</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      chatLog: "",
      newMessage: "",
      socket: null,
    };
  },
  mounted() {
    const roomName = this.$route.params.roomName;
    this.socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomName}/`);
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.chatLog += data.message + "\n";
    };
  },
  methods: {
    sendMessage() {
      this.socket.send(JSON.stringify({ message: this.newMessage }));
      this.newMessage = "";
    },
  },
};

</script>

<style scoped>

</style>