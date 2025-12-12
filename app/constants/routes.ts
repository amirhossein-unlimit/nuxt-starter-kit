// TODO: change fake client routes with correct routes
const CLIENT = {
  HOME: '/',
  ABOUT: '/aboutus',
  CONTACT: '/contactus',
  SEARCH: '/search',

  USER: {
    LOGIN: '/user/login',
    SIGNUP: '/user/signup',
    DASHBOARD: {
      INDEX: '/user/dashboard',
      NOTIFICATIONS: '/user/dashboard/notifications',
      PROFILE: '/user/dashboard/profile',
    },
  },

  BLOG: {
    INDEX: '/blog',
    SLUG: (slug: string) => `/blog/${slug}`,
  },

  NEWS: {
    INDEX: '/news',

    ARTICLE: {
      INDEX: '/news/article',
      SLUG: (slug: string) => `/news/article/${slug}`,
    },

    CATEGORY: {
      INDEX: '/news/category',
      SLUG: (slug: string) => `/news/category/${slug}`,
    },

    PHOTO: {
      INDEX: '/news/photo',
      SLUG: (slug: string) => `/news/photo/${slug}`,
    },

    VIDEO: {
      INDEX: '/news/video',
      SLUG: (slug: string) => `/news/video/${slug}`,
    },
  },
} as const;

// TODO: change fake api routes with correct routes
const API = {
  SITE: {
    // Optional endpoint – falls the config isn't fetched, default settings will be used.
    CONFIG: `/site/config`,
  },

  USER: {
    LOGIN: `/user/login`,
    SIGNUP: `/user/signup`,
    DASHBOARD: {
      NOTIFICATIONS: `/user/dashboard/notifications`,
      PROFILE: `/user/dashboard/profile`,
    },
  },

  BLOG: {
    INDEX: `/blog`,
    BY_SLUG: (slug: string) => `/blog/${slug}`,
  },

  NEWS: {
    INDEX: `/news`,

    ARTICLE: {
      INDEX: `/news/article`,
      BY_SLUG: (slug: string) => `/news/article/${slug}`,
    },

    CATEGORY: {
      INDEX: `/news/category`,
      BY_SLUG: (slug: string) => `/news/category/${slug}`,
    },

    PHOTO: {
      INDEX: `/news/photo`,
      BY_SLUG: (slug: string) => `/news/photo/${slug}`,
    },

    VIDEO: {
      INDEX: `/news/video`,
      BY_SLUG: (slug: string) => `/news/video/${slug}`,
    },
  },

  PAGES: {
    HOME: `/page/home`,
    ABOUT: `/page/aboutus`,
    CONTACT: `/page/contactus`,
    SEARCH: `/page/search`,
  },
} as const;

export { API, CLIENT };
