<template>
  <div class="vp-raw flex justify-center">
    <DdtwPagination
      v-model="currentPage"
      :total-pages="100"
      previous-label="<<<"
      next-label=">>>"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DdtwPagination } from '../../../../src/index'

const currentPage = ref<number>(1)
</script>
