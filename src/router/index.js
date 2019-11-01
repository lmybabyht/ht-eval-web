import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../view/login') 

//1、安装插件
Vue.use(VueRouter)

//2、创建路由对象router
const routes = [
  {
    path: '/',
    meta: {
        title: '干部测评'
    },
      component: Login
  }
]
const router = new VueRouter( {
  routes,
  mode: 'history'
})

export default router


