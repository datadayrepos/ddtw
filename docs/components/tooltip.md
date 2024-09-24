<script setup>
import DdtwTooltipExample from './tooltip/examples/DdtwTooltipExample.vue'
import DdtwTooltipExamplePosition from './tooltip/examples/DdtwTooltipExamplePosition.vue'
import DdtwTooltipExampleStyle from './tooltip/examples/DdtwTooltipExampleStyle.vue'
import DdtwTooltipExampleTrigger from './tooltip/examples/DdtwTooltipExampleTrigger.vue'
</script>
# Vue Tooltip - Flowbite

## Demo

<ddtw-tooltip-example />
```vue
<template>
  <ddtw-tooltip>
    <template #trigger>
      <ddtw-button>
        Default Tooltip
      </ddtw-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </ddtw-tooltip>
</template>

<script setup>
import { DdtwButton, DdtwTooltip } from '@datadayrepos/ddtw-vue'
</script>
```

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `tooltip-light` or `tooltip-dark` attribute.

<ddtw-tooltip-example-style />
```vue
<template>
  <ddtw-tooltip theme="light">
    <template #trigger>
      <ddtw-button>
        Light Tooltip
      </ddtw-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </ddtw-tooltip>
  <ddtw-tooltip theme="dark">
    <template #trigger>
      <ddtw-button>
        Dark Tooltip
      </ddtw-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </ddtw-tooltip>
</template>

<script setup>
import { DdtwButton, DdtwTooltip } from '@datadayrepos/ddtw-vue'
</script>
```

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using placement attribute with `top`, `top-start` , `top-end`, `bottom`, `bottom-start`, `bottom-end`, `right`, `right-start`, `right-end`, `left`, `left-start`, `left-end`, `auto`, `auto-start`,  `auto-end`.
The default value is: `top`

<ddtw-tooltip-example-position />
```vue
<template>
  <ddtw-tooltip placement="top">
    <template #trigger>
      <ddtw-button>
        Tooltip top
      </ddtw-button>
    </template>
    <template #content>
      Tooltip on top
    </template>
  </ddtw-tooltip>
  <ddtw-tooltip placement="right">
    <template #trigger>
      <ddtw-button>
        Tooltip right
      </ddtw-button>
    </template>
    <template #content>
      Tooltip on right
    </template>
  </ddtw-tooltip>
  <ddtw-tooltip placement="bottom">
    <template #trigger>
      <ddtw-button>
        Tooltip bottom
      </ddtw-button>
    </template>
    <template #content>
      Tooltip on bottom
    </template>
  </ddtw-tooltip>
  <ddtw-tooltip placement="left">
    <template #trigger>
      <ddtw-button>
        Tooltip left
      </ddtw-button>
    </template>
    <template #content>
      Tooltip on left
    </template>
  </ddtw-tooltip>
</template>

<script setup>
import { DdtwButton, DdtwTooltip } from '@datadayrepos/ddtw-vue'
</script>
```

## triggerType

You can choose the triggering event by using the `hover` or `click` attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `click`.

<ddtw-tooltip-example-trigger />
```vue
<template>
  <ddtw-tooltip>
    <template #trigger>
      <ddtw-button>
        Tooltip hover
      </ddtw-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </ddtw-tooltip>
  <ddtw-tooltip trigger="click">
    <template #trigger>
      <ddtw-button>
        Tooltip click
      </ddtw-button>
    </template>
    <template #content>
      Tooltip content
    </template>
  </ddtw-tooltip>
</template>

<script lang="ts" setup>
import { DdtwButton, DdtwTooltip } from '@datadayrepos/ddtw-vue'
</script>
```
