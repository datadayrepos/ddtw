<template>
  <div class="vp-raw">
    <DdtwRadio
      v-model="picked"
      label="Radio 1"
      name="radio"
      value="one"
    />
    <DdtwRadio
      v-model="picked"
      label="Radio 2"
      name="radio"
      value="two"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '../../../../src/index'

const picked = ref()
</script>
