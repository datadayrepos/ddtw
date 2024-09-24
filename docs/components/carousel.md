<script setup>
import DdtwCarouselExample from './carousel/examples/DdtwCarouselExample.vue'
import DdtwCarouselExamplePictures from './carousel/examples/DdtwCarouselExamplePictures.vue'
import DdtwCarouselExampleSlide from './carousel/examples/DdtwCarouselExampleSlide.vue'
import DdtwCarouselExampleSlideInterval from './carousel/examples/DdtwCarouselExampleSlideInterval.vue'
import DdtwCarouselExampleWithoutControls from './carousel/examples/DdtwCarouselExampleWithoutControls.vue'
import DdtwCarouselExampleWithoutIndicators from './carousel/examples/DdtwCarouselExampleWithoutIndicators.vue'
</script>
# Vue Carousel - Flowbite

Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options

## Basic Carousel

<ddtw-carousel-example />
```vue
<template>
  <ddtw-carousel :pictures="pictures" />
</template>

<script setup>
import { DdtwCarousel } from '@datadayrepos/ddtw-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```

## Carousel without controls

<ddtw-carousel-example-without-controls />
```vue
<template>
  <ddtw-carousel no-controls :pictures="pictures" />
</template>

<script setup>
import { DdtwCarousel } from '@datadayrepos/ddtw-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```
## Carousel without indicators

<ddtw-carousel-example-without-indicators />
```vue
<template>
  <ddtw-carousel no-indicators :pictures="pictures" />
</template>

<script setup>
import { DdtwCarousel } from '@datadayrepos/ddtw-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```

## Carousel with slide animation

<ddtw-carousel-example-slide />
```vue
<template>
  <ddtw-carousel :pictures="pictures" slide />
</template>

<script setup>
import { DdtwCarousel } from '@datadayrepos/ddtw-vue'

const pictures = [
  {src: '/images/img-1.svg', alt: 'Image 1'},
  {src: '/images/img-2.svg', alt: 'Image 2'},
  {src: '/images/img-3.svg', alt: 'Image 3'},
]
</script>
```

## Carousel with slide and custom interval

<ddtw-carousel-example-slide-interval />

```vue
<template>
  <DdtwCarousel :pictures="pictures" slide :slide-interval="1000" />
</template>

<script setup>
import { DdtwCarousel } from '@datadayrepos/ddtw-vue'

const pictures = [
  { alt: 'Image 1', src: '/images/img-1.svg' },
  { alt: 'Image 2', src: '/images/img-2.svg' },
  { alt: 'Image 3', src: '/images/img-3.svg' },
]
</script>
```

## Carousel API

### Props

| Name          | Type    | Values                         | Default |
|---------------|---------|--------------------------------|---------|
| animation     | Boolean | `true`, `false`                | `false` |
| noControls    | Boolean | `true`, `false`                | `false` |
| noIndicators  | Boolean | `true`, `false`                | `false` |
| pictures      | Array   | `[{source: '', alt: ''}, ...]` | `[]`    |
| slide         | Boolean | `true`, `false`                | `false` |
| slideInterval | Number  |                                | `3000`  |
