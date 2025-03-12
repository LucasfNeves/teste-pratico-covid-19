'use client'

import { useGetCovidReportsByState } from '@/hooks/services/useGetCovidReportsByState'
import { useEffect, useState } from 'react'

export function useCovidStateReportController() {
  const [selectedState, setSelectedState] = useState('sp')

  const {
    covidReportsByState,
    isCovidStateReportLoading,
    refetchCovidReportsByState,
  } = useGetCovidReportsByState({ state: selectedState })

  const handleStateChange = (value: string) => {
    setSelectedState(value)
  }

  useEffect(() => {
    refetchCovidReportsByState()
  }, [selectedState, refetchCovidReportsByState])

  return {
    selectedState,
    covidReportsByState,
    isCovidStateReportLoading,
    handleStateChange,
    refetchCovidReportsByState,
  }
}
