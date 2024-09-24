<template>
  <DdtwCheckbox v-model="check">
    <DdtwA href="#">
      I agree with the terms and conditions.
    </DdtwA>
  </DdtwCheckbox>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwA, DdtwCheckbox } from '../../../../src/index'

const check = ref(false)
</script>
