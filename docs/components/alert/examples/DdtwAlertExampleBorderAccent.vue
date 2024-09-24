<template>
  <div class="vp-raw grid gap-2">
    <DdtwAlert
      class="border-t-4 rounded-none"
      icon
      type="info"
    >
      Info alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      class="border-t-4 rounded-none"
      icon
      type="warning"
    >
      Warning alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      class="border-t-4 rounded-none"
      icon
      type="danger"
    >
      Info Danger alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      class="border-t-4 rounded-none"
      icon
      type="dark"
    >
      Info Dark alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      class="border-t-4 rounded-none"
      icon
      type="success"
    >
      Success alert! Change a few things up and try submitting again.
    </DdtwAlert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '../../../../src/index'
</script>
