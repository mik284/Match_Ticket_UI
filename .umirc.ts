import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    theme: {
      'primary-color': '#0466C8',
    },
  },
  esbuildMinifyIIFE: true,
  define: {
    BASE_URL: 'https://api.property.reliatech.co.ke',
    // BASE_URL: 'http://localhost:5000',
    'process.env.COMMIT_HASH': process.env.COMMIT_HASH || '',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  targets: {
    chrome: 80,
    firefox: 75,
    safari: 13,
    ios: 13,
    node: 12,
  },
  locale: {
    default: 'en-US',
    antd: true,
    title: false,
  },
  layout: {
    title: 'Ticket App',
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      name: 'Login',
      path: '/login',
      layout: false,
      component: '@/pages/Login',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'DashboardOutlined',
      component: './Dashboard',
    },
    {
      name: 'Events',
      icon: 'CalendarOutlined',
      path: '/events',
      // component: './Events',
    },
    {
      name: 'Venues',
      icon: 'HomeOutlined',
      path: '/venues',
      // component: './Venues',
      routes: [
        {
          name: 'All Venues',
          path: '/venues',
          // component: './Venues',
        },
    ],
    },
    {
      name: 'Seats Layouts',
      icon: 'LayoutOutlined',
      path: '/seats-layouts',
      // component: './SeatsLayouts',
    },

    {
      name: 'Tickets',
      icon: 'TagOutlined',
      path: '/tickets',
      // component: './Tickets',
      routes: [
        {
          name: 'All Tickets',
          path: '/tickets/all',
          // component: './Tickets',
        },
        {
          name: 'Ticket History',
          path: '/tickets/:id/history',
          // component: './TicketHistory',
        },
        {
          name: 'Ticket Sales',
          path: '/tickets/:id/sales',
          // component: './TicketSales',
        },
        {
          name: 'Ticket Reports',
          path: '/tickets/:id/reports',
          // component: './TicketReports',
        },
      ],
    },
    {
      name: 'Promo',
      path: '/promo',
      icon: 'GiftOutlined',
      // component: './Promo',
    },
    {
      name: 'Sales',
      path: '/sales',
      icon: 'DollarOutlined',
      component: './Sales',
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: 'BarChartOutlined',
      component: './Reports',
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: 'SettingOutlined',
      // component: './Settings',
      routes: [
        {
          name: 'Users',
          path: '/settings/users',
          icon: 'UserOutlined',
          component: './Users',
        },]
    },
    {
      name: 'Account',
      path: '/delete-account',
      icon: 'UserOutlined',
      layout: false,
      component: './AccountDeletion',
    },
    // {
    //   name: 'Lock Screen',
    //   path: '/lock-screen',
    //   layout: false,
    //   component: './LockScreen',
    // },
    {
      name: 'Terms',
      path: '/terms-privacy',
      layout: false,
      component: './Terms',
    },
    {
      path: '*',
      component: './404',
    },
  ],
  npmClient: 'yarn',
  tailwindcss: {},
});
