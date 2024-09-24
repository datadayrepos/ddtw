<template>
  <div class="vp-raw grid gap-2">
    <DdtwAlert
      icon
      type="info"
    >
      Info alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      icon
      type="warning"
    >
      Warning alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      icon
      type="danger"
    >
      Danger alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      icon
      type="dark"
    >
      Dark alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
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
