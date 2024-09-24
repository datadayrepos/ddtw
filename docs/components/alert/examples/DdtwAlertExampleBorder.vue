<template>
  <div class="vp-raw grid gap-2">
    <DdtwAlert
      border
      type="info"
    >
      Info alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      border
      type="warning"
    >
      Warning alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      border
      type="danger"
    >
      Info Danger alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      border
      type="dark"
    >
      Info Dark alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert
      border
      type="success"
    >
      Success alert! Change a few things up and try submitting again.
    </DdtwAlert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '../../../../src/index'
</script>
