<template>
  <div class="vp-raw flex flex-wrap justify-center gap-2">
    <DdtwTooltip placement="top">
      <template #trigger>
        <DdtwButton>
          Tooltip top
        </DdtwButton>
      </template>
      <template #content>
        Tooltip on top
      </template>
    </DdtwTooltip>
    <DdtwTooltip placement="right">
      <template #trigger>
        <DdtwButton>
          Tooltip right
        </DdtwButton>
      </template>
      <template #content>
        Tooltip on right
      </template>
    </DdtwTooltip>
    <DdtwTooltip placement="bottom">
      <template #trigger>
        <DdtwButton>
          Tooltip bottom
        </DdtwButton>
      </template>
      <template #content>
        Tooltip on bottom
      </template>
    </DdtwTooltip>
    <DdtwTooltip placement="left">
      <template #trigger>
        <DdtwButton>
          Tooltip left
        </DdtwButton>
      </template>
      <template #content>
        Tooltip on left
      </template>
    </DdtwTooltip>
  </div>
</template>

<script setup>
import { DdtwButton, DdtwTooltip } from '../../../../src/index'
</script>
