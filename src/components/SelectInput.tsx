import { forwardRef } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { cn } from '@/lib/utils'
import { InputMensagerError } from './inputMensagerError'

interface SelectInputProps {
  className?: string
  error?: string
  placeholder?: string
  options: {
    value: string
    label: string
  }[]
  value: string
  onChange: (value: string) => void
  isLoading?: boolean
}

// O componente SelectInput é envolto em forwardRef para permitir o uso de refs externas
export const SelectInput = forwardRef<HTMLButtonElement, SelectInputProps>(
  (
    {
      placeholder,
      options,
      className,
      error,
      onChange,
      value,
      isLoading,
    }: SelectInputProps,
    ref, // Ref é passada aqui para o SelectTrigger
  ) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="relative w-full">
          <label
            className={cn(
              'pointer-events-none absolute left-4 top-1/2 z-[50] -translate-y-1/2 text-zinc-200', // Estilo base da label
              value && 'left-[10px] top-1 translate-y-0 text-xs transition-all', // Quando valor é selecionado, ajusta a posição da label
            )}
          >
            {placeholder}
          </label>

          <Select value={value} onValueChange={onChange}>
            <SelectTrigger
              disabled={isLoading} // Desabilita o trigger quando está carregando
              ref={ref} // Passando a ref para o botão
              className={cn(
                'relative h-[3.25rem] w-full overflow-hidden rounded-lg border border-zinc-200 hover:bg-darkBlue-800 px-2.5 py-5 text-left outline-none transition-all',
                className || '', // Adicionando qualquer classe extra passada
                isLoading && 'cursor-not-allowed', // Alterando o cursor quando está carregando
                'text-zinc-200',
              )}
            >
              <SelectValue>
                {options.find((option) => option.value === value)?.label || ''}
              </SelectValue>
            </SelectTrigger>

            <SelectContent className="rounded-2xl border border-gray-100 bg-white shadow-lg z-[999]">
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="rounded-lg p-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-100 data-[state=checked]:font-bold"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {error && <InputMensagerError error={error} />}
      </div>
    )
  },
)

SelectInput.displayName = 'SelectInput'
