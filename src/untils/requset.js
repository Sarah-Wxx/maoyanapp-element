import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个axios实例
const service = axios.create({
  // 配置基础的url  url = baseURL + request.url
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.BASE_API,
  // 超时
  timeout: 5000
})

// request interceptor 请求前拦截器
service.interceptors.request.use(
  config => {
    // 如果headers有一些统一的配置，可以再这里面处理
    config.headers['token'] = 'tokenstr123'
    // }
    return config
  },
  error => {
    // do something with request error
    Message({
      showClose: true,
      type: 'error',
      message: error || 'error'
    })
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor 请求后拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        Message({
          showClose: true,
          type: 'error',
          message: '没有权限'
        })
        console.log('没有权限')
      }
      Message({
        showClose: true,
        type: 'error',
        message: res.msg || 'Error'
      })
      return Promise.reject(res.msg || 'Error')
      // return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      showClose: true,
      type: 'error',
      message: error || 'Error'
    })
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
