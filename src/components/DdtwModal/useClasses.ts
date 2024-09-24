import type { ModalPosition, ModalSize } from './types'

export const modalSizeClasses: Record<ModalSize, string> = {
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  'lg': 'max-w-lg',
  'md': 'max-w-md',
  'sm': 'max-w-sm',
  'xl': 'max-w-xl',
  'xs': 'max-w-xs',
}

export const modalPositionClasses: Record<ModalPosition, string> = {
  'bottom-center': 'self-end justify-self-center',
  'bottom-end': 'self-end justify-self-end',
  'bottom-start': 'self-end justify-self-start',
  'center': 'self-center justify-self-center',
  'center-end': 'self-center justify-self-end',
  'center-start': 'self-center justify-self-start',
  'top-center': 'self-start justify-self-center',
  'top-end': 'self-start justify-self-end',
  'top-start': 'self-start justify-self-start',
}
