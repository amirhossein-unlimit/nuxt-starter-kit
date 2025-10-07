/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-recommended-vue',
      ],
    },
  ],
  rules: {
    'property-no-vendor-prefix': null,
    'selector-id-pattern': [
      '(^[a-z][a-z0-9-]*$)|(^__nuxt$)|(^__next$)',
      {
        message: 'Expected id selector to be kebab-case or framework reserved ids',
      },
    ],
  },
  ignoreFiles: [
    '**/node_modules/**',
    'dist/**',
    'build/**',
    '.nuxt/**',
    '**/*.{js,ts,mjs,mts}',
  ],
}
