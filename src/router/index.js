import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'
import Detail from '../pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 由于多个页面的拖动会互相影响所以要用到这个让每个页面的初始位置都为最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
