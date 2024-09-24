# Ddtw Vue - Quickstart

Get started with Flowbite by including it into your project using NPM

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

## Require via NPM

Make sure that you have [Node.js](https://nodejs.org/en/) and [Tailwind CSS](https://tailwindcss.com/) installed.

1. Install `flowbite` and `@datadayrepos/ddtw-vue` as a dependency using NPM by running the following command:

```bash
npm i flowbite @datadayrepos/ddtw-vue
```

2. Require Flowbite as a plugin inside the tailwind.config.js and add @datadayrepos/ddtw-vue dist folder to tailwind content:

```javascript
module.exports = {
  content: [
    'node_modules/@datadayrepos/ddtw-vue/**/*.{js,mjs,cjs,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}' // only is using JS components
  ],
  plugins: [
    require('flowbite/plugin')// only is using JS components
  ],
  theme: {}
}
```

3. Import Flowbite Vue styles:
```javascript
// in your `main.js` file
// eslint-disable-next-line antfu/no-import-node-modules-by-path, antfu/no-import-dist
import '../node_modules/@datadayrepos/ddtw-vue/dist/index.css' // only is using JS components
```
```css
/* or in your `app.css` file */
@import '/node_modules/@datadayrepos/ddtw-vue/dist/index.css';
```

4. Now you can use `@datadayrepos/ddtw-vue` anywhere in your project and build awesome interfaces:
```vue
<template>
  <DdtwDropdown text="Click me" placement="top">
    <DdtwListGroup>
      <DdtwListGroupItem>Item #1</DdtwListGroupItem>
      <DdtwListGroupItem>Item #2</DdtwListGroupItem>
      <DdtwListGroupItem>Item #3</DdtwListGroupItem>
    </DdtwListGroup>
  </DdtwDropdown>
</template>

<script setup>
import { DdtwDropdown, DdtwListGroup, DdtwListGroupItem } from '@datadayrepos/ddtw-vue'
</script>
```

> Make sure you have tailwind css imported. https://tailwindcss.com/docs/guides/vite

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
