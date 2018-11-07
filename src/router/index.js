import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    name: '导航一',
    iconCls: 'el-icon-message', //图标样式class
    children: [
      {
        path: '/table',
        name: 'Table',
        children: [
          {
            path: '/table/table1',
            name: 'SubTable1'
          }
        ]
      },
      {
        path: '/form',
        name: 'Form'
      },
      {
        path: '/user',
        name: '列表'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: '导航二',
    iconCls: 'fa fa-id-card-o',
    children: [
      {
        path: '/page4',
        name: '页面4'
      },
      {
        path: '/page5',
        name: '页面5'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true, //只有一个节点
    children: [
      {
        path: '/page6',
        name: '导航三'
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
