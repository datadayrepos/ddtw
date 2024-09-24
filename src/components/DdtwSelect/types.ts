export type InputSize = 'sm' | 'md' | 'lg'

export type OptionsType = {
  name: string
  value: string
}

export const validationStatusMap = {
  Error: 'error',
  Success: 'success',
} as const

export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap]
