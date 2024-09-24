<template>
  <div class="vp-raw grid gap-3">
    <DdtwRange
      v-model.number="value1"
      label="Small range"
      size="sm"
    />
    <DdtwRange
      v-model.number="value2"
      label="Medium range"
      size="md"
    />
    <DdtwRange
      v-model.number="value3"
      label="Large range"
      size="lg"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRange } from '../../../../src/index'

const value1 = ref(10)
const value2 = ref(10)
const value3 = ref(10)
</script>
