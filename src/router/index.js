import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import catmain from '@/components/catmain'

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
      path: '/cat/:cat/:subcat?',
      component: catmain,
    }
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
  ]
})
