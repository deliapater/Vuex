import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state) {
      state.count ++;
    },
    decrement(state) {
      state.count --;
    }
  },
  actions: {
    increment( {commit} ) {
      commit('increment');
    },
    decrement( {commit} ) {
      commit ('decrement');
    } 
  }
})
