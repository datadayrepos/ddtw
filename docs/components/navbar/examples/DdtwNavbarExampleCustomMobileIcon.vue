<template>
  <div class="vp-raw">
    <DdtwNavbar>
      <template #logo>
        <DdtwNavbarLogo
          alt="Flowbite logo"
          image-url="https://flowbite.com/docs/images/logo.svg"
          link="https://www.google.com/"
        >
          Flowbite
        </DdtwNavbarLogo>
      </template>
      <template #default="{ isShowMenu }">
        <DdtwNavbarCollapse :is-show-menu="isShowMenu">
          <DdtwNavbarLink
            is-active
            link="#"
          >
            Home
          </DdtwNavbarLink>
          <DdtwNavbarLink link="#">
            Services
          </DdtwNavbarLink>
          <DdtwNavbarLink link="#">
            Pricing
          </DdtwNavbarLink>
          <DdtwNavbarLink link="#">
            Contact
          </DdtwNavbarLink>
        </DdtwNavbarCollapse>
      </template>
      <template #menu-icon>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </template>
    </DdtwNavbar>
  </div>
</template>

<script setup>
import {
  DdtwNavbar,
  DdtwNavbarCollapse,
  DdtwNavbarLink,
  DdtwNavbarLogo,
} from '../../../../src/index'
</script>
