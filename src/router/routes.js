import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import Ratings from '../pages/Shop/Rating/Rating'
import Goods from '../pages/Shop/Goods/Goods'
import Info from '../pages/Shop/Info/Info'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/info',
        component: Info
      },
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: '/',
        redirect: '/shop/goods'
      }
    ],
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]
