<script lang="ts" setup>
const { logo } = useAppConfig().site;
</script>

<template>
  <div
    class="container mx-auto fc-center/center min-h-screen gap-6 px-4 font-iran-sans-x md:fr-center/center"
  >
    <div class="fc-center/center gap-2.5">
      <NuxtImg :src="logo" width="250" />

      <h1 class="w-full text-center text-xl font-bold text-wrap">
        The nuxt-starter-kit project is ready to use 😃
      </h1>
    </div>

    <ul class="fc-start gap-4">
      <li
        class="fr-start/center gap-2 rounded-lg border border-primary bg-primary/5 p-2"
      >
        <button
          class="bg-primary50 rounded-lg border border-primary p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-image" class="text-primary" />
        </button>

        <p>The icons are located at /app/assets/icons.</p>
      </li>

      <li
        class="fr-start/center gap-2 rounded-lg border border-primary bg-primary/5 p-2"
      >
        <button
          class="rounded-lg border border-primary bg-primary/5 p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-type" class="text-primary" />
        </button>

        <p>
          The fonts are placed in the public directory to be recognized by the
          @nuxt/fonts module.
        </p>
      </li>

      <li
        class="fr-start/center gap-2 rounded-lg border border-primary bg-primary/5 p-2"
      >
        <button
          class="bg-primary50 rounded-lg border border-primary p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-image" class="text-primary" />
        </button>

        <p>
          The project’s constant configurations are located at /app/constants.
        </p>
      </li>
    </ul>
  </div>
</template>
