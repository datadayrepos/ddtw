<template>
  <div class="vp-raw">
    <DdtwP class="mb-2">
      Technology {{ picked }}
    </DdtwP>

    <DdtwListGroup>
      <DdtwListGroupItem>
        <DdtwRadio
          v-model="picked"
          label="Svelte"
          name="list-radio"
          value="Svelte"
        />
      </DdtwListGroupItem>
      <DdtwListGroupItem>
        <DdtwRadio
          v-model="picked"
          label="Vue JS"
          name="list-radio"
          value="Vue JS"
        />
      </DdtwListGroupItem>
      <DdtwListGroupItem>
        <DdtwRadio
          v-model="picked"
          label="React"
          name="list-radio"
          value="React"
        />
      </DdtwListGroupItem>
      <DdtwListGroupItem>
        <DdtwRadio
          v-model="picked"
          label="Angular"
          name="list-radio"
          value="Angular"
        />
      </DdtwListGroupItem>
    </DdtwListGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwListGroup, DdtwListGroupItem, DdtwP, DdtwRadio } from '../../../../src/index'

const picked = ref('Vue JS')
</script>
