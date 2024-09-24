<template>
  <div class="vp-raw">
    <DdtwSelect
      v-model="selected"
      :options="countries"
      label="Select a country"
    >
      <template #helper>
        We'll never share your details. Read our
        <DdtwA
          href="#"
          color="text-blue-600 dark:text-blue-500"
        >
          Privacy Policy
        </DdtwA>.
      </template>
    </DdtwSelect>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwA, DdtwSelect } from '../../../../src/index'

const selected = ref('')
const countries = [
  { name: 'United States', value: 'us' },
  { name: 'Canada', value: 'ca' },
  { name: 'France', value: 'fr' },
]
</script>
