'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

export function useRegisterCovidStateModalController() {
  const FormSchema = z.object({
    date: z.date({
      required_error: 'A data é obrigatória.',
    }),
    state: z
      .string({ required_error: 'O campo é obrigatório' })
      .nonempty({ message: 'O campo não pode estar vazio' }),
    cases: z
      .number({ required_error: 'O campo é obrigatório' })
      .int({ message: 'O campo deve ser um número inteiro' }),
    confirmed: z
      .number({ required_error: 'O campo é obrigatório' })
      .int({ message: 'O campo deve ser um número inteiro' }),
    deaths: z
      .number({ required_error: 'O campo é obrigatório' })
      .int({ message: ' O campo deve ser um número inteiro' }),
    recovered: z
      .number({ required_error: 'O campo é obrigatório' })
      .int({ message: 'O campo deve ser um número inteiro' }),
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

  const handleFormSubmit = handleSubmit((data: FormData) => {
    toast.success('Registro criado com sucesso')

    const formateDate = data.date.toISOString()

    const newData = {
      ...data,
      date: formateDate,
    }

    reset()
    console.log(JSON.stringify(newData, null, 2))
  })

  return {
    control,
    handleSubmit,
    errors,
    handleFormSubmit,
  }
}
