/**
 * Created by wang on 2017/7/7.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_COUNT](state, count){
    state.count = count
  },
  [types.SET_LOGIN](state, isLogin){
    state.isLogin = isLogin
  }
}

export default mutations;
