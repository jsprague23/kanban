<template>
  <div class="list-page">
    <h3 class="lists">{{Lists.title}}</h3>
    <!-- <div id="app">
      <button @click="toggleModal(1)">Create a List</button>
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
    
    <ul>
      <li class="lists" v-for="list in lists" v-bind:title="list.title">test</li>
    </ul>
    <h3>Hello Heaven</h3>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './modal'
  export default {
    name: 'lists',
    props: ['banana'],
    mounted() {
      this.$store.dispatch('getLists', this.$route.params)
    },
    components: { modal },
    data() {
      return {
        showModal: 0,
        list: {
          boardId: this.$route.params.id,
          title: ''
        },
        lists: {}
      }
    },
    computed: {
      returnBoard() {
        return this.$store.state.board
      },
      Lists() {
        return this.$store.state.lists
      },
      list(){
        return this .$store.state.list
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
    }
  }
</script>

<style>
</style>