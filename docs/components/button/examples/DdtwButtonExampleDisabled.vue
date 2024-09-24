<template>
  <div class="vp-raw flex flex-wrap gap-2">
    <DdtwButton
      color="default"
      disabled
    >
      Default
    </DdtwButton>
    <DdtwButton
      color="default"
      outline
      disabled
    >
      Default outline
    </DdtwButton>
    <DdtwButton
      gradient="red"
      disabled
    >
      Red gradient
    </DdtwButton>
    <DdtwButton
      gradient="red-yellow"
      disabled
    >
      Red to yellow gradient
    </DdtwButton>
    <DdtwButton
      gradient="red-yellow"
      outline
      disabled
    >
      Red to yellow outline
    </DdtwButton>
  </div>
</template>

<script setup>
import { DdtwButton } from '../../../../src/index'
</script>
