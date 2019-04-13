import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:index

    }
   
  ]
})
