'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Controller } from 'react-hook-form'
import { SelectInput } from '@/components/SelectInput'
import { stateUfs } from '@/config/constants'
import { DatePickerInput } from '@/components/DatePickerInput'
import { useRegisterCovidStateModalController } from '../(dashboard)/components/RegisterCovidStateModal/useRegisterCovidStateModalController'

export default function RegisterCovidStatesModal() {
  const { control, errors, handleFormSubmit, handleSubmit } =
    useRegisterCovidStateModalController()

  return (
    <div className="flex flex-col items-center justify-center w-[60rem] h-[40rem] bg-darkBlue-800 rounded-md p-8 space-y-4 mx-auto">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex space-y-2 flex-col items-center justify-center ovarflow-y-auto w-full"
      >
        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <SelectInput
              value={field.value}
              onChange={field.onChange}
              error={errors.state?.message}
              className="hover:bg-darkBlue-700 transition-all hover:duration-300"
              options={stateUfs}
              placeholder="Selecione o Estado"
            />
          )}
        />

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePickerInput
              value={field.value}
              onChange={field.onChange}
              error={errors.recovered?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="cases"
          render={({ field }) => (
            <Input
              placeholder="Casos"
              value={field.value}
              onChange={field.onChange}
              error={errors.cases?.message}
              name="cases"
            />
          )}
        />

        <Controller
          control={control}
          name="confirmed"
          render={({ field }) => (
            <Input
              placeholder="Confirmados"
              value={field.value}
              onChange={field.onChange}
              error={errors.confirmed?.message}
              name="confirmed"
            />
          )}
        />

        <Controller
          control={control}
          name="deaths"
          render={({ field }) => (
            <Input
              placeholder="Óbitos"
              value={field.value}
              onChange={field.onChange}
              error={errors.deaths?.message}
              name="deaths"
            />
          )}
        />

        <Controller
          control={control}
          name="recovered"
          render={({ field }) => (
            <Input
              placeholder="Recuperados"
              value={field.value}
              onChange={field.onChange}
              error={errors.recovered?.message}
              name="recovered"
            />
          )}
        />

        <Button type="submit">Registrar</Button>
      </form>
    </div>
  )
}
