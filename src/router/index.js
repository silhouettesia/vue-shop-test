import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import catmain from '@/components/catmain'
import prod from '@/components/prod'
import search from '@/components/prod'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cat',
      redirect: '/cat/all'
    },
    {
      path: '/cat/:cat/:subcat?',
      component: catmain,
    },
    /*{
      path: '/cat/:cat',
      component: catwrap,
      children: [
        {
          path: '',
          component: catmain,
        },
        {
          path: ':subcat',
          component: catmain,
        }
      ]
    }*/
    {
      path: '/prod/:prod',
      component: prod,
    },
    {
      path: '/search/:query',
      component: catmain,
    }
  ]
})
