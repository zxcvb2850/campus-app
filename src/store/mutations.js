/**
 * Created by 大白胡子 on 2017/7/6.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_USER](state, user){
    state.user = user
  }
}

export default mutations
