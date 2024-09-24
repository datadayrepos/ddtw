<template>
  <div class="vp-raw">
    <DdtwRadio
      v-model="picked"
      disabled
      label="Disabled radio"
      name="radio-disabled"
      value="one"
    />
    <DdtwRadio
      v-model="picked"
      disabled
      label="Disabled checked"
      name="radio-disabled"
      value="two"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '../../../../src/index'

const picked = ref('two')
</script>
