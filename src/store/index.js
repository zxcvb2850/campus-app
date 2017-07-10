/**
 * Created by wang on 2017/7/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import state from './state'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
