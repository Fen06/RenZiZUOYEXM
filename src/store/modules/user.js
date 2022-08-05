import { Login, UserInfo } from '@/api/user'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: '',
    cold: '',
    randomCold: '',
    userInfo: {},
    userInformation: {}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setcold(state, payload) {
      state.cold = payload
    },
    setrandomCold(state, payload) {
      state.randomCold = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setUserInformation(state, payload) {
      state.userInformation = payload
    }
  },
  actions: {
    async Login(context, payload) {
      const res = await Login(payload)
      console.log(res)
      const token = res.token
      context.commit('setToken', token)
      context.commit('setUserInfo', res)
      setTokenTime()
    },
    getcold(context, payload) {
      context.commit('setcold', payload)
    },
    getrandomCold(context, payload) {
      context.commit('setrandomCold', payload)
    },
    logout(context) {
      context.commit('setToken', '')
    },
    getUserInformation(context, payload) {
      context.commit('setUserInformation', payload)
    }
  },
  getters: {}
}
