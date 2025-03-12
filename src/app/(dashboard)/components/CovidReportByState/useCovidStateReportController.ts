'use client'

import { useGetCovidReportsByState } from '@/hooks/services/useGetCovidReportsByState'
import { useState } from 'react'

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

  return {
    selectedState,
    covidReportsByState,
    isCovidStateReportLoading,
    handleStateChange,
    refetchCovidReportsByState,
  }
}
