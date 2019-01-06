import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn: false,
    user: null
  },
  mutations: {
    login (state, payload) {
      state.signedIn = true;
      state.user = payload;
    },
    logout (state, payload){
      state.signedIn = false;
      state.user = null;
    }
  },
  actions: {

  }
})
