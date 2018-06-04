<template>
  <div id="app">
    <img id = 'theV' src="./assets/logo.png"><br>
    <button @click="userLogout">LOGOUT</button>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      userLogout() {
        this.$store.dispatch('logout', this.logout)
      }
    }
    
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #theV{
    width: 1.5rem;
  }
</style>