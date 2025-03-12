import { httpClient } from './httpClient'
import { CovidCountryData } from '@/entities/CovidCountryData'

export type GetCovidReportsByCountryResponse = {
  data: CovidCountryData[]
}

export async function getCovidReportsByCountry() {
  const { data } =
    await httpClient.get<GetCovidReportsByCountryResponse>(`/countries`)
  return data.data
}
