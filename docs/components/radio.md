<script setup>
import DdtwRadioExample from './radio/examples/DdtwRadioExample.vue'
import DdtwRadioExampleBordered from './radio/examples/DdtwRadioExampleBordered.vue'
import DdtwRadioExampleDisabled from './radio/examples/DdtwRadioExampleDisabled.vue'
import DdtwRadioExampleInline from './radio/examples/DdtwRadioExampleInline.vue'
import DdtwRadioExampleLink from './radio/examples/DdtwRadioExampleLink.vue'
import DdtwRadioExampleList from './radio/examples/DdtwRadioExampleList.vue'
import DdtwRadioExampleListHorizontal from './radio/examples/DdtwRadioExampleListHorizontal.vue'
</script>

# Vue Toggle Radio - Flowbite

#### Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors

---

:::tip
Original reference: [https://flowbite.com/docs/forms/range/](https://flowbite.com/docs/forms/radio/)
:::

## Radio examples

<ddtw-radio-example />
```vue
<template>
  <ddtw-radio v-model="picked" name="radio" label="Radio 1" value="one" />
  <ddtw-radio v-model="picked" name="radio" label="Radio 2" value="two" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref()
</script>
```

## Disabled Radio

<ddtw-radio-example-disabled />
```vue
<template>
  <ddtw-radio
    v-model="picked"
    disabled
    label="Disabled radio"
    name="radio-disabled"
    value="one"
  />
  <ddtw-radio
    v-model="picked"
    disabled
    label="Disabled checked"
    name="radio-disabled"
    value="two"
  />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref('two')
</script>
```

## Radio list group

<ddtw-radio-example-list />
```vue
<template>
  <ddtw-p class="mb-2">
    Technology {{ picked }}
  </ddtw-p>

  <ddtw-list-group>
    <ddtw-list-group-item>
      <ddtw-radio
        v-model="picked"
        label="Svelte"
        name="list-radio"
        value="Svelte"
      />
    </ddtw-list-group-item>
    <ddtw-list-group-item>
      <ddtw-radio
        v-model="picked"
        label="Vue JS"
        name="list-radio"
        value="Vue JS"
      />
    </ddtw-list-group-item>
    <ddtw-list-group-item>
      <ddtw-radio
        v-model="picked"
        label="React"
        name="list-radio"
        value="React"
      />
    </ddtw-list-group-item>
    <ddtw-list-group-item>
      <ddtw-radio
        v-model="picked"
        label="Angular"
        name="list-radio"
        value="Angular"
      />
    </ddtw-list-group-item>
  </ddtw-list-group>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwListGroup, DdtwListGroupItem, DdtwP, DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref('Vue JS')
</script>
```

## Horizontal list group

<ddtw-radio-example-list-horizontal />
```vue
<template>
  <ddtw-p class="mb-2">
    Technology {{ picked }}
  </ddtw-p>
  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <ddtw-radio
        v-model="picked"
        label="Svelte"
        name="radio-horizontal"
        value="Svelte"
      />
    </li>
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <ddtw-radio
        v-model="picked"
        label="Vue JS"
        name="radio-horizontal"
        value="Vue JS"
      />
    </li>
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <ddtw-radio
        v-model="picked"
        label="React"
        name="radio-horizontal"
        value="React"
      />
    </li>
    <li class="w-full !m-0 pl-3 flex border-gray-200 rounded-t-lg dark:border-gray-600">
      <ddtw-radio
        v-model="picked"
        label="Angular"
        name="radio-horizontal"
        value="Angular"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwP, DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref('svelte')
</script>
```

## Inline Radio

<ddtw-radio-example-inline />
```vue
<template>
  <div class="flex w-96">
    <ddtw-radio v-model="picked" label="Inline 1" value="first" />
    <ddtw-radio v-model="picked" label="Inline 2" value="second" />
    <ddtw-radio v-model="picked" label="Inline 3" value="third" />
    <ddtw-radio v-model="picked" label="Inline 4" value="fourth" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref('first')
</script>
```

## Radio with a link

<ddtw-radio-example-link />
```vue
<template>
  <ddtw-radio v-model="picked" name="with-link" value="first">
    I agree with the
    <ddtw-a class="ml-1" href="#">
      terms and conditions
    </ddtw-a>.
  </ddtw-radio>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwA, DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref()
</script>
```

## Bordered Radio

<ddtw-radio-example-bordered />
```vue
<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <ddtw-radio v-model="picked" label="Radio 1" name="radio-bordered" value="one" />
    </div>
    <div class="flex items-center p-2 border border-gray-200 rounded dark:border-gray-700">
      <ddtw-radio v-model="picked" label="Radio 2" name="radio-bordered" value="two" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '@datadayrepos/ddtw-vue'

const picked = ref('one')
</script>
```
