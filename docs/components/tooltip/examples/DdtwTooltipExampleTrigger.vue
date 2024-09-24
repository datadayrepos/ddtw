<template>
  <div class="vp-raw flex justify-center gap-2">
    <DdtwTooltip>
      <template #trigger>
        <DdtwButton>
          Tooltip hover
        </DdtwButton>
      </template>
      <template #content>
        Tooltip content
      </template>
    </DdtwTooltip>
    <DdtwTooltip trigger="click">
      <template #trigger>
        <DdtwButton>
          Tooltip click
        </DdtwButton>
      </template>
      <template #content>
        Tooltip content
      </template>
    </DdtwTooltip>
  </div>
</template>

<script lang="ts" setup>
import { DdtwButton, DdtwTooltip } from '../../../../src/index'
</script>
