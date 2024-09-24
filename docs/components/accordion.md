<script setup>
import DdtwAccordionExample from './accordion/examples/DdtwAccordionExample.vue'
import DdtwAccordionExampleAlwaysOpen from './accordion/examples/DdtwAccordionExampleAlwaysOpen.vue'
import DdtwAccordionExampleFlush from './accordion/examples/DdtwAccordionExampleFlush.vue'
import DdtwAccordionExampleStyledHeaders from './accordion/examples/DdtwAccordionExampleStyledHeaders.vue'
import DdtwAccordionExampleFirstItemClosed from './accordion/examples/DdtwAccordionExampleFirstItemClosed.vue'
</script>
# Vue Accordion - Flowbite

#### Use Tailwind CSS accordion component to show expanding content
---

:::tip
Original reference: [https://flowbite.com/docs/components/accordion/](https://flowbite.com/docs/components/accordion/)
:::

## Default accordion
Use this example to basic accordion.

<ddtw-accordion-example />
```vue
<template>
  <ddtw-accordion>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>another header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline" >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>and one more header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
  </ddtw-accordion>
</template>

<script setup>
import {
  DdtwAccordion,
  DdtwAccordionContent,
  DdtwAccordionHeader,
  DdtwAccordionPanel,
} from '@datadayrepos/ddtw-vue'
</script>

```

## Always open accordion
Always open prop to makes accordion able to open multiple elements.

<ddtw-accordion-example-always-open />
```vue
<template>
  <ddtw-accordion always-open>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>another header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>and one more header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
  </ddtw-accordion>
</template>

<script setup>
import {
  DdtwAccordion,
  DdtwAccordionContent,
  DdtwAccordionHeader,
  DdtwAccordionPanel,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Flush accordion
Flush prop removes background color, side borders, and rounded corners

<ddtw-accordion-example-flush />
```vue
<template>
  <ddtw-accordion flush>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>another header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>and one more header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
  </ddtw-accordion>
</template>

<script setup>
import {
  DdtwAccordion,
  DdtwAccordionContent,
  DdtwAccordionHeader,
  DdtwAccordionPanel,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Styling accordion
You can style accordion content and headers by passing tailwind classes into them.

<ddtw-accordion-example-styled-headers />
```vue
<template>
  <ddtw-accordion>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a class="text-blue-600 dark:text-blue-500 hover:underline" href="/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">
        another header
      </ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
    <ddtw-accordion-panel>
      <ddtw-accordion-header>and one more header</ddtw-accordion-header>
      <ddtw-accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a class="text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </ddtw-accordion-content>
    </ddtw-accordion-panel>
  </ddtw-accordion>
</template>

<script setup>
import {
  DdtwAccordion,
  DdtwAccordionContent,
  DdtwAccordionHeader,
  DdtwAccordionPanel,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Closed first item

<ddtw-accordion-example-first-item-closed />
```vue
<template>
    <ddtw-accordion :open-first-item="false">
      <ddtw-accordion-panel>
        <ddtw-accordion-header>header</ddtw-accordion-header>
        <ddtw-accordion-content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </ddtw-accordion-content>
      </ddtw-accordion-panel>
      <ddtw-accordion-panel>
        <ddtw-accordion-header>another header</ddtw-accordion-header>
        <ddtw-accordion-content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </ddtw-accordion-content>
      </ddtw-accordion-panel>
      <ddtw-accordion-panel>
        <ddtw-accordion-header>and one more header</ddtw-accordion-header>
        <ddtw-accordion-content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </ddtw-accordion-content>
      </ddtw-accordion-panel>
    </ddtw-accordion>
</template>

<script setup>
import {
  DdtwAccordion,
  DdtwAccordionContent,
  DdtwAccordionHeader,
  DdtwAccordionPanel,
} from '@datadayrepos/ddtw-vue'
</script>
```
