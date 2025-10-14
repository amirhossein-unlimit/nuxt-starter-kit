// TODO: change fake client routes with correct routes
const clientRoutes = {
  home: '/',
  about: '/aboutus',
  contact: '/contactus',
  search: '/search',

  user: {
    login: '/user/login',
    signup: '/user/signup',
    dashboard: {
      index: '/user/dashboard',
      notifications: '/user/dashboard/notifications',
      profile: '/user/dashboard/profile',
    },
  },

  blog: {
    index: '/blog',
    slug: (slug: string) => `/blog/${slug}`,
  },

  news: {
    index: '/news',

    article: {
      index: '/news/article',
      slug: (slug: string) => `/news/article/${slug}`,
    },

    category: {
      index: '/news/category',
      slug: (slug: string) => `/news/category/${slug}`,
    },

    photo: {
      index: '/news/photo',
      slug: (slug: string) => `/news/photo/${slug}`,
    },

    video: {
      index: '/news/video',
      slug: (slug: string) => `/news/video/${slug}`,
    },
  },
} as const;

// TODO: change fake api routes with correct routes
const createApiRoutes = (baseUrl: string) => ({
  site: {
    config: `${baseUrl}/site/config`,
  },

  user: {
    login: `${baseUrl}/user/login`,
    signup: `${baseUrl}/user/signup`,
    dashboard: {
      notifications: `${baseUrl}/user/dashboard/notifications`,
      profile: `${baseUrl}/user/dashboard/profile`,
    },
  },

  blog: {
    index: `${baseUrl}/blog`,
    bySlug: (slug: string) => `${baseUrl}/blog/${slug}`,
  },

  news: {
    index: `${baseUrl}/news`,

    article: {
      index: `${baseUrl}/news/article`,
      bySlug: (slug: string) => `${baseUrl}/news/article/${slug}`,
    },

    category: {
      index: `${baseUrl}/news/category`,
      bySlug: (slug: string) => `${baseUrl}/news/category/${slug}`,
    },

    photo: {
      index: `${baseUrl}/news/photo`,
      bySlug: (slug: string) => `${baseUrl}/news/photo/${slug}`,
    },

    video: {
      index: `${baseUrl}/news/video`,
      bySlug: (slug: string) => `${baseUrl}/news/video/${slug}`,
    },
  },

  pages: {
    home: `${baseUrl}/page/home`,
    about: `${baseUrl}/page/aboutus`,
    contact: `${baseUrl}/page/contactus`,
    search: `${baseUrl}/page/search`,
  },
});

export { clientRoutes, createApiRoutes };
