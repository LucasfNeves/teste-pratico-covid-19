import { CovidCountryData } from '@/entities/CovidCountryData'
import { getCovidReportsByCountry } from '@/servers/getCovidReportsByCountry'
import { useQuery } from '@tanstack/react-query'

export function useGetCovidReportsByCountry() {
  const { isError, isFetching, data, refetch } = useQuery<
    CovidCountryData[],
    Error
  >({
    queryKey: ['cases-countries'],
    queryFn: async () => getCovidReportsByCountry(),
  })

  return {
    covidReportsByCountry: data ?? [],
    covidReportsByCountryError: isError,
    covidReportsByCountryLoading: isFetching,
    refetchCovidReportsByCountry: refetch,
  }
}
