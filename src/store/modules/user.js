import { Login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: '',
    cold: ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setcold(state, payload) {
      state.cold = payload
    }
  },
  actions: {
    async Login(context, payload) {
      const res = await Login(payload)
      console.log(res)
      const token = res.data.token
      const cod = res.data
      // console.log(cod)
      context.commit('setToken', token)
    },
    getcold(context, payload) {
      context.commit('setcold', payload)
    }
  },
  getters: {}
}
