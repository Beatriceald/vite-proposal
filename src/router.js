import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './views/HomeView.vue'
import GetProposal from './components/GetProposal.vue'
import AddProposal from './components/AddProposal.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/proposals', component: GetProposal },
  { path: '/proposals/add', component: AddProposal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router