/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const inDocumentsRouter = {
  path: '/inDocuments',
  component: Layout,
  // redirect: '/today/home1',
  name: 'InDocuments',
  meta: {
    title: '入库单据',
    icon: 'el-icon-document-copy'
  },
  children: [
    {
      path: 'cgrkd',
      component: () => import('@/views/inDocuments/cgrkd'),
      name: 'cgrkd',
      meta: { title: '采购入库单' }
    },
    {
      path: 'scrkd',
      component: () => import('@/views/inDocuments/scrkd'),
      name: 'scrkd',
      meta: { title: '生产入库单' }
    },
    {
      path: 'jdscrkd',
      component: () => import('@/views/inDocuments/jdscrkd'),
      name: 'jdscrkd',
      meta: { title: '简单生产入库单' }
    },
    {
      path: 'wwrkd',
      component: () => import('@/views/inDocuments/wwrkd'),
      name: 'wwrkd',
      meta: { title: '委外入库单' }
    },
    {
      path: 'sctld',
      component: () => import('@/views/inDocuments/sctld'),
      name: 'sctld',
      meta: { title: '生产退料单' }
    },
    {
      path: 'jdsctld',
      component: () => import('@/views/inDocuments/jdsctld'),
      name: 'jdsctld',
      meta: { title: '简单生产退料单' }
    },
    {
      path: 'wwtld',
      component: () => import('@/views/inDocuments/wwtld'),
      name: 'wwtld',
      meta: { title: '委外退料单' }
    },
    {
      path: 'qtrkd',
      component: () => import('@/views/inDocuments/qtrkd'),
      name: 'qtrkd',
      meta: { title: '其他入库单' }
    },
  ]
}
export default inDocumentsRouter
