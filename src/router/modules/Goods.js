import Layout from '@/layout'
export default {
  path: '/Goods',
  component: Layout,
  name: 'goods',
  meta: { title: '商品管理', icon: 'pintu' },

  children: [
    {
      path: 'GoodsTpye',
      name: 'GoodsTpye',
      component: () => import('@/views/Goods/GoodsList/GoodsTpye'),
      meta: { title: '商品类型' }
    },

    {
      path: 'GoodsGuanLi',
      name: 'GoodsGuanLi',
      component: () => import('@/views/Goods/GoodsList/GoodsGuanLi'),
      meta: { title: '商品管理' }
    }
  ]
}
