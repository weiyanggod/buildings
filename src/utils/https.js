// httpService.js
import axios from 'axios'
import { message } from 'antd'
const httpService = axios.create({
  baseURL: '', // 替换为你的 API 基础 URL
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
    const code = response.data.code
    if (code !== 200) {
      message.error(response.data.msg)
    }
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    message.error('请求错误')
    return Promise.reject(error)
  },
)

// 封装常用的请求方法
const get = ({ url, params, headers }) =>
  httpService.get(url, params, { headers })
const post = ({ url, data, headers }) => {
  return httpService.post(url, data, { headers })
}
const put = ({ url, data, headers }) => httpService.put(url, data, { headers })
const del = ({ url, headers }) => httpService.delete(url, { headers })

export default {
  get,
  post,
  put,
  del,
}
