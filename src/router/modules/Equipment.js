import Layout from '@/layout'
export default {
  path: '/Equipment',
  component: Layout,
  name: 'equipment',
  meta: { title: '设备管理', icon: 'shebei' },

  children: [
    {
      path: 'Administration',
      name: 'Administration',
      component: () => import('@/views/Equipment/EquipmentList/Administration'),
      meta: { title: '设备管理' }
    },

    {
      path: 'State',
      name: 'State',
      component: () => import('@/views/Equipment/EquipmentList/State'),
      meta: { title: '设备状态' }
    },
    {
      path: 'Type',
      name: 'Type',
      component: () => import('@/views/Equipment/EquipmentList/Type'),
      meta: { title: '设备类型管理' }
    }
  ]
}
