<template>
  <div class="flex flex-wrap justify-start gap-2 vp-raw">
    <span>
      <DdtwModalExample
        position="top-start"
        trigger-text="Top Start"
      />
    </span>
    <span>
      <DdtwModalExample
        position="top-center"
        trigger-text="Top Center"
      />
    </span>
    <span>
      <DdtwModalExample
        position="top-end"
        trigger-text="Top End"
      />
    </span>
    <span>
      <DdtwModalExample
        position="center-start"
        trigger-text="Center Start"
      />
    </span>
    <span>
      <DdtwModalExample
        position="center"
        trigger-text="Center"
      />
    </span>
    <span>
      <DdtwModalExample
        position="center-end"
        trigger-text="Center End"
      />
    </span>
    <span>
      <DdtwModalExample
        position="bottom-start"
        trigger-text="Bottom Start"
      />
    </span>
    <span>
      <DdtwModalExample
        position="bottom-center"
        trigger-text="Bottom Center"
      />
    </span>
    <span>
      <DdtwModalExample
        position="bottom-end"
        trigger-text="Bottom End"
      />
    </span>
  </div>
</template>

<script setup>
import DdtwModalExample from './DdtwModalExample.vue'
</script>
