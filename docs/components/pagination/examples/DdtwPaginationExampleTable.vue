<template>
  <div class="vp-raw flex flex-col items-center justify-center text-center">
    <DdtwPagination
      v-model="currentPageA"
      layout="table"
      :per-page="20"
      :total-items="998"
      class="mb-2"
    />
    <DdtwPagination
      v-model="currentPageB"
      layout="table"
      :per-page="100"
      :total-items="750"
      large
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwPagination } from '../../../../src/index'

const currentPageA = ref<number>(1)
const currentPageB = ref<number>(1)
</script>
