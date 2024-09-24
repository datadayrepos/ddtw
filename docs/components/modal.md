<script setup>
import DdtwModalExample from './modal/examples/DdtwModalExample.vue'
import DdtwModalExampleSize from './modal/examples/DdtwModalExampleSize.vue'
import DdtwModalExampleEscapable from './modal/examples/DdtwModalExampleEscapable.vue'
import DdtwModalExamplePersistent from './modal/examples/DdtwModalExamplePersistent.vue'
import DdtwModalExamplePosition from './modal/examples/DdtwModalExamplePosition.vue'
</script>
# Vue Modal - Flowbite

#### Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles

---

:::tip
Original reference: [https://flowbite.com/docs/components/modal/](https://flowbite.com/docs/components/modal/)
:::

The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.

## Default modal

<ddtw-modal-example />
```vue
<template>
  <ddtw-button @click="showModal">
    Open modal
  </ddtw-button>

  <ddtw-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Terms of Service
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <ddtw-button @click="closeModal" color="alternative">
          Decline
        </ddtw-button>
        <ddtw-button @click="closeModal" color="green">
          I accept
        </ddtw-button>
      </div>
    </template>
  </ddtw-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwButton, DdtwModal } from '@datadayrepos/ddtw-vue'

const isShowModal = ref(false)

function closeModal () {
  isShowModal.value = false
}
function showModal () {
  isShowModal.value = true
}
</script>
```

## Size

You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

The default value is: `2xl`

<ddtw-modal-example-size />
```vue
<template>
  <ddtw-modal size="xs" />
  <ddtw-modal size="md" />
  <ddtw-modal size="xl" />
  <ddtw-modal size="5xl" />
</template>

<script setup>
import { DdtwModal } from '@datadayrepos/ddtw-vue'
</script>
```

## Position

The `position` prop allows you to control the placement of the modal on the screen, taking into account RTL (Right-to-Left) mode. You can choose from the following options:

`top-start`, `top-center`, `top-end`, `center-start`, `center`, `center-end`, `bottom-start`, `bottom-center`, `bottom-end`

The default value is: `center`

<ddtw-modal-example-position />
```vue
<template>
  <ddtw-modal position="top-start" />
  <ddtw-modal position="top-center" />
  <ddtw-modal position="top-end" />
  <ddtw-modal position="center-start" />
  <ddtw-modal position="center" />
  <ddtw-modal position="center-end" />
  <ddtw-modal position="bottom-start" />
  <ddtw-modal position="bottom-center" />
  <ddtw-modal position="bottom-end" />
</template>

<script setup>
import { DdtwModal } from '@datadayrepos/ddtw-vue'
</script>
```

## Escapable

The escapable property is true by default to improve user experience and accessibility.

This means that you may close the modal by

 - Using the close button on the modal
 - Clicking outside of the modal
 - Pressing the escape key

In some situations, your user may be required to interact with the modal content. If this is the case, you can set the `not-escapable` property to `true`. The developer can then choose when they want to close the modal.

<ddtw-modal-example-escapable />
```vue
<template>
  <ddtw-modal />
  <ddtw-modal not-escapable />
</template>

<script setup>
import { DdtwModal } from '@datadayrepos/ddtw-vue'
</script>
```

## Persistent

Clicking outside of the element or pressing esc key will not send `close` event.

<ddtw-modal-example-persistent />
```vue
<template>
  <ddtw-modal persistent />
</template>

<script setup>
import { DdtwModal } from '@datadayrepos/ddtw-vue'
</script>
```

## API

### Props:

| Name         | Values                                                    | Default |
|--------------|-----------------------------------------------------------|---------|
| size         | `md`,`lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl` | 2xl     |
| notEscapable | `true`, `false`                                           | `false` |
| persistent   | `true`, `false`                                           | `true`  |

### Events:
| Name            | Type                                                                             |
|-----------------|----------------------------------------------------------------------------------|
| `close`         | Clicked on the close button, pressed `Esc`, or clicked outside the modal content |
| `click:outside` | Clicked outside the modal content                                                |
