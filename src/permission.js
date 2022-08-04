import router from '@/router'
import store from '@/store'
const whileList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') return next('/')
    next()
  } else {
    const isCludes = whileList.includes(to.path)
    if (isCludes) {
      next()
    } else {
      next('/login')
    }
  }
})

