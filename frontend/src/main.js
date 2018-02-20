import Vue from 'vue'
import VueRouter from 'vue-router'
import VueNotify from 'vue-notifyjs'
import VeeValidate from 'vee-validate'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import App from './App.vue'

// Plugins
import GlobalComponents from './gloablComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/UIComponents/SidebarPlugin'

// router setup
// import routes from './routes/routes' // use this to restore original routes
import routes from './routes/routes_u'

// library imports

import './assets/sass/paper-dashboard.scss'
import './assets/sass/demo.scss'
import 'es6-promise/auto'

// import sidebarLinks from './sidebarLinks' // use this to restore original routes
import sidebarLinks from './sidebarLinksWoxcut'
// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalDirectives)
Vue.use(GlobalComponents)
Vue.use(VueNotify)
Vue.use(SideBar, {sidebarLinks: sidebarLinks})
Vue.use(VeeValidate)
locale.use(lang)

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
