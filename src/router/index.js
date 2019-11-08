import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'
const Login = () => import('views/login') 
const MainPage = () => import('views/eval/mainPage') 
const Error =() => import('views/error404')
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
  },
  {
    path: '/MainPage',
    meta: {
        title: '主信息'
    },
    component: MainPage
  },
  {
    path: "/error",
    component: Error
  },
]
const router = new VueRouter( {
  routes:routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});

router.afterEach(() => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});


export default router


