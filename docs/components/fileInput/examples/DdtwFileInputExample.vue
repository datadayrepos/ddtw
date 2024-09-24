<template>
  <div class="vp-raw">
    <DdtwFileInput
      v-model="file"
      label="Upload file"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '../../../../src/index'

const file = ref(null)
</script>
