import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    const data = res.data
    if (data.code) {
      if (data.code === 200) {
        return data
      } else {
        if (data.message) {
          return Promise.reject(new Error(data.message))
        } else {
          return Promise.reject(new Error('请求失败'))
        }
      }
    } else {
      return data
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default request
