<template>
  <div class="vp-raw">
    <DdtwNavbar solid>
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
