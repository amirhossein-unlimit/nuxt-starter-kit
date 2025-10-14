import type { Site } from '~/types/site';

function useConfig() {
  const config = useState<Site>('site-settings');
  return toValue(config);
}

export default useConfig;
