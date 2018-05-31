<template>
  <div class="home-page">
     Main 
  </div>
</template>

<script>
  import router from '../router'
  export default {
    name: '',
    mounted(){
      if(!this.$store.state.user._id){
        router.push({name: 'login'})
      }
    },
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      // userDel(){
      //   this.$session.destroy();
      //    this.$router.push({name: 'login'})
      //  }
    }
  }
</script>

<style>
</style>