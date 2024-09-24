<script setup>
import DdtwAlertExampleBorder from './alert/examples/DdtwAlertExampleBorder.vue'
import DdtwAlertExampleBorderAccent from './alert/examples/DdtwAlertExampleBorderAccent.vue'
import DdtwAlertExampleCustomContent from './alert/examples/DdtwAlertExampleCustomContent.vue'
import DdtwAlertExampleDismissable from './alert/examples/DdtwAlertExampleDismissable.vue'
import DdtwAlertExampleIcon from './alert/examples/DdtwAlertExampleIcon.vue'
import DdtwAlertExampleList from './alert/examples/DdtwAlertExampleList.vue'
import DdtwAlertExampleType from './alert/examples/DdtwAlertExampleType.vue'
</script>

# Vue Alert - Flowbite

#### Show contextual information to your users using alert elements based on Tailwind CSS
The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

## Default alert
Use the following examples of alert components to show messages as feedback to your users.

<ddtw-alert-example-type />
```vue
<template>
  <div class="grid gap-2">
    <ddtw-alert type="info">
      Info alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert type="warning">
      Warning alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert type="danger">
      Danger alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert type="dark">
      Dark alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert type="success">
      Success alert! Change a few things up and try submitting again.
    </ddtw-alert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## Alerts with icon
You can also include a descriptive icon to complement the message inside the alert component with the following example.

<ddtw-alert-example-icon />
```vue
<template>
  <div class="grid gap-2">
    <ddtw-alert icon type="info">
      Info alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert icon type="warning">
      Warning alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert icon type="danger">
      Danger alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert icon type="dark">
      Dark alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert icon type="success">
      Success alert! Change a few things up and try submitting again.
    </ddtw-alert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## Bordered alerts
Use this example to add a border accent to the alert component instead of just a plain background.

<ddtw-alert-example-border />
```vue
<template>
  <div class="grid gap-2">
    <ddtw-alert border type="info">
      Info alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert border type="warning">
      Warning alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert border type="danger">
      Danger alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert border type="dark">
      Dark alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert border type="success">
      Success alert! Change a few things up and try submitting again.
    </ddtw-alert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## Border accent
Use this example to add a border accent on top of the alert component for further visual distinction.

<ddtw-alert-example-border-accent />
```vue
<template>
  <div class="vp-raw grid gap-2">
    <ddtw-alert class="border-t-4 rounded-none" icon type="info">
      Info alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert class="border-t-4 rounded-none" icon type="warning">
      Warning alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert class="border-t-4 rounded-none" icon type="danger">
      Info Danger alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert class="border-t-4 rounded-none" icon type="dark">
      Info Dark alert! Change a few things up and try submitting again.
    </ddtw-alert>
    <ddtw-alert class="border-t-4 rounded-none" icon type="success">
      Success alert! Change a few things up and try submitting again.
    </ddtw-alert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## Alerts with list
Use this example to show a list and a description inside an alert component.

<ddtw-alert-example-list />
```vue
<template>
  <div class="vp-raw grid gap-2">
    <ddtw-alert type="info">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </ddtw-alert>
    <ddtw-alert type="danger">
      <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 ml-4 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </ddtw-alert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## Dismissing
Use the following alert elements that are also dismissable.

<ddtw-alert-example-dismissable />
```vue
<script setup>
import { Alert } from '@datadayrepos/ddtw-vue'
</script>
<template>
  <div class="vp-raw grid gap-2">
    <ddtw-alert closable icon type="info">
      Info
    </ddtw-alert>
    <ddtw-alert closable icon type="warning">
      Warning
    </ddtw-alert>
    <ddtw-alert closable icon type="danger">
      Danger
    </ddtw-alert>
    <ddtw-alert closable icon type="dark">
      Dark
    </ddtw-alert>
    <ddtw-alert closable icon type="success">
      Success
    </ddtw-alert>
  </div>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## Additional content
The following alert components can be used if you wish to disclose more information inside the element.

<ddtw-alert-example-custom-content />

```vue
<template>
  <DdtwAlert type="info">
    <template #icon>
      <svg
        class="flex-shrink-0 w-4 h-4 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
    </template>
    <template #title>
      <h3 class="text-lg font-medium">
        This is a info alert
      </h3>
    </template>
    <template #default="{ onCloseClick }">
      <div class="mt-2 mb-4 text-sm">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <button
          type="button"
          class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="-ml-0.5 mr-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          View more
        </button>
        <button
          type="button"
          class="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800"
          data-dismiss-target="#alert-additional-content-1"
          aria-label="Close"
          @click="onCloseClick"
        >
          Dismiss
        </button>
      </div>
    </template>
  </DdtwAlert>
</template>

<script setup>
import { DdtwAlert } from '@datadayrepos/ddtw-vue'
</script>
```

## API

### Props
| Name     | Values                                        | Default |
|----------|-----------------------------------------------|---------|
| type     | `info`, `danger`, `success`,`warning`, `dark` | `info`  |
| closable | `boolean`                                     | `false` |
| icon     | `boolean`                                     | `false` |
| border   | `boolean`                                     | `false` |

### Events
| Name  | Description          |
|-------|----------------------|
| close | Close button pressed |

### Slots
| Name       | Description       |
|------------|-------------------|
| default    | alert content     |
| close-icon | custom close icon |
| icon       | custom icon       |
| title      | title content     |
