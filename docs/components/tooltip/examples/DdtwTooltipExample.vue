<template>
  <div class="vp-raw">
    <DdtwTooltip>
      <template #trigger>
        <DdtwButton>
          Default Tooltip
        </DdtwButton>
      </template>
      <template #content>
        Tooltip content
      </template>
    </DdtwTooltip>
  </div>
</template>

<script setup>
import { DdtwButton, DdtwTooltip } from '../../../../src/index'
</script>
