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
    
    <ul>
      <li class="listings" v-for="list in returnList">{{list.title}}</li>
    </ul>
    <!-- <h3>Hello Heaven</h3> -->
  </div>
</template>

<script>
  import router from '../router'
  import modal from './modal'
  export default {
    name: 'klists',
    mounted() {
      this.$store.dispatch('getLists', this.$route.params)
    },
    components: { modal },
    props:['list'],
    data() {
      return {
        showModal: 0,
        lists: {
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
    }
  }
</script>

<style>
</style>