<template>
  <div class="vp-raw flex flex-col items-center">
    <DdtwPagination
      v-model="currentPage"
      :total-items="100"
      class="mb-2"
    />
    <DdtwPagination
      v-model="currentPage"
      :total-items="100"
      large
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
