<script setup>
import DdtwNavbarExample from './navbar/examples/DdtwNavbarExample.vue'
import DdtwNavbarExampleSolid from './navbar/examples/DdtwNavbarExampleSolid.vue'
import DdtwNavbarExampleActionButton from './navbar/examples/DdtwNavbarExampleActionButton.vue'
import DdtwNavbarExampleCustomMobileIcon from './navbar/examples/DdtwNavbarExampleCustomMobileIcon.vue'

</script>
# Vue Navbar – Flowbite
The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns

## Default navbar

<ddtw-navbar-example />
```vue
<template>
  <ddtw-navbar>
    <template #logo>
      <ddtw-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </ddtw-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <ddtw-navbar-collapse :is-show-menu="isShowMenu">
        <ddtw-navbar-link is-active link="#">
          Home
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Services
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Pricing
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Contact
        </ddtw-navbar-link>
      </ddtw-navbar-collapse>
    </template>
  </ddtw-navbar>
</template>

<script setup>
import {
  DdtwNavbar,
  DdtwNavbarCollapse,
  DdtwNavbarLink,
  DdtwNavbarLogo,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Solid navbar

<ddtw-navbar-example-solid />
```vue
<template>
  <ddtw-navbar solid>
    <template #logo>
      <ddtw-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </ddtw-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <ddtw-navbar-collapse :is-show-menu="isShowMenu">
        <ddtw-navbar-link is-active link="#">
          Home
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Services
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Pricing
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Contact
        </ddtw-navbar-link>
      </ddtw-navbar-collapse>
    </template>
  </ddtw-navbar>
</template>

<script setup>
import {
  DdtwNavbar,
  DdtwNavbarCollapse,
  DdtwNavbarLink,
  DdtwNavbarLogo,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Navbar with action button

<ddtw-navbar-example-action-button />
```vue
<template>
  <ddtw-navbar>
    <template #logo>
      <ddtw-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </ddtw-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <ddtw-navbar-collapse :is-show-menu="isShowMenu">
        <ddtw-navbar-link is-active link="#">
          Home
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Services
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Pricing
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Contact
        </ddtw-navbar-link>
      </ddtw-navbar-collapse>
    </template>
    <template #right-side>
      <ddtw-button>
        Get started
      </ddtw-button>
    </template>
  </ddtw-navbar>
</template>

<script setup>
import {
  DdtwButton,
  DdtwNavbar,
  DdtwNavbarCollapse,
  DdtwNavbarLink,
  DdtwNavbarLogo,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Navbar with custom mobile icon

<ddtw-navbar-example-custom-mobile-icon />
```vue
<template>
  <ddtw-navbar>
    <template #logo>
      <ddtw-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </ddtw-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <ddtw-navbar-collapse :is-show-menu="isShowMenu">
        <ddtw-navbar-link is-active link="#">
          Home
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Services
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Pricing
        </ddtw-navbar-link>
        <ddtw-navbar-link link="#">
          Contact
        </ddtw-navbar-link>
      </ddtw-navbar-collapse>
    </template>
    <template #menu-icon>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
  </ddtw-navbar>
</template>

<script setup>
import {
  DdtwNavbar,
  DdtwNavbarCollapse,
  DdtwNavbarLink,
  DdtwNavbarLogo,
} from '@datadayrepos/ddtw-vue'
</script>
```
