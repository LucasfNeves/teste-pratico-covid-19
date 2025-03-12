'use client'

import { useRegisterCovidStateModalController } from './useRegisterCovidStateModalController'
import Register from '@/assets/register.svg'
import Image from 'next/image'
import { RegisterNewCaseForm } from './RegisterNewCaseForm'

export default function RegisterCovidStatesModal() {
  const { control, errors, handleFormSubmit } =
    useRegisterCovidStateModalController()

  return (
    <div className=" grid lg:grid-cols-2 gap-6 w-full gr-cols-1">
      <div className="h-full w-full flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl text-white text-strat w-full max-w-[38rem]">
          Registrar Novo Caso
        </h2>
        <div className="flex flex-col items-center justify-center w-full max-w-[38rem] h-full bg-darkBlue-700 rounded-md p-8 space-y-4 mx-auto">
          <RegisterNewCaseForm
            control={control}
            errors={errors}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 p-4">
        <Image src={Register} alt="Register Covid State" height={200} />

        <p className=" text-zinc-200 text-center">
          Registre os casos de COVID-19 por estado, preencha o formulário
          completo e envie sua resposta!
        </p>
      </div>
    </div>
  )
}
