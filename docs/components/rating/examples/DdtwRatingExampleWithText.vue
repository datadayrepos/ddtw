<template>
  <div class="vp-raw">
    <DdtwRating :rating="4.75">
      <template #besideText>
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.75 out of 5
        </p>
      </template>
    </DdtwRating>
  </div>
</template>

<script setup>
import { DdtwRating } from '../../../../src/index'
</script>
