import type { Site } from '~/types/site';
// Default (fallback) site settings used if the API request fails
import { site } from '~/constants/site.config';

export default defineNuxtPlugin({
  name: 'setupConfig',
  enforce: 'pre',
  async setup() {
    const { apiRoutes } = useAppRoutes();

    // Create a global reactive state to store site settings
    const settings = useState('site-settings', () => site);

    try {
      const { data } = await useFetch<Site>(apiRoutes.site.config);

      // If server data exists, merge it with the default settings
      if (data.value) {
        settings.value = { ...site, ...data.value };
      }
    } catch (error) {
      console.error(error);
    }
  },
});
