import Vue from 'vue'
import Router from 'vue-router'
import Item from '../components/item'
import Header from '../components/header'
import GoodPurchase from '../components/GoodPurchase'
import GoodPurchaseA from '../components/GoodPurchaseA'
import GList from '../components/GList'
import Jacket from '../components/jacket'
import Pantskirt from '../components/pantskirt'
import Store from '../components/store'
import ItemA from '../components/itemA'
import Login from '../components/login'
import MoreList from '../components/moreList'

Vue.use(Router)

export default new Router({
  mode:"history", 
  routes: [
    {
      path: '/',
      name: 'item',
      component: Item
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/GoodPurchase',
      name: 'GoodPurchase',
      component: GoodPurchase
    },
    {
      path: '/GList',
      name: 'GList',
      component: GList,
      
    },
    {
      path: '/jacket',
      name: 'jacket',
      component: Jacket,
      },
      {
      path: '/pantskirt',
      name: 'pantskirt',
      component: Pantskirt,
    },
    {
      path: '/store',
      name: 'store',
      component: Store,
    },
    {
      path: '/itemA',
      name: 'itemA',
      component: ItemA,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/GoodPurchaseA',
      name: 'GoodPurchaseA',
      component: GoodPurchaseA,
    },
    {
      path: '/moreList',
      name: 'moreList',
      component: MoreList,
    }
  ]
})
