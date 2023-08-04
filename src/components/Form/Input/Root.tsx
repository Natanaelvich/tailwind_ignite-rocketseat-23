import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Root(props: RootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        props.className,
      )}
    />
  )
}