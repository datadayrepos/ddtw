<template>
  <component
    :is="wrapperType"
    :class="cardClasses"
    :href="href"
  >
    <img
      v-if="imgSrc"
      :alt="imgAlt"
      :class="horizontalImageClasses"
      :src="imgSrc"
      class="rounded-t-lg"
    >
    <div>
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { type PropType, computed, toRefs } from 'vue'
import { useCardsClasses } from './composables/useCardClasses'
import type { CardsVariant } from './types'

const props = defineProps({
  href: {
    default: '',
    type: String,
  },
  imgAlt: {
    default: '',
    type: String,
  },
  imgSrc: {
    default: '',
    type: String,
  },
  variant: {
    default: 'default',
    type: String as PropType<CardsVariant>,
  },
})

const { cardClasses, horizontalImageClasses } = useCardsClasses(toRefs(props))
const wrapperType = computed(() => props.href ? 'a' : 'div')
</script>
