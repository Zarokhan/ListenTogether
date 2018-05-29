import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// must call Vue.use(Vuex) before creating a store instance
Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
