<template>
  <div class="vp-raw flex flex-wrap gap-2">
    <DdtwButton
      href="https://google.com"
      target="_blank"
    >
      Google.com
    </DdtwButton>
    <!-- we're missing `vue-router` dependency for this to work -->
    <!-- <ddtw-button
      href="/pages/getting-started"
      tag="router-link"
    >
      Quickstart
    </ddtw-button> -->
  </div>
</template>

<script setup>
import { DdtwButton } from '../../../../src/index'
</script>
