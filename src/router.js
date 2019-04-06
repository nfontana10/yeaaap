import Vue from 'vue'
import Router from 'vue-router'
// import NotFound from './pages/NotFound.vue'
import Home from './pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page/:uid',
      name: 'home',
      component: Home
    }
  ]
})
