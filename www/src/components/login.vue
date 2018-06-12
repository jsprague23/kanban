<template>
  <div class="login-page" id="background">
    <form  @submit.prevent="userLogin">
      <label for="text">Email</label>
      <input type="text" name="email" id="email" v-model="login.email">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="login.password" >
      <button type="submit">LOGIN</button> <br> 
      <!-- <i class="fas fa-infinity"></i> -->
    </form>
    <label for="submit">Register User</label>
    <button @click="userReg">REGISTER</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    mounted(){
      this.$store.dispatch('authenticate')
    },
    data() {
      return {
        login: {
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      userLogin(){
        this.$store.dispatch('login', this.login)
      },
       userReg(){
        this.$router.push({name: 'register'})
       }
       
    }
  }
</script>

<style>
  #background {
    background-image: url("../assets/pencil.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
    height: 80vh;
  }
</style>