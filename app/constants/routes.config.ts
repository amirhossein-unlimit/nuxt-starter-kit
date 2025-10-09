// TODO: change fake client routes with correct routes
const client = {
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

function apiPath(path: string) {
  const apiPrefix = '/api/v1';
  const base: string = useRuntimeConfig().public.apiUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return base + apiPrefix + cleanPath;
}

// TODO: change fake api routes with correct routes
const api = {
  user: {
    login: apiPath('/user/login'),
    signup: apiPath('/user/signup'),
    dashboard: {
      notifications: apiPath('/user/dashboard/notifications'),
      profile: apiPath('/user/dashboard/profile'),
    },
  },

  blog: {
    index: apiPath('/blog'),
    bySlug: (slug: string) => apiPath(`/blog/${slug}`),
  },

  news: {
    index: apiPath('/news'),

    article: {
      index: apiPath('/news/article'),
      bySlug: (slug: string) => apiPath(`/news/article/${slug}`),
    },

    category: {
      index: apiPath('/news/category'),
      bySlug: (slug: string) => apiPath(`/news/category/${slug}`),
    },

    photo: {
      index: apiPath('/news/photo'),
      bySlug: (slug: string) => apiPath(`/news/photo/${slug}`),
    },

    video: {
      index: apiPath('/news/video'),
      bySlug: (slug: string) => apiPath(`/news/video/${slug}`),
    },
  },

  pages: {
    home: apiPath('/page/home'),
    about: apiPath('/page/aboutus'),
    contact: apiPath('/page/contactus'),
    search: apiPath('/page/search'),
  },
} as const;

export default {
  client,
  api,
};
