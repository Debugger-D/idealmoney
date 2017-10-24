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

/**
 * 交易统计
 */
const statistics = r => require.ensure([], () => r(require('@/page/statistics')), 'statistics')

/**
 * 过期记录
 */
const record = r => require.ensure([], () => r(require('@/page/record')), 'record')

/**
 * 交易汇总
 */
const summary = r => require.ensure([], () => r(require('@/page/record')), 'summary')

/**
 * 交易流水
 */
const flow = r => require.ensure([], () => r(require('@/page/record')), 'flow')

/**
 * 异常处理
 */
const handle = r => require.ensure([], () => r(require('@/page/record')), 'handle')

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
      }, {
        path: '/statistics',
        name: ['交易统计'],
        component: statistics
      }, {
        path: '/record',
        name: ['过期记录'],
        component: record
      }, {
        path: '/summary',
        name: ['交易汇总'],
        component: summary
      }, {
        path: '/flow',
        name: ['交易流水'],
        component: flow
      }, {
        path: '/handle',
        name: ['异常处理'],
        component: handle
      },
    ]
  },
]
export default new Router({
  routes
})
