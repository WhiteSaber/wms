/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const todayRouter = {
  path: '/today',
  component: Layout,
  // redirect: '/today/home1',
  name: 'Today',
  meta: {
    title: '今日任务',
    icon: 'el-icon-date'
  },
  children: [
    {
      path: 'dck',
      component: () => import('@/views/today/dck'),
      name: 'dck',
      meta: { title: '待出库' }
    },
    {
      path: 'drk',
      component: () => import('@/views/today/drk'),
      name: 'drk',
      meta: { title: '待入库' }
    },
    {
      path: 'yck',
      component: () => import('@/views/today/yck'),
      name: 'yck',
      meta: { title: '已出库' }
    },
    {
      path: 'yrk',
      component: () => import('@/views/today/yrk'),
      name: 'yrk',
      meta: { title: '已入库' }
    },
  ]
}
export default todayRouter
