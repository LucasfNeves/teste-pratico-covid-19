'use client'

import { useDashboardContext } from '@/hooks/useDashboardContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function useCovidStatesFormController() {
  const FormSchema = z.object({
    date: z.date({
      required_error: 'Data é obrigatória',
    }),
  })

  type FormData = z.infer<typeof FormSchema>

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })

  const { handleFormSubmit, setAllCaseOfStateFilters, allCaseOfStateFilters } =
    useDashboardContext()

  /**
   * Função para limpar os filtros aplicados e resetar o formulário.
   */
  const clearFilters = () => {
    setAllCaseOfStateFilters({})
    reset()
  }

  return {
    control,
    handleSubmit,
    errors,
    clearFilters,
    handleFormSubmit,
    allCaseOfStateFilters,
  }
}
