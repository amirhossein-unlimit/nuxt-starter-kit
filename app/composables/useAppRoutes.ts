import { clientRoutes, createApiRoutes } from '~/constants/routes.config';

const useAppRoutes = () => {
  const apiPrefix: string = '/api/v1';
  const base = useRuntimeConfig().public.apiUrl;
  const apiRoutes = createApiRoutes(base + apiPrefix);
  return { apiRoutes, clientRoutes };
};

export default useAppRoutes;
