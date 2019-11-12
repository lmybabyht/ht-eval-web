import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'
const Login = () => import('views/login') 
const MainPage = () => import('views/eval/mainPage') 
const Error =() => import('views/error404')
const welcome =() => import('views/eval/welcome')
const score =() => import('views/eval/template/score')
const select =() => import('views/eval/template/select')
const recommend =() => import('views/eval/template/recommend')

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
    component: MainPage,
    children: [
      {
        path: '',
        redirect: 'welcome'
      },
      {
        path: 'welcome',
        component: welcome
      },
      {
        path: 'score',
        component: score
      },
      {
        path: 'select',
        component: select
      },
      {
        path: 'recommend',
        component: recommend
      }
    ]
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


