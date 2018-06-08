import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import modal from '@/components/modal'
import board from '@/components/board'
import klists from '@/components/lists'
import ktasks from '@/components/tasks'
import draggable from '@components/draggable'

// import del from '@components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }, 
   
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
     path: '/register',
     name: 'register', 
     component: register
    },
    {
      path:'/boards/:id',
      name: 'board',
      component:board
    },
{
    path: '/lists/:id',
    name:'list',
    component: klists
},
{
  path: 'tasks/:id',
  name: 'task',
  component: ktasks
}
  ]
})