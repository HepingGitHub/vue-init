import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
Vue.use(VueRouter)

export const commonality = [{
    path: '/',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/honor',
    name: 'honor',
    component: Layout,
    meta: {
      title: '荣誉中亚',
      icon: 'el-icon-s-goods'
    },
    children: [{
        path: 'issue-honor',
        name: 'issue-honor',
        component: () => import("@/views/honor/index"),
        meta: {
          title: '发布事迹',
          icon: 'el-icon-s-goods'
        }
      },
      {
        path: 'honor-list',
        name: 'honor-list',
        component: () => import("@/views/honor/honor-list"),
        meta: {
          title: '荣誉列表',
          icon: 'el-icon-s-goods'
        }
      }
    ]
  }
]

export const asyncRoutes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: commonality
})

export default router