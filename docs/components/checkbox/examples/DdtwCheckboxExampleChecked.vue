<template>
  <div class="vp-raw">
    <DdtwCheckbox
      v-model="check"
      label="Checked checkbox"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwCheckbox } from '../../../../src/index'

const check = ref(true)
</script>
