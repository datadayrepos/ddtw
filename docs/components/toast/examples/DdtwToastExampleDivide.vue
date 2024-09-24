<template>
  <div class="vp-raw grid gap-2">
    <DdtwToast divide>
      You've unlocked achievement.
    </DdtwToast>
    <DdtwToast
      divide
      type="warning"
    >
      Improve password difficulty.
    </DdtwToast>
    <DdtwToast
      divide
      type="success"
    >
      Item moved successfully.
    </DdtwToast>
    <DdtwToast
      divide
      type="danger"
    >
      Item has been deleted.
    </DdtwToast>
  </div>
</template>

<script setup>
import { DdtwToast } from '../../../../src/index'
</script>
