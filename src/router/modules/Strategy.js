import Layout from '@/layout'
export default {
  path: '/Strategy',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/Strategy'),
      meta: { title: '策略管理', icon: 'dingdan' }
    }
  ]
}
