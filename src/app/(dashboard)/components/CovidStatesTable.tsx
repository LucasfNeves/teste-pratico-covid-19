import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table'
import { formatNumber } from '@/lib/formatNumber'
import { CovidStateReportData } from '@/entities/CovidStateReportData'
import { useDashboardContext } from '@/hooks/useDashboardContext'

/**
 * Componente de tabela para exibição de dados de COVID-19 por estado.
 * Utiliza os dados provenientes do contexto do dashboard para renderizar uma tabela com informações de casos confirmados, mortes e suspeitos.
 *
 * @returns {JSX.Element} A tabela de casos de COVID-19 por estado.
 */
export function CovidStatesTable() {
  // Acessa os dados dos relatórios de COVID do contexto
  const { allCovidReports } = useDashboardContext()

  return (
    <Table>
      <TableCaption className="text-zinc-200">
        Casos de COVID-19 por Estado Brasileiro
      </TableCaption>

      <TableHeader>
        <TableRow className="hover:bg-darkBlue-700 rounded-md">
          <TableHead className=" text-zinc-300">Estado</TableHead>
          <TableHead className=" text-zinc-300">Casos Confirmados</TableHead>
          <TableHead className=" text-zinc-300">Mortes</TableHead>
          <TableHead className=" text-zinc-300">Suspeitos</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {allCovidReports?.map((state: CovidStateReportData) => (
          <TableRow
            key={state.uid}
            className="hover:bg-darkBlue-700 rounded-md"
          >
            <TableCell className="font-medium text-zinc-200">
              {state.uf}
            </TableCell>

            <TableCell className="font-medium text-zinc-200">
              {formatNumber(state.cases)}
            </TableCell>

            <TableCell className="font-medium text-zinc-200">
              {formatNumber(state.deaths)}
            </TableCell>

            <TableCell className="font-medium text-zinc-200">
              {formatNumber(state.suspects)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
