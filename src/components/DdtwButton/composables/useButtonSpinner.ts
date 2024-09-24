import { type Ref, computed } from 'vue'
import type { ButtonSize, ButtonVariant } from '../types' // ButtonGradient,
import type { SpinnerColor, SpinnerSize } from './../../DdtwSpinner/types'

export type UseButtonSpinnerProps = {
  outline: Ref<boolean>
  size: Ref<ButtonSize>
  color: Ref<ButtonVariant>
  // gradient: Ref<ButtonGradient | null>
}

export function useButtonSpinner(props: UseButtonSpinnerProps): { size: Ref<SpinnerSize>, color: Ref<SpinnerColor> } {
  const btnSizeSpinnerSizeMap: Record<ButtonSize, SpinnerSize> = {
    lg: '5',
    md: '4',
    sm: '3',
    xl: '6',
    xs: '2.5',
  }

  const size = computed<SpinnerSize>(() => btnSizeSpinnerSizeMap[props.size.value])

  const color = computed<SpinnerColor>(() => {
    if (!props.outline.value)
      return 'white'

    /*
    if (props.gradient.value) {
      if (props.gradient.value.includes('purple')) {
        return 'purple'
      } else if (props.gradient.value.includes('blue')) {
        return 'blue'
      } else if (props.gradient.value.includes('pink')) {
        return 'pink'
      } else if (props.gradient.value.includes('red')) {
        return 'red'
      }
      return 'white'
    }
*/
    if (['alternative', 'dark', 'light'].includes(props.color.value)) {
      return 'white'
    }
    else if (props.color.value === 'default') {
      return 'blue'
    }
    return props.color.value as SpinnerColor
  })

  return {
    color,
    size,
  }
}
