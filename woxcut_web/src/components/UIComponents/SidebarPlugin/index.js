import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-home',
      path: '/overview'
    },
    {
      name: 'Strategies',
      icon: 'ti-wand',
      path: '/strategies'
    },
    {
      name: 'Trading Bots',
      icon: 'ti-panel',
      path: '/bots'
    },
    {
    name: 'Live Market',
      icon: 'ti-stats-up',
      path: '/livemarket'
    },
    {
      name: 'Exchanges',
      icon: 'ti-world',
      path: '/exchanges'
    },
    {
      name: 'Transactions',
      icon: 'ti-credit-card',
      path: '/transactions'
    },
    {
      name: 'Buy and Sell',
      icon: 'ti-money',
      path: '/buysell'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
