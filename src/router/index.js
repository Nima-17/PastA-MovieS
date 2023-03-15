import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import HomePage from '../pages/homePage.vue'
import AiringTodayPage from '../pages/[tv]/airingTodayPage.vue'
import PopularPage from '../pages/[tv]/popularPage.vue'
import OntvPage from '../pages/[tv]/ontvPage.vue'
import nowPlayingPage from '../pages/[movie]/nowplayingPage.vue'
import popularmPage from '../pages/[movie]/popularmPage.vue'
import topratedPage from '../pages/[movie]/topratedPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/tv/airing-today',
    name: 'Airing_Today',
    component: AiringTodayPage
  },
  {
    path: '/tv/ontv',
    component: OntvPage
  },
  {
    path: '/tv/popular',
    component: PopularPage
  },
  {
    path: '/movie/now-playing',
    component: nowPlayingPage
  },
  {
    path: '/movie/popular',
    component: popularmPage
  },
  {
    path: '/movie/top-rated',
    component: topratedPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  RouterLink,
  routes
})

export default router
