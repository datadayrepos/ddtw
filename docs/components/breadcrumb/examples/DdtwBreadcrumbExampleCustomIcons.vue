<template>
  <div class="vp-raw">
    <DdtwBreadcrumb>
      <DdtwBreadcrumbItem
        home
        href="#"
      >
        <template #home-icon>
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
        </template>
        Home
      </DdtwBreadcrumbItem>
      <DdtwBreadcrumbItem href="#">
        <template #arrow-icon>
          <svg
            class="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
        </template>
        Projects
      </DdtwBreadcrumbItem>
      <DdtwBreadcrumbItem>
        <template #arrow-icon>
          <svg
            class="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          /></svg>
        </template>
        Flowbite
      </DdtwBreadcrumbItem>
    </DdtwBreadcrumb>
  </div>
</template>

<script setup>
import { DdtwBreadcrumb, DdtwBreadcrumbItem } from '../../../../src/index'
</script>
