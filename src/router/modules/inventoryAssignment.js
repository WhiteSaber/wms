/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const inventoryAssignmentRouter = {
  path: '/inventoryAssignment',
  component: Layout,
  // redirect: '/today/home1',
  name: 'InventoryAssignment',
  meta: {
    title: '盘点作业',
    icon: 'el-icon-notebook-2'
  },
  children: [
    {
      path: 'pdzy',
      component: () => import('@/views/inventoryAssignment/pdzy'),
      name: 'pdzy',
      meta: { title: '盘点作业' }
    },
    {
      path: 'pyrkd',
      component: () => import('@/views/inventoryAssignment/pyrkd'),
      name: 'pyrkd',
      meta: { title: '盘盈入库单' }
    },
    {
      path: 'pkckd',
      component: () => import('@/views/inventoryAssignment/pkckd'),
      name: 'pkckd',
      meta: { title: '盘亏出库单' }
    },
  ]
}
export default inventoryAssignmentRouter
