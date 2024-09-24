<script setup>
import DdtwThemableExampleTabs from './examples/DdtwThemableExampleTabs.vue'
import DdtwThemableExampleButton from './examples/DdtwThemableExampleButton.vue'
import DdtwThemableExampleDropdown from './examples/DdtwThemableExampleDropdown.vue'
</script>

# Vue Themable Configuration - Flowbite

You can use this wrapper for styling components with no color prop(like tabs, dropdown etc.)

:::warning
WIP, Do not use it in production
:::

## Tabs

<ddtw-themable-example-tabs />
```vue
<template>
  <ddtw-themable :theme="theme">
      <ddtw-tabs :variant="variant">
        ...
      </ddtw-tabs>
  </ddtw-themable>
</template>

<script setup>
import { DdtwTabs, DdtwTab, DdtwThemable } from '@datadayrepos/ddtw-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
const variant = 'default' // see tabs docs
</script>
```

### variant: pills
---
<ddtw-themable-example-tabs tabs-variant="pills" />
---

### variant: underline
---
<ddtw-themable-example-tabs tabs-variant="underline" />
---

## Dropdown

<ddtw-themable-example-dropdown />
```vue
<template>
  <ddtw-themable :theme="theme">
      <ddtw-dropdown>
        ...
      </ddtw-dropdown>
  </ddtw-themable>
</template>

<script setup>
import { DdtwDropdown, DdtwThemable } from '@datadayrepos/ddtw-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
</script>
```

## Button

<ddtw-themable-example-button />
```vue
<template>
  <ddtw-themable :theme="theme">
      <ddtw-button>
        ...
      </ddtw-button>
  </ddtw-themable>
</template>

<script setup>
import { DdtwButton, DdtwThemable } from '@datadayrepos/ddtw-vue'
const theme = 'blue' // 'blue', 'green', 'red', 'pink', 'purple'
</script>
```
