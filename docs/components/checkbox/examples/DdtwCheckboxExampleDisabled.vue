<template>
  <div class="vp-raw">
    <DdtwCheckbox
      v-model="check"
      disabled
      label="Disabled checkbox"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwCheckbox } from '../../../../src/index'

const check = ref(false)
</script>
