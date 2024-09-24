<template>
  <form
    class="vp-raw"
    @submit.prevent
  >
    <DdtwTextarea
      v-model="message"
      label="Textarea with minlength 10 and maxlength 20"
      minlength="10"
      maxlength="20"
      required
    />
    <DdtwTextarea
      v-model="message"
      label="Disabled textarea"
      placeholder="Cannot be edited"
      disabled
    />
    <DdtwTextarea
      v-model="message"
      label="Readonly textarea"
      placeholder="Cannot be edited"
      readonly
    />
    <DdtwButton type="submit">
      Validate
    </DdtwButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwButton, DdtwTextarea } from '../../../../src/index'

const message = ref('Edit me!')
</script>
