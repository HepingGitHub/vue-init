import axios from 'axios'
import config from '../config/index'

const service = axios.create({
  timeout: 5000,
  baseURL: config.baseURL // api请求基础地址
})


// 添加请求拦截
service.interceptors.request.use(
  config => {
    // 请求配置处理

    return config
  },
  error => {
    //请求错误处理

    return Promise.reject(error)
  }
)

// 添加响应拦截
service.interceptors.response.use(
  response => {
    // 响应数据处理

    return Promise.resolve(response)
  },
  error => {
    // 错误处理
    console.log(error)

    return Promise.reject(error)
  }
)


export default service