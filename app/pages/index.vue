<script lang="ts" setup>
const { logo } = useAppConfig().site;
</script>

<template>
  <div class="container mx-auto fc-center/center min-h-screen gap-6 px-4 font-arad md:fr-center/center">
    <div class="fc-center/center gap-2.5">
      <NuxtImg width="250" :src="logo" alt="nuxt logo" />

      <h1 class="w-full text-center text-xl font-bold text-wrap text-gray-300">
        The nuxt-starter-kit project is ready to use 😃
      </h1>
    </div>

    <ul class="fc-start gap-4">
      <li class="fr-start/center gap-2 rounded-lg border border-primary bg-primary/5 p-2">
        <button class="p-1" type="button">
          <NuxtIcon name="i-custom-image" class="fill-transparent text-white" :size="24" />
        </button>

        <p class="text-gray-300">
          The icons are located at /app/assets/icons.
        </p>
      </li>

      <li class="fr-start/center gap-2 rounded-lg border border-primary bg-primary/5 p-2">
        <button class="p-1" type="button">
          <NuxtIcon name="i-custom-type" class="fill-transparent text-white" :size="24" />
        </button>

        <p class="text-gray-300">
          The fonts are placed in the public directory to be recognized by the
          @nuxt/fonts module.
        </p>
      </li>

      <li class="fr-start/center gap-2 rounded-lg border border-primary bg-primary/5 p-2">
        <button class="p-1" type="button">
          <NuxtIcon name="i-custom-settings" class="fill-transparent text-white" :size="24" />
        </button>

        <p class="text-gray-300">
          The project’s constant configurations are located at /app/constants.
        </p>
      </li>

      <li class="fr-start/center rounded-lg border border-primary bg-primary/5 p-2">
        <p class="text-gray-300">
          You can use the api.ts plugin in the project to send your requests.
        </p>
      </li>
    </ul>
  </div>
</template>

<style>
@reference "~/assets/css/tailwind.css";

body {
  @apply bg-gray-800;
}
</style>
