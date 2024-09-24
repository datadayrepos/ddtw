<template>
  <component
    :is="tag"
    :class="simplifyTailwindClasses(classAttr, classes)"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { type PropType, computed, toRefs, useAttrs } from 'vue'
import { useDdtwThemableChildClasses } from './composables/useDdtwThemableChildClasses'
import type { FlowbiteTheme, ThemableChildrenApply } from '/@/components/utils/DdtwThemable/types'
import { simplifyTailwindClasses } from '/@/utils/simplifyTailwindClasses'

const props = defineProps({
  apply: {
    required: true,
    type: Array as PropType<ThemableChildrenApply[]>,
  },
  tag: {
    default: 'div',
    type: String,
  },
  theme: {
    default: undefined,
    type: String as PropType<FlowbiteTheme>,
  },
})

const attrs = useAttrs()

const { classes } = useDdtwThemableChildClasses(toRefs(props))

const classAttr = computed<string>(() => attrs.class as string || '')
</script>
