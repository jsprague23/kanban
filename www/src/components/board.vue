<template>
  <div class="">
    <h3 class="boards">{{returnBoard.title}}</h3>
    <div id="app">
      <button @click="toggleModal(1)">Show Modal</button>
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
  </div>
</template>

<script>
  import router from '../router'
  import modal from './modal'
  export default {
    name: '',
    components: { modal },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
    },
    data() {
      return {
        showModal: 0,
        list: {
          title: ''
        },
        boards: {}
      }
    },
    computed: {
      returnBoard() {
        return this.$store.state.board
      }
    },
    methods: {
      createList() {
        this.$store.dispatch('actionList', this.list)
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