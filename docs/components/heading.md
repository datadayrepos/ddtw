<script setup>
import DdtwHExampleLevel1 from './typography/heading/DdtwHExampleLevel1.vue'
import DdtwHExampleLevel2 from './typography/heading/DdtwHExampleLevel2.vue'
import DdtwHExampleLevel3 from './typography/heading/DdtwHExampleLevel3.vue'
import DdtwHExampleLevel4 from './typography/heading/DdtwHExampleLevel4.vue'
import DdtwHExampleLevel5 from './typography/heading/DdtwHExampleLevel5.vue'
import DdtwHExampleLevel6 from './typography/heading/DdtwHExampleLevel6.vue'
import DdtwHExampleColor from './typography/heading/DdtwHExampleColor.vue'
import DdtwHExampleCustom from './typography/heading/DdtwHExampleCustom.vue'
</script>

# Vue Heading - Flowbite

#### The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts

## Heading one (H1)

Use the `tag="h1"` as the most important text element to indicate the title of your web page.

```vue
<template>
  <DdtwHeading tag="h1">
    Heading 1
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-level1 />

## Heading two (H2)

The H2 tag can be used as subtitles of the page’s sections.

```vue
<template>
  <DdtwHeading tag="h2">
    Heading 2
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-level2 />

## Heading three (H3)

Use the H3 tags inside sections that already have a H2 available.

```vue
<template>
  <DdtwHeading tag="h3">
    Heading 3
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-level3 />

## Heading four (H4)

The H4 can be generally used after H2 and H3 tags are already present and you need a more in-depth hierarchy.

```vue
<template>
  <DdtwHeading tag="h4">
    Heading 4
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-level4 />

## Heading five (H5)

The H5 tag is most often used in longer articles with other heading already available or in sidebars.

```vue
<template>
  <DdtwHeading tag="h5">
    Heading 5
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-level5 />

## Heading six (H6)

Using the H6 tag is quite rare because it means that you’ve already used all heading from H1 to H5, but you can still use it if you have a very complex article with lots of headings.

```vue
<template>
  <DdtwHeading tag="h6">
    Heading 6
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-level6 />

## Color

Use the `color` prop to set the text color.

```vue
<template>
  <DdtwHeading color="text-green-400">
    Green eading
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-color />

## Custom classes

Use the `class` attribute to apply the tailwind classes.

```vue
<template>
  <DdtwHeading class="!text-xl italic underline">
    Custom heading
  </DdtwHeading>
</template>

<script setup>
import { DdtwHeading } from '@datadayrepos/ddtw-vue'
</script>
```
<ddtw-h-example-custom />
