<template>
  <div class="vp-raw grid gap-2">
    <DdtwToast closable>
      You've unlocked achievement.
    </DdtwToast>
    <DdtwToast
      closable
      type="warning"
    >
      Improve password difficulty.
    </DdtwToast>
    <DdtwToast
      closable
      type="success"
    >
      Item moved successfully.
    </DdtwToast>
    <DdtwToast
      closable
      type="danger"
    >
      Item has been deleted.
    </DdtwToast>
  </div>
</template>

<script setup>
import { DdtwToast } from '../../../../src/index'
</script>
