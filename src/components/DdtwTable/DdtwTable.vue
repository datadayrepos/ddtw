<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'

const props = defineProps({
  hoverable: {
    default: false,
    type: Boolean,
  },
  striped: {
    default: false,
    type: Boolean,
  },
  stripedColumns: {
    default: false,
    type: Boolean,
  },
})

provide('hoverable', props.hoverable)
provide('striped', props.striped)
provide('stripedColumns', props.stripedColumns)
</script>
