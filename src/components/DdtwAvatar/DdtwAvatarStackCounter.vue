<template>
  <a
    class="relative flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800"
    :href="href"
  >+{{ total }}</a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    default: '#',
    type: String,
  },
  total: {
    default: 1,
    type: Number,
  },
})
</script>
