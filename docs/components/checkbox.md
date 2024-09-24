<script setup>
import DdtwCheckboxExample from './checkbox/examples/DdtwCheckboxExample.vue'
import DdtwCheckboxExampleChecked from './checkbox/examples/DdtwCheckboxExampleChecked.vue'
import DdtwCheckboxExampleDisabled from './checkbox/examples/DdtwCheckboxExampleDisabled.vue'
import DdtwCheckboxExampleLink from './checkbox/examples/DdtwCheckboxExampleLink.vue'
</script>
# Vue Checkbox - Flowbite

## Default checkbox

<ddtw-checkbox-example />
```vue
<template>
  <ddtw-checkbox v-model="check" label="Default checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwCheckbox } from '@datadayrepos/ddtw-vue'

const check = ref(false)
</script>
```

## Disabled checkbox

<ddtw-checkbox-example-disabled />
```vue
<template>
  <ddtw-checkbox v-model="check" disabled label="Disabled checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwCheckbox } from '@datadayrepos/ddtw-vue'

const check = ref(false)
</script>
```

## Checked checkbox

<ddtw-checkbox-example-checked />
```vue
<template>
  <ddtw-checkbox v-model="check" label="Checked checkbox" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwCheckbox } from '@datadayrepos/ddtw-vue'

const check = ref(true)
</script>
```

## Link with checkbox

<ddtw-checkbox-example-link />
```vue
<template>
  <ddtw-checkbox v-model="check">
    <ddtw-a href="#">
      I agree with the terms and conditions.
    </ddtw-a>
  </ddtw-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwA, DdtwCheckbox } from '@datadayrepos/ddtw-vue'

const check = ref(false)
</script>
```
