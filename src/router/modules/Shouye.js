import Layout from '@/layout'
export default {
  path: '/WorkOrder',
  component: Layout,
  name: 'WorkOrder',
  meta: { title: '工单管理', icon: 'gongdan' },

  children: [
    {
      path: 'Yunyin',
      name: 'YunYin',
      component: () => import('@/views/WorkOrder/order/YunYin'),
      meta: { title: '运营工单' }
    },

    {
      path: 'Yunwei',
      name: 'YunWei',
      component: () => import('@/views/WorkOrder/order/YunWei'),
      meta: { title: '运维工单' }
    }
  ]
}
