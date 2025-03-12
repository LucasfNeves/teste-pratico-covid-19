import { CovidStateReportData } from '@/entities/CovidStateReportData'
import {
  getCovidReportsByState,
  GetCovidReportsByStateParams,
} from '@/servers/getCovidReportsByState'
import { useQuery } from '@tanstack/react-query'

export function useGetCovidReportsByState({
  state,
}: GetCovidReportsByStateParams) {
  const { isError, isFetching, data, refetch } = useQuery<
    CovidStateReportData,
    Error
  >({
    queryKey: ['cases-state', state],
    queryFn: async () => getCovidReportsByState({ state }),
    enabled: !!state, // Só habilita a consulta se o estado estiver presente
  })

  return {
    covidReportsByState: data,
    hasCovidStateReportError: isError,
    isCovidStateReportLoading: isFetching,
    refetchCovidReportsByState: refetch,
  }
}
