<template>
  <div class="vp-raw grid gap-2">
    <DdtwRating
      :rating="4"
      size="sm"
    />
    <DdtwRating
      :rating="4"
      size="md"
    />
    <DdtwRating
      :rating="4"
      size="lg"
    />
  </div>
</template>

<script setup>
import { DdtwRating } from '../../../../src/index'
</script>
