<script setup>
import DdtwSpinnerExample from './spinner/examples/DdtwSpinnerExample.vue'
import DdtwSpinnerExampleColor from './spinner/examples/DdtwSpinnerExampleColor.vue'
import DdtwSpinnerExampleSize from './spinner/examples/DdtwSpinnerExampleSize.vue'
</script>

# Vue Spinner - Flowbite

#### Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS

---

:::tip
Original reference: [https://flowbite.com/docs/components/spinner/](https://flowbite.com/docs/components/spinner/)
:::

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Basic example

<ddtw-spinner-example />
```vue
<template>
  <ddtw-spinner />
</template>

<script setup>
import { DdtwSpinner } from '@datadayrepos/ddtw-vue'
</script>
```

## Prop - size

<ddtw-spinner-example-size />
```vue
<template>
  <ddtw-spinner />
  <ddtw-spinner size="6" />
  <ddtw-spinner size="8" />
  <ddtw-spinner size="10" />
  <ddtw-spinner size="12" />
</template>

<script setup>
import { DdtwSpinner } from '@datadayrepos/ddtw-vue'
</script>
```

## Prop - color

<ddtw-spinner-example-color />
```vue
<template>
  <ddtw-spinner color="blue" />
  <ddtw-spinner color="gray" />
  <ddtw-spinner color="green" />
  <ddtw-spinner color="pink" />
  <ddtw-spinner color="purple" />
  <ddtw-spinner color="red" />
  <ddtw-spinner color="white" />
  <ddtw-spinner color="yellow" />
</template>

<script setup>
import { DdtwSpinner } from '@datadayrepos/ddtw-vue'
</script>
```

## API

### Props
| Name  | Values                                                                                  | Default |
|-------|-----------------------------------------------------------------------------------------|---------|
| color | `blue`, `gray`, `green`, `pink`, `purple`, `red`, `white`, `yellow`                     | `blue`  |
| size  | `0`, `0.5`, `1`, `1.5`, `10`, `11`, `12`, `2`, `2.5`, `3`, `4`, `5`, `6`, `7`, `8`, `9` | `4`     |
