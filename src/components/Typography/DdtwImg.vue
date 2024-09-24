<template>
  <figure
    v-if="caption"
    :class="size"
  >
    <img
      :src="src"
      :alt="alt"
      :class="[size, alignment, imgClass]"
    >
    <figcaption :class="captionClass">
      {{ caption }}
    </figcaption>
  </figure>
  <img
    v-else
    :src="src"
    :alt="alt"
    :class="[size, alignment, imgClass]"
  >
</template>

<script setup lang="ts">
type ImageProps = {
  caption?: string
  src?: string
  size?: string
  alt?: string
  imgClass?: string
  alignment?: string
  captionClass?: string
}

withDefaults(defineProps<ImageProps>(), {
  alignment: '',
  alt: '',
  caption: '',
  captionClass: 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400',
  imgClass: 'h-auto',
  size: 'max-w-full',
  src: '',
})
</script>
