export default [
  {
    name: 'Dashboard',
    icon: 'ti-home',
    path: '/overview'
  },
  {
    name: 'Strategies',
    icon: 'ti-wand',
    path: '/strategies',
    collapsed: true,
    children: [{
      name: 'View',
      path: '/strategies/view'
    },
    {
      name: 'Create',
      path: '/strategies/create'
    }]
  },
  {
    name: 'Trading Bots',
    icon: 'ti-panel',
    path: '/bots'
  },
  {
    name: 'Live Charts',
    icon: 'ti-stats-up',
    path: '/live'
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
    path: '/orderbook'
  },
  {
    name: 'Marketplace',
    icon: 'ti-shopping-cart',
    path: '/market'
  },
  {
    name: 'Portfolio Tracker',
    icon: 'ti-wallet',
    path: '/portfolio'
  }
]
