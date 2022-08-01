import { Login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
  },
  actions: {
    async Login(context, payload) {
      const res = await Login(payload)
      console.log(res)
      const token = res.data
      context.commit('setToken', token)
    }
  },
  getters: {}
}
