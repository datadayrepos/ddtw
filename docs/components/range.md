<script setup>
import DdtwRangeExample from './range/examples/DdtwRangeExample.vue'
import DdtwRangeExampleDisabled from './range/examples/DdtwRangeExampleDisabled.vue'
import DdtwRangeExampleMinMax from './range/examples/DdtwRangeExampleMinMax.vue'
import DdtwRangeExampleSize from './range/examples/DdtwRangeExampleSize.vue'
import DdtwRangeExampleSteps from './range/examples/DdtwRangeExampleSteps.vue'
</script>

# Vue Toggle Range - Flowbite
#### Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options

---

:::tip
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/range/)
:::

## Default

<ddtw-range-example />
```vue
<template>
  <ddtw-range v-model="value" />
  <pre>Current value: {{ value }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRange } from '@datadayrepos/ddtw-vue'

const value = ref(10)
</script>
```

## Disabled state

<ddtw-range-example-disabled />
```vue
<template>
  <ddtw-range v-model="value" disabled label="Disabled range" />
</template>
```

## Min and Max

<ddtw-range-example-min-max />
```vue
<template>
  <ddtw-range v-model="value" :max="15" :min="5" label="Min-max range" />
</template>
```

## Steps

<ddtw-range-example-steps />
```vue
<template>
  <ddtw-range v-model="value" :steps="5" label="Steps range" />
</template>
```

## Sizes

<ddtw-range-example-size />
```vue
<template>
  <ddtw-range v-model="value1" label="Small range" size="sm" />
  <ddtw-range v-model="value2" label="Medium range" size="md" />
  <ddtw-range v-model="value3" label="Large range" size="lg" />
</template>
```
