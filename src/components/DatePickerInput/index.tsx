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
import { Button } from '../ui/button'

interface DatePickerInputProps {
  className?: string
  value: Date
  onChange: (date: Date) => void
  error?: string
  placeholder?: string
}

export const DatePickerInput = forwardRef<
  HTMLButtonElement,
  DatePickerInputProps
>(({ value, onChange, error }, ref) => {
  const { handleDateChange, selectedDate } = useDataPickerInputController({
    value,
    onChange,
  })

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative w-full">
        {/* Label que se move quando há valor selecionado */}

        <Popover>
          <PopoverTrigger ref={ref} className="w-full">
            <Button
              type="button"
              variant="outline"
              className={cn(
                'relative h-[3.25rem] w-full mt-4 rounded-lg border border-neutral-200 bg-transparent px-[12px] pb-[2px] pt-5 text-start text-neutral-200 outline-none placeholder-shown:pt-0 hover:bg-darkBlue-700 hover:text-zinc-200 transition-all duration-300',
                selectedDate ? 'text-zinc-200' : 'text-neutral-500',
              )}
            >
              <span className="pointer-events-none absolute left-3 top-2 text-xs text-neutral-200 transition-all">
                Data
              </span>

              <span className="text-zinc-200 w-full text-start">
                {selectedDate
                  ? formatDate(new Date(selectedDate))
                  : 'Selecione uma data'}
              </span>
            </Button>
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
      </div>

      {/* Exibe a mensagem de erro, caso haja */}
      {error && <InputMensagerError error={error} />}
    </div>
  )
})

DatePickerInput.displayName = 'DatePickerInput'
