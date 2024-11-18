// httpService.js
import axios from 'axios'

const httpService = axios.create({
  baseURL: '/api', // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
})

// 添加请求拦截器
httpService.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么
    // 例如添加认证 token
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
httpService.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

// 封装常用的请求方法
const get = (url, params) => httpService.get(url, { params })
const post = (url, data) => httpService.post(url, data)
const put = (url, data) => httpService.put(url, data)
const del = (url) => httpService.delete(url)

export default {
  get,
  post,
  put,
  del,
}
