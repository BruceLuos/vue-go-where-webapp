import Vue from 'vue'
import Router from 'vue-router'
import Home from '.../home/Home.vue'
import City from '.../city/City.vue'

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
    }
  ]
})
