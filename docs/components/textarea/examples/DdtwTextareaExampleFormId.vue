<template>
  <div class="flex flex-col gap-y-4">
    <form
      id="ddtw-textarea-example-form-id"
      class="vp-raw"
      @submit.prevent
    >
      <DdtwInput
        v-model="inputMessage"
        label="Input inside the form"
        placeholder="Write your message..."
      />
      <DdtwButton
        class="mt-2"
        type="submit"
      >
        Validate
      </DdtwButton>
    </form>
    <DdtwTextarea
      v-model="textareaMessage"
      label="Textarea outside the form"
      form="ddtw-textarea-example-form-id"
      minlength="20"
      required
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwButton, DdtwInput, DdtwTextarea } from '../../../../src/index'

const inputMessage = ref('')
const textareaMessage = ref('')
</script>
