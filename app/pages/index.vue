<script lang="ts" setup></script>

<template>
  <div
    dir="rtl"
    class="container mx-auto fc-center/center min-h-screen gap-6 px-4 font-iran-sans-x md:frr-center/center"
  >
    <div class="fc-center/center gap-2.5">
      <NuxtImg src="/logos/nuxt-green-white.svg" width="250" />

      <h1 class="w-full text-center text-xl font-bold text-wrap">
        پروژه nuxt starter kit آماده استفاده است 😃
      </h1>
    </div>

    <ul class="fc-start gap-4">
      <li
        class="fr-start/start gap-2 rounded-lg border border-primary bg-primary/5 p-2"
      >
        <button
          class="bg-primary50 rounded-lg border border-primary p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-image" class="text-primary" />
        </button>

        <p>
          آیکون ها در آدرس <span dir="ltr">/app/assets/icons</span> قرار دارند.
        </p>
      </li>

      <li
        class="fr-start/start gap-2 rounded-lg border border-primary bg-primary/5 p-2"
      >
        <button
          class="rounded-lg border border-primary bg-primary/5 p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-type" class="text-primary" />
        </button>

        <p>
          فونت ها در پوشه public قرار دارند تا توسط ماژول
          <span dir="ltr">@nuxt/fonts</span> شناسایی شوند.
        </p>
      </li>

      <li
        class="fr-start/start gap-2 rounded-lg border border-primary bg-primary/5 p-2"
      >
        <button
          class="bg-primary50 rounded-lg border border-primary p-1.5"
          type="button"
        >
          <NuxtIcon name="i-custom-image" class="text-primary" />
        </button>

        <p>
          تنظیمات ثابت پروژه در آدرس <span dir="ltr">/app/constants</span> وجود
          دارد.
        </p>
      </li>
    </ul>
  </div>
</template>
