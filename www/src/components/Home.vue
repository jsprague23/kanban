<template>
  <div class="home-page">
    Main
    <!-- <button type="@click=createBoard">Create a Board</button> -->
    <div id="app">
      <button @click="toggleModal(1)">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create Board</h3>
        </div>
        <div>
          <form @submit.prevent="createBoard">
            <input type="text" v-model="boardName" required>
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
      if (!this.$store.state.user._id) {
        router.push({ name: 'login' })
      }
    },
    data() {
      return {
        showModal: 0,
        boardName: ''
      }
    },
    computed: {},
    methods: {
      createBoard() {
        this.$store.dispatch('actionBoard', this.actionBoard)
        this.toggleModal(-1)
      },
      toggleModal(n){
        this.showModal += n
      },
    }
  }
</script>