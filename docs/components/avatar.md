<script setup>
import DdtwAvatarExample from './avatar/examples/DdtwAvatarExample.vue'
import DdtwAvatarExampleAlt from './avatar/examples/DdtwAvatarExampleAlt.vue'
import DdtwAvatarExampleBordered from './avatar/examples/DdtwAvatarExampleBordered.vue'
import DdtwAvatarExampleIcon from './avatar/examples/DdtwAvatarExampleIcon.vue'
import DdtwAvatarExampleInitials from './avatar/examples/DdtwAvatarExampleInitials.vue'
import DdtwAvatarExamplePlaceholder from './avatar/examples/DdtwAvatarExamplePlaceholder.vue'
import DdtwAvatarExampleSize from './avatar/examples/DdtwAvatarExampleSize.vue'
import DdtwAvatarExampleStack from './avatar/examples/DdtwAvatarExampleStack.vue'
import DdtwAvatarExampleStatus from './avatar/examples/DdtwAvatarExampleStatus.vue'
import DdtwAvatarExampleStatusPosition from './avatar/examples/DdtwAvatarExampleStatusPosition.vue'
</script>
# Vue Avatar - Flowbite
Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes

## Default avatar
Use this example to create a circle and rounded avatar on an image element.

<ddtw-avatar-example />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <ddtw-avatar img="/images/avatar-1.jpg" />
    <ddtw-avatar img="/images/avatar-1.jpg" rounded />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Bordered
Use this example to create a circle and rounded avatar on an image element.

<ddtw-avatar-example-bordered />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <ddtw-avatar bordered img="/images/avatar-1.jpg" />
    <ddtw-avatar bordered img="/images/avatar-1.jpg" rounded />
  </div></template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Dot indicator
Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

<ddtw-avatar-example-status />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <ddtw-avatar img="/images/avatar-1.jpg" status="online" />
    <ddtw-avatar img="/images/avatar-1.jpg" status="busy" />
    <ddtw-avatar img="/images/avatar-1.jpg" status="away" />
    <ddtw-avatar img="/images/avatar-1.jpg" status="offline" />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Dot indicator position

<ddtw-avatar-example-status-position />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      status-position="top-left"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="top-left"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      status-position="top-right"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="top-right"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      status-position="bottom-left"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="bottom-left"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      status-position="bottom-right"
      status="online"
    />
    <ddtw-avatar
      img="/images/avatar-1.jpg"
      rounded
      status-position="bottom-right"
      status="online"
    />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Sizes
Choose from multiple sizing options for the avatar component from this example.

<ddtw-avatar-example-size />
```vue
<template>
  <div class="flex justify-center items-center space-x-4">
    <ddtw-avatar size="xs" img="/images/avatar-1.jpg" />
    <ddtw-avatar size="sm" img="/images/avatar-1.jpg" />
    <ddtw-avatar size="md" img="/images/avatar-1.jpg" />
    <ddtw-avatar size="lg" img="/images/avatar-1.jpg" />
    <ddtw-avatar size="xl" img="/images/avatar-1.jpg" />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Alternative text

<ddtw-avatar-example-alt />
```vue
<template>
  <div class="flex justify-center">
    <ddtw-avatar alt="Alternative text" img="/images/avatar-1.jpg" />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Stacked avatars
Use this example if you want to stack a group of users by overlapping the avatar components.

<ddtw-avatar-example-stack />
```vue
<template>
  <div class="grid gap-2">
    <stacked-avatars>
      <ddtw-avatar img="/images/avatar-1.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-2.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-3.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-4.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-5.jpg" rounded stacked />
    </stacked-avatars>
    <stacked-avatars>
      <ddtw-avatar img="/images/avatar-1.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-2.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-3.jpg" rounded stacked />
      <ddtw-avatar img="/images/avatar-4.jpg" rounded stacked />
      <stacked-avatars-counter href="#" total="99" />
    </stacked-avatars>
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Placeholder icon

<ddtw-avatar-example-placeholder />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <ddtw-avatar />
    <ddtw-avatar rounded />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Placeholder initials

<ddtw-avatar-example-initials />
```vue
<template>
  <div class="flex justify-center space-x-4">
    <ddtw-avatar initials="JD" />
    <ddtw-avatar initials="JD" rounded />
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```

## Alternative Placeholder Icon
Use this example if you'd like to specify a different placeholder icon. Specify a `#placeholder` template slot to override the default placeholder icon. This has no effect if using initials.

<ddtw-avatar-example-icon />
```vue
<template>
  <div class="vp-raw flex justify-center space-x-4">
    <ddtw-avatar>
      <template #placeholder>
        <svg class="w-12 h-12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
    </ddtw-avatar>
    <ddtw-avatar rounded>
      <template #placeholder>
        <svg class="w-12 h-12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
    </ddtw-avatar>
  </div>
</template>

<script setup>
import { DdtwAvatar } from '@datadayrepos/ddtw-vue'
</script>
```
