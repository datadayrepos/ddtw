<template>
  <a
    :href="href"
    class="inline-flex items-center hover:underline" :class="[color]"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
type LinkProps = {
  href?: string
  color?: string
}

withDefaults(defineProps<LinkProps>(), {
  color: 'text-primary-600 dark:text-primary-500',
  href: '',
})
</script>
