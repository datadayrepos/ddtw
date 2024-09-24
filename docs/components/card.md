<script setup>
import DdtwCardExample from './card/examples/DdtwCardExample.vue'
import DdtwCardExampleImage from './card/examples/DdtwCardExampleImage.vue'
import DdtwCardExampleHorizontal from './card/examples/DdtwCardExampleHorizontal.vue'
</script>
# Vue Card - Flowbite

#### Get started with a large variety of Tailwind CSS card examples for your web project

---

:::tip
Original reference: [https://flowbite.com/docs/components/card/](https://flowbite.com/docs/components/card/)
:::

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Prop - default

<ddtw-card-example />
```vue
<template>
    <ddtw-card href="#">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </ddtw-card>
</template>

<script setup>
import { DdtwCard } from '@datadayrepos/ddtw-vue'
</script>
```

## Prop - image

<ddtw-card-example-image />
```vue
<template>
    <ddtw-card
      img-alt="Desk"
      img-src="https://flowbite.com/docs/images/blog/image-1.jpg"
      variant="image"
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </ddtw-card>
</template>

<script setup>
import { DdtwCard } from '@datadayrepos/ddtw-vue'
</script>
```

## Prop - horizontal

<ddtw-card-example-horizontal />
```vue
<template>
    <ddtw-card
      img-alt="Desk"
      img-src="https://flowbite.com/docs/images/blog/image-4.jpg"
      variant="horizontal"
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </ddtw-card>
</template>

<script setup>
import { DdtwCard } from '@datadayrepos/ddtw-vue'
</script>
```
