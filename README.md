# ESlint TYPESCRIPT Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/@1f8/eslint-config-typescript-nodejs)

### Instructions

This package needs Node.js (^18.18.0, ^20.9.0, or >=21.1.0)
Uses Eslint ^9.16.0

```
yarn add -D @1f8/eslint-config-typescript-nodejs
npx install-peerdeps --dev @1f8/eslint-config-typescript-nodejs --yarn
cp node_modules/@1f8/eslint-config-typescript-nodejs/next.eslintrc.js eslint.config.js
```

You can add these scripts in to lint

```json
"scripts": {
  "lint": "eslint --ignore-pattern .gitignore",
  "lint:fix": "eslint --ignore-pattern .gitignore --fix",
}
```

You can overwrite rules to fit your needs by changing the eslint.config.js
```js
import f8eslintConfigTypescriptNodeJS from '@1f8/eslint-config-typescript-nodejs'

export default [
  f8eslintConfigTypescriptNodeJS,
  {
    rules: {
      'no-console': 'off',
    }
  }
]
```
