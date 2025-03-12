import { CovidStateSummary } from '@/entities/CovidStateSummary '
import { httpClient } from './httpClient'

type GetAllCovidReportsResponse = {
  data: CovidStateSummary[]
}

export interface GetAllCovidDataFilters {
  date?: string
}

export async function getAllCovidReports({ date }: GetAllCovidDataFilters) {
  const url = date ? `/brazil/${date}` : ''

  const { data } = await httpClient.get<GetAllCovidReportsResponse>(url)
  return data.data
}
