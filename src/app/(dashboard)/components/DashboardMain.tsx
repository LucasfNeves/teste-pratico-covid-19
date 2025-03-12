'use client'

import { CovidReportByStateSelector } from '@/app/(dashboard)/components/CovidReportByState/index.tsx'
import { Spinner } from '@/components/Spinner'
import { CovidStatesTable } from './CovidStatesTable'
import Image from 'next/image'
import NotFound from '@/assets/not-found.svg'
import { CovidStatesFilter } from './CovidStatesFilter'
import { useDashboardContext } from '@/hooks/useDashboardContext'

/**
 * Componente principal do dashboard que exibe os relatórios de COVID-19.
 * O componente controla a exibição do seletor de estado, o formulário de filtros,
 * a tabela de dados e a exibição de um estado de carregamento ou mensagem de erro.
 *
 * @returns {JSX.Element} O conteúdo principal do dashboard, incluindo filtros e dados.
 */
export function DashboardMain() {
  // Acessa os dados de relatórios e o estado de carregamento do contexto
  const { allCovidReports, allCovidReportsLoading } = useDashboardContext()

  return (
    <div className="flex items-center justify-center flex-col">
      <CovidReportByStateSelector />

      <CovidStatesFilter />

      <main className="w-full">
        {allCovidReportsLoading ? (
          <div className="flex items-center justify-center w-full h-60 ">
            <Spinner />
          </div>
        ) : allCovidReports && allCovidReports.length > 0 ? (
          // Exibe a tabela com os dados de COVID quando há dados disponíveis
          <CovidStatesTable />
        ) : (
          // Exibe uma mensagem e imagem quando não há dados
          <div className="text-zinc-200 flex flex-col items-center justify-center gap-6 bg-darkBlue-800 p-6 rounded-md min-h-60">
            <p className="text-center">
              Nenhum caso de COVID-19 encontrado para a data selecionada.
            </p>
            <Image src={NotFound} alt="Not Found" height={150} />
          </div>
        )}
      </main>
    </div>
  )
}
