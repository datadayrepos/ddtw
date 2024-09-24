<template>
  <div class="vp-raw flex flex-wrap justify-center gap-2">
    <DdtwTooltip theme="light">
      <template #trigger>
        <DdtwButton>
          Light Tooltip
        </DdtwButton>
      </template>
      <template #content>
        Tooltip content
      </template>
    </DdtwTooltip>
    <DdtwTooltip theme="dark">
      <template #trigger>
        <DdtwButton>
          Dark Tooltip
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
