import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    theme: {
      'primary-color': '#0466C8',
    },
  },
  esbuildMinifyIIFE: true,
  define: {
    BASE_URL: 'https://match-ticketing.c2.tracom.dev',
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
      component: './Events',
    },
    {
      name: 'Events',
      path: '/events/:id',
      component: './Events/eventDetails',
      hideInMenu: true,
    },
    {
      name: 'Venues',
      icon: 'HomeOutlined',
      path: '/venues',
      component: './Venues',
    },
    {
      name: 'Venues',
      icon: 'HomeOutlined',
      path: '/venues/:id',
      component: './Venues/venueDetails',
      hideInMenu: true,
    },
    {
      name: 'Promo',
      path: '/promo',
      icon: 'GiftOutlined',
      // component: './Promo',
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: 'BarChartOutlined',
      component: './Reports',
    },
    {
      name: 'Users',
      path: '/settings/users',
      icon: 'UserOutlined',
      component: './Users',
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
