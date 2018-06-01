import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: 'http://localhost:3000/auth/',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {},
    board: {},
    boards: []
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
      state.boards=boards
    },
    setBoard(state, board){
      state.board=board
    }
  },
  actions: {

    //AUTH STUFF

    login({ commit, dispatch }, loginCredentials) {
      auth.post('login', loginCredentials)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
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
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('/authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },

    //APP STUFF
    actionBoard({ commit, dispatch }, board) {
      api.post('/boards', board)
      .then(res=>{
        dispatch("getBoards")
        })
      .catch(res => {
        console.log("test")
      })
    },
    getBoards({commit, dispatch}){
      api.get('/boards')
      .then(res=>{
        commit("setBoards", res.data)
      })
    },
    getBoard({commit,dispatch}, boardId){
      api.get('/boards/'+ boardId)
      .then(res=>{
        commit('setBoard', res.data)
      })
    }
  }
})