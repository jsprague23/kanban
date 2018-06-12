<<<<<<< HEAD
import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//khanbhan.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)

var api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {},
    board: {},
    boards: [],
    list: {},
    lists: [],
    task: {},
    tasks: [],
  },
  mutations: {
    regUser(state, user) {
      state.user = user
    },
    setUser(state, user) {
      state.user = user
    },
    delUser(state) {
      state.user = {}
    },
    addBoard(state, board){
      state.board={}
    },
    setBoards(state, boards){
      state.boards = boards
    },
    setBoard(state, board){
      state.board = board
    },
    setLists(state, lists){
      state.lists = lists
    },
    setList(state, list){
      state.list = list
    },
    setTasks(state, tasks){
      state.tasks = tasks
    },
    // Task(state, task){
    //   state.task = task
    // }
  },
  actions: {

    //AUTH STUFF

    login({ commit, dispatch }, loginCredentials) {
      auth.post('login', loginCredentials)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    logout({ commit, dispatch }, deleteCredentials) {
      auth.delete('logout', deleteCredentials)
        .then(res => {
          commit('delUser', res.data)
          router.push({ name: 'login' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    register({ commit, dispatch }, registerCredentials) {
      auth.post('register', registerCredentials)
        .then(res => {
          commit('regUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    //APP STUFF
    actionBoard({ commit, dispatch }, board) {
      api.post('boards', board)
      .then(res=>{
        dispatch("getBoards")
        })
      .catch(res => {
       alert("err") 
      })
    },
    actionList({ commit, dispatch }, list) {
       api.post('lists', list)
      .then(res=>{
        dispatch("getLists")
        })
      .catch(res => {
        alert("err") 
      })
    },
    actionTask({ commit, dispatch }, listId) {
        api.post('tasks', {
        listId: 'listId'})
      .then(res=>{
        dispatch("getTasks")
        })
      .catch(res => {
        alert("err") 
      })
    },
    getBoards({commit, dispatch}, user){
      api.get('ownedboards/'+ user)
      .then(res=>{
        commit("setBoards", res.data)
      })
    },
    getBoard({commit,dispatch}, boardId){
      api.get('boards/'+ boardId)
      .then(res=>{
        commit('setBoard', res.data)
      })
    },
    getLists({commit, dispatch}, boardId){
      api.get('lists/'+ boardId)
      .then(res=>{
        commit("setLists", res.data)
      })
    },
    getList({commit,dispatch}, listId){
      api.get('lists/'+ listId)
      .then(res=>{
        commit('setList', res.data)
      })
    },
    getTasks({commit, dispatch}, listId){
      api.get('tasks/' + listId)
      .then(res=>{
        commit("setTasks", res.data)
      })
    },

    deleteList({commit, dispatch}, id){
      api.delete('lists/')
      .then (res=>{
        dispatch('getLists')
      })
    }
    // getTask({commit,dispatch}, taskId){
    //   api.get('/tasks/'+ taskId)
    //   .then(res=>{
    //     commit('setTask', res.data)
    //   })
    // },
  }
=======
import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

var production = !window.location.host.includes("localhost");
var baseUrl = production ? "//khanbhan.herokuapp.com/" : "//localhost:3000/";

vue.use(vuex);

var api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
});
var auth = axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
});

export default new vuex.Store({
  state: {
    user: {},
    board: {},
    boards: [],
    list: {},
    lists: [],
    task: {},
    tasks: []
  },
  mutations: {
    regUser (state, user) {
      state.user = user
    },
    setUser (state, user) {
      state.user = user
    },
    delUser (state) {
      state.user = {}
    },
    addBoard (state, board) {
      state.board = {}
    },
    setBoards (state, boards) {
      state.boards = boards
    },
    setBoard (state, board) {
      state.board = board
    },
    setLists (state, lists) {
      state.lists = lists
    },
    setList (state, list) {
      state.list = list
    },
    setTasks (state, tasks) {
      state.tasks = tasks
    }
    // Task(state, task){
    //   state.task = task
    // }
  },
  actions: {
    // AUTH STUFF

    login ({ commit, dispatch }, loginCredentials) {
      auth
        .post('login', loginCredentials)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(res => {
          console.log(res.data);
        })
    },
    logout ({ commit, dispatch }, deleteCredentials) {
      auth
        .delete('logout', deleteCredentials)
        .then(res => {
          commit('delUser', res.data)
          router.push({ name: 'login' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    register ({ commit, dispatch }, registerCredentials) {
      auth
        .post('register', registerCredentials)
        .then(res => {
          commit('regUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    authenticate ({ commit, dispatch }) {
      auth
        .get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    //APP STUFF
    actionBoard ({ commit, dispatch }, board) {
      api
        .post('boards', board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(res => {
          alert('err')
        })
    },
    actionList ({ commit, dispatch }, list) {
      api
        .post('lists', list)
        .then(res => {
          dispatch('getLists')
        })
        .catch(res => {
          alert('err')
        })
    },
    actionTask ({ commit, dispatch }, task) {
      api
        .post('tasks', task)
        .then(res => {
          dispatch('getTasks')
        })
        .catch(res => {
          alert('err')
        })
    },
    getBoards ({ commit, dispatch, state }) {
      api.get('ownedboards/' + state.user._id).then(res => {
        commit('setBoards', res.data)
      })
    },
    getBoard ({ commit, dispatch }, boardId) {
      api.get('boards/' + boardId).then(res => {
        commit('setBoard', res.data)
      });
    },
    getLists ({ commit, dispatch, state }) {
      console.log(this.state.board._id + 'index-board')
      api.get('currentlists/' + state.board._id).then(res => {
        commit('setLists', res.data)
      })
    },
    getList ({ commit, dispatch }, listId) {
      api.get('lists/' + listId).then(res => {
        commit('setList', res.data)
      })
    },
    getTasks ({ commit, dispatch }, listId) {
      api.get('tasks/' + listId).then(res => {
        commit('setTasks', res.data)
      })
    },

    deleteList ({ commit, dispatch }, id) {
      api.delete('lists/').then(res => {
        dispatch('getLists')
      })
    }
    // getTask({commit,dispatch}, taskId){
    //   api.get('/tasks/'+ taskId)
    //   .then(res=>{
    //     commit('setTask', res.data)
    //   })
    // },
  }
>>>>>>> 0f41cd55652d66134d13cd4c46b68f1c1e71a391
})