import { createRouter, createWebHashHistory } from 'vue-router'
import MainFrame from '@/layouts/MainFrame.vue'
import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import NotFound from '@/pages/404.vue'

const routes = [
  {
    path: '/',
    component: MainFrame,
    children: [
      {
        path: '/',
        component: Index,
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
