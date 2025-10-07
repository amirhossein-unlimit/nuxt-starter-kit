<script lang="ts" setup></script>

<template>
  <div
    dir="rtl"
    class="mx-auto flex min-h-screen max-w-fit flex-col items-center justify-center gap-6 pb-16 font-iran-sans-x"
  >
    <NuxtImg src="/logos/nuxt-green-white.svg" width="250" />

    <h1 class="text-xl font-bold">
      پروژه nuxt starter kit آماده استفاده است 😃
    </h1>

    <ul class="fc-start gap-2">
      <li class="fr-start/start gap-2">
        <button
          class="bg-primary50 rounded-lg border border-primary p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-image" class="text-primary" />
        </button>

        آیکون ها در آدرس <span dir="ltr">/app/assets/icons</span> قرار دارند.
      </li>

      <li class="fr-start/start gap-2">
        <button
          class="rounded-lg border border-primary bg-primary/5 p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-type" class="text-primary" />
        </button>

        فونت ها در آدرس
        <span dir="ltr">/public/fonts/IRANSansXFaNum/woff2</span> قرار گرفته
        اند.
      </li>
    </ul>
  </div>
</template>
