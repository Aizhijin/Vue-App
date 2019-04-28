import {reqShopGoods, reqShopInfo, reqShopRatings} from '../../api'
import {RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS} from '../mutations-type'

const state = {
  ratings: [], // 评论信息
  info: {}, // 商家信息
  goods: [] // 食品列表
}
const mutations = {
  [RECEIVE_INFO] (state, info) {
    state.info = info
  },
  [RECEIVE_GOODS] (state, goods) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, ratings) {
    state.ratings = ratings
  }
}
const actions = {
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      commit(RECEIVE_INFO, result.data)
    }
  },
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      commit(RECEIVE_GOODS, result.data)
    }
  },
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      commit(RECEIVE_RATINGS, result.data)
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
