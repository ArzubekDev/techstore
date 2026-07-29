export const ROUTE = {
  home: '/',

  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },

  profile: {
    root: '/profile',
    settings: '/settings',
    orders: '/orders',
    myStore: '/my-store',
    notifications: '/notifications',
    orderDetail: (id: string | number) => `/orders/${id}`,
  },

  catalog: {
    root: '/catalog',
    category: (slug: string) => `/catalog/${slug}`,
    product: (slug: string) => `/catalog/product/${slug}`,
  },

  cart: '/cart',
  checkout: '/checkout',
} as const;
