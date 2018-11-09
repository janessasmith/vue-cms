import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    name: '基础',
    iconCls: 'el-icon-message', //图标样式class
    leaf: true, //只有一个节点
    children: [{
      path: '/basis',
      name: '基础'
    }]
  },
  {
    path: '/',
    component: Layout,
    name: '主题',
    iconCls: 'el-icon-message',
    children: [
      {
        path: '/page1',
        name: '信息发布'
      },
      {
        path: '/page2',
        name: '解读回应'
      },
      {
        path: '/page3',
        name: '办事服务'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: '部门',
    iconCls: 'el-icon-message',
    leaf: true, //只有一个节点
    children: [
      {
        path: '/page4',
        name: '部门'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    name: '数据交换',
    iconCls: 'el-icon-message',
    leaf: true, //只有一个节点
    children: [{
      path: '/page5',
      name: '数据交换'
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
