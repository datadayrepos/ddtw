<template>
  <div class="vp-raw">
    <DdtwRange
      v-model.number="value"
      disabled
      label="Disabled range"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRange } from '../../../../src/index'

const value = ref(10)
</script>
