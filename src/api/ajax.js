/*
 封装axios用来发送请求的模块
 */
import axios from 'axios'

export function ajax (url, data = {}, method = 'GET') {
  let promise = null
  if (method === 'GET') {
    promise = axios.get(url, {params: data}) // params配置, 指定的是query参数
  } else {
    promise = axios.post(url, data)
  }
  return promise.then((res) => {
    return res.data
  }).catch((err) => alert('请求异常：' + err.message))
}
