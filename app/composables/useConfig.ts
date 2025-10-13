import type { Site } from '~/types/site';
import { site } from '~/constants/site.config';

function useConfig() {
  const { data: userConfig } = useNuxtData<Partial<Site>>('config');

  return Object.assign(site, userConfig.value);
}

export default useConfig;
