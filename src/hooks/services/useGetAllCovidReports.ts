import { CovidStateSummary } from '@/entities/CovidStateSummary '
import {
  getAllCovidReports,
  GetAllCovidDataFilters,
} from '@/servers/getAllCovidReports'
import { useQuery } from '@tanstack/react-query'

export function useGetAllCovidReports({ date }: GetAllCovidDataFilters) {
  const { isError, isFetching, data, refetch } = useQuery<
    CovidStateSummary[],
    Error
  >({
    queryKey: ['cases', date],
    queryFn: async () =>
      getAllCovidReports({
        date,
      }),
  })

  return {
    allCovidReports: data ?? [],
    allCovidReportsError: isError,
    allCovidReportsLoading: isFetching,
    refetchAllCovidReports: refetch,
  }
}
