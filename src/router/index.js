import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const sideBar = r => require.ensure([], () => r(require('@/components/sideBar/index')), 'sideBar')

/**
 * 登录页
 */
const login = r => require.ensure([], () => r(require('@/page/login')), 'login')

/**
 * 虚拟币管理
 */
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')

const routes = [
  {
    path: '/login',
    name: '登录页',
    component: login
  },
  {
    path: '*',
    name: '登录',
    component: login
  },
  {
    path: '/manage',
    component: sideBar,
    children: [
      {
        path: '/',
        name: ['虚拟币管理'],
        component: manage
      },
      {
        path: '/statistics',
        name: ['交易统计'],
        component: manage
      },
    ]
  },
]
export default new Router({
  routes
})
