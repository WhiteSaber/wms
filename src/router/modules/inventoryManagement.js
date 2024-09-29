/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const inventoryManagementRouter = {
  path: '/inventoryManagement',
  component: Layout,
  // redirect: '/today/home1',
  name: 'InventoryManagement',
  meta: {
    title: '清单管理',
    icon: 'el-icon-document'
  },
  children: [
    {
      path: 'wgdd',
      component: () => import('@/views/inventoryManagement/wgdd'),
      name: 'wgdd',
      meta: { title: '外购订单' }
    },
    {
      path: 'wwdd',
      component: () => import('@/views/inventoryManagement/wwdd'),
      name: 'wwdd',
      meta: { title: '委外订单' }
    },
    {
      path: 'scdd',
      component: () => import('@/views/inventoryManagement/scdd'),
      name: 'scdd',
      meta: { title: '生产订单' }
    },
    {
      path: 'xsdd',
      component: () => import('@/views/inventoryManagement/xsdd'),
      name: 'xsdd',
      meta: { title: '销售订单' }
    },
    {
      path: 'lld',
      component: () => import('@/views/inventoryManagement/lld'),
      name: 'lld',
      meta: { title: '领料单' }
    },
  ]
}
export default inventoryManagementRouter
