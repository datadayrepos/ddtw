<template>
  <div class="vp-raw">
    <DdtwSelect
      v-model="selected"
      :options="countries"
      label="Select a country"
      validation-status="success"
    />
    <hr class="mt-4 border-0">
    <DdtwSelect
      v-model="selected"
      :options="countries"
      label="Select a country"
      validation-status="error"
    >
      <template #validationMessage>
        Please select a country
      </template>
    </DdtwSelect>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwSelect } from '../../../../src/index'

const selected = ref('')
const countries = [
  { name: 'United States', value: 'us' },
  { name: 'Canada', value: 'ca' },
  { name: 'France', value: 'fr' },
]
</script>
