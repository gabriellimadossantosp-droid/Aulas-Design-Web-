import { createRouter, createWebHistory } from 'vue-router';
import OrganizacaoView from '@/viwes/OrganizacaoView.vue'
import ContatoView from '@/viwes/ContatoView.vue'

const routes = [
    {
        path: '/organizacao',
        name: 'Organizacao',
        component: OrganizacaoView
    },
    {
        path: '/contato',
        name: 'Contato',
        component: ContatoView
    }
]
const router = createRouter ({
    history: createWebHistory(),
    routes
})
export default router