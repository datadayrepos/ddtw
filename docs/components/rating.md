<script setup>
import DdtwRatingExample from './rating/examples/DdtwRatingExample.vue'
import DdtwRatingExampleWithText from './rating/examples/DdtwRatingExampleWithText.vue'
import DdtwRatingExampleCount from './rating/examples/DdtwRatingExampleCount.vue'
import DdtwRatingExampleStarSizes from './rating/examples/DdtwRatingExampleStarSizes.vue'
</script>
# Vue Rating - Flowbite

## Default rating
Use this simple example of a star rating component for showing review results.

<ddtw-rating-example />
```vue
<template>
  <ddtw-rating :rating="4" />
</template>

<script setup>
import { DdtwRating } from '@datadayrepos/ddtw-vue'
</script>
```

## Rating with text
If you also want to show a text near the stars you can use this example as a reference.

<ddtw-rating-example-with-text />
```vue
<template>
  <ddtw-rating :rating="4.75">
    <template #besideText>
      <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        4.75 out of 5
      </p>
    </template>
  </ddtw-rating>
</template>

<script setup>
import { DdtwRating } from '@datadayrepos/ddtw-vue'
</script>
```

## Rating count
Aggregate more results by using this example to show the amount of reviews and the average score.

<ddtw-rating-example-count />
```vue
<template>
  <ddtw-rating
    :rating="1"
    :scale="1"
    review-link="#"
    review-text="73 reviews"
  >
    <template #besideText>
      <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        4.95
      </p>
    </template>
  </ddtw-rating>
</template>

<script setup>
import { DdtwRating } from '@datadayrepos/ddtw-vue'
</script>
```

## Star sizes
Check out the different sizing options for the star review component from small, medium, and large.

<ddtw-rating-example-star-sizes />
```vue
<template>
    <ddtw-rating size="sm" :rating="4" />
    <ddtw-rating size="md" :rating="4" />
    <ddtw-rating size="lg" :rating="4" />
</template>

<script setup>
import { DdtwRating } from '@datadayrepos/ddtw-vue'
</script>
```
