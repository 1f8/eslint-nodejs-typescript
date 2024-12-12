import stylistic from '@stylistic/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx',  '**/*.js',  '**/*.jsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es6,
        ...globals.mocha,
        ...globals.jest,
        ...globals.node
      },
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    ignores: ['node_modules/', 'types/', 'eslint.config.js'],
    rules: {
      'no-console': 'error',
      'prefer-destructuring': ['error', {
        'AssignmentExpression': {
          'array': false,
        }
      }],
      '@stylistic/lines-between-class-members': 'off',
      '@stylistic/object-curly-newline': 'off',
      '@stylistic/implicit-arrow-linebreak': 'off',
      'no-prototype-builtins': 'off',
      // .next doesnt require React in import
      'react/react-in-jsx-scope': 'off',
      // use typescript rather than prop-types
      'react/prop-types': 'off',
      // annoying to declare types for each react function component by default
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // no implicit any
      '@typescript-eslint/no-explicit-any': 'off',
      // Generally styling
      'comma-dangle': ['error', 'never'],
      quotes: ['error', 'single', {allowTemplateLiterals: true}],
      semi: ['error', 'never']
    }
  }
]
