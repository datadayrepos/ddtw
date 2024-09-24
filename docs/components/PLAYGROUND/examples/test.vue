<template>
  <DdtwSlotListener
    @click="onClick"
    @mouseleave="onMouseleave"
    @mouseenter="onMouseenter"
  >
    <DdtwButton>HELLO</DdtwButton>
  </DdtwSlotListener>
</template>

<script lang="ts" setup>
import { DdtwButton, DdtwSlotListener } from '../../../../src/index'

function onClick() {
  console.log('onClick from slot-listener')
}
function onMouseenter() {
  console.log('onMouseenter from slot-listener')
}
function onMouseleave() {
  console.log('onMouseleave from slot-listener')
}
</script>
