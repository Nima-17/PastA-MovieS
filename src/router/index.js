import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import HomePage from '../pages/homePage.vue'
import AiringTodayPage from '../pages/[tv]/airingTodayPage.vue'
import PopularPage from '../pages/[tv]/popularPage.vue'
import OntvPage from '../pages/[tv]/ontvPage.vue'
import nowPlayingPage from '../pages/[movie]/nowplayingPage.vue'
import popularmPage from '../pages/[movie]/popularmPage.vue'
import topratedPage from '../pages/[movie]/topratedPage.vue'
import contactPage from '../pages/[contact]/contactPage.vue'
import notFoundPage from '../pages/notFoundPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta : {
      title: 'PastA MovieS'
    }
  },
  {
    path: '/tv/airing-today',
    component: AiringTodayPage,
    meta: {
      title: 'Tv - AiringToday'
    }
  },
  {
    path: '/tv/ontv',
    component: OntvPage,
    meta: {
      title: 'Tv - OnTv'
    }
  },
  {
    path: '/tv/popular',
    component: PopularPage,
    meta: {
      title: 'Tv - Popular'
    }
  },
  {
    path: '/movie/now-playing',
    component: nowPlayingPage,
    meta: {
      title: 'Movie - NowPlaying'
    }
  },
  {
    path: '/movie/popular',
    component: popularmPage,
    meta: {
      title: 'Movie - Popular'
    }
  },
  {
    path: '/movie/top-rated',
    component: topratedPage,
    meta: {
      title: 'Movie - TopRated'
    }
  },
  {
    path: '/contact',
    component: contactPage,
    meta: {
      title: 'ContactWithMe'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFoundPage,
    meta: {
      title: 'Not Found - 404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  RouterLink,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
