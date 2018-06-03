<template>
  <div class="board-page">
    <h3 class="boards">{{returnBoard.title}}</h3>
    <div id="app">
      <button @click="toggleModal(1)">Create a List</button>
      <!-- use the modal component, pass in the prop -->
      <modal :toggle="showModal">
        <div slot="header">
          <h3>Create List</h3>
        </div>
        <div>
            <!-- Vue.component('my-checkbox', {
              template: `<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title"></div></div>`,
              data() {
                return { checked: false, title: 'Check me' }
              },
              methods: {
                check() { this.checked = !this.checked; }
              }
            }); -->
          <form @submit.prevent="createList">
            <input type="text" v-model="list.title" required>
            <button type="submit">Create List</button>
          </form>
        </div>
      </modal>
    </div>
    <h3 class="lists" v-for="list in lists">{{returnLists.title}}</h3>
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
      this.$store.dispatch('getLists')
    },
    data() {
      return {
        showModal: 0,
        list: {
          boardId:this.$route.params.id,
          title: ''
        },
        boards: {}
      }
    },
    computed: {
      returnBoard() {
        return this.$store.state.board
        },
        returnLists(){
          return this.$store.state.lists
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