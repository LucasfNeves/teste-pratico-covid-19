import { cn } from '@/lib/cn'
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { CalendarIcon } from 'lucide-react'
import { formatDate } from '@/lib/formatDate'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { ControllerRenderProps } from 'react-hook-form'

interface InputDateProps {
  field: ControllerRenderProps<{ date: Date }, 'date'>
}

export function FilterDate({ field }: InputDateProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'lg:w-[240px] justify-start text-left font-normal bg-darkBlue-900 text-zinc-200 hover:bg-darkBlue-800 hover:text-zinc-100 w-full',
          )}
        >
          <CalendarIcon className="text-zinc-200" />
          {field.value ? (
            formatDate(field.value) // Formata e exibe a data, se houver
          ) : (
            <span className="text-zinc-200">Filtre por data</span>
          )}
        </Button>
      </PopoverTrigger>

      {/* Calendário dentro do Popover para seleção de data */}
      <PopoverContent className="w-auto p-0" align="start" side="bottom">
        <Calendar
          mode="single" // Modo de seleção de data única
          selected={field.value ?? undefined} // Define a data selecionada
          onSelect={(date) => date && field.onChange(date)} // Atualiza a data selecionada no campo
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
