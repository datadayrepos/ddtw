<template>
  <div>
    <DdtwSelect
      v-model="selected"
      :options="countries"
      disabled
      label="Select a country"
      placeholder="You can't select"
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
