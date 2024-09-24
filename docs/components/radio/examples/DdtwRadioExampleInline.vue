<template>
  <div class="vp-raw flex w-96">
    <DdtwRadio
      v-model="picked"
      label="Inline 1"
      value="first"
    />
    <DdtwRadio
      v-model="picked"
      label="Inline 2"
      value="second"
    />
    <DdtwRadio
      v-model="picked"
      label="Inline 3"
      value="third"
    />
    <DdtwRadio
      v-model="picked"
      label="Inline 4"
      value="fourth"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwRadio } from '../../../../src/index'

const picked = ref('first')
</script>
