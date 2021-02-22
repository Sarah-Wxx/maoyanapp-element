import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = () => import('@/pages/Main')
const Movie = () => import('@/pages/movie/Movie')
const Cinema = () => import('@/pages/movie/Cinema')
const My = () => import('@/pages/movie/My')
const Find = () => import('@/pages/movie/Find')
const MovieInfo = () => import('@/pages/movie/MovieInfo')
const Login = () => import('@/pages/Login')
const Regist = () => import('@/pages/Regist')

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '',
        redirect: 'movie'
      },
      {
        path: 'movie',
        component: Movie,
        meta: '猫眼-电影'
      },
      {
        path: 'find',
        component: Find,
        meta: '猫眼-发现'
      },
      {
        path: 'cinema',
        component: Cinema,
        meta: '猫眼-影院'
      },
      {
        path: 'my',
        component: My,
        meta: '猫眼-我的'
      }
    ]
  },
  {
    path: '/movieInfo',
    component: MovieInfo,
    meta: '猫眼-电影详情'
  },
  {
    path: '/login',
    component: Login,
    meta: '猫眼-登录'
  },
  {
    path: '/regist',
    component: Regist,
    meta: '猫眼-注册'
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta
  next()
})

export default router
