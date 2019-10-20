import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import(`@/pages/${file}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jdFinance',
      component: _import_('jdFinance')
    },
    {
      path: '/login',
      name: 'login',
      component: _import_('login')
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: _import_('personalCenter')
    },
    {
      path: '/register',
      name: 'register',
      component: _import_('register')
    }
  ]
})
