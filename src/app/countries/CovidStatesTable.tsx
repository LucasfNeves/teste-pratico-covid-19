import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import { formatNumber } from '@/lib/formatNumber'
import { CovidCountryData } from '@/entities/CovidCountryData'

interface CovidCountriesTableProps {
  covidReportsByCountry: CovidCountryData[]
}

export function CovidCountriesTable({
  covidReportsByCountry,
}: CovidCountriesTableProps) {
  // Acessa os dados dos relatórios de COVID do contexto

  return (
    <Table>
      <TableCaption className="text-zinc-200">
        Casos de COVID-19 por País
      </TableCaption>

      <TableHeader>
        <TableRow className="hover:bg-darkBlue-700 rounded-md">
          <TableHead className=" text-zinc-300">Países</TableHead>
          <TableHead className=" text-zinc-300">Casos Confirmados</TableHead>
          <TableHead className=" text-zinc-300">Mortos</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {covidReportsByCountry?.map((state: CovidCountryData) => (
          <TableRow
            key={state.country}
            className="hover:bg-darkBlue-700 rounded-md"
          >
            <TableCell className="font-medium text-zinc-200">
              {state.country}
            </TableCell>

            <TableCell className="font-medium text-zinc-200">
              {formatNumber(state.confirmed)}
            </TableCell>

            <TableCell className="font-medium text-zinc-200">
              {formatNumber(state.deaths)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
