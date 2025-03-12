'use client'

import { CovidStateReportData } from '@/entities/CovidStateReportData'
import { useGetAllCovidReports } from '@/hooks/services/useGetAllCovidReports'
import { formatDate } from '@/lib/formatDate'
import { GetAllCovidDataFilters } from '@/servers/getAllCovidReports'

import { createContext, useState } from 'react'

interface DashboardContextType {
  allCovidReports: CovidStateReportData[]
  allCovidReportsLoading: boolean
  allCaseOfStateFilters: GetAllCovidDataFilters
  handleFormSubmit: (data: { date: Date }) => void
  setAllCaseOfStateFilters: (filters: GetAllCovidDataFilters) => void
}

interface DashboardProviderProps {
  children: React.ReactNode
}

// Criando o contexto para o Dashboard
export const DashboardContext = createContext({} as DashboardContextType)

/**
 * Provedor de contexto para o Dashboard.
 *
 * Esse provedor gerencia o estado global relacionado aos relatórios de COVID-19 e os filtros aplicados.
 * os componentes filhos por meio do `DashboardContext`.
 *
 * @param {React.ReactNode} children Componente filho a ser renderizado dentro do contexto.
 * @returns {JSX.Element} O componente DashboardProvider que envolve os filhos e fornece o contexto.
 */
export function DashboardProvider({ children }: DashboardProviderProps) {
  const [allCaseOfStateFilters, setAllCaseOfStateFilters] =
    useState<GetAllCovidDataFilters>({})

  const { allCovidReports, allCovidReportsLoading } = useGetAllCovidReports(
    allCaseOfStateFilters,
  )

  /**
   * Função chamada ao submeter o formulário.
   * Formata a data do filtro e a envia para atualização dos relatórios de COVID.
   */
  const handleFormSubmit = (data: { date: Date }) => {
    const formattedDate = data.date ? formatDate(data.date) : 'No date selected'
    const dateReversed = formattedDate.split('/').reverse().join('')
    const dateFormattedToURL = dateReversed.replace(/\D/g, '')

    setAllCaseOfStateFilters({
      date: dateFormattedToURL,
    })
  }

  return (
    <DashboardContext.Provider
      value={{
        allCovidReports,
        allCovidReportsLoading,
        handleFormSubmit,
        allCaseOfStateFilters,
        setAllCaseOfStateFilters,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
