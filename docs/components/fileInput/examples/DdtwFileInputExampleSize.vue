<template>
  <div class="vp-raw grid gap-2">
    <DdtwFileInput
      v-model="file"
      size="xs"
      label="Small size"
    />
    <DdtwFileInput
      v-model="file"
      size="sm"
      label="Default size"
    />
    <DdtwFileInput
      v-model="file"
      size="lg"
      label="Large size"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '../../../../src/index'

const file = ref(null)
</script>
