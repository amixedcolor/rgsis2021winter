import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
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
      name: 'home',
      component: Home
    },
    //
    // 省略
    //
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail 
    }
  ]
})