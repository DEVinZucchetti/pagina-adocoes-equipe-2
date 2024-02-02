import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue'
import Home1 from '../views/pessoa1/Home.vue'
import Home2 from '../views/pessoa2/Home.vue'
import Home3 from '../views/pessoa3/Home.vue'
import Home4 from '../views/pessoa4/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/home1',
      name: 'home1',
      component: Home1
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2
    },
    {
      path: '/home3',
      name: 'home3',
      component: Home3
    },
    {
      path: '/home4',
      name: 'home4',
      component: Home4
    },
   
  ]
})

export default router
