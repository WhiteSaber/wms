/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const labeRouter = {
  path: '/homes',
  component: Layout,
  redirect: '/homes/home1',
  name: 'Home',
  meta: {
    title: '标签打印',
    icon: 'el-icon-collection-tag'
  },
  children: [
    // {
    //   path: 'home1',
    //   component: () => import('@/views/demos/homes/home1'),
    //   name: 'home1',
    //   meta: { title: 'home1' }
    // },
    // {
    //   path: 'home2',
    //   component: () => import('@/views/demos/homes/home2'),
    //   name: 'home2',
    //   meta: { title: 'home2' }
    // },
    // {
    //   path: 'home3',
    //   component: () => import('@/views/demos/homes/home3'),
    //   name: 'home3',
    //   meta: { title: 'home3' }
    // },
    // {
    //   path: 'home4',
    //   component: () => import('@/views/demos/homes/home4'),
    //   name: 'home4',
    //   meta: { title: 'Home4' }
    // },
    // {
    //   path: 'home5',
    //   component: () => import('@/views/demos/homes/home5'),
    //   name: 'home5',
    //   meta: { title: 'Home5' }
    // },
    // {
    //   path: 'home6',
    //   component: () => import('@/views/demos/homes/home6'),
    //   name: 'home6',
    //   meta: { title: 'Home6' }
    // },
    {
      path: 'ckkw',
      component: () => import('@/views/demos/homes/ckkw'),
      name: 'ckkw',
      meta: { title: '仓库仓位' }
    },
    {
      path: 'vlbqdy',
      component: () => import('@/views/demos/homes/vlbqdy'),
      name: 'vlbqdy',
      meta: { title: '物料标签打印' }
    },
    {
      path: 'home2',
      component: () => import('@/views/demos/homes/home2'),
      name: 'home2',
      meta: { title: '仓库子集对应表' }
    },
  ]
}
export default labeRouter
