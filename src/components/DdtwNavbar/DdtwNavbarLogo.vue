<template>
  <component
    :is="componentName"
    class="flex items-center"
    :[linkAttr]="link"
  >
    <img
      :src="imageUrl"
      :alt="alt"
      class="mr-3 h-6 sm:h-10"
    >
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

type IDdtwNavbarLogoProps = {
  link?: string
  imageUrl?: string
  alt?: string
  component?: string
  linkAttr?: string
}
const props = withDefaults(defineProps<IDdtwNavbarLogoProps>(), {
  alt: 'Logo',
  component: 'a',
  imageUrl: '/assets/a_favicon.png',
  link: '/',
  linkAttr: 'href',
})
const componentName = computed(() => {
  return props.component !== 'a' ? resolveComponent(props.component) : 'a'
})
</script>
