<template>
  <div class="home-page">
    Main
    <!-- <button type="@click=createBoard">Create a Board</button> -->
    <div id="app">
      <button @click="toggleModal(1)">Create a Board</button>
      <!-- use the modal component, pass in the prop -->
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create Board</h3>
        </div>
        <div>
          <form @submit.prevent="createBoard">
            <input type="text" v-model="board.title" required>
            <button type="submit">Create Board</button>
          </form>
        </div>
      </modal>
    </div>
    <ul class="boards">
      <h3>My Boards</h3>
      <li class="boards" v-for="board in boards" :key="board._id" ><router-link :to="{name: 'board', params:{id:board._id}}">{{board.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'
  import board from './Board'

  export default {
    name: 'home',
    components: { modal, board },
    mounted() {
      if (!this.$store.state.user._id) {
        router.push({ name: 'login' })
      }
      // this.$nextTick(function() {
      //   this.listBoards()
      // })
    },
    data() {
      return {
        showModal: 0,
        board:{
        },
        user:{
          _id: ''
        }
        
      }
    },
    computed: {
      boards(){
        return this.$store.state.boards
      }
    },
    methods: {
      createBoard() {
        this.$store.dispatch('actionBoard', this.board)
        this.toggleModal(-1)
      },
      toggleModal(n){
        this.showModal += n
      },
      listBoards() {
        this.$store.dispatch('getBoards', this.$store.state.user._id)
      }
    }
  }
</script>
<style>
.home-page{
  background-color:coral;
}
</style>