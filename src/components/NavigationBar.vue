<template>

  <div class="navbar">
      <img src="@/picture/logo.svg" alt="Bootstrap" @click="$router.push('/')">

          <div class="navbar__btns">
            <my-button 
                    style="font-size: 20px;" 
                    @click="$router.push('/chat')"
                >
                    Чат
                </my-button>
          </div>  
  </div>
  

  
</template>

<script>
export default {
  data() {
      isLoggedIn: false
  },
  created() {
      if(localStorage.getItem('accessJWT')) {
          this.isLoggedIn = true
      }
  },
  methods: {
      logout() {
          localStorage.removeItem('accessJWT')
          localStorage.removeItem('refreshJWT')
          window.location.href = '/login'
      }
  }
}
</script>

<style scoped>
.navbar {
  height: 100px;
  background: repeating-linear-gradient(-45deg, #3D2645, #832161, #DA4167, #3D2645 50%);
  /* background: gray; */
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  position: sticky;  
}

</style>