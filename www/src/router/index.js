import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'
import register from '@/components/Register'
import modal from '@/components/Modal'
import board from '@/components/Board'
import klists from '@/components/Lists'
import ktasks from '@/components/Tasks'
import draggable from '@/components/Draggable'

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