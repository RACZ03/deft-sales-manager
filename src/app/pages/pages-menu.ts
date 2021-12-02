import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Sales',
    icon: 'shopping-bag-outline',
    link: '/pages/sales',
  },
  {
    title: 'Shopping',
    icon: 'shopping-cart-outline',
    link: '/pages/shopping',
  },
  {
    title: 'Products',
    icon: 'keypad-outline',
    link: '/pages/products',
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Administration',
    icon: 'layout-outline',
    children: [
      {
        title: 'Box',
        icon: 'monitor-outline',
        link: '/pages/admin/box',
      },
      {
        title: 'Categories',
        icon: 'layers-outline',
        link: '/pages/admin/categories',
      },
      {
        title: 'Supplier',
        icon: 'car-outline',
        link: '/pages/admin/supplier',
      },
      {
        title: 'Users',
        icon: 'person-outline',
        link: '/pages/admin/users',
      },
      {
        title: 'Customers',
        icon: 'people-outline',
        link: '/pages/admin/customers',
      },
    ],
  },
  {
    title: 'Monitoring',
    icon: 'bar-chart-outline',
    link: '/pages/monitoring',
  },
  {
    title: 'Returns',
    icon: 'archive-outline',
    link: '/pages/returns',
  },
  {
    title: 'Kardex',
    icon: 'book-open-outline',
    link: '/pages/kardex',
  },
  {
    title: 'Reports',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Box',
        icon: 'monitor-outline',
        link: '/pages/reports',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
