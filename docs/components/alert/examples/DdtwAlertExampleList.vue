<template>
  <div class="vp-raw grid gap-2">
    <DdtwAlert type="info">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </DdtwAlert>
    <DdtwAlert type="danger">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </DdtwAlert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '../../../../src/index'
</script>
