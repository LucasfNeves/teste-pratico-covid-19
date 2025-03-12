'use client'

import { useRegisterCovidStateModalController } from './useRegisterCovidStateModalController' // Hook para controlar o modal de registro de casos COVID
import Register from '@/assets/register.svg' // Imagem de registro (SVG) usada no modal
import Image from 'next/image' // Componente Image do Next.js para otimização de imagens
import { RegisterNewCaseForm } from './RegisterNewCaseForm' // Componente do formulário para registrar um novo caso de COVID

/**
 * Componente `RegisterCovidStatesModal` é um modal para registrar novos casos de COVID por estado.
 * Ele exibe um formulário para o usuário preencher os detalhes do caso e envia os dados em formato JSON no console.log.
 *
 * @component
 * @example
 * return (
 *   <RegisterCovidStatesModal />
 * )
 */
export default function RegisterCovidStatesModal() {
  const { control, errors, handleFormSubmit } =
    useRegisterCovidStateModalController()

  return (
    <div className="grid lg:grid-cols-2 gap-6 w-full gr-cols-1">
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

        <p className="text-zinc-200 text-center">
          Registre os casos de COVID-19 por estado, preencha o formulário
          completo e envie sua resposta!
        </p>
      </div>
    </div>
  )
}
