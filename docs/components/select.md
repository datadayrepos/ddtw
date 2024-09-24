<script setup>
import DdtwSelectExample from './select/examples/DdtwSelectExample.vue'
import DdtwSelectExampleDisabled from './select/examples/DdtwSelectExampleDisabled.vue'
import DdtwSelectExampleHelper from './select/examples/DdtwSelectExampleHelper.vue'
import DdtwSelectExampleSize from './select/examples/DdtwSelectExampleSize.vue'
import DdtwSelectExampleUnderlined from './select/examples/DdtwSelectExampleUnderlined.vue'
import DdtwSelectExampleValidation from './select/examples/DdtwSelectExampleValidation.vue'
</script>

# Vue Select - Flowbite

#### Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants

---

:::tip
Original reference: [https://flowbite.com/docs/forms/select/](https://flowbite.com/docs/forms/select/)
:::

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Default

<ddtw-select-example />
```vue
<template>
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
  />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwSelect } from '@datadayrepos/ddtw-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Disabled

<ddtw-select-example-disabled />
```vue
<template>
  <ddtw-select
    v-model="selected"
    :options="countries"
    disabled
    label="Select a country"
    placeholder="You can't select"
  />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwSelect } from '@datadayrepos/ddtw-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Underlined

<ddtw-select-example-underlined />
```vue
<template>
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    underline
  />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwSelect } from '@datadayrepos/ddtw-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Size

<ddtw-select-example-size />
```vue
<template>
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    size="sm"
  />
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    size="md"
  />
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    size="lg"
  />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwSelect } from '@datadayrepos/ddtw-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Slot - Helper

<ddtw-select-example-helper />
```vue
<template>
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
  >
    <template #helper>
      We'll never share your details. Read our
      <ddtw-a href="#" color="text-blue-600 dark:text-blue-500">
        Privacy Policy
      </ddtw-a>.
    </template>
  </ddtw-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwA, DdtwSelect } from '@datadayrepos/ddtw-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```

## Slot - Validation

- Set validation status via `validationStatus` prop, which accepts `'success'` or `'error'`.
- Add validation message via `validationMessage` slot.

<ddtw-select-example-validation />
```vue
<template>
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    validation-status="success"
  />
  <hr class="mt-4 border-0">
  <ddtw-select
    v-model="selected"
    :options="countries"
    label="Select a country"
    validation-status="error"
  >
    <template #validationMessage>
      Please select a country
    </template>
  </ddtw-select>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwSelect } from '@datadayrepos/ddtw-vue'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>
```
