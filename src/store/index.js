/**
 * Created by 大白胡子 on 2017/7/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const debug = proces.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug ? [createLogger()] : []
})
