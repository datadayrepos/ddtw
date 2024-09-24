<template>
  <div class="vp-raw flex justify-start space-x-2">
    <DdtwModalExample trigger-text="Escapable" />
    <DdtwModalExample
      not-escapable
      trigger-text="Not Escapable"
    />
  </div>
</template>

<script setup>
import DdtwModalExample from './DdtwModalExample.vue'
</script>
