import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
       USER_LOGGED_IN(state, user) {
           state.user = user
       }
    },
    actions: {
        login({ commit }, payload) {
            commit('USER_LOGGED_IN', payload)
        }
    }
})
