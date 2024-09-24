<script setup>
import DdtwTimelineExample from './timeline/examples/DdtwTimelineExample.vue'
import DdtwTimelineExampleWithIcons from './timeline/examples/DdtwTimelineExampleWithIcons.vue'
import DdtwTimelineExampleHorizontal from './timeline/examples/DdtwTimelineExampleHorizontal.vue'
</script>
# Vue Timeline - Flowbite

## Default timeline usage

<ddtw-timeline-example />
```vue
<template>
  <ddtw-timeline>
    <ddtw-timeline-item>
      <ddtw-timeline-point />
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2020
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
    <ddtw-timeline-item>
      <ddtw-timeline-point />
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2020
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
    <ddtw-timeline-item>
      <ddtw-timeline-point />
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2020
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
  </ddtw-timeline>
</template>

<script setup>
import {
  DdtwTimeline,
  DdtwTimelineBody,
  DdtwTimelineContent,
  DdtwTimelineItem,
  DdtwTimelinePoint,
  DdtwTimelineTime,
  DdtwTimelineTitle,
} from '@datadayrepos/ddtw-vue'
</script>
```

## Timeline with icons
You can add icons by passing svg icons as slot to `<ddtw-timeline-point>` component

<ddtw-timeline-example-with-icons />
```vue
<template>
  <ddtw-timeline class="vp-raw">
    <ddtw-timeline-item>
      <ddtw-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </ddtw-timeline-point>
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2022
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
    <ddtw-timeline-item>
      <ddtw-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </ddtw-timeline-point>
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2022
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
    <ddtw-timeline-item>
      <ddtw-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </ddtw-timeline-point>
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2022
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
  </ddtw-timeline>
</template>

<script setup>
import {
  DdtwTimeline,
  DdtwTimelineBody,
  DdtwTimelineContent,
  DdtwTimelineItem,
  DdtwTimelinePoint,
  DdtwTimelineTime,
  DdtwTimelineTitle,
} from '@datadayrepos/ddtw-vue'
</script>
```
## Timeline with icons
`horizontal` prop makes timeline horizontal
<br>

<ddtw-timeline-example-horizontal />
```vue
<template>
  <ddtw-timeline horizontal>
    <ddtw-timeline-item>
      <ddtw-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          clip-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          fill-rule="evenodd"
        /></svg>
      </ddtw-timeline-point>
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2022
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
    <ddtw-timeline-item>
      <ddtw-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          clip-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          fill-rule="evenodd"
        /></svg>
      </ddtw-timeline-point>
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2022
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
    <ddtw-timeline-item>
      <ddtw-timeline-point>
        <svg
          aria-hidden="true"
          class="w-3 h-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            fill-rule="evenodd"
          />
        </svg>
      </ddtw-timeline-point>
      <ddtw-timeline-content>
        <ddtw-timeline-time>
          February 2022
        </ddtw-timeline-time>
        <ddtw-timeline-title>
          Application UI code in Tailwind CSS
        </ddtw-timeline-title>
        <ddtw-timeline-body>
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </ddtw-timeline-body>
      </ddtw-timeline-content>
    </ddtw-timeline-item>
  </ddtw-timeline>
</template>

<script setup>
import {
  DdtwTimeline,
  DdtwTimelineBody,
  DdtwTimelineContent,
  DdtwTimelineItem,
  DdtwTimelinePoint,
  DdtwTimelineTime,
  DdtwTimelineTitle,
} from '@datadayrepos/ddtw-vue'
</script>
```
