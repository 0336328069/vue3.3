import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue');
const Todo = () => import('../views/TodoList.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
  ]
})

export default router
