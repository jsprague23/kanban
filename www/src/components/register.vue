<template>
  <div class="register-page">
    <form  @submit.prevent="regUser">
      <label for="text">Name</label>
      <input type="text" name="name" id="name" v-model="register.name" label="name">  
      <label for="text">Email</label>
      <input type="email" name="email" id="email" v-model="register.email" label="email">
      <label for="text">Password</label>
      <input type="password" name="password" id="password" v-model="register.password" label="password">
      <button type="@click=regUser">REGISTER</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    mounted(){
      // this.$store.dispatch('authenticate')
    },
    data() {
      return {
        register: {
          email: '',
          password: '',
          username:''
        }
      }
    },
    computed: {},
    methods: {
        regUser(){
        this.$store.dispatch('register', this.register)
      }
    }
  }
</script>

<style>
</style>