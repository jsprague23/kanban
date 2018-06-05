<template>
  <div class="task-page">
  <h3>Hello Heaven</h3>
    <h3 class="task">{{returnTask.title}}</h3>
    <div id="app">
      <button @click="toggleModal(1)">Create a Task</button>
      <!-- use the modal component, pass in the prop -->
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create Task</h3>
        </div>
        <div>
          <form @submit.prevent="createTask">
            <input type="text" v-model="returnTask.title" required>
            <input type="text" v-model="returnTask.body">
            <button type="submit">Create Task</button>
            </form>
        </div>
      </modal>
    </div>
    <div class="tasks" v-for="task in returnTasks">
      <!-- <h3>{{returnTask.title}}</h3>
      <h3>{{returnTask.body}}</h3> -->
      </div>
    <!-- <button @click="createTask">New Task</button>  -->
  </div>
</template>

<script>
  import router from '../router'
  import modal from './modal'
  import klist from './lists'
  
  export default {
    name: 'ktasks',
     mounted() {
      this.$store.dispatch('getTasks', this.$route.params.id)
      // this.$store.dispatch('getBoard', this.$route.params.id)
      // this.$store.dispatch('getLists')
    },
    components: { modal },
    props:['task'],
    data() {
      return {
        showModal: 0,
         task: {
            listId: this.$route.params.id,
            title: "",
            body:"" 
           }
      }
    },
    computed: {
      returnTask() {
        return this.$store.state.tasks
        },
        returnTasks(){
          return this.$store.state.tasks
        }
    },
    methods: {
      createTask() {
        this.$store.dispatch('actionTask', this.task.listId)
        this.toggleModal(-1)
      },
      toggleModal(n){
        this.showModal +=n
      },
    }
  }
</script>

<style>
</style>