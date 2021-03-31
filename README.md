# ESlint TYPESCRIPT Setup for 1F8

Helps you with styling your code.
Don't believe there's any correct way, but this way fits our style.

[NPM](https://www.npmjs.com/package/@1f8/eslint-config-typescript-nodejs)

### Instructions

```
yarn add -D @1f8/eslint-config-typescript-nodejs
npx install-peerdeps --dev @1f8/eslint-config-typescript-nodejs --yarn
cp node_modules/@1f8/eslint-config-typescript-nodejs/next.eslintrc.js .eslintrc.js
```

You can add these scripts in to lint

```json
"scripts": {
  "lint": "eslint --ignore-path .gitignore --ext ts .",
  "lint:fix": "eslint --ignore-path .gitignore --ext ts . --fix",
}
```

You can overwrite rules to fit your needs by changing the eslintfile
```json
{
  "extends": [
    "@1f8/eslint-config-typescript-nodejs"
  ],
  "rules": {
    "no-console": false,
  }
}
```
