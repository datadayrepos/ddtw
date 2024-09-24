<template>
  <DdtwRadio
    v-model="picked"
    name="with-link"
    value="first"
  >
    I agree with the
    <DdtwA
      class="ml-1"
      href="#"
    >
      terms and conditions
    </DdtwA>.
  </DdtwRadio>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwA, DdtwRadio } from '../../../../src/index'

const picked = ref()
</script>
