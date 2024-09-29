/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const operationDashboardRouter = {
  path: '/operationDashboard',
  component: Layout,
  // redirect: '/today/home1',
  name: 'OperationDashboard',
  meta: {
    title: '操作看板',
    icon: 'el-icon-data-line'
  },
  children: [
    {
      path: 'dbdmx',
      component: () => import('@/views/operationDashboard/dbdmx'),
      name: 'dbdmx',
      meta: { title: '调拨单明细' }
    },
    {
      path: 'kcmx',
      component: () => import('@/views/operationDashboard/kcmx'),
      name: 'kcmx',
      meta: { title: '库存明细' }
    },
    {
      path: 'sskc',
      component: () => import('@/views/operationDashboard/sskc'),
      name: 'sskc',
      meta: { title: '实时库存' }
    },
    {
      path: 'gg',
      component: () => import('@/views/operationDashboard/gg'),
      name: 'gg',
      meta: { title: '公告' }
    },
    {
      path: 'rkd',
      component: () => import('@/views/operationDashboard/rkd'),
      name: 'rkd',
      meta: { title: '入库单' }
    },
    {
      path: 'ckd',
      component: () => import('@/views/operationDashboard/ckd'),
      name: 'ckd',
      meta: { title: '出库单' }
    },
  ]
}
export default operationDashboardRouter
