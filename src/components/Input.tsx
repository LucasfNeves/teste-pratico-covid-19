import { NumericFormat } from 'react-number-format'
import React, { forwardRef } from 'react'
import { InputMensagerError } from './inputMensagerError'

interface InputCurrencyProps {
  value: number | undefined
  onChange: (value: number) => void
  onBlur?: () => void
  name: string
  error?: string
  placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputCurrencyProps>(
  ({ value, name, onChange, error, placeholder, ...props }, ref) => {
    return (
      <label htmlFor={name} className="flex flex-col w-full">
        {placeholder && (
          <span className="mb-1 text-zinc-200">{placeholder}</span>
        )}
        <NumericFormat
          maxLength={16}
          value={value}
          placeholder="00"
          onValueChange={({ floatValue }) => onChange(floatValue ?? 0)}
          name={name}
          getInputRef={ref}
          thousandSeparator="."
          decimalSeparator=","
          className="h-[3.25rem] w-full rounded-lg px-2 py-2 text-zinc-200 bg-darkBlue-600 border border-zinc-200 outline-none placeholder:text-zinc-200"
          {...props}
        />
        {error && (
          <div className="mt-1">
            <InputMensagerError error={error} />
          </div>
        )}
      </label>
    )
  },
)

Input.displayName = 'Input'
