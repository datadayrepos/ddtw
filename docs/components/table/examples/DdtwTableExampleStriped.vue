<template>
  <div class="vp-raw">
    <DdtwTable striped>
      <DdtwTableHead>
        <DdtwTableHeadCell>Product name</DdtwTableHeadCell>
        <DdtwTableHeadCell>Color</DdtwTableHeadCell>
        <DdtwTableHeadCell>Category</DdtwTableHeadCell>
        <DdtwTableHeadCell>Price</DdtwTableHeadCell>
        <DdtwTableHeadCell>
          <span class="sr-only">Edit</span>
        </DdtwTableHeadCell>
      </DdtwTableHead>
      <DdtwTableBody>
        <DdtwTableRow>
          <DdtwTableCell>Apple MacBook Pro 17"</DdtwTableCell>
          <DdtwTableCell>Sliver</DdtwTableCell>
          <DdtwTableCell>Laptop</DdtwTableCell>
          <DdtwTableCell>$2999</DdtwTableCell>
          <DdtwTableCell>
            <DdtwA href="#">
              Edit
            </DdtwA>
          </DdtwTableCell>
        </DdtwTableRow>
        <DdtwTableRow>
          <DdtwTableCell>Microsoft Surface Pro</DdtwTableCell>
          <DdtwTableCell>White</DdtwTableCell>
          <DdtwTableCell>Laptop PC</DdtwTableCell>
          <DdtwTableCell>$1999</DdtwTableCell>
          <DdtwTableCell>
            <DdtwA href="#">
              Edit
            </DdtwA>
          </DdtwTableCell>
        </DdtwTableRow>
        <DdtwTableRow>
          <DdtwTableCell>Magic Mouse 2</DdtwTableCell>
          <DdtwTableCell>Black</DdtwTableCell>
          <DdtwTableCell>Accessories</DdtwTableCell>
          <DdtwTableCell>$99</DdtwTableCell>
          <DdtwTableCell>
            <DdtwA href="#">
              Edit
            </DdtwA>
          </DdtwTableCell>
        </DdtwTableRow>
      </DdtwTableBody>
    </DdtwTable>
  </div>
</template>

<script setup>
import {
  DdtwA,
  DdtwTable,
  DdtwTableBody,
  DdtwTableCell,
  DdtwTableHead,
  DdtwTableHeadCell,
  DdtwTableRow,
} from '../../../../src/index'
</script>
