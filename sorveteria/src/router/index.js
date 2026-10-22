import { createRouter, createWebHistory } from 'vue-router'
import SorvetesView from '@/views/SorvetesView.vue'
import ContatoView from '@/views/ContatoView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/sorvetes',
    name: 'Sorvetes',
    component: SorvetesView
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContatoView
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Manteve o do Webpack que seu projeto usa
  routes
})

export default router

// o nome dessa pasta onde esse arquivo se e