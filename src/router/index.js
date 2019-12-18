import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: 'team',
        name: 'team',
        component: () => import('@/views/team/index')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index')
      },
      {
        path: 'fruits',
        name: 'fruits',
        component: () => import('@/views/fruits/index')
      }
      ]
    }]
  })
}
