<template>
    <div class="">
       Main 
    </div>
  </template>
  
  <script>
    import router from '../router'
    export default {
      name: '',
      mounted(){
        
        this.$store.dispatch('getBoard',this.$route.params.id)
      },
      data() {},
      computed: {},
      methods: {}
    }
  </script>
  
  <style>
  </style>