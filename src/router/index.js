import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design'
const Login = () => import('views/login') 
const MainPage = () => import('views/eval/mainPage') 
const Error =() => import('views/error404')
const welcome =() => import('views/eval/welcome')
const scoreOrselect =() => import('views/eval/template/scoreOrselect')
const recommend =() => import('views/eval/template/recommend')
const tempScore =() => import('views/eval/template/tempScore')
const tempSelect=() => import('views/eval/template/tempSelect')

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
        path: 'scoreOrselect',
        component: scoreOrselect
      },
      {
        path: 'tempScore',
        name: 'tempScore',
        component: tempScore
      },
      {
        path: 'tempSelect',
        component: tempSelect
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


