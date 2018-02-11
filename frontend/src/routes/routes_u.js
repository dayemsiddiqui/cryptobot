// Dashboard Layout
import Layout from 'src/components/GeneralViews/Layout/DashboardLayout.vue'

// Not Found
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Overview
import Overview from 'src/components/Dashboard/Overview.vue'

// LiveCharts
import LiveCharts from 'src/components/Dashboard/LiveCharts.vue'

// Transactions
import Transaction from 'src/components/Dashboard/Transactions/Transaction.vue'

// Exchanges
import Exchange from 'src/components/Dashboard/Exchanges/Exchange.vue'

// Bots
import Bot from 'src/components/Dashboard/Bots/Bot.vue'
import BotDetail from 'src/components/Dashboard/Bots/BotDetail.vue'

// Strategies
import Strategy from 'src/components/Dashboard/Strategies/Strategy.vue'
// import StrategyCreate from 'src/components/Dashboard/Strategies/StrategyCreate.vue'

// Market
import Market from 'src/components/Dashboard/Market/Market.vue'

// Order Book
import OrderForm from 'src/components/Dashboard/OrderBook/OrderForm.vue'

let woxcut = {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'overview',
      name: 'Dashboard',
      component: Overview
    },
    {
      path: 'transactions',
      name: 'Transactions',
      component: Transaction
    },
    {
      path: 'exchanges',
      name: 'Exchanges',
      component: Exchange
    },
    {
      path: 'bots', // refactor this
      name: 'Bots',
      component: Bot, // rethink the user-friendly routing mechanism for strategy as well
      children: [
        {
          path: 'view/:id',
          name: 'Bot Detail',
          component: BotDetail
        }
      ]
    },
    {
      path: 'strategies',
      name: 'Strategies',
      component: Strategy,
      children: [
        {
          path: 'create',
          name: 'Create Strategy',
          component: Strategy
          // component: StrategyCreate
        }
      ]
    },
    {
      path: 'market',
      name: 'Market',
      component: Market
    },
    {
      path: 'orderbook',
      name: 'Order Book',
      component: OrderForm
    }
  ]
}

const routes = [
  woxcut,
  {
    path: '/live',
    name: 'Live Charts',
    component: LiveCharts
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
