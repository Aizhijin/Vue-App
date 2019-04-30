import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from '../mutations-type'
import {reqAddress, reqFoodCatgoryList, reqShopsList} from '../../api'

const state = {
  latitude: 22.63201, // 纬度,
  longitude: 113.844154, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [] //商家数组
}
//操作状态的间接方法
const actions = {
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state
    //发送请求
    const result = await reqAddress(latitude, longitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
    //根据结果提交mutation
  },
  //获取食品分类数组的异步action
  async getCatgoryList ({commit}) {
    const result = await reqFoodCatgoryList()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },
  //获取商家信息数组的异步action
  async getShopsList ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShopsList(latitude, longitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}
//操作状态的直接方法
const mutations = {
  [RECEIVE_ADDRESS] (state, address) {
    console.log('getCatgoryList')
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
