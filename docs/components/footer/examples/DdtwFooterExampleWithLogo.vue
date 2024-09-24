<template>
  <div class="vp-raw">
    <DdtwFooter footer-type="logo">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <DdtwFooterBrand
            alt="Flowbite Logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <DdtwFooterLinkGroup class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <DdtwFooterLink href="/">
              About
            </DdtwFooterLink>
            <DdtwFooterLink href="/">
              Privacy Policy
            </DdtwFooterLink>
            <DdtwFooterLink href="/">
              Licensing
            </DdtwFooterLink>
            <DdtwFooterLink href="/">
              Contact
            </DdtwFooterLink>
          </DdtwFooterLinkGroup>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        <DdtwFooterCopyright
          by="Flowbite™"
          href="/"
        />
      </div>
    </DdtwFooter>
  </div>
</template>

<script setup>
import {
  DdtwFooter,
  DdtwFooterBrand,
  DdtwFooterCopyright,
  DdtwFooterLink,
  DdtwFooterLinkGroup,
} from '../../../../src/index'
</script>
