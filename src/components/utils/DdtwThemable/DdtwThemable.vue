<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, toRef } from 'vue'
import type { FlowbiteTheme } from './types'
import { DDTW_THEMABLE_INJECTION_KEY } from './injection/config'

type IDdtwThemableProps = {
  theme?: FlowbiteTheme
}

const props = withDefaults(defineProps<IDdtwThemableProps>(), {
  theme: 'blue',
})

provide(DDTW_THEMABLE_INJECTION_KEY, toRef(props, 'theme'))
</script>
