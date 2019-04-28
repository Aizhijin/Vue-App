/*
 包含若干个用于间接（调用commit）更新状态数据的方法
 */
/*import {
  reqFoodCatgoryList,
  reqUser,
  reqAddress,
  reqShopsList,
  reqUserLoginOut,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api/index'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  DELETE_USER,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  RECEIVE_INFO
} from './mutations-type'*/

export default {
  /*//获取地址的异步action
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
  },
  //获取当前用户的异步action
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
  },
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
  }*/
}
