<template>
  <div class="vp-raw grid gap-2">
    <DdtwProgress
      :progress="25"
      label="Small"
      size="sm"
    />
    <DdtwProgress
      :progress="50"
      label="Medium"
      size="md"
    />
    <DdtwProgress
      :progress="75"
      label="Large"
      size="lg"
    />
    <DdtwProgress
      :progress="100"
      label="Extra Large"
      size="xl"
    />
  </div>
</template>

<script setup>
import { DdtwProgress } from '../../../../src/index'
</script>
