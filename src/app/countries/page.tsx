'use client'

import { useGetCovidReportsByCountry } from '@/hooks/services/useGetCovidReportsByCountry'
import { CovidCountriesTable } from './CovidStatesTable'
import { Spinner } from '@/components/Spinner'

export default function Countries() {
  // Usando o hook para obter os relatórios de COVID por país
  const { covidReportsByCountry, covidReportsByCountryLoading } =
    useGetCovidReportsByCountry()

  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <h1 className="text-lg lg:text-2xl font-semibold text-zinc-200 mb-4">
        Casos de COVID-19 por País
      </h1>

      {covidReportsByCountryLoading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Spinner />
        </div>
      ) : (
        <CovidCountriesTable covidReportsByCountry={covidReportsByCountry} />
      )}
    </div>
  )
}
