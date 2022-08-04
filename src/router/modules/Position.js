import Layout from '@/layout'
export default {
  path: '/Position',
  component: Layout,
  name: 'Position',
  meta: { title: '点位管理', icon: 'dingwei' },

  children: [
    {
      path: 'Eare',
      name: 'Eare',
      component: () => import('@/views/Position/PositionList/Eare'),
      meta: { title: '区域管理' }
    },

    {
      path: 'Inposition',
      name: 'Inposition',
      component: () => import('@/views/Position/PositionList/Inposition'),
      meta: { title: '点位管理' }
    },
    {
      path: 'Cooperation',
      name: 'Cooperation',
      component: () => import('@/views/Position/PositionList/Cooperation'),
      meta: { title: '合作商管理' }
    }
  ]
}
