import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Hello from './components/Hello'
import Disabled from './components/Disabled'
import Form from './components/Form'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter()

var Not = Vue.extend({
  template: 'Error 404'
})
router.map({
  '*': {
    component: Not
  },
  '/': {
    component: Home
  },
  '/disabled': {
    component: Disabled
  },
  '/register': {
    component: Hello
  },
  '/contact': {
    component: Form
  }
})
// router.redirect({
//   '*': '/Not'
// })
router.start(App, '#app')
