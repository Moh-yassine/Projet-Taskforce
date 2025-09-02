import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'

const routes = [
  { path: '/signup', component: Signup }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(Home) 
app.use(router)
app.mount('#app')