import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // When the app starts, count is set to 0
  count: 0
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  INCREMENT (state, amount) {
    state.count = state.count + amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
