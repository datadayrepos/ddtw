<script setup>
import DdtwButtonExampleColor from './button/examples/DdtwButtonExampleColor.vue';
import DdtwButtonExampleDisabled from './button/examples/DdtwButtonExampleDisabled.vue';
import DdtwButtonExampleGradientDuotone from './button/examples/DdtwButtonExampleGradientDuotone.vue';
import DdtwButtonExampleGradientMonochrome from './button/examples/DdtwButtonExampleGradientMonochrome.vue';
import DdtwButtonExampleLink from './button/examples/DdtwButtonExampleLink.vue';
import DdtwButtonExampleLoading from './button/examples/DdtwButtonExampleLoading.vue';
import DdtwButtonExampleOutline from './button/examples/DdtwButtonExampleOutline.vue';
import DdtwButtonExampleOutlineGradient from './button/examples/DdtwButtonExampleOutlineGradient.vue';
import DdtwButtonExamplePill from './button/examples/DdtwButtonExamplePill.vue';
import DdtwButtonExampleShadow from './button/examples/DdtwButtonExampleShadow.vue';
import DdtwButtonExampleSize from './button/examples/DdtwButtonExampleSize.vue';
import DdtwButtonExampleSlot from './button/examples/DdtwButtonExampleSlot.vue';
import DdtwButtonExampleSlotPrefix from './button/examples/DdtwButtonExampleSlotPrefix.vue';
import DdtwButtonExampleSlotSuffix from './button/examples/DdtwButtonExampleSlotSuffix.vue';
import DdtwButtonExampleSquare from './button/examples/DdtwButtonExampleSquare.vue';
</script>

# Vue Button - Flowbite

#### Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

---

:::tip
Original reference: [https://flowbite.com/docs/components/buttons/](https://flowbite.com/docs/components/buttons/)
:::

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Flowbite provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Prop - color
### The TW formatting is completey gone
<ddtw-button-example-color />
```vue
<template>
  <ddtw-button color="default">Default</ddtw-button>
  <ddtw-button color="alternative">Alternative</ddtw-button>
  <ddtw-button color="dark">Dark</ddtw-button>
  <ddtw-button color="light">Light</ddtw-button>
  <ddtw-button color="green">Green</ddtw-button>
  <ddtw-button color="red">Red</ddtw-button>
  <ddtw-button color="yellow">Yellow</ddtw-button>
  <ddtw-button color="purple">Purple</ddtw-button>
  <ddtw-button color="pink">Pink</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Prop - size

<ddtw-button-example-size />
```vue
<template>
  <ddtw-button size="xs">Extra Small - xs</ddtw-button>
  <ddtw-button size="sm">Small - sm</ddtw-button>
  <ddtw-button size="md">Medium - md</ddtw-button>
  <ddtw-button size="lg">Large - lg</ddtw-button>
  <ddtw-button size="xl">Extra Large - xl</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>
````

## Prop - pill

<ddtw-button-example-pill />
```vue
<template>
  <ddtw-button color="default" pill>Default</ddtw-button>
  <ddtw-button color="alternative" pill>Alternative</ddtw-button>
  <ddtw-button color="dark" pill>Dark</ddtw-button>
  <ddtw-button color="light" pill>Light</ddtw-button>
  <ddtw-button color="green" pill>Green</ddtw-button>
  <ddtw-button color="red" pill>Red</ddtw-button>
  <ddtw-button color="yellow" pill>Yellow</ddtw-button>
  <ddtw-button color="purple" pill>Purple</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Prop - outline

<ddtw-button-example-outline />
```vue
<template>
  <ddtw-button color="default" outline>Default</ddtw-button>
  <ddtw-button color="dark" outline>Dark</ddtw-button>
  <ddtw-button color="green" outline>Green</ddtw-button>
  <ddtw-button color="red" outline>Red</ddtw-button>
  <ddtw-button color="yellow" outline>Yellow</ddtw-button>
  <ddtw-button color="purple" outline>Purple</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>
````

## Prop - square

<ddtw-button-example-square />
```vue
<template>
  <ddtw-button gradient="red-yellow" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </ddtw-button>
  <ddtw-button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </ddtw-button>
  <ddtw-button color="dark" outline square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </ddtw-button>
  <ddtw-button color="yellow" outline pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Prop - loading

<ddtw-button-example-loading />
```vue
<template>
  <ddtw-button :disabled="loading" :loading="loading" gradient="purple-blue" outline size="xs" @click="loading = !loading">
    Click me
  </ddtw-button>
  <ddtw-button :loading="loading" gradient="red-yellow" size="sm" @click="loading = !loading">
    Click me
  </ddtw-button>
  <ddtw-button :loading="loading" color="default" loading-position="suffix" outline @click="loading = !loading">
    Click me
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
      </svg>
    </template>
  </ddtw-button>
  <ddtw-button :loading="loading" gradient="green-blue" size="lg" @click="loading = !loading">
    Click me
  </ddtw-button>
  <ddtw-button :loading="loading" gradient="pink" size="xl" @click="loading = !loading">
    Click me
  </ddtw-button>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwButton } from '@datadayrepos/ddtw-vue'

const loading = ref(false)
</script>
````

## Prop - disabled

<ddtw-button-example-disabled />
```vue
<template>
  <ddtw-button color="default" disabled>Default</ddtw-button>
  <ddtw-button color="default" outline disabled>Default outline</ddtw-button>
  <ddtw-button gradient="red" disabled>Red gradient</ddtw-button>
  <ddtw-button gradient="red-yellow" disabled>Red to yellow gradient</ddtw-button>
  <ddtw-button gradient="red-yellow" outline disabled>Red to yellow outline</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Prop - href
You can add a link to a `Button` component.
Additionally you can add `tag` prop to change button component to `router-link`

<ddtw-button-example-link />
```vue
<template>
  <ddtw-button href="https://google.com" target="_blank">Google.com</ddtw-button>
  <ddtw-button href="/pages/getting-started" tag="router-link">Quickstart</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>
````

## Slot - default

<ddtw-button-example-slot />
```vue
<template>
  <ddtw-button gradient="purple-blue" square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </ddtw-button>
  <ddtw-button color="default" pill square>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
    </svg>
  </ddtw-button>
  <ddtw-button gradient="green-blue" square>
    Close something
  </ddtw-button>
  <ddtw-button color="default" outline pill square>
    Open something
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
      </svg>
    </template>
  </ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Slot - prefix

<ddtw-button-example-slot-prefix />
```vue
<template>
  <ddtw-button>
    <template #prefix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    </template>
    Buy
  </ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>
````

## Slot - suffix

<ddtw-button-example-slot-suffix />
```vue
<template>
  <ddtw-button>
    Choose plan
    <template #suffix>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
      </svg>
    </template>
  </ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

```

## Prop - gradient (monochrome) - // ABY deprecated

<ddtw-button-example-gradient-monochrome />
```vue
<template>
  <ddtw-button gradient="blue">Blue</ddtw-button>
  <ddtw-button gradient="cyan">Cyan</ddtw-button>
  <ddtw-button gradient="green">Green</ddtw-button>
  <ddtw-button gradient="lime">Lime</ddtw-button>
  <ddtw-button gradient="pink">Pink</ddtw-button>
  <ddtw-button gradient="purple">Purple</ddtw-button>
  <ddtw-button gradient="red">Red</ddtw-button>
  <ddtw-button gradient="teal">Teal</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>
````

## Prop - gradient (duotone) - // ABY deprecated

<ddtw-button-example-gradient-duotone />
```vue
<template>
  <ddtw-button gradient="purple-blue">Purple to blue</ddtw-button>
  <ddtw-button gradient="cyan-blue">Cyan to blue</ddtw-button>
  <ddtw-button gradient="green-blue">Green to blue</ddtw-button>
  <ddtw-button gradient="purple-pink">Purple to pink</ddtw-button>
  <ddtw-button gradient="pink-orange">Pink to orange</ddtw-button>
  <ddtw-button gradient="teal-lime">Teal to lime</ddtw-button>
  <ddtw-button gradient="red-yellow">Red to yellow</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Prop - outline (gradient) - // ABY deprecated

<ddtw-button-example-outline-gradient />
```vue
<template>
  <ddtw-button gradient="purple-blue" outline>Purple to blue</ddtw-button>
  <ddtw-button gradient="cyan-blue" outline>Cyan to blue</ddtw-button>
  <ddtw-button gradient="green-blue" outline>Green to blue</ddtw-button>
  <ddtw-button gradient="purple-pink" outline>Purple to pink</ddtw-button>
  <ddtw-button gradient="pink-orange" outline>Pink to orange</ddtw-button>
  <ddtw-button gradient="teal-lime" outline>Teal to lime</ddtw-button>
  <ddtw-button gradient="red-yellow" outline>Red to yellow</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>

````

## Prop - shadow - // ABY deprecated

<ddtw-button-example-shadow />
```vue
<template>
  <ddtw-button gradient="blue" shadow>Blue with blue</ddtw-button>
  <ddtw-button gradient="cyan" shadow>Cyan with cyan</ddtw-button>
  <ddtw-button gradient="green" shadow>Green with green</ddtw-button>
  <ddtw-button gradient="lime" shadow>Lime with lime</ddtw-button>
  <ddtw-button gradient="pink" shadow>Pink with pink</ddtw-button>
  <ddtw-button gradient="purple" shadow>Purple with purple</ddtw-button>
  <ddtw-button gradient="red" shadow>Red with red</ddtw-button>
  <ddtw-button gradient="teal" shadow>Teal with teal</ddtw-button>
  <ddtw-button gradient="blue" shadow="red">Blue with red</ddtw-button>
  <ddtw-button gradient="cyan" shadow="teal">Cyan with teal</ddtw-button>
  <ddtw-button gradient="teal" shadow="purple">Teal with purple</ddtw-button>
</template>

<script setup>
import { DdtwButton } from '@datadayrepos/ddtw-vue'
</script>
````

## Button API

### Props
| Name             | Type    | Values                                                                                         | Default   |
|------------------|---------|------------------------------------------------------------------------------------------------|-----------|
| color            | String  | `default`, `alternative`, `dark`, `light`, `green`, `red`, `yellow`, `purple`, `pink`, `blue`  | `default` |
| disabled         | Boolean |                                                                                                | `false`   |
| gradient (deprecated)         | String  | monochrome:<br>`blue`, `green`, `cyan`, `teal`, `lime`, `red`, `pink`, `purple`<br>duotone:<br>`purple-blue`, `cyan-blue`, `green-blue`, `purple-pink`, `pink-orange`, `teal-lime`, `red-yellow`                                      | `null`    |
| href             | String  |                                                                                                | `''`      |
| loading          | Boolean |                                                                                                | `false`   |
| loading-position | String  |  `prefix`, `suffix`                                                                            | `prefix`  |
| outline          | Boolean |                                                                                                | `false`   |
| pill             | Boolean |                                                                                                | `false`   |
| shadow /deprecated)          | String  | `blue`, `green`, `cyan`, `teal`, `lime`, `red`, `pink`, `purple`                               | `null`    |
| size             | String  | `xs`, `sm`, `md`, `lg`, `xl`                                                                   | `md`      |
| square           | Boolean |                                                                                                | `false`   |
| tag              | String  |                                                                                                | `a`       |
```
