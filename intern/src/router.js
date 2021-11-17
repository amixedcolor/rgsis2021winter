import Vue from 'vue'
import Router from 'vue-router'
import Overview from './components/Overview.vue'
import Detail from './components/Detail.vue'

Vue.use(Router)

export default new Router({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/:id',
      name: 'detail',
      component: Detail 
    }
  ]
})