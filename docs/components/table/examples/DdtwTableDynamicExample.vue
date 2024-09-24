<template>
  <DdtwTableDynamic
    :headers="headers" :data-rows="allRows"
    @click="handleClick"
    @update:model-value="handleUpdate"
  />
</template>

<script setup lang="ts">
import { markRaw, ref } from 'vue'
import { CloseCircleOutlineIcon } from '@datadayrepos/icons'
import {
  DdtwButton,
  DdtwInput,
  DdtwTableDynamic,
} from '../../../../src/index'
import type { TableRowType } from '../../../../src/components/DdtwTable/types' // Adjust the import path to your project structure

// Define the headers for the table
const headers = ref(['Fruit', 'Quantity', 'Price per Unit', 'Supplier'])

// Define the rows for the table using the TextCell type
const allRows = ref<TableRowType[]>([
  [
    { text: 'Apples', type: 'text' },
    { text: '100', type: 'text' },
    { text: '$0.50', type: 'text' },
    { text: 'Fresh Farms', type: 'text' },
  ],
  [
    { text: 'Oranges', type: 'text' },
    { text: '80', type: 'text' },
    { text: '$0.60', type: 'text' },
    { text: 'Citrus Co.', type: 'text' },
  ],
  [
    { text: 'Bananas', type: 'text' },
    { text: '150', type: 'text' },
    { text: '$0.30', type: 'text' },
    { text: 'Tropical Fruits', type: 'text' },
  ],
  [
    { text: 'Grapes', type: 'text' },
    { text: '50', type: 'text' },
    { text: '$2.00', type: 'text' },
    {
      component: markRaw(DdtwInput), // Use the actual component name
      props: {
        data: 'row', // returns the full data of the row
        label: 'test input event',
        modelValue: 'red',
        placeholder: 'test input event',
      },
      // Append the custom component to the end of each row
      type: 'component',
    },
  ],
  [
    { text: 'Pineapples', type: 'text' },
    { text: '30', type: 'text' },
    { text: '$1.50', type: 'text' },
    {
      component: markRaw(DdtwButton), // Use the actual component name
      props: {
        color: 'red',
        data: 'row', // returns the full data of the row
        outline: true,
        text: 'Close',
      },
      slot: {
        component: markRaw(CloseCircleOutlineIcon),
        location: 'prefix',
      },
      // Append the custom component to the end of each row
      type: 'component',
    },
  ],
])

// Function to handle table actions (this can be expanded based on your needs)
function handleClick(e: any, p: any) {
  console.log('Table CLICK EVENT:', e)
  console.log('Table CLICK PROPS:', p)
}
function handleUpdate(e: any, p: any) {
  console.log('Table UPDATE EVENT:', e)
  console.log('Table UPDATE PROPS:', p)
}
</script>
