<template>
  <div class="list-page">
    <!-- <div id="app">
      <button @click="toggleModal(1)">Create a List</button> -->
    <!-- use the modal component, pass in the prop -->
    <!-- <modal :toggle="showModal">
        <div slot="header">
          <h3>Create List</h3>
        </div>
        <div>
          <form @submit.prevent="createList">
            <input type="text" v-model="list.title" required>
            <button type="submit">Create List</button>
          </form>
        </div>
      </modal>
    </div> -->
    <div class="col-sm-12 my-3 card-deck">
      <div class="card text-black w-100 h-500" v-for="list in returnList">
        <h3>{{list.title}}</h3>
        <h5>Board: {{list.boardId}}</h5>
        <h5>list: {{list._id}}</h5>
        <button @click="deleteList(list)">Delete List</button>
        <!--BUG BUG this is just temp -->
        <!-- //tasks listings -->
        <ktasks : task='returnList'</ktasks>
        <!-- <button @click="createTask">New Task</button>   -->



      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'
  import ktasks from './Tasks'

  export default {
    name: 'klists',
    mounted() {
    //  this.$nextTick(function() {
    //   this.displayList()
    //  })
    },
    components: { modal, ktasks },
    props: {
      board: {

      }
    },
    data() {
      return {
        showModal: 0,
        tasks: {
        },
        }
    },
    computed: {
      returnList() {
        return this.$store.state.lists
      }
    },
    methods: {
      createList() {
        this.$store.dispatch('actionList', this.list)
        this.toggleModal(-1)
      },
      toggleModal(n) {
        this.showModal += n
      },
      deleteList(list){
        this.$store.dispatch('deleteList')
      },
      displayList() {
        this.$store.dispatch('getLists', this.$route.params.id)
      }
    }
  }
</script>

<style>
.list-page{
  background-color:crimson;
}

</style>