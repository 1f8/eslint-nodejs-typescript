module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended'                          ,
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'       ,
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint'
  ],
  ignorePatterns: ['node_modules/', 'types/'],
  rules: {
    // JS
    // 'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-console': 'error',
    'prefer-destructuring': ['error', {
      'AssignmentExpression': {
        'array': false,
      }
    }],
    'lines-between-class-members': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
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
    'comma-dangle': [
      0, 'always-multiline',
    ],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never']
  }
};
