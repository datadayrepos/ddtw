<script setup>
import DdtwInputExample from './input/examples/DdtwInputExample.vue'
import DdtwInputExampleSize from './input/examples/DdtwInputExampleSize.vue'
import DdtwInputExampleDisabled from './input/examples/DdtwInputExampleDisabled.vue'
import DdtwInputExampleHelper from './input/examples/DdtwInputExampleHelper.vue'
import DdtwInputExamplePrefix from './input/examples/DdtwInputExamplePrefix.vue'
import DdtwInputExampleSuffix from './input/examples/DdtwInputExampleSuffix.vue'
import DdtwInputExampleRequired from './input/examples/DdtwInputExampleRequired.vue'
import DdtwInputExampleValidation from './input/examples/DdtwInputExampleValidation.vue'
</script>

# Vue Input - Flowbite

#### Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types

---

:::tip
Original reference: [https://flowbite.com/docs/forms/input-field/](https://flowbite.com/docs/forms/input-field/)
:::

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Default

<ddtw-input-example />
```vue
<template>
  <ddtw-input
    v-model="name"
    placeholder="enter your first name"
    label="First name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '@datadayrepos/ddtw-vue'

const name = ref('')
</script>
```

## Size

<ddtw-input-example-size />
```vue
<template>
  <ddtw-input v-model="name" label="Small" placeholder="enter your name" size="sm" />
  <ddtw-input v-model="name" label="Medium" placeholder="enter your name" size="md" />
  <ddtw-input v-model="name" label="Large" placeholder="enter your name" size="lg" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '@datadayrepos/ddtw-vue'

const name = ref('')
</script>
```

## Disabled

<ddtw-input-example-disabled />
```vue
<template>
  <ddtw-input
    v-model="name"
    disabled
    label="First name"
    placeholder="enter your first name"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '@datadayrepos/ddtw-vue'

const name = ref('')
</script>
```

## Required

<ddtw-input-example-required />
```vue
<template>
  <ddtw-input
    v-model="name"
    label="First name"
    placeholder="enter your first name"
    required
  />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwInput } from '@datadayrepos/ddtw-vue'

const name = ref('')
</script>
```

## Slot - Helper

<ddtw-input-example-helper />
```vue
<template>
  <ddtw-input
    v-model="name"
    label="First name"
    placeholder="enter your first name"
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
import { DdtwA, DdtwInput } from '@datadayrepos/ddtw-vue'

const name = ref('')
</script>
```

## Slot - Prefix

<ddtw-input-example-prefix />
```vue
<template>
  <ddtw-input v-model="name" label="Search" placeholder="enter your search query">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
  </ddtw-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '@datadayrepos/ddtw-vue'

const name = ref('')
</script>
```

## Slot - Suffix
<ddtw-input-example-suffix />
```vue
<template>
  <ddtw-input
    v-model="query"
    label="Search"
    placeholder="enter your search query"
    size="lg"
  >
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
    <template #suffix>
      <ddtw-button>Search</ddtw-button>
    </template>
  </ddtw-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwButton, DdtwInput } from '@datadayrepos/ddtw-vue'

const query = ref('')
</script>
```

## Slot - Validation

- Set validation status via `validationStatus` prop, which accepts `'success'` or `'error'`.
- Add validation message via `validationMessage` slot.

<ddtw-input-example-validation />
```vue
<template>
  <ddtw-input
    v-model="email"
    required
    placeholder="enter your email address"
    label="Email"
    validation-status="success"
  />
  <hr class="mt-4 border-0">
  <ddtw-input
    v-model="email"
    required
    placeholder="enter your email address"
    label="Email"
    validation-status="error"
  >
    <template #validationMessage>
      Please enter a valid email address
    </template>
  </ddtw-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '@datadayrepos/ddtw-vue'

const email = ref('')
</script>
```
