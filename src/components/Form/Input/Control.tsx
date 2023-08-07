import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Control(props: ControlProps) {
  return (
    <div
    {...props}
    className={twMerge(
      'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none dark:border-zinc-700 dark:bg-zinc-800',
      'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
      props.className,
    )}
  />
  )
}