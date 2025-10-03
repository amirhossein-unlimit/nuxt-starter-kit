/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
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
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['theme', 'utility'],
    }],
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
