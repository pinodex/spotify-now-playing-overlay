import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/pages/Index.vue')
    },

    {
      name: 'code',
      path: '/code',
      component: () => import('@/pages/Code.vue')
    },

    {
      name: 'nowPlaying',
      path: '/now_playing',
      component: () => import('@/pages/NowPlaying.vue')
    }
  ]
})
