import axios from 'axios'
import qs from 'qs'
import { notification } from 'antd';
// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('accessToken')
    // 判断headers请求头有无类型，有则有，没有则加载默认
    if (!config.headers.Accept) {
      config.headers.Accept = 'application/json;charset=UTF-8'
    }
    // 这里将token设置到headers中，header的key是Authorization
    config.headers.Authorization = token ? token : ''
    if (config.method == 'get') {
      config.url += '?_=' + new Date().getTime()
    }
    // config.headers('Access-Control-Allow-Origin', '*')
    // config.headers('Access-Control-Allow-Headers', 'Content-Type')
    // config.headers('Access-Control-Allow-Methods', '*')
    // config.headers('Content-Type', 'application/json;charset=utf-8')
    //http://192.168.6.141:5001
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(response)
    return response.data
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = err.response.data.msg || '请求错误'
          break
        case 500:
          err.message = '服务器内部错误'
          break
      }
      alert(err)

    }
    return Promise.reject(err)
  })
export default axios
