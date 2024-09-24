<template>
  <div class="vp-raw">
    <DdtwDropdown>
      <template #trigger>
        <span>Custom Trigger Element</span>
      </template>
      <DdtwListGroup>
        <DdtwListGroupItem>
          Profile
        </DdtwListGroupItem>
        <DdtwListGroupItem>
          Settings
        </DdtwListGroupItem>
        <DdtwListGroupItem>
          Messages
        </DdtwListGroupItem>
        <DdtwListGroupItem>
          Download
        </DdtwListGroupItem>
      </DdtwListGroup>
    </DdtwDropdown>
  </div>
</template>

<script setup>
import { DdtwDropdown, DdtwListGroup, DdtwListGroupItem } from '../../../../src/index'
</script>
