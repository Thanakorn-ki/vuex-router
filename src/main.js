import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Disabled from './components/Disabled'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter()

var Not = Vue.extend({
  template: 'Error 404'
})
router.map({
  '/': {
    component: Home
  },
  'disabled': {
    component: Disabled
  },
  '/Not': {
    component: Not
  }
})
router.redirect({
  '*': '/Not'
})
router.start(App, '#app')
