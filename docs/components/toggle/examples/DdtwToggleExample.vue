<template>
  <div class="vp-raw">
    <DdtwToggle
      v-model="toggle"
      label="Toggle me"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwToggle } from '../../../../src/index'

const toggle = ref(false)
</script>
