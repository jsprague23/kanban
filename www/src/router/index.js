import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import login from '@/components/login'
import register from '@/components/register'
import modal from '@/components/modal'
import board from '@/components/board'
import klists from '@/components/lists'
// import del from '@components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }, // {
    // path:'/delete',
    // name: 'delete',
    // component: del
   
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
     path: '/register',
     name: 'Register', 
     component: register
    },
    {
      path:'/boards/:id',
      name: 'Board',
      component:board
    }
  
  ]
})