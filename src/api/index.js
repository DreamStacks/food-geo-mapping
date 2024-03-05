import axios from 'axios'
import qs from 'qs'
// const TARGET_SERVER = process.env.VUE_ENV === 'server'
// const cnodeBaseUrl = TARGET_SERVER ? process.env.config.CNODE_HOST : '/feapi'

// create an axios instance
const service = axios.create({
  baseURL: process.env.config.CNODE_HOST, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  },
  error => {
    // do something with request error
    console.log(`request_err${error}`) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 0, it is judged as an error.
    // if (res.code !== 0) {
    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     console.log()
    //   }
    //   return Promise.reject(res.message || 'error')
    // }
    return res
  },
  error => {
    console.log(`response_err${error}`) // for debug
    return Promise.reject(error)
  }
)

export default service
