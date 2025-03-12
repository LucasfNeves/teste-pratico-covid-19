import { CovidStateReportData } from '@/entities/CovidStateReportData'
import { httpClient } from './httpClient'

export type GetCovidReportsByStateResponse = CovidStateReportData

export interface GetCovidReportsByStateParams {
  state: string
}

export async function getCovidReportsByState({
  state,
}: GetCovidReportsByStateParams) {
  console.log(state)
  const { data } = await httpClient.get<GetCovidReportsByStateResponse>(
    `/brazil/uf/${state}`,
  )
  return data
}
