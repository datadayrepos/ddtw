<script setup>
import DdtwBreadcrumbExample from './breadcrumb/examples/DdtwBreadcrumbExample.vue'
import DdtwBreadcrumbExampleSolid from './breadcrumb/examples/DdtwBreadcrumbExampleSolid.vue'
import DdtwBreadcrumbExampleCustomIcons from './breadcrumb/examples/DdtwBreadcrumbExampleCustomIcons.vue'
</script>
# Vue Breadcrumb - Flowbite
The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Default breadcrumb

<ddtw-breadcrumb-example />
```vue
<template>
  <ddtw-breadcrumb>
    <ddtw-breadcrumb-item home href="#">
      Home
    </ddtw-breadcrumb-item>
    <ddtw-breadcrumb-item href="#">
      Projects
    </ddtw-breadcrumb-item>
    <ddtw-breadcrumb-item>
      Flowbite
    </ddtw-breadcrumb-item>
  </ddtw-breadcrumb>
</template>

<script setup>
import { DdtwBreadcrumb, DdtwBreadcrumbItem } from '@datadayrepos/ddtw-vue'
</script>
```

## Solid Breadcrumb

<ddtw-breadcrumb-example-solid />
```vue
<template>
  <ddtw-breadcrumb solid>
    <ddtw-breadcrumb-item home href="#">
      Home
    </ddtw-breadcrumb-item>
    <ddtw-breadcrumb-item href="#">
      Projects
    </ddtw-breadcrumb-item>
    <ddtw-breadcrumb-item>
      Flowbite
    </ddtw-breadcrumb-item>
  </ddtw-breadcrumb>
</template>

<script setup>
import { DdtwBreadcrumb, DdtwBreadcrumbItem } from '@datadayrepos/ddtw-vue'
</script>
```

## Custom Icons

<ddtw-breadcrumb-example-custom-icons />
```vue
<template>
  <ddtw-breadcrumb>
    <ddtw-breadcrumb-item home href="#">
      <template #home-icon>
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      Home
    </ddtw-breadcrumb-item>
    <ddtw-breadcrumb-item href="#">
      <template #arrow-icon>
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      Projects
    </ddtw-breadcrumb-item>
    <ddtw-breadcrumb-item>
      <template #arrow-icon>
        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </template>
      Flowbite
    </ddtw-breadcrumb-item>
  </ddtw-breadcrumb>
</template>

<script setup>
import { DdtwBreadcrumb, DdtwBreadcrumbItem } from '@datadayrepos/ddtw-vue'
</script>
```
