import { Button } from '@/components/Button'
import { SelectInput } from '@/components/SelectInput'
import { useDashboardContext } from '@/hooks/useDashboardContext'
import { PlusIcon } from 'lucide-react'
import { useCovidStateReportController } from './useCovidStateReportController'
import { stateUfs } from '@/config/constants'
import { useIsMobile } from '@/hooks/useIsMobile'

export function CovidReportsHeader() {
  const { handleModalOpen } = useDashboardContext()

  const { selectedState, handleStateChange, isCovidStateReportLoading } =
    useCovidStateReportController()

  const isMobile = useIsMobile()

  return (
    <header className="flex lg:justify-between gap-4 lg:flex-row flex-col w-full">
      {isMobile && (
        <Button onClick={handleModalOpen} className="w-full lg:w-52">
          <PlusIcon className="h-4 w-4" />
          Cadastrar
        </Button>
      )}

      <div className="flex flex-col gap-4">
        <h1 className="text-lg lg:text-2xl font-semibold text-zinc-200 mb-4">
          Selecione o Estado para Ver o Relatório de COVID
        </h1>

        <div className="flex items-center justify-start gap-4 mt-auto w-full">
          <SelectInput
            value={selectedState}
            onChange={handleStateChange}
            className="lg:w-52 sm:w-full"
            options={stateUfs}
            placeholder="Selecione o Estado"
            isLoading={isCovidStateReportLoading}
          />
        </div>
      </div>

      {!isMobile && (
        <Button onClick={handleModalOpen} className="w-full lg:w-52">
          <PlusIcon className="h-4 w-4" />
          Cadastrar
        </Button>
      )}
    </header>
  )
}
