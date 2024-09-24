<script setup>
import DdtwAExample from './typography/link/DdtwAExample.vue'
import DdtwAExampleParagraph from './typography/link/DdtwAExampleParagraph.vue'
import DdtwAExampleCustom from './typography/link/DdtwAExampleCustom.vue'
</script>

# Vue Links - Flowbite

#### The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card

## Default link

Use this example to set default styles to an inline link element.

```vue
<template>
  <DdtwA href="#">
    Flowbite-vue
  </DdtwA>
</template>

<script setup>
import { DdtwA } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-a-example />

## Paragraph link

Use this example to set a link inside a paragraph with an underline style.

```vue
<template>
  <DdtwP>
    The free updates that will be provided is based on the <DdtwA
      href="#"
      class="underline hover:no-underline"
    >
      roadmap
    </DdtwA> that we have laid
    out for this project. It is also possible that we will provide
    extra updates outside of the roadmap as well.
  </DdtwP>
</template>

<script setup>
import { DdtwA, DdtwP } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-a-example-paragraph />

## Custom classes

Use `class` attribute prop to apply the tailwind classes.

```vue
<template>
  <DdtwA class="text-orange-500 italic" href="#">
    Flowbite-vue
  </DdtwA>
</template>

<script setup>
import { DdtwA } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-a-example-custom />
