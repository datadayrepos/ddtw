<template>
  <div class="vp-raw grid gap-2">
    <DdtwToast>
      You've unlocked achievement.
    </DdtwToast>
    <DdtwToast type="warning">
      Improve password difficulty.
    </DdtwToast>
    <DdtwToast type="success">
      Item moved successfully.
    </DdtwToast>
    <DdtwToast type="danger">
      Item has been deleted.
    </DdtwToast>
  </div>
</template>

<script setup>
import { DdtwToast } from '../../../../src/index'
</script>
