<template>
  <footer
    v-bind="$attrs"
    :class="wrapperClasses"
  >
    <slot />
  </footer>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

type FooterType = 'sitemap' | 'default' | 'logo' | 'socialmedia'

type IFooterProps = {
  sticky?: boolean
  footerType?: FooterType
}

const props = withDefaults(defineProps<IFooterProps>(), {
  footerType: 'default',
  sticky: false,
})

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
const wrapperClasses = twMerge(
  props.footerType === 'sitemap' && 'bg-gray-800',
  props.footerType === 'socialmedia' && 'p-4 bg-white sm:p-6 dark:bg-gray-800',
  props.footerType === 'logo' && 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800',
  props.footerType === 'default' && 'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800',
  props.sticky && 'absolute bottom-0 left-0 z-20 w-full border-t border-gray-200 dark:border-gray-600',
  attrs.class as string,
)
</script>
