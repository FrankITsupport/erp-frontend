// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardHome from '@/views/DashboardHome.vue'
import Users from '@/views/Users.vue'
import Reports from '@/views/Reports.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      { path: '', name: 'home', component: DashboardHome },
      { path: 'users', name: 'users', component: Users },
      { path: 'reports', name: 'reports', component: Reports }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
