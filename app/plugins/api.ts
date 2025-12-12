export default defineNuxtPlugin(() => {
  const { apiUrl, apiSuffix } = useRuntimeConfig().public;
  const baseUrl = typeof apiSuffix === 'string' ? apiUrl + apiSuffix : apiUrl;
  const api = $fetch.create({
    baseURL: baseUrl,
  });

  return {
    provide: {
      api,
    },
  };
});
