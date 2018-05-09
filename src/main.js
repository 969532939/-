// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./config/rem"
import Axios from "axios"
import Mint from "mint-ui"
import "./css/item.css"
import '../node_modules/mint-ui/lib/style.css';
Vue.prototype.$Axios=Axios
Vue.use(Mint)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
