import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Community from '@/components/Community'
import Shopcar from '@/components/Shopcar'
import My from '@/components/My'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Detailsmall from '@/components/Detailsmall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/detailsmall/:fid',
      name: 'Detailsmall',
      component: Detailsmall
    }
  ]
})
