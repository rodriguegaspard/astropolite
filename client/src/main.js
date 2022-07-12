import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue'
import HomeView from './HomeView.vue'
import NewsView from './NewsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/news', component: NewsView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
