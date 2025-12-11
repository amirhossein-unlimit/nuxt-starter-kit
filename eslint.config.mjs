import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import antfu from '@antfu/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

// Use __dirname because tsconfigRootDir must be an absolute directory path,
// Not a file:// URL or a file path (import.meta.resolve returns the wrong value).
const __dirname = dirname(fileURLToPath(import.meta.url));

export default antfu(
  {
    rules: {
      'no-array-constructor': 'error',
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-loop-func': 'error',
      'no-new-func': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-sequences': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-useless-concat': 'error',
      'prefer-spread': 'error',
      'require-await': 'off',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-macros-order': [
        'error',
        {
          defineExposeLast: true,
          order: [
            'defineOptions',
            'defineModel',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ],
        },
      ],
      'vue/define-props-destructuring': ['error', { destructure: 'always' }],
      'vue/html-button-has-type': 'error',
      'vue/no-empty-component-block': 'off',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-required-prop-with-default': ['error', { autofix: false }],
      'vue/no-unused-emit-declarations': 'error',
      'vue/padding-line-between-tags': [
        'error',
        [{ blankLine: 'always', next: '*', prev: '*' }],
      ],
      'vue/prefer-define-options': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/prefer-use-template-ref': 'error',
      'vue/require-prop-comment': 'error',
      'vue/sort-keys': 'off',
      'vue/no-restricted-syntax': [
        'error',
        {
          message: 'Use NuxtLink instead.',
          selector: 'VElement[name=\'a\']',
        },
      ],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/multi-word-component-names': 'off',
    },
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    vue: true,
    stylistic: {
      semi: true,
    },
    formatters: true,
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'ts/dot-notation': [
        'error',
        {
          allowIndexSignaturePropertyAccess: false,
          allowPrivateClassPropertyAccess: false,
          allowProtectedClassPropertyAccess: false,
        },
      ],
      'ts/naming-convention': [
        'error',
        // Default: strictCamelCase for everything unless specified otherwise
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'forbid',
          selector: 'default',
          trailingUnderscore: 'forbid',
        },
        // Imports: Allow PascalCase for components/types, camelCase for everything else
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'import',
        },
        // Variables: camelCase (less strict to allow for prefixes)
        {
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          selector: 'variable',
          trailingUnderscore: 'forbid',
        },
        // Variables that start with boolean prefixes should follow proper format
        {
          filter: {
            match: true,
            regex: '^(is|has|can|should|will|did|was|are|were)[A-Z]',
          },
          format: ['camelCase'],
          selector: 'variable',
        },
        // Functions: Strict camelCase
        {
          format: ['strictCamelCase'],
          selector: 'function',
        },
        // Vue/Nuxt specific: Composables must start with 'use'
        {
          filter: {
            match: true,
            regex: '^use',
          },
          format: ['camelCase'],
          selector: 'function',
        },
        // Function/method names should start with a verb (but not enforced)
        {
          custom: {
            match: true,
            regex:
              '^(get|set|is|has|can|should|will|did|was|are|were|fetch|load|save|delete|remove|add|update|create|build|make|generate|render|handle|process|validate|check|verify|calculate|compute|transform|convert|parse|format|init|setup|cleanup|destroy|toggle|show|hide|open|close|start|stop|begin|end|enable|disable|connect|disconnect|send|receive|emit|trigger|fire|dispatch|execute|run|call|invoke|use|scroll|go|navigate|debounce|throttle|clear|reset|restore|apply|mount|unmount|subscribe|unsubscribe|observe|watch|test|query|find|filter|map|reduce|sort|push|pop|shift|unshift|splice|slice|join|split|replace|match|search|write|read|list|count|sum|average|min|max|group|merge|combine|extract|inject|wrap|unwrap|bind|unbind|attach|detach|focus|blur|hover|click|submit|abort|cancel|retry|wait|delay|pause|resume|play|skip|seek).*',
          },
          format: ['strictCamelCase'],
          selector: ['function', 'method'],
        },
        // Event handlers must start with 'on' or 'handle'
        {
          filter: {
            match: true,
            regex: '^(on|handle)[A-Z]',
          },
          format: ['strictCamelCase'],
          selector: ['function', 'method'],
        },
        // Classes, Interfaces, Types, Enums: Strict PascalCase
        {
          format: ['StrictPascalCase'],
          selector: 'typeLike',
        },
        // Type aliases should be descriptive
        {
          format: ['StrictPascalCase'],
          selector: 'typeAlias',
        },
        // Type parameters must be descriptive or prefixed with T
        {
          filter: {
            match: false,
            regex: '^[A-Z]$',
          },
          format: ['PascalCase'],
          prefix: ['T'],
          selector: 'typeParameter',
        },
        // Single letter type parameters are allowed
        {
          filter: {
            match: true,
            regex: '^[A-Z]$',
          },
          format: null,
          selector: 'typeParameter',
        },
        // Enum members: UPPER_CASE only
        {
          format: ['UPPER_CASE'],
          selector: 'enumMember',
        },
        // Parameters: strictCamelCase, underscore only for unused
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
          selector: 'parameter',
        },
        // Unused parameters MUST have underscore
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'require',
          modifiers: ['unused'],
          selector: 'parameter',
        },
        // Private properties/methods must have underscore prefix
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'require',
          modifiers: ['private'],
          selector: ['property', 'method', 'accessor'],
        },
        // Protected properties/methods must have underscore prefix
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'require',
          modifiers: ['protected'],
          selector: ['property', 'method', 'accessor'],
        },
        // Object literal properties: strictCamelCase
        {
          format: ['strictCamelCase'],
          selector: ['objectLiteralProperty', 'objectLiteralMethod'],
        },
        // Properties that require quotes: no format enforcement
        {
          format: null,
          modifiers: ['requiresQuotes'],
          selector: ['property', 'method'],
        },
        // Properties with special characters: no format enforcement
        {
          filter: {
            match: true,
            regex: '[-_.,:/ @]|[A-Z]{2,}',
          },
          format: null,
          selector: [
            'objectLiteralProperty',
            'objectLiteralMethod',
            'typeProperty',
          ],
        },
        // Destructured variables: keep original names
        {
          format: null,
          modifiers: ['destructured'],
          selector: 'variable',
        },
        // Allow baseURL specifically (common in configs)
        {
          filter: {
            match: true,
            regex: '^(baseURL|baseUrl)$',
          },
          format: null,
          selector: ['objectLiteralProperty', 'typeProperty'],
        },
        // Readonly/const object properties can be UPPER_CASE
        {
          format: ['UPPER_CASE', 'strictCamelCase'],
          modifiers: ['readonly'],
          selector: 'typeProperty',
        },
        // Static readonly class properties should be UPPER_CASE
        {
          format: ['UPPER_CASE'],
          modifiers: ['static', 'readonly'],
          selector: 'property',
        },
        // Allow leading underscore for private-like module variables
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
          modifiers: ['const'],
          selector: 'variable',
        },
        // Allow UPPER_CASE only for constants
        {
          selector: 'variable',
          modifiers: ['const'],
          filter: {
            regex: '^[A-Z_]+$',
            match: true,
          },
          format: ['UPPER_CASE'],
        },
      ],
      'ts/no-floating-promises': 'error',
      'ts/prefer-optional-chain': 'error',
      'ts/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    },
  },
  [
    // ESLint plugin to validate Tailwind CSS classes
    ...tailwind.configs['flat/recommended'],
    {
      settings: {
        tailwindcss: {
          config: `${__dirname}/app/assets/css/tailwind.css`,
        },
      },
    },
  ],
);
