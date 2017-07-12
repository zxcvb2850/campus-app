/**
 * Created by wang on 2017/7/7.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN](state, isLogin){
    state.isLogin = isLogin
  },
  [types.SET_LOGINPAGE](state, loginPage){
    state.loginPage = loginPage
  }
}

export default mutations;
