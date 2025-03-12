import { ComponentProps } from 'react'

import { Spinner } from './Spinner'
import { cn } from '@/lib/cn'

interface ButtonProps extends ComponentProps<'button'> {
  className?: string
  disabled?: boolean
  children: string | React.ReactNode
  isLoading?: boolean
}

export function Button({
  children,
  className,
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={cn(
        'flex h-[3.25rem] w-full items-center justify-center rounded-md bg-primaryBlue-500 font-medium text-white hover:bg-primaryBlue-400 hover:transition-all hover:duration-300 disabled:cursor-not-allowed disabled:text-gray-400 hover:disabled:bg-primaryBlue-500 hover:disabled:opacity-100 hover:disabled:transition-none gap-2',
        className,
      )}
      {...props}
    >
      {isLoading ? <Spinner className="h-6 w-6" /> : children}
    </button>
  )
}
