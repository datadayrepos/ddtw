<template>
  <div class="vp-raw">
    <DdtwInput
      v-model="name"
      label="First name"
      placeholder="enter your first name"
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
    </DdtwInput>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwA, DdtwInput } from '../../../../src/index'

const name = ref('')
</script>
