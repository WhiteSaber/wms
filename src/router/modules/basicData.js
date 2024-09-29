/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const basicDataRouter = {
  path: '/basicData',
  component: Layout,
  // redirect: '/today/home1',
  name: 'BasicData',
  meta: {
    title: '基础资料',
    icon: 'el-icon-folder'
  },
  children: [
    {
      path: 'ckda',
      component: () => import('@/views/basicData/ckda'),
      name: 'ckda',
      meta: { title: '仓库档案' }
    },
    {
      path: 'wlda',
      component: () => import('@/views/basicData/wlda'),
      name: 'wlda',
      meta: { title: '物料档案' }
    },
  ]
}
export default basicDataRouter
