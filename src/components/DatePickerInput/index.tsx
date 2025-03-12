import { forwardRef } from 'react'
import { useDataPickerInputController } from './useDatePickerInputController'
import { InputMensagerError } from '../inputMensagerError'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/cn'
import { Calendar } from '../ui/calendar'
import { formatDate } from '@/lib/formatDate'

interface DatePickerInputProps {
  className?: string
  value: Date
  onChange: (date: Date) => void
  error?: string
}

/**
 * Componente `DatePickerInput` renderiza um campo de entrada de data com um calendário em um popover.
 * Ele permite ao usuário selecionar uma data e exibe a data formatada. Se houver um erro, ele será exibido abaixo do campo.
 *
 * @component
 * @example
 * <DatePickerInput value={new Date()} onChange={(date) => console.log(date)} />
 */
export const DatePickerInput = forwardRef<
  HTMLButtonElement,
  DatePickerInputProps
>(({ value, onChange, error }, ref) => {
  const { handleDateChange, selectedDate } = useDataPickerInputController({
    value,
    onChange,
  })

  return (
    <div className="relative flex w-full flex-col gap-2 ">
      <Popover>
        <PopoverTrigger
          ref={ref}
          className={cn(
            'relative h-[3.25rem] w-full mt-4 rounded-lg border border-neutral-200 bg-transparent px-[12px] pb-[2px] pt-5 text-start text-neutral-200 outline-none placeholder-shown:pt-0',
          )}
        >
          <span className="pointer-events-none absolute left-4 top-2 text-xs text-neutral-200 transition-all">
            Data
          </span>

          <span>
            {selectedDate
              ? formatDate(new Date(selectedDate))
              : 'Selecione uma data'}
          </span>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="w-fit border-none bg-white p-0 z-[999]"
        >
          <Calendar
            mode="single" // Modo de seleção de data única
            selected={new Date(selectedDate)} // Define a data selecionada
            onSelect={(date) => {
              if (date) handleDateChange(date)
            }} // Atualiza a data selecionada no campo
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {error && <InputMensagerError error={error} />}
    </div>
  )
})

DatePickerInput.displayName = 'DatePickerInput'
