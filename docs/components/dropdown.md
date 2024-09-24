<script setup>
import DdtwDropdownExamplePlacement from './dropdown/examples/DdtwDropdownExamplePlacement.vue'
import DdtwDropdownExampleAlignment from './dropdown/examples/DdtwDropdownExampleAlignment.vue'
import DdtwDropdownExampleListGroup from './dropdown/examples/DdtwDropdownExampleListGroup.vue'
import DdtwDropdownExampleTrigger from './dropdown/examples/DdtwDropdownExampleTrigger.vue'
</script>

# Vue Dropdown - Flowbite

#### Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements

---

:::tip
Original reference: [https://flowbite.com/docs/components/dropdowns/](https://flowbite.com/docs/components/dropdowns/)
:::

The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when focusing outside of the triggering element.

## Dropdown - placement

<ddtw-dropdown-example-placement />
```vue
<template>
  <ddtw-dropdown placement="top" text="Top">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
  <ddtw-dropdown placement="right" text="Right">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
  <ddtw-dropdown text="Bottom">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
  <ddtw-dropdown placement="left" text="Left">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
</template>

<script setup>
import { DdtwDropdown } from '@datadayrepos/ddtw-vue'
</script>
```

## Dropdown - alignment

The property controls how the dropdown is aligned with the trigger

<ddtw-dropdown-example-alignment />
```vue
<template>
  <ddtw-dropdown placement="top" text="Top" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
  <ddtw-dropdown placement="right" text="Right" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
  <ddtw-dropdown text="Bottom" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
  <ddtw-dropdown placement="left" text="Left" align-to-end>
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </ddtw-dropdown>
</template>

<script setup>
import { DdtwDropdown } from '@datadayrepos/ddtw-vue'
</script>
```

## Dropdown with List Group

<ddtw-dropdown-example-list-group />
```vue
<template>
  <ddtw-dropdown text="Menu">
    <ddtw-list-group>
      <ddtw-list-group-item>
        Profile
      </ddtw-list-group-item>
      <ddtw-list-group-item>
        Settings
      </ddtw-list-group-item>
      <ddtw-list-group-item>
        Messages
      </ddtw-list-group-item>
      <ddtw-list-group-item>
        Download
      </ddtw-list-group-item>
    </ddtw-list-group>
  </ddtw-dropdown>
</template>

<script setup>
import { DdtwDropdown, DdtwListGroup, DdtwListGroupItem } from '@datadayrepos/ddtw-vue'
</script>
```

## Dropdown - trigger

<ddtw-dropdown-example-trigger />
```vue
<template>
  <ddtw-dropdown>
    <template #trigger>
      <span>Custom Trigger Element</span>
    </template>
    <ddtw-list-group>
      <ddtw-list-group-item>
        Profile
      </ddtw-list-group-item>
      <ddtw-list-group-item>
        Settings
      </ddtw-list-group-item>
      <ddtw-list-group-item>
        Messages
      </ddtw-list-group-item>
      <ddtw-list-group-item>
        Download
      </ddtw-list-group-item>
    </ddtw-list-group>
  </ddtw-dropdown>
</template>

<script setup>
import { DdtwDropdown, DdtwListGroup, DdtwListGroupItem } from '@datadayrepos/ddtw-vue'
</script>
```

## Dropdown - close inside

<ddtw-dropdown-example-trigger />
```vue
<template>
  <ddtw-dropdown text="Bottom" close-inside>
    <list-group>
      <list-group-item>
        Profile
      </list-group-item>
      <list-group-item>
        Settings
      </list-group-item>
      <list-group-item>
        Messages
      </list-group-item>
      <list-group-item>
        Download
      </list-group-item>
    </list-group>
  </ddtw-dropdown>
</template>

<script setup>
import { DdtwDropdown, ListGroup, ListGroupItem } from '@datadayrepos/ddtw-vue'
</script>
```

## API

### Props
| Name     | Values | Default |
|----------|--------|---------|
| placement | `DropdownPlacement` | `'bottom'`  |
| text | `string` | `''` |
| transition | `string` | `''` |
| closeInside | `boolean` | `false` |
| alignToEnd | `boolean` | `false` |

### Events
| Name | Description            |
|------|------------------------|
| show | the dropdown is opened |
| hide | the dropdown is closed |

### Slots
| Name       | Description       |
|------------|-------------------|
| default    | dropdown content  |
| suffix     | button suffix     |
