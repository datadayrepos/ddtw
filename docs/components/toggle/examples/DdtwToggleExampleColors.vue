<template>
  <div class="vp-raw flex justify-between flex-wrap gap-2">
    <DdtwToggle
      v-model="toggle1"
      label="Red"
      color="red"
    />
    <DdtwToggle
      v-model="toggle2"
      label="Green"
      color="green"
    />
    <DdtwToggle
      v-model="toggle3"
      label="Purple"
      color="purple"
    />
    <DdtwToggle
      v-model="toggle4"
      label="Yellow"
      color="yellow"
    />
    <DdtwToggle
      v-model="toggle5"
      label="Teal"
      color="teal"
    />
    <DdtwToggle
      v-model="toggle6"
      label="Orange"
      color="orange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwToggle } from '../../../../src/index'

const toggle1 = ref(true)
const toggle2 = ref(true)
const toggle3 = ref(true)
const toggle4 = ref(true)
const toggle5 = ref(true)
const toggle6 = ref(true)
</script>
