<script setup>
import DdtwBadgeExample from './badge/examples/DdtwBadgeExample.vue'
import DdtwBadgeExampleSize from './badge/examples/DdtwBadgeExampleSize.vue'
import DdtwBadgeExampleLink from './badge/examples/DdtwBadgeExampleLink.vue'
import DdtwBadgeExampleIcon from './badge/examples/DdtwBadgeExampleIcon.vue'
import DdtwBadgeExampleIconOnly from './badge/examples/DdtwBadgeExampleIconOnly.vue'
</script>
# Vue Badge - Flowbite

#### Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
---

:::tip
Original reference: [https://flowbite.com/docs/components/badge/](https://flowbite.com/docs/components/badge/)
:::

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.
Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.

## Default badge
Prop – type

<ddtw-badge-example />
```vue
<template>
  <ddtw-badge>Default</ddtw-badge>
  <ddtw-badge type="dark">Dark</ddtw-badge>
  <ddtw-badge type="red">Red</ddtw-badge>
  <ddtw-badge type="green">Green</ddtw-badge>
  <ddtw-badge type="yellow">Yellow</ddtw-badge>
  <ddtw-badge type="indigo">Indigo</ddtw-badge>
  <ddtw-badge type="purple">Purple</ddtw-badge>
  <ddtw-badge type="pink">Pink</ddtw-badge>
</template>

<script setup>
import { DdtwBadge } from '@datadayrepos/ddtw-vue'
</script>
```

## Large badges
Prop – size

<ddtw-badge-example-size />
```vue
<template>
  <ddtw-badge size="xs">Default</ddtw-badge>
  <ddtw-badge size="xs" type="dark">Dark</ddtw-badge>
  <ddtw-badge size="xs" type="red">Red</ddtw-badge>
  <ddtw-badge size="xs" type="green">Green</ddtw-badge>
  <ddtw-badge size="sm" type="yellow">Yellow</ddtw-badge>
  <ddtw-badge size="sm" type="indigo">Indigo</ddtw-badge>
  <ddtw-badge size="sm" type="purple">Purple</ddtw-badge>
  <ddtw-badge size="sm" type="pink">Pink</ddtw-badge>
</template>

<script setup>
import { DdtwBadge } from '@datadayrepos/ddtw-vue'
</script>
```

## Badges as links
You can also use badges as anchor elements to link to another page.
Prop – href

<ddtw-badge-example-link />
```vue
<template>
  <ddtw-badge href="#">
    Link
  </ddtw-badge>
  <ddtw-badge href="#" size="sm">
    Link small
  </ddtw-badge>
</template>

<script setup>
import { DdtwBadge } from '@datadayrepos/ddtw-vue'
</script>
```

## Badges with icon
You can also use SVG icons inside the badge elements.
slot icon

<ddtw-badge-example-icon />
```vue
<template>
  <ddtw-badge>
    <template #icon>
      <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
    Default
  </ddtw-badge>
  <ddtw-badge size="sm" type="dark">
    <template #icon>
      <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
    Dark
  </ddtw-badge>
</template>

<script setup>
import { DdtwBadge } from '@datadayrepos/ddtw-vue'
</script>
```

## Badge with icon only

<ddtw-badge-example-icon-only />
```vue
<template>
  <ddtw-badge>
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </ddtw-badge>
  <ddtw-badge type="dark">
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </ddtw-badge>
  <ddtw-badge size="sm" type="green">
    <template #icon>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
      </svg>
    </template>
  </ddtw-badge>
</template>

<script setup>
import { DdtwBadge } from '@datadayrepos/ddtw-vue'
</script>
```
