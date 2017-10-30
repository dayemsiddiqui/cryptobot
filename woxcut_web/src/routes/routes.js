import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Exchange from 'src/components/Dashboard/Views/Exchange.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'transactions',
        name: 'transactions',
        component: Overview
      },
      {
        path: 'exchanges',
        name: 'exchanges',
        component: Exchange
      },
      {
        path: 'bots',
        name: 'bots',
        component: Overview
      },
      {
        path: 'strategies',
        name: 'strategies',
        component: Overview
      },
      {
        path: 'buysell',
        name: 'Buy and Sell',
        component: Overview
      },
      {
        path: 'livemarket',
        name: 'livemarket',
        component: Overview
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
