<template>
  <div class="vp-raw">
    <DdtwFileInput
      v-model="file"
      label="Upload file"
    >
      <p class="!mt-1 text-sm text-gray-500 dark:text-gray-300">
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </DdtwFileInput>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwFileInput } from '../../../../src/index'

const file = ref(null)
</script>
