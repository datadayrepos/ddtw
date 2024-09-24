<template>
  <form>
    <div class="vp-raw">
      <DdtwInput
        v-model="email"
        required
        placeholder="enter your email address"
        label="Email"
        name="email"
        type="email"
        autocomplete="username"
        validation-status="success"
        aria-required="true"
      >
        <template #prefix>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </template>
      </DdtwInput>
      <hr class="mt-4 border-0">
      <DdtwInput
        v-model="email"
        required
        placeholder="enter your email address"
        label="Email"
        autocomplete="username"
        validation-status="error"
      >
        <template #validationMessage>
          Please enter a valid email address
        </template>
      </DdtwInput>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwInput } from '../../../../src/index'

const email = ref('')
</script>
