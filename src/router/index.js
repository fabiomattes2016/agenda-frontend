import { createRouter, createWebHistory } from 'vue-router'
import AgendaView from '../views/AgendaView.vue'
import NewLocal from '../views/NewLocal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'agenda',
      component: AgendaView
    },
    {
      path: '/new-local',
      name: 'new-local',
      component: NewLocal
    }
  ]
})

export default router
