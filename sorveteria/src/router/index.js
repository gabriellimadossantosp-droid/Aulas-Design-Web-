import { createRouter, createWebHistory } from 'vue-router'
import SorvetesView from '@/views/SorvetesView.vue'
import ContatoView from '@/views/ContatoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SorvetesView // Aponta a raiz para a tela de sorvetes
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Manteve o do Webpack que seu projeto usa
  routes
})

export default router