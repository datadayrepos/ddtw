<template>
  <div class="vp-raw grid gap-2">
    <DdtwProgress
      label="Default"
      :progress="12.5"
    />
    <DdtwProgress
      color="dark"
      label="Dark"
      :progress="25"
    />
    <DdtwProgress
      color="blue"
      label="Blue"
      :progress="37.5"
    />
    <DdtwProgress
      color="red"
      label="Red"
      :progress="50"
    />
    <DdtwProgress
      color="green"
      label="Green"
      :progress="62.5"
    />
    <DdtwProgress
      color="yellow"
      label="Yellow"
      :progress="75"
    />
    <DdtwProgress
      color="indigo"
      label="Indigo"
      :progress="87.5"
    />
    <DdtwProgress
      color="purple"
      label="Purple"
      :progress="100"
    />
  </div>
</template>

<script setup>
import { DdtwProgress } from '../../../../src/index'
</script>
