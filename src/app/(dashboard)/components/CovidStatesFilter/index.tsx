'use client'

import { Controller } from 'react-hook-form'
import { InputMensagerError } from '@/components/inputMensagerError'
import { useCovidStatesFormController } from './useCovidStatesFormController'
import { FilterDate } from '@/components/FilterDate'
import { Trash } from 'lucide-react'

export function CovidStatesFilter() {
  const {
    allCaseOfStateFilters,
    clearFilters,
    control,
    errors,
    handleFormSubmit,
    handleSubmit,
  } = useCovidStatesFormController()

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)} // Envia os dados do formulário
      className="mt-10 flex items-start justify-center gap-4 w-full flex-col mb-4"
    >
      <div className="flex items-center gap-4 flex-col lg:flex-row w-full">
        {/* Campo de filtro por data */}
        <Controller
          control={control}
          name="date"
          render={({ field }) => <FilterDate field={field} />}
        />

        {/* Botão de filtro para aplicar os filtros selecionados */}
        <button
          className="text-white bg-blue-500 rounded-md px-6 h-10 hover:bg-blue-600 transition-all hover:duration-300 w-full lg:w-auto"
          type="submit"
          aria-label="Filtrar dados por data"
        >
          Filtrar
        </button>
      </div>

      {errors.date && (
        <InputMensagerError error={errors.date.message as string} />
      )}

      {/* Exibe o botão de limpar filtros se houver filtros aplicados */}
      {Object.keys(allCaseOfStateFilters ?? {}).length > 0 && (
        <button
          className="text-sm text-zinc-400 h-full flex items-end gap-2 hover:text-zinc-200 transition-all hover:duration-300"
          onClick={clearFilters} // Limpa os filtros aplicados
          aria-label="Limpar filtros aplicados"
        >
          <Trash className="h-4 w-4" />
          Limpar Filtros
        </button>
      )}
    </form>
  )
}
