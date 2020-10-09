import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signin from '@/components/Signin'
import Maincontainer from '@/components/kadrn/maincontainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome/:t',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signin/:t',
      name: '注册',
      component: Signin
    },
    {
      path: '/maincontainer/:t',
      name: '主页',
      component: Maincontainer
    }
  ]
})
