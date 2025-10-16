import type { Site } from '~/types/site';
import { site as defaultConfig } from '~/constants/site.config';

export default defineNuxtPlugin({
  name: 'setupConfig',
  enforce: 'pre',
  async setup() {
    const { apiRoutes } = useAppRoutes();

    try {
      const { data: userConfig } = await useFetch<Site>(apiRoutes.site.config, {
        key: 'site-config',
      });

      // If server data exists, merge it with the default config
      if (userConfig.value) {
        updateAppConfig({ site: { ...defaultConfig, ...userConfig.value } });
      }
    } catch (error) {
      console.error(error);
    }
  },
});
