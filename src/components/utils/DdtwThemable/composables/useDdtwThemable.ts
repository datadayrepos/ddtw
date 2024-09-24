import { type Ref, computed, inject, ref } from 'vue'
import type { FlowbiteTheme } from '../types'
import { DDTW_THEMABLE_INJECTION_KEY } from '../injection/config'

type UseDdtwThemableReturns = {
  backgroundClasses: Ref<string>
  borderClasses: Ref<string>
  color: Ref<FlowbiteTheme | undefined>
  disabledClasses: Ref<string>
  focusClasses: Ref<string>
  hoverClasses: Ref<string>
  isActive: Ref<boolean>
  textClasses: Ref<string>
}

type FlowbiteThemeMap = {
  background: string
  border: string
  disabled: string
  focus: string
  hover: string
  text: string
}

type FlowbiteThemes<T extends string = string> = Record<T, FlowbiteThemeMap>

const flowbiteThemeClasses: FlowbiteThemes<FlowbiteTheme> = {
  blue: {
    background: 'bg-blue-700 dark:bg-blue-600',
    border: 'border-blue-600 dark:border-blue-500',
    disabled: '',
    focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
    hover: 'hover:bg-blue-800 dark:hover:bg-blue-700',
    text: 'text-blue-600 dark:text-blue-500',
  },
  complimentary: {
    background: 'bg-complimentary-700 dark:bg-complimentary-600',
    border: 'border-complimentary-600 dark:border-complimentary-500',
    disabled: '',
    focus: 'focus:ring-complimentary-300 dark:focus:ring-complimentary-800',
    hover: 'hover:bg-complimentary-800 dark:hover:bg-complimentary-700',
    text: 'text-complimentary-600 dark:text-complimentary-500',
  },
  green: {
    background: 'bg-green-700 dark:bg-green-600',
    border: 'border-green-600 dark:border-green-500',
    disabled: '',
    focus: 'focus:ring-green-300 dark:focus:ring-green-800',
    hover: 'hover:bg-green-800 dark:hover:bg-green-700',
    text: 'text-green-600 dark:text-green-500',
  },
  pink: {
    background: 'bg-pink-700 dark:bg-pink-600',
    border: 'border-pink-600 dark:border-pink-500',
    disabled: '',
    focus: 'focus:ring-pink-300 dark:focus:ring-pink-900',
    hover: 'hover:bg-pink-800 dark:hover:bg-pink-700',
    text: 'text-pink-600 dark:text-pink-500',
  },
  primary: {
    background: 'bg-primary-700 dark:bg-primary-600',
    border: 'border-primary-600 dark:border-primary-500',
    disabled: '',
    focus: 'focus:ring-primary-300 dark:focus:ring-primary-800',
    hover: 'hover:bg-primary-800 dark:hover:bg-primary-700',
    text: 'text-primary-600 dark:text-primary-500',
  },
  purple: {
    background: 'bg-purple-700 dark:bg-purple-600',
    border: 'border-purple-600 dark:border-purple-500',
    disabled: '',
    focus: 'focus:ring-purple-300 dark:focus:ring-purple-900',
    hover: 'hover:bg-purple-800 dark:hover:bg-purple-700',
    text: 'text-purple-600 dark:text-purple-500',
  },
  red: {
    background: 'bg-red-700 dark:bg-red-600',
    border: 'border-red-600 dark:border-red-500',
    disabled: '',
    focus: 'focus:ring-red-300 dark:focus:ring-red-900',
    hover: 'hover:bg-red-800 dark:hover:bg-red-700',
    text: 'text-red-600 dark:text-red-500',
  },
}

export function useDdtwThemable(_theme?: FlowbiteTheme): UseDdtwThemableReturns {
  const theme = inject<Ref<FlowbiteTheme | null>>(DDTW_THEMABLE_INJECTION_KEY, ref(null))

  const themeName = computed(() => {
    return _theme || theme.value
  })

  const isActive = computed(() => !!theme?.value)

  const backgroundClasses = computed(() =>
    (!themeName.value)
      ? ''
      : flowbiteThemeClasses[themeName.value].background,
  )

  const borderClasses = computed(() =>
    (!themeName.value)
      ? ''
      : flowbiteThemeClasses[themeName.value].border,
  )

  const color = computed(() => theme?.value || undefined)

  const disabledClasses = computed(() =>
    (!themeName.value)
      ? ''
      : flowbiteThemeClasses[themeName.value].disabled,
  )

  const focusClasses = computed(() =>
    (!themeName.value)
      ? ''
      : flowbiteThemeClasses[themeName.value].focus,
  )

  const hoverClasses = computed(() =>
    (!themeName.value)
      ? ''
      : flowbiteThemeClasses[themeName.value].hover,
  )

  const textClasses = computed(() =>
    (!themeName.value)
      ? ''
      : flowbiteThemeClasses[themeName.value].text,
  )

  return {
    backgroundClasses,
    borderClasses,
    color,
    disabledClasses,
    focusClasses,
    hoverClasses,
    isActive,
    textClasses,
  }
}
