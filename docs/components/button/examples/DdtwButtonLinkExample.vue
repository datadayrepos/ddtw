<template>
  <div class="vp-raw inline-flex align-center gap-2 flex-wrap">
    <DdtwButton
      color="default"
      href="https://google.com"
      target="_blank"
    >
      Default
    </DdtwButton>
    <DdtwButton
      href="/about"
      tag="router-link"
    >
      Router link
    </DdtwButton>
  </div>
</template>

<script setup>
import { DdtwButton } from '../../../../src/index'
</script>
