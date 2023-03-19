import Vue from 'vue'
import Router from 'vue-router'
import HomeBuyer from '@/pages/HomeBuyer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeBuyer
    }
  ]
})
