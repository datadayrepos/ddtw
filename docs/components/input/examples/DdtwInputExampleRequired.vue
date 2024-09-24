<template>
  <div class="vp-raw">
    <DdtwInput
      v-model="name"
      label="First name"
      placeholder="enter your first name"
      required
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '../../../../src/index'

const name = ref('')
</script>
