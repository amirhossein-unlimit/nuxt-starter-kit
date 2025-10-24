/** @type {import("stylelint").Config} */

export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue', '@culur/config-stylelint/tailwind4'],
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
};
