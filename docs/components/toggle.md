<script setup>
  import DdtwToggleExample from './toggle/examples/DdtwToggleExample.vue'
  import DdtwToggleExampleChecked from './toggle/examples/DdtwToggleExampleChecked.vue'
  import DdtwToggleExampleColors from './toggle/examples/DdtwToggleExampleColors.vue'
  import DdtwToggleExampleDisabled from './toggle/examples/DdtwToggleExampleDisabled.vue'
  import DdtwToggleExampleSize from './toggle/examples/DdtwToggleExampleSize.vue'
  import DdtwToggleExampleOrder from './toggle/examples/DdtwToggleExampleOrder.vue'
</script>

# Vue Toggle - Flowbite

#### Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/toggle/](https://flowbite.com/docs/forms/toggle/)
:::

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Default toggle

<ddtw-toggle-example />
```vue
<template>
  <ddtw-toggle v-model="toggle" label="Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwToggle } from '@datadayrepos/ddtw-vue'

const toggle = ref(false)
</script>
```

## Checked toggle

<ddtw-toggle-example-checked />
```vue
<template>
  <ddtw-toggle v-model="toggle" label="Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwToggle } from '@datadayrepos/ddtw-vue'

const toggle = ref(true)
</script>
```

## Disabled toggle

<ddtw-toggle-example-disabled />
```vue
<template>
  <ddtw-toggle v-model="toggle" disabled label="Can't Toggle me" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwToggle } from 'flowbite'

const toggle = ref(false)
</script>
```

## Colors

<ddtw-toggle-example-colors />
```vue
<template>
  <ddtw-toggle label="Red" color="red" />
  <ddtw-toggle label="Green" color="green" />
  <ddtw-toggle label="Purple" color="purple" />
  <ddtw-toggle label="Yellow" color="yellow" />
  <ddtw-toggle label="Teal" color="teal" />
  <ddtw-toggle label="Orange" color="orange" />
</template>
```

## Size

<ddtw-toggle-example-size />
```vue
<template>
  <ddtw-toggle label="Small" size="sm" />
  <ddtw-toggle label="Medium" size="md" />
  <ddtw-toggle label="Large" size="lg" />
</template>

<script setup>
import { DdtwToggle } from '@datadayrepos/ddtw-vue'
</script>
```

## Label position

<ddtw-toggle-example-order />
```vue
<template>
  <ddtw-toggle label="Toggle me" />
  <ddtw-toggle label="Toggle me" reverse />
</template>

<script setup>
import { DdtwToggle } from '@datadayrepos/ddtw-vue'
</script>
```
