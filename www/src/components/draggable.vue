<template>
  <div><h3>Hello Heaven</h3>
    <draggable v-model='myTask'></draggable>
  </div>
</template>

<script>
  import router from '../router'
  import modal from './Modal'

export default {
    name: 'tasks',
    mounted() {
      this.$store.dispatch('getLists', this.$route.params.id)
    },
    components: { modal },
    props: {type: Array,
    required: false,
  default: null},
    data() {
      return {
        showModal: 0,
        tasks: {
        },
      }
    },
    computed: {
      myTask: {
        get() {
          return this.$store.state.tasks
        },
        set(value) {
          this.$store.commit('updateTasks', value)
        }
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