import Layout from '@/layout'
export default {
  path: '/Peopel',
  component: Layout,
  name: 'Peopel',
  meta: { title: '人员管理', icon: 'renyuanguanli' },

  children: [
    {
      path: 'InpeopleList',
      name: 'InpeopleList',
      component: () => import('@/views/Peopel/PeopleList/InpeopleList'),
      meta: { title: '人员列表' }
    },

    {
      path: 'Peopleeffect',
      name: 'Peopleeffect',
      component: () => import('@/views/Peopel/PeopleList/Peopleeffect'),
      meta: { title: '人效统计' }
    },
    {
      path: 'Peoplework',
      name: 'Peoplework',
      component: () => import('@/views/Peopel/PeopleList/Peoplework'),
      meta: { title: '工作量列表' }
    }
  ]
}
