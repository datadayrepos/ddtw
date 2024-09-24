<template>
  <div class="vp-raw">
    <DdtwRating
      :rating="1"
      :scale="1"
      review-link="#"
      review-text="73 reviews"
    >
      <template #besideText>
        <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
          4.95
        </p>
      </template>
    </DdtwRating>
  </div>
</template>

<script setup>
import { DdtwRating } from '../../../../src/index'
</script>
