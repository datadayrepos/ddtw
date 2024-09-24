<template>
  <ol
    :class="timelineClasses"
    v-bind="$attrs"
  >
    <slot />
  </ol>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import classNames from 'classnames'

const props = defineProps({
  horizontal: {
    default: false,
    type: Boolean,
  },
})

provide('horizontal', props.horizontal)

const defaultClasses = 'relative border-gray-200 dark:border-gray-700'
const verticalClasses = 'border-l'
const horizontalClasses = 'flex'

const timelineClasses = computed(() => classNames(
  defaultClasses,
  props.horizontal
    ? horizontalClasses
    : verticalClasses,
))
</script>
