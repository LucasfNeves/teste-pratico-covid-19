'use client'

import { Button } from '@/components/Button'
import { SelectInput } from '@/components/SelectInput'
import { PlusIcon } from 'lucide-react'
import { stateUfs } from '@/config/constants'
import Link from 'next/link'

interface CovidReportsHeaderProps {
  selectedState: string
  isCovidStateReportLoading: boolean
  handleStateChange: (value: string) => void
}

/**
 * Componente do cabeçalho para exibir o filtro e opções de cadastro de relatórios de COVID.
 *
 * @param {string} selectedState O estado atualmente selecionado.
 * @param {boolean} isCovidStateReportLoading Indica se os dados do relatório de COVID estão carregando.
 * @param {function} handleStateChange Função para manipular a mudança de estado no filtro.
 *
 * @returns {JSX.Element} O cabeçalho contendo o filtro por estado e opções de cadastro.
 */
export function CovidReportsHeader({
  selectedState,
  isCovidStateReportLoading,
  handleStateChange,
}: CovidReportsHeaderProps) {
  return (
    <header className="flex lg:justify-between gap-4 lg:flex-row flex-col w-full">
      {/* Exibe o botão de cadastro apenas em dispositivos móveis */}

      <Link href="/register-new-case" className="lg:hidden">
        <Button className="w-full lg:w-52">
          <PlusIcon className="h-4 w-4" />
          Cadastrar
        </Button>
      </Link>

      <div className="flex flex-col gap-4">
        <h1 className="text-lg lg:text-2xl font-semibold text-zinc-200 mb-4">
          Selecione o Estado para Ver o Relatório de COVID
        </h1>

        <div className="flex items-center justify-start gap-4 mt-auto w-full">
          {/* Componente de seleção para escolher o estado */}
          <SelectInput
            value={selectedState}
            onChange={handleStateChange}
            className="lg:w-52 sm:w-full"
            options={stateUfs}
            placeholder="Selecione o Estado"
            isLoading={isCovidStateReportLoading}
          />
        </div>
      </div>

      {/* Exibe o botão de cadastro apenas em dispositivos não móveis */}

      <Link href="/register-new-case" className="hidden lg:flex">
        <Button className="w-full lg:w-52">
          <PlusIcon className="h-4 w-4" />
          Cadastrar
        </Button>
      </Link>
    </header>
  )
}
