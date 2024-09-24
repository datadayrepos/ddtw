import { twMerge } from 'tailwind-merge'

export function useMergeClasses(componentClasses: string | string[]): string {
  return twMerge(componentClasses)
}
