import {
  BriefcaseMedicalIcon,
  Cross,
  TriangleAlert,
  XCircle,
} from 'lucide-react'
import { formatNumber } from '@/lib/formatNumber'
import { CovidStateReportData } from '@/entities/CovidStateReportData'
import { Spinner } from '../../../../components/Spinner'

/**
 * Componente que exibe o relatório de COVID-19 de um estado.
 *
 * Este componente exibe informações detalhadas sobre os casos de COVID-19, como o número de casos,
 * óbitos, suspeitos e descartados para um determinado estado. Ele também inclui a data da última atualização
 * e um spinner de carregamento enquanto os dados estão sendo recuperados.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {CovidStateReportData | null} props.covidReports - Os dados do relatório de COVID-19 para um estado. Pode ser nulo caso os dados não estejam disponíveis.
 * @param {boolean} [props.isLoading=false] - Um valor opcional para indicar se os dados estão sendo carregados. O padrão é `false`.
 *
 * @returns {JSX.Element} Um elemento JSX que exibe o relatório de COVID-19 ou um spinner de carregamento.
 */
interface CovidStateReportCardProps {
  covidReports: CovidStateReportData | null
  isLoading?: boolean
}

export function CovidStateReportCard({
  covidReports,
  isLoading = false,
}: CovidStateReportCardProps) {
  return (
    <article className="bg-darkBlue-700 shadow-lg rounded-lg px-4 min-h-60 p-6 w-full lg:max-w-[37.5rem] lg:min-w-[25rem] text-zinc-200 overflow-auto flex space-y-4 flex-col items-center justify-center">
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <header className="mb-4 flex items-center justify-center gap-2">
            <p className="text-xl font-medium">{covidReports?.state}</p>
            <p> - </p>
            <p className="text-xl">{covidReports?.uf}</p>
          </header>

          <section className="flex flex-col items-center gap-4 text-zinc-200 text-base w-full lg:flex-row lg:justify-center lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-2">
                <BriefcaseMedicalIcon className="h-5 w-5 text-red-600" />
                <strong>Casos:</strong> {formatNumber(covidReports?.cases)}
              </span>

              <span className="flex items-center gap-2">
                <Cross className="h-5 w-5 text-blue-600" />
                <strong>Óbitos:</strong> {formatNumber(covidReports?.deaths)}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-2">
                <TriangleAlert className="h-5 w-5 text-orange-600" />
                <strong>Suspeitos:</strong>{' '}
                {formatNumber(covidReports?.suspects)}
              </span>

              <span className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-green-600" />
                <strong>Descartados:</strong>{' '}
                {formatNumber(covidReports?.refuses)}
              </span>
            </div>
          </section>

          <footer className="mt-4 text-sm text-zinc-400 text-center flex gap-2 items-center justify-center">
            <p>Última atualização:</p>
            <time dateTime={covidReports?.datetime}>
              {new Date(covidReports?.datetime ?? new Date()).toLocaleString()}
            </time>
          </footer>
        </>
      )}
    </article>
  )
}
