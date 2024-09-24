<template>
  <div class="vp-raw flex justify-start space-x-2">
    <span>
      <DdtwModalExample
        size="xs"
        trigger-text="SM Modal"
      />
    </span>
    <span>
      <DdtwModalExample
        size="md"
        trigger-text="MD Modal"
      />
    </span>
    <span>
      <DdtwModalExample
        size="xl"
        trigger-text="XL Modal"
      />
    </span>
    <span>
      <DdtwModalExample
        size="5xl"
        trigger-text="5XL Modal"
      />
    </span>
  </div>
</template>

<script setup>
import DdtwModalExample from './DdtwModalExample.vue'
</script>
