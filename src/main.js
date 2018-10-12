import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Topheader from './components/TopHeader/TopHeader.vue'

//祖册全局组件
Vue.component('TopHeader',Topheader)
debugger
new Vue({
  el:'app',
  render:h => h(App),

  router,
  store,
})
