// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import store from '@/store'
import router from '@/router'
import axios from 'axios'
import { getTokenTimer } from '@/utils/auth'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
}) // 创建一个axios的实例

function tokenOut() {
  const nowTimer = Date.now()
  const tokenTimer = getTokenTimer()
  const timeOut = 2 * 60 * 60 * 1000
  return nowTimer - tokenTimer > timeOut
}
service.interceptors.request.use(async (config) => {
  // if(store.state.user.token){

  // }

  if (store.state.user.token) {
    if (tokenOut()) {
      await store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('登录过期'))
      // console.log('登录过期')
    } else {
      config.headers.Authorization = store.state.user.token
    }
  }
  return config
}) // 请求拦截器

service.interceptors.response.use(
  (res) => {
    const id = store.state.user.randomCold
    if (res.config.url === `/api/user-service/user/imageCode/${id}`) {
      //
      return res.request.responseURL
    }
    // const { typeId } = res.data
    // if (res.data[0].typeId === 1) {
    //   return res.data
    // }
    const { status } = res.data
    if (status) {
      return res
    }

    // if (res.data.pageIndex === '1') {
    //   return res.data
    // }
    const { success, msg } = res.data
    if (success) {
      Message.success(msg)
      router.push('/')
      Message.success(msg)
      // window.location.reload()
      return res.data

      // return Promise.reject(new Error(msg))
    }
    return res
  },
  async function (error) {
    if (error?.response?.status === 401) {
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
    } else {
      Message.error(error.message)
    }

    return Promise.reject(error)
  }
)
// service.interceptors.response.use(
//   (res) => {
//     const { success, msg } = res.data

//     if (success) {
//       Message.success(msg)
//       return res.data
//     }
//     Message.error(msg)
//     return Promise.reject(new Error(msg))
//   },
//   function (error) {
//     Message.error('系统异常')
//     return Promise.reject('响应期', error)
//   }
// ) // 响应拦截器
export default service // 导出axios实例
