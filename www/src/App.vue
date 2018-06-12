<template>
  <div id="app">
    <div class="header animated rubberBand"><h1>ListyMcListface</h1></div>
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
  }
  #theV{
    width: 1.5rem;
  }
</style>