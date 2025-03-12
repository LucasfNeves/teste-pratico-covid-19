import { Button } from '@/components/Button'
import { NumberInput } from '@/components/NumberInput'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { SelectInput } from '@/components/SelectInput'
import { stateUfs } from '@/config/constants'
import { DatePickerInput } from '@/components/DatePickerInput'

/**
 * Interface que define os valores do formulário para registrar casos de COVID.
 *
 * @interface FormValues
 */
interface FormValues {
  state: string
  date: Date
  cases: number
  confirmed: number
  deaths: number
  recovered: number
}

interface RegisterNewCaseFormProps {
  control: Control<FormValues>
  handleFormSubmit: () => void
  errors: FieldErrors<FormValues>
}

/**
 * Componente `RegisterNewCaseForm` é um formulário utilizado para registrar novos casos de COVID-19.
 * Ele inclui campos para selecionar o estado, a data, e inserir números de casos confirmados, óbitos, e recuperados.
 *
 * @component
 * @example
 * return (
 *   <RegisterNewCaseForm control={control} handleFormSubmit={handleFormSubmit} errors={errors} />
 * )
 */
export function RegisterNewCaseForm({
  control,
  handleFormSubmit,
  errors,
}: RegisterNewCaseFormProps) {
  return (
    <form
      onSubmit={handleFormSubmit}
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
          <NumberInput
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
          <NumberInput
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
          <NumberInput
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
          <NumberInput
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
  )
}
