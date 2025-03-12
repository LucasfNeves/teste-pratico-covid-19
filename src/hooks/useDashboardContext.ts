'use client'

import { DashboardContext } from '@/context/DashboardContext'
import { useContext } from 'react'

export function useDashboardContext() {
  return useContext(DashboardContext)
}
