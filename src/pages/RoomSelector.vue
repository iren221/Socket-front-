<template>
  <div>
    <label for="room-name-input">Выберите комнату:</label>
    <input v-model="roomName" @keyup.enter="enterRoom" id="room-name-input" type="text">
    <button @click="enterRoom">Войти</button>
  </div>
</template>
  
<script>
    export default {
  data() {
    return {
      roomName: "",
    };
  },
  methods: {
    enterRoom() {
      this.$router.push({ name: "chat", params: { roomName: this.roomName } });
    },
  },
};
</script>
  
<style>
  
</style>
  