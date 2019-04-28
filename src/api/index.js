/*
  封装各种请求方法
*/
import {ajax} from './ajax'

const Url = '/api'

// 请求位置信息
export const reqAddress = (latitude, longitude) => ajax(Url + `/position/${latitude},${longitude}`)
//请求分类列表
export const reqFoodCatgoryList = () => ajax(Url + `/index_category`)
//根据经纬度请求商家列表
export const reqShopsList = (latitude, longitude) => ajax(Url + `/shops?latitude=${latitude}&longitude=${longitude}`)
//发送短信验证码
export const reqSendCode = (phoneNumber) => ajax(Url + `/sendcode?phone=${phoneNumber}`)
//根据短信登录
export const reqMessageLogin = (phone, code) => ajax(Url + `/login_sms`, {phone, code}, 'POST')
//密码登录
export const reqPasswordLogin = (name, pwd, captcha) => ajax(Url + `/login_pwd`, {name, pwd, captcha}, 'POST')
//根据会话获取用户信息
export const reqUser = () => ajax(Url + `/userinfo`)
//退出登录
export const reqUserLoginOut = () => ajax(Url + `/logout`)
//获取该商家食品列表
export const reqShopGoods = () => ajax(`/goods`)
//获取该商家评论
export const reqShopRatings = () => ajax(`/ratings`)
//获取该商家信息
export const reqShopInfo = () => ajax(`/info`)
