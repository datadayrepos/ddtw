<script setup>
import DdtwTabsExample from './tabs/examples/DdtwTabsExample.vue'
import DdtwTabsExampleInteraction from './tabs/examples/DdtwTabsExampleInteraction.vue'
import DdtwTabsExampleDirective from './tabs/examples/DdtwTabsExampleDirective.vue'
import DdtwTabsExamplePills from './tabs/examples/DdtwTabsExamplePills.vue'
import DdtwTabsExampleUnderline from './tabs/examples/DdtwTabsExampleUnderline.vue'
</script>

# Vue Tabs - Flowbite

#### Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container

---

:::tip
Original reference: [https://flowbite.com/docs/components/tabs/](https://flowbite.com/docs/components/tabs/)
:::

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Prop - variant (default)

<ddtw-tabs-example />
```vue
<template>
  <ddtw-tabs v-model="activeTab" class="p-5">
    <ddtw-tab name="first" title="First">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="second" title="Second">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="third" title="Third">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </ddtw-tab>
  </ddtw-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTab, DdtwTabs } from '@datadayrepos/ddtw-vue'

const activeTab = ref('first')
</script>
```

## Prop - variant (underline)

<ddtw-tabsExample-underline />
```vue
<template>
  <ddtw-tabs v-model="activeTab" variant="underline" class="p-5">
    <ddtw-tab name="first" title="First">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="second" title="Second">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="third" title="Third">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </ddtw-tab>
  </ddtw-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTab, DdtwTabs } from '@datadayrepos/ddtw-vue'

const activeTab = ref('first')
</script>
```

## Prop - variant (pills)

<ddtw-tabs-example-pills />
```vue
<template>
  <ddtw-tabs v-model="activeTab" variant="pills" class="p-5">
    <ddtw-tab name="first" title="First" >
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="second" title="Second">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="third" title="Third">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </ddtw-tab>
  </ddtw-tabs>
 </div>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTab, DdtwTabs } from '@datadayrepos/ddtw-vue'

const activeTab = ref('first')
</script>
```

## Prop - directive

Use this props if you want to control which directive to use for rendering every tab content

<ddtw-tabs-example-directive />
```vue
<template>
  <ddtw-tabs v-model="activeTab" directive="show" class="p-5">
    <ddtw-tab name="first" title="First">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="second" title="Second">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="third" title="Third">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </ddtw-tab>
  </ddtw-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTab, DdtwTabs } from '@datadayrepos/ddtw-vue'

const activeTab = ref('first')
</script>
```

## Tab pane interaction

You can add `@click:pane` to Tabs component to intercept click on tab pane.

<ddtw-tabs-example-interaction />
```vue
<template>
  <ddtw-tabs @click:pane="handlePaneClick" v-model="activeTab" class="p-5">
    <ddtw-tab name="first" title="First">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="second" title="Second">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="third" title="Third">
      Lorem ipsum dolor...
    </ddtw-tab>
    <ddtw-tab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor...
    </ddtw-tab>
  </ddtw-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { DdtwTab, DdtwTabs } from '@datadayrepos/ddtw-vue'

const activeTab = ref('first')

const handlePaneClick = () => { console.log('Click!') }
</script>
```

## API

### Props
| Name       | Values                         | Default   |
|------------|--------------------------------|-----------|
| directive  | `if`, `show`                   | `if`      |
| modelValue | `string`                       | `''`      |
| variant    | `default`, `underline`, `pill` | `default` |
