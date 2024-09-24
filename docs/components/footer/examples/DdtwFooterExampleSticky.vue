<template>
  <div class="vp-raw  relative">
    <div
      class="overflow-scroll bg-white dark:bg-gray-900"
      style="height: 200px"
    >
      <div
        class="px-20 py-5"
        style="height: 800px;"
      >
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Perferendis, ducimus laboriosam veritatis dolorem culpa fugiat eum voluptate fugit, enim eaque aspernatur optio saepe doloremque hic voluptates est dignissimos ex quae?</p>
      </div>
      <DdtwFooter
        class="rounded-none"
        sticky
      >
        <DdtwFooterCopyright
          by="Flowbite™"
          copyright-message="All Rights Reserved."
          href="https://flowbite.com/"
        />
        <DdtwFooterLinkGroup>
          <DdtwFooterLink href="#">
            About
          </DdtwFooterLink>
          <DdtwFooterLink href="#">
            Privacy Policy
          </DdtwFooterLink>
          <DdtwFooterLink href="#">
            Licensing
          </DdtwFooterLink>
          <DdtwFooterLink href="#">
            Contact
          </DdtwFooterLink>
        </DdtwFooterLinkGroup>
      </DdtwFooter>
    </div>
  </div>
</template>

<script setup>
import {
  DdtwFooter,
  DdtwFooterCopyright,
  DdtwFooterLink,
  DdtwFooterLinkGroup,
} from '../../../../src/index'
</script>
