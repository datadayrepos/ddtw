<script setup>
import DdtwProgressExample from './progress/examples/DdtwProgressExample.vue'
import DdtwProgressExampleColor from './progress/examples/DdtwProgressExampleColor.vue'
import DdtwProgressExampleLabelInside from './progress/examples/DdtwProgressExampleLabelInside.vue'
import DdtwProgressExampleLabelOutside from './progress/examples/DdtwProgressExampleLabelOutside.vue'
import DdtwProgressExampleSize from './progress/examples/DdtwProgressExampleSize.vue'

</script>
# Vue Progress Bar - Flowbite

## Default

<ddtw-progress-example />
```vue
<template>
  <ddtw-progress :progress="45" />
</template>

<script setup>
import { DdtwProgress } from '@datadayrepos/ddtw-vue'
</script>
```

## Sizes
You can also use different sizes by using various sizing.

<ddtw-progress-example-size />
```vue
<template>
  <div class="grid gap-2">
    <ddtw-progress :progress="25" size="sm" label="Small" />
    <ddtw-progress :progress="50" size="md" label="Medium" />
    <ddtw-progress :progress="75" size="lg" label="Large" />
    <ddtw-progress :progress="100" size="xl" label="Extra Large" />
  </div>
</template>

<script setup>
import { DdtwProgress } from '@datadayrepos/ddtw-vue'
</script>
```

## With label inside
Here is an example of using a progress bar with the label inside the bar.

<ddtw-progress-example-label-inside />
```vue
<template>
  <ddtw-progress
    :progress="50"
    label-position="inside"
    label-progress
    size="lg"
  />
</template>

<script setup>
import { DdtwProgress } from '@datadayrepos/ddtw-vue'
</script>
```

## With label outside
And this is an example of using a progress bar outside the bar.

<ddtw-progress-example-label-outside />
```vue
<template>
  <ddtw-progress
    :progress="42"
    label-position="outside"
    label-progress
    label="Flowbite Vue 3"
  />
</template>

<script setup>
import { DdtwProgress } from '@datadayrepos/ddtw-vue'
</script>
```

## Colors
You can also apply color.

<ddtw-progress-example-color />
```vue
<template>
  <div class="grid gap-2">
    <ddtw-progress :progress="12.5" label="Default"  />
    <ddtw-progress :progress="25" color="dark" label="Dark"  />
    <ddtw-progress :progress="37.5" color="blue" label="Blue"  />
    <ddtw-progress :progress="50" color="red" label="Red"  />
    <ddtw-progress :progress="62.5" color="green" label="Green"  />
    <ddtw-progress :progress="75" color="yellow" label="Yellow"  />
    <ddtw-progress :progress="87.5" color="indigo" label="Indigo"  />
    <ddtw-progress :progress="100" color="purple" label="Purple"  />
  </div>
</template>

<script setup>
import { DdtwProgress } from '@datadayrepos/ddtw-vue'
</script>
```
