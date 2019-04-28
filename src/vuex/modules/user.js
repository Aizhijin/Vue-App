import {DELETE_USER, RECEIVE_USER} from '../mutations-type'
import {reqUser, reqUserLoginOut} from '../../api'

const state = {
  user: {} // 用户登录个人信息
}
const mutations = {
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  [DELETE_USER] (state) {
    state.user = {}
  }
}
const actions = {
  async getUser ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },
  //退出登录，清除user数据
  async deleteUser ({commit}) {
    const result = await reqUserLoginOut()
    if (result.code === 0) {
      commit(DELETE_USER)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
