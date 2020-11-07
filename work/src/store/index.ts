import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUer (state, payload) {
      state.user = JSON.parse(payload)
      window.localStorage.setItem('user', payload)
    },
    resetUser (state) {
      state.user = null
      window.localStorage.setItem('user', 'null')
    }
  },
  actions: {
  },
  modules: {
  }
})
