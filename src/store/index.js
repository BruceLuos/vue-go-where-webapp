import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// vuex仓库的创建用于管理多个组件的公用共同数据
// 使用localStorgge来进行本地储存上次点击的城市，因为某些浏览器关闭本地存储的的原因等可能会出错，所以要用一个try catch来避免问题
export default new Vuex.Store({
  state: state,
  mutations: mutations
})
