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
    },

    {
      name: 'privacyPolicy',
      path: '/privacy_policy',
      component: () => import('@/pages/PrivacyPolicy.vue')
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return new Promise((resolve, reject) => {
      let scrollDuration = 500,
          cosParameter = window.scrollY / 2,
          oldTimestamp = performance.now(),
          scrollCount = 0

      function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))

        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
        }

        if (window.scrollY === 0) {
          resolve({ x: 0, y: 0 })

          return
        }

        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)))

        oldTimestamp = newTimestamp

        window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step);
    })
  }
})
