/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const outDocumentsRouter = {
  path: '/outDocuments',
  component: Layout,
  // redirect: '/today/home1',
  name: 'OutDocuments',
  meta: {
    title: '出库单据',
    icon: 'el-icon-document-copy'
  },
  children: [
    {
      path: 'xsckd',
      component: () => import('@/views/outDocuments/xsckd'),
      name: 'xsckd',
      meta: { title: '销售出库单' }
    },
    {
      path: 'sclld',
      component: () => import('@/views/outDocuments/sclld'),
      name: 'sclld',
      meta: { title: '生产领料单' }
    },
    {
      path: 'jdsclld',
      component: () => import('@/views/outDocuments/jdsclld'),
      name: 'jdsclld',
      meta: { title: '简单生产领料单' }
    },
    {
      path: 'jdsctkd',
      component: () => import('@/views/outDocuments/jdsctkd'),
      name: 'jdsctkd',
      meta: { title: '简单生产退库单' }
    },
    {
      path: 'scbld',
      component: () => import('@/views/outDocuments/scbld'),
      name: 'scbld',
      meta: { title: '生产补料单' }
    },
    {
      path: 'sctkd',
      component: () => import('@/views/outDocuments/sctkd'),
      name: 'sctkd',
      meta: { title: '生产退库单' }
    },
    {
      path: 'wwlld',
      component: () => import('@/views/outDocuments/wwlld'),
      name: 'wwlld',
      meta: { title: '委外领料单' }
    },
    {
      path: 'wwbld',
      component: () => import('@/views/outDocuments/wwbld'),
      name: 'wwbld',
      meta: { title: '委外补料单' }
    },
    {
      path: 'wwchd',
      component: () => import('@/views/outDocuments/wwchd'),
      name: 'wwchd',
      meta: { title: '委外超耗单' }
    },
    {
      path: 'cgtld',
      component: () => import('@/views/outDocuments/cgtld'),
      name: 'cgtld',
      meta: { title: '采购退料单' }
    },
  ]
}
export default outDocumentsRouter
