<script setup>
import DdtwFileInputExample from './fileInput/examples/DdtwFileInputExample.vue'
import DdtwFileInputExampleHelper from './fileInput/examples/DdtwFileInputExampleHelper.vue'
import DdtwFileInputExampleSize from './fileInput/examples/DdtwFileInputExampleSize.vue'
import DdtwFileInputExampleDropZone from './fileInput/examples/DdtwFileInputExampleDropZone.vue'
import DdtwFileInputExampleMultiple from './fileInput/examples/DdtwFileInputExampleMultiple.vue'
</script>

# Vue FileInput - Flowbite

#### Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes

:::tip
Original reference: [https://flowbite.com/docs/forms/file-input/](https://flowbite.com/docs/forms/file-input/)
:::

## File upload example

<ddtw-file-input-example />
```vue
<template>
  <ddtw-file-input v-model="file" label="Upload file" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '@datadayrepos/ddtw-vue'

const file = ref(null)
</script>
```

## Multiple File upload

<ddtw-file-input-example-multiple />
```vue
<template>
  <ddtw-file-input v-model="files" label="Upload file" multiple />
  <div v-if="files.length !== 0" class="mt-4 border-[1px] border-gray-300 dark:border-gray-600 p-2 rounded-md">
    <div v-for="file in files" :key="file">
      {{ file.name }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '@datadayrepos/ddtw-vue'

const files = ref([])
</script>
```

## Helper text

<ddtw-file-input-example-helper />
```vue
<template>
  <ddtw-file-input v-model="file" label="Upload file">
    <p class="!mt-1 text-sm text-gray-500 dark:text-gray-300">
      SVG, PNG, JPG or GIF (MAX. 800x400px).
    </p>
  </ddtw-file-input>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '@datadayrepos/ddtw-vue'

const file = ref(null)
</script>
```

## Sizes

<ddtw-file-input-example-size />
```vue
<template>
  <ddtw-file-input v-model="file" label="Small size" size="xs" />
  <ddtw-file-input v-model="file" label="Default size" size="sm" />
  <ddtw-file-input v-model="file" label="Large size" size="lg" />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '@datadayrepos/ddtw-vue'

const file = ref(null)
</script>
```

## Dropone

<ddtw-file-input-example-drop-zone />
```vue
<template>
  <ddtw-file-input v-model="file" dropzone />
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '@datadayrepos/ddtw-vue'

const file = ref(null)
</script>
```
