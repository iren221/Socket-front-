<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
  width: 100px;
  height: 45px;
  background: none;
  color: #F0EFF4;
  border: 2px solid #F0EFF4;
  border-radius: 20px;
  font-family: Comic Sans MS
}
.btn:hover {
  box-shadow: 0 5px #3D2645;
  border: 0px;
  background: #F0EFF4;
  color: #3D2645;
}
.btn:active {
  background: #F0EFF4;
  color: #3D2645;
  box-shadow: 0 2px #3D2645;
  transform: translateY(4px);
  border: 0px;
}
</style>