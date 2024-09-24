<template>
  <div class="vp-raw flex gap-2 flex-wrap">
    <DdtwDropdown
      placement="top"
      text="Top"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </DdtwDropdown>
    <DdtwDropdown
      placement="right"
      text="Right"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </DdtwDropdown>
    <DdtwDropdown
      text="Bottom"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </DdtwDropdown>
    <DdtwDropdown
      placement="left"
      text="Left"
      align-to-end
    >
      <div class="w-52">
        <p class="p-2">
          Dropdown content line one
        </p>
        <p class="p-2">
          Dropdown content line two
        </p>
        <p class="p-2">
          Dropdown content line three
        </p>
        <p class="p-2">
          Dropdown content line four
        </p>
      </div>
    </DdtwDropdown>
  </div>
</template>

<script setup>
import { DdtwDropdown } from '../../../../src/index'
</script>
