import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Community from '@/components/Community'
import Shopcar from '@/components/Shopcar'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
