import { createRouter, createWebHashHistory } from 'vue-router'
import MainFrame from '@/layouts/MainFrame.vue'
import Index from '@/pages/index.vue'
import BugList from '@/pages/bug/list.vue'
import ThingModel from '@/pages/thingModel/list.vue'
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
      },
      {
        path: '/bug/list',
        component: BugList,
        meta: {
          title: '漏测分析页'
        }
      },
      {
        path: '/thing-model/list',
        component: ThingModel,
        meta: {
          title: '物模型列表'
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
