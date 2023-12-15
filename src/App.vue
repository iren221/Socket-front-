<template>
    <navigation-bar></navigation-bar>
    <div class="app">
      <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue"
export default {
  components: {
      NavigationBar,
  }
}
</script>

<style>

</style>
