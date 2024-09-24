<template>
  <div class="vp-raw grid gap-2">
    <DdtwAlert
      closable
      icon
      type="info"
    >
      Info
    </DdtwAlert>
    <DdtwAlert
      closable
      icon
      type="warning"
    >
      Warning
    </DdtwAlert>
    <DdtwAlert
      closable
      icon
      type="danger"
    >
      Danger
    </DdtwAlert>
    <DdtwAlert
      closable
      icon
      type="dark"
    >
      Dark
    </DdtwAlert>
    <DdtwAlert
      closable
      icon
      type="success"
    >
      Success
    </DdtwAlert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '../../../../src/index'
</script>
