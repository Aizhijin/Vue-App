import Vue from 'vue'
import {reqShopGoods, reqShopInfo, reqShopRatings} from '../../api'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART
} from '../mutations-type'

const state = {
  ratings: [], // 评论信息
  info: {}, // 商家信息
  goods: [], // 食品列表
  shopCart: [] // 购物车数组
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
  },
  [INCREMENT_FOOD_COUNT] (state, food) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.shopCart.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, food) {
    if (food.count > 1) {
      food.count--
    } else {
      food.count--
      state.shopCart.splice(state.shopCart.indexOf(food), 1)
    }
  },
  [CLEAR_CART] (state) {
    state.shopCart.forEach((food) => {
      food.count = 0
    })
    state.shopCart = []
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
  },
  updateFoodCount ({commit}, {food, isAdd}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, food)
    } else {
      commit(DECREMENT_FOOD_COUNT, food)
    }
  },
  clearShopCart ({commit}) {
    commit(CLEAR_CART)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
