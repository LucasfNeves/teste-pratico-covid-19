import { useCovidStateReportController } from './useCovidStateReportController'
import { CovidStateReportCard } from './CovidSReportsCard '
import Searching from '@/assets/searching.svg'
import Image from 'next/image'
import { RegisterCovidStatesModal } from '../RegisterCovidStateModal'
import { CovidReportsHeader } from './CovidReportsHeader'

/**
 * Componente que permite ao usuário selecionar um estado e visualizar o relatório de COVID-19 para esse estado.
 *
 * Este componente exibe um seletor para que o usuário escolha um estado, e em seguida exibe um relatório
 * detalhado sobre a situação do COVID-19 para esse estado. Enquanto os dados estão sendo carregados, um
 * ícone de "searching" é exibido. O componente utiliza o hook `useCovidStateReportController` para gerenciar
 * o estado e o carregamento dos dados.
 *
 * @returns {JSX.Element} O componente que exibe o seletor de estado e o relatório de COVID-19.
 */

export function CovidReportByStateSelector() {
  const { covidReportsByState, isCovidStateReportLoading } =
    useCovidStateReportController()

  const covidReports = covidReportsByState ?? null

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <CovidReportsHeader />

      <section aria-labelledby="covid-report-section" className="flex gap-4">
        <div className="flex items-start justify-center w-full gap-4 flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 min-h-60 p-6">
            <p className="text-md text-zinc-400 mb-4 text-center">
              Veja os resultados de COVID para o estado selecionado e obtenha
              informações detalhadas sobre a situação atual.
            </p>

            <Image src={Searching} alt="Searching" width={150} height={150} />
          </div>
          <CovidStateReportCard
            isLoading={isCovidStateReportLoading}
            covidReports={covidReports}
          />
        </div>
      </section>

      <RegisterCovidStatesModal />
    </div>
  )
}
