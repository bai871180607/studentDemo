import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Student from './views/Student'
import Test from './views/Test'
import Add from './views/Add'
import Set from './views/Set'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home }, 
    { path: '/student', name: 'student', component: Student },
    { path: '/test', name: 'test', component: Test },
    { path: '/add', name: 'add', component: Add },
    { path: '/set', name: 'set', component: Set },

  ]
})
