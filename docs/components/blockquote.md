<script setup>
import DdtwBlockquoteExample from './typography/blockquote/DdtwBlockquoteExample.vue'
import DdtwBlockquoteSolidExample from './typography/blockquote/DdtwBlockquoteSolidExample.vue'
import DdtwBlockquoteAlignExample from './typography/blockquote/DdtwBlockquoteAlignExample.vue'
import DdtwBlockquoteSizeExample from './typography/blockquote/DdtwBlockquoteSizeExample.vue'
</script>

# Vue Blockquote - Flowbite
---

:::tip
Original reference: [https://flowbite.com/docs/typography/blockquote/](https://flowbite.com/docs/typography/blockquote/)
:::

## Get started with a collection of blockquote components when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

## Default blockquote

Use this example to quote an external source inside a `<ddtw-blockquote>` component.

<ddtw-blockquote-example/>

```vue
<ddtw-blockquote>
    "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard.
    Perfect choice for your next SaaS application."
</ddtw-blockquote>
```

## Solid background
This example can be used as an alternative style to the default style by applying a solid background color with `type="solid"`.

<ddtw-blockquote-solid-example />

```vue
<ddtw-blockquote type="solid">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
```

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

<ddtw-blockquote-align-example />
```vue
<ddtw-blockquote class="text-left">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
<ddtw-blockquote class="text-center">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
<ddtw-blockquote class="text-right">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
```

## Size

Choose from one of the multiple sizes for the default blockquote component based on the surrounding elements and sizes.

<ddtw-blockquote-size-example />
```vue
<ddtw-blockquote class="text-lg">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
<ddtw-blockquote class="text-xl">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
<ddtw-blockquote class="text-2xl">
    "Flowbite is just awesome. Perfect choice for your next SaaS application.Perfect choice for your next SaaS application."
</ddtw-blockquote>
```
