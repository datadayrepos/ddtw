<template>
  <div class="vp-raw">
    <DdtwTextarea
      v-model="message"
      :rows="4"
      label="Your message"
      placeholder="Write your message..."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTextarea } from '../../../../src/index'

const message = ref('')
</script>
