<template>
  <div class="vp-raw">
    <DdtwSelect
      v-model="selected"
      :options="countries"
      label="Select a country"
      underline
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwSelect } from '../../../../src/index'

const selected = ref('')
const countries = [
  { name: 'United States', value: 'us' },
  { name: 'Canada', value: 'ca' },
  { name: 'France', value: 'fr' },
]
</script>
