<template>
  <div class="vp-raw grid gap-2">
    <DdtwAlert type="info">
      Info alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert type="warning">
      Warning alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert type="danger">
      Danger alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert type="dark">
      Dark alert! Change a few things up and try submitting again.
    </DdtwAlert>
    <DdtwAlert type="success">
      Success alert! Change a few things up and try submitting again.
    </DdtwAlert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '../../../../src/index'
</script>
