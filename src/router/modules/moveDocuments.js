/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const moveDocumentsRouter = {
  path: '/moveDocuments',
  component: Layout,
  // redirect: '/today/home1',
  name: 'MoveDocuments',
  meta: {
    title: '移仓单据',
    icon: 'el-icon-copy-document'
  },
  children: [
    {
      path: 'fbsdcd',
      component: () => import('@/views/moveDocuments/fbsdcd'),
      name: 'fbsdcd',
      meta: { title: '分步式调出单' }
    },
    {
      path: 'fbsdrd',
      component: () => import('@/views/moveDocuments/fbsdrd'),
      name: 'fbsdrd',
      meta: { title: '分步式调入单' }
    },
    {
      path: 'zjdbd',
      component: () => import('@/views/moveDocuments/zjdbd'),
      name: 'zjdbd',
      meta: { title: '直接调拨单' }
    },
  ]
}
export default moveDocumentsRouter
