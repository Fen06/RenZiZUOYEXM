// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
// import store from '@/store'
// import store from '@/store'
import axios from 'axios'
// import { Message } from 'element-ui'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
}) // 创建一个axios的实例
// service.interceptors.request.use((config)=>{
// if(store.state.user.token){
//
// }
// }) // 请求拦截器
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
